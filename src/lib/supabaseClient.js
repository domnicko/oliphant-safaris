import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Loud, early failure — much easier to debug than a silent network error
  // later when a page tries to fetch data and gets nothing back.
  throw new Error(
    "Missing Supabase environment variables. Check that .env exists at the " +
      "project root with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY set, " +
      "then restart the dev server (env changes require a restart)."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);