// ONE-TIME SCRIPT — uploads your real photos to Supabase Storage and
// prints back their permanent public URLs. Run once locally with:
//   node scripts/upload-images.js
//
// Reads credentials from scripts/upload.env (NOT your main .env — this one
// holds the powerful service_role key, which must never be committed or
// used in the actual website code). Delete scripts/upload.env once done.

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

// --- Load credentials from scripts/upload.env ---
const envPath = path.resolve("scripts/upload.env");
if (!fs.existsSync(envPath)) {
  console.error(
    "Missing scripts/upload.env. Create it with two lines:\n" +
      "SUPABASE_URL=https://your-project.supabase.co\n" +
      "SUPABASE_SERVICE_ROLE_KEY=your_service_role_key\n"
  );
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
const BUCKET = "site-images";

// --- Files to upload: { local path, path inside the bucket } ---
const files = [
  { local: "src/assets/hero-elephants-closeup.jpg", remote: "hero/hero-elephants-closeup.jpg" },
  { local: "src/assets/gallery/boat-ride-hippos.jpg", remote: "gallery/boat-ride-hippos.jpg" },
  { local: "src/assets/gallery/bush-breakfast.jpg", remote: "gallery/bush-breakfast.jpg" },
  { local: "src/assets/gallery/dolphins-jumping.jpg", remote: "gallery/dolphins-jumping.jpg" },
  { local: "src/assets/gallery/elephants-crossing-road.jpg", remote: "gallery/elephants-crossing-road.jpg" },
  { local: "src/assets/gallery/elephants-kilimanjaro.jpg", remote: "gallery/elephants-kilimanjaro.jpg" },
  { local: "src/assets/gallery/flamingos-lake.jpg", remote: "gallery/flamingos-lake.jpg" },
  { local: "src/assets/gallery/giraffe-family.jpg", remote: "gallery/giraffe-family.jpg" },
  { local: "src/assets/gallery/giraffe-hot-air-balloons.jpg", remote: "gallery/giraffe-hot-air-balloons.jpg" },
  { local: "src/assets/gallery/hikers-mountain-trail.jpg", remote: "gallery/hikers-mountain-trail.jpg" },
  { local: "src/assets/gallery/hot-air-balloons-fleet.jpg", remote: "gallery/hot-air-balloons-fleet.jpg" },
  { local: "src/assets/gallery/leopard-on-branch.jpg", remote: "gallery/leopard-on-branch.jpg" },
  { local: "src/assets/gallery/lions-resting.jpg", remote: "gallery/lions-resting.jpg" },
  { local: "src/assets/gallery/maasai-beadwork.jpg", remote: "gallery/maasai-beadwork.jpg" },
  { local: "src/assets/gallery/maasai-warriors-jumping.jpg", remote: "gallery/maasai-warriors-jumping.jpg" },
  { local: "src/assets/gallery/migration-river-crossing.jpg", remote: "gallery/migration-river-crossing.jpg" },
  { local: "src/assets/gallery/safari-vehicle-zebras.jpg", remote: "gallery/safari-vehicle-zebras.jpg" },
  { local: "src/assets/gallery/sundowner-lanterns.jpg", remote: "gallery/sundowner-lanterns.jpg" },
  { local: "src/assets/gallery/wildebeest-acacia-tree.jpg", remote: "gallery/wildebeest-acacia-tree.jpg" },
  { local: "src/assets/gallery/wildebeest-road-acacias.jpg", remote: "gallery/wildebeest-road-acacias.jpg" },
  { local: "src/assets/gallery/zebras-pair.jpg", remote: "gallery/zebras-pair.jpg" },
];

async function main() {
  const results = {};
  let failCount = 0;

  for (const file of files) {
    if (!fs.existsSync(file.local)) {
      console.error(`SKIPPED (not found): ${file.local}`);
      failCount++;
      continue;
    }

    const buffer = fs.readFileSync(file.local);
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(file.remote, buffer, { contentType: "image/jpeg", upsert: true });

    if (error) {
      console.error(`FAILED: ${file.local} — ${error.message}`);
      failCount++;
      continue;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(file.remote);
    results[path.basename(file.local)] = data.publicUrl;
    console.log(`Uploaded: ${file.local} -> ${data.publicUrl}`);
  }

  fs.writeFileSync("scripts/uploaded-urls.json", JSON.stringify(results, null, 2));
  console.log(`\nDone. ${Object.keys(results).length} uploaded, ${failCount} failed.`);
  console.log("URLs saved to scripts/uploaded-urls.json");
}

main();