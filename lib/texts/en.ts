import type { Texts } from "./de";

// Englische Fassung aller Texte aus de.ts – gleicher Aufbau, gleiche Reihenfolge.
export const en: Texts = {
  meta: {
    title: "Gecko Swimschool Mallorca – Mobile Swim School for Children",
    description:
      "Private swimming lessons for children all over Mallorca – safe, calm and discreet, at your own pool. German and Swiss swimming badges.",
    ogDescription:
      "Mobile swim school for children on Mallorca – we come to your pool.",
    ogLocale: "en_GB",
  },
  header: {
    homeLabel: "Gecko Swimschool – back to the home page",
    navLabel: "Main navigation",
    langLabel: "Language",
    skipLink: "Skip to content",
    nav: {
      about: "About us",
      offers: "Lessons",
      prices: "Prices",
      team: "Team",
      reviews: "Reviews",
      contact: "Contact",
    },
  },
  footer: {
    navLabel: "Legal",
    imprint: "Legal notice",
    privacy: "Privacy policy",
  },
  hero: {
    title: ["Learn Safe.", "Swim Happy.", "Grow Confident."],
    lead: "Your swim school for children on Mallorca.",
    cta: "How we teach",
    facts: [
      "Certified badge tests from Seepferdchen to Freischwimmer Gold",
      "One-to-one lessons in surroundings your child knows",
      "A range of group courses",
    ],
    logoAlt: "Gecko Swimschool Mallorca – logo with a swimming gecko",
  },
  about: {
    title: "Who we are",
    lead: "Gecko is a mobile swim school for children on Mallorca. We come to your own pool – with everything your child needs to learn.",
  },
  trust: {
    values: [
      {
        title: "Safety first",
        text: "Every lesson starts with a look at the water, the surroundings and how your child is feeling that day. Only then do we begin.",
      },
      {
        title: "Calm that rubs off",
        text: "Children do not learn under pressure. We give them time, support and confidence – step by step.",
      },
      {
        title: "Discretion",
        text: "We work in your private space. No photos, no names, nothing passed on – unless you have expressly agreed.",
      },
      {
        title: "Reliability",
        text: "On time, prepared and clearly agreed in advance. You always know who is coming and what is planned.",
      },
    ],
  },
  offers: {
    title: "Where we teach",
    lead: "Today we come to your home. Group courses and lessons in the sea will follow.",
    home: {
      title: "At your home",
      text: "Private one-to-one lessons at your own pool – anywhere on the island. Siblings are welcome to join in.",
    },
    pool: {
      title: "At the swimming pool",
      text: "Group courses at selected swimming pools on Mallorca.",
    },
    sea: {
      title: "In the sea",
      text: "Open-water lessons right at the beach – for children who already swim confidently in the pool.",
    },
    available: "Available now",
    soon: "Coming soon",
  },
  courses: {
    title: "From the first splash to gold",
    lead: "Every child starts exactly where they are. We stay with them up to the next badge – and beyond.",
    steps: [
      {
        title: "Baby swimming",
        text: "Discovering the water together with mum or dad – close together and with lots of play.",
      },
      {
        title: "Water confidence",
        text: "Face in the water, diving, gliding, jumping: trust instead of fear.",
      },
      {
        title: "Seepferdchen",
        text: "Focused preparation for the first German badge (“little seahorse”) – with the test right at your pool.",
      },
      {
        title: "Freischwimmer",
        text: "Bronze, silver and gold: stamina, technique and safety in deep water.",
      },
    ],
    mermaidTitle: "Mermaid swimming",
    mermaidText:
      "Gliding through the water with a fin – building strength, breathing and body awareness through play.",
    more: "Find out more",
  },
  badges: {
    title: "All German and Swiss swimming badges",
    text: "The test takes place where your child has learned: at your own pool. No unfamiliar pool and no exam stress.",
    fee: "Test fee: €15 per badge",
    germanTitle: "German badges",
    germanList: [
      "Seepferdchen",
      "Freischwimmer Bronze",
      "Freischwimmer Silver",
      "Freischwimmer Gold",
    ],
    germanBy: "Tested by Richy",
    swissTitle: "Swiss badges",
    swissText: "All Swiss swimming badges",
    swissBy: "Tested by Jelena",
  },
  prices: {
    title: "Prices",
    lead: "Private one-to-one lessons. A lesson lasts 45 minutes, including preparation and follow-up.",
    valid: "Valid 2025/2026",
    cards: [
      {
        name: "3-lesson card",
        price: "€270",
        perLesson: "€90 per lesson",
        saving: "",
        cta: "Ask about the 3-lesson card",
      },
      {
        name: "5-lesson card",
        price: "€420",
        perLesson: "€84 per lesson",
        saving: "You save €30",
        cta: "Ask about the 5-lesson card",
      },
      {
        name: "10-lesson card",
        price: "€790",
        perLesson: "€79 per lesson",
        saving: "You save €110",
        cta: "Ask about the 10-lesson card",
      },
      {
        name: "15-lesson card",
        price: "€1,110",
        perLesson: "€74 per lesson",
        saving: "You save €240",
        cta: "Ask about the 15-lesson card",
      },
    ],
    extraChild: "Each additional child",
    extraChildPrice: "+ €25 per lesson",
    badge: "Swimming badge",
    badgePrice: "€15 per test",
    travel: "Travel to and from you",
    travelNote: "from Portocolom, depending on distance",
    travelPrice: "[FLAT RATE depending on region]",
    notice:
      "Booked lessons are only firmly reserved once payment has been received in full. Until the booking is confirmed, dates are subject to change – availability can change at any time.",
  },
  team: {
    title: "Your swimming teachers",
    richy: {
      photoAlt: "Richy, swimming teacher at Gecko Swimschool",
      role: "Swimming teacher",
      text: "Twelve years as a soldier in a special forces unit of the German armed forces. Today he teaches children to feel safe in the water – with the same calm and care.",
      badges:
        "Tests all German badges: Seepferdchen, Freischwimmer Bronze, Silver and Gold.",
    },
    jelena: {
      photoAlt: "Photo of Jelena to follow",
      photoSoon: "Photo to follow",
      role: "Swimming teacher",
      text: "Born in Switzerland, with a big heart for children. What she enjoys most is seeing children outgrow themselves in the water.",
      badges: "Tests all Swiss swimming badges.",
    },
  },
  reviews: {
    title: "What parents say",
    lead: "Words from families we have had the pleasure of teaching.",
    quoteOpen: "“",
    quoteClose: "”",
    // Platzhalter – bitte nur durch echte Bewertungen (mit Einverständnis der Familien) ersetzen.
    items: [1, 2, 3, 4].map((n) => ({
      text: `[Review text ${n} – a family’s real review goes here.]`,
      name: "[Family M.]",
      place: "[Place on Mallorca]",
    })),
  },
  contact: {
    title: "Let’s talk",
    text: "Tell us where you are on Mallorca and how old your child is. We will get back to you quickly with available dates.",
    whatsapp: "Message us on WhatsApp",
    phone: "Phone",
    base: "Based in",
    baseText: "Portocolom, Mallorca – lessons all over the island",
    mailTitle: "Prefer email?",
    mailText:
      "Send us your enquiry with your location, your child’s age and the lessons you are interested in.",
  },
};
