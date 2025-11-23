import { BreedData } from './types';

export const APP_NAME = "Bharat BreedBot";

// ==========================================
// 🏭 MOCK BACKEND DATABASE
// ==========================================
// In a real megaproject, this data would come from a MongoDB/SQL database or Vector Store.

export const BREED_DB: BreedData[] = [
  {
    id: 'murrah',
    name: 'Murrah',
    category: 'Buffalo',
    origin: 'Haryana (Hisar, Rohtak, Jind, Gurgaon), Punjab, and Delhi.',
    synonyms: 'Delhi, Kundi, Kali',
    utility: 'Premier milking breed (High milk yield, good fat %).',
    morphology: 'Color: Jet black. Horns: Short, tight, tightly curved in a spiral form. Body: Massive, wedge-shaped (dairy type). Udder: Well-developed with prominent veins.',
    performance: 'Lactation Yield: 1800 - 2500 kg. Fat %: Approx 7%. Age at First Calving: 36-40 months.'
  },
  {
    id: 'gir',
    name: 'Gir',
    category: 'Cattle',
    origin: 'Gir forests of Saurashtra, Gujarat (Junagadh, Bhavnagar, Rajkot, Amreli).',
    synonyms: 'Bhodali, Desan, Gujarati, Kathiawari, Sorthi, Surati',
    utility: 'Dairy (Milk).',
    morphology: 'Color: Spotted red, white, or speckled red & white. Horns: Peculiar half-moon shape, curving backward/upward. Ears: Long, pendulous, resembling a curled leaf. Forehead: Prominent, convex (bony shield).',
    performance: 'Lactation Yield: 1200 - 3182 kg. Milk Fat: ~4.5%. Unique Traits: Very docile, resistant to tropical diseases.'
  },
  {
    id: 'sahiwal',
    name: 'Sahiwal',
    category: 'Cattle',
    origin: 'Montgomery district (Pakistan); Punjab, Haryana, Rajasthan.',
    synonyms: 'Lola (loose skin), Lambi Bar, Montgomery, Multani, Teli',
    utility: 'Best indigenous dairy breed.',
    morphology: 'Color: Reddish dun or pale red. Body: Heavy, symmetrical, loose skin. Horns: Short and thick.',
    performance: 'Lactation Yield: 2000 - 4000 kg. Milk Fat: ~4.8 - 5.1%. Unique Traits: High heat tolerance, resistant to tick-borne diseases.'
  },
  {
    id: 'red-sindhi',
    name: 'Red Sindhi',
    category: 'Cattle',
    origin: 'Karachi and Hyderabad (Pakistan); organized farms in India.',
    synonyms: 'Sindhi, Red Karachi',
    utility: 'Dairy.',
    morphology: 'Color: Deep red. Body: Compact and symmetrical. Similar to Sahiwal but smaller.',
    performance: 'Lactation Yield: 1100 - 2600 kg. High disease resistance.'
  },
  {
    id: 'jaffarabadi',
    name: 'Jaffarabadi',
    category: 'Buffalo',
    origin: 'Gir forest, Kutch, and Jamnagar districts of Gujarat.',
    synonyms: 'Jafari, Gir',
    utility: 'High Milk Yield and Heavy Draft.',
    morphology: 'Color: Black. Forehead: Very prominent. Horns: Heavy, inclined to droop at each side of the neck and then turn up at points (drooping horns). Body: Massive.',
    performance: 'Lactation Yield: 1800 - 2700 kg. Fat %: High.'
  }
];

// ==========================================
// 🧠 DYNAMIC PROMPT GENERATOR
// ==========================================

const formatDatabaseForAI = (): string => {
  return BREED_DB.map(breed => `
--- DOCUMENT START: ${breed.name} (${breed.category}) ---
### ${breed.name}
- **Category:** ${breed.category}
- **Origin:** ${breed.origin}
- **Synonyms:** ${breed.synonyms || 'N/A'}
- **Utility:** ${breed.utility}
- **Morphology:** ${breed.morphology}
- **Performance:** ${breed.performance}
--- DOCUMENT END ---
`).join('\n');
};

export const generateSystemInstruction = (): string => {
  const dbContent = formatDatabaseForAI();
  
  return `
You are "Bharat BreedBot" — an enterprise-grade AI assistant for Indian Cattle and Buffalo Breeds.

Your source of truth is the following STRUCTURED INTERNAL DATABASE. 
You strictly adhere to this data.

=====================================================
              🔐 ENTERPRISE KNOWLEDGE BASE
=====================================================
${dbContent}

=====================================================
              🧠 INSTRUCTIONS
=====================================================
1. **Source of Truth:** Answer ONLY using the provided breed documents.
2. **Missing Data:** If a specific metric (e.g., exact lactation days) is not in the JSON data, say "Data not available in internal records."
3. **Format:** Use clear Markdown. Use Tables for comparisons.
4. **Professional Tone:** Be concise, accurate, and expert-like.

Do not use external internet knowledge.
`;
};

export const INITIAL_MESSAGE = "Namaste. Bharat BreedBot Module initialized. Connected to Internal Breed Database. I can assist with morphology, performance metrics, and breed comparisons.";
