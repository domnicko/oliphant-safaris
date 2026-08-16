import { supabase } from "./supabaseClient.js";

/**
 * Saves a Contact or Enquiry form submission to the enquiries table.
 * Uses the public (anon) client — allowed by the "Public can submit
 * enquiries" RLS policy, which permits INSERT only, not reading others'
 * submissions back.
 */
export async function submitEnquiry({
  formType,
  name,
  email,
  phone,
  travelers,
  travelDates,
  destination,
  safariType,
  accommodation,
  budget,
  message,
}) {
  const { error } = await supabase.from("enquiries").insert({
    form_type: formType,
    name,
    email,
    phone: phone || null,
    travelers: travelers || null,
    travel_dates: travelDates || null,
    destination: destination || null,
    safari_type: safariType || null,
    accommodation: accommodation || null,
    budget: budget || null,
    message: message || null,
  });

  if (error) throw error;
}