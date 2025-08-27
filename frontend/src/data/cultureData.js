// src/data/cultureData.js

/**
 * A data object containing information for the Indian Culture website homepage.
 * This includes details for the featured section, festivals, cuisine, arts & crafts,
 * spiritual heritage, historical sites, languages, and epics.
 * All image URLs are now formatted to point to a local '/culture' directory.
 */
const cultureData = {
  featured: {
    title: "Ganesh Chaturthi: A Festival of New Beginnings",
    description: "Celebrated across India with great fervor, this festival honors the elephant-headed god Ganesha. Clay idols are worshipped for ten days before being immersed in water bodies, symbolizing his return to Mount Kailash.",
    image: "/culture/ganesh_chaturthi.jpeg"
  },
  festivals: [
    { name: "Diwali", description: "The festival of lights symbolizing the victory of light over darkness.", image: "/culture/diwali.jpg" },
    { name: "Holi", description: "A vibrant spring festival of colors, celebrated with music and dance.", image: "/culture/holi.jpg" },
    { name: "Durga Puja", description: "Honoring the Hindu goddess Durga, this festival is a major celebration in Eastern India.", image: "/culture/durga_puja.jpg" }
  ],
  cuisine: [
    { name: "Butter Chicken", description: "A rich and creamy curry originating from North India.", image: "/culture/butter_chicken.jpg" },
    { name: "Masala Dosa", description: "A popular South Indian dish with a crispy, savory pancake and potato filling.", image: "/culture/masala_dosa.jpg" },
    { name: "Biryani", description: "A fragrant rice dish with a medley of spices, meat, or vegetables.", image: "/culture/biryani.jpg" }
  ],
  artsAndCrafts: [
    { name: "Block Printing", description: "Traditional textile art using hand-carved wooden blocks.", image: "/culture/block_printing.jpg" },
    { name: "Madhubani Painting", description: "Folk art from the Mithila region, known for its intricate geometric patterns.", image: "/culture/madhubani_painting.jpeg" },
    { name: "Metalwork", description: "Crafting of decorative and functional items from brass, copper, and bronze.", image: "/culture/metalwork.jpg" }
  ],
  spiritualHeritage: [
    { name: "Buddhism", description: "A religion and philosophy based on the teachings of the Buddha.", image: "/culture/buddhism.jpg" },
    { name: "Sikhism", description: "A monotheistic religion founded in the Punjab region of India.", image: "/culture/sikhism.jpg" },
    { name: "Jainism", description: "An ancient religion emphasizing non-violence and self-control.", image: "/culture/jainism.jpg" }
  ],
  historicalSites: [
    { name: "Taj Mahal", description: "An ivory-white marble mausoleum located in Agra.", image: "/culture/taj_mahal.jpeg" },
    { name: "Red Fort", description: "A historic fort in Delhi that served as the main residence of the Mughal emperors.", image: "/culture/red_fort.jpg" },
    { name: "Hampi", description: "A UNESCO World Heritage Site known for its ancient ruins and temples.", image: "/culture/hampi.jpg" }
  ],
  languages: [
    { name: "Hindi", fact: "Written in the Devanagari script." },
    { name: "Bengali", fact: "Known for its rich literary tradition." },
    { name: "Sanskrit", fact: "The mother of many modern Indian languages and a key language in Hindu texts." }
  ],
  epics: [
    { name: "Ramayana", description: "The story of Prince Rama and his quest to rescue his wife Sita.", image: "/culture/ramayana.jpeg" },
    { name: "Mahabharata", description: "The epic narrative of the Kurukshetra War and the fate of the Kaurava and Pandava princes.", image: "/culture/mahabharata.jpg" }
  ]
};

export default cultureData;
