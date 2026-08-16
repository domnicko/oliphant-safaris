// ONE-TIME SCRIPT — inserts your safaris, experiences, gallery images, and
// testimonials from scripts/data/*.json into Supabase. Run once locally:
//   node scripts/migrate-data.js
//
// Uses the same scripts/upload.env credentials as the image upload script.
// Safe to run more than once — it clears each table before inserting, so
// re-running won't create duplicates (just re-syncs from the JSON files).

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

// --- Load credentials from scripts/upload.env ---
const envPath = path.resolve("scripts/upload.env");
if (!fs.existsSync(envPath)) {
  console.error("Missing scripts/upload.env (same file the image upload script used).");
  process.exit(1);
}
const env = {};
fs.readFileSync(envPath, "utf8")
  .split("\n")
  .forEach((line) => {
    const idx = line.indexOf("=");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) env[key] = value;
  });

if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error("scripts/upload.env is missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

function loadJson(filename) {
  return JSON.parse(fs.readFileSync(path.resolve("scripts/data", filename), "utf8"));
}

async function main() {
  const safaris = loadJson("safaris.json");
  const experiences = loadJson("experiences.json");
  const galleryImages = loadJson("gallery.json");
  const testimonials = loadJson("testimonials.json");

  // Map camelCase JS fields -> snake_case database columns
  const safariRows = safaris.map((s) => ({
    slug: s.slug,
    name: s.name,
    destination: s.destination,
    duration: s.duration,
    starting_price: s.startingPrice ?? null,
    category: s.category,
    image: s.image,
    gallery: s.gallery,
    short_description: s.shortDescription,
    overview: s.overview,
    highlights: s.highlights,
    itinerary: s.itinerary,
    accommodation: s.accommodation,
    included: s.included,
    excluded: s.excluded,
    important_info: s.importantInfo,
  }));

  const experienceRows = experiences.map((e) => ({
    slug: e.slug,
    name: e.name,
    location: e.location,
    image: e.image,
    description: e.description,
    price: e.price ?? null,
  }));

  const galleryRows = galleryImages.map((g) => ({
    src: g.src,
    alt: g.alt,
    category: g.category,
  }));

  const testimonialRows = testimonials.map((t) => ({
    name: t.name,
    origin: t.origin,
    quote: t.quote,
  }));

  const tasks = [
    { table: "safaris", rows: safariRows },
    { table: "experiences", rows: experienceRows },
    { table: "gallery_images", rows: galleryRows },
    { table: "testimonials", rows: testimonialRows },
  ];

  for (const { table, rows } of tasks) {
    console.log(`\n${table}: clearing existing rows...`);
    // Delete everything currently in the table before re-inserting
    const { error: deleteError } = await supabase
      .from(table)
      .delete()
      .not("id", "is", null);
    if (deleteError) {
      console.error(`  Failed to clear ${table}: ${deleteError.message}`);
      continue;
    }

    console.log(`${table}: inserting ${rows.length} rows...`);
    const { error: insertError } = await supabase.from(table).insert(rows);
    if (insertError) {
      console.error(`  Failed to insert into ${table}: ${insertError.message}`);
    } else {
      console.log(`  Done — ${rows.length} rows in ${table}.`);
    }
  }

  console.log("\nMigration complete.");
}

main();
