import { supabase } from "./supabaseClient.js";

/** Fetches all testimonials, newest first. Returns an empty array on error. */
export async function getTestimonials() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch testimonials:", error.message);
    return [];
  }
  return data.map((row) => ({
    name: row.name,
    origin: row.origin,
    quote: row.quote,
  }));
}