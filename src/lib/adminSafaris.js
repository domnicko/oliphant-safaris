import { supabase } from "./supabaseClient.js";

const TABLE = "safaris";
const BUCKET = "site-images";

// Same snake_case <-> camelCase mapping used by the public site's lib/safaris.js
function toForm(row) {
  return {
    id: row.id,
    slug: row.slug ?? "",
    name: row.name ?? "",
    destination: row.destination ?? "",
    duration: row.duration ?? "",
    startingPrice: row.starting_price ?? "",
    category: row.category ?? "",
    categories: row.categories ?? (row.category ? [row.category] : []),
    image: row.image ?? "",
    gallery: row.gallery ?? [],
    shortDescription: row.short_description ?? "",
    overview: row.overview ?? "",
    highlights: row.highlights ?? [],
    itinerary: row.itinerary ?? [],
    accommodation: row.accommodation ?? "",
    included: row.included ?? [],
    excluded: row.excluded ?? [],
    importantInfo: row.important_info ?? "",
    isFeatured: row.is_featured ?? false,
  };
}

function toRow(form) {
  return {
    slug: form.slug,
    name: form.name,
    destination: form.destination,
    duration: form.duration,
    starting_price: form.startingPrice || null,
    category: (form.categories && form.categories[0]) || "",
    categories: form.categories || [],
    image: form.image,
    gallery: form.gallery,
    short_description: form.shortDescription,
    overview: form.overview,
    highlights: form.highlights,
    itinerary: form.itinerary,
    accommodation: form.accommodation,
    included: form.included,
    excluded: form.excluded,
    important_info: form.importantInfo,
    is_featured: !!form.isFeatured,
  };
}

export async function getAllSafarisAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data.map(toForm);
}

export async function getSafariById(id) {
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).single();
  if (error) throw error;
  return toForm(data);
}

export async function createSafari(form) {
  const { error } = await supabase.from(TABLE).insert(toRow(form));
  if (error) throw error;
}

export async function updateSafari(id, form) {
  const { error } = await supabase.from(TABLE).update(toRow(form)).eq("id", id);
  if (error) throw error;
}

export async function deleteSafari(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

/** Toggle a safari's homepage-featured state directly from the list view. */
export async function setSafariFeatured(id, isFeatured) {
  const { error } = await supabase.from(TABLE).update({ is_featured: isFeatured }).eq("id", id);
  if (error) throw error;
}

/**
 * Uploads a safari's main photo to Storage, same bucket and same upload
 * pattern as the Gallery and Promotions admin screens, so the experience
 * is consistent everywhere in the admin panel.
 */
export async function uploadSafariFile(file) {
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-");
  const path = `safaris/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}