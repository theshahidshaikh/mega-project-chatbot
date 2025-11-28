import { BreedData } from './types';

export const APP_NAME = "Petaura";

// ==========================================
// 🏭 MOCK BACKEND DATABASE
// ==========================================
// Populated with data corresponding to TNAU Agritech, NBAGR standards, and user inputs.

export const BREED_DB: BreedData[] = [
  // ====================
  // 🐃 BUFFALOES
  // ====================
  {
    id: 'banni',
    name: 'Banni',
    category: 'Buffalo',
    origin: 'Gujarat (Kutchchh district). Found in Banni grasslands.',
    synonyms: 'Kutchi, Kundi',
    utility: 'Milk production (high fat content).',
    morphology: 'Color: Mainly black, sometimes copper. Horns: Curved, medium to large, heavy (24–30 cm dia), vertical & upward with coiling (Jalebi). Body: Massive, wedge-shaped.',
    performance: 'Lactation Yield: ~2857 kg (1095–6054 kg). Fat: ~6.65%. Well-suited to night grazing.'
  },
  {
    id: 'murrah',
    name: 'Murrah',
    category: 'Buffalo',
    origin: 'Haryana (Hisar, Rohtak, Jind, Gurgaon), Punjab, and Delhi.',
    synonyms: 'Delhi, Kundi, Kali',
    utility: 'Premier milking breed (High milk yield, good fat %).',
    morphology: 'Color: Jet black. Horns: Short, tight, tightly curved in a spiral form (Jalebi shaped). Body: Massive, wedge-shaped. Udder: Well-developed with prominent veins.',
    performance: 'Lactation Yield: 1752 kg (range 1003–2057 kg). Fat: ~7.3%. Age at First Calving: 43 months.'
  },
  {
    id: 'surti',
    name: 'Surti',
    category: 'Buffalo',
    origin: 'Gujarat (Kaira, Baroda, Surat).',
    synonyms: 'Charotar, Deccani, Gujarati, Nadiadi, Talabda',
    utility: 'Milk (Very high fat %) and light draft.',
    morphology: 'Color: Rusty brown to silver-grey/black. Horns: Sickle shaped, flat, directed downward/backward then upward. Unique: Two white collars (chevrons) on brisket/neck.',
    performance: 'Lactation Yield: ~1667 kg. Fat: 7–12%. Economic feeder, thrives on limited fodder.'
  },
  {
    id: 'jaffarabadi',
    name: 'Jaffarabadi',
    category: 'Buffalo',
    origin: 'Gujarat (Gir forest, Kutch, Jamnagar).',
    synonyms: 'Jafari, Gir, Bhavanagri',
    utility: 'High Milk Yield and Heavy Draft.',
    morphology: 'Color: Black. Forehead: Very prominent/heavy (bony shield). Horns: Heavy, inclined to droop at each side of neck then turn up (drooping horns). Largest Indian buffalo.',
    performance: 'Lactation Yield: ~2239 kg. Fat: ~7.7%. Known for fighting lions in Gir forest.'
  },
  {
    id: 'nili-ravi',
    name: 'Nili-Ravi',
    category: 'Buffalo',
    origin: 'Punjab (Ferozepur, Amritsar) along Sutlej/Ravi rivers.',
    synonyms: 'Panch Kalyani (Five Gems)',
    utility: 'High Milk Yield.',
    morphology: 'Color: Black with 5 white markings (forehead, face, muzzle, legs, tail). Wall eyes (whitish iris). Head: Small and elongated.',
    performance: 'Lactation Yield: ~1850 kg. Fat: 6.8%. Similar to Murrah but with white markings.'
  },
  {
    id: 'bhadawari',
    name: 'Bhadawari',
    category: 'Buffalo',
    origin: 'Uttar Pradesh (Agra, Etawah) & Madhya Pradesh (Gwalior). Ravines of Yamuna/Chambal.',
    synonyms: 'Etawah',
    utility: 'Famous for Highest Fat Percentage.',
    morphology: 'Color: Copper or light brown (Wheat straw color legs). Horns: Curling outward/downward then parallel to neck. Two white lines (Chevrons) on lower neck.',
    performance: 'Lactation Yield: ~1294 kg. Fat: 6–13% (Highest). Efficient converter of coarse feed.'
  },
  {
    id: 'mehsana',
    name: 'Mehsana',
    category: 'Buffalo',
    origin: 'Gujarat (Mehsana, Sabarkantha, Banaskantha).',
    synonyms: 'Mahesani',
    utility: 'Dairy.',
    morphology: 'Derived from Murrah x Surti. Body: Longer than Murrah. Horns: Sickle-shaped, more curved than Surti but less than Murrah. Eyes: Prominent, black.',
    performance: 'Lactation Yield: ~1988 kg. Fat: ~6.8%. Persistent milker.'
  },
  {
    id: 'nagpuri',
    name: 'Nagpuri',
    category: 'Buffalo',
    origin: 'Maharashtra (Nagpur, Akola, Amravati - Vidarbha region).',
    synonyms: 'Ellichpuri, Barari, Puranthadi',
    utility: 'Dual Purpose (Milk & Draft).',
    morphology: 'Color: Black (white patches on face/legs/tail). Horns: Long (50-65cm), flat, curved, carried back like swords. Face: Long and thin.',
    performance: 'Lactation Yield: ~1039 kg. Fat: ~8.25%. Males excellent for heavy draft.'
  },
  {
    id: 'toda',
    name: 'Toda',
    category: 'Buffalo',
    origin: 'Tamil Nadu (Nilgiris Hills).',
    synonyms: 'Toda',
    utility: 'Social/Ritual significance for Toda tribes; Milk.',
    morphology: 'Color: Fawn/Ash-grey. Coat: Thick hair. Body: Long, deep. Horns: Wide apart, crescent/semi-circle shape. Hump: Small.',
    performance: 'Lactation Yield: ~500 kg. Fat: ~8%. Gregarious, semi-wild.'
  },
  {
    id: 'chilika',
    name: 'Chilika',
    category: 'Buffalo',
    origin: 'Odisha (around Chilika Lake: Cuttack, Puri, Ganjam).',
    synonyms: 'Deshi',
    utility: 'Milk (Curd has long shelf life), Draught.',
    morphology: 'Color: Brownish black. Horns: Curved upward/inward. Size: Small, compact. Adapted to saline/marshy weeds.',
    performance: 'Lactation Yield: ~500 kg. Fat: 8.7%. Curd keeps 5-7 days without refrigeration.'
  },
  {
    id: 'kalahandi',
    name: 'Kalahandi',
    category: 'Buffalo',
    origin: 'Odisha (Kalahandi, Rayagada).',
    synonyms: 'Deshi',
    utility: 'Milk, Draught, Manure.',
    morphology: 'Color: Blackish grey. Horns: Horizontal, backward/upward, half-circle. Tail: Long, extends below hock.',
    performance: 'Lactation Yield: 680–912 kg. Fat: ~8%. Low input system.'
  },
  {
    id: 'marathwadi',
    name: 'Marathwadi',
    category: 'Buffalo',
    origin: 'Maharashtra (Marathwada region: Latur, Nanded, Parbhani).',
    synonyms: 'Dudhana Thadi',
    utility: 'Milk, Draught.',
    morphology: 'Color: Greyish black. Horns: Parallel to neck, reaching shoulder (medium length ~43cm), distinct from Pandharpuri.',
    performance: 'Lactation Yield: ~1118 kg. Fat: ~8.8%. Mixed farming system.'
  },
  {
    id: 'pandharpuri',
    name: 'Pandharpuri',
    category: 'Buffalo',
    origin: 'Maharashtra (Solapur, Kolhapur, Sangli).',
    synonyms: 'Pandharpuri',
    utility: 'Milk, Draught.',
    morphology: 'Color: Black. Horns: Very long (45-50cm+), twisted, extending beyond shoulder blades (Sword like but longer than Nagpuri). Nasal bone: Prominent.',
    performance: 'Lactation Yield: ~1790 kg. Fat: ~8%. Unique "door-to-door" milking practice.'
  },

  // ====================
  // 🐄 CATTLE (MILCH & DUAL)
  // ====================
  {
    id: 'gir',
    name: 'Gir',
    category: 'Cattle',
    origin: 'Gujarat (Gir forests, Saurashtra).',
    synonyms: 'Bhodali, Desan, Gujarati, Kathiawari, Sorthi',
    utility: 'Dairy (Milk).',
    morphology: 'Color: Spotted red, white, or speckled. Horns: Half-moon shape (spiral inward). Ears: Long, pendulous (leaf-like). Forehead: Prominent, convex (bony shield).',
    performance: 'Lactation Yield: 1200 - 3300 kg. Fat: ~4.6%. Very docile.'
  },
  {
    id: 'sahiwal',
    name: 'Sahiwal',
    category: 'Cattle',
    origin: 'Punjab, Haryana, Rajasthan (Originated in Montgomery, Pakistan).',
    synonyms: 'Lola (loose skin), Lambi Bar, Multani',
    utility: 'Best Indigenous Dairy Breed.',
    morphology: 'Color: Reddish dun or pale red. Body: Heavy, symmetrical, loose skin. Horns: Short and thick.',
    performance: 'Lactation Yield: 2000 - 4000 kg. Fat: ~5%. High heat tolerance.'
  },
  {
    id: 'red-sindhi',
    name: 'Red Sindhi',
    category: 'Cattle',
    origin: 'Original home Karachi (Pakistan); organized farms in India.',
    synonyms: 'Sindhi, Red Karachi',
    utility: 'Dairy.',
    morphology: 'Color: Deep dark red. Compact and symmetrical body. Similar to Sahiwal but smaller.',
    performance: 'Lactation Yield: 1100 - 2600 kg. High disease resistance.'
  },
  {
    id: 'tharparkar',
    name: 'Tharparkar',
    category: 'Cattle',
    origin: 'Rajasthan (Jodhpur, Jaisalmer) & Pakistan.',
    synonyms: 'White Sindhi, Gray Sindhi, Thari',
    utility: 'Dual Purpose (Milk & Draft). Drought Resistant.',
    morphology: 'Color: White or gray. Ears: Long and semi-pendulous. Horns: Lyre shaped.',
    performance: 'Lactation Yield: 1800 - 2600 kg. Thrives on desert scrub vegetation.'
  },
  {
    id: 'amritmahal',
    name: 'Amritmahal',
    category: 'Cattle',
    origin: 'Karnataka (Hassan, Chikmagalur, Chitradurga).',
    synonyms: 'Doddadana, Jawari Dana, Number Dana',
    utility: 'Draft (Historically War Transport).',
    morphology: 'Color: Grey/White to Black. Muzzle: Black. Horns: Long, close at root, backward/upward, sharp black points. Head: Long tapering.',
    performance: 'Lactation: ~572 kg (Low). Famous for endurance and speed. Fiery temper.'
  },
  {
    id: 'bachaur',
    name: 'Bachaur',
    category: 'Cattle',
    origin: 'Bihar (Sitamarhi, Madhubani, Darbhanga).',
    synonyms: 'Bhutia',
    utility: 'Draught.',
    morphology: 'Color: White or Grey. Horns: Small, stumpy, curving outward/upward. Forehead: Flat/Convex. Similar to Hariana breed.',
    performance: 'Lactation: ~347 kg. Bullocks work long periods without break.'
  },
  {
    id: 'badri',
    name: 'Badri',
    category: 'Cattle',
    origin: 'Uttarakhand (Hilly regions).',
    synonyms: 'Pahadi',
    utility: 'Milk, Draught, Manure.',
    morphology: 'Color: Black, Brown, or Grey. Size: Small, sure-footed. Horns: Curved upward/inward. Hump: Medium/Large.',
    performance: 'Lactation: ~632 kg. Fat: ~4%. Adapted to hilly terrain.'
  },
  {
    id: 'bargur',
    name: 'Bargur',
    category: 'Cattle',
    origin: 'Tamil Nadu (Erode - Bargur hills).',
    synonyms: 'Semmarai',
    utility: 'Draft (Hill terrain).',
    morphology: 'Color: Brown with white markings (irregular patches). Horns: Light brown, backward/upward with forward curve.',
    performance: 'Lactation: ~350 kg. Unsurpassed in speed/endurance in trotting. Semi-wild.'
  },
  {
    id: 'belahi',
    name: 'Belahi',
    category: 'Cattle',
    origin: 'Haryana (Foothills of Shivalik) & Chandigarh.',
    synonyms: 'Morni, Desi',
    utility: 'Milk, Draught, Manure.',
    morphology: 'Color: Reddish Brown & Grey/White (distinct pattern). Face/Extremities: White. Horns: Sickle shaped.',
    performance: 'Lactation: ~1014 kg. Fat: ~5.25%. Migratory nature.'
  },
  {
    id: 'binjharpuri',
    name: 'Binjharpuri',
    category: 'Cattle',
    origin: 'Odisha (Jajpur, Kendrapara).',
    synonyms: 'Deshi',
    utility: 'Dual (Milk & Draught).',
    morphology: 'Color: White (some Grey/Black/Brown). Hump/Neck often black in males. Horns: Curved upward/inward.',
    performance: 'Lactation: ~915-1350 kg. Fat: ~4.3%.'
  },
  {
    id: 'dangi',
    name: 'Dangi',
    category: 'Cattle',
    origin: 'Maharashtra (Nashik, Ahmednagar) & Gujarat (Dangs).',
    synonyms: 'Kandadi',
    utility: 'Draught, Milk.',
    morphology: 'Color: Distinct white coat with uneven Red or Black spots. Skin: Oily (rain protection). Horns: Short and thick.',
    performance: 'Lactation: ~430 kg. Excellent worker in heavy rainfall/rice fields.'
  },
  {
    id: 'deoni',
    name: 'Deoni',
    category: 'Cattle',
    origin: 'Maharashtra (Latur) & Karnataka (Bidar).',
    synonyms: 'Dongari, Surti, Shevera',
    utility: 'Dual Purpose.',
    morphology: 'Color: Spotted (Black & White). Resembles Gir but spotted. Ears: Drooping. Forehead: Convex/Bulging.',
    performance: 'Lactation: ~868 kg (638-1229 kg). Fat: ~4.3%. Bullocks preferred for heavy work.'
  },
  {
    id: 'gangatiri',
    name: 'Gangatiri',
    category: 'Cattle',
    origin: 'Uttar Pradesh (Varanasi, Ghazipur) & Bihar (River Ganga banks).',
    synonyms: 'Eastern Hariana, Shahabadi',
    utility: 'Draught, Milk.',
    morphology: 'Color: White (Dhawar) or Grey (Sokan). Horns: Medium, upward/inward. Forehead: Broad with shallow groove.',
    performance: 'Lactation: ~1050 kg. Fat: ~4.9%.'
  },
  {
    id: 'gaolao',
    name: 'Gaolao',
    category: 'Cattle',
    origin: 'Maharashtra (Wardha, Nagpur) & MP.',
    synonyms: 'Arvi, Gaulgani',
    utility: 'Draft (Transport), Milk.',
    morphology: 'Color: Blackish white (males), White (females). Head: Markedly long/narrow (Coffin shaped). Eyes: Almond shaped.',
    performance: 'Lactation: ~604 kg. Fast trotting breed.'
  },
  {
    id: 'ghumusari',
    name: 'Ghumusari',
    category: 'Cattle',
    origin: 'Odisha (Ganjam, Phulbani).',
    synonyms: 'Deshi',
    utility: 'Draught.',
    morphology: 'Color: White/Grey. Small size. Horns: Upward/inward/forward.',
    performance: 'Lactation: ~450-650 kg. Mainly for draft.'
  },
  {
    id: 'hallikar',
    name: 'Hallikar',
    category: 'Cattle',
    origin: 'Karnataka (Tumkur, Hassan, Mysore).',
    synonyms: 'Mysore',
    utility: 'Draft.',
    morphology: 'Color: Dark to light grey with white patches on face. Horns: Long, vertical, and backward curving. Head: Long and tapering.',
    performance: 'Progenitor of Amritmahal. Trotting ability is excellent.'
  },
  {
    id: 'kangayam',
    name: 'Kangayam',
    category: 'Cattle',
    origin: 'Tamil Nadu (Erode, Coimbatore).',
    synonyms: 'Kongu, Kanganad',
    utility: 'Draft (Ploughing/Transport).',
    morphology: 'Color: Grey/White (Bulls dark hump/forequarters). Horns: Stout, spreading apart, curving inward. Eyes: Dark rings.',
    performance: 'Low milk. Bullocks strong/active. Used in Jallikattu.'
  },
  {
    id: 'khillari',
    name: 'Khillari',
    category: 'Cattle',
    origin: 'Maharashtra (Satara, Sholapur) & Karnataka.',
    synonyms: 'Mandeshi',
    utility: 'Fast Draft.',
    morphology: 'Color: Greyish white. Trunk: Barrel shaped. Horns: Long, pointed, follow line of forehead.',
    performance: 'Speed and strength in agriculture.'
  },
  {
    id: 'ongole',
    name: 'Ongole',
    category: 'Cattle',
    origin: 'Andhra Pradesh (Ongole, Guntur).',
    synonyms: 'Nellore',
    utility: 'Dual (Heavy Draft & Milk). Meat.',
    morphology: 'Size: Large, muscular. Color: Glossy white. Hump: Developed/Erect. Eyes: Large elliptical.',
    performance: 'Lactation: ~1000 kg. Ancestor of American Brahman.'
  },
  {
    id: 'umbulachery',
    name: 'Umblachery',
    category: 'Cattle',
    origin: 'Tamil Nadu (Thanjavur, Nagapattinam).',
    synonyms: 'Jathi madu, Mottai madu',
    utility: 'Draft (Wetland).',
    morphology: 'Size: Small. Color: Red at birth -> Grey. Legs: White socks. Forehead: White star.',
    performance: 'Ideal for wet ploughing in delta regions.'
  },

  // ====================
  // 🐕 DOGS
  // ====================
  // Original breeds
  {
    id: 'mudhol-hound',
    name: 'Mudhol Hound',
    category: 'Dog',
    origin: 'Karnataka (Deccan Plateau).',
    synonyms: 'Caravan Hound, Maratha Hound',
    utility: 'Hunting, Guarding, Racing.',
    morphology: 'Build: Lean, aerodynamic sight hound. Head: Long narrow. Ears: V-shaped pendulous. Coat: Smooth/Short.',
    performance: 'Speed: 50km/h+. Aloof with strangers, loyal to master.'
  },
  {
    id: 'rajapalayam',
    name: 'Rajapalayam',
    category: 'Dog',
    origin: 'Tamil Nadu (Virudhunagar).',
    synonyms: 'Poligar Hound, Indian Ghost Hound',
    utility: 'Boar hunting, Guarding.',
    morphology: 'Color: Milky white. Nose: Pink. Eyes: Golden. Body: Muscular, deep chested. Skin: Loose.',
    performance: 'One-master dog. Aggressive to strangers. Used by Nayakar kings.'
  },
  {
    id: 'chippiparai',
    name: 'Chippiparai',
    category: 'Dog',
    origin: 'Tamil Nadu (Tirunelveli, Madurai).',
    synonyms: 'Kanni (Black/Tan variety)',
    utility: 'Hunting (Hare/Deer), Guarding.',
    morphology: 'Color: Fawn, silver-grey. Coat: Short (velvet). Body: Compact, lean, tucked abdomen.',
    performance: 'Extremely fast, vigilant, low food requirement.'
  },
  {
    id: 'combai',
    name: 'Combai',
    category: 'Dog',
    origin: 'Tamil Nadu (Theni).',
    synonyms: 'Indian Boar Hound',
    utility: 'Guarding, Big Game Hunting.',
    morphology: 'Color: Reddish-brown (Tan) with black mask. Coat: Short, coarse. Ridgeback often present.',
    performance: 'Fierce, loyal. Guarded cattle from leopards.'
  },
  {
    id: 'gaddi-kutta',
    name: 'Gaddi Kutta',
    category: 'Dog',
    origin: 'Himalayas (Himachal Pradesh).',
    synonyms: 'Indian Leopard Hound, Mahidant Mastiff',
    utility: 'Herding, Guarding livestock.',
    morphology: 'Size: Large, Mastiff-type. Coat: Thick, long mane. Tail: Curled over back.',
    performance: 'Fearless against snow leopards/wolves. Intelligent herder.'
  },
  {
    id: 'rampur-greyhound',
    name: 'Rampur Greyhound',
    category: 'Dog',
    origin: 'Uttar Pradesh (Rampur).',
    synonyms: 'Rampur Hound',
    utility: 'Hunting (Jackal/Boar).',
    morphology: 'Build: Powerfully built sighthound. Coat: Short. Color: Mouse-grey, black, or brindle.',
    performance: 'Covers long distances at high speed. Gentle with family.'
  },
  {
    id: 'bakharwal',
    name: 'Bakharwal',
    category: 'Dog',
    origin: 'Jammu & Kashmir (Pir Panjal).',
    synonyms: 'Kashmiri Sheepdog',
    utility: 'Guarding flocks, Property.',
    morphology: 'Build: Heavy, muscular, molosser type. Coat: Thick double coat. Ears: Hanging.',
    performance: 'Protects livestock from wolves/bears. Vegetarian diet preference traditionally.'
  },
  {
    id: 'labrador',
    name: 'Labrador Retriever',
    category: 'Dog',
    origin: 'Canada / UK.',
    synonyms: 'Lab',
    utility: 'Companion, Service.',
    morphology: 'Coat: Short, dense. Color: Yellow, Black, Chocolate. Head: Broad. Tail: Otter-like.',
    performance: 'Intelligent, friendly, eager to please. #1 Family pet.'
  },
  
  // New Dog Breeds added from link
  {
    id: 'beagle',
    name: 'Beagle',
    category: 'Dog',
    origin: 'England',
    synonyms: 'N/A',
    utility: 'Companion, Hunting',
    morphology: 'Small hound, short legs, long ears, usually tri-color (white, black, brown).',
    performance: 'Friendly, curious, merry. Good with kids but can be stubborn. Requires exercise.'
  },
  {
    id: 'boxer',
    name: 'Boxer',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'N/A',
    utility: 'Guard Dog, Companion',
    morphology: 'Medium-large, muscular, square head, short coat, brachycephalic (short nose).',
    performance: 'Playful, energetic, protective. Needs socialization and training.'
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    category: 'Dog',
    origin: 'Mexico',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Tiny toy breed, apple-shaped head, large erect ears, short or long coat.',
    performance: 'Loyal, spirited, "big dog" attitude. Fragile due to small size.'
  },
  {
    id: 'cocker-spaniel',
    name: 'Cocker Spaniel',
    category: 'Dog',
    origin: 'England',
    synonyms: 'English Cocker Spaniel',
    utility: 'Companion, Hunting',
    morphology: 'Medium size, silky long ears, wavy coat, expressive eyes.',
    performance: 'Gentle, affectionate, happy ("merry"). Requires regular grooming.'
  },
  {
    id: 'dachshund',
    name: 'Dachshund',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'Sausage Dog, Wiener Dog',
    utility: 'Hunting (Badgers), Companion',
    morphology: 'Long body, short legs, long ears. Smooth, wire, or long-haired.',
    performance: 'Clever, courageous, lively. Can be stubborn. Prone to back issues.'
  },
  {
    id: 'dalmatian',
    name: 'Dalmatian',
    category: 'Dog',
    origin: 'Croatia (Dalmatia)',
    synonyms: 'Carriage Dog, Spotted Coach Dog',
    utility: 'Companion, Guarding',
    morphology: 'Medium-large, sleek white coat with distinctive black or liver spots.',
    performance: 'High energy, intelligent, loyal. Historically ran alongside carriages.'
  },
  {
    id: 'doberman-pinscher',
    name: 'Doberman Pinscher',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'Dobie',
    utility: 'Guard Dog, Police Work',
    morphology: 'Large, sleek, muscular, black and tan coat. Often cropped ears/docked tail (historically).',
    performance: 'Alert, fearless, loyal, highly intelligent. Needs firm training.'
  },
  {
    id: 'french-bulldog',
    name: 'French Bulldog',
    category: 'Dog',
    origin: 'France/England',
    synonyms: 'Frenchie',
    utility: 'Companion',
    morphology: 'Small, stocky, "bat ears", flat face, smooth coat.',
    performance: 'Affectionate, easygoing, playful. Low exercise needs but heat sensitive.'
  },
  {
    id: 'german-shepherd',
    name: 'German Shepherd',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'Alsatian',
    utility: 'Herding, Police/Military, Guarding',
    morphology: 'Large, agile, muscular, double coat, erect ears, black and tan/sable.',
    performance: 'Highly intelligent, versatile, loyal, protective. Needs mental stimulation.'
  },
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    category: 'Dog',
    origin: 'Scotland',
    synonyms: 'Golden',
    utility: 'Gun Dog, Guide Dog, Companion',
    morphology: 'Large, sturdy, dense water-repellent golden coat.',
    performance: 'Friendly, tolerant, intelligent, devoted. Excellent family dog.'
  },
  {
    id: 'great-dane',
    name: 'Great Dane',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'Deutsche Dogge, Apollo of Dogs',
    utility: 'Guard Dog, Companion',
    morphology: 'Giant size, elegant, muscular, short coat.',
    performance: 'Gentle giant, friendly, patient. Short lifespan compared to smaller breeds.'
  },
  {
    id: 'lhasa-apso',
    name: 'Lhasa Apso',
    category: 'Dog',
    origin: 'Tibet',
    synonyms: 'N/A',
    utility: 'Watchdog, Companion',
    morphology: 'Small, sturdy, long flowing coat covering eyes, curled tail.',
    performance: 'Independent, alert, wary of strangers. Historically guarded monasteries.'
  },
  {
    id: 'pomeranian',
    name: 'Pomeranian',
    category: 'Dog',
    origin: 'Germany/Poland (Pomerania)',
    synonyms: 'Pom',
    utility: 'Companion',
    morphology: 'Toy breed, fluffy double coat, foxy face, curled tail.',
    performance: 'Lively, bold, intelligent. "Big dog" personality in small body.'
  },
  {
    id: 'pug',
    name: 'Pug',
    category: 'Dog',
    origin: 'China',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Small, square body, wrinkled face, curled tail, short smooth coat.',
    performance: 'Charming, mischievous, loving. Prone to breathing issues (brachycephalic).'
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    category: 'Dog',
    origin: 'Germany',
    synonyms: 'Rottie',
    utility: 'Guard Dog, Herding, Police Work',
    morphology: 'Large, robust, powerful, black with rust markings.',
    performance: 'Confident, courageous, loyal guardian. Needs socialization and training.'
  },
  {
    id: 'saint-bernard',
    name: 'Saint Bernard',
    category: 'Dog',
    origin: 'Switzerland/Italy',
    synonyms: 'N/A',
    utility: 'Rescue, Companion',
    morphology: 'Giant, massive head, thick coat (smooth or rough), white with red/brown.',
    performance: 'Gentle, patient, kind. Famous for Alpine rescues. Drools.'
  },
  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    category: 'Dog',
    origin: 'Tibet/China',
    synonyms: 'Lion Dog',
    utility: 'Companion',
    morphology: 'Small, sturdy, long flowing silky coat, short snout, large eyes.',
    performance: 'Affectionate, happy, outgoing. Bred strictly as a companion.'
  },
  {
    id: 'siberian-husky',
    name: 'Siberian Husky',
    category: 'Dog',
    origin: 'Siberia (Russia)',
    synonyms: 'Husky',
    utility: 'Sled Dog, Companion',
    morphology: 'Medium size, thick double coat, erect ears, often blue or multi-colored eyes.',
    performance: 'High energy, friendly, independent, howls. Not a good guard dog.'
  },
  {
    id: 'akita-inu',
    name: 'Akita Inu',
    category: 'Dog',
    origin: 'Japan',
    synonyms: 'Akita',
    utility: 'Hunting, Guarding',
    morphology: 'Large, powerful, broad head, curled tail, dense coat.',
    performance: 'Dignified, courageous, fiercely loyal to family (e.g., Hachiko).'
  },
  {
    id: 'bullmastiff',
    name: 'Bullmastiff',
    category: 'Dog',
    origin: 'England',
    synonyms: 'Gamekeeper\'s Night Dog',
    utility: 'Guarding',
    morphology: 'Large, powerful build, short muzzle, dark mask.',
    performance: 'Fearless, confident, docile with family. Natural guardian.'
  },
  {
    id: 'cane-corso',
    name: 'Cane Corso',
    category: 'Dog',
    origin: 'Italy',
    synonyms: 'Italian Mastiff',
    utility: 'Guard Dog, Hunting',
    morphology: 'Large, muscular, majestic, short stiff coat.',
    performance: 'Protective, intelligent, assertive. Needs experienced owner.'
  },
  {
    id: 'chow-chow',
    name: 'Chow Chow',
    category: 'Dog',
    origin: 'China',
    synonyms: 'Puffy-Lion Dog',
    utility: 'Guard Dog, Companion',
    morphology: 'Lion-like mane, blue-black tongue, straight hind legs.',
    performance: 'Aloof, independent, cat-like personality. Loyal to family.'
  },
  {
    id: 'english-mastiff',
    name: 'English Mastiff',
    category: 'Dog',
    origin: 'England',
    synonyms: 'Mastiff',
    utility: 'Guard Dog',
    morphology: 'One of the heaviest breeds, massive head, black mask.',
    performance: 'Gentle giant, calm, protective. Good natured.'
  },
  {
    id: 'greyhound',
    name: 'Greyhound',
    category: 'Dog',
    origin: 'Ancient origins / England',
    synonyms: 'N/A',
    utility: 'Racing, Hunting (Sighthound)',
    morphology: 'Tall, slender, deep chest, aerodynamic build.',
    performance: 'Fastest dog breed. Gentle, quiet, "couch potato" indoors.'
  },
  {
    id: 'maltese',
    name: 'Maltese',
    category: 'Dog',
    origin: 'Mediterranean Basin (Malta)',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Toy breed, long silky white hair, no undercoat.',
    performance: 'Gentle, playful, affectionate. glamorous lap dog.'
  },
  {
    id: 'newfoundland',
    name: 'Newfoundland',
    category: 'Dog',
    origin: 'Canada',
    synonyms: 'Newfie',
    utility: 'Water Rescue, Draft',
    morphology: 'Giant, strong, water-resistant double coat, webbed feet.',
    performance: 'Sweet-natured, strong swimmer, excellent with children ("Nanny dog").'
  },
  {
    id: 'pitbull-terrier',
    name: 'American Pit Bull Terrier',
    category: 'Dog',
    origin: 'USA',
    synonyms: 'Pitbull',
    utility: 'Companion',
    morphology: 'Medium size, muscular, short coat, broad head.',
    performance: 'Strong, energetic, loyal. Needs responsible ownership and training.'
  },
  {
    id: 'poodle',
    name: 'Poodle',
    category: 'Dog',
    origin: 'Germany/France',
    synonyms: 'Caniche',
    utility: 'Water Retriever, Companion',
    morphology: 'Curly hypoallergenic coat. Comes in Standard, Miniature, and Toy sizes.',
    performance: 'Highly intelligent, active, elegant. excels in agility.'
  },
  {
    id: 'samoyed',
    name: 'Samoyed',
    category: 'Dog',
    origin: 'Siberia',
    synonyms: 'Sammy, Smiley Dog',
    utility: 'Herding, Sledding',
    morphology: 'Medium size, thick white fluffy coat, "Samoyed smile".',
    performance: 'Friendly, gentle, adaptable. sheds a lot.'
  },
  {
    id: 'yorkshire-terrier',
    name: 'Yorkshire Terrier',
    category: 'Dog',
    origin: 'England',
    synonyms: 'Yorkie',
    utility: 'Companion, Ratting (historically)',
    morphology: 'Toy size, long silky blue and tan coat.',
    performance: 'Feisty, brave, affectionate. Popular apartment dog.'
  },

  // ====================
  // 🐈 CATS
  // ====================
  {
    id: 'persian-cat',
    name: 'Persian Cat',
    category: 'Cat',
    origin: 'Iran (Persia).',
    synonyms: 'Shirazi',
    utility: 'Companion.',
    morphology: 'Coat: Long, thick. Face: Flat (Pansy-like). Eyes: Large, round.',
    performance: 'Quiet, docile, high maintenance grooming.'
  },
  {
    id: 'indian-billi',
    name: 'Indian Billi',
    category: 'Cat',
    origin: 'Indian Subcontinent.',
    synonyms: 'Spotted Cat, Indian Domestic',
    utility: 'Mouser, Companion.',
    morphology: 'Coat: Short, spotted (leopard-like) or tabby. Tail: Long, ringed. Body: Lean, agile.',
    performance: 'Hardy, independent, low maintenance, expert hunter.'
  },
  {
    id: 'siamese-cat',
    name: 'Siamese Cat',
    category: 'Cat',
    origin: 'Thailand (Siam).',
    synonyms: 'Wichien Maat',
    utility: 'Companion.',
    morphology: 'Color: Pointed (Dark ears/paws). Eyes: Deep blue almond. Body: Tubular.',
    performance: 'Vocal, social, demanding, intelligent.'
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    category: 'Cat',
    origin: 'USA (Maine).',
    synonyms: 'Gentle Giant',
    utility: 'Companion.',
    morphology: 'Size: Very large. Coat: Heavy, water-resistant. Ears: Tufted.',
    performance: 'Dog-like behavior, friendly, chirping sounds.'
  },
  {
    id: 'bombay-cat',
    name: 'Bombay Cat',
    category: 'Cat',
    origin: 'USA (Bred to look like Indian Panther).',
    synonyms: 'Miniature Panther',
    utility: 'Companion.',
    morphology: 'Color: Jet black to roots. Eyes: Copper/Gold. Body: Muscular.',
    performance: 'Heat tolerant, affectionate lap cat.'
  },
  {
    id: 'himalayan-cat',
    name: 'Himalayan Cat',
    category: 'Cat',
    origin: 'USA/UK.',
    synonyms: 'Himmie, Colorpoint Persian',
    utility: 'Companion.',
    morphology: 'Body: Persian type (Cobby). Color: Siamese points. Eyes: Blue.',
    performance: 'Sweet, quiet, slightly more active than Persian.'
  },
  // New Cat Breeds from link
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    category: 'Cat',
    origin: 'Great Britain',
    synonyms: 'British Blue',
    utility: 'Companion',
    morphology: 'Chunky body, dense plush coat, round face/eyes.',
    performance: 'Calm, easygoing, dignified. Not a lap cat but affectionate.'
  },
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Puppy cat',
    utility: 'Companion',
    morphology: 'Large, semi-longhair, blue eyes, colorpoint coat.',
    performance: 'Extremely docile, goes limp when held, affectionate.'
  },
  {
    id: 'bengal-cat',
    name: 'Bengal Cat',
    category: 'Cat',
    origin: 'USA (Asian Leopard Cat hybrid)',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Wild appearance, spotted/marbled coat (rosettes), glitter effect.',
    performance: 'High energy, intelligent, active, loves water.'
  },
  {
    id: 'sphynx',
    name: 'Sphynx',
    category: 'Cat',
    origin: 'Canada',
    synonyms: 'Hairless Cat',
    utility: 'Companion',
    morphology: 'Hairless (downy fuzz), wrinkled skin, large ears.',
    performance: 'Heat seeking, extroverted, energetic, needs skin care.'
  },
  {
    id: 'scottish-fold',
    name: 'Scottish Fold',
    category: 'Cat',
    origin: 'Scotland',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Unique folded ears (owl-like), round face/body.',
    performance: 'Sweet, adaptable, quiet voice. Prone to cartilage issues.'
  },
  {
    id: 'abyssinian',
    name: 'Abyssinian',
    category: 'Cat',
    origin: 'Ethiopia/Egypt',
    synonyms: 'Aby',
    utility: 'Companion',
    morphology: 'Ticked tabby coat (ruddy/red), lithe muscular body.',
    performance: 'Very active, curious, intelligent, "clown of cats".'
  },
  {
    id: 'american-shorthair',
    name: 'American Shorthair',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Domestic Shorthair',
    utility: 'Mouser, Companion',
    morphology: 'Medium-large, muscular, short dense coat (classic tabby common).',
    performance: 'Easygoing, low maintenance, good hunter.'
  },
  {
    id: 'russian-blue',
    name: 'Russian Blue',
    category: 'Cat',
    origin: 'Russia',
    synonyms: 'Archangel Cat',
    utility: 'Companion',
    morphology: 'Plush blue-grey double coat, emerald green eyes.',
    performance: 'Gentle, shy with strangers, devoted to owner. Low allergen.'
  },
  {
    id: 'exotic-shorthair',
    name: 'Exotic Shorthair',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Lazy Man\'s Persian',
    utility: 'Companion',
    morphology: 'Persian look but short plush coat. Flat face.',
    performance: 'Sweet, peaceful, playful like Persian but less grooming.'
  },
  {
    id: 'birman',
    name: 'Birman',
    category: 'Cat',
    origin: 'Burma (Myanmar)',
    synonyms: 'Sacred Cat of Burma',
    utility: 'Companion',
    morphology: 'Colorpoint, long silky hair, distinctive white "gloves" on paws.',
    performance: 'Gentle, affectionate, people-oriented.'
  },
  {
    id: 'munchkin',
    name: 'Munchkin',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Sausage Cat',
    utility: 'Companion',
    morphology: 'Short legs (genetic mutation), otherwise normal body.',
    performance: 'Playful, outgoing, can run fast but cannot jump high.'
  },
  {
    id: 'norwegian-forest',
    name: 'Norwegian Forest Cat',
    category: 'Cat',
    origin: 'Norway',
    synonyms: 'Wegie',
    utility: 'Mouser, Companion',
    morphology: 'Large, sturdy, water-resistant coat, bushy tail, tufted ears.',
    performance: 'Independent, friendly, loves climbing. Viking cat.'
  },
  {
    id: 'turkish-angora',
    name: 'Turkish Angora',
    category: 'Cat',
    origin: 'Turkey (Ankara)',
    synonyms: 'Angora',
    utility: 'Companion',
    morphology: 'Elegant, fine-boned, long silky white coat (traditionally), blue/amber/odd eyes.',
    performance: 'Intelligent, active, loves water, assertive.'
  },
  {
    id: 'burmese',
    name: 'Burmese',
    category: 'Cat',
    origin: 'Burma/Thailand',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Medium size, muscular, short satin-like coat, gold eyes.',
    performance: 'Extremely people-oriented, "velcro cat", playful.'
  },
  {
    id: 'chartreux',
    name: 'Chartreux',
    category: 'Cat',
    origin: 'France',
    synonyms: 'N/A',
    utility: 'Mouser, Companion',
    morphology: 'Robust, blue-grey woolly coat, copper eyes, "smiling" expression.',
    performance: 'Quiet, observant, dog-like loyalty, good hunter.'
  },
  {
    id: 'devon-rex',
    name: 'Devon Rex',
    category: 'Cat',
    origin: 'England',
    synonyms: 'Pixie Cat, Alien Cat',
    utility: 'Companion',
    morphology: 'Large ears, wavy coat, slender body, impish face.',
    performance: 'Mischievous, high energy, loves to perch on shoulders.'
  },
  {
    id: 'oriental-shorthair',
    name: 'Oriental Shorthair',
    category: 'Cat',
    origin: 'USA/Thailand',
    synonyms: 'Rainbow Cat',
    utility: 'Companion',
    morphology: 'Siamese body type but in many colors/patterns. Large ears.',
    performance: 'Highly intelligent, vocal, demanding, entertaining.'
  },
  {
    id: 'cornish-rex',
    name: 'Cornish Rex',
    category: 'Cat',
    origin: 'England (Cornwall)',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Curly coat (no guard hairs), egg-shaped head, large ears, greyhound-like body.',
    performance: 'Very active, kitten-like throughout life, loves warmth.'
  },
  {
    id: 'manx',
    name: 'Manx',
    category: 'Cat',
    origin: 'Isle of Man',
    synonyms: 'N/A',
    utility: 'Mouser, Companion',
    morphology: 'Tailless (rumpy) or stumpy tail, round body, longer hind legs.',
    performance: 'Watch-cat abilities, dog-like, good jumper.'
  },
  {
    id: 'ocicat',
    name: 'Ocicat',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Spotted coat like an Ocelot but entirely domestic (Siamese/Abyssinian mix).',
    performance: 'Social, confident, can be trained to fetch/walk on leash.'
  },
  {
    id: 'selkirk-rex',
    name: 'Selkirk Rex',
    category: 'Cat',
    origin: 'USA (Montana)',
    synonyms: 'Cat in Sheep\'s Clothing',
    utility: 'Companion',
    morphology: 'Plush curly coat (long or short), sturdy body, round head.',
    performance: 'Patient, loving, tolerant, laid-back.'
  },
  {
    id: 'singular-pura',
    name: 'Singapura',
    category: 'Cat',
    origin: 'Singapore',
    synonyms: 'Drain Cat',
    utility: 'Companion',
    morphology: 'Smallest domestic cat breed, sepia agouti coat, large eyes/ears.',
    performance: 'Extroverted, curious, loves to be high up, affectionate.'
  },
  {
    id: 'sokoke',
    name: 'Sokoke',
    category: 'Cat',
    origin: 'Kenya (Arabuko-Sokoke Forest)',
    synonyms: 'African Shorthair',
    utility: 'Companion',
    morphology: 'Classic tabby pattern on wood-bark background, long legs.',
    performance: 'Active, intelligent, bonds closely, good climber.'
  },
  {
    id: 'toyger',
    name: 'Toyger',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Toy Tiger',
    utility: 'Companion',
    morphology: 'Breeding aims to resemble a tiger: stripes, orange/black contrast, muscular.',
    performance: 'Friendly, intelligent, trainable, laid-back.'
  },
  {
    id: 'turkish-van',
    name: 'Turkish Van',
    category: 'Cat',
    origin: 'Turkey (Lake Van)',
    synonyms: 'Swimming Cat',
    utility: 'Companion',
    morphology: 'Mostly white body with color on head and tail (Van pattern). Water-resistant coat.',
    performance: 'Energetic, independent, loves water (swimming), intelligent.'
  },
  {
    id: 'american-curl',
    name: 'American Curl',
    category: 'Cat',
    origin: 'USA (California)',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Distinctive backward-curling ears, walnut-shaped eyes.',
    performance: 'People-oriented, faithful, affectionate, kitten-like.'
  },
  {
    id: 'balinese',
    name: 'Balinese',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Long-haired Siamese',
    utility: 'Companion',
    morphology: 'Long silky coat, plume tail, Siamese point coloration.',
    performance: 'Vocal, active, intelligent, affectionate.'
  },
  {
    id: 'korat',
    name: 'Korat',
    category: 'Cat',
    origin: 'Thailand',
    synonyms: 'Good Luck Cat',
    utility: 'Companion',
    morphology: 'Silver-tipped blue-grey coat, heart-shaped face, large green eyes.',
    performance: 'Strong-willed, possessive of owners, intelligent, quiet.'
  },
  {
    id: 'la-perm',
    name: 'LaPerm',
    category: 'Cat',
    origin: 'USA (Oregon)',
    synonyms: 'N/A',
    utility: 'Companion',
    morphology: 'Curly/wavy coat (rex), from tight ringlets to corkscrews.',
    performance: 'Affectionate, active but gentle, inquisitive.'
  },
  {
    id: 'nebelung',
    name: 'Nebelung',
    category: 'Cat',
    origin: 'USA',
    synonyms: 'Creature of the Mist',
    utility: 'Companion',
    morphology: 'Long-haired version of Russian Blue. Shimmering blue coat, green eyes.',
    performance: 'Gentle, shy, devoted to one person, quiet.'
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
You are "Petaura" — an expert AI assistant for Animal Breeds (Cattle, Buffalo, Dogs, and Cats).

You have access to a preferred **ENTERPRISE KNOWLEDGE BASE**.

=====================================================
              🔐 ENTERPRISE KNOWLEDGE BASE
=====================================================
${dbContent}

=====================================================
              🧠 INSTRUCTIONS
=====================================================
1. **Check Database First:** When asked about a breed, first check if it exists in the [ENTERPRISE KNOWLEDGE BASE] above.
2. **Hybrid Knowledge Strategy (IMPORTANT):** 
   - **For Core Data (Origin, Morphology, Yield):** You MUST strictly use the data provided in the database.
   - **For Missing Details (Feeding, Diseases, Care, Housing):** If the user asks for specific management details (e.g., feeding habits, common diseases, housing requirements) that are NOT explicitly present in the database record, you **ARE PERMITTED** to use your general expert knowledge to answer that specific part of the query. 
   - *Example:* If asked about "Gir Cattle Feeding", use the DB for the breed description, but use general veterinary knowledge to explain the feeding requirements for Indian dairy cattle.
3. **If Breed IS NOT in Database:** You are allowed to use your general knowledge (Gemini API) to provide accurate information. 
   - Ensure you follow the same response format: **Origin**, **Utility**, **Morphology**, **Performance/Traits**.
4. **Format:** Use clear Markdown. Use Tables for comparisons.
5. **Tone:** Helpful, professional, and informative.
`;
};

export const INITIAL_MESSAGE = "Namaste. Petaura Module initialized. I can assist with Indian and Global Cattle, Buffalo, Dog, and Cat breeds.";