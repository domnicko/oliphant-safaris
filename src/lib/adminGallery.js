import { supabase } from "./supabaseClient.js";

const TABLE = "gallery_images";
const BUCKET = "site-images";

export async function getAllGalleryImagesAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function createGalleryImage(form) {
  const { error } = await supabase.from(TABLE).insert(form);
  if (error) throw error;
}

export async function updateGalleryImage(id, form) {
  const { error } = await supabase.from(TABLE).update(form).eq("id", id);
  if (error) throw error;
}

export async function deleteGalleryImage(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

/**
 * Uploads a File object (from an <input type="file">) to the site-images
 * Storage bucket under gallery/, and returns its public URL.
 */
export async function uploadGalleryFile(file) {
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-");
  const path = `gallery/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}