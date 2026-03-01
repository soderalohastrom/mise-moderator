export interface Forum {
  id: string;
  name: string;
  emoji: string;
  description: string;
  guidelines: string;
}

export const FORUMS: Forum[] = [
  {
    id: "the-line",
    name: "The Line",
    emoji: "🔥",
    description: "Day-to-day kitchen life — shifts, stations, war stories",
    guidelines: "Posts about working the line, shift stories, kitchen culture, cooking techniques during service, station management, ticket flow, and daily kitchen operations."
  },
  {
    id: "front-of-house",
    name: "Front of House",
    emoji: "🍷",
    description: "Service, hosting, bartending, guest relations",
    guidelines: "Posts about serving, bartending, hosting, wine service, guest interactions, table management, tips, and front-of-house operations."
  },
  {
    id: "the-walk-in",
    name: "The Walk-In",
    emoji: "🥶",
    description: "Vent space — burnout, bad shifts, industry frustrations",
    guidelines: "Venting about bad shifts, difficult customers, burnout, industry complaints, emotional support, and frustrations with the hospitality lifestyle. This is the safe space."
  },
  {
    id: "purveyors",
    name: "Purveyors",
    emoji: "📦",
    description: "Equipment, suppliers, ingredients, product recs",
    guidelines: "Posts about kitchen equipment, knives, cookware, ingredient sourcing, supplier reviews, product recommendations, and purchasing decisions."
  },
  {
    id: "the-pass",
    name: "The Pass",
    emoji: "🍽️",
    description: "Plating, food photography, menu design, culinary creativity",
    guidelines: "Posts about plating techniques, food photography, menu creation, recipe development, culinary art, and creative expression through food."
  },
  {
    id: "books-and-business",
    name: "Books & Business",
    emoji: "📊",
    description: "Ownership, P&L, margins, hiring, ops, management",
    guidelines: "Posts about restaurant ownership, financial management, profit margins, hiring, staff management, business operations, and restaurant economics."
  },
  {
    id: "health-and-fire",
    name: "Health & Fire",
    emoji: "🧯",
    description: "Codes, inspections, food safety, HACCP, insurance",
    guidelines: "Posts about health inspections, fire codes, food safety protocols, HACCP plans, ServSafe, insurance, regulatory compliance, and workplace safety."
  },
  {
    id: "stagecraft",
    name: "Stagecraft",
    emoji: "🎓",
    description: "Career moves, stages, culinary school, mentorship",
    guidelines: "Posts about career development, staging (internships), culinary school, job hunting, mentorship, skill development, and professional growth in hospitality."
  },
  {
    id: "off-the-clock",
    name: "Off the Clock",
    emoji: "🏖️",
    description: "Life outside the industry — hobbies, relationships, decompression",
    guidelines: "Posts about life outside work, hobbies, relationships, travel, personal interests, and anything NOT directly about the restaurant industry."
  },
  {
    id: "pop-ups-and-projects",
    name: "Pop-Ups & Projects",
    emoji: "🚚",
    description: "Side hustles, catering, pop-ups, food trucks, collabs",
    guidelines: "Posts about pop-up restaurants, food trucks, catering gigs, side businesses, collaborations, and entrepreneurial food projects outside traditional restaurants."
  },
  {
    id: "tech-and-tools",
    name: "Tech & Tools",
    emoji: "💻",
    description: "POS systems, scheduling software, delivery apps, automation",
    guidelines: "Posts about restaurant technology, POS systems, scheduling software, delivery platforms, kitchen display systems, reservation tech, and digital tools."
  },
  {
    id: "the-regulars",
    name: "The Regulars",
    emoji: "👋",
    description: "Introductions, community events, AMAs, meta/site feedback",
    guidelines: "Posts about community introductions, site feedback, AMAs, community events, meetups, and meta discussions about the Mise platform itself."
  }
];

export function getForumById(id: string): Forum | undefined {
  return FORUMS.find(f => f.id === id);
}
