// Real Oliphant Safaris itineraries. 4 of 5 packages now use real photos;
// Mombasa/Wasini still uses an Unsplash placeholder since none of the
// provided photos show the coast — swap in real coastal photography when
// available. Pricing was not provided per package yet, so startingPrice
// is null everywhere ("Price on request" displays instead).

import wildebeestRoadAcacias from "../assets/gallery/wildebeest-road-acacias.jpg";
import elephantsKilimanjaro from "../assets/gallery/elephants-kilimanjaro.jpg";
import lionsResting from "../assets/gallery/lions-resting.jpg";
import giraffeFamily from "../assets/gallery/giraffe-family.jpg";

export const safaris = [
  {
    slug: "maasai-mara-nakuru-naivasha-safari",
    name: "Maasai Mara, Lake Nakuru & Lake Naivasha Safari",
    destination: "Kenya",
    duration: "5 Days / 4 Nights",
    startingPrice: null,
    category: "Kenya Safaris",
    image: wildebeestRoadAcacias,
    shortDescription:
      "Experience the best of Kenya's wildlife and Great Rift Valley across Maasai Mara National Reserve, Lake Nakuru National Park, and Lake Naivasha.",
    overview:
      "Experience the best of Kenya's wildlife and Great Rift Valley on this unforgettable 5-day safari in Maasai Mara National Reserve, Lake Nakuru National Park, and Lake Naivasha. The journey combines classic Maasai Mara game drives with a Maasai village visit, rhino tracking at Lake Nakuru, and a scenic boat ride and walking safari at Lake Naivasha and Crescent Island.",
    highlights: [
      "Full-day Big Five game drive in the Maasai Mara National Reserve",
      "Traditional Maasai village visit",
      "Rhino and flamingo habitat at Lake Nakuru National Park",
      "Scenic Lake Naivasha boat ride",
      "Crescent Island walking safari among giraffes and zebras",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi – Maasai Mara | Afternoon Game Drive",
        description:
          "Pickup from your Nairobi hotel or airport, then depart for the Maasai Mara National Reserve with a lunch stop in Narok. Arrive and head straight into an afternoon game drive — lions, elephants, giraffes, zebras, wildebeest, and buffaloes. Overnight at Flair Camp Maasai Mara. Meals: Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 2,
        title: "Full-Day Maasai Mara Game Drive",
        description:
          "A full day exploring the reserve with a packed lunch, searching for the Big Five — lion, leopard, elephant, buffalo, and rhino — plus cheetahs, hippos, and abundant birdlife. Return to Flair Camp for dinner and overnight. Meals: Breakfast, Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 3,
        title: "Maasai Mara – Lake Nakuru | Maasai Village & Afternoon Game Drive",
        description:
          "Check out and visit a traditional Maasai village to learn about local culture and traditions before continuing to Lake Nakuru, with lunch en route. An afternoon game drive in Lake Nakuru National Park follows — rhinos, lions, buffaloes, giraffes, zebras, waterbucks, and rich birdlife. Overnight at Buraha Zenoni Hotel & Resort. Meals: Breakfast, Lunch & Dinner. Accommodation: Buraha Zenoni Hotel & Resort.",
      },
      {
        day: 4,
        title: "Lake Nakuru – Lake Naivasha | Morning Game Drive & Transfer",
        description:
          "A morning game drive in Lake Nakuru National Park, then a scenic drive through the Great Rift Valley to Lake Naivasha. Check in, dinner, and overnight at Panorama Hotel & Resort. Meals: Breakfast, Lunch & Dinner. Accommodation: Panorama Hotel & Resort.",
      },
      {
        day: 5,
        title: "Lake Naivasha – Boat Ride & Crescent Island – Nairobi",
        description:
          "A scenic boat ride on Lake Naivasha with hippos and African fish eagles, followed by a guided walking safari on Crescent Island among giraffes, zebras, wildebeest, and gazelles. After lunch, drive back through the Great Rift Valley to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast & Lunch.",
      },
    ],
    accommodation:
      "4 nights across Flair Camp Maasai Mara, Buraha Zenoni Hotel & Resort, and Panorama Hotel & Resort.",
    included: [
      "Park entry fees",
      "Airport or hotel pickup and drop-off in Nairobi",
      "Transport in a 4×4 safari jeep",
      "Services of an experienced English-speaking safari guide/driver",
      "4 nights' accommodation at Flair Camp Maasai Mara, Buraha Zenoni Hotel & Resort, and Panorama Hotel & Resort",
      "Meals as indicated in the itinerary",
      "Game drives as outlined in the itinerary",
      "Lake Naivasha boat ride",
      "Crescent Island walking safari",
      "Maasai village visit",
      "Bottled drinking water during the safari",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility. Pack comfortable, neutral-colored clothing, sun protection, and any personal medication.",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "maasai-mara-nakuru-naivasha-amboseli-safari",
    name: "Maasai Mara, Lake Nakuru, Lake Naivasha & Amboseli Safari",
    destination: "Kenya",
    duration: "6 Days / 5 Nights",
    startingPrice: null,
    category: "Kenya Safaris",
    image: elephantsKilimanjaro,
    shortDescription:
      "A 6-day journey through Maasai Mara, Lake Nakuru, Lake Naivasha, and Amboseli, with Mount Kilimanjaro views on the final game drive days.",
    overview:
      "This 6-day safari extends the Maasai Mara, Lake Nakuru, and Lake Naivasha route with two full days in Amboseli National Park, famous for its elephant herds and views of Mount Kilimanjaro. It combines classic Big Five game drives with a Maasai village visit and a Lake Naivasha boat ride.",
    highlights: [
      "Full-day Big Five game drive in the Maasai Mara National Reserve",
      "Traditional Maasai village visit",
      "Rhino habitat at Lake Nakuru National Park",
      "Lake Naivasha boat ride with hippos and fish eagles",
      "Full-day Amboseli game drive with Mount Kilimanjaro views",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi – Maasai Mara | Afternoon Game Drive",
        description:
          "Pickup from your Nairobi hotel or airport, then depart for the Maasai Mara National Reserve with a lunch stop in Narok. Arrive and head straight into an afternoon game drive — lions, elephants, giraffes, zebras, wildebeest, and buffaloes. Overnight at Flair Camp Maasai Mara. Meals: Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 2,
        title: "Full-Day Maasai Mara Game Drive",
        description:
          "A full day exploring the reserve with a packed lunch, searching for the Big Five — lion, leopard, elephant, buffalo, and rhino — plus cheetahs, hippos, and abundant birdlife. Return to Flair Camp for dinner and overnight. Meals: Breakfast, Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 3,
        title: "Maasai Mara – Lake Nakuru | Maasai Village & Afternoon Game Drive",
        description:
          "Depart the Mara with lunch en route to Lake Nakuru. An afternoon game drive in Lake Nakuru National Park follows — rhinos, lions, buffaloes, giraffes, zebras, waterbucks, and rich birdlife. Overnight at Buraha Zenoni Hotel & Resort. Meals: Breakfast, Lunch & Dinner. Accommodation: Buraha Zenoni Hotel & Resort.",
      },
      {
        day: 4,
        title: "Lake Nakuru – Lake Naivasha – Amboseli | Boat Ride & Transfer",
        description:
          "Depart Nakuru for Lake Naivasha and enjoy a scenic boat ride, spotting hippos, African fish eagles, and other water birds. Continue on to Amboseli National Park, arriving in the evening at Manjaro Camp for dinner. Meals: Breakfast, Lunch & Dinner. Accommodation: Manjaro Camp.",
      },
      {
        day: 5,
        title: "Full-Day Amboseli National Park Game Drive",
        description:
          "A full day exploring Amboseli's open plains and swamps with a packed lunch — elephant herds, lions, cheetahs, giraffes, zebras, buffaloes, hippos, and (on clear days) spectacular views of Mount Kilimanjaro. Return to Manjaro Camp for dinner and your final night. Meals: Breakfast, Lunch & Dinner. Accommodation: Manjaro Camp.",
      },
      {
        day: 6,
        title: "Amboseli – Nairobi",
        description:
          "Breakfast at camp, then check out and drive back to Nairobi through the scenic Kenyan countryside, with lunch en route. Drop-off at your Nairobi hotel or airport. Meals: Breakfast & Lunch.",
      },
    ],
    accommodation:
      "5 nights across Flair Camp Maasai Mara, Buraha Zenoni Hotel & Resort, and Manjaro Camp Amboseli.",
    included: [
      "Park entry fees",
      "Airport or hotel pickup and drop-off in Nairobi",
      "Transport in a 4×4 safari jeep",
      "Services of an experienced English-speaking safari guide/driver",
      "5 nights' accommodation at Flair Camp Maasai Mara, Buraha Zenoni Hotel & Resort, and Manjaro Camp Amboseli",
      "Meals as indicated in the itinerary",
      "Game drives as outlined in the itinerary",
      "Lake Naivasha boat ride",
      "Maasai village visit",
      "Bottled drinking water during the safari",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility. Pack comfortable, neutral-colored clothing, sun protection, and any personal medication.",
    gallery: [
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "maasai-mara-safari-3-days",
    name: "Maasai Mara Safari",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Budget Safaris",
    image: lionsResting,
    shortDescription:
      "Discover the wild beauty of Kenya on an unforgettable 3-day Maasai Mara safari from Nairobi.",
    overview:
      "A compact 3-day safari from Nairobi into the world-famous Maasai Mara National Reserve — two full days of game drives in search of the Big Five, with a scenic stop at the Great Rift Valley Viewpoint on the return journey.",
    highlights: [
      "Afternoon and full-day game drives in the Maasai Mara",
      "Chance to see the Big Five: lion, leopard, elephant, buffalo, rhino",
      "Great Rift Valley Viewpoint photo stop",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi – Maasai Mara",
        description:
          "Pickup from your Nairobi hotel or the airport, then depart for the Maasai Mara with a lunch stop in Narok. Arrive and head out for your first afternoon game drive — lions, elephants, giraffes, zebras, wildebeest, and buffaloes. Overnight at Flair Camp Maasai Mara. Meals: Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 2,
        title: "Full-Day Maasai Mara Game Drive",
        description:
          "Depart with a packed lunch for a full day exploring the reserve's wildlife and landscapes, including the Big Five plus cheetahs, hippos, and numerous bird species. Return to camp for dinner and overnight. Meals: Breakfast, Lunch & Dinner. Accommodation: Flair Camp Maasai Mara.",
      },
      {
        day: 3,
        title: "Maasai Mara – Nairobi",
        description:
          "Check out and begin the scenic drive back to Nairobi, stopping at the Great Rift Valley Viewpoint to take in the views and photographs. Continue to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast.",
      },
    ],
    accommodation: "2 nights at Flair Camp Maasai Mara.",
    included: [
      "Park entry fees",
      "Airport or hotel pickup and drop-off in Nairobi on day 1 & 3",
      "Transport in a 4×4 jeep",
      "Services of an experienced English-speaking safari guide/driver",
      "Accommodation at Flair Camp Maasai Mara",
      "Meals as indicated in the itinerary",
      "Game drives as outlined in the itinerary",
      "Great Rift Valley Viewpoint stop",
      "Bottled drinking water during the safari",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities such as a Maasai village visit or hot-air balloon safari",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility. Optional add-ons like a Maasai village visit or hot-air balloon safari can be arranged separately — ask us when booking.",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "nairobi-national-park-giraffe-centre-day-tour",
    name: "Nairobi National Park & Giraffe Centre Tour",
    destination: "Kenya",
    duration: "1 Day",
    startingPrice: null,
    category: "Budget Safaris",
    image: giraffeFamily,
    shortDescription:
      "A half-day safari and giraffe encounter, ideal for travelers with just one day in Nairobi.",
    overview:
      "This tour is ideal for travelers who have just one day in Nairobi and would like to experience a safari without having to travel far from the city — a half-day game drive in Nairobi National Park followed by a visit to the Giraffe Centre.",
    highlights: [
      "Half-day game drive minutes from the city centre",
      "Chance to see lions, giraffes, zebras, buffaloes, and rhinos",
      "Up-close visit with the endangered Rothschild's giraffe",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi National Park & Giraffe Centre Day Tour",
        description:
          "Pickup from your Nairobi hotel or airport, then depart for Nairobi National Park for a half-day game drive — lions, giraffes, zebras, buffaloes, rhinos, and other species, all just a short drive from the city. After the game drive, stop for lunch before visiting the Giraffe Centre to learn about and see the endangered Rothschild's giraffe up close. Drop-off at your Nairobi hotel or airport. Meals: Lunch.",
      },
    ],
    accommodation: "Not applicable — this is a day tour with no overnight stay.",
    included: [
      "Airport or hotel pickup and drop-off in Nairobi",
      "Transport in a 4×4 safari vehicle",
      "Services of an experienced English-speaking guide/driver",
      "Game drive",
      "Nairobi National Park entry fees",
      "Giraffe Centre visit and entry fees",
      "Lunch",
      "Bottled drinking water",
    ],
    excluded: [
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A great option to combine with a layover or a single free day in Nairobi before or after a longer safari.",
    gallery: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "mombasa-beach-wasini-island-getaway",
    name: "Mombasa Beach & Wasini Island Getaway",
    destination: "Mombasa, Kenya",
    duration: "4 Days / 3 Nights",
    startingPrice: null,
    category: "Beach & Safari",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Escape to the Kenyan coast — an SGR train journey, a full-day Wasini Island excursion, and relaxed beach time at La Fattoria Resort.",
    overview:
      "Escape to the Kenyan coast on this relaxing 4-day getaway, traveling by the SGR train between Nairobi and Mombasa, with a full-day Wasini Island excursion and beach relaxation at La Fattoria Resort.",
    highlights: [
      "Scenic SGR train journey between Nairobi and Mombasa",
      "Full-day Wasini Island boat excursion with snorkeling and seafood lunch",
      "Relaxed beach time at La Fattoria Resort",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi – Mombasa | SGR Train Journey & Beach Resort",
        description:
          "Pickup from your Nairobi hotel or airport and transfer to the Nairobi SGR Terminus for the 8:00 AM train to Mombasa, arriving around 2:00 PM. Transfer from the Mombasa SGR Terminus to La Fattoria Resort, check in, have lunch, and relax for the rest of the afternoon. Meals: Lunch & Dinner. Accommodation: La Fattoria Resort.",
      },
      {
        day: 2,
        title: "Wasini Island Full-Day Excursion",
        description:
          "A full day exploring the coastal waters and islands around Wasini, including a boat excursion, marine sightseeing, snorkeling, and a seafood lunch. Return to the mainland in the evening and transfer back to La Fattoria Resort for dinner and overnight. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort.",
      },
      {
        day: 3,
        title: "Mombasa | Beach & Leisure Day",
        description:
          "A free day to relax at your own pace — enjoy the beach, the warm coastal weather, resort facilities, or explore nearby attractions independently. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort.",
      },
      {
        day: 4,
        title: "Mombasa – Nairobi | SGR Train Journey",
        description:
          "Early breakfast and checkout, then transfer to the Mombasa SGR Terminus for the 8:00 AM train back to Nairobi. On arrival, transfer to your Nairobi hotel or airport. Meals: Breakfast.",
      },
    ],
    accommodation: "3 nights at La Fattoria Resort, Mombasa.",
    included: [
      "Return SGR train tickets between Nairobi and Mombasa",
      "Airport or hotel pickup and drop-off in Nairobi",
      "Transfers between Mombasa SGR Terminus and La Fattoria Resort",
      "3 nights' accommodation at La Fattoria Resort",
      "Meals as indicated in the itinerary",
      "Full-day Wasini Island excursion",
      "Bottled drinking water during the excursion",
      "Services of a guide during the Wasini Island excursion",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "SGR train tickets are date- and time-specific — travel dates should be confirmed in advance. A valid passport and any required Kenya visa/eTA are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    ],
  },
];