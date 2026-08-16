import { supabase } from "./supabaseClient.js";

/** Fetches all experiences, newest first. Returns an empty array on error. */
export async function getExperiences() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch experiences:", error.message);
    return [];
  }
  // Column names already match the JS field names used across the site —
  // no renaming needed here, unlike safaris.js.
  return data;
}