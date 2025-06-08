export const categoryMenuList = [
  {
    id: 1,
    title: "Blegtoria",
    src: "/img/livestock.png?v=2",
    href: "/shop/Blegtoria",
    unoptimized: true
  },
  {
    id: 2,
    title: "Mjetet",
    src: "/img/gardening-tools.png?v=2",
    href: "/shop/Mjetet",
    unoptimized: true
  },
  {
    id: 3,
    title: "Serat",
    src: "/img/greenhouse.png?v=2",
    unoptimized: true,
    href: "/shop/Serat"
  },
  {
    id: 4,
    title: "Teknologjia",
    src: "/img/dronef.png?v=2",
    unoptimized: true, 
    href: "/shop/Teknologjia"
  },
  
  {
    id: 5,
    title: "Magazinimi",
    src: "/img/smart-farm.png?v=2",
    unoptimized: true,
    href: "/shop/Magazinimi",
  },
  {
    id: 6,
    title: "Fara Perime",
    src: "/img/rice.png?v=2",
    href: "/shop/FaraPerime",
    unoptimized: true
  },
  {
    id: 7,
    title: "Plehra kimike",
    src: "/img/seed-bag.png?v=2",
    href: "/shop/PlehraKimike",
    unoptimized: true
  },
  {
    id: 8,
    title: "Pesticidet",
    src: "/img/pesticide.png?v=2",
    href: "/shop/Pesticidet",
    unoptimized: true
  },
  {
    id: 9,
    title: "Ujitje",
    src: "/img/agriculture.png?v=2",
    href: "/shop/Ujitje",
    unoptimized: true
  },
  {
    id: 10,
    title: "Veshje",
    src: "/img/farmer.png?v=2",
    href: "/shop/Veshje",
    unoptimized: true
  },
];

export const incentives = [
  {
    name: "Transport Falas",
    description:
      "Transporti ynë është plotësisht falas dhe kjo është shumë e mirë për klientët tanë.",
    imageSrc: "/shipping-icon.png",
  },
  {
    name: "Mbështetje Klientit 24/7",
    description:
      "Suporti ynë funksionon gjatë gjithë ditës dhe natës për t'iu përgjigjur çdo pyetjeje që keni.",
    imageSrc: "/support-icon.png",
  },
  {
    name: "Karroca e Blerjeve e Shpejtë",
    description:
      "Ne kemi një përvojë blerjeje shumë të shpejtë dhe do ta shijoni atë.",
    imageSrc: "/fast-shopping-icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Ofertat", href: "/info/ofertat" },
    { name: "Njoftime", href: "/info/njoftime" },
  ],
  about: [
    { name: "Rreth Agro BLM", href: "/info/RrethNesh" },
    { name: "Bashkëpuno me ne", href: "/info/Bsh" },
    { name: "Profili Kompanisë", href: "/info/Prk" },
  ],
  buy: [
    { name: "Agro BLM Karta e Besnikërisë", href: "/info/kartabesnikerise" },
    { name: "Terms Of Use", href: "/info/Terms" },
    { name: "Privacy Policy", href: "/info/PP" },
    { name: "Ankesat", href: "/info/ankesat" },
    { name: "Partnerët", href: "/info/partneret" },
  ],
  help: [
    { name: "Kontakt", href: "/info/kontakt" },
    { name: "Si të blejmë tek Agro BLM", href: "/info/BL" },
    { name: "FAQ", href: "/info/FAQ" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  return /^[a-zA-ZÀ-ž\s]+$/.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
};

export const isValidCardNumber = (input: string ) => {
  return /^\d{13,19}$/.test(input.replace(/\D/g, ""));
};

export const isValidCreditCardExpirationDate = (input: string) => {
  return /^(0[1-9]|1[0-2])\/(\d{2}|20\d{2})$/.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  return /^[0-9]{3,4}$/.test(input);
};
