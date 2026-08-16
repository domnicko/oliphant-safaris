import { supabase } from "./supabaseClient.js";

/**
 * Returns every active promotion currently within its start/end date
 * window (if set), newest first. Used to rotate between multiple offers
 * on the homepage banner. Returns an empty array if none qualify.
 */
export async function getActivePromotions() {
  const { data, error } = await supabase
    .from("promotions")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch promotions:", error.message);
    return [];
  }

  const now = new Date();
  return data.filter((promo) => {
    const startsOk = !promo.starts_at || new Date(promo.starts_at) <= now;
    const endsOk = !promo.ends_at || new Date(promo.ends_at) >= now;
    return startsOk && endsOk;
  });
}

/** Kept for anywhere that only needs a single promotion (e.g. a quick check). */
export async function getActivePromotion() {
  const all = await getActivePromotions();
  return all[0] || null;
}