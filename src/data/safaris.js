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
  {
    slug: "luxury-maasai-mara-safari-3-days",
    name: "Luxury Maasai Mara Safari",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Luxury Safaris",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Experience the legendary Maasai Mara in luxury, combining exclusive game drives, a hot air balloon safari, and premium accommodation at Zebra Plains.",
    overview:
      "Experience the legendary Maasai Mara in luxury, combining exclusive game drives, a spectacular hot air balloon safari and premium accommodation at Zebra Plains.",
    highlights: [
      "Private 4x4 Land Cruiser and professional private guide",
      "Sundowner experience at a scenic viewpoint",
      "Sunrise hot air balloon safari with bush breakfast",
      "Private game drives across the Mara plains",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi – Maasai Mara | Scenic Journey & Sundowner",
        description:
          "Private pickup from your Nairobi hotel or airport in a private 4x4 Land Cruiser, traveling through the Great Rift Valley to the Maasai Mara. Arrive at Zebra Plains Mara Camp for lunch and check-in, then head out for a private afternoon game drive. As the sun sets, stop at a scenic location for a sundowner experience before returning to camp. Meals: Lunch & Dinner. Accommodation: Zebra Plains Mara Camp.",
      },
      {
        day: 2,
        title: "Maasai Mara | Hot Air Balloon Safari & Full-Day Game Drive",
        description:
          "Wake before sunrise for an unforgettable hot air balloon safari over the Maasai Mara, floating above the plains as the sun rises. After landing, enjoy a special bush breakfast, then continue with a private game drive through the reserve searching for the Big Five. Return to camp for dinner. Meals: Breakfast, Lunch & Dinner. Accommodation: Zebra Plains Mara Camp.",
      },
      {
        day: 3,
        title: "Maasai Mara – Nairobi | Morning Game Drive & Departure",
        description:
          "An early morning private game drive for one final chance to experience the Mara's wildlife, then breakfast and check out. Depart for Nairobi through the scenic Great Rift Valley, with drop-off at your hotel or the airport. Meals: Breakfast & Lunch.",
      },
    ],
    accommodation: "2 nights at Zebra Plains Mara Camp.",
    included: [
      "Private 4x4 Land Cruiser",
      "Professional private safari guide",
      "2 nights' luxury accommodation at Zebra Plains Mara Camp",
      "Full-board meals as indicated",
      "Maasai Mara National Reserve fees",
      "Private game drives",
      "Hot air balloon safari",
      "Bush breakfast",
      "Sundowner experience",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages outside the included sundowner",
      "Tips and gratuities",
      "Travel insurance",
      "Maasai village visit",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "luxury-maasai-mara-nakuru-safari-4-days",
    name: "Luxury Maasai Mara & Lake Nakuru Safari",
    destination: "Kenya",
    duration: "4 Days / 3 Nights",
    startingPrice: null,
    category: "Luxury Safaris",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Discover two of Kenya's most spectacular wildlife destinations, combining the luxury of Zebra Plains Mara Camp with Lake Nakuru and a hot air balloon safari.",
    overview:
      "Discover two of Kenya's most spectacular wildlife destinations, combining the luxury of Zebra Plains Mara Camp with the scenic beauty of Lake Nakuru and an unforgettable hot air balloon safari.",
    highlights: [
      "Private game drives with a personal guide",
      "Sunrise hot air balloon safari with bush breakfast",
      "Sundowner experience in the wilderness",
      "Lake Nakuru game drive at Sarova Lion Hill Game Lodge",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Private Safari & Sundowner", description: "Private pickup and transfer through the Great Rift Valley to Zebra Plains Mara Camp for lunch and check-in. A private afternoon game drive follows, ending with a sundowner experience as the sun sets. Meals: Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 2, title: "Maasai Mara | Hot Air Balloon Safari & Wildlife", description: "A pre-dawn hot air balloon safari over the Maasai Mara, floating above the reserve at sunrise. After landing, enjoy a bush breakfast, then continue a private game drive exploring the reserve for the rest of the day. Meals: Breakfast, Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 3, title: "Maasai Mara – Lake Nakuru | Safari & Scenic Transfer", description: "An early morning game drive and breakfast, then check out and depart for Lake Nakuru National Park. Arrive at Sarova Lion Hill Game Lodge for lunch and check-in, followed by an afternoon game drive through the park, known for its rhinos, giraffes, buffaloes, zebras, and lake scenery. Meals: Breakfast, Lunch & Dinner. Accommodation: Sarova Lion Hill Game Lodge." },
      { day: 4, title: "Lake Nakuru – Nairobi | Sunrise Safari & Departure", description: "An early morning game drive in Lake Nakuru National Park, then breakfast, check out, and a private transfer to your Nairobi hotel or airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Zebra Plains Mara Camp, 1 night at Sarova Lion Hill Game Lodge.",
    included: [
      "Private 4x4 Land Cruiser",
      "Professional private safari guide",
      "2 nights at Zebra Plains Mara Camp",
      "1 night at Sarova Lion Hill Game Lodge",
      "Full-board meals as indicated",
      "Maasai Mara and Lake Nakuru park fees",
      "Private game drives",
      "Hot air balloon safari",
      "Bush breakfast",
      "Sundowner experience",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages outside the included experience",
      "Tips and gratuities",
      "Travel insurance",
      "Maasai village visit",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "luxury-maasai-mara-nakuru-naivasha-safari-5-days",
    name: "Luxury Maasai Mara, Lake Nakuru & Naivasha Safari",
    destination: "Kenya",
    duration: "5 Days / 4 Nights",
    startingPrice: null,
    category: "Luxury Safaris",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kenya's iconic wildlife and Rift Valley landscapes on a luxury safari with premium accommodation, private game drives, a boat ride and Crescent Island walking safari.",
    overview:
      "Experience Kenya's iconic wildlife and spectacular Rift Valley landscapes on a luxury safari featuring premium accommodation, private game drives, a scenic boat ride and a unique Crescent Island walking safari.",
    highlights: [
      "Private game drives and a Mara sundowner",
      "Bush breakfast in the Mara wilderness",
      "Lake Nakuru game drive at Sarova Lion Hill Game Lodge",
      "Lake Naivasha boat ride and Crescent Island walking safari",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Private Safari & Sundowner", description: "Private pickup and transfer through the Great Rift Valley to Zebra Plains Mara Camp for lunch and check-in, followed by a private afternoon game drive and a sundowner overlooking the wilderness. Meals: Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 2, title: "Maasai Mara | Full-Day Safari & Bush Breakfast", description: "An early private morning game drive with a specially prepared bush breakfast in the Mara wilderness, then continued exploration of the reserve in search of lions, elephants, leopards, cheetahs, and buffaloes. Meals: Breakfast, Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 3, title: "Maasai Mara – Lake Nakuru | Safari & Scenic Transfer", description: "A final morning game drive and breakfast, then check out and travel to Lake Nakuru National Park. Arrive at Sarova Lion Hill Game Lodge for lunch and an afternoon game drive searching for rhinos, giraffes, buffaloes and zebras. Meals: Breakfast, Lunch & Dinner. Accommodation: Sarova Lion Hill Game Lodge." },
      { day: 4, title: "Lake Nakuru – Lake Naivasha | Boat Ride & Crescent Island", description: "A morning game drive in Lake Nakuru, then departure for Lake Naivasha. Arrive at Naivasha Sopa Resort for lunch, followed by a scenic boat ride across the lake and a guided Crescent Island walking safari among giraffes, zebras, and wildebeest. Meals: Breakfast, Lunch & Dinner. Accommodation: Naivasha Sopa Resort." },
      { day: 5, title: "Naivasha – Nairobi | Leisure & Departure", description: "A relaxed breakfast and time to enjoy the resort's facilities before checking out and departing for Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Zebra Plains Mara Camp, 1 night at Sarova Lion Hill Game Lodge, 1 night at Naivasha Sopa Resort.",
    included: [
      "Private 4x4 Land Cruiser",
      "Professional private safari guide",
      "2 nights at Zebra Plains Mara Camp",
      "1 night at Sarova Lion Hill Game Lodge",
      "1 night at Naivasha Sopa Resort",
      "Full-board meals as indicated",
      "Maasai Mara and Lake Nakuru park fees",
      "Private game drives",
      "Bush breakfast",
      "Sundowner experience",
      "Lake Naivasha boat ride",
      "Crescent Island walking safari",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "luxury-maasai-mara-nakuru-naivasha-amboseli-safari-6-days",
    name: "Luxury Maasai Mara, Lake Nakuru, Naivasha & Amboseli Safari",
    destination: "Kenya",
    duration: "6 Days / 5 Nights",
    startingPrice: null,
    category: "Luxury Safaris",
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The very best of Kenya on an exclusive luxury safari combining four iconic destinations, premium accommodation, a Maasai cultural experience, and spectacular sundowners.",
    overview:
      "Experience the very best of Kenya on an exclusive luxury safari combining four iconic destinations, premium accommodation, private game drives, a Maasai cultural experience, a Lake Naivasha boat ride and spectacular sundowners.",
    highlights: [
      "Mara sundowner and bush breakfast",
      "Lake Naivasha boat ride",
      "Maasai village cultural visit",
      "Kilimanjaro sundowner in Amboseli",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Private Safari & Sundowner", description: "Private pickup and transfer through the Great Rift Valley to Zebra Plains Mara Camp for lunch and check-in, followed by a private afternoon game drive and a Mara sundowner. Meals: Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 2, title: "Maasai Mara | Full-Day Safari & Bush Experience", description: "A full-day private game drive exploring the Mara's wildlife-rich plains, with a bush breakfast surrounded by the wilderness. Meals: Breakfast, Lunch & Dinner. Accommodation: Zebra Plains Mara Camp." },
      { day: 3, title: "Maasai Mara – Lake Nakuru | Safari & Scenic Transfer", description: "A morning game drive and breakfast, then check out and travel to Lake Nakuru National Park. Arrive at Sarova Lion Hill Game Lodge for lunch and an afternoon private game drive. Meals: Breakfast, Lunch & Dinner. Accommodation: Sarova Lion Hill Game Lodge." },
      { day: 4, title: "Lake Nakuru – Naivasha | Boat Ride & Rift Valley Experience", description: "A final morning game drive before departing for Lake Naivasha. Arrive at Naivasha Sopa Resort for lunch, then enjoy a scenic boat ride on the lake, observing hippos and birdlife. Meals: Breakfast, Lunch & Dinner. Accommodation: Naivasha Sopa Resort." },
      { day: 5, title: "Naivasha – Amboseli | Maasai Village & Kilimanjaro Sundowner", description: "Check out and depart for Amboseli, visiting a Maasai village en route for a cultural experience. Arrive at Ol Tukai Lodge for lunch, then an afternoon game drive followed by a Kilimanjaro sundowner overlooking the Amboseli plains. Meals: Breakfast, Lunch & Dinner. Accommodation: Ol Tukai Lodge Amboseli." },
      { day: 6, title: "Amboseli – Nairobi | Sunrise Safari & Departure", description: "A final sunrise game drive with spectacular views of Mount Kilimanjaro, then breakfast, check out, and transfer to Nairobi with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Zebra Plains Mara Camp, 1 night at Sarova Lion Hill Game Lodge, 1 night at Naivasha Sopa Resort, 1 night at Ol Tukai Lodge Amboseli.",
    included: [
      "Private 4x4 Land Cruiser throughout the safari",
      "Professional private safari guide",
      "2 nights at Zebra Plains Mara Camp",
      "1 night at Sarova Lion Hill Game Lodge",
      "1 night at Naivasha Sopa Resort",
      "1 night at Ol Tukai Lodge Amboseli",
      "Full-board meals as indicated",
      "Maasai Mara, Lake Nakuru and Amboseli park fees",
      "Private game drives",
      "Bush breakfast",
      "Mara sundowner",
      "Kilimanjaro sundowner",
      "Lake Naivasha boat ride",
      "Maasai village cultural experience",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages outside the included experiences",
      "Tips and gratuities",
      "Travel insurance",
      "Hot air balloon safari",
      "Crescent Island visit",
      "Optional activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Kenya visa/eTA are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "serengeti-safari-3-days",
    name: "Serengeti Safari",
    destination: "Tanzania",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Tanzania Safaris",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Experience the legendary Serengeti on a short but exciting safari focused on wildlife, open savannahs and excellent game viewing.",
    overview:
      "Experience the legendary Serengeti on a short but exciting safari focused on wildlife, open savannahs and excellent game viewing.",
    highlights: [
      "Afternoon and full-day game drives in the Serengeti",
      "Chance to see the Big Five",
      "Possible Great Migration sightings depending on season",
    ],
    itinerary: [
      { day: 1, title: "Arusha – Serengeti | Scenic Journey & Afternoon Game Drive", description: "Pickup from your Arusha hotel or airport, traveling through northern Tanzania to the Serengeti, arriving in time for lunch. An afternoon game drive follows, exploring the plains for lions, elephants, giraffes, zebras, buffaloes, and cheetahs. Meals: Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 2, title: "Serengeti | Full-Day Wildlife Safari", description: "A full-day game drive exploring different areas of the park, with a picnic lunch. Depending on season and location, large herds of wildebeest and zebras from the Great Migration may be visible. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 3, title: "Serengeti – Arusha | Morning Game Drive & Departure", description: "An early morning game drive for the best wildlife activity and light, then breakfast, check out, and the scenic journey back to Arusha with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Serengeti Serena Safari Lodge.",
    included: [
      "Private safari vehicle",
      "Professional English-speaking safari guide",
      "2 nights' accommodation",
      "Meals as indicated",
      "Serengeti National Park fees",
      "Game drives",
      "Bottled drinking water",
      "Airport/hotel transfers as indicated",
    ],
    excluded: [
      "International and domestic flights",
      "Visa fees",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "A valid passport and any required Tanzania visa are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "amboseli-ngorongoro-safari-6-days",
    name: "Amboseli & Ngorongoro Safari",
    destination: "Kenya & Tanzania",
    duration: "6 Days / 5 Nights",
    startingPrice: null,
    category: "Tanzania Safaris",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Combine the iconic elephants and Mount Kilimanjaro scenery of Amboseli with the spectacular wildlife of Tanzania's Ngorongoro Conservation Area.",
    overview:
      "Combine the iconic elephants and Mount Kilimanjaro scenery of Amboseli with the spectacular wildlife of Tanzania's Ngorongoro Conservation Area.",
    highlights: [
      "Amboseli elephant herds with Kilimanjaro backdrop",
      "Kenya–Tanzania border crossing at Namanga",
      "Full-day Ngorongoro Crater game drive",
      "Chance to see the endangered black rhino",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Amboseli | Afternoon Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling to Amboseli National Park. Arrive at Amboseli Sopa Lodge for lunch and check-in, then an afternoon game drive in search of elephants and views of Mount Kilimanjaro. Meals: Lunch & Dinner. Accommodation: Amboseli Sopa Lodge." },
      { day: 2, title: "Amboseli | Full-Day Game Drive", description: "A full-day game drive exploring the park's plains, wetlands and wildlife areas for elephants, lions, giraffes, zebras and buffaloes. Meals: Breakfast, Lunch & Dinner. Accommodation: Amboseli Sopa Lodge." },
      { day: 3, title: "Amboseli – Arusha | Border Crossing & Transfer", description: "Check out and depart for the Namanga border, completing Kenya–Tanzania formalities before continuing to Arusha for overnight. Meals: Breakfast, Lunch & Dinner. Accommodation: Kibo Palace Apartments." },
      { day: 4, title: "Arusha – Ngorongoro | Scenic Journey", description: "Depart Arusha for the Ngorongoro Conservation Area through scenic northern Tanzania countryside. Time to relax after lunch and check-in, with an optional short nature or cultural experience before dinner. Meals: Breakfast, Lunch & Dinner. Accommodation: Ngorongoro Serena Safari Lodge." },
      { day: 5, title: "Ngorongoro Crater | Full-Day Crater Safari", description: "An early descent into the Ngorongoro Crater for a full-day game drive across the crater floor, home to a remarkable concentration of wildlife including lions, elephants, hyenas, and possibly the black rhino. Meals: Breakfast, Lunch & Dinner. Accommodation: Ngorongoro Serena Safari Lodge." },
      { day: 6, title: "Ngorongoro – Arusha | Morning & Departure", description: "Breakfast, check out, and departure for Arusha in time for your onward flight or hotel transfer. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Amboseli Sopa Lodge, 1 night at Kibo Palace Apartments, 2 nights at Ngorongoro Serena Safari Lodge.",
    included: [
      "Private safari vehicle",
      "Professional safari guide",
      "5 nights' accommodation",
      "Meals as indicated",
      "Amboseli National Park fees",
      "Ngorongoro Conservation Area fees",
      "Game drives",
      "Kenya–Tanzania border transfer assistance",
      "Bottled drinking water",
      "Nairobi and Arusha transfers as indicated",
    ],
    excluded: [
      "International and domestic flights",
      "Kenya and Tanzania visa fees",
      "Personal expenses",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "Requires a Kenya–Tanzania border crossing at Namanga; valid passport and both countries' visas are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "maasai-mara-serengeti-safari-6-days",
    name: "Maasai Mara & Serengeti Safari",
    destination: "Kenya & Tanzania",
    duration: "6 Days / 5 Nights",
    startingPrice: null,
    category: "Tanzania Safaris",
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Experience two of East Africa's most famous wildlife destinations on one unforgettable safari, combining the Maasai Mara in Kenya with the Serengeti in Tanzania.",
    overview:
      "Experience two of East Africa's most famous wildlife destinations on one unforgettable safari, combining the Maasai Mara in Kenya with the Serengeti in Tanzania.",
    highlights: [
      "Full-day game drives in both the Maasai Mara and Serengeti",
      "Isebania border crossing between Kenya and Tanzania",
      "Chance to see the Big Five and, seasonally, the Great Migration",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Afternoon Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling through the Great Rift Valley to Jambo Mara Safari Lodge for lunch and check-in, then an afternoon game drive. Meals: Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge." },
      { day: 2, title: "Maasai Mara | Full-Day Safari", description: "A full-day game drive exploring the Mara plains for lions, elephants, leopards, cheetahs, buffaloes, and giraffes, with a picnic lunch in the reserve. Meals: Breakfast, Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge." },
      { day: 3, title: "Maasai Mara – Isebania – Serengeti | Border Crossing & Game Drive", description: "Check out and depart for the Isebania border, completing Kenya–Tanzania immigration formalities before entering the Serengeti with a game drive en route to the lodge. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 4, title: "Serengeti | Full-Day Wildlife Safari", description: "A full-day game drive across the vast Serengeti plains searching for the Big Five and, depending on season, large herds of wildebeest and zebras. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 5, title: "Serengeti | Morning & Afternoon Game Drives", description: "An early morning game drive during the cooler, more active hours, followed by breakfast and relaxation, then another game drive in a different area of the Serengeti in the afternoon. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 6, title: "Serengeti – Arusha | Morning Safari & Departure", description: "An early morning game drive before breakfast, then check out and depart for Arusha, with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Jambo Mara Safari Lodge, 3 nights at Serengeti Serena Safari Lodge.",
    included: [
      "Private safari vehicle",
      "Professional safari guide",
      "5 nights' accommodation",
      "Meals as indicated",
      "Maasai Mara and Serengeti park fees",
      "Game drives",
      "Kenya–Tanzania border transfer assistance",
      "Bottled drinking water",
      "Nairobi pickup and Arusha drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Kenya and Tanzania visa fees",
      "Personal expenses",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "Requires a Kenya–Tanzania border crossing at Isebania; valid passport and both countries' visas are the traveler's responsibility.",
    gallery: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "amboseli-naivasha-mara-serengeti-tarangire-safari-11-days",
    name: "Amboseli, Naivasha, Maasai Mara, Serengeti & Tarangire Safari",
    destination: "Kenya & Tanzania",
    duration: "11 Days / 10 Nights",
    startingPrice: null,
    category: "Tanzania Safaris",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "An incredible East African adventure across Kenya and Tanzania, combining Amboseli, Naivasha, the Maasai Mara, the Serengeti, and Tarangire National Park.",
    overview:
      "Experience an incredible East African adventure across Kenya and Tanzania, combining the wildlife of Amboseli, the scenic beauty of Naivasha, the legendary Maasai Mara, the vast Serengeti plains and the elephant-rich Tarangire National Park.",
    highlights: [
      "Amboseli elephant herds with Mount Kilimanjaro backdrop",
      "Lake Naivasha boat ride",
      "Maasai village cultural visit",
      "Isebania border crossing into the Serengeti",
      "Tarangire's elephant herds and baobab trees",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Amboseli | Scenic Journey & Afternoon Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling to Amboseli Sopa Lodge for lunch and check-in. An afternoon game drive follows, with Mount Kilimanjaro as a backdrop. Meals: Lunch & Dinner. Accommodation: Amboseli Sopa Lodge." },
      { day: 2, title: "Amboseli | Full-Day Wildlife Safari", description: "A full-day game drive through Amboseli's wetlands and open plains for elephants, lions, giraffes, zebras and buffaloes, with a picnic lunch. Meals: Breakfast, Lunch & Dinner. Accommodation: Amboseli Sopa Lodge." },
      { day: 3, title: "Amboseli – Naivasha | Scenic Transfer & Boat Ride", description: "Check out and depart for Lake Naivasha through the Great Rift Valley. Arrive at Naivasha Sopa Resort, then a boat ride on the lake looking for hippos and birdlife. Meals: Breakfast, Lunch & Dinner. Accommodation: Naivasha Sopa Resort." },
      { day: 4, title: "Naivasha – Maasai Mara | Scenic Journey & Afternoon Game Drive", description: "Check out and travel through the Rift Valley to Jambo Mara Safari Lodge for lunch and check-in, then a first game drive in the Maasai Mara. Meals: Breakfast, Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge." },
      { day: 5, title: "Maasai Mara | Full-Day Game Drive", description: "A full-day game drive across the Mara plains searching for the Big Five, with a picnic lunch in the reserve. Meals: Breakfast, Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge." },
      { day: 6, title: "Maasai Mara | Morning Safari & Cultural Experience", description: "An early morning game drive, then a visit to a Maasai village to experience local culture and traditional dances, followed by another afternoon game drive. Meals: Breakfast, Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge." },
      { day: 7, title: "Maasai Mara – Serengeti | Isebania Border Crossing", description: "Check out and depart for the Isebania border, completing immigration formalities before entering the Serengeti with a game drive en route to Serengeti Serena Safari Lodge. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 8, title: "Serengeti | Full-Day Game Drive", description: "A full-day game drive across the vast Serengeti plains for lions, cheetahs, leopards, elephants, buffaloes, giraffes, and large herds of wildebeest and zebras, with a picnic lunch. Meals: Breakfast, Lunch & Dinner. Accommodation: Serengeti Serena Safari Lodge." },
      { day: 9, title: "Serengeti – Tarangire | Morning Game Drive & Afternoon Safari", description: "An early morning game drive, then check out and depart for Tarangire National Park, arriving for lunch and check-in. An afternoon game drive follows, exploring the park's elephant herds and iconic baobab trees. Meals: Breakfast, Lunch & Dinner. Accommodation: Tarangire Simba Lodge." },
      { day: 10, title: "Tarangire | Full-Day Wildlife Safari", description: "A full-day game drive across Tarangire's diverse landscapes searching for elephants, lions, giraffes, zebras, buffaloes and numerous bird species, with a picnic lunch. Meals: Breakfast, Lunch & Dinner. Accommodation: Tarangire Simba Lodge." },
      { day: 11, title: "Tarangire – Arusha | Morning Safari & Departure", description: "An early morning game drive before breakfast, then check out and transfer to Arusha Airport or Kilimanjaro International Airport for your onward flight. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights Amboseli Sopa Lodge, 1 night Naivasha Sopa Resort, 3 nights Jambo Mara Safari Lodge, 2 nights Serengeti Serena Safari Lodge, 2 nights Tarangire Simba Lodge.",
    included: [
      "Private safari vehicle",
      "Professional English-speaking safari guide",
      "10 nights' accommodation",
      "Meals as indicated",
      "Amboseli, Maasai Mara, Serengeti and Tarangire park fees",
      "Lake Naivasha boat ride",
      "Maasai village visit",
      "Game drives",
      "Kenya–Tanzania border transfer assistance",
      "Bottled drinking water",
      "Nairobi pickup and Arusha/Kilimanjaro Airport drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Kenya and Tanzania visa fees",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "Requires a Kenya–Tanzania border crossing at Isebania; valid passport and both countries' visas are the traveler's responsibility. This is a long, multi-destination itinerary — fitness for extended travel days is recommended.",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "ol-pejeta-family-adventure-3-days",
    name: "Ol Pejeta Family Adventure",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Family Safaris",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A fun-filled family getaway to Ol Pejeta Conservancy, combining wildlife, conservation experiences and plenty of time to relax — different from the usual Mara/Amboseli route.",
    overview:
      "Enjoy a fun-filled family getaway to Ol Pejeta Conservancy, combining wildlife, conservation experiences and plenty of time to relax. This safari is ideal for families looking for something different from the traditional Maasai Mara and Amboseli routes.",
    highlights: [
      "Equator crossing photo stop",
      "Sweetwaters Chimpanzee Sanctuary visit",
      "Rhino conservation area experience",
      "Family-friendly game drives",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Ol Pejeta | Equator Stop & Afternoon Safari", description: "Pickup from your Nairobi hotel or airport, traveling through Central Kenya with a stop at the Equator crossing for photos. Arrive at Sweet Waters for lunch and check-in, then an afternoon game drive looking for rhinos, elephants, giraffes, zebras, buffaloes and lions. Meals: Lunch & Dinner. Accommodation: Sweet Waters." },
      { day: 2, title: "Ol Pejeta | Wildlife & Chimpanzee Experience", description: "A morning game drive, then a visit to the Sweetwaters Chimpanzee Sanctuary to learn about chimpanzee conservation, followed by a visit to the rhino conservation area. Lunch and relaxation, then a short afternoon game drive. Meals: Breakfast, Lunch & Dinner. Accommodation: Sweet Waters." },
      { day: 3, title: "Ol Pejeta – Nairobi | Morning Safari & Departure", description: "An early morning game drive when animals are most active, then breakfast, check out, and transfer to Nairobi with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at Sweet Waters.",
    included: [
      "Private safari vehicle",
      "Professional English-speaking driver-guide",
      "2 nights' accommodation",
      "Meals as indicated",
      "Ol Pejeta Conservancy fees",
      "Game drives",
      "Sweetwaters Chimpanzee Sanctuary visit",
      "Rhino conservation experience",
      "Equator stop",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Priced per adult and per child — ask us for current rates for your family's ages and group size.",
    gallery: [
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "naivasha-hells-gate-family-escape-3-days",
    name: "Lake Naivasha & Hell's Gate Family Escape",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Family Safaris",
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A relaxed family adventure around Lake Naivasha, combining wildlife, a boat ride, nature walks and the dramatic landscapes of Hell's Gate National Park.",
    overview:
      "Escape the city for a relaxed family adventure around Lake Naivasha, combining wildlife, a boat ride, nature walks and the dramatic landscapes of Hell's Gate National Park.",
    highlights: [
      "Lake Naivasha boat ride with hippos and fish eagles",
      "Crescent Island family walking safari",
      "Hell's Gate National Park visit",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Naivasha | Boat Ride & Family Relaxation", description: "Pickup from your Nairobi hotel or airport, a scenic drive through the Great Rift Valley to a family-friendly hotel for lunch and check-in, followed by a boat ride on Lake Naivasha looking for hippos, fish eagles and other birdlife. Meals: Lunch & Dinner. Accommodation: Lake Naivasha resort." },
      { day: 2, title: "Naivasha | Crescent Island Family Walking Safari", description: "A boat across the lake to Crescent Island for a guided family walking safari among giraffes, zebras and wildebeest — a different way to experience wildlife without a vehicle. Return by boat for lunch, then an afternoon at leisure. Meals: Breakfast, Lunch & Dinner. Accommodation: Lake Naivasha resort." },
      { day: 3, title: "Naivasha – Nairobi | Leisure & Departure", description: "A relaxed breakfast and time to enjoy the hotel facilities before checking out and transferring back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast & Lunch." },
    ],
    accommodation: "2 nights at a Lake Naivasha resort.",
    included: [
      "Private transport",
      "Professional English-speaking guide",
      "2 nights' accommodation",
      "Meals as indicated",
      "Lake Naivasha boat ride",
      "Hell's Gate National Park visit",
      "Crescent Island walking safari",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Bicycle hire at Hell's Gate",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Priced per adult and per child — ask us for current rates for your family's ages and group size.",
    gallery: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "diani-beach-family-getaway-5-days",
    name: "Diani Beach Family Getaway",
    destination: "Diani, Kenya",
    duration: "5 Days / 4 Nights",
    startingPrice: null,
    category: "Family Safaris",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A relaxing family holiday on Kenya's South Coast, combining comfortable beach accommodation, ocean experiences and plenty of free time to unwind.",
    overview:
      "Enjoy a relaxing family holiday on Kenya's beautiful South Coast, combining comfortable beach accommodation, ocean experiences and plenty of free time for the whole family to unwind.",
    highlights: [
      "Family-friendly beach resort in Diani",
      "Full-day Wasini Island excursion with snorkeling",
      "Optional glass-bottom boat rides and water sports",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Diani | Flight & Beach Arrival", description: "Pickup from your Nairobi hotel or airport and transfer for your journey to the coast. On arrival, transfer to Diani Beach, check in to your family-friendly resort, and enjoy the afternoon relaxing by the pool or beach. Meals: Lunch & Dinner. Accommodation: Family-friendly beach resort in Diani." },
      { day: 2, title: "Diani | Beach & Leisure Day", description: "A relaxed day swimming, playing on the beach and enjoying the resort facilities, with optional glass-bottom boat rides, water sports, or a nearby beach attraction visit. Meals: Breakfast, Lunch & Dinner. Accommodation: Family-friendly beach resort in Diani." },
      { day: 3, title: "Diani | Wasini Island & Marine Experience", description: "A full-day Wasini Island excursion with a boat ride through coastal waters, marine sightseeing and snorkeling (conditions permitting), plus a seafood lunch and time exploring the island. Meals: Breakfast, Lunch & Dinner. Accommodation: Family-friendly beach resort in Diani." },
      { day: 4, title: "Diani | Family Beach Day & Leisure", description: "Another relaxed day at the beach with swimming, beach games, and resort facilities for the whole family. Meals: Breakfast, Lunch & Dinner. Accommodation: Family-friendly beach resort in Diani." },
      { day: 5, title: "Diani – Nairobi | Beach Morning & Departure", description: "Breakfast and final beach time, then check out and transfer to Ukunda Airport for your flight (or train) back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "4 nights at a family-friendly beach resort in Diani.",
    included: [
      "Return flight between Nairobi and the Coast",
      "Airport transfers in Nairobi and Diani",
      "4 nights' accommodation at a family-friendly beach resort",
      "Meals as indicated",
      "Full-day Wasini Island excursion",
      "Boat ride during the Wasini Island excursion",
      "Marine sightseeing",
      "Snorkeling, subject to sea and weather conditions",
      "Professional guide during the excursion",
      "Bottled drinking water",
      "All transfers as indicated",
    ],
    excluded: [
      "International flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional water sports and activities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Priced per adult and per child — ask us for current rates for your family's ages and group size.",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "maasai-mara-photography-safari-3-days",
    name: "Maasai Mara Wildlife Photography Safari",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Photography Safaris",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Capture the incredible wildlife and landscapes of the Maasai Mara on a photography-focused safari built around early morning game drives and golden-hour light.",
    overview:
      "Capture the incredible wildlife and landscapes of the Maasai Mara on a photography-focused safari designed around early morning game drives, golden-hour photography and plenty of time in the reserve.",
    highlights: [
      "Guide positions the vehicle for optimal photography angles",
      "Full-day game drive with extended time at sightings",
      "Golden-hour and sunrise photography sessions",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Afternoon Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling through the Great Rift Valley to Jambo Mara Safari Lodge for lunch and check-in. An afternoon game drive follows, with the guide helping identify photography opportunities and positioning the vehicle for clear views, continuing into golden-hour light. Meals: Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge. Photography Focus: Wildlife portraits, landscapes & golden-hour photography." },
      { day: 2, title: "Maasai Mara | Full-Day Photography Game Drive", description: "An early departure to take advantage of the best morning light, spending sufficient time at wildlife sightings to capture animals in their natural environment. A packed lunch in the reserve, then continued photography into the golden hour. Meals: Breakfast, Lunch & Dinner. Accommodation: Jambo Mara Safari Lodge. Photography Focus: Big cats, wildlife behaviour, action photography & landscapes." },
      { day: 3, title: "Maasai Mara – Nairobi | Sunrise Photography & Departure", description: "A final sunrise game drive capturing the morning light across the Mara plains as the reserve comes alive, then breakfast, check out, and transfer to Nairobi with drop-off at your hotel or the airport. Meals: Breakfast & Lunch. Photography Focus: Sunrise landscapes, wildlife portraits & morning activity." },
    ],
    accommodation: "2 nights at Jambo Mara Safari Lodge.",
    included: [
      "Transport in a safari vehicle",
      "Professional English-speaking driver-guide",
      "2 nights' accommodation at Jambo Mara Safari Lodge",
      "Meals as indicated",
      "Maasai Mara National Reserve fees",
      "Private game drives",
      "Packed lunch during the full-day game drive",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Camera and photography equipment",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "Bring your own camera equipment, spare batteries, and memory cards — none are provided. A beanbag or camera support is recommended for vehicle-based shooting.",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "amboseli-photography-safari-3-days",
    name: "Amboseli Wildlife Photography Safari",
    destination: "Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Photography Safaris",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Discover the famous elephant herds and dramatic landscapes of Amboseli on a photography-focused safari, with Mount Kilimanjaro as an iconic backdrop.",
    overview:
      "Discover the famous elephant herds and dramatic landscapes of Amboseli on a photography-focused safari, with spectacular views of Mount Kilimanjaro providing an iconic backdrop.",
    highlights: [
      "Elephant herds photographed against Mount Kilimanjaro",
      "Full-day game drive with golden-hour photography",
      "Sunrise photography session on departure day",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Amboseli | Afternoon Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling to Amboseli and checking in at Amboseli Sopa Lodge for lunch. An afternoon wildlife photography game drive follows, with opportunities to photograph elephants against Mount Kilimanjaro on clear days, continuing into golden-hour light. Meals: Lunch & Dinner. Accommodation: Amboseli Sopa Lodge. Photography Focus: Elephants, Kilimanjaro, landscapes & golden-hour photography." },
      { day: 2, title: "Amboseli | Full-Day Photography Game Drive", description: "An early departure for the best morning light, exploring the park's habitats for elephant herds, lions, giraffes, zebras and buffaloes, with a packed lunch. The afternoon continues into golden hour for wildlife interactions and scenic compositions. Meals: Breakfast, Lunch & Dinner. Accommodation: Amboseli Sopa Lodge. Photography Focus: Elephant herds, wildlife behaviour, Mount Kilimanjaro & golden-hour photography." },
      { day: 3, title: "Amboseli – Nairobi | Sunrise Photography & Departure", description: "A final sunrise game drive capturing the first light over the plains and, weather permitting, Mount Kilimanjaro, before breakfast, check out, and transfer to Nairobi with drop-off at your hotel or the airport. Meals: Breakfast & Lunch. Photography Focus: Sunrise, elephants, Kilimanjaro & landscape photography." },
    ],
    accommodation: "2 nights at Amboseli Sopa Lodge.",
    included: [
      "Transport in a safari vehicle",
      "Professional English-speaking driver-guide",
      "2 nights' accommodation at Amboseli Sopa Lodge",
      "Meals as indicated",
      "Amboseli National Park fees",
      "Private game drives",
      "Packed lunch during the full-day game drive",
      "Bottled drinking water",
      "Nairobi hotel or airport pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Camera and photography equipment",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo:
      "Bring your own camera equipment, spare batteries, and memory cards — none are provided. Mount Kilimanjaro views depend on weather conditions.",
    gallery: [
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "mombasa-beach-getaway-3-days",
    name: "Mombasa Beach Getaway",
    destination: "Mombasa, Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Beach Holiday",
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A relaxing 3-day getaway to the Kenyan coast filled with beach relaxation, coastal experiences and the vibrant atmosphere of Mombasa.",
    overview:
      "Escape to the Kenyan coast for a relaxing 3-day getaway filled with beach relaxation, coastal experiences and the vibrant atmosphere of Mombasa.",
    highlights: [
      "SGR train journey between Nairobi and Mombasa",
      "Fort Jesus, a UNESCO World Heritage Site",
      "Guided tour of Mombasa Old Town",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Mombasa | SGR Train Journey & Beach Relaxation", description: "Pickup from your Nairobi hotel or airport and transfer to the SGR Terminus for your train to Mombasa, arriving in the afternoon. Transfer to La Fattoria Resort, check in, have lunch, and relax for the rest of the afternoon. Meals: Lunch & Dinner. Accommodation: La Fattoria Resort." },
      { day: 2, title: "Mombasa | Fort Jesus & City Tour", description: "A half-day Mombasa city tour visiting Fort Jesus, a UNESCO World Heritage Site, followed by a guided tour of Mombasa Old Town with its Swahili architecture, narrow streets and local markets. Return to La Fattoria Resort in the afternoon to relax. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort." },
      { day: 3, title: "Mombasa – Nairobi | SGR Journey", description: "Breakfast and check out, then transfer to the Mombasa SGR Terminus for your train back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "2 nights at La Fattoria Resort.",
    included: [
      "Return SGR train tickets between Nairobi and Mombasa",
      "Nairobi hotel or airport pickup and drop-off",
      "Mombasa SGR transfers",
      "2 nights' accommodation at La Fattoria Resort",
      "Meals as indicated",
      "Fort Jesus and Mombasa Old Town tour",
      "Bottled drinking water",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "SGR train tickets are date- and time-specific — travel dates should be confirmed in advance.",
    gallery: [
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "malindi-beach-getaway-3-days",
    name: "Malindi Beach Getaway",
    destination: "Malindi, Kenya",
    duration: "3 Days / 2 Nights",
    startingPrice: null,
    category: "Beach Holiday",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "A relaxing coastal escape to Malindi, known for its beautiful beaches, marine life, Swahili culture and laid-back atmosphere.",
    overview:
      "Enjoy a relaxing coastal escape to Malindi, known for its beautiful beaches, marine life, Swahili culture and laid-back atmosphere.",
    highlights: [
      "Relaxed beach time at Casa Malindi",
      "Optional boat ride, snorkeling, or dolphin tour",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Malindi | Journey to the Coast", description: "Pickup from your Nairobi hotel or airport and departure for Malindi. Arrive and check in at Casa Malindi, with lunch and an afternoon at leisure. Meals: Lunch & Dinner. Accommodation: Casa Malindi." },
      { day: 2, title: "Malindi | Marine & Beach Experience", description: "A full day exploring the Malindi coast, with an optional boat ride, snorkeling or dolphin tour (subject to availability and weather), or a relaxed day on the beach at Casa Malindi. Meals: Breakfast, Lunch & Dinner. Accommodation: Casa Malindi." },
      { day: 3, title: "Malindi – Nairobi | Journey Back", description: "Breakfast and check out from Casa Malindi, then the journey back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "2 nights at Casa Malindi.",
    included: [
      "Transport from Nairobi to Malindi and back",
      "2 nights' accommodation at Casa Malindi",
      "Meals as indicated",
      "Nairobi hotel or airport pickup and drop-off",
      "Malindi transfers",
      "Bottled drinking water during transfers",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional marine and beach activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Optional marine activities (boat ride, snorkeling, dolphin tour) are subject to weather and sea conditions.",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "diani-beach-getaway-4-days",
    name: "Diani Beach Getaway",
    destination: "Diani, Kenya",
    duration: "4 Days / 3 Nights",
    startingPrice: null,
    category: "Beach Holiday",
    image:
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Four days of white sandy beaches, warm tropical waters and complete relaxation on Kenya's South Coast.",
    overview:
      "Escape to the beautiful Kenyan South Coast for four days of white sandy beaches, warm tropical waters and complete relaxation in Diani.",
    highlights: [
      "White-sand beach relaxation at Diani Sea Resort",
      "Optional boat ride, snorkeling, dolphin tour, or kitesurfing",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Diani | Journey to the Coast", description: "Pickup from your Nairobi hotel or airport, traveling to Diani Beach and arriving in the afternoon. Check in at your beach hotel, with lunch and time relaxing by the pool or beach. Meals: Lunch & Dinner. Accommodation: Diani Sea Resort." },
      { day: 2, title: "Diani | Beach & Leisure", description: "A full day at leisure — relaxing on the beach, swimming, or enjoying the resort facilities, with optional boat rides, snorkeling, a dolphin tour, kitesurfing or other water sports at an additional cost. Meals: Breakfast, Lunch & Dinner. Accommodation: Diani Sea Resort." },
      { day: 3, title: "Diani | Ocean Experience & Leisure", description: "Another relaxing day at the coast, with the option to explore coastal waters by boat, snorkel, or visit nearby attractions, or simply relax at the beach. Meals: Breakfast, Lunch & Dinner. Accommodation: Diani Beach Resort (to be confirmed)." },
      { day: 4, title: "Diani – Nairobi | Journey Back", description: "Breakfast and check out, then the journey back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "3 nights at a Diani beach resort.",
    included: [
      "Transport from Nairobi to Diani and back",
      "3 nights' accommodation",
      "Meals as indicated",
      "Nairobi hotel or airport pickup and drop-off",
      "Diani hotel transfers",
      "Bottled drinking water during transfers",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional water sports and marine activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Optional water sports and marine activities are available at an additional cost, subject to conditions.",
    gallery: [
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "tsavo-east-diani-beach-getaway-5-days",
    name: "Tsavo East & Diani Beach Getaway",
    destination: "Kenya",
    duration: "5 Days / 4 Nights",
    startingPrice: null,
    category: "Beach & Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "The perfect combination of wildlife and beach relaxation — a safari in Tsavo East followed by a relaxing stay at the Kenyan coast.",
    overview:
      "Experience the perfect combination of wildlife and beach relaxation with a safari in Tsavo East followed by a relaxing stay at the Kenyan coast.",
    highlights: [
      "Full-day Tsavo East game drive",
      "Direct transfer from safari to Diani Beach",
      "Optional water sports on the coast",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Tsavo East | Safari Journey", description: "Pickup from your Nairobi hotel or airport, traveling to Tsavo East National Park and arriving for lunch. An afternoon game drive follows, searching for elephants, lions, giraffes, zebras and buffaloes. Meals: Lunch & Dinner. Accommodation: Voi Safari Lodge." },
      { day: 2, title: "Tsavo East | Full-Day Game Drive", description: "A full-day game drive through Tsavo East's diverse landscapes for elephants, lions, leopards, buffaloes, giraffes, zebras, and numerous bird species. Meals: Breakfast, Lunch & Dinner. Accommodation: Voi Safari Lodge." },
      { day: 3, title: "Tsavo East – Diani Beach | Safari to the Coast", description: "Check out and depart for Diani Beach, arriving in the afternoon. Check in at your beach hotel and spend the rest of the day relaxing by the pool or on the beach. Meals: Breakfast, Lunch & Dinner. Accommodation: Diani Beach Resort (to be confirmed)." },
      { day: 4, title: "Diani Beach | Leisure Day", description: "A full day at leisure on Diani's white-sand beach, with optional boat rides, snorkeling, a dolphin experience, kitesurfing or other water activities. Meals: Breakfast, Lunch & Dinner. Accommodation: Diani Beach Resort (to be confirmed)." },
      { day: 5, title: "Diani – Nairobi | Journey Back", description: "Breakfast and check out, then the journey back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "2 nights at Voi Safari Lodge, 2 nights at a Diani beach resort.",
    included: [
      "Transport throughout the itinerary",
      "4 nights' accommodation",
      "Meals as indicated",
      "Tsavo East National Park game drives",
      "Park entry fees",
      "Services of an English-speaking driver-guide",
      "Bottled drinking water during the safari",
      "Nairobi pickup and drop-off",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional beach activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Optional beach activities in Diani are available at an additional cost.",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "maasai-mara-mombasa-beach-safari-6-days",
    name: "Maasai Mara & Mombasa Beach Safari",
    destination: "Kenya",
    duration: "6 Days / 5 Nights",
    startingPrice: null,
    category: "Beach & Safari",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Combine an unforgettable Maasai Mara safari with a relaxing beach escape in Mombasa, connected by a scenic SGR train journey.",
    overview:
      "Combine an unforgettable Maasai Mara safari with a relaxing beach escape in Mombasa.",
    highlights: [
      "Full-day Maasai Mara game drive",
      "SGR train journey from Nairobi to Mombasa",
      "Full-day Wasini Island excursion with snorkeling",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Maasai Mara | Safari Journey", description: "Pickup from your Nairobi hotel or airport, traveling through the Great Rift Valley to the Maasai Mara, arriving for lunch and check-in. An afternoon game drive follows. Meals: Lunch & Dinner. Accommodation: Maasai Mara (to be confirmed)." },
      { day: 2, title: "Maasai Mara | Full-Day Game Drive", description: "A full-day game drive across the reserve's famous plains, with a chance to see the Big Five, and a picnic lunch. Meals: Breakfast, Lunch & Dinner. Accommodation: Maasai Mara (to be confirmed)." },
      { day: 3, title: "Maasai Mara – Nairobi – Mombasa", description: "Check out and travel from the Mara to Nairobi, then transfer to the SGR Terminus for the train to Mombasa, arriving in the afternoon. Transfer to La Fattoria Resort for dinner. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort." },
      { day: 4, title: "Mombasa | Wasini Island Excursion", description: "A full-day Wasini Island excursion with a boat ride through coastal waters, marine sightseeing and snorkeling (conditions permitting), plus a seafood lunch. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort." },
      { day: 5, title: "Mombasa | Beach & Leisure Day", description: "A relaxing day at the coast — the beach, swimming pool, resort facilities, or exploring Mombasa independently. Optional activities available at an additional cost. Meals: Breakfast, Lunch & Dinner. Accommodation: La Fattoria Resort." },
      { day: 6, title: "Mombasa – Nairobi | SGR Journey", description: "Breakfast and check out, then transfer to the Mombasa SGR Terminus for the train back to Nairobi, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "2 nights in the Maasai Mara, 3 nights at La Fattoria Resort, Mombasa.",
    included: [
      "Return SGR train tickets between Nairobi and Mombasa",
      "Transport for the Maasai Mara safari",
      "Nairobi airport/hotel pickup and drop-off",
      "Mombasa SGR transfers",
      "5 nights' accommodation",
      "Meals as indicated",
      "Maasai Mara game drives and park fees",
      "Full-day Wasini Island excursion",
      "Boat ride and marine sightseeing",
      "Snorkeling equipment where applicable",
      "Services of an English-speaking safari guide",
      "Bottled drinking water during the safari",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "SGR train tickets are date- and time-specific — travel dates should be confirmed in advance.",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "amboseli-malindi-beach-getaway-5-days",
    name: "Amboseli & Malindi Beach Getaway",
    destination: "Kenya",
    duration: "5 Days / 4 Nights",
    startingPrice: null,
    category: "Beach & Safari",
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Discover the beauty of Amboseli National Park and finish your adventure with a relaxing beach holiday in Malindi.",
    overview:
      "Discover the beauty of Amboseli National Park and finish your adventure with a relaxing beach holiday in Malindi.",
    highlights: [
      "Amboseli elephant herds with Mount Kilimanjaro backdrop",
      "Full-day Amboseli game drive",
      "Relaxing beach time at Casa Malindi",
    ],
    itinerary: [
      { day: 1, title: "Nairobi – Amboseli | Safari Journey & Game Drive", description: "Pickup from your Nairobi hotel or airport, traveling to Amboseli with views of Mount Kilimanjaro on clear days. Arrive at Manjaro Camp for lunch and check-in, then an afternoon game drive. Meals: Lunch & Dinner. Accommodation: Manjaro Camp." },
      { day: 2, title: "Amboseli | Full-Day Game Drive", description: "A full-day game drive through Amboseli's open plains and swamps, with spectacular views of Mount Kilimanjaro. Meals: Breakfast, Lunch & Dinner. Accommodation: Manjaro Camp." },
      { day: 3, title: "Amboseli – Malindi | Journey to the Coast", description: "Check out and depart for Malindi, arriving in the afternoon and checking in at Casa Malindi, with the rest of the afternoon at leisure. Meals: Breakfast, Lunch & Dinner. Accommodation: Casa Malindi." },
      { day: 4, title: "Malindi | Marine & Beach Experience", description: "A relaxing day exploring the Malindi coast, with an optional marine excursion, boat ride, snorkeling or dolphin tour, or simply relaxing on the beach. Meals: Breakfast, Lunch & Dinner. Accommodation: Casa Malindi." },
      { day: 5, title: "Malindi – Nairobi | Journey Back", description: "Breakfast and check out from Casa Malindi, then travel back to Nairobi by road or a flight transfer, with drop-off at your hotel or the airport. Meals: Breakfast." },
    ],
    accommodation: "2 nights at Manjaro Camp, 2 nights at Casa Malindi.",
    included: [
      "Transport throughout the itinerary",
      "4 nights' accommodation",
      "Meals as indicated",
      "Amboseli National Park game drives and entry fees",
      "Services of an English-speaking driver-guide",
      "Nairobi pickup and drop-off",
      "Bottled drinking water during the safari",
    ],
    excluded: [
      "International and domestic flights",
      "Personal expenses and souvenirs",
      "Drinks and alcoholic beverages",
      "Tips and gratuities",
      "Optional marine and beach activities",
      "Any services not specifically mentioned under \"What's Included\"",
    ],
    importantInfo: "Optional marine activities in Malindi are subject to weather and sea conditions.",
    gallery: [
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
  },
];