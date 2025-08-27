import express from "express";
import Festival from "../models/Festival.js";

const router = express.Router();

// Helper: Create slug from name
const createSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// 🔹 Seed Festivals
router.post("/seed", async (req, res) => {
  try {
    // Delete all existing documents to start fresh
    await Festival.deleteMany({});

    // Correct dataset
    const sampleData = [
      {
        name: "Diwali",
        slug: createSlug("Diwali"),
        origin: "Uttar Pradesh",
        type: "Religious / Cultural",
        description:
          "Diwali, the Festival of Lights, celebrates the victory of light over darkness and good over evil...",
        ritualContext:
          "Lighting diyas, Lakshmi Puja, exchanging sweets, bursting crackers...",
        date: "Varies (October–November)",
        timeOfYear: "Autumn",
        media: "/festivals/diwali.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Diwali",
      },
      {
        name: "Ramleela",
        slug: createSlug("Ramleela"),
        origin: "Uttar Pradesh",
        type: "Folk Theatre",
        description:
          "A theatrical re-enactment of the life of Lord Rama, based on the Ramayana...",
        ritualContext:
          "Performing the play, devotional songs, cultural events...",
        date: "Varies (September–October)",
        timeOfYear: "Autumn",
        media: "/festivals/ramleela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ramleela",
      },
      // You can add up to 100 more festival objects here
      {
        name: "Holi",
        slug: createSlug("Holi"),
        origin: "Uttar Pradesh",
        type: "Religious / Cultural",
        description:
          "Holi, the Festival of Colors, marks the end of winter and the arrival of spring. It is a vibrant celebration of love and the victory of good over evil. The festival symbolizes new beginnings and the forging of new bonds.",
        ritualContext:
          "Playing with colored powders (gulal) and water, singing and dancing to folk songs, lighting bonfires on the night before Holi (Holika Dahan), and sharing traditional sweets like gujiya.",
        date: "Varies (March, based on the Hindu lunar calendar)",
        timeOfYear: "Spring",
        media: "/festivals/holi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Holi",
      },
      {
        name: "Kumbh Mela",
        slug: createSlug("Kumbh Mela"),
        origin: "Uttar Pradesh",
        type: "Religious",
        description:
          "The Kumbh Mela is a major pilgrimage of faith where millions of Hindus gather to bathe in a sacred river. The festival is a spiritually significant event believed to cleanse one of their sins and is a testament to the power of faith and devotion. It is held every 12 years in rotation at four different sites.",
        ritualContext:
          "Taking a ritualistic dip in the sacred rivers (Ganges, Yamuna, or Godavari), offering prayers, listening to spiritual discourses, and participating in religious processions led by sadhus and saints.",
        date: "Varies (Every 12 years in rotation between four sites)",
        timeOfYear: "Winter/Spring",
        media: "/festivals/kumbh-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Kumbh_Mela",
      },
      {
        name: "Lohri",
        slug: createSlug("Lohri"),
        origin: "Punjab",
        type: "Cultural",
        description:
          "Lohri is a popular winter harvest festival celebrating the end of the winter solstice. It is a time for farmers to thank the gods for the harvest and a time for families to gather, sing, and dance around a bonfire. The festival symbolizes the return of longer days and the warmth of community.",
        ritualContext:
          "Lighting a bonfire, throwing puffed rice and popcorn into the fire, singing folk songs, dancing to the beat of the dhol, and sharing traditional foods like gajak and sarson da saag.",
        date: "January 13",
        timeOfYear: "Winter",
        media: "/festivals/lohri.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Lohri",
      },
      {
        name: "Baisakhi",
        slug: createSlug("Baisakhi"),
        origin: "Punjab",
        type: "Cultural / Religious",
        description:
          "Baisakhi is a vibrant harvest festival that also marks the Sikh New Year and the formation of the Khalsa. It is a time for farmers to celebrate the rabi crop harvest and a time for the Sikh community to celebrate their faith with great devotion.",
        ritualContext:
          "Visiting gurdwaras, participating in Nagar Kirtan processions, performing the Bhangra and Giddha folk dances, and sharing traditional sweets and food with the community. The festivities are filled with joy and spiritual fervor.",
        date: "April 13 or 14",
        timeOfYear: "Spring",
        media: "/festivals/baisakhi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Vaisakhi",
      },
      {
        name: "Karva Chauth",
        slug: createSlug("Karva Chauth"),
        origin: "Uttar Pradesh",
        type: "Religious",
        description:
          "Karva Chauth is a traditional festival celebrated by married Hindu women who fast from sunrise to moonrise for the safety and longevity of their husbands. It is a deeply spiritual and personal festival that strengthens the bond of marriage and devotion.",
        ritualContext:
          "Observing a day-long fast without food or water, listening to the Karva Chauth vrat katha, offering prayers to the moon, and breaking the fast after seeing the moon through a sieve.",
        date: "Varies (October-November, based on the Hindu lunar calendar)",
        timeOfYear: "Autumn",
        media: "/festivals/karva-chauth.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Karva_Chauth",
      },
      {
        name: "Teej",
        slug: createSlug("Teej"),
        origin: "Rajasthan",
        type: "Religious / Cultural",
        description:
          "Teej is a monsoon festival celebrated by women, dedicated to the reunion of Lord Shiva and Goddess Parvati. It is a joyous occasion that welcomes the arrival of the monsoon season and a time for women to celebrate their marital bliss and hope for a long and happy life with their partners.",
        ritualContext:
          "Women dressing up in traditional green attire, singing folk songs, swinging on decorated swings, and observing a day-long fast for the well-being of their husbands and family. The festival is a colorful celebration of femininity and nature.",
        date: "Varies (July–August, based on the Hindu lunar calendar)",
        timeOfYear: "Monsoon",
        media: "/festivals/teej.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Teej",
      },
      {
        name: "Janmashtami",
        slug: createSlug("Janmashtami"),
        origin: "Uttar Pradesh",
        type: "Religious",
        description:
          "Janmashtami is a Hindu festival celebrating the birth of Lord Krishna. It is a day of devotion and spiritual reflection, with devotees fasting and visiting temples to offer prayers to the beloved deity. The festival is filled with joy, music, and the re-enactment of scenes from Krishna's childhood.",
        ritualContext:
          "Decorating temples with flowers and lights, observing a day-long fast, singing devotional songs, and re-enacting scenes from Krishna's life, especially the 'Dahi Handi' ritual.",
        date: "Varies (August-September, on the eighth day of Krishna Paksha)",
        timeOfYear: "Monsoon",
        media: "/festivals/janmashtami.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Krishna_Janmashtami",
      },
      {
        name: "Ram Navami",
        slug: createSlug("Ram Navami"),
        origin: "Uttar Pradesh",
        type: "Religious",
        description:
          "Ram Navami is a Hindu festival celebrating the birth of Lord Rama. It is a day of devotion and spiritual reflection, with devotees fasting and visiting temples to offer prayers to the beloved deity. The festival is a celebration of the values of righteousness, duty, and spiritual purity.",
        ritualContext:
          "Fasting, visiting temples, and reciting verses from the Ramayana. In Ayodhya, the festival is celebrated with grand processions and cultural performances, re-enacting scenes from Rama's life.",
        date: "Varies (March–April, on the ninth day of Chaitra Navaratri)",
        timeOfYear: "Spring",
        media: "/festivals/ram-navami.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Rama_Navami",
      },
      {
        name: "Chhath Puja",
        slug: createSlug("Chhath Puja"),
        origin: "Bihar",
        type: "Religious",
        description:
          "Chhath Puja is a four-day festival dedicated to the Sun God (Surya Dev) and his wife, Usha. The festival is a testament to the power of nature and is a time for people to offer prayers to the sun for health, prosperity, and well-being. It is a deeply spiritual and eco-friendly festival.",
        ritualContext:
          "Fasting without water for a day, taking a dip in a sacred river, and offering prayers to the setting and rising sun. The rituals are performed with great devotion and discipline, symbolizing a deep reverence for nature and its life-giving forces.",
        date: "Varies (October-November, six days after Diwali)",
        timeOfYear: "Autumn",
        media: "/festivals/chhath-puja.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Chhath",
      },
      {
        name: "Hemis Festival",
        slug: createSlug("Hemis Festival"),
        origin: "Ladakh",
        type: "Religious / Cultural",
        description:
          "A vibrant Buddhist festival celebrated in the Hemis Monastery to commemorate the birth of Guru Padmasambhava. The festival is a spectacle of traditional dances, music, and colorful costumes, with monks performing the sacred 'chaam' dance to ward off evil spirits and bring prosperity to the community.",
        ritualContext:
          "Monks perform the 'chaam' dance in colorful masks and costumes, a sacred ritual to ward off evil. The festival is a joyous occasion that brings people together to celebrate their faith and culture and is a unique blend of spiritual and artistic expression.",
        date: "Varies (July, on the tenth day of the fifth month of the Tibetan calendar)",
        timeOfYear: "Summer",
        media: "/festivals/hemis-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Hemis_Festival",
      },
      {
        name: "Tulip Festival",
        slug: createSlug("Tulip Festival"),
        origin: "Jammu and Kashmir",
        type: "Cultural",
        description:
          "The Tulip Festival is an annual celebration of the blooming tulips in the Indira Gandhi Memorial Tulip Garden, the largest tulip garden in Asia. It is a beautiful and serene festival that attracts tourists from all over the world, showcasing the natural beauty and splendor of Kashmir in the spring.",
        ritualContext:
          "Visiting the Indira Gandhi Memorial Tulip Garden to admire the blooming tulips, participating in cultural programs, and enjoying local food and handicrafts. The festival is a celebration of nature's beauty and the artistic heritage of the region.",
        date: "April",
        timeOfYear: "Spring",
        media: "/festivals/tulip-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Tulip_Festival,_Kashmir",
      },
      {
        name: "Losar",
        slug: createSlug("Losar"),
        origin: "Arunachal Pradesh",
        type: "Religious / Cultural",
        description:
          "Losar is a Tibetan Buddhist festival that marks the beginning of the New Year. It is a time for people to clean their homes, wear new clothes, and visit monasteries to offer prayers for a prosperous year ahead. The festival is a joyous occasion that brings people together to celebrate their faith and culture.",
        ritualContext:
          "Visiting monasteries, offering prayers, singing and dancing to traditional folk songs, and sharing traditional sweets and food with the community. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (February-March, based on the Tibetan calendar)",
        timeOfYear: "Winter",
        media: "/festivals/losar.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Losar",
      },
      {
        name: "Magh Mela",
        slug: createSlug("Magh Mela"),
        origin: "Uttar Pradesh",
        type: "Religious",
        description:
          "Magh Mela is an annual pilgrimage held at the confluence of the Ganges, Yamuna, and Saraswati rivers in Prayagraj. The festival is a sacred event where devotees take a ritualistic dip in the river to cleanse themselves of sins. It is a deeply spiritual experience that is a testament to the power of faith.",
        ritualContext:
          "Taking a holy dip in the Sangam (confluence of rivers), performing religious rituals, listening to spiritual discourses, and participating in the pilgrimage with great faith and devotion. The rituals are performed with immense discipline and reverence.",
        date: "Varies (January-February, based on the Hindu lunar calendar)",
        timeOfYear: "Winter",
        media: "/festivals/magh-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Magh_Mela",
      },
      {
        name: "Taj Mahotsav",
        slug: createSlug("Taj Mahotsav"),
        origin: "Uttar Pradesh",
        type: "Cultural",
        description:
          "The Taj Mahotsav is a 10-day cultural festival held in Agra, celebrating the rich heritage and traditions of Uttar Pradesh. The festival is a vibrant showcase of art, craft, music, and dance, attracting artists and tourists from all over the world. It is a celebration of the city's artistic and cultural legacy.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity and a tribute to the beauty of the Taj Mahal.",
        date: "February 18-27",
        timeOfYear: "Spring",
        media: "/festivals/taj-mahotsav.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Taj_Mahotsav",
      },
      {
        name: "Ganga Dussehra",
        slug: createSlug("Ganga Dussehra"),
        origin: "Uttarakhand",
        type: "Religious",
        description:
          "Ganga Dussehra is a Hindu festival celebrating the descent of the Goddess Ganga from heaven to earth. It is a sacred event that is believed to purify one's soul and is a time for devotees to offer prayers to the holy river for prosperity and well-being. It is a deeply spiritual festival.",
        ritualContext:
          "Taking a holy dip in the Ganges, performing 'Ganga Aarti' (worship with lamps), and offering flowers and coconuts to the river. The festival is a deeply spiritual experience that honors the sacred river and its life-giving properties.",
        date: "Varies (May-June, on the tenth day of the month of Jyeshtha)",
        timeOfYear: "Summer",
        media: "/festivals/ganga-dussehra.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ganga_Dussehra",
      },
      {
        name: "Nanda Devi Raj Jat",
        slug: createSlug("Nanda Devi Raj Jat"),
        origin: "Uttarakhand",
        type: "Religious",
        description:
          "A pilgrimage that takes place once every 12 years in the Garhwal Himalayas. The pilgrimage is a journey to a sacred mountain peak, and it is a deeply spiritual and challenging experience that is a testament to the power of faith and devotion. It is a unique and a once-in-a-lifetime journey.",
        ritualContext:
          "Participating in a long and arduous pilgrimage, performing religious rituals, and offering prayers to the goddess Nanda Devi. The pilgrimage is a once-in-a-lifetime experience that is a key part of the region's religious heritage.",
        date: "Varies (Every 12 years)",
        timeOfYear: "Summer",
        media: "/festivals/nanda-devi-raj-jat.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Nanda_Devi_Raj_Jat",
      },
      {
        name: "Phool Dei",
        slug: createSlug("Phool Dei"),
        origin: "Uttarakhand",
        type: "Cultural",
        description:
          "A beautiful and unique festival of Uttarakhand, Phool Dei is a harvest festival that celebrates the arrival of spring. The festival is a joyous occasion where young girls gather flowers and offer them to the gods and goddesses, symbolizing new beginnings and the renewal of nature.",
        ritualContext:
          "Young girls gather flowers and place them on the doorsteps of their homes, singing traditional folk songs and praying for a good harvest. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "First day of the month of Chaitra (March-April)",
        timeOfYear: "Spring",
        media: "/festivals/phool-dei.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Phool_Dei",
      },
      {
        name: "Harela",
        slug: createSlug("Harela"),
        origin: "Uttarakhand",
        type: "Cultural / Religious",
        description:
          "Harela is a harvest festival celebrated in Uttarakhand to honor the goddess of rain and fertility. It is a deeply spiritual festival that is a time for people to sow seeds and pray for a good harvest. The festival is a celebration of nature and a symbol of new beginnings.",
        ritualContext:
          "Sowing seven types of seeds in a pot, which are then used to perform a puja. The festival is a time for people to offer prayers to the goddess for a good harvest and to celebrate the arrival of the monsoon season.",
        date: "Varies (July, on the first day of the month of Shravan)",
        timeOfYear: "Monsoon",
        media: "/festivals/harela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Harela",
      },
      {
        name: "Devidhura Bagwal Mela",
        slug: createSlug("Devidhura Bagwal Mela"),
        origin: "Uttarakhand",
        type: "Cultural / Religious",
        description:
          "A unique and ancient festival held at the Barahi Devi Temple. The festival is a ritualistic stone-pelting ceremony between two groups of villagers to appease the goddess. It is a spectacle of faith and devotion, a powerful and ancient tradition.",
        ritualContext:
          "Villagers from four different villages gather at the temple and engage in a ritualistic stone-pelting ceremony, which is a symbolic battle to appease the goddess. The festival is a unique and ancient tradition that is a testament to the power of faith.",
        date: "Varies (August, on the day of Raksha Bandhan)",
        timeOfYear: "Monsoon",
        media: "/festivals/devidhura-bagwal-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Devidhura",
      },
      {
        name: "Sama Chakeva",
        slug: createSlug("Sama Chakeva"),
        origin: "Bihar",
        type: "Cultural",
        description:
          "A unique festival from Bihar that celebrates the love between a brother and sister. The festival is a time for sisters to pray for the well-being of their brothers and to celebrate their special bond. It is a beautiful and unique celebration of sibling love.",
        ritualContext:
          "Sisters make clay dolls of 'Sama' (the sister) and 'Chakeva' (the brother) and sing folk songs. The dolls are then immersed in a sacred pond, and the ritual is a symbol of the bond between a brother and sister.",
        date: "Varies (November, during the winter season)",
        timeOfYear: "Winter",
        media: "/festivals/sama-chakeva.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sama_Chakeva",
      },
      {
        name: "Rajgir Mahotsav",
        slug: createSlug("Rajgir Mahotsav"),
        origin: "Bihar",
        type: "Cultural",
        description:
          "A vibrant and cultural festival held in the ancient city of Rajgir, a historic and religious center. The festival is a celebration of the city's rich history and traditions, with a focus on music, dance, and art. It is a showcase of the region's artistic heritage and a tribute to its glorious past.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity and a tribute to its rich history.",
        date: "October 24-26",
        timeOfYear: "Autumn",
        media: "/festivals/rajgir-mahotsav.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Rajgir_Mahotsav",
      },
      {
        name: "Sarhul",
        slug: createSlug("Sarhul"),
        origin: "Jharkhand",
        type: "Cultural / Religious",
        description:
          "A tribal festival that marks the beginning of the New Year and the arrival of spring. The festival is a celebration of nature's bounty and is a time for people to thank the gods for the harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Offering prayers to the village deity, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (March-April, on the third day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/sarhul.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sarhul",
      },
      {
        name: "Karam Festival",
        slug: createSlug("Karam Festival"),
        origin: "Jharkhand",
        type: "Cultural / Religious",
        description:
          "A traditional festival celebrated by the tribal communities of Jharkhand. The festival is a celebration of nature and a time for people to offer prayers for a good harvest and the well-being of their families. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Planting a branch of the Karam tree in a sacred area, singing and dancing to traditional folk songs, and offering prayers to the goddess. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (August-September, on the eleventh day of the month of Bhadra)",
        timeOfYear: "Monsoon",
        media: "/festivals/karam-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Karam_Festival",
      },
      {
        name: "Tusu Festival",
        slug: createSlug("Tusu Festival"),
        origin: "Jharkhand",
        type: "Cultural / Religious",
        description:
          "A traditional folk festival celebrated by the tribal communities of Jharkhand. The festival is a celebration of nature and is a time for people to offer prayers for a good harvest and the well-being of their families. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Making a small idol of the goddess Tusu, singing and dancing to traditional folk songs, and offering prayers to the goddess. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (December-January)",
        timeOfYear: "Winter",
        media: "/festivals/tusu-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Tusu_Festival",
      },
      {
        name: "Sohrai",
        slug: createSlug("Sohrai"),
        origin: "Jharkhand",
        type: "Cultural / Religious",
        description:
          "A traditional harvest festival celebrated by the tribal communities of Jharkhand. The festival is a celebration of nature and a time for people to offer prayers for a good harvest and the well-being of their families. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Decorating homes with traditional art forms, singing and dancing to traditional folk songs, and offering prayers to the gods for a good harvest. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (November)",
        timeOfYear: "Autumn",
        media: "/festivals/sohrai.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sohrai",
      },
      {
        name: "Durga Puja",
        slug: createSlug("Durga Puja"),
        origin: "West Bengal",
        type: "Religious / Cultural",
        description:
          "A major Hindu festival that celebrates the goddess Durga and her victory over the demon Mahishasura. The festival is a spectacular showcase of art, music, and dance, with elaborate pandals (temporary structures) set up to house the idols of the goddess.",
        ritualContext:
          "Worshipping the goddess Durga, visiting pandals, and participating in cultural programs. The festival is a time for people to gather with friends and family, share traditional food, and celebrate the triumph of good over evil.",
        date: "Varies (September-October, based on the Hindu lunar calendar)",
        timeOfYear: "Autumn",
        media: "/festivals/durga-puja.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Durga_Puja",
      },
      {
        name: "Bihu",
        slug: createSlug("Bihu"),
        origin: "Assam",
        type: "Cultural",
        description:
          "A set of three significant festivals tied to the agrarian calendar, marking different phases of rice cultivation. It is a time of feasting and community celebration for all Assamese people, with a focus on music, dance, and cultural traditions. The festival is a unifying force in Assamese society.",
        ritualContext:
          "Singing and dancing to folk songs, visiting relatives, and sharing traditional food with the community. The festivities are a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (January, April, and October)",
        timeOfYear: "Winter, Spring, Autumn",
        media: "/festivals/bihu.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Bihu",
      },
      {
        name: "Ambubachi Mela",
        slug: createSlug("Ambubachi Mela"),
        origin: "Assam",
        type: "Religious",
        description:
          "A major Hindu festival held at the Kamakhya Temple in Guwahati. The festival is a celebration of the goddess's menstruation and is a time for people to offer prayers to the goddess for her blessings. It is a unique and ancient tradition that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Visiting the Kamakhya Temple, participating in religious rituals, and offering prayers to the goddess. The festival is a deeply spiritual experience that honors the goddess and her power.",
        date: "Varies (June, based on the Hindu lunar calendar)",
        timeOfYear: "Monsoon",
        media: "/festivals/ambubachi-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ambubachi_Mela",
      },
      {
        name: "Hornbill Festival",
        slug: createSlug("Hornbill Festival"),
        origin: "Nagaland",
        type: "Cultural",
        description:
          "A vibrant cultural festival that is a showcase of the rich and diverse traditions of the Naga tribes. The festival is a celebration of the region's unique culture, with a focus on music, dance, and traditional art. It is a must-try for any visitor to the state.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "December 1-10",
        timeOfYear: "Winter",
        media: "/festivals/hornbill-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Hornbill_Festival",
      },
      {
        name: "Chapchar Kut",
        slug: createSlug("Chapchar Kut"),
        origin: "Mizoram",
        type: "Cultural",
        description:
          "A traditional festival that marks the beginning of the New Year and the arrival of spring. The festival is a celebration of nature's bounty and is a time for people to thank the gods for the harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (March, on the first day of the month of Chapchar)",
        timeOfYear: "Spring",
        media: "/festivals/chapchar-kut.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Chapchar_Kut",
      },
      {
        name: "Bonalu",
        slug: createSlug("Bonalu"),
        origin: "Telangana",
        type: "Religious",
        description:
          "A Hindu festival dedicated to the goddess Mahakali, Bonalu is a celebration of the goddess and her victory over a plague. The festival is a time for people to offer prayers to the goddess for health, prosperity, and well-being. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Women carry a pot of cooked rice, milk, and jaggery on their heads, which is then offered to the goddess. The festival is a deeply spiritual experience that honors the goddess and her power.",
        date: "Varies (July-August, on the first day of the month of Ashadha)",
        timeOfYear: "Monsoon",
        media: "/festivals/bonalu.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Bonalu",
      },
      {
        name: "Bathukamma",
        slug: createSlug("Bathukamma"),
        origin: "Telangana",
        type: "Cultural / Religious",
        description:
          "A traditional floral festival that is a symbol of the region's rich cultural heritage. The festival is a celebration of nature's bounty and is a time for people to thank the gods for the harvest. It is a deeply spiritual festival that is a testament to the region's love for flowers.",
        ritualContext:
          "Women create a beautiful conical arrangement of flowers, which is then offered to the goddess. The festival is a deeply spiritual experience that honors the goddess and her power.",
        date: "Varies (September-October, on the first day of the month of Ashwina)",
        timeOfYear: "Autumn",
        media: "/festivals/bathukamma.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Bathukamma",
      },
      {
        name: "Rath Yatra",
        slug: createSlug("Rath Yatra"),
        origin: "Odisha",
        type: "Religious",
        description:
          "A major Hindu festival that celebrates the journey of Lord Jagannath, his brother Balabhadra, and his sister Subhadra to their aunt's temple. The festival is a spectacle of devotion, with millions of devotees pulling the chariots of the deities.",
        ritualContext:
          "Pulling the chariots of the deities, offering prayers, and participating in the procession. The festival is a deeply spiritual experience that honors the deities and their journey.",
        date: "Varies (June-July, on the second day of the month of Ashadha)",
        timeOfYear: "Monsoon",
        media: "/festivals/rath-yatra.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ratha_Yatra",
      },
      {
        name: "Konark Dance Festival",
        slug: createSlug("Konark Dance Festival"),
        origin: "Odisha",
        type: "Cultural",
        description:
          "A five-day cultural festival held at the Konark Sun Temple, a UNESCO World Heritage Site. The festival is a celebration of the rich artistic heritage of Odisha, with a focus on classical music and dance. It is a beautiful and serene festival that attracts artists from all over the world.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "December 1-5",
        timeOfYear: "Winter",
        media: "/festivals/konark-dance-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Konark_Dance_Festival",
      },
      {
        name: "Bali Jatra",
        slug: createSlug("Bali Jatra"),
        origin: "Odisha",
        type: "Cultural",
        description:
          "A major cultural festival that celebrates the ancient maritime trade relations between Odisha and Bali. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Making small paper boats and floating them on the river, participating in cultural programs, and enjoying local food and handicrafts. The festival is a celebration of the region's rich history and a symbol of its enduring cultural bonds.",
        date: "Varies (November, on the full moon day of the month of Kartik)",
        timeOfYear: "Autumn",
        media: "/festivals/bali-jatra.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Bali_Jatra",
      },
      {
        name: "Poush Mela",
        slug: createSlug("Poush Mela"),
        origin: "West Bengal",
        type: "Cultural",
        description:
          "A vibrant rural fair held in Shantiniketan, celebrating the harvest season. The fair is a showcase of the region's artistic and cultural heritage, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (December-January, on the seventh day of the month of Poush)",
        timeOfYear: "Winter",
        media: "/festivals/poush-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Poush_Mela",
      },
      {
        name: "Jagadhatri Puja",
        slug: createSlug("Jagadhatri Puja"),
        origin: "West Bengal",
        type: "Religious",
        description:
          "A major Hindu festival that celebrates the goddess Jagadhatri. The festival is a time for people to offer prayers to the goddess for her blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Worshipping the goddess Jagadhatri, visiting pandals, and participating in cultural programs. The festival is a time for people to gather with friends and family, share traditional food, and celebrate the triumph of good over evil.",
        date: "Varies (October-November, four days after Durga Puja)",
        timeOfYear: "Autumn",
        media: "/festivals/jagadhatri-puja.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Jagadhatri_Puja",
      },
      {
        name: "Kharchi Puja",
        slug: createSlug("Kharchi Puja"),
        origin: "Tripura",
        type: "Religious",
        description:
          "A Hindu festival that celebrates the cleansing of the sins of the earth. The festival is a time for people to offer prayers to the gods for their blessings. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Offering prayers to the 14 deities, taking a holy dip in a sacred pond, and participating in cultural programs. The festival is a deeply spiritual experience that honors the deities and their power.",
        date: "Varies (July, on the eighth day of the month of Ashadha)",
        timeOfYear: "Monsoon",
        media: "/festivals/kharchi-puja.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Kharchi_Puja",
      },
      {
        name: "Garia Puja",
        slug: createSlug("Garia Puja"),
        origin: "Tripura",
        type: "Religious",
        description:
          "A traditional festival that is a celebration of the god Garia, a deity of prosperity and well-being. The festival is a time for people to offer prayers to the god for a good harvest and the well-being of their families. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Offering prayers to the god Garia, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (April, on the seventh day of the month of Baisakh)",
        timeOfYear: "Spring",
        media: "/festivals/garia-puja.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Garia_Puja",
      },
      {
        name: "Aoleang",
        slug: createSlug("Aoleang"),
        origin: "Nagaland",
        type: "Cultural",
        description:
          "A traditional festival celebrated by the Konyak Naga tribe. The festival is a celebration of the beginning of the New Year and a time for people to offer prayers for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (April, on the first week of the month of April)",
        timeOfYear: "Spring",
        media: "/festivals/aoleang.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Aoleang_festival",
      },
      {
        name: "Sekrenyi",
        slug: createSlug("Sekrenyi"),
        origin: "Nagaland",
        type: "Cultural",
        description:
          "A traditional festival celebrated by the Angami Naga tribe. The festival is a celebration of the end of the harvest season and a time for people to offer prayers for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (February, on the third day of the month of Sekrenyi)",
        timeOfYear: "Winter",
        media: "/festivals/sekrenyi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sekrenyi",
      },
      {
        name: "Lai Haraoba",
        slug: createSlug("Lai Haraoba"),
        origin: "Manipur",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the creation of the universe. The festival is a unique blend of music, dance, and rituals that tell the story of the origin of the Meitei people. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Performing traditional dances, singing folk songs, and offering prayers to the gods. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (May, on the first week of the month of May)",
        timeOfYear: "Spring",
        media: "/festivals/lai-haraoba.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Lai_Haraoba",
      },
      {
        name: "Yaoshang",
        slug: createSlug("Yaoshang"),
        origin: "Manipur",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the Manipuri version of Holi. The festival is a time for people to play with colored water, sing and dance to traditional folk songs, and share traditional food with the community. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Playing with colored water, singing and dancing to traditional folk songs, and sharing traditional sweets and food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (March, on the full moon day of the month of Phalguna)",
        timeOfYear: "Spring",
        media: "/festivals/yaoshang.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Yaoshang",
      },
      {
        name: "Cheiraoba",
        slug: createSlug("Cheiraoba"),
        origin: "Manipur",
        type: "Cultural",
        description:
          "A traditional festival that marks the beginning of the New Year. The festival is a time for people to clean their homes, wear new clothes, and visit relatives to offer prayers for a prosperous year ahead. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Cleaning homes, wearing new clothes, and visiting relatives to offer prayers for a prosperous year ahead. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (April, on the first day of the month of Cheiraoba)",
        timeOfYear: "Spring",
        media: "/festivals/cheiraoba.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Cheiraoba",
      },
      {
        name: "Wangala",
        slug: createSlug("Wangala"),
        origin: "Meghalaya",
        type: "Cultural",
        description:
          "A traditional harvest festival that is a celebration of the sun god. The festival is a time for people to thank the gods for the harvest and a time for the community to gather, sing, and dance. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (November, on the first week of the month of November)",
        timeOfYear: "Autumn",
        media: "/festivals/wangala.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Wangala_festival",
      },
      {
        name: "Nongkrem Dance Festival",
        slug: createSlug("Nongkrem Dance Festival"),
        origin: "Meghalaya",
        type: "Cultural",
        description:
          "A traditional dance festival that is a celebration of the Khasi tribe's culture. The festival is a time for people to thank the gods for a good harvest and to offer prayers for a prosperous year ahead. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Performing traditional dances, singing folk songs, and offering prayers to the gods for a good harvest. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (November, on the fourth day of the month of November)",
        timeOfYear: "Autumn",
        media: "/festivals/nongkrem-dance-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Nongkrem_Dance_Festival",
      },
      {
        name: "Behdienkhlam",
        slug: createSlug("Behdienkhlam"),
        origin: "Meghalaya",
        type: "Cultural / Religious",
        description:
          "A traditional festival celebrated by the Pnar community. The festival is a celebration of the community's culture and is a time for people to thank the gods for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Performing traditional dances, singing folk songs, and offering prayers to the gods for a good harvest. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (July, on the first day of the month of July)",
        timeOfYear: "Monsoon",
        media: "/festivals/behdienkhlam.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Behdienkhlam",
      },
      {
        name: "Biju Festival",
        slug: createSlug("Biju Festival"),
        origin: "Tripura",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the Chakma community's culture. The festival is a time for people to thank the gods for a good harvest and to offer prayers for a prosperous year ahead. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (April, on the first day of the month of Baisakh)",
        timeOfYear: "Spring",
        media: "/festivals/biju-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Biju_Festival",
      },
      {
        name: "Solung",
        slug: createSlug("Solung"),
        origin: "Arunachal Pradesh",
        type: "Cultural",
        description:
          "A traditional festival celebrated by the Adi tribe. The festival is a celebration of the harvest season and is a time for people to thank the gods for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (September, on the first day of the month of Solung)",
        timeOfYear: "Autumn",
        media: "/festivals/solung.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Solung_festival",
      },
      {
        name: "Dree Festival",
        slug: createSlug("Dree Festival"),
        origin: "Arunachal Pradesh",
        type: "Cultural",
        description:
          "A traditional festival celebrated by the Apatani tribe. The festival is a celebration of the harvest season and is a time for people to thank the gods for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (July, on the first day of the month of Dree)",
        timeOfYear: "Monsoon",
        media: "/festivals/dree-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Dree_Festival",
      },
      {
        name: "Reh",
        slug: createSlug("Reh"),
        origin: "Arunachal Pradesh",
        type: "Cultural",
        description:
          "A traditional festival celebrated by the Idu Mishmi tribe. The festival is a celebration of the harvest season and is a time for people to thank the gods for a good harvest. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (February, on the first week of the month of Reh)",
        timeOfYear: "Winter",
        media: "/festivals/reh.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Reh_festival",
      },
      {
        name: "Majuli Festival",
        slug: createSlug("Majuli Festival"),
        origin: "Assam",
        type: "Cultural",
        description:
          "A traditional festival held in the Majuli island, the largest river island in the world. The festival is a celebration of the region's rich cultural heritage, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (November, on the first week of the month of November)",
        timeOfYear: "Autumn",
        media: "/festivals/majuli-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Majuli_Festival",
      },
      {
        name: "Onam",
        slug: createSlug("Onam"),
        origin: "Kerala",
        type: "Cultural",
        description:
          "A traditional harvest festival that celebrates the return of the mythical king Mahabali. The festival is a time for people to thank the gods for the harvest and a time for the community to gather, sing, and dance. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Decorating homes with beautiful floral arrangements, making a grand feast known as 'Onam Sadhya,' and participating in a variety of cultural events, including boat races and traditional dances.",
        date: "Varies (August-September, on the tenth day of the month of Chingam)",
        timeOfYear: "Monsoon",
        media: "/festivals/onam.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Onam",
      },
      {
        name: "Thrissur Pooram",
        slug: createSlug("Thrissur Pooram"),
        origin: "Kerala",
        type: "Religious / Cultural",
        description:
          "A traditional temple festival that is a celebration of the goddess Thrissur. The festival is a time for people to offer prayers to the goddess for her blessings and to celebrate their heritage. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Visiting the Thrissur Temple, participating in a variety of cultural events, and enjoying local food and handicrafts. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (April-May, on the first day of the month of Medam)",
        timeOfYear: "Spring",
        media: "/festivals/thrissur-pooram.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Thrissur_Pooram",
      },
      {
        name: "Attukal Pongala",
        slug: createSlug("Attukal Pongala"),
        origin: "Kerala",
        type: "Religious",
        description:
          "A Hindu festival dedicated to the goddess Attukal. The festival is a time for people to offer prayers to the goddess for her blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Women gather in the Attukal Temple and cook a sweet porridge in a pot, which is then offered to the goddess. The ritual is a symbol of the goddess's blessings and a testament to the power of faith.",
        date: "Varies (February-March, on the tenth day of the month of Makaram)",
        timeOfYear: "Winter",
        media: "/festivals/attukal-pongala.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Attukal_Pongala",
      },
      {
        name: "Vishu",
        slug: createSlug("Vishu"),
        origin: "Kerala",
        type: "Religious / Cultural",
        description:
          "A traditional festival that marks the beginning of the New Year. The festival is a time for people to clean their homes, wear new clothes, and visit relatives to offer prayers for a prosperous year ahead. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Cleaning homes, wearing new clothes, and visiting relatives to offer prayers for a prosperous year ahead. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (April, on the first day of the month of Medam)",
        timeOfYear: "Spring",
        media: "/festivals/vishu.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Vishu",
      },
      {
        name: "Pongal",
        slug: createSlug("Pongal"),
        origin: "Tamil Nadu",
        type: "Cultural",
        description:
          "A traditional harvest festival that celebrates the sun god and the harvest season. The festival is a time for people to thank the gods for a good harvest and to celebrate their heritage. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Making a sweet porridge known as 'Pongal,' which is a blend of rice, milk, and jaggery, and offering it to the sun god. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (January, on the first day of the month of Thai)",
        timeOfYear: "Winter",
        media: "/festivals/pongal.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Pongal",
      },
      {
        name: "Jallikattu",
        slug: createSlug("Jallikattu"),
        origin: "Tamil Nadu",
        type: "Cultural",
        description:
          "A traditional bull-taming sport that is a symbol of the region's love for animals. The sport is a blend of skill and bravery, with participants attempting to tame a bull to win a prize. It is a unique and ancient tradition that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Participants attempt to tame a bull, and the one who tames the bull wins a prize. The event is a celebration of nature and a symbol of human bravery.",
        date: "Varies (January, on the day of Pongal)",
        timeOfYear: "Winter",
        media: "/festivals/jallikattu.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Jallikattu",
      },
      {
        name: "Natyanjali Dance Festival",
        slug: createSlug("Natyanjali Dance Festival"),
        origin: "Tamil Nadu",
        type: "Cultural",
        description:
          "A traditional dance festival held in the Chidambaram Nataraja Temple, a sacred place for dancers. The festival is a celebration of dance and music, with a focus on classical dance forms. It is a beautiful and serene festival that attracts dancers from all over the world.",
        ritualContext:
          "Dancers perform a variety of classical dance forms, including Bharatanatyam, Kuchipudi, and Odissi. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (February-March, on the day of Maha Shivaratri)",
        timeOfYear: "Winter",
        media: "/festivals/natyanjali-dance-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Natyanjali_Dance_Festival",
      },
      {
        name: "Ugadi",
        slug: createSlug("Ugadi"),
        origin: "Karnataka",
        type: "Religious / Cultural",
        description:
          "A traditional festival that marks the beginning of the New Year. The festival is a time for people to clean their homes, wear new clothes, and visit relatives to offer prayers for a prosperous year ahead. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Cleaning homes, wearing new clothes, and visiting relatives to offer prayers for a prosperous year ahead. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (March-April, on the first day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/ugadi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ugadi",
      },
      {
        name: "Mysore Dasara",
        slug: createSlug("Mysore Dasara"),
        origin: "Karnataka",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the victory of good over evil. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Visiting the Mysore Palace, participating in a variety of cultural events, and enjoying local food and handicrafts. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (September-October, on the tenth day of the month of Ashwina)",
        timeOfYear: "Autumn",
        media: "/festivals/mysoreD.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Mysore_Dasara",
      },
      {
        name: "Hampi Festival",
        slug: createSlug("Hampi Festival"),
        origin: "Karnataka",
        type: "Cultural",
        description:
          "A traditional festival held in the ancient city of Hampi, a UNESCO World Heritage Site. The festival is a celebration of the city's rich history and traditions, with a focus on music, dance, and art. It is a showcase of the region's artistic heritage and a tribute to its glorious past.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (January, on the first week of the month of January)",
        timeOfYear: "Winter",
        media: "/festivals/hampi-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Hampi_Festival",
      },
      {
        name: "Karaga",
        slug: createSlug("Karaga"),
        origin: "Karnataka",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the goddess Draupadi. The festival is a time for people to offer prayers to the goddess for her blessings and to celebrate their heritage. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Men carry a decorated pot on their heads, which is a symbol of the goddess's power. The festival is a deeply spiritual experience that honors the goddess and her power.",
        date: "Varies (March-April, on the first day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/karaga.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Karaga",
      },
      {
        name: "Mahamastakabhisheka",
        slug: createSlug("Mahamastakabhisheka"),
        origin: "Karnataka",
        type: "Religious",
        description:
          "A major Jain festival that is a celebration of the anointing of the statue of Lord Gomateshwara. The festival is a deeply spiritual event that is a testament to the power of faith and devotion. It is a once-in-a-lifetime experience that is a key part of the region's religious heritage.",
        ritualContext:
          "Anointing the statue of Lord Gomateshwara with a variety of sacred substances, including milk, honey, and saffron. The ritual is a symbol of the goddess's blessings and a testament to the power of faith.",
        date: "Varies (Every 12 years, on the first day of the month of Vaisakh)",
        timeOfYear: "Spring",
        media: "/festivals/mahamastakabhisheka.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Mahamastakabhisheka",
      },
      {
        name: "Medaram Jatara",
        slug: createSlug("Medaram Jatara"),
        origin: "Telangana",
        type: "Religious",
        description:
          "A major tribal festival that is a celebration of the goddess Sammakka and Saralamma. The festival is a time for people to offer prayers to the goddess for her blessings. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Offering prayers to the goddess, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (February, every two years)",
        timeOfYear: "Winter",
        media: "/festivals/medaram-jatara.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Medaram_Jatara",
      },
      {
        name: "Gudi Padwa",
        slug: createSlug("Gudi Padwa"),
        origin: "Maharashtra",
        type: "Religious / Cultural",
        description:
          "A traditional festival that marks the beginning of the New Year. The festival is a time for people to clean their homes, wear new clothes, and visit relatives to offer prayers for a prosperous year ahead. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Cleaning homes, wearing new clothes, and visiting relatives to offer prayers for a prosperous year ahead. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (March-April, on the first day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/gudi-padwa.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Gudi_Padwa",
      },
      {
        name: "Narali Pournima",
        slug: createSlug("Narali Pournima"),
        origin: "Maharashtra",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the sea and is a time for people to offer prayers to the sea for her blessings. The festival is a deeply spiritual event that is a testament to the region's rich cultural heritage. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Offering coconuts to the sea, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (August, on the full moon day of the month of Shravan)",
        timeOfYear: "Monsoon",
        media: "/festivals/narali-purnima.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Narali_Pournima",
      },
      {
        name: "Wari (Pandharpur Yatra)",
        slug: createSlug("Wari-Pandharpur-Yatra"),
        origin: "Maharashtra",
        type: "Religious",
        description:
          "A traditional pilgrimage that is a celebration of the god Vitthal. The pilgrimage is a journey to the sacred city of Pandharpur, where devotees walk for days to reach the temple. It is a deeply spiritual experience that is a testament to the power of faith and devotion.",
        ritualContext:
          "Walking for days to reach the temple, singing devotional songs, and offering prayers to the god Vitthal. The pilgrimage is a once-in-a-lifetime experience that is a key part of the region's religious heritage.",
        date: "Varies (June-July, on the first day of the month of Ashadha)",
        timeOfYear: "Monsoon",
        media: "/festivals/wari.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Pandharpur_Wari",
      },
      {
        name: "Elephanta Festival",
        slug: createSlug("Elephanta Festival"),
        origin: "Maharashtra",
        type: "Cultural",
        description:
          "A traditional cultural festival held in the ancient Elephanta Caves, a UNESCO World Heritage Site. The festival is a celebration of the city's rich history and traditions, with a focus on music, dance, and art. It is a showcase of the region's artistic heritage and a tribute to its glorious past.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (March, on the first day of the month of March)",
        timeOfYear: "Spring",
        media: "/festivals/elephanta-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Elephanta_Caves",
      },
      {
        name: "Thiruvaiyaru Thyagaraja Aradhana",
        slug: createSlug("Thiruvaiyaru-Thyagaraja-Aradhana"),
        origin: "Tamil Nadu",
        type: "Religious / Cultural",
        description:
          "A traditional music festival held in the city of Thiruvaiyaru, celebrating the life and works of the saint-composer Thyagaraja. The festival is a tribute to the power of music and a celebration of the region's rich artistic heritage.",
        ritualContext:
          "Singing devotional songs, participating in a variety of cultural events, and enjoying local food and handicrafts. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (January-February, on the day of Thyagaraja's death)",
        timeOfYear: "Winter",
        media: "/festivals/thiruvaiyaru-thyagaraja-aradhana.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Thiruvaiyaru_Thyagaraja_Aradhana",
      },
      {
        name: "Theyyam",
        slug: createSlug("Theyyam"),
        origin: "Kerala",
        type: "Ritualistic / Cultural",
        description:
          "A traditional ritualistic art form of North Kerala, where performers transform into deities and heroes. The festival is a time for people to offer prayers to the deities for their blessings. It is a deeply spiritual festival that is a testament to the region's ancient culture.",
        ritualContext:
          "Performers wear elaborate and heavy costumes, intricate makeup, and a massive headdress. The performance is a blend of dance, mime, and acting, with the performer using expressive gestures and body movements to narrate stories.",
        date: "Varies (December-April)",
        timeOfYear: "Winter/Spring",
        media: "/festivals/theyyam.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Theyyam",
      },
      {
        name: "Koodiyattam",
        slug: createSlug("Koodiyattam"),
        origin: "Kerala",
        type: "Classical Dance-Drama",
        description:
          "A classical dance form that is the oldest surviving ancient theatre form in India. It is a unique blend of Sanskrit theatre and folk art. The performances are a deep religious and ritualistic practice, performed in temples as a form of worship.",
        ritualContext:
          "Performers enact scenes from ancient epics and stories. The performance is accompanied by traditional percussion instruments, most notably the 'mizhavu' drum.",
        date: "Varies (Performs throughout the year)",
        timeOfYear: "All Seasons",
        media: "/festivals/kodiyattam.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Koodiyattam",
      },
      {
        name: "Sao Joao",
        slug: createSlug("Sao Joao"),
        origin: "Goa",
        type: "Religious / Cultural",
        description:
          "A traditional Christian festival that is a celebration of the feast of St. John the Baptist. The festival is a time for people to jump into wells, rivers, and ponds, as a symbol of the joy and celebration. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "People jump into wells, rivers, and ponds, singing and dancing to traditional folk songs. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "June 24",
        timeOfYear: "Monsoon",
        media: "/festivals/sao.jpeg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sao_Joao_Festival",
      },
      {
        name: "Ganesh Chaturthi",
        slug: createSlug("Ganesh Chaturthi"),
        origin: "Maharashtra",
        type: "Religious",
        description:
          "A major Hindu festival that celebrates the birth of Lord Ganesha. The festival is a time for people to offer prayers to the beloved deity for his blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Bringing an idol of Lord Ganesha to homes and pandals, offering prayers, and performing 'Ganesh Visarjan' (immersion of the idol in a river or sea).",
        date: "Varies (August-September, on the fourth day of the month of Bhadrapada)",
        timeOfYear: "Monsoon",
        media: "/festivals/ganesh-chaturthi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ganesh_Chaturthi",
      },
      {
        name: "Navratri",
        slug: createSlug("Navratri"),
        origin: "Gujarat",
        type: "Religious / Cultural",
        description:
          "A nine-day festival dedicated to the goddess Durga and her nine forms. The festival is a celebration of femininity and is a time for people to offer prayers to the goddess for her blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Performing 'Garba' and 'Dandiya' dances, fasting, and offering prayers to the goddess. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (September-October, on the first day of the month of Ashwina)",
        timeOfYear: "Autumn",
        media: "/festivals/navratri.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Navaratri",
      },
      {
        name: "Rann Utsav",
        slug: createSlug("Rann Utsav"),
        origin: "Gujarat",
        type: "Cultural",
        description:
          "A vibrant cultural festival held in the Great Rann of Kutch, a vast salt marsh. The festival is a celebration of the region's rich artistic heritage, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (November-February)",
        timeOfYear: "Winter",
        media: "/festivals/rann-utsav.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Rann_Utsav",
      },
      {
        name: "Uttarayan",
        slug: createSlug("Uttarayan"),
        origin: "Gujarat",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the sun's return to the northern hemisphere. The festival is a time for people to fly kites and to celebrate the arrival of the new season. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Flying kites, participating in kite-flying competitions, and enjoying local food and handicrafts. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "January 14",
        timeOfYear: "Winter",
        media: "/festivals/uttarayan.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Uttarayan",
      },
      {
        name: "Shigmo",
        slug: createSlug("Shigmo"),
        origin: "Goa",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the arrival of spring. The festival is a time for people to sing and dance to traditional folk songs and to share traditional food with the community. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Singing and dancing to traditional folk songs, visiting relatives, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (March, on the first day of the month of March)",
        timeOfYear: "Spring",
        media: "/festivals/shigmo.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Shigmo",
      },
      {
        name: "Goa Carnival",
        slug: createSlug("Goa Carnival"),
        origin: "Goa",
        type: "Cultural",
        description:
          "A vibrant and colorful festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (February, on the first day of the month of February)",
        timeOfYear: "Winter",
        media: "/festivals/goa-carnival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Goa_Carnival",
      },
      {
        name: "Sunburn Festival",
        slug: createSlug("Sunburn Festival"),
        origin: "Goa",
        type: "Music Festival",
        description:
          "A major music festival that is a celebration of electronic dance music. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (December, on the first week of the month of December)",
        timeOfYear: "Winter",
        media: "/festivals/sunburn-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Sunburn_Festival",
      },
      {
        name: "Pushkar Camel Fair",
        slug: createSlug("Pushkar Camel Fair"),
        origin: "Rajasthan",
        type: "Cultural",
        description:
          "A traditional camel fair that is a celebration of the region's rich cultural heritage. The fair is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (November, on the first day of the month of Kartik)",
        timeOfYear: "Autumn",
        media: "/festivals/pushkar-camel-fair.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Pushkar_Fair",
      },
      {
        name: "Desert Festival",
        slug: createSlug("Desert Festival"),
        origin: "Rajasthan",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (February, on the first day of the month of February)",
        timeOfYear: "Winter",
        media: "/festivals/desert-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Desert_Festival,_Jaisalmer",
      },
      {
        name: "Gangaur",
        slug: createSlug("Gangaur"),
        origin: "Rajasthan",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the goddess Gauri. The festival is a time for women to offer prayers to the goddess for her blessings and to celebrate their marital bliss. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Women worship the goddess Gauri, singing folk songs, and observing a day-long fast for the well-being of their husbands and family. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (March-April, on the first day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/gangaur.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Gangaur",
      },
      {
        name: "Jaipur Literature Festival",
        slug: createSlug("Jaipur Literature Festival"),
        origin: "Rajasthan",
        type: "Cultural",
        description:
          "A major literary festival that is a celebration of the written word and a showcase of the region's rich artistic heritage. The festival is a vibrant showcase of art, craft, music, and dance, attracting artists and tourists from all over the world.",
        ritualContext:
          "Attending live performances of classical music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (January, on the last week of the month of January)",
        timeOfYear: "Winter",
        media: "/festivals/jaipur-literature-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Jaipur_Literature_Festival",
      },
      {
        name: "Tarnetar Mela",
        slug: createSlug("Tarnetar Mela"),
        origin: "Gujarat",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (August-September, on the first day of the month of Bhadrapada)",
        timeOfYear: "Monsoon",
        media: "/festivals/tarnetar-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Tarnetar_Fair",
      },
      {
        name: "Ghadlya Festival",
        slug: createSlug("Ghadlya-Festival"),
        origin: "Madhya Pradesh",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (October-November, on the first day of the month of Kartik)",
        timeOfYear: "Autumn",
        media: "/festivals/ghadlya-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Ghadlya_festival",
      },
      {
        name: "Madaai Festival",
        slug: createSlug("Madaai-Festival"),
        origin: "Chhattisgarh",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (December-March)",
        timeOfYear: "Winter",
        media: "/festivals/madaai-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Madaai_festival",
      },
      {
        name: "Pola",
        slug: createSlug("Pola"),
        origin: "Chhattisgarh",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (August-September, on the full moon day of the month of Shravana)",
        timeOfYear: "Monsoon",
        media: "/festivals/pola.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Pola_(festival)",
      },
      {
        name: "Surajkund Mela",
        slug: createSlug("Surajkund-Mela"),
        origin: "Haryana",
        type: "Cultural",
        description:
          "A traditional craft fair that is a celebration of the region's rich cultural heritage. The fair is a showcase of the region's artistic and cultural heritage, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "February 1-15",
        timeOfYear: "Winter",
        media: "/festivals/surajkund-mela.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Surajkund_Mela",
      },
      {
        name: "Konkan Festival",
        slug: createSlug("Konkan-Festival"),
        origin: "Maharashtra",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (December, on the first week of the month of December)",
        timeOfYear: "Winter",
        media: "/festivals/konkan-festival.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Konkan_festival",
      },
      {
        name: "Poshina Fair",
        slug: createSlug("Poshina-Fair"),
        origin: "Gujarat",
        type: "Cultural",
        description:
          "A traditional festival that is a celebration of the region's rich cultural heritage. The festival is a spectacle of a vibrant carnival, with a focus on music, dance, and traditional art. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Attending live performances of traditional music and dance, browsing through stalls of handicrafts and traditional art, and enjoying the local cuisine. The festival is a celebration of the region's cultural diversity.",
        date: "Varies (November, on the first week of the month of November)",
        timeOfYear: "Autumn",
        media: "/festivals/poshima-fair.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Poshina_Fair",
      },
      {
        name: "Kartik Purnima",
        slug: createSlug("Kartik-Purnima"),
        origin: "Rajasthan",
        type: "Religious",
        description:
          "A traditional festival that is a celebration of the full moon. The festival is a time for people to offer prayers to the gods for their blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Taking a holy dip in a sacred river, performing religious rituals, and offering prayers to the gods. The festival is a deeply spiritual experience that honors the deities and their power.",
        date: "Varies (November, on the full moon day of the month of Kartik)",
        timeOfYear: "Autumn",
        media: "/festivals/kartik-purnima.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Kartik_Purnima",
      },
      {
        name: "Gugga Naumi",
        slug: createSlug("Gugga-Naumi"),
        origin: "Haryana",
        type: "Religious",
        description:
          "A traditional festival that is a celebration of the snake god. The festival is a time for people to offer prayers to the god for his blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Offering prayers to the snake god, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (August-September, on the ninth day of the month of Shravan)",
        timeOfYear: "Monsoon",
        media: "/festivals/gugga-naumi.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Gugga_Naumi",
      },
      {
        name: "Basant Panchami",
        slug: createSlug("Basant-Panchami"),
        origin: "Punjab",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the arrival of spring. The festival is a time for people to offer prayers to the goddess Saraswati for her blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Wearing yellow clothes, flying kites, and offering prayers to the goddess Saraswati. The festival is a celebration of nature's bounty and a symbol of new beginnings.",
        date: "Varies (January-February, on the fifth day of the month of Magha)",
        timeOfYear: "Winter",
        media: "/festivals/basant-panchami.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Vasant_Panchami",
      },
      {
        name: "Cheti Chand",
        slug: createSlug("Cheti-Chand"),
        origin: "Maharashtra",
        type: "Religious / Cultural",
        description:
          "A traditional festival that is a celebration of the Sindhi New Year. The festival is a time for people to clean their homes, wear new clothes, and visit relatives to offer prayers for a prosperous year ahead. It is a joyous occasion that brings people together to celebrate their heritage.",
        ritualContext:
          "Cleaning homes, wearing new clothes, and visiting relatives to offer prayers for a prosperous year ahead. The festival is a time for spiritual reflection and celebration of new beginnings.",
        date: "Varies (March-April, on the first day of the month of Chaitra)",
        timeOfYear: "Spring",
        media: "/festivals/cheti.jpeg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Cheti_Chand",
      },
      {
        name: "Nag Panchami",
        slug: createSlug("Nag-Panchami"),
        origin: "Maharashtra",
        type: "Religious",
        description:
          "A traditional festival that is a celebration of the snake god. The festival is a time for people to offer prayers to the god for his blessings. It is a deeply spiritual festival that is a testament to the region's rich cultural heritage.",
        ritualContext:
          "Offering prayers to the snake god, singing and dancing to traditional folk songs, and sharing traditional food with the community. The festival is a celebration of nature and a symbol of new beginnings.",
        date: "Varies (July-August, on the fifth day of the month of Shravana)",
        timeOfYear: "Monsoon",
        media: "/festivals/nag.jpg",
        learnMoreLink: "https://en.wikipedia.org/wiki/Nag_Panchami",
      }
    ];

    // Insert the new sample data
    const inserted = await Festival.insertMany(sampleData);

    res.json({
      message: "✅ Festivals seeded successfully",
      count: inserted.length,
      data: inserted,
    });
  } catch (err) {
    console.error("❌ Seed error:", err);
    res.status(500).json({ message: err.message, stack: err.stack });
  }
});

// 🟢 Get all festivals
router.get("/", async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Get festival by slug
router.get("/:slug", async (req, res) => {
  try {
    const festival = await Festival.findOne({ slug: req.params.slug });
    if (!festival) {
      return res.status(404).json({ message: "Festival not found" });
    }
    res.json(festival);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;