import { supabase } from "./supabaseClient.js";

const TABLE = "testimonials";

export async function getAllTestimonialsAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getTestimonialById(id) {
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}

export async function createTestimonial(form) {
  const { error } = await supabase.from(TABLE).insert(form);
  if (error) throw error;
}

export async function updateTestimonial(id, form) {
  const { error } = await supabase.from(TABLE).update(form).eq("id", id);
  if (error) throw error;
}

export async function deleteTestimonial(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}