import { supabase } from "./supabaseClient.js";

const TABLE = "promotions";
const BUCKET = "site-images";

export async function getAllPromotionsAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getPromotionById(id) {
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}

export async function createPromotion(form) {
  const { error } = await supabase.from(TABLE).insert(form);
  if (error) throw error;
}

export async function updatePromotion(id, form) {
  const { error } = await supabase.from(TABLE).update(form).eq("id", id);
  if (error) throw error;
}

export async function deletePromotion(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

/** Toggle a promotion's active state directly from the list view. */
export async function setPromotionActive(id, isActive) {
  const { error } = await supabase.from(TABLE).update({ is_active: isActive }).eq("id", id);
  if (error) throw error;
}

/** Uploads a promo image to Storage, same bucket as the gallery. */
export async function uploadPromotionFile(file) {
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-");
  const path = `promotions/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}