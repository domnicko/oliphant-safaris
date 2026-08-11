// Real descriptions/locations from Oliphant Safaris' EXPERIENCES doc for 8
// of these; Wildlife Photography isn't covered by that doc, so its
// description is still PLACEHOLDER. Bush Dinner and Bush Breakfast are
// split into two cards per the source doc (previously one combined card).

import hotAirBalloonsFleet from "../assets/gallery/hot-air-balloons-fleet.jpg";
import leopardOnBranch from "../assets/gallery/leopard-on-branch.jpg";
import bushBreakfastPhoto from "../assets/gallery/bush-breakfast.jpg";
import maasaiWarriorsJumping from "../assets/gallery/maasai-warriors-jumping.jpg";
import boatRideHippos from "../assets/gallery/boat-ride-hippos.jpg";
import dolphinsJumping from "../assets/gallery/dolphins-jumping.jpg";
import hikersMountainTrail from "../assets/gallery/hikers-mountain-trail.jpg";
import sundownerLanterns from "../assets/gallery/sundowner-lanterns.jpg";

export const experiences = [
  {
    slug: "hot-air-balloon-safari",
    name: "Hot Air Balloon Safari",
    location: "Maasai Mara",
    image: hotAirBalloonsFleet,
    description:
      "Enjoy a breathtaking sunrise flight over the Maasai Mara, with spectacular views of the savannah and wildlife from above. The experience usually ends with a special bush breakfast.",
  },
  {
    slug: "lake-naivasha-boat-ride",
    name: "Lake Naivasha Boat Ride",
    location: "Lake Naivasha",
    image: boatRideHippos,
    description:
      "Cruise across the calm waters of Lake Naivasha and enjoy views of hippos, birds and the surrounding landscapes. A relaxing experience perfect for nature and wildlife lovers.",
  },
  {
    slug: "wildlife-photography",
    name: "Wildlife Photography",
    location: null,
    image: leopardOnBranch,
    description:
      "PLACEHOLDER — describe the photography-focused experience: guide expertise, vehicle setup, best times of day.",
  },
  {
    slug: "hiking-nature-walks",
    name: "Hiking & Nature Walks",
    location: "Hell's Gate, Mt. Longonot & Ngong Hills",
    image: hikersMountainTrail,
    description:
      "Discover Kenya on foot through scenic trails, hills, cliffs and beautiful landscapes. Choose from a variety of hiking experiences depending on your fitness level and interests.",
  },
  {
    slug: "sundowner",
    name: "Sundowner Experience",
    location: "Maasai Mara, Amboseli & Tsavo",
    image: sundownerLanterns,
    description:
      "Unwind in the wilderness with a refreshing drink as the African sun sets over the savannah. A perfect way to end an exciting day on safari.",
  },
  {
    slug: "bush-dinner",
    name: "Bush Dinner",
    location: "Maasai Mara, Amboseli & Tsavo",
    // No distinct real photo yet for the dinner (evening) version — still a placeholder
    image:
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy a memorable dinner under the African night sky, surrounded by the sights and sounds of the wilderness. Make your safari extra special with this unique dining experience.",
  },
  {
    slug: "bush-breakfast",
    name: "Bush Breakfast",
    location: "Maasai Mara, Amboseli & Tsavo",
    price: "From KSh 4,000 pp",
    image: bushBreakfastPhoto,
    description:
      "Start your morning with a delicious breakfast in the heart of the wilderness. Enjoy great food, beautiful scenery and the peaceful atmosphere of the African bush.",
  },
  {
    slug: "maasai-village-visit",
    name: "Maasai Village Visit",
    location: "Maasai Mara",
    image: maasaiWarriorsJumping,
    description:
      "Visit a traditional Maasai village and experience the community's culture, traditions and way of life. Meet local families, learn about their customs and enjoy traditional songs and dances.",
  },
  {
    slug: "dolphin-tour",
    name: "Dolphin Tour",
    location: "Watamu & Diani/Wasini",
    image: dolphinsJumping,
    description:
      "Set out into Kenya's beautiful coastal waters in search of dolphins and other marine life. Depending on the excursion, you can also enjoy snorkeling, swimming and exploring the coastline.",
  },
];