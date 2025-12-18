import { Language } from './translations';

export type Occupation = 'student' | 'farmer' | 'worker' | 'unemployed';
export type State = 'telangana' | 'andhra_pradesh' | 'karnataka';
export type SchemeType = 'central' | 'state';

export interface Scheme {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  type: SchemeType;
  occupation: Occupation[];
  states?: State[];
  url: string;
}

export const schemes: Scheme[] = [
  // Central Schemes
  {
    id: 'national-scholarship',
    name: {
      en: 'National Scholarship Portal',
      te: 'జాతీయ స్కాలర్‌షిప్ పోర్టల్',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल',
    },
    description: {
      en: 'One-stop solution for students to apply for various scholarships offered by Central and State Governments.',
      te: 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాలు అందించే వివిధ స్కాలర్‌షిప్‌లకు దరఖాస్తు చేసుకోవడానికి విద్యార్థులకు ఒకే పరిష్కారం.',
      hi: 'केंद्र और राज्य सरकारों द्वारा प्रदान की जाने वाली विभिन्न छात्रवृत्तियों के लिए आवेदन करने का एक-स्टॉप समाधान।',
    },
    type: 'central',
    occupation: ['student'],
    url: 'https://scholarships.gov.in/',
  },
  {
    id: 'pm-kisan',
    name: {
      en: 'PM-KISAN',
      te: 'పిఎం-కిసాన్',
      hi: 'पीएम-किसान',
    },
    description: {
      en: 'Direct income support of ₹6,000 per year to farmer families for agricultural expenses.',
      te: 'వ్యవసాయ ఖర్చుల కోసం రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 నేరుగా ఆదాయ మద్దతు.',
      hi: 'कृषि खर्चों के लिए किसान परिवारों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।',
    },
    type: 'central',
    occupation: ['farmer'],
    url: 'https://pmkisan.gov.in/',
  },
  {
    id: 'mnrega',
    name: {
      en: 'MNREGA',
      te: 'ఎంఎన్‌ఆర్‌ఇజిఎ',
      hi: 'मनरेगा',
    },
    description: {
      en: 'Guarantees 100 days of wage employment per year to rural households willing to do unskilled manual work.',
      te: 'అనర్హ చేతి పని చేయడానికి సిద్ధంగా ఉన్న గ్రామీణ కుటుంబాలకు సంవత్సరానికి 100 రోజుల వేతన ఉపాధి హామీ.',
      hi: 'ग्रामीण परिवारों को अकुशल शारीरिक काम करने के लिए प्रति वर्ष 100 दिनों की मजदूरी रोजगार की गारंटी।',
    },
    type: 'central',
    occupation: ['worker'],
    url: 'https://nrega.nic.in/',
  },
  {
    id: 'pmkvy',
    name: {
      en: 'PMKVY (Skill Training)',
      te: 'పిఎంకెవివై (నైపుణ్య శిక్షణ)',
      hi: 'पीएमकेवीवाई (कौशल प्रशिक्षण)',
    },
    description: {
      en: 'Free skill training program to enable youth to take up industry-relevant skill training and become employable.',
      te: 'పరిశ్రమ సంబంధిత నైపుణ్య శిక్షణ తీసుకోవడానికి మరియు ఉపాధి పొందడానికి యువకులను అనుమతించే ఉచిత నైపుణ్య శిక్షణ కార్యక్రమం.',
      hi: 'युवाओं को उद्योग-प्रासंगिक कौशल प्रशिक्षण लेने और रोजगार योग्य बनने के लिए मुफ्त कौशल प्रशिक्षण कार्यक्रम।',
    },
    type: 'central',
    occupation: ['unemployed'],
    url: 'https://www.skillindiadigital.gov.in/',
  },
  // State Schemes - Telangana
  {
    id: 'rythu-bandhu',
    name: {
      en: 'Rythu Bandhu',
      te: 'రైతు బంధు',
      hi: 'रायथु बंधु',
    },
    description: {
      en: 'Investment support of ₹10,000 per acre per crop season to farmers in Telangana.',
      te: 'తెలంగాణలో రైతులకు పంట సీజన్‌కు ఎకరాకు ₹10,000 పెట్టుబడి మద్దతు.',
      hi: 'तेलंगाना में किसानों को प्रति एकड़ प्रति फसल सीजन ₹10,000 की निवेश सहायता।',
    },
    type: 'state',
    occupation: ['farmer'],
    states: ['telangana'],
    url: 'https://rythubandhu.telangana.gov.in/',
  },
  // State Schemes - Andhra Pradesh
  {
    id: 'ysr-rythu-bharosa',
    name: {
      en: 'YSR Rythu Bharosa',
      te: 'వైఎస్‌ఆర్ రైతు భరోసా',
      hi: 'वाईएसआर रायथु भरोसा',
    },
    description: {
      en: 'Financial assistance to farmers in Andhra Pradesh with ₹13,500 per year for land-owning farmers.',
      te: 'ఆంధ్రప్రదేశ్‌లో భూమి ఉన్న రైతులకు సంవత్సరానికి ₹13,500 ఆర్థిక సహాయం.',
      hi: 'आंध्र प्रदेश में भूमि वाले किसानों को प्रति वर्ष ₹13,500 की वित्तीय सहायता।',
    },
    type: 'state',
    occupation: ['farmer'],
    states: ['andhra_pradesh'],
    url: 'https://ysrrythubharosa.ap.gov.in/',
  },
  // State Schemes - Karnataka
  {
    id: 'vidyasiri-scholarship',
    name: {
      en: 'Vidyasiri Scholarship',
      te: 'విద్యాసిరి స్కాలర్‌షిప్',
      hi: 'विद्यासिरी छात्रवृत्ति',
    },
    description: {
      en: 'Post-matric scholarship for students belonging to SC/ST/OBC categories in Karnataka.',
      te: 'కర్ణాటకలో SC/ST/OBC వర్గాలకు చెందిన విద్యార్థులకు పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్.',
      hi: 'कर्नाटक में SC/ST/OBC वर्ग के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति।',
    },
    type: 'state',
    occupation: ['student'],
    states: ['karnataka'],
    url: 'https://ssp.postmatric.karnataka.gov.in/',
  },
];

export const filterSchemes = (occupation: Occupation, state: State): Scheme[] => {
  return schemes.filter((scheme) => {
    const matchesOccupation = scheme.occupation.includes(occupation);
    const matchesState = scheme.type === 'central' || (scheme.states && scheme.states.includes(state));
    return matchesOccupation && matchesState;
  });
};
