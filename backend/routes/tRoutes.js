import express from "express";
import Tradition from "../models/Tradition.js"; // ✅ model import

const router = express.Router();

// Helper: Create slug from name
const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

// 🔹 Seed DB
router.post("/seed", async (req, res) => {
  try {
    // Wipe existing
    await Tradition.deleteMany();

    try {
      await Tradition.collection.dropIndex("slug_1");
      console.log("✅ Dropped old slug index");
    } catch (err) {
      if (err.code === 27) {
        console.log("ℹ️ No slug index found, skipping drop.");
      } else {
        throw err;
      }
    }

    // Massive dataset
    const sampleData = [
      {
    name: "Chhau",
    slug: createSlug("Chhau"),
    origin: "Odisha, West Bengal, Jharkhand",
    type: "Dance",
    culturalContext:
      "A traditional semi-classical dance incorporating martial arts, tribal culture, and folk traditions.",
    description:
      "Chhau dance blends martial, tribal, and folk traditions and is performed during regional events and rituals.",
    media: "/traditions/chhau.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Chhau_dance",
  },
  {
    name: "Kathakali",
    slug: createSlug("Kathakali"),
    origin: "Kerala",
    type: "Dance-Drama",
    culturalContext:
      "A highly stylized classical dance-drama noted for elaborate makeup, costumes, and face gestures.",
    description:
      "Kathakali tells stories from Hindu epics with vibrant costumes, facial expressions, and intricate hand gestures.",
    media: "/traditions/kathakali.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kathakali",
  },
  {
    name: "Bharatanatyam",
    slug: createSlug("Bharatanatyam"),
    origin: "Tamil Nadu",
    type: "Classical Dance",
    culturalContext:
      "One of the oldest Indian classical dance forms rooted in temple traditions.",
    description:
      "Bharatanatyam combines rhythmic footwork, hand gestures, and storytelling to depict spiritual themes.",
    media: "/traditions/bharatanatyam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bharatanatyam",
  },
  {
    name: "Kathak",
    slug: createSlug("Kathak"),
    origin: "Uttar Pradesh",
    type: "Classical Dance",
    culturalContext:
      "A storytelling dance form characterized by spins, footwork, and rhythmic patterns.",
    description:
      "Kathak evolved as a narrative dance telling stories of gods and later incorporated Mughal influences.",
    media: "/traditions/kathak.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kathak",
  },
  {
    name: "Odissi",
    slug: createSlug("Odissi"),
    origin: "Odisha",
    type: "Classical Dance",
    culturalContext:
      "A temple-originated dance form representing religious stories and devotional expression.",
    description:
      "Odissi is characterized by fluid torso movements, sculpturesque poses, and expressions of devotion.",
    media: "/traditions/odissi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Odissi",
  },
  {
    name: "Kuchipudi",
    slug: createSlug("Kuchipudi"),
    origin: "Andhra Pradesh",
    type: "Classical Dance-Drama",
    culturalContext:
      "Combines fast rhythmic footwork with narrative storytelling and expressive acting.",
    description:
      "Kuchipudi performers combine dance and drama to enact stories from Hindu texts.",
    media: "/traditions/kuchipudi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kuchipudi",
  },
  {
    name: "Manipuri",
    slug: createSlug("Manipuri"),
    origin: "Manipur",
    type: "Classical Dance",
    culturalContext:
      "A devotional dance style linked with Raslila traditions of Krishna.",
    description:
      "Manipuri emphasizes grace, fluidity, and devotional expression through music and movement.",
    media: "/traditions/manipuri.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Manipuri_dance",
  },
  {
    name: "Mohiniyattam",
    slug: createSlug("Mohiniyattam"),
    origin: "Kerala",
    type: "Classical Dance",
    culturalContext:
      "A graceful feminine dance dedicated to enchantress Mohini.",
    description:
      "Mohiniyattam is known for its soft movements, feminine grace, and devotional storytelling.",
    media: "/traditions/mohiniyattam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Mohiniyattam",
  },
  {
    name: "Sattriya",
    slug: createSlug("Sattriya"),
    origin: "Assam",
    type: "Classical Dance",
    culturalContext:
      "Introduced in Vaishnavite monasteries by saint Srimanta Sankardev.",
    description:
      "Sattriya is a devotional dance-drama combining narrative and spiritual themes.",
    media: "/traditions/sattriya.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sattriya",
  },
  {
    name: "Garba",
    slug: createSlug("Garba"),
    origin: "Gujarat",
    type: "Folk Dance",
    culturalContext:
      "A communal circular dance celebrating feminine energy.",
    description:
      "Garba is performed in circles with rhythmic claps and steps, often around a lamp or idol.",
    media: "/traditions/garba.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Garba_(dance)",
  },
  {
    name: "Ghoomar",
    slug: createSlug("Ghoomar"),
    origin: "Rajasthan",
    type: "Folk Dance",
    culturalContext:
      "A traditional dance of Rajput women symbolizing grace and joy.",
    description:
      "Performed by women twirling in colorful ghagras, Ghoomar expresses festivity and community spirit.",
    media: "/traditions/ghoomar.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Ghoomar",
  },
  {
    name: "Lavani",
    slug: createSlug("Lavani"),
    origin: "Maharashtra",
    type: "Folk Dance & Music",
    culturalContext:
      "Combines powerful rhythms and expressive gestures.",
    description:
      "Lavani is performed to the beats of dholki and is known for its storytelling and socio-political commentary.",
    media: "/traditions/lavani.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Lavani",
  },
  {
    name: "Yakshagana",
    slug: createSlug("Yakshagana"),
    origin: "Karnataka",
    type: "Dance-Drama",
    culturalContext:
      "Combines dance, music, dialogue, and elaborate costumes.",
    description:
      "Yakshagana presents mythological stories with energetic performances and colorful attire.",
    media: "/traditions/yakshagana.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Yakshagana",
  },
  {
    name: "Bhangra",
    slug: createSlug("Bhangra"),
    origin: "Punjab",
    type: "Folk Dance",
    culturalContext:
      "A celebratory dance associated with harvest and community joy.",
    description:
      "Bhangra features energetic movements, drums, and festive spirit, often performed in groups.",
    media: "/traditions/bhangra.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bhangra_(dance)",
  },
  {
    name: "Dandiya Raas",
    slug: createSlug("Dandiya Raas"),
    origin: "Gujarat",
    type: "Folk Dance",
    culturalContext:
      "Performed with decorated sticks representing the sword of Goddess Durga.",
    description:
      "Dandiya is performed in pairs with rhythmic stick strikes, creating vibrant social interaction.",
    media: "/traditions/dandiya-raas.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dandiya_Raas",
  },
  {
    name: "Baul Singing",
    slug: createSlug("Baul Singing"),
    origin: "West Bengal, Bangladesh",
    type: "Folk Music",
    culturalContext:
      "A mystical singing tradition emphasizing spiritual love and simplicity.",
    description:
      "Baul singers use ektara and simple instruments, singing about philosophy, devotion, and humanity.",
    media: "/traditions/baul.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Baul",
  },
  {
    name: "Qawwali",
    slug: createSlug("Qawwali"),
    origin: "North India, Sufi Shrines",
    type: "Devotional Music",
    culturalContext:
      "A form of Sufi devotional music expressing love for the divine.",
    description:
      "Qawwali performances use harmoniums, tablas, and vocals to create spiritual ecstasy in audiences.",
    media: "/traditions/qawwali.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Qawwali",
  },
  {
    name: "Nautanki",
    slug: createSlug("Nautanki"),
    origin: "North India",
    type: "Folk Theatre",
    culturalContext:
      "A form of rural entertainment blending songs, stories, and drama.",
    description:
      "Nautanki features humorous, mythological, and social stories enacted with music and dance.",
    media: "/traditions/nautanki.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Nautanki",
  },
  {
    name: "Tamasha",
    slug: createSlug("Tamasha"),
    origin: "Maharashtra",
    type: "Folk Theatre",
    culturalContext:
      "A traditional form of theatre with music, humor, and dance.",
    description:
      "Tamasha combines satire, folk tales, and Lavani dance, often performed in open-air stages.",
    media: "/traditions/tamasha.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tamasha",
  },
  {
    name: "Kalaripayattu",
    slug: createSlug("Kalaripayattu"),
    origin: "Kerala",
    type: "Martial Art",
    culturalContext:
      "An ancient Indian martial art combining combat and discipline.",
    description:
      "Kalaripayattu involves weapon techniques, self-defense, and physical training rooted in Kerala temples.",
    media: "/traditions/kalaripayattu.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kalaripayattu",
  },
  {
    name: "Silambam",
    slug: createSlug("Silambam"),
    origin: "Tamil Nadu",
    type: "Martial Art",
    culturalContext:
      "A stick-based martial art showcasing agility and combat skills.",
    description:
      "Silambam uses bamboo sticks and weaponry for defense and physical training.",
    media: "/traditions/silambam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Silambam",
  },
  {
    name: "Mallakhamb",
    slug: createSlug("Mallakhamb"),
    origin: "Maharashtra",
    type: "Physical Discipline",
    culturalContext:
      "A traditional sport combining yoga and gymnastics on a pole.",
    description:
      "Mallakhamb involves performing acrobatic poses and yoga on a wooden pole or rope.",
    media: "/traditions/mallakhamb.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Mallakhamb",
  },
  {
    name: "Yoga",
    slug: createSlug("Yoga"),
    origin: "India",
    type: "Spiritual Discipline",
    culturalContext:
      "A practice of physical, mental, and spiritual well-being.",
    description:
      "Yoga combines postures, breathing, and meditation to harmonize body and mind.",
    media: "/traditions/yoga.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Yoga",
  },
  {
    name: "Mehendi Ceremony",
    slug: createSlug("Mehendi Ceremony"),
    origin: "Pan-India",
    type: "Ritual",
    culturalContext:
      "A wedding tradition where henna is applied to the bride's hands and feet.",
    description:
      "Mehendi is considered auspicious and a symbol of joy in weddings.",
    media: "/traditions/mehendi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Mehndi",
  },
  {
    name: "Haldi Ceremony",
    slug: createSlug("Haldi Ceremony"),
    origin: "Pan-India",
    type: "Ritual",
    culturalContext:
      "A pre-wedding ritual applying turmeric paste for purification and blessings.",
    description:
      "Haldi ceremony is believed to ward off evil and bring prosperity to the couple.",
    media: "/traditions/haldi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Haldi_ceremony",
  },
  {
    name: "Saptapadi",
    slug: createSlug("Saptapadi"),
    origin: "Pan-India",
    type: "Marriage Ritual",
    culturalContext:
      "The seven steps around the sacred fire in Hindu weddings.",
    description:
      "Saptapadi signifies vows of togetherness and is central to Hindu marriage traditions.",
    media: "/traditions/saptapadi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Saptapadi",
  },
  {
    name: "Touching Feet of Elders",
    slug: createSlug("Touching Feet of Elders"),
    origin: "Pan-India",
    type: "Social Practice",
    culturalContext:
      "A gesture of respect and seeking blessings.",
    description:
      "Youngers bow and touch elders’ feet as a sign of humility and reverence.",
    media: "/traditions/touching-feet.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Pran%C4%81ma",
  },
  {
    name: "Langar",
    slug: createSlug("Langar"),
    origin: "Punjab",
    type: "Community Service",
    culturalContext:
      "A Sikh tradition of free community kitchen promoting equality.",
    description:
      "Langar serves free meals to all regardless of caste, creed, or religion.",
    media: "/traditions/langar.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Langar_(Sikhism)",
  },
  {
    name: "Algoza",
    slug: createSlug("Algoza"),
    origin: "Rajasthan",
    type: "Paired Woodwind Instrument",
    culturalContext:
      "A key folk instrument across the arid regions of the Indian subcontinent, the algoza is played by shepherds, farmers, and folk musicians. It is integral to the cultural landscape of the Thar Desert, where its hypnotic, continuous drone and melody are a staple of rural life. The instrument is considered an extension of the musician, with the breath-holding technique (circular breathing) being a critical part of the performance.",
    description:
      "A double-flute instrument consisting of two separate beak flutes tied or taped together. One flute, the 'male' part, plays a continuous low-pitched drone, while the other, the 'female' part, is used for the melody. The player blows into both at the same time, using a circular breathing technique to produce an uninterrupted sound, mimicking the sound of the 'jodiya' (twin) that gives it its name.",
    media: "/traditions/algoza.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Alghoza",
  },
  {
    name: "Bansuri",
    slug: createSlug("Bansuri"),
    origin: "Uttar Pradesh",
    type: "Transverse Flute",
    culturalContext:
      "The bansuri holds a sacred place in Indian culture, revered as the instrument of Lord Krishna, who is often depicted playing it. Its sound is believed to be imbued with divine power and is central to devotional music and classical performances. The simple bamboo flute is a symbol of pastoral life and divine love, transcending regional boundaries and resonating with the spiritual essence of India.",
    description:
      "A transverse flute made from a single hollow shaft of bamboo with six or seven finger holes. The sound is produced by blowing across a mouth hole near one end. Its simple design belies its complex tonal range, capable of producing subtle microtones essential for Indian classical music. The length and diameter of the bamboo determine its pitch and sound quality.",
    media: "/traditions/bansuri.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bansuri",
  },
  {
    name: "Bhavai",
    slug: createSlug("Bhavai"),
    origin: "Rajasthan",
    type: "Folk Theatre / Folk Dance",
    culturalContext:
      "In Gujarat, Bhavai is a folk theatre form that uses satire and humor to critique social issues, often performed by the community for entertainment and moral education. In Rajasthan, it has evolved into a thrilling dance form where performers showcase remarkable balancing skills. This art form is a testament to the blend of theatrical storytelling and physical prowess.",
    description:
      "A traditional folk art that can be either a dramatic theatre performance or a daring dance. The Rajasthani dance variant is known for its performers' ability to balance a stack of seven to nine brass pots on their heads while dancing. They perform on dangerous props, such as the edge of a sword, a thali (brass plate), or on a bed of nails, making it a spectacular display of skill and balance.",
    media: "/traditions/bhavai.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bhavai_dance",
  },
  {
    name: "Bidriware",
    slug: createSlug("Bidriware"),
    origin: "Karnataka",
    type: "Metal Handicraft",
    culturalContext:
      "This exquisite metal art form developed in the city of Bidar under the patronage of the Bahmani Sultans in the 14th century. Its unique process, which involves embedding silver wire into a blackened zinc alloy, is an intricate art form passed down through generations. It represents a synthesis of Persian craftsmanship and local artistry, creating a distinctive style prized for its elegance.",
    description:
      "A highly detailed metal handicraft made from a black zinc alloy that is cast and then engraved. The intricate designs, often featuring floral motifs or geometric patterns, are inlaid with fine sheets or wires of pure silver. The object is then treated with a special soil from Bidar Fort, which turns the base alloy a matte black, creating a dramatic contrast with the shimmering silver.",
    media: "/traditions/bidriware.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bidriware",
  },
  {
    name: "Bihu",
    slug: createSlug("Bihu"),
    origin: "Assam",
    type: "Festival and Folk Dance",
    culturalContext:
      "Bihu is the central festival of Assam, a set of three different celebrations linked to the farming cycle of rice cultivation. The vibrant celebrations, particularly Rongali Bihu in the spring, are a time for community feasting, traditional music (like the dhol and pepa), and the iconic Bihu dance. It is a unifying force in Assamese society, celebrating the rhythm of nature and agricultural life.",
    description:
      "A festival that refers to a set of three festivals celebrated in Assam: Rongali Bihu (spring festival), Kongali Bihu (autumn festival), and Bhogali Bihu (winter harvest festival). The accompanying folk dance, also called Bihu, is characterized by its quick, rhythmic hand and foot movements and graceful body sways. It is performed by young men and women, often to the sound of traditional Assamese folk instruments.",
    media: "/traditions/bihu.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bihu",
  },
  {
    name: "Blue-pottery",
    slug: createSlug("Blue-pottery"),
    origin: "Rajasthan",
    type: "Pottery / Ceramic Art",
    culturalContext:
      "This unique form of pottery was introduced to Jaipur from Persia and gained prominence under the patronage of Maharaja Sawai Ram Singh II in the 19th century. Unlike traditional pottery that uses clay, this art form uses a distinct blend of materials. Its revival in the 20th century highlights its enduring artistic value and importance to the cultural heritage of Rajasthan.",
    description:
      "A type of pottery that is not made from clay, but from a mixture of quartz stone powder, glass, borax, gum, and other materials. It is known for its beautiful blue and white designs, often featuring floral motifs or animal figures. The pottery is low-fired, making it fragile but visually striking, and is used for decorative items like vases, tiles, and pots.",
    media: "/traditions/blue-pottery.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Blue_pottery_of_Jaipur",
  },
  {
    name: "Chhau",
    slug: createSlug("Chhau"),
    origin: "Odisha",
    type: "Semi-Classical Dance",
    culturalContext:
      "A unique blend of martial arts, acrobatics, and ritualistic performance, Chhau is a dance form that tells mythological stories from the epics, particularly the Mahabharata and Ramayana. It is performed by male dancers during the Chaitra Parva festival. The use of masks in some styles adds a layer of mystery and theatricality, transforming the dancer into the character they portray.",
    description:
      "A semi-classical dance with three distinct styles: Seraikella Chhau (Jharkhand), Purulia Chhau (West Bengal), and Mayurbhanj Chhau (Odisha). The first two styles use large, dramatic masks, while Mayurbhanj Chhau is performed without a mask. The dance is characterized by its powerful footwork, acrobatic movements, and stylized martial art techniques, combining strength with grace.",
    media: "/traditions/chhau.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Chhau_dance",
  },
  {
    name: "Coir-craft",
    slug: createSlug("Coir-craft"),
    origin: "Kerala",
    type: "Handicraft",
    culturalContext:
      "Coir craft is a significant cottage industry and a vital part of Kerala’s economy and cultural heritage, where coconut trees are abundant. The process of extracting and processing coir fiber has been practiced for centuries, providing a source of livelihood for thousands of families in the coastal regions. It represents a sustainable and traditional use of a natural resource.",
    description:
      "A craft that uses coir, a natural fiber extracted from the outer husk of the coconut. It is used to make a variety of products including ropes, brushes, mats, and floor coverings. The fiber is soaked, beaten, and spun into yarn, which is then used to create a wide range of products.",
    media: "/traditions/coir-craft.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Coir",
  },
  {
    name: "Dholak",
    slug: createSlug("Dholak"),
    origin: "Uttar Pradesh",
    type: "Percussion Instrument",
    culturalContext:
      "The dholak is one of the most widely used folk percussion instruments in the Indian subcontinent. It is a staple at almost every celebration, from weddings and folk festivals to religious gatherings and Bollywood music. Its simple yet versatile sound makes it accessible and popular, serving as the rhythmic backbone for countless songs and dances.",
    description:
      "A two-headed hand drum with a cylindrical body made of wood, often hollowed out. The two drumheads are of different sizes; one produces a high pitch, and the other a low pitch. It is played with both hands, using various strokes and hand placements to create a wide range of rhythms and tones. It is a powerful instrument that provides the pulse for traditional Indian music.",
    media: "/traditions/dholak.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dholak",
  },
  {
    name: "Dhurri-weaving",
    slug: createSlug("Dhurri-weaving"),
    origin: "Rajasthan",
    type: "Textile / Handicraft",
    culturalContext:
      "The tradition of weaving dhurries is an ancient craft in India, often practiced by rural women as a form of artistic expression and a means of livelihood. The rugs are traditionally used as floor coverings, seating mats, or even prayer mats. The craft reflects the regional identity of its weavers through its unique patterns, colors, and designs.",
    description:
      "A flat-woven rug or carpet made from natural fibers such as cotton, wool, or jute. Unlike pile carpets, dhurries have no knots, which makes them reversible. They are known for their intricate geometric, striped, or stylized floral patterns and vibrant colors. Each dhurrie is handwoven on a traditional loom, and the skill required to create the designs is a generational craft.",
    media: "/traditions/dhurri-weaving.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dhurrie",
  },
  {
    name: "Dokra",
    slug: createSlug("Dokra"),
    origin: "West Bengal",
    type: "Metal Handicraft",
    culturalContext:
      "Dokra is an ancient handicraft tradition practiced by the Dhokra Damar tribes of West Bengal, Odisha, and Chhattisgarh. The craft is based on the lost-wax casting technique, which dates back over 4,000 years. It holds a deep cultural significance as the artisans create figures of deities, animals, and tribal life, which are often used in religious rituals and as home decor. The art form is an intrinsic part of the tribal identity and is passed down through generations.",
    description:
      "A non-ferrous metal casting art form made using the lost-wax casting method. A core made of clay is covered with wax models of the desired shape, which are then covered with another layer of clay. The wax is melted out, and molten metal is poured into the mold. The final pieces, known as Dokra art, are characterized by their rustic, aged finish and intricate detailing. No two Dokra figures are identical.",
    media: "/traditions/dokra.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dhokra",
  },
  {
    name: "Dollu-kunitha",
    slug: createSlug("Dollu-kunitha"),
    origin: "Karnataka",
    type: "Folk Dance",
    culturalContext:
      "A traditional folk dance of Karnataka, performed by men of the Kuruba community. The dance is a ritualistic and devotional art form dedicated to Beereshwara, a form of Lord Shiva. It is a powerful form of expression, performed with intensity and discipline during major festivals and celebrations. The dance is believed to bring blessings and is a central part of the community's spiritual life.",
    description:
      "A high-energy, drum-based folk dance performed by a group of men wearing a large drum, the 'dollu,' around their necks. The dancers move in a synchronized circular formation, beating the drums with sticks and their hands. The performance is characterized by its powerful rhythm, intricate footwork, and acrobatic movements. The lead drummer directs the performance with different beats and patterns.",
    media: "/traditions/dollu-kunitha.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dollu_Kunitha",
  },
  {
    name: "Ektara",
    slug: createSlug("Ektara"),
    origin: "West Bengal",
    type: "String Instrument",
    culturalContext:
      "The ektara is a traditional instrument associated with the wandering minstrels and mendicants of rural India, particularly the Baul singers of Bengal. It is a simple instrument with deep spiritual significance, often used in devotional and folk songs. The single string symbolizes the one universal truth or the monotheistic nature of the cosmos, central to the philosophy of the spiritual traditions that use it.",
    description:
      "A simple, single-stringed instrument made from a hollow gourd or wood, covered with hide. A bamboo stick or a similar material is attached to the gourd and holds the single string, which is plucked with the finger. Its raw, resonant sound provides the drone and rhythm for folk songs, bhajans, and kirtans. The instrument is known for its distinctive twang and simple design.",
    media: "/traditions/ektara.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Ektara",
  },
  {
    name: "Garba",
    slug: createSlug("Garba"),
    origin: "Gujarat",
    type: "Folk Dance",
    culturalContext:
      "A devotional folk dance performed during the nine nights of Navaratri, celebrating the goddess Durga. The dance is performed in a circle around a central lamp or a statue of the goddess. The word 'garba' comes from the Sanskrit word 'garbhadeep,' meaning 'a lamp inside a pot,' which symbolizes life within a womb. The circular movements represent the cycle of life and the divine energy of the goddess.",
    description:
      "A vibrant and rhythmic folk dance performed by men and women in colorful traditional attire. Dancers move in a circle with clapping hands and graceful steps, often to the beat of the dhol, drums, and folk songs. The dance is known for its elegance and synchronized movements, which become faster and more energetic as the night progresses. It is a key part of the Navaratri festival.",
    media: "/traditions/garba.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Garba",
  },
  {
    name: "Ghatam",
    slug: createSlug("Ghatam"),
    origin: "Tamil Nadu",
    type: "Percussion Instrument",
    culturalContext:
      "The ghatam is an ancient percussion instrument integral to Carnatic classical music. Its simple form belies its complex sound. The instrument's sound quality depends on the clay used and the skill of the potter, with each ghatam having a unique pitch. It is often played as a secondary percussion instrument alongside the mridangam, adding a unique texture and rhythmic layer to performances.",
    description:
      "A percussion instrument made from a clay pot with a narrow mouth. It is played with the fingers, thumbs, palms, and wrists, striking different parts of the pot to produce a variety of tones. The player rests the pot on their lap or on a stand, and the distinct sound comes from the reverberation inside the hollow body. The ghatam's deep, resonant sound is unique among percussion instruments.",
    media: "/traditions/ghatam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Ghatam",
  },
  {
    name: "Giddha",
    slug: createSlug("Giddha"),
    origin: "Punjab",
    type: "Folk Dance",
    culturalContext:
      "A popular folk dance performed by women of the Punjab region. Giddha is a lively and energetic dance that celebrates femininity, resilience, and joy. It is a key part of festive occasions, particularly the harvest festival of Vaisakhi and the winter festival of Lohri. The dance is an expression of social and personal happiness, performed to the beat of clapping hands and impromptu songs.",
    description:
      "A rhythmic and expressive folk dance performed by women in a circle. Unlike bhangra, the dance is performed without a dhol drum. Instead, the dancers clap their hands and use traditional 'boliyan' (short rhymes or verses) to provide the rhythm. The dance is known for its synchronized clapping, footwork, and mock playful acts, which often depict scenes from daily life.",
    media: "/traditions/giddha.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Giddha",
  },
  {
    name: "Harmonium",
    slug: createSlug("Harmonium"),
    origin: "West Bengal",
    type: "Musical Instrument",
    culturalContext:
      "A reed instrument introduced to India by the British, but it was quickly adopted and adapted into a core component of Indian music, particularly in devotional, classical, and folk genres. It is an essential instrument in Hindustani classical music, often used to provide accompaniment for vocalists. The harmonium's use in religious contexts, such as bhajans and kirtans, makes it a symbol of devotion.",
    description:
      "A small, hand-pumped reed organ that produces sound by pumping air with one hand and playing keys with the other. The air flows through metal reeds, which vibrate to produce sound. It is a portable and versatile instrument, with a distinct, sustained tone. While it has European origins, it has been fully integrated into Indian music, with players developing unique techniques and styles to suit the Indian musical scale.",
    media: "/traditions/harmonium.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Harmonium",
  },
  {
    name: "Jatra",
    slug: createSlug("Jatra"),
    origin: "West Bengal",
    type: "Folk Theatre",
    culturalContext:
      "Jatra is a popular folk theatre form in the rural areas of West Bengal, Odisha, and Assam. The word 'jatra' means 'journey' or 'going,' as the troupes travel from village to village to perform. It is a unique blend of drama, music, songs, and dialogue, often based on mythological or historical themes. The performances are a community event, serving as a medium for social commentary and moral education.",
    description:
      "A form of folk theatre with a unique structure, where the performance takes place on an open stage with the audience sitting all around. The performers use loud, exaggerated gestures and dialogue, and the plays are often accompanied by a live orchestra. The performance is known for its high energy and dramatic flair. The plays often have a strong moral message or retell ancient mythological stories.",
    media: "/traditions/jatra.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Jatra_(theatre)",
  },
  {
    name: "Kalamkari",
    slug: createSlug("Kalamkari"),
    origin: "Andhra Pradesh",
    type: "Hand-Painted Textile Art",
    culturalContext:
      "An ancient art form with a history spanning over 3,000 years, kalamkari is deeply rooted in the storytelling tradition of India. The word 'kalamkari' is a blend of 'kalam' (pen) and 'kari' (craftsmanship), as the art is created by using a pen-like tool. The art form gained prominence under the patronage of the Mughals and is primarily a narrative art form, depicting scenes from Hindu epics.",
    description:
      "A type of hand-painted or block-printed cotton textile art. The process involves multiple steps, including bleaching, washing, and drying the fabric. The designs are drawn with a 'kalam' (pen) using a mix of natural dyes, primarily vegetable colors. The intricate details of the paintings, often depicting religious motifs and mythological scenes, are a testament to the skill and patience of the artisan.",
    media: "/traditions/kalamkari.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kalamkari",
  },
  {
    name: "Kalbelia",
    slug: createSlug("Kalbelia"),
    origin: "Rajasthan",
    type: "Folk Dance",
    culturalContext:
      "A folk dance performed by the Kalbelia tribe, a nomadic community of snake charmers in Rajasthan. The dance movements and music are inspired by the movements of a snake, reflecting the tribe's reverence for the animal. It is a symbol of the tribe's unique culture and a source of livelihood. The dance was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2010.",
    description:
      "An energetic folk dance performed by Kalbelia women in flowing black skirts, which swirl to mimic the movement of a snake. The male performers play traditional instruments, including the 'poongi,' a wind instrument used to charm snakes. The dance is known for its sinuous and acrobatic movements, which become more rapid as the rhythm of the music intensifies. It is a visually captivating and culturally significant performance.",
    media: "/traditions/kalbelia.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kalbelia",
  },
  {
    name: "Karakattam",
    slug: createSlug("Karakattam"),
    origin: "Tamil Nadu",
    type: "Folk Dance",
    culturalContext:
      "A traditional folk dance of Tamil Nadu, performed in praise of Mariamman, the goddess of rain and fertility. The dance is an expression of devotion, with performers balancing a pot on their head. It is performed during religious festivals and is believed to bring prosperity and good fortune. The dance requires a high level of concentration and skill, as it is often performed with no hands.",
    description:
      "A rhythmic and energetic folk dance that involves balancing a brass pot or vessel, filled with raw rice, on the head. The dancer moves gracefully while performing intricate steps and acrobatic movements, without the use of hands to support the pot. The dance is often accompanied by live music from traditional instruments like the nadaswaram and thavil, adding to its festive and spiritual energy.",
    media: "/traditions/karakattam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Karagam",
  },
  {
    name: "Kathak",
    slug: createSlug("Kathak"),
    origin: "Uttar Pradesh",
    type: "Classical Dance",
    culturalContext:
      "A classical dance form that originated with the 'kathakas' or storytellers of ancient North India. The dance was a way to narrate mythological and epic stories through dance and music. It evolved under the influence of the Bhakti movement and later, the Mughal era, which introduced a more theatrical and courtly style. The dance is a blend of storytelling, rhythmic footwork, and expressive gestures.",
    description:
      "A classical dance form known for its intricate footwork, graceful turns (chakkars), and expressive facial expressions. The dancers wear ankle bells (ghungroo), which accentuate the rhythmic foot movements. The dance is a combination of abstract rhythmic patterns, pure dance, and storytelling. It is performed to Hindustani classical music and is noted for its powerful and rapid pirouettes.",
    media: "/traditions/kathak.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kathak",
  },
  {
    name: "Kathputli",
    slug: createSlug("Kathputli"),
    origin: "Rajasthan",
    type: "Puppetry",
    culturalContext:
      "Kathputli is a traditional string puppetry art form from Rajasthan, practiced by the Bhat community. The word 'kathputli' is a combination of 'kath' (wood) and 'putli' (a puppet). It has a long history, serving as a medium for storytelling, entertainment, and social commentary, often narrating legends, folktales, and stories of historical heroes to an audience of villagers and nobles.",
    description:
      "A form of string puppetry where wooden puppets are controlled by a single string attached to the puppeteer's fingers. The puppets are known for their vibrant, traditional Rajasthani costumes, large eyes, and expressive faces. The puppeteers use a distinct, high-pitched vocal style to narrate the stories and give voice to the characters, accompanied by a folk drum.",
    media: "/traditions/kathputli.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kathputli",
  },
  {
    name: "Kondapalli-toys",
    slug: createSlug("Kondapalli-toys"),
    origin: "Andhra Pradesh",
    type: "Handicraft / Toy Making",
    culturalContext:
      "A traditional handicraft from the village of Kondapalli in Andhra Pradesh, where artisans have been crafting these wooden toys for over 400 years. The toys are a cultural symbol, often depicting rural life, animals, and mythological figures. The craft is practiced by the 'Aryakhshatriyas' caste, who were traditionally toy-makers and painters. The art form is an important part of the region's heritage.",
    description:
      "Handicrafts made from lightweight Tella Poniki wood, which is known for its smooth texture. The toys are carved and then covered with a mixture of tamarind seed paste and sawdust. They are then painted with vibrant vegetable and enamel dyes. The toys are often of mythological characters, animals, and scenes from daily village life, and are known for their intricate details and bright colors.",
    media: "/traditions/kondapalli-toys.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kondapalli_Toys",
  },
  {
    name: "Koodiyattam",
    slug: createSlug("Koodiyattam"),
    origin: "Kerala",
    type: "Classical Dance-Drama",
    culturalContext:
      "A classical dance form that is the oldest surviving ancient theatre form in India, dating back over 2,000 years. It is a sophisticated blend of Sanskrit theatre and folk art. The performances are a deep religious and ritualistic practice, performed in temples as a form of worship. It was recognized by UNESCO as a 'Masterpiece of the Oral and Intangible Heritage of Humanity' in 2001.",
    description:
      "A unique form of Sanskrit theatre that features a prolonged performance style, often lasting for several days. It is characterized by detailed hand gestures, intricate facial expressions, and a complex acting style. The performers, male and female, enact scenes from ancient epics and stories. The performance is accompanied by traditional percussion instruments, most notably the 'mizhavu' drum.",
    media: "/traditions/koodiyattam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Koodiyattam",
  },
  {
    name: "Kuchipudi",
    slug: createSlug("Kuchipudi"),
    origin: "Andhra Pradesh",
    type: "Classical Dance",
    culturalContext:
      "A classical dance form that originated in the village of Kuchipudi in Andhra Pradesh. It is a dance-drama performance, with a fusion of pure dance (nritta), expression (nritya), and dramatic narration (natya). The dance is deeply rooted in Hindu mythology and ancient scriptures, with themes centered around stories of Krishna and other deities. It is a vibrant and theatrical art form.",
    description:
      "A classical dance known for its fluid movements, graceful poses, and dynamic footwork. The performance often includes a dramatic narrative where the dancers express emotions through facial expressions and hand gestures. A unique and challenging element of the dance is the 'Tarangam,' where the dancer balances on a brass plate while performing intricate rhythmic footwork to the beat of a drum.",
    media: "/traditions/kuchipudi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kuchipudi",
  },
  {
    name: "lavani",
    slug: createSlug("lavani"),
    origin: "Maharashtra",
    type: "Folk Dance",
    culturalContext:
      "A traditional folk dance of Maharashtra, performed to the beat of the 'dholki' drum. The word 'lavani' comes from the word 'lavanya,' meaning beauty. It is a sensual and powerful dance form that addresses a variety of themes, including love, devotion, and social commentary. It is a vital part of the cultural landscape of Maharashtra, and is often performed by women in traditional costumes.",
    description:
      "A folk dance characterized by its powerful rhythm, quick movements, and expressive gestures. The dancers wear a traditional nine-yard sari, adorned with jewelry. The dance is performed with a distinct, sharp rhythm and a powerful vocal performance by the dancer. It is a theatrical art form, often performed in a 'tamasha' (a folk theatre form), and is known for its blend of dance, music, and song.",
    media: "/traditions/lavani.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Lavani",
  },
  {
    name: "madhubani-painting",
    slug: createSlug("madhubani-painting"),
    origin: "Bihar",
    type: "Folk Art / Painting",
    culturalContext:
      "An ancient folk art form that originated in the Mithila region of Bihar, traditionally painted by women on the walls of their homes during festivals and special occasions. The art form is a visual representation of the region's rich cultural heritage, with themes centered around Hindu deities, nature, and daily life. It is an expression of spirituality and a way of communicating stories and traditions.",
    description:
      "A type of folk painting known for its intricate geometric patterns, bold colors, and symbolic motifs. The paintings are made with natural dyes and pigments, such as ochre and soot. The themes often include scenes from Hindu epics, figures of deities, and elements of nature like the sun, moon, and trees. The art form is characterized by a lack of empty space, with every part of the canvas filled with detail.",
    media: "/traditions/madhubani-painting.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Madhubani_art",
  },
  {
    name: "manipuri",
    slug: createSlug("manipuri"),
    origin: "Manipur",
    type: "Classical Dance",
    culturalContext:
      "A classical dance form that is a deeply spiritual and devotional expression of the stories of Radha and Krishna. It is a graceful and fluid dance form, characterized by gentle movements, circular patterns, and delicate hand gestures. The dance is performed as a form of worship and is an integral part of religious ceremonies and festivals in Manipur. The dance style embodies the spiritual essence of the Vaishnava tradition.",
    description:
      "A classical dance known for its gentle, graceful, and undulating movements, with a focus on fluid, circular body postures. The dancers wear a unique and elaborate costume, including a long, stiff cylindrical skirt that swings gently with each step. The performance is accompanied by traditional musical instruments like the pung (a barrel drum) and singing. The dance is a gentle and expressive form of storytelling.",
    media: "/traditions/manipuri.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Manipuri_dance",
  },
  {
    name: "manjira",
    slug: createSlug("manjira"),
    origin: "Rajasthan",
    type: "Percussion Instrument",
    culturalContext:
      "A traditional percussion instrument used in various folk and devotional musical forms across India. It is a simple instrument with a big role in creating the rhythmic base for bhajans, kirtans, and folk dances. The instrument's sound is considered to be a form of devotion, and it is a key part of religious ceremonies and communal singing.",
    description:
      "A pair of small, hand-held cymbals made of brass or bronze. The two cymbals are connected by a cord, and the player holds one in each hand, striking them against each other to produce a sharp, metallic sound. The player can create different rhythms and tones by varying the angle and force of the strike. It is a simple yet essential rhythmic instrument.",
    media: "/traditions/manjira.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Manjira",
  },
  {
    name: "meenakari",
    slug: createSlug("meenakari"),
    origin: "Rajasthan",
    type: "Enamelling / Handicraft",
    culturalContext:
      "Meenakari is a traditional art form of enamelling metal, a craft introduced to India by the Mughals. The art is known for its intricate designs and vibrant colors, and it flourished in Jaipur under the patronage of the local royalty. It is a painstaking and time-consuming process that requires immense skill and precision, often used to create jewelry, decorative items, and metal objects.",
    description:
      "A highly detailed art form of coloring and decorating metal surfaces with vibrant enamel. The process involves creating intricate designs on the metal, which are then filled with colored enamel. The metal is then fired at a high temperature, melting the enamel and bonding it to the surface. The final product is a beautiful, colorful, and durable piece of art, often a combination of gold and brightly colored enamel.",
    media: "/traditions/meenakari.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Meenakari",
  },
  {
    name: "mridangam",
    slug: createSlug("mridangam"),
    origin: "Tamil Nadu",
    type: "Percussion Instrument",
    culturalContext:
      "A two-headed drum that is the primary percussion instrument in Carnatic classical music of South India. The instrument holds a sacred place in the musical tradition, with its sound believed to be a form of divine rhythm. It is a complex instrument that requires immense skill to master, and it is a central part of any Carnatic musical performance, providing the rhythmic foundation.",
    description:
      "A two-headed, barrel-shaped drum made of a single block of wood. The two drumheads are of different sizes and produce different pitches. The larger side is played with the left hand and produces a deep bass sound, while the smaller side is played with the right hand and produces a higher pitch. The instrument is played with the fingers, and the different parts of the hand are used to produce a variety of tones and rhythmic patterns.",
    media: "/traditions/mridangam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Mridangam",
  },
  {
    name: "noopurt",
    slug: createSlug("noopurt"),
    origin: "Uttar Pradesh",
    type: "Dance Tradition",
    culturalContext:
      "A term that broadly refers to the cultural tradition of dance, which is an integral part of Indian heritage. The sound of ankle bells ('ghungroo') is central to many classical and folk dances, symbolizing the rhythmic and spiritual connection of the dancer to the earth. Dance traditions in Uttar Pradesh, particularly Kathak, are a form of storytelling and a celebration of life's rhythms, deeply rooted in devotional practices.",
    description:
      "A term used to describe the intricate tradition of dance in India, where the dancer’s feet, adorned with ankle bells, create rhythmic patterns and sounds. This art form is a form of expression and storytelling, with the dancer's movements and gestures conveying a variety of emotions and narratives. The sound of the bells is a vital part of the performance, providing a rhythmic base for the dance.",
    media: "/traditions/noopurt.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Ghungroo",
  },
  {
    name: "pandavani",
    slug: createSlug("pandavani"),
    origin: "Chhattisgarh",
    type: "Folk Singing / Narration",
    culturalContext:
      "A traditional folk singing and narrative art form from Chhattisgarh and Madhya Pradesh. It is a solo performance where the artist narrates tales from the Mahabharata, often in a unique and dramatic style. The performance is a powerful form of storytelling, blending singing, narration, and physical gestures. It is an important part of the region's cultural heritage and is passed down through generations.",
    description:
      "A solo narrative art form where a single performer narrates stories from the Mahabharata in a dramatic and musical style. The performer uses a 'tambura,' a drone instrument, as a prop, and their body language and facial expressions bring the characters to life. The narrative is a mix of singing, storytelling, and acting, and the performer improvises to engage the audience and make the story more compelling.",
    media: "/traditions/pandavani.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Pandavani",
  },
  {
    name: "pashmina-shawl",
    slug: createSlug("pashmina-shawl"),
    origin: "Jammu and Kashmir",
    type: "Textile / Handicraft",
    culturalContext:
      "A luxury textile and a symbol of Kashmiri heritage, the pashmina shawl is made from the fine wool of the Changthangi goat. The craft of weaving and embroidering these shawls dates back centuries, and the intricate craftsmanship is a source of pride for the artisans. The shawl is a cultural icon, representing elegance, warmth, and luxury, and is an important part of the region's artistic legacy.",
    description:
      "A fine, soft, and lightweight shawl made from the wool of the pashmina goat. The wool is collected from the high-altitude regions of the Himalayas and is known for its exceptional warmth and softness. The shawls are hand-spun, hand-woven, and often feature intricate embroidery, which can take months to complete. Each pashmina is a unique piece of art, a testament to the artisan's skill.",
    media: "/traditions/pashmina-shawl.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Pashmina",
  },
  {
    name: "pattachitra",
    slug: createSlug("pattachitra"),
    origin: "Odisha",
    type: "Folk Art / Painting",
    culturalContext:
      "A traditional folk painting form of Odisha, with a history dating back to the 5th century BC. The word 'pattachitra' means 'cloth picture,' as the paintings are made on a canvas of cloth. The art form is deeply religious, with themes centered around Hindu deities, particularly Lord Jagannath and Krishna. The paintings are an integral part of the temple rituals and festivals of the region.",
    description:
      "A traditional painting form characterized by its intricate details, bright colors, and mythological themes. The paintings are made on a canvas of cloth using natural pigments and dyes. The artists use fine brushes to create detailed depictions of deities, stories from the epics, and scenes from daily life. The art form is known for its vibrant colors, which are created from natural sources like fruits, leaves, and stones.",
    media: "/traditions/pattachitra.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Pattachitra",
  },
  {
    name: "phulkari",
    slug: createSlug("phulkari"),
    origin: "Punjab",
    type: "Embroidery",
    culturalContext:
      "A traditional embroidery art form of Punjab, with a history dating back to the 15th century. The word 'phulkari' means 'flower work,' as the embroidery features floral and geometric motifs. It is an art form that is a symbol of a girl's journey into womanhood, with grandmothers and mothers teaching the craft to their daughters. The embroidered shawls are an integral part of weddings and festivals.",
    description:
      "A traditional embroidery art form where vibrant silk threads are used to create intricate designs on a cloth base, often cotton. The embroidery is done from the reverse side of the cloth, creating a rich and colorful pattern on the front. The designs are typically geometric, but they also include floral, animal, and bird motifs. The embroidery is known for its dense and detailed patterns, which cover the entire fabric.",
    media: "/traditions/phulkari.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Phulkari",
  },
  {
    name: "puppetry",
    slug: createSlug("puppetry"),
    origin: "Rajasthan",
    type: "Folk Art / Puppetry",
    culturalContext:
      "A traditional folk art form with a long history in India, with different forms of puppetry practiced in various regions. In Rajasthan, puppetry is a vibrant form of storytelling, used to narrate mythological and historical tales. It is a communal art form that brings people together, and it is a medium for entertainment and education. The puppets are often used to convey social messages and traditions.",
    description:
      "A broad category of traditional art forms that use puppets to tell stories. Indian puppetry includes various forms like string puppets, shadow puppets, and rod puppets. Each form has a unique style and method of manipulation. The performances are often accompanied by music and live narration, and the puppets are an extension of the puppeteer, who brings the characters to life with intricate movements and gestures.",
    media: "/traditions/puppetry.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Puppetry_in_India",
  },
  {
    name: "ramlila",
    slug: createSlug("ramlila"),
    origin: "Uttar Pradesh",
    type: "Folk Theatre",
    culturalContext:
      "A traditional folk theatre form that is an integral part of the Dussehra festival in North India. It is a dramatic re-enactment of the life of Lord Rama, ending with the defeat of Ravana. The performance is a communal event that brings people together and is a deeply spiritual experience. It is a living tradition that is a vital part of the cultural and religious heritage of the region.",
    description:
      "A theatrical re-enactment of the life of Lord Rama, based on the epic Ramayana. The performance can last for several days and is a blend of acting, singing, and dialogue. The actors, often from the local community, portray the characters in a unique and expressive style. The play is performed in public spaces, and the audience participates by shouting and cheering during key scenes.",
    media: "/traditions/ramlila.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Ramlila",
  },
  {
    name: "sandalwood-carving",
    slug: createSlug("sandalwood-carving"),
    origin: "Karnataka",
    type: "Handicraft",
    culturalContext:
      "An ancient handicraft with a history spanning over 1,000 years, sandalwood carving is a prized art form in Karnataka. The craft is a testament to the skill and patience of the artisans, who transform blocks of fragrant sandalwood into intricate works of art. The art form is deeply rooted in the region's culture and is often used to create religious figures and decorative items.",
    description:
      "A traditional handicraft that involves carving intricate designs on blocks of fragrant sandalwood. The artisans use specialized tools to create detailed carvings of deities, animals, and decorative motifs. The art form is known for its intricate detailing and the natural fragrance of the sandalwood. The finished products are a symbol of elegance and are prized for their beauty and aroma.",
    media: "/traditions/sandalwood-carving.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sandalwood_carving",
  },
  {
    name: "santhal",
    slug: createSlug("santhal"),
    origin: "Jharkhand",
    type: "Folk Dance",
    culturalContext:
      "A traditional folk dance of the Santhal tribe, a community that is one of the largest tribes in India. The dance is an expression of their identity and is performed during festivals and social gatherings. It is a communal art form that brings people together and is a celebration of nature, life, and their rich cultural heritage. The dance is a powerful form of expression and a symbol of their unity.",
    description:
      "A rhythmic and energetic folk dance performed by both men and women. The dancers move in a large circle, swaying and stepping to the beat of traditional drums like the 'tamak' and 'tumdak.' The dance is known for its synchronized movements and its hypnotic rhythm. The dancers often wear traditional costumes and adorn themselves with jewelry, adding to the visual appeal of the performance.",
    media: "/traditions/santhal.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Santhal_dance",
  },
  {
    name: "sarangi",
    slug: createSlug("sarangi"),
    origin: "Rajasthan",
    type: "String Instrument",
    culturalContext:
      "A bowed string instrument that is a key part of Hindustani classical music and folk music. The word 'sarangi' means 'a hundred colors,' referring to its ability to produce a wide range of emotions and sounds. It is often used to accompany vocalists, as its sound is said to mimic the human voice. The instrument is a symbol of the rich musical heritage of North India.",
    description:
      "A short-necked, bowed string instrument made from a single block of wood. It has three main playing strings and a number of sympathetic strings that resonate with the main strings. The instrument is played with a bow and is known for its expressive, soulful sound, which is often said to be the closest to the human voice. It is a difficult instrument to master, and its sound is a hallmark of classical Indian music.",
    media: "/traditions/sarangi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sarangi",
  },
  {
    name: "sarod",
    slug: createSlug("sarod"),
    origin: "Uttar Pradesh",
    type: "String Instrument",
    culturalContext:
      "A classical string instrument that is a key part of Hindustani classical music. The instrument's sound is known for its deep, resonant, and mellow tone. It is a fretless instrument, which allows for a smooth glissando (slide), a key feature of Hindustani music. The instrument's history is intertwined with the courtly traditions of North India, and it is a symbol of musical excellence.",
    description:
      "A fretless string instrument with a metal fingerboard and a resonant body. It has a number of main playing strings and a set of sympathetic strings that resonate when the main strings are played. The instrument is played with a plectrum made of coconut shell. It is known for its deep, rich, and lyrical sound and is a key melodic instrument in Hindustani classical music.",
    media: "/traditions/sarod.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sarod",
  },
  {
    name: "sattriya",
    slug: createSlug("sattriya"),
    origin: "Assam",
    type: "Classical Dance",
    culturalContext:
      "A classical dance form that was developed by the saint-scholar Srimanta Sankardev in the 15th century. It is a devotional dance form that was used to propagate the Vaishnava faith. The dance is performed in 'sattras' (monasteries) and is a blend of dance, music, and dramatic narration. It is a deeply spiritual and ritualistic art form that is an important part of Assamese religious and cultural life.",
    description:
      "A classical dance known for its lyrical grace and expressive movements. The dance is a blend of pure dance (nritta) and expressive storytelling (nritya). The dancers wear a traditional costume made from Assam silk, and their movements are characterized by a focus on hand gestures, facial expressions, and rhythmic footwork. The performance is accompanied by traditional musical instruments like the 'khol' drum and the 'manjira' cymbals.",
    media: "/traditions/sattriya.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sattriya",
  },
  {
    name: "shehnai",
    slug: createSlug("shehnai"),
    origin: "Uttar Pradesh",
    type: "Wind Instrument",
    culturalContext:
      "A classical wind instrument that holds a sacred and ceremonial place in Indian culture. The sound of the shehnai is considered auspicious and is traditionally played during weddings, festivals, and religious ceremonies. The instrument's sound is a symbol of joy and celebration, and its presence at a function is believed to bring good fortune and prosperity.",
    description:
      "A conical-shaped wind instrument made of wood, with a metal bell at the end. It has a double-reed mouthpiece and a number of finger holes. The instrument is played by blowing into the mouthpiece and covering and uncovering the holes to produce a rich and vibrant tone. The sound is known for its sweet, melodious, and penetrating quality, and it is a key melodic instrument in North Indian classical and folk music.",
    media: "/traditions/shehnai.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Shehnai",
  },
  {
    name: "sitar",
    slug: createSlug("sitar"),
    origin: "Uttar Pradesh",
    type: "String Instrument",
    culturalContext:
      "A classical string instrument that is one of the most popular and iconic instruments in North Indian classical music. It is a symbol of musical excellence and is known for its intricate and soulful sound. The instrument's history is intertwined with the Mughal court, and its sound is a hallmark of classical Indian music. It is a key instrument for solo performances and is often used to accompany vocalists.",
    description:
      "A long-necked, plucked string instrument made from a gourd and wood. It has a number of main playing strings and a set of sympathetic strings that resonate to produce a rich and vibrant tone. The instrument is played with a plectrum (mizrab) worn on the index finger, and its sound is known for its complex overtones and sweet, melodic quality. It is a highly versatile instrument that can produce a wide range of sounds.",
    media: "/traditions/sitar.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sitar",
  },
  {
    name: "tabla",
    slug: createSlug("tabla"),
    origin: "Uttar Pradesh",
    type: "Percussion Instrument",
    culturalContext:
      "A pair of hand drums that are the primary percussion instrument in North Indian classical music. The instrument is a symbol of rhythmic complexity and is a key part of any Hindustani musical performance. The tabla's sound is a blend of melody and rhythm, and it is used to provide the rhythmic foundation for a performance. The instrument's history is intertwined with the courtly traditions of North India.",
    description:
      "A pair of small hand drums, one for the right hand and one for the left. The 'dayan' (right drum) is made of wood and produces a high-pitched sound, while the 'bayan' (left drum) is made of metal and produces a deep bass sound. The drums are played with the palms and fingers, and the player can produce a variety of tones and rhythms by varying the striking technique. The tabla is a highly versatile instrument that can be used for solo performances and accompaniment.",
    media: "/traditions/tabla.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tabla",
  },
  {
    name: "tamasha",
    slug: createSlug("tamasha"),
    origin: "Maharashtra",
    type: "Folk Theatre",
    culturalContext:
      "A traditional folk theatre form of Maharashtra, with a history dating back to the 16th century. It is a unique blend of drama, music, songs, and dance, often with a focus on social and political commentary. The performances are a communal event that brings people together and are a form of entertainment and education. The art form is a vital part of the cultural landscape of Maharashtra.",
    description:
      "A folk theatre form that is a blend of singing, acting, and dance. The performances are often based on mythological stories, folk tales, and contemporary themes. The performers use a variety of expressive gestures, songs, and dialogue to narrate the stories. The performance is known for its high energy and spontaneous humor, which engages the audience and makes the experience more interactive.",
    media: "/traditions/tamasha.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tamasha",
  },
  {
    name: "tambura",
    slug: createSlug("tambura"),
    origin: "Tamil Nadu",
    type: "String Instrument",
    culturalContext:
      "A traditional string instrument that is a key part of both Hindustani and Carnatic classical music. The instrument is a drone instrument, providing a continuous sound that serves as a backdrop for the main melody. It is a symbol of aural harmony and is an essential part of any classical musical performance, providing a meditative and rhythmic base for the music.",
    description:
      "A long-necked string instrument with a resonant body made of wood. It has four or five strings, which are plucked continuously to produce a continuous drone sound. The instrument does not have any frets, as its purpose is to produce a single, sustained sound. It is a key instrument for providing the rhythmic and harmonic base for classical Indian music.",
    media: "/traditions/tambura.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tanpura",
  },
  {
    name: "terracotta-pottery",
    slug: createSlug("terracotta-pottery"),
    origin: "West Bengal",
    type: "Pottery / Handicraft",
    culturalContext:
      "An ancient form of pottery that is an integral part of Indian folk art and culture. The craft is a testament to the skill of the artisans, who use clay to create a wide range of objects, from religious figures to decorative items. The art form is deeply rooted in the rural life of India and is a symbol of simplicity, earthiness, and spiritual expression.",
    description:
      "A type of pottery made from a reddish-brown clay that is fired at a high temperature. The finished products are known for their distinct earthy color and rustic finish. The artisans use a variety of techniques to create intricate designs, and the finished products are a blend of art and utility. The craft is known for its simple, yet elegant, designs and its connection to nature.",
    media: "/traditions/terracotta-pottery.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Terracotta_art",
  },
  {
    name: "thanjavur-painting",
    slug: createSlug("thanjavur-painting"),
    origin: "Tamil Nadu",
    type: "Painting",
    culturalContext:
      "A classical South Indian painting style that originated in the city of Thanjavur (Tanjore) in Tamil Nadu. The art form is known for its vibrant colors, intricate details, and gold leaf work. The paintings are deeply religious, with themes centered around Hindu deities and mythological stories. The art form is a symbol of devotion and a celebration of the region's rich artistic heritage.",
    description:
      "A traditional painting style that is known for its intricate and layered composition. The paintings are made on a wooden canvas and are adorned with gold leaf, precious stones, and vibrant colors. The artists use a special technique to create a raised surface for the gold leaf, giving the painting a three-dimensional effect. The finished products are a beautiful and ornate work of art, a blend of painting and sculpture.",
    media: "/traditions/thanjavur-painting.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tanjore_painting",
  },
  {
    name: "thavil",
    slug: createSlug("thavil"),
    origin: "Tamil Nadu",
    type: "Percussion Instrument",
    culturalContext:
      "A traditional percussion instrument that is a key part of Carnatic classical music and folk music. The instrument is a symbol of rhythmic excellence and is used to provide the rhythmic foundation for a musical performance. It is a loud and powerful instrument that is often played during religious ceremonies and festivals, and its sound is a symbol of celebration and devotion.",
    description:
      "A large, two-headed barrel-shaped drum made of jackfruit wood. The two drumheads are of different sizes and are made of a variety of animal hides. The instrument is played with a stick on one side and the fingers on the other, and the player can produce a wide range of tones and rhythms. It is a powerful instrument that provides the rhythmic backbone for a Carnatic musical performance.",
    media: "/traditions/thavil.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Thavil",
  },
  {
    name: "theyyam",
    slug: createSlug("theyyam"),
    origin: "Kerala",
    type: "Ritualistic Art Form",
    culturalContext:
      "A traditional ritualistic art form of North Kerala, where performers transform into deities and heroes. The word 'theyyam' means 'God,' and the performance is a form of worship and a way of communicating with the divine. The art form is a powerful and sacred ritual that is performed in temples and sacred groves. It is a blend of dance, music, and acting, and is a key part of the region's religious and cultural heritage.",
    description:
      "A ritualistic art form where a performer undergoes a spiritual transformation to become a deity or a mythological character. The performers wear elaborate and heavy costumes, intricate makeup, and a massive headdress. The performance is a blend of dance, mime, and acting, with the performer using expressive gestures and body movements to narrate stories and convey emotions. The performance is a visual and spiritual spectacle.",
    media: "/traditions/theyyam.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Theyyam",
  },
  {
    name: "veena",
    slug: createSlug("veena"),
    origin: "Tamil Nadu",
    type: "String Instrument",
    culturalContext:
      "A classical string instrument that is a key part of Carnatic classical music. The instrument holds a sacred place in Hindu mythology and is associated with the goddess Saraswati. It is a symbol of musical excellence and is known for its deep, resonant, and lyrical sound. The instrument's history is intertwined with the temple traditions of South India, and it is a key instrument for solo performances and accompaniment.",
    description:
      "A long-necked, plucked string instrument made from wood, with a large resonant body. It has a number of main playing strings and a set of sympathetic strings. The instrument is played with a plectrum on the index and middle fingers, and its sound is known for its soulful, resonant, and lyrical quality. The instrument is a highly versatile instrument that can produce a wide range of tones and emotions.",
    media: "/traditions/veena.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Veena",
  },
  {
    name: "warli-painting",
    slug: createSlug("warli-painting"),
    origin: "Maharashtra",
    type: "Folk Art / Painting",
    culturalContext:
      "A traditional folk art form created by the Warli tribe, a community that is one of the largest tribes in India. The art form is a visual representation of their cultural heritage, with themes centered around daily life, nature, and social events. The paintings are a form of storytelling and are a vital part of the tribe's rituals and ceremonies.",
    description:
      "A simple yet expressive folk painting form known for its use of basic geometric shapes like circles, triangles, and squares. The paintings are typically done on a mud wall with a white pigment made from rice paste. The themes often include scenes of hunting, farming, and festivals, with the figures in the paintings being simple and stylized. The art form is a beautiful and simple depiction of life and nature.",
    media: "/traditions/warli-painting.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Warli_painting",
  },
  {
    name: "yakshagana",
    slug: createSlug("yakshagana"),
    origin: "Karnataka",
    type: "Folk Theatre",
    culturalContext:
      "A traditional folk theatre form that is a blend of dance, music, song, and dialogue. The performance is a dramatic re-enactment of stories from Hindu epics and Puranas. The art form is a communal event that brings people together and is a form of entertainment and education. It is a vibrant and energetic art form that is a key part of the cultural landscape of the region.",
    description:
      "A theatrical form known for its elaborate costumes, vibrant makeup, and powerful acting. The performers wear a massive headdress and a variety of ornaments, and their movements are highly stylized and expressive. The performance is accompanied by traditional musical instruments, including the maddale drum and the chande drum. The play is a blend of dance, music, and dialogue, and is a visually and aurally rich experience.",
    media: "/traditions/yakshagana.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Yakshagana",
  },
  {
    name: "zardozi",
    slug: createSlug("zardozi"),
    origin: "Uttar Pradesh",
    type: "Embroidery",
    culturalContext:
      "A traditional form of embroidery that originated in Persia and was brought to India by the Mughals. The word 'zardozi' is a blend of 'zar' (gold) and 'dozi' (sewing). The art form is a symbol of luxury and royalty, and it was used to adorn the clothes of kings and queens. It is a meticulous and time-consuming process that requires immense skill and precision.",
    description:
      "A type of embroidery that involves using gold and silver threads to create intricate and ornate designs on a fabric. The embroidery is a blend of gold and silver threads, beads, and precious stones, which are stitched onto a fabric to create a rich and luxurious design. The art form is known for its intricate patterns and its ability to transform a simple fabric into a work of art.",
    media: "/traditions/zardozi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Zardozi",
  },
  {
    name: "Hyderabadi Biryani",
    slug: createSlug("Hyderabadi Biryani"),
    origin: "Telangana",
    type: "Rice Dish",
    culturalContext:
      "A culinary masterpiece with Mughal and Nizami influences, Hyderabadi Biryani is a world-renowned dish that has become synonymous with the city of Hyderabad. It evolved in the kitchens of the Nizam of Hyderabad and is considered a royal and festive dish, often served at weddings, parties, and special occasions. The dish is a perfect blend of rich spices, aromatic rice, and tender meat, reflecting the city's opulent history.",
    description:
      "A fragrant, layered rice dish made with basmati rice, tender marinated meat (chicken, mutton, or goat), and a blend of aromatic spices. The 'dum' cooking method is used, where the pot is sealed with dough to allow the flavors to infuse and the ingredients to cook slowly. The dish is known for its distinct aroma, vibrant color, and rich, savory flavor. It is typically served with raita and mirchi ka salan.",
    media: "/traditions/hyderabadi-biryani.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Hyderabadi_biryani",
  },
  {
    name: "Thukpa",
    slug: createSlug("Thukpa"),
    origin: "Arunachal Pradesh",
    type: "Noodle Soup",
    culturalContext:
      "A hearty noodle soup that is a staple food in the Himalayan region of Arunachal Pradesh. It has Tibetan and Nepalese influences and is a popular comfort food, especially in the cold climate of the region. The dish is a wholesome meal that is a symbol of warmth and hospitality, often shared with friends and family during social gatherings and festivals.",
    description:
      "A warming noodle soup made with vegetables or meat, often chicken or pork, in a flavorful broth. It is seasoned with local spices and herbs, and the noodles are typically handmade. The dish is served hot and is a complete meal in itself, providing a source of warmth and energy in the cold weather. It is a simple yet nourishing dish that is a staple in the region.",
    media: "/traditions/thupka.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Thukpa",
  },
  {
    name: "Masor Tenga",
    slug: createSlug("Masor Tenga"),
    origin: "Assam",
    type: "Curry",
    culturalContext:
      "A traditional fish curry that is a signature dish of Assamese cuisine. The word 'tenga' means sour, and the sourness is the defining characteristic of the dish. It is a light and refreshing dish that is perfect for the humid climate of the region. The dish is often prepared during festivals and celebrations and is a symbol of Assamese identity and culinary tradition.",
    description:
      "A light and tangy fish curry made with a souring agent, such as tomato, lemon, or a local fruit called 'thekera.' The curry is cooked with a variety of vegetables and spices, and the fish is a key ingredient. The dish is known for its subtle flavors and is typically served with rice. The sourness of the curry balances the richness of the fish and creates a unique and refreshing taste.",
    media: "/traditions/masor-tenga.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tenga_fish_curry",
  },
  {
    name: "Litti Chokha",
    slug: createSlug("Litti Chokha"),
    origin: "Bihar",
    type: "Main Course",
    culturalContext:
      "A rustic and wholesome dish that is a staple of Bihari cuisine. It is a food of resilience, traditionally cooked over a fire in rural areas. The dish is a complete meal in itself and is a symbol of Bihari hospitality and simplicity. It is often served during festivals, family gatherings, and special occasions.",
    description:
      "A dish consisting of 'litti,' a round wheat flour ball filled with roasted gram flour (sattu) and spices, which is roasted over charcoal or firewood. The 'litti' is then served with 'chokha,' a mash made from roasted eggplant, potatoes, and tomatoes. The dish is known for its smoky flavor, hearty texture, and rustic charm. It is often eaten with a drizzle of clarified butter and a side of pickles.",
    media: "/traditions/litti-chokha.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Litti_Chokha",
  },
  {
    name: "Aamat",
    slug: createSlug("Aamat"),
    origin: "Chhattisgarh",
    type: "Curry / Soup",
    culturalContext:
      "A traditional dish of Chhattisgarh, Aamat is a staple in the Bastar region. It is believed to be the world's first-ever vegetable soup, with a history dating back over 1,000 years. The dish is a vegetarian curry that is a symbol of the region's simple and nourishing cuisine. It is often prepared during festivals and celebrations and is a key part of the local culinary tradition.",
    description:
      "A tangy and flavorful curry made from a variety of vegetables and lentils, seasoned with local spices. The dish is known for its sour taste, which comes from the use of tamarind or a similar souring agent. It is a hearty and wholesome dish that is typically served with rice. The dish's simple ingredients and complex flavors make it a unique and satisfying meal.",
    media: "/traditions/aamat.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Aamat",
  },
  {
    name: "Goan Fish Curry",
    slug: createSlug("Goan Fish Curry"),
    origin: "Goa",
    type: "Curry",
    culturalContext:
      "A signature dish of Goan cuisine, Goan Fish Curry reflects the state's coastal location and Portuguese influences. It is a spicy and tangy curry that is a staple in Goan households. The dish is a symbol of the state's vibrant and tropical culture and is often served at family gatherings, parties, and festivals. It is a testament to the region's love for seafood.",
    description:
      "A spicy and tangy curry made with fresh fish, often pomfret or kingfish, cooked in a coconut-based gravy. The curry is seasoned with a blend of local spices, including red chilies, turmeric, and kokum, which gives it a distinct sour taste. The dish is typically served with rice and is known for its rich, aromatic flavor. It is a perfect blend of spicy, tangy, and savory flavors.",
    media: "/traditions/goan-fish-curry.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Goan_fish_curry",
  },
  {
    name: "Dhokla",
    slug: createSlug("Dhokla"),
    origin: "Gujarat",
    type: "Snack / Breakfast",
    culturalContext:
      "A popular vegetarian dish from Gujarat, Dhokla is a steamed and savory snack that is a staple of Gujarati cuisine. It is a light and healthy dish that is often served for breakfast, as a snack, or as a side dish. The dish is a symbol of Gujarati hospitality and is a perfect blend of sweet and savory flavors.",
    description:
      "A steamed, savory cake made from a fermented batter of rice and chickpea flour. The cake is soft, fluffy, and spongy, with a distinct sour taste. It is typically served with a tempering of mustard seeds, curry leaves, and green chilies. The dish is known for its light texture and its unique combination of sweet, savory, and tangy flavors. It is often served with green chutney.",
    media: "/traditions/dhokla.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dhokla",
  },
  {
    name: "Bajre ki Khichdi",
    slug: createSlug("Bajre ki Khichdi"),
    origin: "Haryana",
    type: "Main Course",
    culturalContext:
      "A traditional dish of Haryana, Bajre ki Khichdi is a wholesome and nutritious dish made from pearl millet. It is a staple food in the winter season, as the millet is believed to provide warmth and energy to the body. The dish is a symbol of the region's simple and rustic cuisine and is often served at social gatherings and festivals.",
    description:
      "A thick, porridge-like dish made from crushed pearl millet (bajra) and lentils, cooked with spices and water. The dish is known for its hearty and rustic texture and is a complete meal in itself. It is typically served with a dollop of clarified butter and a side of pickles or curd. The dish is a source of warmth and nourishment, perfect for the cold climate of the region.",
    media: "/traditions/bajre-ki-khichdi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Khichdi",
  },
  {
    name: "Dham",
    slug: createSlug("Dham"),
    origin: "Himachal Pradesh",
    type: "Main Course",
    culturalContext:
      "A traditional Himachali dish that is a complete meal in itself, typically served during festivals, weddings, and other special occasions. It is a unique culinary experience, as the meal is served on a leaf plate and is cooked without using any onion or garlic. The dish is a symbol of the region's simple and pure cuisine and is a testament to its rich culinary heritage.",
    description:
      "A complete meal that includes a variety of dishes, such as lentil curries, rice, and a sweet dish. The meal is cooked by a team of chefs known as 'botis,' who use traditional cooking methods and spices. The dishes are served in a specific order, and the meal is a cultural experience that is a key part of the region's social life.",
    media: "/traditions/dham.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Himachali_Dham",
  },
  {
    name: "Handia",
    slug: createSlug("Handia"),
    origin: "Jharkhand",
    type: "Fermented Rice Drink",
    culturalContext:
      "A traditional rice beer that is a staple drink of the tribal communities of Jharkhand. It is a fermented drink that is considered sacred and is often offered to deities during religious ceremonies and rituals. The drink is a symbol of the region's ancient culture and is a vital part of the social and spiritual life of the tribal communities.",
    description:
      "A traditional rice beer made by fermenting boiled rice with a starter culture. The drink is known for its mild and refreshing taste and is often served during festivals, weddings, and other special occasions. The drink is a source of nourishment and is believed to have medicinal properties. It is a unique and traditional drink that is a key part of the region's culinary heritage.",
    media: "/traditions/handia.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Handia",
  },
  {
    name: "Bisi Bele Bath",
    slug: createSlug("Bisi Bele Bath"),
    origin: "Karnataka",
    type: "Rice Dish",
    culturalContext:
      "A traditional rice dish from Karnataka that is a popular comfort food. The name means 'hot lentil rice,' and the dish is known for its rich and savory flavor. It is a complete meal in itself, with a blend of rice, lentils, and vegetables. The dish is a symbol of the region's simple and nourishing cuisine and is often served at social gatherings and festivals.",
    description:
      "A flavorful and spicy rice dish made with rice, lentils, a variety of vegetables, and a special spice powder. The dish is cooked with a blend of aromatic spices and is known for its rich, savory flavor. It is typically served hot with a side of raita, papad, and a drizzle of clarified butter. The dish is a perfect blend of sweet, sour, and spicy flavors.",
    media: "/traditions/bisi-bele-bath.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bisi_bele_bhath",
  },
  {
    name: "Appam with Stew",
    slug: createSlug("Appam with Stew"),
    origin: "Kerala",
    type: "Main Course",
    culturalContext:
      "A traditional dish of Kerala, Appam with Stew is a popular breakfast and dinner option. The dish is a perfect blend of a light and fluffy bread with a rich and creamy stew. It is a symbol of the region's simple and elegant cuisine and is often served at family gatherings and special occasions. The dish reflects the state's love for coconuts and spices.",
    description:
      "A light and fluffy pancake-like bread made from a fermented batter of rice and coconut milk. The 'appam' has a soft and spongy center and a crispy, lacy edge. It is typically served with a creamy stew made from vegetables or meat, seasoned with coconut milk and spices. The dish is a perfect blend of sweet and savory flavors and is a wholesome and satisfying meal.",
    media: "/traditions/appam-with-stew.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Appam_and_stew",
  },
  {
    name: "Bhutte ka Kees",
    slug: createSlug("Bhutte ka Kees"),
    origin: "Madhya Pradesh",
    type: "Snack / Side Dish",
    culturalContext:
      "A popular street food and snack from Madhya Pradesh, Bhutte ka Kees is a unique and delicious dish made from corn. The dish is a symbol of the region's simple and rustic cuisine, and it is a popular comfort food, especially in the rainy season. It is a perfect blend of sweet and savory flavors and is a testament to the region's love for local produce.",
    description:
      "A grated corn dish made by cooking grated corn kernels with milk, spices, and a touch of sweetness. The dish is known for its soft, creamy texture and its unique combination of sweet, savory, and spicy flavors. It is typically served hot with a sprinkle of cilantro and a squeeze of lime juice. The dish is a delicious and healthy snack that is a staple of the region.",
    media: "/traditions/bhutte-ka-kees.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bhutte_ka_kees",
  },
  {
    name: "Misal Pav",
    slug: createSlug("Misal Pav"),
    origin: "Maharashtra",
    type: "Main Course",
    culturalContext:
      "A popular street food and breakfast dish from Maharashtra, Misal Pav is a spicy and flavorful curry served with bread. It is a staple food in the state, with each region having its own unique variation. The dish is a symbol of the region's vibrant and energetic culture and is a perfect blend of different textures and flavors.",
    description:
      "A spicy curry made from a mix of sprouts and lentils, topped with a variety of ingredients, such as farsan, onions, cilantro, and lemon juice. The 'misal' is typically served with 'pav,' a type of soft bread. The dish is known for its spicy and flavorful taste, and it is a complete meal in itself. It is a popular comfort food and is a must-try for any visitor to the state.",
    media: "/traditions/misal-pav.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Misal",
  },
  {
    name: "Eromba",
    slug: createSlug("Eromba"),
    origin: "Manipur",
    type: "Side Dish / Chutney",
    culturalContext:
      "A traditional dish of Manipur, Eromba is a fermented fish chutney that is a staple food in the region. The dish is a symbol of the region's love for fermented food and is a key part of the local culinary tradition. It is a side dish that is often served with rice and is a perfect blend of spicy, tangy, and savory flavors.",
    description:
      "A fermented fish chutney made from a blend of fermented fish, boiled vegetables, and local herbs and spices. The dish is known for its strong and pungent flavor, and it is a key part of the local cuisine. It is a spicy and flavorful side dish that is typically served with rice and other main courses. The dish is a testament to the region's unique culinary heritage.",
    media: "/traditions/eromba.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Eromba",
  },
  {
    name: "Jadoh",
    slug: createSlug("Jadoh"),
    origin: "Meghalaya",
    type: "Rice Dish",
    culturalContext:
      "A traditional rice dish that is a staple food of the Khasi community of Meghalaya. It is a savory and flavorful dish that is a complete meal in itself. The dish is a symbol of the region's love for rice and meat and is often served during festivals and special occasions. The dish is a perfect blend of different flavors and textures, reflecting the region's rich culinary tradition.",
    description:
      "A rice dish made with rice and meat, typically pork or chicken, cooked with a blend of local spices and herbs. The dish is known for its rich and savory flavor and is a wholesome meal that is a source of nourishment and energy. It is a popular comfort food and is a must-try for any visitor to the state. The dish is a unique and delicious rice dish.",
    media: "/traditions/jadoh.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Jadoh",
  },
  {
    name: "Misa Mach Poora",
    slug: createSlug("Misa Mach Poora"),
    origin: "Mizoram",
    type: "Main Course",
    culturalContext:
      "A traditional dish of Mizoram, Misa Mach Poora is a grilled shrimp dish that is a staple food of the region. The dish is a symbol of the state's love for seafood and is often served during festivals and celebrations. It is a light and flavorful dish that is a perfect blend of different spices and textures, reflecting the region's unique culinary heritage.",
    description:
      "A grilled shrimp dish made with fresh shrimp that are marinated with a blend of local spices and herbs. The shrimp are then grilled over a charcoal fire, which gives them a smoky flavor. The dish is known for its light and flavorful taste and is a popular snack and appetizer. It is a perfect blend of sweet, sour, and spicy flavors.",
    media: "/traditions/misa-mach-poora.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Misa_mach_poora",
  },
  {
    name: "Pork with Bamboo Shoot",
    slug: createSlug("Pork with Bamboo Shoot"),
    origin: "Nagaland",
    type: "Main Course",
    culturalContext:
      "A signature dish of Nagaland, Pork with Bamboo Shoot is a staple food of the region. The dish is a symbol of the state's love for pork and is often served during festivals and special occasions. It is a hearty and flavorful dish that is a perfect blend of different textures and flavors, reflecting the region's unique culinary tradition.",
    description:
      "A pork curry made with a blend of local spices and bamboo shoot. The bamboo shoot adds a unique sour and pungent flavor to the dish. The pork is cooked with a blend of local herbs and spices, and the dish is known for its rich and savory flavor. It is a wholesome and satisfying meal that is typically served with rice.",
    media: "/traditions/pork-with-bamboo-shoot.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Naga_cuisine",
  },
  {
    name: "Dalma",
    slug: createSlug("Dalma"),
    origin: "Odisha",
    type: "Curry",
    culturalContext:
      "A traditional dish of Odisha, Dalma is a wholesome and nutritious dish made from lentils and vegetables. It is a staple food in the state and is often served during festivals and religious ceremonies. The dish is a symbol of the region's simple and nourishing cuisine and is a testament to its rich culinary heritage. It is a perfect blend of different flavors and textures.",
    description:
      "A thick curry made from a mix of lentils and a variety of vegetables, seasoned with local spices and herbs. The dish is known for its hearty and rustic texture and is a complete meal in itself. It is typically served with rice and a side of pickles. The dish is a perfect blend of savory and spicy flavors and is a wholesome and satisfying meal.",
    media: "/traditions/dalma.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dalma",
  },
  {
    name: "Makki di Roti with Sarson da Saag",
    slug: createSlug("Makki di Roti with Sarson da Saag"),
    origin: "Punjab",
    type: "Main Course",
    culturalContext:
      "A classic Punjabi dish that is a staple food in the winter season. The dish is a symbol of the region's rustic and wholesome cuisine and is a perfect blend of different flavors and textures. It is often served at family gatherings and festivals and is a key part of the local culinary tradition. The dish is a testament to the region's love for butter and spices.",
    description:
      "A dish consisting of 'makki di roti,' a flatbread made from corn flour, and 'sarson da saag,' a thick curry made from mustard greens and other leafy vegetables. The 'roti' is served hot with a dollop of clarified butter, and the 'saag' is seasoned with local spices and herbs. The dish is known for its rich and savory flavor and is a wholesome and satisfying meal.",
    media: "/traditions/makki-di-roti-with-sarson-da-saag.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sarson_ka_saag",
  },
  {
    name: "Dal Baati Churma",
    slug: createSlug("Dal Baati Churma"),
    origin: "Rajasthan",
    type: "Main Course",
    culturalContext:
      "A traditional Rajasthani dish that is a symbol of the region's rich and flavorful cuisine. The dish is a complete meal in itself, with a blend of lentils, baked wheat balls, and a sweet dish. It is a staple food in the state and is often served at family gatherings and festivals. The dish is a testament to the region's love for butter and spices.",
    description:
      "A dish consisting of three main components: 'dal,' a spicy lentil curry; 'baati,' a hard, baked wheat ball; and 'churma,' a sweet dessert made from crushed 'baati,' jaggery, and clarified butter. The 'baati' is served with a generous amount of clarified butter and is eaten with the spicy 'dal.' The dish is known for its rustic charm and its unique combination of savory and sweet flavors.",
    media: "/traditions/dal-baati-churma.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Dal_baati",
  },
  {
    name: "Momos",
    slug: createSlug("Momos"),
    origin: "Sikkim",
    type: "Dumpling / Snack",
    culturalContext:
      "A popular dish that has become a staple of Sikkim's cuisine. It has Tibetan and Nepalese influences and is a popular comfort food, especially in the cold climate of the region. The dish is a symbol of the region's love for simple and wholesome food and is a must-try for any visitor to the state. It is a perfect blend of different flavors and textures.",
    description:
      "A dumpling made from a simple flour dough, filled with a savory mixture of meat or vegetables. The dumplings are steamed or fried and are served with a spicy dipping sauce. The dish is known for its light and fluffy texture and its unique combination of savory and spicy flavors. It is a popular snack and appetizer that is a key part of the region's culinary heritage.",
    media: "/traditions/momos.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Momo_(dumpling)",
  },
  {
    name: "Pongal",
    slug: createSlug("Pongal"),
    origin: "Tamil Nadu",
    type: "Rice Dish",
    culturalContext:
      "A traditional dish that is a staple food in Tamil Nadu. The dish is a symbol of the region's love for rice and is a key part of the local culinary tradition. It is a perfect blend of sweet and savory flavors and is often served during festivals and special occasions. The dish is a testament to the region's love for spices and herbs.",
    description:
      "A fragrant, layered rice dish made with basmati rice, tender marinated meat (chicken, mutton, or goat), and a blend of aromatic spices. The 'dum' cooking method is used, where the pot is sealed with dough to allow the flavors to infuse and the ingredients to cook slowly. The dish is known for its distinct aroma, vibrant color, and rich, savory flavor. It is typically served with raita and mirchi ka salan.",
    media: "/traditions/pongal.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Pongal_(dish)",
  },
  {
    name: "Mui Borok",
    slug: createSlug("Mui Borok"),
    origin: "Tripura",
    type: "Fish Dish",
    culturalContext:
      "A traditional dish of Tripura, Mui Borok is a fermented fish dish that is a staple food in the region. The dish is a symbol of the state's love for fermented food and is a key part of the local culinary tradition. It is a spicy and flavorful side dish that is often served with rice and is a perfect blend of different flavors and textures.",
    description:
      "A fermented fish dish made from a blend of fermented fish, vegetables, and local herbs and spices. The dish is known for its strong and pungent flavor, and it is a key part of the local cuisine. It is a spicy and flavorful side dish that is typically served with rice and other main courses. The dish is a testament to the region's unique culinary heritage.",
    media: "/traditions/mui-borok.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Mui_borok",
  },
  {
    name: "Tunde ke Kebab",
    slug: createSlug("Tunde ke Kebab"),
    origin: "Uttar Pradesh",
    type: "Snack / Main Course",
    culturalContext:
      "A culinary masterpiece with Mughal and Awadhi influences, Tunde ke Kebab is a world-renowned dish that has become synonymous with the city of Lucknow. The dish is a symbol of the city's royal and opulent history and is often served at weddings, parties, and special occasions. The dish is a perfect blend of rich spices, tender meat, and a unique aroma, reflecting the city's rich culinary tradition.",
    description:
      "A soft, melt-in-the-mouth kebab made from minced meat, seasoned with a blend of over 160 spices. The kebabs are shallow fried and are known for their incredibly soft and smooth texture. The dish is typically served with paratha and a side of pickles or chutney. The dish is a must-try for any visitor to the state and is a perfect blend of different flavors and textures.",
    media: "/traditions/tunde-ke-kebab.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Tunday_Kebabi",
  },
  {
    name: "Bal Mithai",
    slug: createSlug("Bal Mithai"),
    origin: "Uttarakhand",
    type: "Dessert",
    culturalContext:
      "A traditional sweet dish that is a specialty of Uttarakhand. It is a popular dessert that is a symbol of the region's simple and pure cuisine. The sweet is a perfect blend of different flavors and textures and is a must-try for any visitor to the state. It is often served during festivals and celebrations and is a key part of the local culinary tradition.",
    description:
      "A sweet dish made from roasted 'khoya' (milk solids) and coated with tiny white sugar balls. The sweet is known for its soft and creamy texture and its unique combination of sweet and milky flavors. It is a popular dessert that is a key part of the local cuisine and is often served during festivals and special occasions.",
    media: "/traditions/bal-mithai.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Bal_Mithai",
  },
  {
    name: "Rogan Josh",
    slug: createSlug("Rogan Josh"),
    origin: "Jammu and Kashmir",
    type: "Curry",
    culturalContext:
      "A traditional curry that is a signature dish of Kashmiri cuisine. The dish is a symbol of the region's rich and flavorful cuisine and is a key part of the local culinary tradition. It is a perfect blend of different flavors and textures and is often served at family gatherings and festivals. The dish is a testament to the region's love for spices and herbs.",
    description:
      "A rich and aromatic lamb curry made with a blend of local spices, yogurt, and a unique Kashmiri spice blend. The curry is known for its deep red color, which comes from the use of dried Kashmiri chilies. The dish is typically served with rice and is a perfect blend of savory and spicy flavors. It is a wholesome and satisfying meal that is a key part of the region's culinary heritage.",
    media: "/traditions/rogan-josh.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Rogan_Josh",
  },
  {
    name: "Chhole Bhature",
    slug: createSlug("Chhole Bhature"),
    origin: "Delhi",
    type: "Main Course",
    culturalContext:
      "A popular street food and breakfast dish that is a staple of Delhi's cuisine. The dish is a perfect blend of a spicy and flavorful curry with a soft and fluffy bread. It is a symbol of the city's vibrant and energetic culture and is a must-try for any visitor to the state. It is a wholesome and satisfying meal that is a key part of the local culinary tradition.",
    description:
      "A dish consisting of 'chhole,' a spicy chickpea curry, and 'bhature,' a fluffy, deep-fried bread. The 'chhole' is cooked with a blend of aromatic spices and herbs, and the 'bhature' is known for its soft and spongy texture. The dish is typically served with a side of onions, pickles, and a squeeze of lime juice. It is a perfect blend of different textures and flavors.",
    media: "/traditions/chhole-bhature.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Chole_bhature",
  },
  {
    name: "Rasgulla",
    slug: createSlug("Rasgulla"),
    origin: "West Bengal",
    type: "Dessert",
    culturalContext:
      "A traditional sweet dish that is a specialty of West Bengal. It is a popular dessert that is a symbol of the region's love for sweets. The sweet is a perfect blend of different flavors and textures and is a must-try for any visitor to the state. It is often served during festivals and celebrations and is a key part of the local culinary tradition.",
    description:
      "A sweet dish made from small, round balls of cottage cheese that are cooked in a light sugar syrup. The sweets are known for their soft and spongy texture and their sweet, syrupy flavor. It is a popular dessert that is a key part of the local cuisine and is often served during festivals and special occasions.",
    media: "/traditions/rasgulla.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Rasgulla",
  }
    ];

    // Insert into DB
    const inserted = await Tradition.insertMany(sampleData);

    res.json({
      message: "✅ Traditions seeded successfully",
      count: inserted.length,
      data: inserted,
    });
  } catch (err) {
    console.error("❌ Seed error:", err);
    res.status(500).json({ message: err.message });
  }
});

// Get all
router.get("/", async (req, res) => {
  try {
    const traditions = await Tradition.find();
    res.json(traditions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by slug
router.get("/:slug", async (req, res) => {
  try {
    const tradition = await Tradition.findOne({ slug: req.params.slug });
    if (!tradition) return res.status(404).json({ message: "Tradition not found" });
    res.json(tradition);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;