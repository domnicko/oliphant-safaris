// 8 of 15 images are now real Oliphant Safaris photos. Accommodation and
// Beaches categories still use Unsplash placeholders since none of the
// provided photos showed lodge interiors or coastal scenes — swap those
// in when available.

import migrationRiverCrossing from "../assets/gallery/migration-river-crossing.jpg";
import zebrasPair from "../assets/gallery/zebras-pair.jpg";
import flamingosLake from "../assets/gallery/flamingos-lake.jpg";
import safariVehicleZebras from "../assets/gallery/safari-vehicle-zebras.jpg";
import elephantsCrossingRoad from "../assets/gallery/elephants-crossing-road.jpg";
import maasaiBeadwork from "../assets/gallery/maasai-beadwork.jpg";
import giraffeHotAirBalloons from "../assets/gallery/giraffe-hot-air-balloons.jpg";
import wildebeestAcaciaTree from "../assets/gallery/wildebeest-acacia-tree.jpg";

export const galleryCategories = [
  "All",
  "Wildlife",
  "Landscapes",
  "Safari Vehicles",
  "Accommodation",
  "Culture",
  "Beaches",
  "Experiences",
];

export const galleryImages = [
  // First 3 entries double as the homepage preview strip — real photos up front
  {
    src: migrationRiverCrossing,
    alt: "Wildebeest and zebra crossing a river during the migration",
    category: "Wildlife",
  },
  {
    src: zebrasPair,
    alt: "Two zebras standing close together in the grass",
    category: "Wildlife",
  },
  {
    src: flamingosLake,
    alt: "Flamingos wading in a lake at sunset",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
    alt: "Giraffe at golden hour — PLACEHOLDER image",
    category: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
    alt: "Open plains landscape — PLACEHOLDER image",
    category: "Landscapes",
  },
  {
    src: safariVehicleZebras,
    alt: "Safari vehicle driving among zebras and wildebeest",
    category: "Safari Vehicles",
  },
  {
    src: elephantsCrossingRoad,
    alt: "Elephant herd crossing a dirt road in front of a safari vehicle",
    category: "Safari Vehicles",
  },
  {
    src: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80",
    alt: "Safari lodge exterior — PLACEHOLDER image",
    category: "Accommodation",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Tented camp interior — PLACEHOLDER image",
    category: "Accommodation",
  },
  {
    src: maasaiBeadwork,
    alt: "Detail of traditional Maasai beaded jewelry",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80&sat=-20",
    alt: "Cultural experience — PLACEHOLDER image",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    alt: "Zanzibar beach — PLACEHOLDER image",
    category: "Beaches",
  },
  {
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    alt: "Coastal sunset — PLACEHOLDER image",
    category: "Beaches",
  },
  {
    src: giraffeHotAirBalloons,
    alt: "Giraffe with hot air balloons rising in the background",
    category: "Experiences",
  },
  {
    src: wildebeestAcaciaTree,
    alt: "Wildebeest herd near a lone acacia tree with a safari vehicle",
    category: "Experiences",
  },
];

// Kept for the homepage preview strip (first 3 images)
export const galleryPreviewImages = galleryImages.slice(0, 3);