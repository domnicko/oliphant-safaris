import { supabase } from "./supabaseClient.js";

const TABLE = "experiences";

// Experiences table columns already match the JS field names used across
// the site — no snake_case renaming needed here, unlike safaris.

export async function getAllExperiencesAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getExperienceById(id) {
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}

export async function createExperience(form) {
  const { error } = await supabase.from(TABLE).insert(form);
  if (error) throw error;
}

export async function updateExperience(id, form) {
  const { error } = await supabase.from(TABLE).update(form).eq("id", id);
  if (error) throw error;
}

export async function deleteExperience(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}