/**
 * Pashia's Sweet Treats — site content.
 *
 * VERIFIED = from the business's public Facebook posts via findglocal
 * (checked 2026-11-13). No owner phone or email is published — orders are
 * taken by Facebook message. UNIVERSAL = standard content every home-bakery
 * website has, added at the owner's request. The disclaimer banner on the
 * site tells the business owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Pashia's Sweet Treats",
  shortName: "Pashia's",
  tagline: "Homemade bakery & porch farm stand · Ennis, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "1132 Stacks Rd, Ennis, TX 75119",
  area: "Ennis, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pashia%27s+Sweet+Treats+1132+Stacks+Rd+Ennis+TX",
  facebookText: "Pashia's Sweet Treats — find us on Facebook",
  facebookUrl: "https://www.facebook.com/1505829109636680",
  instagramText: "",
  instagramUrl: "",
  owner: {
    name: "Pashia",
    title: "Homemade bakery",
    bio: "Pashia's Sweet Treats is a homemade bakery in Ennis, Texas — cakes, cupcakes, candy and pies, sourdough breads and cookies, all made with the finest and freshest ingredients. Pashia is self-taught at cake decorating and still learning every day, and she puts her love into every little detail — especially when it is for her grandbabies, Raelynn and Waylon, who call her Mimi.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top bakery sites group it.
 *  VERIFIED groups are marked; no per-item prices are published, so all
 *  are DM. The half-down deposit is published. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Cakes",
    blurb:
      "Homemade cakes for birthdays and celebrations — any theme you can dream up, from KPop to Smokey and the Bandit, made with love and the finest ingredients.",
    items: ["Birthdays & celebrations", "Any theme you dream up", "Cake pops & treats too"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rainbow layer cake with colorful sprinkles and star decorations on a cake stand",
    verified: true,
  },
  {
    title: "Homemade Little Debbie Treats",
    blurb:
      "The nostalgic childhood favorites, with a homemade twist — a big hit at Canton First Monday. Zebra Cakes, Oatmeal Cream Pies and Fudge Rounds, with Christmas Tree Cakes coming.",
    items: ["Zebra Cakes", "Oatmeal Cream Pies & Fudge Rounds", "Christmas Tree Cakes coming"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate chip cookies in a basket lined with parchment paper",
    verified: true,
  },
  {
    title: "Pies & Thanksgiving",
    blurb:
      "Pies baked in a homemade, all-butter crust — including the Pumpkin Pecan Pie, two holiday favorites in one. Thanksgiving orders are being taken now.",
    items: ["Pumpkin Pecan Pie", "Homemade all-butter crust", "Thanksgiving orders open"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Slice of raspberry cake with cream and fresh berries on a plate",
    verified: true,
  },
  {
    title: "Sourdough & Breads",
    blurb:
      "Fresh sourdough bread, Lemon Blueberry Rolls and Texas Roadhouse-style rolls with homemade butter — the loaves that sell out at Canton First Monday.",
    items: ["Fresh sourdough bread", "Lemon Blueberry Rolls", "Texas Roadhouse-style rolls"],
    price: "DM for a quote",
    verified: true,
  },
];

/** VERIFIED — from the bakery's public posts. */
export const faqs = [
  {
    q: "How do I order?",
    a: "Send us a message on Facebook — that is how every order starts. Tell us what you want and when you need it. We are always happy to take orders for sourdough breads, cookies, pies, and just about anything else we offer.",
  },
  {
    q: "Do I need a deposit?",
    a: "Yes — all orders require a non-refundable deposit of half down. Once your deposit is paid, your order is on our calendar.",
  },
  {
    q: "Where do I pick up my order?",
    a: "Porch pickup is available at our Porch Farm Stand, 1132 Stacks Rd, Ennis, TX 75119. The stand is open all day or until we sell out — so don't wait too long!",
  },
  {
    q: "Can I find you at Canton First Monday?",
    a: "Yes! We are at Canton First Monday on the Lewis side, in Pavilion 4500, Booths 4569, 4570 and 4571. Our sourdough breads and Lemon Blueberry Rolls have sold out there, and our Zebra Cakes were a huge hit — so come early.",
  },
  {
    q: "What is the Porch Farm Stand?",
    a: "Our little farm stand on the porch at 1132 Stacks Rd in Ennis. We stock it with fresh sourdough bread, Texas Roadhouse-style rolls with homemade butter, Zebra Cakes, S'mores in a Jar, cookies and more — whatever we have baked that day. It stays open all day or until we sell out.",
  },
  {
    q: "Are you taking Thanksgiving orders?",
    a: "Yes — Thanksgiving orders are open now. Our Pumpkin Pecan Pie combines pumpkin pie and pecan pie in one irresistible dessert, baked in a homemade, all-butter crust. Message us today to place your order.",
  },
];

/** UNIVERSAL — the standard home-bakery ordering flow. */
export const orderSteps = [
  {
    title: "Message us on Facebook",
    body: "Tell us what you want, when you need it, and how many people it is for. We love taking special orders and pre-orders so you get exactly what you are wanting.",
  },
  {
    title: "Pay half down to book",
    body: "All orders require a non-refundable deposit of half down. Once it is paid, your order is on our calendar.",
  },
  {
    title: "Pick up at the porch stand",
    body: "Porch pickup at 1132 Stacks Rd in Ennis — or find us at Canton First Monday, Pavilion 4500, Booths 4569, 4570 and 4571.",
  },
];
