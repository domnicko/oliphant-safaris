import { supabase } from "./supabaseClient.js";

/**
 * Converts a raw database row (snake_case) into the same shape the site's
 * components have always expected (camelCase) — so TourCard, SafariDetails,
 * etc. don't need to change at all now that data comes from Supabase.
 */
function mapSafariRow(row) {
  return {
    slug: row.slug,
    name: row.name,
    destination: row.destination,
    duration: row.duration,
    startingPrice: row.starting_price,
    category: row.category,
    categories: row.categories ?? (row.category ? [row.category] : []),
    image: row.image,
    gallery: row.gallery,
    shortDescription: row.short_description,
    overview: row.overview,
    highlights: row.highlights,
    itinerary: row.itinerary,
    accommodation: row.accommodation,
    included: row.included,
    excluded: row.excluded,
    importantInfo: row.important_info,
    isFeatured: row.is_featured,
  };
}

/** Fetches every safari, newest first. Returns an empty array on error. */
export async function getSafaris() {
  const { data, error } = await supabase
    .from("safaris")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch safaris:", error.message);
    return [];
  }
  return data.map(mapSafariRow);
}

/**
 * Fetches only the safaris specifically marked to show on the homepage
 * (admin-controlled via the "Show on Homepage" toggle), rather than just
 * taking the first few of everything.
 */
export async function getFeaturedSafaris() {
  const { data, error } = await supabase
    .from("safaris")
    .select("*")
    .eq("is_featured", true)
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to fetch featured safaris:", error.message);
    return [];
  }
  return data.map(mapSafariRow);
}

/** Fetches a single safari by slug. Returns null if not found or on error. */
export async function getSafariBySlug(slug) {
  const { data, error } = await supabase
    .from("safaris")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch safari:", error.message);
    return null;
  }
  return data ? mapSafariRow(data) : null;
}