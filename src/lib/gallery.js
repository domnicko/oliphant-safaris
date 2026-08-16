import { supabase } from "./supabaseClient.js";

/** Fetches all gallery images, newest first. Returns an empty array on error. */
export async function getGalleryImages() {
  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch gallery images:", error.message);
    return [];
  }
  return data.map((row) => ({
    src: row.src,
    alt: row.alt,
    category: row.category,
  }));
}

/** Convenience helper for the homepage preview strip — first N images. */
export async function getGalleryPreview(limit = 3) {
  const images = await getGalleryImages();
  return images.slice(0, limit);
}