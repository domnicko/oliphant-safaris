import { supabase } from "./supabaseClient.js";

const TABLE = "enquiries";

export async function getAllEnquiriesAdmin() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function deleteEnquiry(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}