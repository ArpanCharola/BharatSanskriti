import express from "express";
import Heritage from "../models/Heritage.js";

const router = express.Router();
const createSlug = (s) => s.toLowerCase().replace(/\s+/g, "-");

// POST /api/heritages/seed
router.post("/seed", async (_req, res) => {
  try {
    await Heritage.deleteMany({});
    const data = [
      
  {
    name: "Aberdeen Heritage Walk",
    slug: createSlug("Aberdeen Heritage Walk"),
    city: "Aberdeen",
    stateOrUT: "Andaman and Nicobar Islands",
    builtIn: "N/A",
    description: "The Aberdeen Heritage Walk is a journey through the historical heart of Port Blair, exploring its colonial past. The walk takes you past significant landmarks like the Clock Tower, the Netaji Subhas Chandra Bose Island (formerly Ross Island), and other remnants of British rule. It provides a unique perspective on the city's development and its role in India's freedom struggle. The walk is not just about buildings, but also about the stories and lives of the people who shaped this unique island city.",
    media: "/heritages/aberdeen-heritage-walk.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Aberdeen,_Andaman_and_Nicobar_Islands"
  },
  {
    name: "Balidan Vedi",
    slug: createSlug("Balidan Vedi"),
    city: "Port Blair",
    stateOrUT: "Andaman and Nicobar Islands",
    builtIn: "N/A",
    description: "Balidan Vedi, meaning 'Altar of Sacrifice,' is a memorial dedicated to the martyrs of the Indian freedom struggle. It is a place of great historical significance, serving as a reminder of the sacrifices made by revolutionaries who were imprisoned in the Cellular Jail. The memorial honors the brave souls who fought against British colonial rule and laid down their lives for the country's independence. It stands as a powerful symbol of patriotism and a tribute to their indomitable spirit.",
    media: "/heritages/balidan-vedi.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Balidan_Vedi"
  },
  {
    name: "Cellular Jail",
  slug: createSlug("Cellular Jail"),
    city: "Port Blair",
    stateOrUT: "Andaman and Nicobar Islands",
    builtIn: "1906",
    description: "Also known as 'Kala Pani' (Black Water), the Cellular Jail is a colonial prison located in Port Blair. It was used by the British to exile political prisoners, notably freedom fighters. The jail's design, with seven wings and a central tower, was intended for solitary confinement to break the spirit of the inmates. Today, it stands as a national monument and a solemn reminder of the immense suffering and sacrifices endured by India's freedom fighters. A light and sound show in the evenings narrates the poignant history of the prison.",
    media: "/heritages/cellular-jail.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Cellular_Jail"
  },
  {
    name: "Chatham Saw Mill",
  slug: createSlug("Chatham Saw Mill"),
    city: "Port Blair",
    stateOrUT: "Andaman and Nicobar Islands",
    builtIn: "1883",
    description: "Established in 1883, the Chatham Saw Mill is one of Asia's oldest and largest sawmills. It was built by the British to process the vast quantities of timber from the Andaman forests. The mill played a crucial role in supplying wood for various construction projects, including the construction of the Cellular Jail. It has a rich history and even sustained damage during the Second World War. Today, it serves as a significant historical site, showcasing the industrial heritage of the Andaman Islands and the intricate process of timber processing.",
    media: "/heritages/chatham-saw-mill.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Chatham_Saw_Mill"
  },
  {
    name: "Paramvir Chakra Memorial",
  slug: createSlug("Paramvir Chakra Memorial"),
    city: "Port Blair",
    stateOrUT: "Andaman and Nicobar Islands",
    builtIn: "2018",
    description: "The Paramvir Chakra Memorial is a tribute to the 21 recipients of the Paramvir Chakra, India's highest military decoration for gallantry. Located in Port Blair, the memorial honors the exceptional bravery and selfless sacrifice of these soldiers in defending the nation. It serves as a source of inspiration and a reminder of the valor of the Indian Armed Forces. The memorial provides detailed information about each recipient and their heroic acts, educating visitors about the sacrifices made to ensure the country's safety and sovereignty.",
    media: "/heritages/paramvir-chakra-memorial.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Param_Vir_Chakra_recipients"
  },
  {
    name: "Amaravati",
  slug: createSlug("Amaravati"),
    city: "Amaravati",
    stateOrUT: "Andhra Pradesh",
    builtIn: "N/A",
    description: "Amaravati is an ancient city with immense historical and cultural significance, known for its connection to Buddhism. It was a major center for Buddhist learning and art from the 3rd century BCE to the 3rd century CE. The region is home to the famous Amaravati Stupa, an ancient monument adorned with intricate carvings depicting the life of Buddha. The site also houses the Amaravati Archaeological Museum, which showcases a rich collection of sculptures and artifacts from the Satavahana period. Amaravati represents a blend of history and spirituality, making it a key destination for heritage enthusiasts.",
    media: "/heritages/amaravati.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Amaravati"
  },
  {
    name: "Borra Caves",
  slug: createSlug("Borra Caves"),
    city: "Visakhapatnam",
    stateOrUT: "Andhra Pradesh",
    builtIn: "N/A",
    description: "The Borra Caves are a natural wonder located in the Ananthagiri Hills of the Araku Valley. These ancient caves are a testament to nature's artistry, with stunning stalactite and stalagmite formations shaped over millions of years. The caves are a result of the flow of the Gosthani River over limestone deposits. The formations inside the caves are mesmerizing and take various shapes, giving rise to local legends and myths. The Borra Caves are a significant geological and tourist attraction, offering a unique glimpse into the Earth's natural processes and attracting visitors with their awe-inspiring beauty.",
    media: "/heritages/borra-caves.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Borra_Caves"
  },
  {
    name: "Gandikota",
  slug: createSlug("Gandikota"),
    city: "Gandikota",
    stateOrUT: "Andhra Pradesh",
    builtIn: "13th Century",
    description: "Gandikota, often referred to as the 'Grand Canyon of India,' is a spectacular gorge formed by the Pennar River. The fort, built in the 13th century, is a historical marvel with impressive fortifications, ancient temples, and a mosque within its premises. The fort's strategic location on the banks of the river offers breathtaking views of the gorge. Gandikota's rugged landscape and historical monuments create a unique blend of natural beauty and human ingenuity. It's a must-visit for adventure enthusiasts and history buffs alike, offering a glimpse into the region's rich past.",
    media: "/heritages/gandikota.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Gandikota"
  },
  {
    name: "Kanaka Durga Temple",
  slug: createSlug("Kanaka Durga Temple"),
    city: "Vijayawada",
    stateOrUT: "Andhra Pradesh",
    builtIn: "N/A",
    description: "The Kanaka Durga Temple is a revered Hindu temple dedicated to Goddess Durga. Situated on the Indrakeeladri hill on the banks of the Krishna River, the temple is one of the most prominent shrines in Andhra Pradesh. The temple's legend is tied to the myth of Arjuna's penance to Lord Shiva. The temple attracts millions of devotees, especially during the Navaratri festival. The temple's location offers a panoramic view of Vijayawada and the river, combining spiritual sanctity with scenic beauty. It is a vital pilgrimage site and a symbol of faith for the people of the region.",
    media: "/heritages/kanaka-durga-temple.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kanaka_Durga_Temple"
  },
  {
    name: "Kondapalli Fort",
  slug: createSlug("Kondapalli Fort"),
    city: "Vijayawada",
    stateOrUT: "Andhra Pradesh",
    builtIn: "14th Century",
    description: "Kondapalli Fort is a historical fortification located near Vijayawada. Built in the 14th century, the fort has witnessed the rule of various dynasties, including the Reddy and Gajapati dynasties. The fort's strategic location and impressive architecture make it a significant historical landmark. The fort complex includes several structures like the Dargah of the saint Ghiyasuddin Badshah and a granary. The fort is also famous for the 'Kondapalli dolls,' handcrafted wooden toys that are a GI-tagged product of the region. The fort is a blend of history, culture, and craftsmanship, making it a popular tourist spot.",
    media: "/heritages/kondapalli-fort.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kondapalli_Fort"
  },
  {
    name: "Kurnool",
  slug: createSlug("Kurnool"),
    city: "Kurnool",
    stateOrUT: "Andhra Pradesh",
    builtIn: "N/A",
    description: "Kurnool, a city with a rich historical legacy, was once the capital of the Andhra State. It is situated on the banks of the Tungabhadra River and is known for its blend of natural and man-made attractions. The city is home to several historical sites, including the ruins of the Kurnool Fort and the Konda Reddy Buruju, a watchtower that offers a panoramic view of the city. Kurnool's history dates back to the Palaeolithic era, with evidence of early human settlements found in the nearby caves. The city is a gateway to the ancient heritage and natural beauty of the region.",
    media: "/heritages/kurnool.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Kurnool"
  },
  {
    name: "Penukonda Fort",
  slug: createSlug("Penukonda Fort"),
    city: "Penukonda",
    stateOrUT: "Andhra Pradesh",
    builtIn: "16th Century",
    description: "Penukonda Fort is a formidable hill fort located in the Anantapur district. It served as the second capital of the Vijayanagara Empire and is a testament to the empire's architectural and military prowess. The fort complex is spread across a large area and includes temples, palaces, and a mosque. The fort's strategic location and strong fortifications made it a key defense point. The fort also has a rich religious history, with several ancient temples dedicated to various deities. The Penukonda Fort is a significant historical site, offering a glimpse into the glory of the Vijayanagara Empire.",
    media: "/heritages/penukonda-fort.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Penukonda"
  },
  {
    name: "Ranganatha Swamy Temple",
  slug: createSlug("Ranganatha Swamy Temple"),
    city: "Nellore",
    stateOrUT: "Andhra Pradesh",
    builtIn: "12th Century",
    description: "The Sri Ranganatha Swamy Temple, located in Nellore, is a revered temple dedicated to Lord Ranganatha, a form of Lord Vishnu. The temple is situated on the banks of the Penna River and is known for its impressive architecture and spiritual ambiance. The temple's history dates back to the 12th century and has been patronized by various dynasties. The temple's main idol of Lord Ranganatha is in a reclining posture, symbolizing the divine rest. The temple is a significant pilgrimage site and is known for its annual Rathotsavam (chariot festival), which attracts devotees from all over the country.",
    media: "/heritages/ranganatha-swamy-temple.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Sri_Ranganathaswamy_Temple_(Nellore)"
  },
  {
    name: "Simhachalam Temple",
  slug: createSlug("Simhachalam Temple"),
    city: "Visakhapatnam",
    stateOrUT: "Andhra Pradesh",
    builtIn: "11th Century",
    description: "The Sri Varaha Lakshmi Narasimha Swamy Temple, popularly known as Simhachalam Temple, is a famous Hindu temple located on a hilltop near Visakhapatnam. The temple is dedicated to Lord Narasimha, an incarnation of Lord Vishnu. The temple's unique feature is that the idol of the deity is covered in a sandalwood paste, and it is only on Akshaya Tritiya that the idol is seen without the covering. The temple's architecture is a blend of Kalinga and Chalukya styles, with intricate carvings and sculptures. The temple is a major pilgrimage center and a symbol of the region's rich spiritual heritage.",
    media: "/heritages/simhachalam-temple.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Simhachalam_Temple"
  },
  {
    name: "Sri Amaralingeswara Swamy Temple",
  slug: createSlug("Sri Amaralingeswara Swamy Temple"),
    city: "Amaravati",
    stateOrUT: "Andhra Pradesh",
    builtIn: "N/A",
    description: "The Sri Amaralingeswara Swamy Temple is a revered temple dedicated to Lord Shiva, located in the ancient town of Amaravati. The temple is one of the five Pancharama Kshetras, sacred Shiva temples in Andhra Pradesh. The temple's lingam is said to be self-manifested and is a significant pilgrimage site for devotees. The temple's architecture is a blend of different styles, reflecting the various dynasties that ruled the region. The temple is a symbol of faith and devotion, attracting pilgrims from far and wide. The serene atmosphere and spiritual significance make it a must-visit for religious travelers.",
    media: "/heritages/sri-amaralingeswara-swamy-temple.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Amaralingeswara_Swamy_Temple"
  },
  {
    name: "Srikalahasti Temple",
  slug: createSlug("Srikalahasti Temple"),
    city: "Srikalahasti",
    stateOrUT: "Andhra Pradesh",
    builtIn: "5th Century",
    description: "The Srikalahasti Temple is a famous Hindu temple dedicated to Lord Shiva, located in the town of Srikalahasti. The temple is one of the Pancha Bhoota Sthalams, representing the element of Vayu (air). The temple is known for its intricate carvings and ancient history, with its origins dating back to the 5th century. The temple's main lingam is said to be self-manifested, and it is the only temple where the Rahu-Ketu Puja is performed inside the main temple premises. The temple is a significant pilgrimage site and is known for its spiritual vibrations and architectural grandeur.",
    media: "/heritages/srikalahasti-temple.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Srikalahasti_Temple"
  },
  {
    name: "Undavalli Caves",
  slug: createSlug("Undavalli Caves"),
    city: "Vijayawada",
    stateOrUT: "Andhra Pradesh",
    builtIn: "4th-5th Century",
    description: "The Undavalli Caves are a set of ancient rock-cut caves located near Vijayawada. These caves, dating back to the 4th-5th century CE, are a remarkable example of Indian rock-cut architecture. The caves were originally a Jain and Buddhist monastery and later converted into a Hindu temple. The most famous cave is the four-storeyed one, which has a massive monolithic statue of Lord Vishnu in a reclining posture. The caves showcase the evolution of religious art and architecture in the region. The Undavalli Caves are a significant archaeological site, offering a glimpse into the religious and cultural history of Andhra Pradesh.",
    media: "/heritages/undavalli-caves.jpg",
    learnMoreLink: "https://en.wikipedia.org/wiki/Undavalli_Caves"
  },
  {
    name: "Dirang Dzong",
  slug: createSlug("Dirang Dzong"),
    city: "Dirang",
    stateOrUT: "Arunachal Pradesh",
    builtIn: "1831",
    description: "Dirang Dzong is a historic fort in the West Kameng district, showcasing the unique culture of the Monpa tribe. Built in 1831, this fort served as a center for administrative activities for the Monpas. It is a four-storied structure made of stone slabs and wooden logs, designed to withstand the harsh weather of the region. The fort has been used for various purposes throughout its history, including as a jail and a shelter during wartime. While much of the original structure has eroded over time, the stone houses and the entrance gate are still intact, providing a glimpse into the region's rich history and architectural heritage.",
    media: "/heritages/dirang-dzong.jpeg",
    learnMoreLink: "https://arunachaltourism.com/"
  },
  {
    name: "Ita Fort",
  slug: createSlug("Ita Fort"),
    city: "Itanagar",
    stateOrUT: "Arunachal Pradesh",
    builtIn: "14th-15th Century",
    description: "Ita Fort, literally meaning 'Fort of bricks,' is a significant historical site in the capital city of Itanagar. The fort, built with over 80 lakh bricks, is an impressive example of ancient engineering and craftsmanship. Dating back to the 14th or 15th century, it is believed to have been constructed by the kings of the Chutiya kingdom. The fort has an irregular shape with three gates on its western, eastern, and southern sides. Although some parts of the fort are in ruins, it remains a majestic structure that stands as a testament to the region's vibrant past and offers a unique insight into its history and architectural prowess.",
    media: "/heritages/ita-fort.jpg",
    learnMoreLink: "https://itanagar.nic.in/tourist-place/ita-fort/"
  },
  {
    name: "Malinithan",
  slug: createSlug("Malinithan"),
    city: "Likabali",
    stateOrUT: "Arunachal Pradesh",
    builtIn: "10th-14th Century",
    description: "Malinithan is an archaeological site containing the ruins of an ancient temple, believed to have been built by the Chutia kings. The site is associated with a mythological legend of Lord Krishna and Rukmini. Archaeological excavations have unearthed a beautifully designed and decorated temple plinth, along with sculptures of deities, animals, and intricate floral designs. The temple's architecture and the unearthed artifacts suggest a rich cultural and religious history, with influences from Tantric and tribal practices. Malinithan is a testament to the region's ancient past and its connections to different cultural and religious traditions.",
    media: "/heritages/malinithan.jpg",
    learnMoreLink: "https://arunachaltourism.com/malinithan-2/"
  },
  {
    name: "Tawang Monastery",
  slug: createSlug("Tawang Monastery"),
    city: "Tawang",
    stateOrUT: "Arunachal Pradesh",
    builtIn: "1681",
    description: "Tawang Monastery, also known as 'Galden Namgey Lhatse,' is the largest monastery in India and the second largest in the world. It was founded in 1681 by Merak Lama Lodre Gyatso, in accordance with the wishes of the 5th Dalai Lama. The monastery is situated at an elevation of over 10,000 feet and is a significant center for Mahayana Buddhism. It houses a large collection of valuable scriptures, murals, and a library. The monastery's serene and majestic surroundings, along with its rich spiritual and cultural heritage, make it a prominent pilgrimage and tourist destination in the region.",
    media: "/heritages/tawang-monastery.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/en/arunachal-pradesh/tawang/tawang-monastery"
  },
  {
    name: "Urgelling Monastery",
  slug: createSlug("Urgelling Monastery"),
    city: "Tawang",
    stateOrUT: "Arunachal Pradesh",
    builtIn: "1489",
    description: "Urgelling Monastery is a small yet highly significant Buddhist monastery located near Tawang. It holds immense historical importance as it is the birthplace of the 6th Dalai Lama, Tsangyang Gyatso. The monastery was founded in 1489 by Urgen Sangpo, the youngest brother of Terton Pempalingpa. Although it has faced attacks and restoration efforts over the centuries, it remains a revered site for Buddhist devotees. The monastery is a symbol of spiritual and historical heritage, attracting pilgrims who seek to connect with the life and teachings of the 6th Dalai Lama.",
    media: "/heritages/urgelling-monastery.jpg",
    learnMoreLink: "https://arunachaltourism.com/destination/urgelling-monastery/"
  },
  {
    name: "Charaideo Maidam",
  slug: createSlug("Charaideo Maidam"),
    city: "Charaideo",
    stateOrUT: "Assam",
    builtIn: "1228",
    description: "Charaideo Maidam, often called the 'Pyramids of Assam,' is a necropolis of the Ahom dynasty. Established in 1228 by the first Ahom king, Chaolung Sukaphaa, the site was the initial capital of the Ahom kingdom before becoming a sacred burial ground. The burial mounds, or 'maidams,' are hemispherical earthen mounds with an underground vault where Ahom royalty were interred with their possessions. The maidams are a testament to the unique Tai-Ahom burial tradition and are a remarkable example of medieval burial architecture. The site has recently been recognized as a UNESCO World Heritage Site, highlighting its global significance. It is a place of profound historical and cultural importance, offering a glimpse into the glorious past of the Ahom civilization.",
    media: "/heritages/charaideo-maidam.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/sibsagar/charaideo.html"
  },
  {
    name: "Hajo",
  slug: createSlug("Hajo"),
    city: "Hajo",
    stateOrUT: "Assam",
    builtIn: "10th-16th Century",
    description: "Hajo is a historic pilgrimage center located in the hills northwest of Guwahati. It's a unique meeting point of three major religions: Hinduism, Buddhism, and Islam. The town is home to the famous Hayagriva Madhava Temple, a significant Vaishnavite shrine. For Muslims, the Poa-Mecca mosque is a revered site. Buddhists, particularly from Bhutan and Tibet, consider the Hayagriva temple a sacred place, believing it to be where the Buddha attained Nirvana. Hajo's diverse religious landmarks and their harmonious coexistence make it a symbol of religious and cultural syncretism. It's an ancient site with a rich history, evident in its numerous temples and monuments.",
    media: "/heritages/hajo.jpg",
    learnMoreLink: "https://assam.gov.in/hajo-assam"
  },
  {
    name: "Kamakhya Mandir",
  slug: createSlug("Kamakhya Mandir"),
    city: "Guwahati",
    stateOrUT: "Assam",
    builtIn: "1565",
    description: "The Kamakhya Temple, located on Nilachal Hill in Guwahati, is one of the oldest and most revered centers of Tantric worship. Dedicated to the goddess Kamakhya, the temple is a significant Shakti Peetha. The temple's unique feature is the absence of a deity idol; instead, a yoni-shaped stone is worshipped, symbolizing the creative and fertile power of the divine feminine. The temple is known for its distinctive 'Nilachal' architectural style and is the site of the annual Ambubachi Mela festival. Kamakhya Mandir is a spiritual and cultural landmark, attracting millions of devotees and tantric practitioners.",
    media: "/heritages/kamakhya-mandir.jpg",
    learnMoreLink: "https://www.maakamakhya.org/"
  },
  {
    name: "Rang Ghar",
  slug: createSlug("Rang Ghar"),
    city: "Sivasagar",
    stateOrUT: "Assam",
    builtIn: "1746",
    description: "Rang Ghar, meaning 'House of Entertainment,' is a two-story royal sports pavilion built by the Ahom king Pramatta Singha. Constructed with bricks and a unique indigenous mortar of rice and eggs, it is considered one of Asia's oldest surviving amphitheaters. The pavilion served as a venue for Ahom kings and nobles to watch games like buffalo fights, cock fights, and other sports, especially during the Bihu festival. Its distinctive architecture, with a roof shaped like an inverted Ahom long boat, and its historical significance as a center for royal entertainment, has earned it the nickname 'Colosseum of the East.'",
    media: "/heritages/rang-ghar.jpg",
    learnMoreLink: "https://sivasagar.assam.gov.in/portals/1/tourist_places/Rangghar.html"
  },
  {
    name: "Surya Pahar",
  slug: createSlug("Surya Pahar"),
    city: "Goalpara",
    stateOrUT: "Assam",
    builtIn: "100 BC-9th Century AD",
    description: "Sri Surya Pahar is an archaeological site with immense religious significance, serving as a rare confluence of three major faiths: Hinduism, Buddhism, and Jainism. Located in the Goalpara district, the hill is dotted with numerous rock-cut Shivalingas, votive stupas, and sculptures of various deities. The site is believed to have been a center for sun worship, as evidenced by the name itself. The ruins and carvings found here provide a unique insight into the religious syncretism that existed in ancient Assam. The presence of Jain, Buddhist, and Hindu relics at one site makes Surya Pahar an invaluable historical and cultural treasure.",
    media: "/heritages/surya-pahar.jpg",
    learnMoreLink: "https://goalpara.gov.in/tourist-places/sri-surya-pahar/"
  },
  {
    name: "Ajatshatru Fort",
  slug: createSlug("Ajatshatru Fort"),
    city: "Rajgir",
    stateOrUT: "Bihar",
    builtIn: "6th Century BC",
    description: "Ajatshatru Fort is a historic fortification in Rajgir, believed to have been built by King Ajatshatru of the Haryanka dynasty. It is one of the most ancient forts in India, dating back to the time of Lord Buddha. The fort, though now in ruins, showcases a rectangular design with stone towers at each corner. The site is a testament to ancient Indian military architecture and its historical significance is intertwined with the life of Lord Buddha. The fort is also said to be the location of the prison where Ajatshatru confined his father, King Bimbisara. It is a key part of the larger Rajgir heritage zone.",
    media: "/heritages/ajatsatru-fort.jpeg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/rajgir/ajatshatru-fort"
  },
  {
    name: "Golghar",
  slug: createSlug("Golghar"),
    city: "Patna",
    stateOrUT: "Bihar",
    builtIn: "1786",
    description: "Golghar is a massive granary built by Captain John Garstin for the British army to store grains in case of famine. Its unique beehive-like structure is a masterpiece of British-Indian architecture. The monument has a winding stairway with 145 steps that spiral around the exterior, offering a panoramic view of the city of Patna and the nearby Ganges River. The structure is a significant landmark and a symbol of the city's colonial past. It was designed to be filled from the top, and the staircase allowed workers to carry the grain sacks up and down.",
    media: "/heritages/golghar.jpg",
    learnMoreLink: "https://patna.nic.in/tourist-place/gol-ghar/"
  },
  {
    name: "Kesariya Stupa",
  slug: createSlug("Kesariya Stupa"),
    city: "Kesariya",
    stateOrUT: "Bihar",
    builtIn: "3rd Century BC",
    description: "Kesariya Stupa is one of the tallest and largest Buddhist stupas in the world. Its construction is believed to have started during the reign of Emperor Ashoka in the 3rd century BCE, with later expansions during the Gupta period. The stupa is of immense archaeological and religious significance. It is believed to be the site where the Buddha gave his alms bowl to the Licchavis before his final journey. The stupa is a protected monument and attracts pilgrims and tourists alike with its impressive size and rich history.",
    media: "/heritages/kesariya-stupa.jpg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/east-champaran/kesariya-stupa"
  },
  {
    name: "Kumhrar",
  slug: createSlug("Kumhrar"),
    city: "Patna",
    stateOrUT: "Bihar",
    builtIn: "600 BC",
    description: "Kumhrar is an archaeological site where the ruins of the ancient city of Pataliputra, the capital of the Mauryan Empire, have been excavated. The most prominent finding is the ruins of a hypostyle 80-pillared hall, believed to be a grand assembly hall. The site contains relics from various periods, including the Mauryan and Gupta periods. It is also believed that the Third Buddhist Council was held here during the reign of Emperor Ashoka. The site provides a unique glimpse into the sophisticated urban planning and architectural prowess of ancient India.",
    media: "/heritages/kumhrar.jpg",
    learnMoreLink: "https://patna.nic.in/tourist-place/kumhrar-ruins/"
  },
  {
    name: "Mahabodhi Temple",
  slug: createSlug("Mahabodhi Temple"),
    city: "Bodh Gaya",
    stateOrUT: "Bihar",
    builtIn: "3rd Century BC",
    description: "The Mahabodhi Temple is a UNESCO World Heritage Site and one of the most sacred places for Buddhists. It is believed to be the site where Siddhartha Gautama attained enlightenment and became the Buddha. The first temple was built by Emperor Ashoka in the 3rd century BCE, while the present structure dates back to the 5th-6th centuries CE. The temple complex includes the famous Bodhi Tree, a direct descendant of the original tree under which the Buddha meditated. The temple is a masterpiece of brick architecture and a living symbol of Buddhist faith.",
    media: "/heritages/mahabodhi-temple.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1056/"
  },
  {
    name: "Munger Fort",
  slug: createSlug("Munger Fort"),
    city: "Munger",
    stateOrUT: "Bihar",
    builtIn: "14th Century",
    description: "Munger Fort is a historical stronghold located on a rocky hillock on the banks of the Ganges River. The fort has a long and complex history, having been controlled by various dynasties including the Khiljis, Tughlaqs, Mughals, and the British. The fort showcases a blend of Hindu and Islamic architectural styles and contains several historical and religious monuments within its premises. Its strategic location and formidable fortifications made it a key military outpost. The fort's walls and gates are still visible, serving as a powerful reminder of the region's rich and tumultuous past.",
    media: "/heritages/munger-fort.jpg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/munger/munger-fort"
  },
  {
    name: "Nalanda",
  slug: createSlug("Nalanda"),
    city: "Nalanda",
    stateOrUT: "Bihar",
    builtIn: "5th Century AD",
    description: "Nalanda was a renowned ancient center of learning and a Buddhist monastery. It is considered one of the world's first great residential universities, attracting scholars and students from all over Asia. Founded in the 5th century AD, Nalanda flourished as a hub of intellectual exchange and Buddhist philosophy. The university's vast library, Dharmaganja, was one of the largest repositories of knowledge in the ancient world. The ruins of Nalanda, a UNESCO World Heritage Site, bear testament to its architectural grandeur and academic excellence, reflecting a golden age of education and culture in ancient India.",
    media: "/heritages/nalanda.jpg",
    learnMoreLink: "https://nalanda.nic.in/en/tourist-place/ancient-nalanda-universitys-ruins/"
  },
  {
    name: "Naulakha Mandir",
  slug: createSlug("Naulakha Mandir"),
    city: "Deoghar",
    stateOrUT: "Jharkhand",
    builtIn: "1953",
    description: "The Naulakha Mandir is a temple located in Deoghar, dedicated to Lord Shiva. The temple is named 'Naulakha' as its construction is said to have cost nine lakh rupees. The temple is a testament to architectural brilliance and spiritual devotion, blending Mughal and Rajput influences. The temple's intricate carvings and serene ambiance make it a significant pilgrimage and cultural site. It is a symbol of divine grace and a living heritage that embodies the cultural ethos of the region, attracting a large number of devotees.",
    media: "/heritages/naulakha-mandir.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredibleindia/en/destinations/deoghar/naulakha-mandir.html"
  },
  {
    name: "Pillars of Ashoka",
  slug: createSlug("Pillars of Ashoka"),
    city: "Vaishali",
    stateOrUT: "Bihar",
    builtIn: "3rd Century BC",
    description: "The Pillars of Ashoka are a series of monolithic columns erected by the Mauryan Emperor Ashoka. These pillars, scattered throughout the Indian subcontinent, are a symbol of his reign and his commitment to spreading Buddhism. The pillar at Vaishali is a significant one, as it marks the place where the Buddha delivered his last sermon. These pillars are renowned for their distinctive polished finish and intricate animal capitals. The pillars are a vital archaeological and historical testament, providing physical evidence of the Buddhist faith and the vast reach of the Mauryan Empire.",
    media: "/heritages/pillars-of-ashoka.jpg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/vaishali/ashoka-pillar"
  },
  {
    name: "Rajgir",
  slug: createSlug("Rajgir"),
    city: "Rajgir",
    stateOrUT: "Bihar",
    builtIn: "6th Century BC",
    description: "Rajgir, meaning 'Royal Palace,' was the first capital of the Magadha kingdom and holds immense historical and religious significance for both Buddhists and Jains. The city is a major pilgrimage center, with its history closely intertwined with the lives of Lord Buddha and Lord Mahavira. It is home to numerous historical sites, including the ruins of ancient fortifications, monasteries, and stupas. The city is surrounded by lush green hills and is known for its natural hot springs. Rajgir's unique blend of history, spirituality, and natural beauty makes it a fascinating destination for travelers.",
    media: "/heritages/rajgir.jpg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/nalanda/rajgir"
  },
  {
    name: "Vaishali",
  slug: createSlug("Vaishali"),
    city: "Vaishali",
    stateOrUT: "Bihar",
    builtIn: "6th Century BC",
    description: "Vaishali is an ancient city of immense historical importance, particularly for Buddhists and Jains. It was the capital of the Licchavi republic, one of the world's first republics, and a center of political and intellectual life. The city is where Lord Mahavira was born, and it is also where the Buddha delivered his last sermon. The city is home to several historical landmarks, including the Ashoka Pillar, the ruins of a Buddhist monastery, and a stupa. Vaishali represents a rich cultural and religious heritage and is a significant pilgrimage site.",
    media: "/heritages/vaishali.jpg",
    learnMoreLink: "https://tourism.bihar.gov.in/en/destinations/vaishali/vaishali"
  },
  {
    name: "Chandigarh Capitol Complex",
  slug: createSlug("Chandigarh Capitol Complex"),
    city: "Chandigarh",
    stateOrUT: "Chandigarh",
    builtIn: "1953",
    description: "The Chandigarh Capitol Complex is a government compound that is a UNESCO World Heritage Site. It was designed by the famous architect Le Corbusier as the symbolic head of the city, representing the three pillars of democracy: the legislature, the executive, and the judiciary. The complex includes the Palace of Assembly, the Secretariat, and the High Court, along with monuments like the Open Hand, which symbolizes peace and reconciliation. The complex is a masterpiece of modern architecture, known for its use of exposed concrete and pioneering construction techniques, and it embodies the vision of a free and modern India.",
    media: "/heritages/capitol-complex.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1321/"
  },
  {
    name: "Le Corbusier Centre",
  slug: createSlug("Le Corbusier Centre"),
    city: "Chandigarh",
    stateOrUT: "Chandigarh",
    builtIn: "2008",
    description: "The Le Corbusier Centre is a museum dedicated to preserving and showcasing the life and work of the renowned Swiss-French architect, Le Corbusier, who designed the city of Chandigarh. Located in the very building where he and his team worked on the city's master plan, the center houses a collection of his original drawings, photographs, models, and personal artifacts. It offers visitors a deep insight into his design philosophy and the meticulous planning that went into creating the city. The center stands as a tribute to his vision and a testament to his enduring legacy as a pioneer of modern urban planning and architecture.",
    media: "/heritages/le-corbusier-centre.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/chandigarh/le-corbusier-centre.html"
  },
  {
    name: "Rock Garden",
  slug: createSlug("Rock Garden"),
    city: "Chandigarh",
    stateOrUT: "Chandigarh",
    builtIn: "1957",
    description: "The Rock Garden of Chandigarh is a unique and enchanting sculpture garden created by Nek Chand, a government official who started building it secretly in his spare time. The garden is a testament to the idea of turning waste into art, as it is entirely made of industrial and home waste, as well as discarded items like broken ceramic tiles, bangles, and electrical waste. The garden's winding pathways lead through a series of interconnected waterfalls, gorges, and chambers, populated by thousands of sculptures of animals and human figures. The Rock Garden is a symbol of creative ingenuity and resourcefulness, attracting visitors from all over the world.",
    media: "/heritages/rock-garden.jpg",
    learnMoreLink: "https://chandigarh.nic.in/tourist-place/rock-garden/"
  },
  {
    name: "Rose Garden",
  slug: createSlug("Rose Garden"),
    city: "Chandigarh",
    stateOrUT: "Chandigarh",
    builtIn: "1967",
    description: "The Zakir Hussain Rose Garden is a botanical garden named after India's former President. It is one of Asia's largest rose gardens, spread over 30 acres with over 50,000 rose bushes and 1,600 different species. The garden is not only a visual delight but also a host to the annual Rose Festival, a major cultural event in the city. Apart from roses, the garden also features a wide variety of trees with medicinal value. The well-manicured lawns and vibrant flower beds create a serene and beautiful environment, making it a popular spot for both tourists and locals.",
    media: "/heritages/rose-garden.jpg",
    learnMoreLink: "https://chandigarhtourism.gov.in/pages/gardens/rose"
  },
  {
    name: "Sanghol Buddhist Vihara Ruins",
  slug: createSlug("Sanghol Buddhist Vihara Ruins"),
    city: "Fatehgarh Sahib",
    stateOrUT: "Punjab",
    builtIn: "1st-2nd Century AD",
    description: "The Sanghol Buddhist Vihara Ruins are an archaeological site of a ancient Buddhist monastery. Excavations have revealed a stupa and a large number of sculptures, including 117 carved stone slabs, which are believed to be from the Kushan period. The site is of immense historical and religious significance, as it was a major center for Buddhist culture and trade on the ancient Uttarapatha route. The artifacts found at Sanghol, particularly the sculptures of the Mathura school, provide valuable insights into the art and religious practices of the Kushan era. The ruins are a testament to the spread of Buddhism in ancient Punjab.",
    media: "/heritages/sanghol-buddhist-vihara-ruins.jpg",
    learnMoreLink: "https://fatehgarhsahib.nic.in/en/tourist-place/sanghol/"
  },
  {
    name: "Bastar Palace",
  slug: createSlug("Bastar Palace"),
    city: "Jagdalpur",
    stateOrUT: "Chhattisgarh",
    builtIn: "20th Century",
    description: "Bastar Palace, also known as Jagdalpur Palace, is a significant historical monument and a former residence of the rulers of the Bastar state. Built in the early 20th century, the palace is a beautiful example of the region's traditional architecture, blending elements of tribal and Hindu styles. It served as the official residence of the royal family until the state's merger with the Indian Union. Today, the palace has been converted into a museum, housing a collection of artifacts, including weapons, jewelry, and photographs that offer a glimpse into the rich cultural heritage and history of the Bastar region. The palace is a popular tourist destination, attracting visitors with its unique architecture and historical significance.",
    media: "/heritages/bastar-palace.jpg",
    learnMoreLink: "https://tourism.cgstate.gov.in/destinations/bastar"
  },
  {
    name: "Bhoramdeo Temple",
  slug: createSlug("Bhoramdeo Temple"),
    city: "Kawardha",
    stateOrUT: "Chhattisgarh",
    builtIn: "11th Century",
    description: "Bhoramdeo Temple, often called the 'Khajuraho of Chhattisgarh,' is a group of temples dedicated to Lord Shiva. The main temple, built in the 11th century by King Ramchandra of the Nag dynasty, is a stunning example of the Nagar style of temple architecture. It is known for its intricate stone carvings, which depict various gods, goddesses, and erotic sculptures, reminiscent of the Khajuraho temples. The temple is situated in a serene location amidst lush green mountains and a tranquil lake, adding to its spiritual and aesthetic appeal. Bhoramdeo Temple is a significant archaeological and religious site, attracting history and art lovers.",
    media: "/heritages/bhoramdeo-temple.jpg",
    learnMoreLink: "https://kawardha.gov.in/en/tourist-place/bhoramdev-templekawardha/"
  },
  {
    name: "Deorani-Jethani Temple",
  slug: createSlug("Deorani-Jethani Temple"),
    city: "Tala",
    stateOrUT: "Chhattisgarh",
    builtIn: "6th Century",
    description: "The Deorani-Jethani temples, located in the village of Tala, are a pair of ancient temples dedicated to Lord Shiva. Dating back to the 6th century, these temples are a significant archaeological site. The Deorani temple is well-preserved and showcases the Gupta style of architecture, while the Jethani temple is in a dilapidated state. The site is famous for the unique Rudra Shiva statue, a seven-foot-tall sculpture with multiple heads and animal parts, discovered during excavations. The temples and the artifacts found here provide valuable insights into the religious practices and artistic styles of the ancient Sharabhpuriya dynasty.",
    media: "/heritages/deorani-jethani-temple.jpg",
    learnMoreLink: "https://bilaspur.gov.in/en/tourist-place/tala/"
  },
  {
    name: "Kawardha Palace",
  slug: createSlug("Kawardha Palace"),
    city: "Kawardha",
    stateOrUT: "Chhattisgarh",
    builtIn: "1936",
    description: "Kawardha Palace is a magnificent heritage site that was built by Maharaja Dharamraj Singh between 1936 and 1939. This grand palace is a testament to the rich architectural heritage of the region, blending Italian, Mughal, and colonial styles. It is spread over 11 acres of lush green land and features a grand Durbar Hall with a majestic dome. The palace served as the royal residence of the Kawardha state and has now been converted into a luxurious heritage hotel. The palace, with its beautiful gardens and intricate design, offers a unique glimpse into the royal lifestyle and is a prominent tourist destination in the state.",
    media: "/heritages/kawardha-palace.jpeg",
    learnMoreLink: "https://tourism.cgstate.gov.in/destinations/kawardha"
  },
  {
    name: "Kutumsar Cave",
  slug: createSlug("Kutumsar Cave"),
    city: "Jagdalpur",
    stateOrUT: "Chhattisgarh",
    builtIn: "N/A",
    description: "Kutumsar Cave is a natural limestone cave located in the Kanger Valley National Park. It is a major attraction for ecotourism enthusiasts and geologists. The cave, with its stunning stalactite and stalagmite formations, is a result of millions of years of natural processes. The cave is known for its unique biodiversity, including a species of blind fish that live in the cave's water pools. It is a protected site and is closed during the monsoon season. The cave offers a mesmerizing experience, taking visitors on a journey through a world of natural rock formations and a unique ecosystem.",
    media: "/heritages/kutumsar-cave.jpg",
    learnMoreLink: "https://bastar.gov.in/en/tourist-place/kotumsar-cave/"
  },
  {
    name: "Mahamaya Temple",
  slug: createSlug("Mahamaya Temple"),
    city: "Raipur",
    stateOrUT: "Chhattisgarh",
    builtIn: "17th Century",
    description: "The Mahamaya Temple, located in Raipur, is a revered Hindu temple dedicated to Goddess Mahamaya. It is one of the oldest temples in the city and is believed to be one of the 36 Shaktipeeths of Chhattisgarh. The temple's history is linked to the Haihaya kings and was later renovated by the Marathas. It is known for its unique 'Tantrik' rituals and attracts a large number of devotees, especially during the Navaratri festival. The temple's serene ambiance and historical significance make it a prominent religious and cultural landmark in Raipur.",
    media: "/heritages/mahamaya-temple.jpg",
    learnMoreLink: "https://tourism.cgstate.gov.in/destinations/raipur"
  },
  {
    name: "Raipur",
  slug: createSlug("Raipur"),
    city: "Raipur",
    stateOrUT: "Chhattisgarh",
    builtIn: "9th Century",
    description: "Raipur, the capital of Chhattisgarh, is a city with a rich history that dates back to the 9th century. The city's history is intertwined with various dynasties, including the Kalchuris and the Marathas. It is home to numerous historical and cultural sites, including the Dudhadhari Monastery and Temple and the Mahant Ghasidas Memorial Museum. The city also has modern attractions like the Vivekananda Sarovar and Purkhauti Muktangan, which showcases the state's cultural heritage. Raipur is a blend of the old and the new, offering visitors a unique experience of history, culture, and urban life.",
    media: "/heritages/raipur.jpg",
    learnMoreLink: "https://raipur.gov.in/en/places-to-visit/"
  },
  {
    name: "Ratanpur Fort",
  slug: createSlug("Ratanpur Fort"),
    city: "Ratanpur",
    stateOrUT: "Chhattisgarh",
    builtIn: "11th Century",
    description: "Ratanpur Fort is a majestic historical fort with a rich history dating back to the 11th century. It was built by the Kalchuri dynasty and served as the capital of the region. The fort is an impressive example of medieval military architecture, with strong walls, multiple gates, and a complex layout. The fort complex contains several temples, including the Mahamaya Temple, and a large tank. The fort has witnessed numerous battles and has been under the control of various dynasties. The ruins of the fort offer a glimpse into the region's glorious past and its architectural brilliance.",
    media: "/heritages/ratanpur-fort.jpg",
    learnMoreLink: "https://tourism.cgstate.gov.in/destinations/bilaspur"
  },
  {
    name: "Sri Laxman Temple",
  slug: createSlug("Sri Laxman Temple"),
    city: "Sirpur",
    stateOrUT: "Chhattisgarh",
    builtIn: "7th Century",
    description: "The Sri Laxman Temple in Sirpur is a magnificent brick temple dedicated to Lord Vishnu. Built in the 7th century by Queen Vasata, it is considered one of the finest examples of brick temples in India. The temple's exterior is adorned with intricate carvings depicting scenes from Hindu mythology, including the life of Lord Krishna and various avatars of Lord Vishnu. The temple, although in ruins, still stands as a testament to the architectural and artistic brilliance of the Panduvamshi dynasty. The site is a significant archaeological and religious landmark.",
    media: "/heritages/sri-laxman-temple.jpg",
    learnMoreLink: "https://tourism.cgstate.gov.in/destinations/mahasamund"
  },
  {
    name: "Humayun's Tomb",
  slug: createSlug("Humayun's Tomb"),
    city: "Delhi",
    stateOrUT: "Delhi",
    builtIn: "1570",
    description: "Humayun's Tomb is a UNESCO World Heritage Site and the first garden-tomb on the Indian subcontinent. Built for the Mughal Emperor Humayun by his senior widow Bega Begum, it is a magnificent example of early Mughal architecture. The tomb is a grand structure of red sandstone and white marble, set in the middle of a stunning 'Char Bagh' or four-quartered Persian-style garden. It inspired several architectural innovations that culminated in the construction of the Taj Mahal. The tomb complex also includes several other monuments, such as the tombs of Isa Khan and Afsarwala. The beautiful and serene premises offer a captivating glimpse into Mughal history and architectural brilliance.",
    media: "/heritages/humayan-tomb.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/232/"
  },
  {
    name: "India Gate",
  slug: createSlug("India Gate"),
    city: "Delhi",
    stateOrUT: "Delhi",
    builtIn: "1931",
    description: "India Gate is a majestic war memorial located in the heart of New Delhi. Designed by the architect Edwin Lutyens, it was built as a tribute to the 70,000 British Indian Army soldiers who lost their lives during World War I and the Third Anglo-Afghan War. The monument's walls are inscribed with the names of over 13,500 soldiers. After India's independence, the Amar Jawan Jyoti, or the 'Flame of the Immortal Soldier,' was added beneath the arch to honor the unknown soldiers who died in the post-independence conflicts. The monument is surrounded by well-manicured lawns, fountains, and a ceremonial avenue, making it a popular landmark and a symbol of national pride.",
    media: "/heritages/india-gate.jpg",
    learnMoreLink: "https://delhitourism.gov.in/dt/explore_the_city/india_gate.html"
  },
  {
    name: "Jama Masjid",
  slug: createSlug("Jama Masjid"),
    city: "Delhi",
    stateOrUT: "Delhi",
    builtIn: "1656",
    description: "The Jama Masjid, or Masjid-i Jahān-Numā, is one of the largest and most famous mosques in India. Commissioned by the Mughal Emperor Shah Jahan, it was built between 1650 and 1656. The mosque's impressive architecture, with its three large domes and two tall minarets, is a masterpiece of Mughal design. The grand courtyard can accommodate more than 25,000 people at once. It served as the principal mosque for the Mughal emperors and continues to be a central place of worship and social life in Old Delhi. The mosque's design is a blend of Islamic and Indian styles, showcasing the unique architectural legacy of the Mughal Empire.",
    media: "/heritages/jama-masjid.jpg",
    learnMoreLink: "https://www.britannica.com/place/Jami-Masjid-mosque-Delhi-India"
  },
  {
    name: "Qutub Minar",
  slug: createSlug("Qutub Minar"),
    city: "Delhi",
    stateOrUT: "Delhi",
    builtIn: "1193",
    description: "The Qutub Minar is a UNESCO World Heritage Site and the tallest minaret in India. Its construction was started in 1193 by Qutb-ud-din Aibak, the founder of the Delhi Sultanate, to mark the victory over Delhi's last Hindu kingdom. The minar is a striking example of Indo-Islamic architecture, with its five distinct storeys of red and buff sandstone. The complex also includes the Quwwat-ul-Islam Mosque, one of the earliest mosques in India, and the famous Iron Pillar, which has not rusted despite being over 1,600 years old. The Qutub Minar complex is a testament to the region's long and rich history, reflecting the architectural and cultural transitions over centuries.",
    media: "/heritages/qutub-minar.jpg",
    learnMoreLink: "https://asi.nic.in/pages/WorldHeritageQutbMinar"
  },
  {
    name: "Red Fort",
  slug: createSlug("Red Fort"),
    city: "Delhi",
    stateOrUT: "Delhi",
    builtIn: "1648",
    description: "The Red Fort, or Lal Qila, is a massive fort complex and a UNESCO World Heritage Site. Built by the Mughal Emperor Shah Jahan, it served as the royal residence and the political center of the Mughal Empire for nearly 200 years. The fort is an architectural marvel of red sandstone, with its towering walls, intricate marble work, and a series of palaces and halls. The fort's design is a blend of Persian, Timurid, and Indian architectural styles. Today, the fort is a symbol of India's rich history, and the Prime Minister of India hoists the national flag here on Independence Day. It stands as a testament to the power, artistry, and grandeur of the Mughal Empire.",
    media: "/heritages/red-fort.jpg",
    learnMoreLink: "https://asi.nic.in/pages/WorldHeritageRedFort"
  },
  {
    name: "Diu Fort",
  slug: createSlug("Diu Fort"),
    city: "Diu",
    stateOrUT: "Dadra and Nagar Haveli and Daman and Diu",
    builtIn: "1535",
    description: "Diu Fort is a historic fortification that stands as a testament to the Portuguese rule in the region. Built by the Portuguese in a strategic alliance with the Sultan of Gujarat, the fort is a massive structure surrounded by the Arabian Sea on three sides. It is a masterpiece of Portuguese military architecture, with several bastions, a lighthouse, and a network of cannons. The fort's ramparts offer a magnificent view of the sea and the island. The fort complex also houses several historical structures, including a church, a prison, and a house of arms. Diu Fort is a prominent historical and tourist destination, reflecting the region's rich colonial history and strategic importance.",
    media: "/heritages/diu-fort.jpg",
    learnMoreLink: "https://diu.gov.in/tourist-place/forts/"
  },
  {
    name: "Fort of Saint Jerome",
  slug: createSlug("Fort of Saint Jerome"),
    city: "Daman",
    stateOrUT: "Dadra and Nagar Haveli and Daman and Diu",
    builtIn: "1615",
    description: "The Fort of Saint Jerome, also known as Nani Daman Fort, is a small yet significant fort located on the banks of the Daman Ganga River. Built by the Portuguese in the 17th century, it was named after the patron saint, Saint Jerome. The fort features impressive stone walls, three bastions, and two gateways. The main gate is adorned with a statue of St. Jerome and a Portuguese coat of arms. The fort complex contains the Church of Our Lady of the Sea and other historical structures, providing a glimpse into the region's colonial past. Its strategic location offers a beautiful view of the river and the sea, making it a popular tourist spot.",
    media: "/heritages/fort-of-saint-jerome.jpg",
    learnMoreLink: "https://ddd.gov.in/places-centres/st-jerome-fort/"
  },
  {
    name: "Moti Daman Fort",
  slug: createSlug("Moti Daman Fort"),
    city: "Daman",
    stateOrUT: "Dadra and Nagar Haveli and Daman and Diu",
    builtIn: "1559",
    description: "Moti Daman Fort is a large Portuguese-built fort that stands as a testament to the region's rich colonial heritage. Constructed in the 16th century, the fort is known for its magnificent military architecture, with a large number of bastions and cannons. The fort walls encompass a small town with a labyrinth of narrow streets, residential buildings, and churches. The fort complex includes the Church of Bom Jesus and the Chapel of Our Lady of Rosary. The fort offers a stunning view of the sea and the Daman Ganga river, and its impressive lighthouses are a prominent landmark. It is a must-visit for history enthusiasts.",
    media: "/heritages/motidaman-fort.jpg",
    learnMoreLink: "https://ddd.gov.in/places-centres/fort-of-moti-daman/"
  },
  {
    name: "Nakshatra Garden",
  slug: createSlug("Nakshatra Garden"),
    city: "Silvassa",
    stateOrUT: "Dadra and Nagar Haveli and Daman and Diu",
    builtIn: "2013",
    description: "Nakshatra Garden is a unique and beautifully landscaped garden in Silvassa. It is based on the concept of nakshatras, or lunar constellations, from Indian astrology. The garden is designed with a variety of plants and trees that are associated with each of the 27 nakshatras. The garden's layout, with its numerous ponds, bridges, and walking trails, creates a serene and tranquil environment. It also features a dedicated play area for children, an open-air amphitheater for cultural events, and a meditation center. Nakshatra Garden is a perfect blend of nature, culture, and spirituality, offering a unique and educational experience.",
    media: "/heritages/nakshatra-garden.jpg",
    learnMoreLink: "https://dnh.gov.in/tourist-place/nakshatra-garden/"
  },
  {
    name: "St. Paul's Church",
  slug: createSlug("St. Paul's Church"),
    city: "Diu",
    stateOrUT: "Dadra and Nagar Haveli and Daman and Diu",
    builtIn: "1610",
    description: "St. Paul's Church is one of the most beautiful and well-preserved Portuguese churches in India. It was built by the Portuguese and is dedicated to Our Lady of Immaculate Conception. The church is a stunning example of Baroque architectural style, with intricate wood carvings and a magnificent facade. The main altar is a masterpiece of craftsmanship, with a single piece of Burmese teak carved with intricate details. The church's design is said to be inspired by the Basilica of Bom Jesus in Goa. St. Paul's Church is a living heritage site, with weekly mass services and a serene ambiance that attracts both religious and non-religious visitors.",
    media: "/heritages/st-paul-church.jpeg",
    learnMoreLink: "https://ddd.gov.in/places-centres/st-pauls-church/"
  },
  {
    name: "Basilica of Bom Jesus",
  slug: createSlug("Basilica of Bom Jesus"),
    city: "Old Goa",
    stateOrUT: "Goa",
    builtIn: "1594",
    description: "The Basilica of Bom Jesus, a UNESCO World Heritage Site, is one of the most famous and oldest churches in Goa. It is a prime example of Baroque architecture in India and is renowned for housing the mortal remains of St. Francis Xavier, a revered Jesuit missionary. The church is built with black laterite stone and is known for its unplastered exterior, which was done to preserve the original structure. The interior is decorated with a beautiful altarpiece and exquisite paintings depicting the life of the saint. This basilica is a significant pilgrimage site and an architectural marvel that attracts visitors from all over the world.",
    media: "/heritages/basilica-of-bom-jesus.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/en/goa/goa/basilica-of-bom-jesus"
  },
  {
    name: "Braganza House",
  slug: createSlug("Braganza House"),
    city: "Chandor",
    stateOrUT: "Goa",
    builtIn: "17th Century",
    description: "The Braganza House is a magnificent Portuguese-style mansion located in Chandor. This sprawling ancestral home is one of the largest and most exquisite heritage houses in Goa. The house is divided into two parts, each owned by different branches of the Braganza family. It is a living museum, filled with a vast collection of antique furniture, priceless artifacts, paintings, and a library with thousands of books. The house offers a glimpse into the aristocratic lifestyle of the Portuguese era in Goa. The house's grand facade, ornate interiors, and historical significance make it a captivating tourist attraction.",
    media: "/heritages/braganza-house.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/goa/chandor/braganza-house.html"
  },
  {
    name: "Chapora Fort",
  slug: createSlug("Chapora Fort"),
    city: "Chapora",
    stateOrUT: "Goa",
    builtIn: "1617",
    description: "Chapora Fort is a historic fortification that stands on a hill overlooking the Chapora River and the Arabian Sea. It was originally built by the Muslim rulers of the Adil Shahi dynasty and was later rebuilt by the Portuguese to serve as a military outpost. The fort's strategic location and steep slopes made it an ideal defensive structure. Although now in ruins, the fort's remnants, including its gates and bastions, still offer a commanding view of the surrounding landscape. The fort gained immense popularity after being featured in the Bollywood movie 'Dil Chahta Hai.' It is a must-visit for its historical significance and breathtaking panoramic views.",
    media: "/heritages/chapora-fort.jpg",
    learnMoreLink: "https://www.goatourism.gov.in/places/forts/chapora-fort"
  },
  {
    name: "Corjuem Fort",
  slug: createSlug("Corjuem Fort"),
    city: "Corjuem",
    stateOrUT: "Goa",
    builtIn: "1705",
    description: "Corjuem Fort is a small yet significant inland fort located on an island in the Mapusa River. It was built by the Portuguese to protect their territories from Maratha, Bhonsle, and Rane Rajput attacks. The fort is a perfect square with four corner bastions and is a unique example of military architecture. A notable feature of the fort is its unique suspension bridge, which connects the island to the mainland. While the fort is now in ruins, it offers a tranquil experience and a beautiful view of the surrounding river and landscape. It's a hidden gem that provides a different perspective on Goa's rich history.",
    media: "/heritages/corjuem-fort.jpg",
    learnMoreLink: "https://goa-tourism.org.in/corjuem-fort-goa"
  },
  {
    name: "Fort Aguada",
  slug: createSlug("Fort Aguada"),
    city: "Sinquerim",
    stateOrUT: "Goa",
    builtIn: "1612",
    description: "Fort Aguada is a formidable 17th-century Portuguese fort located on Sinquerim beach. The fort was built to guard against Dutch and Maratha attacks and to provide a watering station for ships, hence the name 'Aguada,' meaning 'watering place.' The fort is a massive structure with a large cistern that could hold 2,376,000 gallons of water. The fort also has a lighthouse, which is one of the oldest in Asia. The fort has a rich history, serving as a prison for a period and now being partially converted into a luxury hotel. The fort's impressive architecture and its commanding views of the Arabian Sea make it a popular tourist destination.",
    media: "/heritages/fort-aguada.jpg",
    learnMoreLink: "https://www.tajhotels.com/en-in/hotels/taj-fort-aguada-goa"
  },
  {
    name: "Mahadev Temple of Tambdi Surla",
  slug: createSlug("Mahadev Temple of Tambdi Surla"),
    city: "Tambdi Surla",
    stateOrUT: "Goa",
    builtIn: "12th Century",
    description: "The Mahadev Temple is a beautifully preserved 12th-century temple dedicated to Lord Shiva. It is a rare example of Kadamba-Yadava architecture in basalt stone. The temple is located in a remote clearing deep in the forest at the foot of the Western Ghats, which helped it survive Muslim invasions and Portuguese persecution. The temple's exterior and interior are adorned with intricate carvings of deities and mythological scenes. The temple is a functioning shrine and a significant archaeological and religious site. Its pristine condition and tranquil surroundings make it a must-visit for those interested in history and spirituality.",
    media: "/heritages/mahadev-temple-of-tambdi-surla.jpg",
    learnMoreLink: "https://www.goa.gov.in/places/tambdi-surla-temple/"
  },
  {
    name: "Se Cathedral",
  slug: createSlug("Se Cathedral"),
    city: "Old Goa",
    stateOrUT: "Goa",
    builtIn: "1619",
    description: "The Se Cathedral is one of the largest churches in Asia and a UNESCO World Heritage Site. It was built by the Portuguese to commemorate their victory over the Muslim army in 1510. Dedicated to St. Catherine of Alexandria, the cathedral is a magnificent example of Portuguese-Gothic and Manueline architecture. The church has a grand exterior with a huge bell, known as the 'Golden Bell,' one of the largest in Goa. The serene and grand interiors with its intricate woodwork and altars make it a must-visit. The cathedral is a living testament to Goa's rich Christian heritage and the grandeur of the Portuguese era.",
    media: "/heritages/se-cathedral.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/goa/se-cathedral.html"
  },
  {
    name: "Shri Mahalaxmi Temple",
  slug: createSlug("Shri Mahalaxmi Temple"),
    city: "Panaji",
    stateOrUT: "Goa",
    builtIn: "1818",
    description: "The Shri Mahalaxmi Temple in Panaji is one of the most revered Hindu temples in Goa. It is dedicated to Goddess Mahalaxmi, the goddess of wealth and prosperity. The temple was built in 1818 and is known for its beautiful architecture and a peaceful ambiance. The temple is a significant pilgrimage site for devotees, especially during the annual festival of Navaratri. The temple's serene atmosphere and its historical and religious importance make it a key spiritual destination in the heart of the city.",
    media: "/heritages/shri-mahalaxmi-temple.jpg",
    learnMoreLink: "https://www.goatourism.gov.in/places/panaji/shri-mahalaxmi-temple"
  },
  {
    name: "Shri Shantadurga Temple",
  slug: createSlug("Shri Shantadurga Temple"),
    city: "Ponda",
    stateOrUT: "Goa",
    builtIn: "1738",
    description: "The Shri Shantadurga Temple is a prominent Hindu temple located in Kavlem, Ponda. The temple is dedicated to Goddess Shantadurga, who is believed to be the goddess who mediated between Lord Shiva and Lord Vishnu. The temple's architecture is a beautiful blend of Hindu and Portuguese styles. The temple's history is linked to the migration of the goddess's idol to Ponda during the Portuguese inquisition. The temple complex is known for its serene environment and its beautifully carved idol of the goddess. It is a major pilgrimage center and a symbol of religious tolerance and harmony in Goa.",
    media: "/heritages/shri-shantadurga-temple.jpg",
    learnMoreLink: "https://www.goatourism.gov.in/places/ponda/shri-shantadurga-temple"
  },
  {
    name: "Adalaj Stepwell",
  slug: createSlug("Adalaj Stepwell"),
    city: "Adalaj",
    stateOrUT: "Gujarat",
    builtIn: "1499",
    description: "The Adalaj Stepwell is a magnificent five-story structure built by Queen Rudabai. It is a stunning example of Indo-Islamic fusion architecture, combining Hindu, Islamic, and Jain styles. The stepwell served as a place for weary travelers and pilgrims to rest and provided access to a reliable water source. The intricate carvings on its walls and pillars depict various mythological scenes, daily life, and geometric patterns. The stepwell's unique design and its spiritual significance make it a prominent historical and architectural marvel. It is a testament to the ingenuity of ancient builders in creating a beautiful and functional structure.",
    media: "/heritages/adalaj.jpg",
    learnMoreLink: "https://gandhinagar.nic.in/tourist-place/adalaj-ni-vav/"
  },
  {
    name: "Champaner-Pavagadh Archaeological Park",
  slug: createSlug("Champaner-Pavagadh Archaeological Park"),
    city: "Champaner",
    stateOrUT: "Gujarat",
    builtIn: "8th-16th Century",
    description: "Champaner-Pavagadh Archaeological Park is a UNESCO World Heritage Site that encompasses a rich tapestry of history, mythology, and architecture. The park includes a range of monuments from the Hindu and Islamic periods, including the famous Jama Masjid, a magnificent mosque with intricate carvings. The site is a living testament to the short-lived capital of the Gujarat Sultanate. The ruins and monuments showcase a unique blend of Hindu and Islamic styles, reflecting the cultural synthesis of the region. The park is a treasure trove of archaeological and historical significance, offering a journey through centuries of architectural and cultural evolution.",
    media: "/heritages/champaner.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1101/"
  },
  {
    name: "Dholavira",
  slug: createSlug("Dholavira"),
    city: "Kutch",
    stateOrUT: "Gujarat",
    builtIn: "3rd Millennium BC",
    description: "Dholavira is an archaeological site of the Indus Valley Civilization, a UNESCO World Heritage Site, and one of the largest Harappan sites in India. The site, located in the Rann of Kutch, is a testimony to the advanced urban planning and architectural prowess of the Harappan people. The city was divided into three parts: a citadel, a middle town, and a lower town. The site is known for its sophisticated water management system and a large stadium. The artifacts found at Dholavira, including pottery, beads, and seals, provide valuable insights into the life and culture of this ancient civilization.",
    media: "/heritages/dholavira.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1645/"
  },
  {
    name: "Laxmi Vilas Palace",
  slug: createSlug("Laxmi Vilas Palace"),
    city: "Vadodara",
    stateOrUT: "Gujarat",
    builtIn: "1890",
    description: "Laxmi Vilas Palace is a magnificent palace and a former residence of the Gaekwad family, the rulers of the Baroda State. Built by Maharaja Sayajirao Gaekwad III, it is a grand example of Indo-Saracenic architecture. The palace is four times the size of Buckingham Palace and boasts a stunning collection of paintings, sculptures, and royal artifacts. The palace complex also includes a golf course and a museum, the Maharaja Fateh Singh Museum, which houses a collection of royal memorabilia and art. The palace is a living testament to the opulence and grandeur of the Gaekwad dynasty and a significant cultural landmark.",
    media: "/heritages/laxmivilas-palace.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredibleindia/en/destinations/vadodara/laxmi-vilas-palace.html"
  },
  {
    name: "Lothal",
  slug: createSlug("Lothal"),
    city: "Ahmedabad",
    stateOrUT: "Gujarat",
    builtIn: "2200 BC",
    description: "Lothal is an ancient archaeological site of the Indus Valley Civilization. It is one of the most important archaeological sites in India, known for its extensive ruins and a well-preserved dockyard, which is believed to be one of the world's oldest. The site provides valuable insights into the urban planning, trade, and maritime activities of the Harappan people. The excavated ruins include a city with a bead factory, a warehouse, and a sophisticated drainage system. Lothal is a treasure trove of information about the ancient civilization, and a museum at the site displays the artifacts found during the excavations.",
    media: "/heritages/lothal.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/ahmedabad/lothal.html"
  },
  {
    name: "Rani Ki Vav",
  slug: createSlug("Rani Ki Vav"),
    city: "Patan",
    stateOrUT: "Gujarat",
    builtIn: "1063",
    description: "Rani Ki Vav, a UNESCO World Heritage Site, is a spectacular stepwell located in Patan. Built by Queen Udayamati in memory of her husband King Bhimdev I, it is a stunning example of Maru-Gurjara style of architecture. The stepwell is designed as an inverted temple, with seven levels of stairs and sculptural panels. The intricately carved sculptures depict various mythological themes, including the Dashavatars (ten incarnations of Lord Vishnu). The stepwell also has a well at the end, providing access to the water. Rani Ki Vav is a masterpiece of craftsmanship and a symbol of water conservation in ancient India.",
    media: "/heritages/rani-ki-vav.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1431/"
  },
  {
    name: "Sidi Saiyyed Mosque",
  slug: createSlug("Sidi Saiyyed Mosque"),
    city: "Ahmedabad",
    stateOrUT: "Gujarat",
    builtIn: "1573",
    description: "The Sidi Saiyyed Mosque is one of the most famous mosques in Ahmedabad, known for its exquisite and intricate stone lattice work. The mosque was built by Sidi Saiyyed, a general in the army of Sultan Shams-ud-Din Muzaffar Shah III. The mosque is renowned for its ten beautifully carved stone lattice windows, known as 'jalis,' depicting a tree of life. The intricate jalis are a masterpiece of craftsmanship and have become a symbol of Ahmedabad. The mosque's unique architectural style and its historical significance make it a prominent cultural landmark and a must-visit for tourists.",
    media: "/heritages/sidi-saiyyed-mosque.jpg",
    learnMoreLink: "https://ahmedabadcity.gov.in/portal/dynamic/view/424"
  },
  {
    name: "Somnath Temple",
  slug: createSlug("Somnath Temple"),
    city: "Veraval",
    stateOrUT: "Gujarat",
    builtIn: "1951",
    description: "Somnath Temple is a revered pilgrimage site and one of the twelve Jyotirlingas, or shrines of Lord Shiva. The temple has a long and turbulent history, having been destroyed and rebuilt multiple times. The present temple, which was reconstructed in the Chaulukya style of architecture, was completed in 1951. The temple's magnificent architecture, intricate carvings, and its location on the Arabian Sea coast make it a prominent religious and cultural landmark. The temple is a symbol of faith and resilience, attracting millions of devotees from all over the world.",
    media: "/heritages/somnath-temple.jpg",
    learnMoreLink: "https://somnath.org/"
  },
  {
    name: "Sun Temple, Modhera",
  slug: createSlug("Sun Temple, Modhera"),
    city: "Modhera",
    stateOrUT: "Gujarat",
    builtIn: "1026",
    description: "The Sun Temple in Modhera is a magnificent temple dedicated to the Sun God, Surya. Built by King Bhimdev I of the Solanki dynasty, the temple is a stunning example of the Maru-Gurjara architectural style. The temple complex consists of a stepwell, a sabha mandap (assembly hall), and the main temple, all intricately carved with sculptures of gods, goddesses, and various scenes from Hindu mythology. The temple is designed in such a way that the first rays of the sun fall on the idol of the Sun God. The temple's grand architecture and its spiritual significance make it a prominent historical and cultural landmark.",
    media: "/heritages/sun-temple-modhera.jpg",
    learnMoreLink: "https://mehsana.nic.in/en/tourist-place/modhera-sun-temple/"
  },
  {
    name: "Tomb of Mahabat Khan",
  slug: createSlug("Tomb of Mahabat Khan"),
    city: "Junagadh",
    stateOrUT: "Gujarat",
    builtIn: "19th Century",
    description: "The Tomb of Mahabat Khan is a beautiful mausoleum that serves as the burial place of the Nawab of Junagadh, Mahabat Khan II. The tomb is a unique blend of Indo-Islamic and European architectural styles. The intricate carvings, the minarets with winding staircases, and the unique design of the domes make it a prominent landmark in Junagadh. The tomb is known for its beautiful and delicate ornamentation. The tomb's historical significance and its beautiful architecture make it a must-visit for tourists and history enthusiasts. It is a testament to the region's rich cultural and architectural heritage.",
    media: "/heritages/tomb-of-mahabat-khan.jpg",
    learnMoreLink: "https://junagadh.nic.in/en/tourist-place/mahabat-makbara/"
  },
  {
    name: "Asigarh Fort",
  slug: createSlug("Asigarh Fort"),
    city: "Hansi",
    stateOrUT: "Haryana",
    builtIn: "10th Century",
    description: "Asigarh Fort is a historic fort with a long and storied past. The fort is a significant archaeological site and is a testament to the various dynasties that ruled the region. It is believed to have been a formidable military stronghold and has been controlled by various rulers, including the Tomar, Chauhan, and Ghaznavid dynasties. The fort's walls and bastions are still visible, and the ruins of the palace and other structures offer a glimpse into the architectural and military prowess of ancient India. The fort's historical significance and its beautiful location on a hillock make it a popular tourist destination.",
    media: "/heritages/asigarh-fort.jpg",
    learnMoreLink: "https://hansi.gov.in/en/tourist-place/asigarh-fort/"
  },
  {
    name: "Bhadrakali Temple",
  slug: createSlug("Bhadrakali Temple"),
    city: "Kurukshetra",
    stateOrUT: "Haryana",
    builtIn: "N/A",
    description: "The Bhadrakali Temple is a revered Hindu temple dedicated to Goddess Bhadrakali, a form of Goddess Durga. It is one of the 51 Shakti Peethas, or revered shrines, in India. The temple is a significant pilgrimage site, and its history is linked to the Mahabharata. It is believed that Lord Krishna and Arjuna visited the temple to seek the blessings of the Goddess before the Mahabharata war. The temple is known for its beautiful architecture and its serene ambiance. It is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/bhadrakali-temple.jpg",
    learnMoreLink: "https://www.kurukshetra.gov.in/places/maa-bhadrakali-temple/"
  },
  {
    name: "Channeti Buddha Stupa",
  slug: createSlug("Channeti Buddha Stupa"),
    city: "Jagadhri",
    stateOrUT: "Haryana",
    builtIn: "3rd Century BC",
    description: "The Channeti Buddha Stupa is an ancient Buddhist stupa that is of immense archaeological and historical significance. The stupa is a circular mound with a solid core and is believed to have been built by Emperor Ashoka. The stupa is a testament to the presence of Buddhism in the region. The site has been a source of ancient artifacts and is a significant pilgrimage site for Buddhists. The stupa's ruins and its historical context offer a glimpse into the region's rich and diverse religious history.",
    media: "/heritages/channeti-buddha-stupa.jpg",
    learnMoreLink: "https://yamunanagar.nic.in/en/tourist-place/channeti-buddha-stupa/"
  },
  {
    name: "Farukh Nagar Fort",
  slug: createSlug("Farukh Nagar Fort"),
    city: "Farrukhnagar",
    stateOrUT: "Haryana",
    builtIn: "1732",
    description: "Farukh Nagar Fort is a historical fortification built by the Mughal governor, Faujdar Khan. The fort's unique design, with its octagonal shape and a series of bastions, makes it a notable example of Mughal military architecture. The fort complex contains several historical structures, including a Sheesh Mahal (Palace of Mirrors) and a Baoli (stepwell). The fort's walls and gates are still visible, and the ruins offer a glimpse into the region's glorious past and its historical significance as a major trading hub on the ancient routes. The fort is a protected monument and a must-visit for history enthusiasts.",
    media: "/heritages/farukh-nagar-fort.jpg",
    learnMoreLink: "https://haryana.gov.in/places/farrukhnagar-fort/"
  },
  {
    name: "Kurukshetra",
  slug: createSlug("Kurukshetra"),
    city: "Kurukshetra",
    stateOrUT: "Haryana",
    builtIn: "N/A",
    description: "Kurukshetra is a city of immense historical and religious significance, as it is the battlefield of the Mahabharata and the place where Lord Krishna delivered the Bhagavad Gita to Arjuna. The city is a major pilgrimage center for Hindus, with numerous sacred sites, including the Brahma Sarovar and the Sannihit Sarovar. It is also a significant archaeological site, with a history dating back to the Rigvedic period. Kurukshetra's rich history and its spiritual importance make it a unique and fascinating destination for travelers seeking to connect with India's ancient past and mythology.",
    media: "/heritages/kurukshetra.jpg",
    learnMoreLink: "https://www.kurukshetra.gov.in/places/"
  },
  {
    name: "Panipat",
  slug: createSlug("Panipat"),
    city: "Panipat",
    stateOrUT: "Haryana",
    builtIn: "N/A",
    description: "Panipat is a historic city known for being the site of three significant battles that shaped the course of Indian history. The First Battle of Panipat in 1526 marked the beginning of Mughal rule in India. The Second Battle in 1556 led to the re-establishment of the Mughal Empire. The Third Battle in 1761 was a major conflict between the Marathas and the Afghan army. The city is home to several historical monuments, including the Ibrahim Lodi's Tomb and the Kala Amb Memorial. Panipat is a city with a rich and tumultuous history, serving as a reminder of the significant battles and political shifts that occurred in the region.",
    media: "/heritages/panipat.jpg",
    learnMoreLink: "https://panipat.gov.in/tourist-places/"
  },
  {
    name: "Rakhigarhi",
  slug: createSlug("Rakhigarhi"),
    city: "Rakhigarhi",
    stateOrUT: "Haryana",
    builtIn: "2600-1900 BC",
    description: "Rakhigarhi is an archaeological site of the Indus Valley Civilization and one of the largest and most ancient sites in the world. The site is a treasure trove of information about the Harappan civilization, with a history that dates back to the pre-Harappan period. The excavations have unearthed a well-planned city with a sophisticated drainage system, granaries, and residential complexes. The artifacts found at Rakhigarhi, including pottery, seals, and jewelry, provide valuable insights into the life and culture of this ancient civilization. The site is a significant archaeological landmark and a must-visit for those interested in the history of ancient India.",
    media: "/heritages/rakhigarhi.jpg",
    learnMoreLink: "https://hisar.gov.in/tourist-place/rakhigarhi/"
  },
  {
    name: "Surajkund",
  slug: createSlug("Surajkund"),
    city: "Faridabad",
    stateOrUT: "Haryana",
    builtIn: "10th Century",
    description: "Surajkund is an ancient stepped lake with a rich history. The lake is believed to have been built by the Tomar king, Surajpal, in the 10th century. The lake is a beautiful example of ancient water conservation techniques, with a series of steps leading down to the water. The lake is a significant historical and cultural site, and it is the venue for the famous Surajkund International Crafts Mela, an annual fair that showcases the art and culture of India. The lake's serene ambiance and its historical significance make it a popular tourist destination and a center for cultural activities.",
    media: "/heritages/surajkund.jpeg",
    learnMoreLink: "https://haryana.gov.in/places/surajkund/"
  },
  {
    name: "Tomb of Ibrahim Lodi",
  slug: createSlug("Tomb of Ibrahim Lodi"),
    city: "Panipat",
    stateOrUT: "Haryana",
    builtIn: "19th Century",
    description: "The Tomb of Ibrahim Lodi is a simple but historically significant monument. Ibrahim Lodi was the last Sultan of the Delhi Sultanate, and he was defeated and killed in the First Battle of Panipat in 1526. The tomb is a rectangular structure on a high platform and is a testament to the end of the Delhi Sultanate. The tomb is a significant historical site and a reminder of the major political changes that occurred in the region. The tomb's historical importance and its location in the city of Panipat make it a must-visit for those interested in Indian history.",
    media: "/heritages/tomb-of-ibrahim-lodi.jpg",
    learnMoreLink: "https://panipat.gov.in/en/tourist-place/tomb-of-ibrahim-lodi/"
  },
  {
    name: "Arki Fort",
  slug: createSlug("Arki Fort"),
    city: "Arki",
    stateOrUT: "Himachal Pradesh",
    builtIn: "1695",
    description: "Arki Fort is a historic hill fort in the Solan district of Himachal Pradesh. Built by Rana Prithvi Singh, a descendant of Rana Sabha Chand, the fort served as the palace and military stronghold of the Baghal State. The fort was later captured by the Gurkhas and used as their stronghold. The fort's architecture is a blend of Rajput and Mughal styles, with a number of halls and rooms adorned with intricate paintings in the 'Pahari School' of miniature paintings. These frescoes depict scenes from mythology, religion, and culture, and are a testament to the region's rich artistic heritage. The fort, though partly in ruins, offers a glimpse into the region's royal past.",
    media: "/heritages/arki-fort.jpg",
    learnMoreLink: "https://www.hp-tourism.in/arki-fort/"
  },
  {
    name: "Bhimakali Temple",
  slug: createSlug("Bhimakali Temple"),
    city: "Sarahan",
    stateOrUT: "Himachal Pradesh",
    builtIn: "13th Century",
    description: "The Bhimakali Temple is a revered Hindu shrine dedicated to Goddess Bhimakali, a form of Goddess Durga. It is one of the 51 Shakti Peethas and is a prominent pilgrimage site. The temple's architecture is a unique blend of Hindu and Buddhist styles, with a pagoda-shaped roof and intricate wood carvings. The temple has a rich history and is a living testament to the region's spiritual and cultural heritage. It is believed that the ear of Sati Devi fell here when Lord Vishnu cut her body into pieces. The temple is a significant landmark and a symbol of faith and devotion for the local people.",
    media: "/heritages/bhimakali-temple.jpg",
    learnMoreLink: "https://hpkinnaur.nic.in/en/tourism/temples/bhimakali-temple/"
  },
  {
    name: "Champavati Temple",
  slug: createSlug("Champavati Temple"),
    city: "Chamba",
    stateOrUT: "Himachal Pradesh",
    builtIn: "11th Century",
    description: "The Champavati Temple is a beautiful temple dedicated to the goddess Champavati. The temple is believed to have been built by King Sahil Varman, the founder of the Chamba dynasty, in memory of his daughter Champavati. The temple's unique architecture is a blend of Hindu and Islamic styles, with intricate carvings and a beautiful shikhara. The temple is located on the banks of the Ravi River and is a significant religious and cultural site. It is a testament to the rich architectural and artistic traditions of the Chamba region.",
    media: "/heritages/champavati-temple.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/chamba/champavati-temple.html"
  },
  {
    name: "Hidimba Temple",
  slug: createSlug("Hidimba Temple"),
    city: "Manali",
    stateOrUT: "Himachal Pradesh",
    builtIn: "1553",
    description: "The Hidimba Temple is a unique and ancient cave temple dedicated to Hidimba Devi, a character from the epic Mahabharata. The temple is famous for its distinctive pagoda-style architecture, with a conical roof and beautiful wood carvings on its doors. The temple is built around a huge rock that is worshipped as the deity's image. The temple is a significant religious and cultural site and a popular tourist destination. The temple's serene and tranquil surroundings, amidst a dense cedar forest, add to its spiritual and aesthetic appeal.",
    media: "/heritages/hidimba-temple.jpg",
    learnMoreLink: "https://www.himachaltourism.gov.in/destination/manali/hidimba-devi-temple/"
  },
  {
    name: "Jaitak Fort",
  slug: createSlug("Jaitak Fort"),
    city: "Nahan",
    stateOrUT: "Himachal Pradesh",
    builtIn: "1810",
    description: "Jaitak Fort is a historic hill fort perched on a steep hill in the Sirmaur district. The fort was built by the Gurkha leader Ranjor Singh Thapa and served as a military stronghold. The fort is a testament to the strategic genius of the Gurkha warriors who fought against the British forces. The fort's location offers a commanding view of the surrounding valleys and hills. Although now in ruins, the fort's remnants still provide a glimpse into the region's tumultuous past. The fort is a significant historical and archaeological site and a popular destination for trekkers and nature lovers.",
    media: "/heritages/jaitak-fort.jpg",
    learnMoreLink: "https://www.sirmour.nic.in/tourist-place/jaitak-fort/"
  },
  {
    name: "Kangra Fort",
  slug: createSlug("Kangra Fort"),
    city: "Kangra",
    stateOrUT: "Himachal Pradesh",
    builtIn: "4th Century BC",
    description: "Kangra Fort is one of the oldest and largest forts in India, with a history that dates back to ancient times. It was built by the Katoch dynasty, one of the oldest surviving royal lineages. The fort has a long and turbulent history, having been a witness to numerous invasions and battles. The fort's impressive walls and bastions, along with several ancient temples within its premises, make it a significant historical and architectural marvel. Although heavily damaged by an earthquake in 1905, the fort's ruins still stand as a testament to its grandeur and resilience. It is a must-visit for history enthusiasts and a popular tourist destination.",
    media: "/heritages/kangra-fort.jpg",
    learnMoreLink: "https://www.incredibleindia.gov.in/en/himachal-pradesh/dharamshala/kangra-fort"
  },
  {
    name: "Masroor Rock Cut Temples",
  slug: createSlug("Masroor Rock Cut Temples"),
    city: "Kangra",
    stateOrUT: "Himachal Pradesh",
    builtIn: "8th Century",
    description: "The Masroor Rock Cut Temples are a complex of ancient rock-cut Hindu temples. Often called the 'Himalayan Pyramids,' the temples are a masterpiece of ancient Indian rock-cut architecture. The temples are carved out of a single monolithic rock and are known for their intricate carvings and sculptures of gods and goddesses. The temples are a significant archaeological and religious site, reflecting the artistic and architectural brilliance of the region. The temples' location, with a stunning view of the Dhauladhar mountain range, adds to their spiritual and aesthetic appeal. The temples are a testament to the rich and diverse cultural heritage of Himachal Pradesh.",
    media: "/heritages/masroor-rockcut.jpg",
    learnMoreLink: "https://hpkangra.nic.in/tourist-place/masroor-temple/"
  },
  {
    name: "Naggar Castle",
  slug: createSlug("Naggar Castle"),
    city: "Kullu",
    stateOrUT: "Himachal Pradesh",
    builtIn: "1460",
    description: "Naggar Castle is a medieval castle located in Kullu. The castle was built by Raja Sidh Singh of Kullu and served as the official seat of the Kullu Rajas. The castle's unique architecture is a blend of Himalayan and Western styles, with its use of local stone and wood. The castle offers a panoramic view of the Beas Valley and the surrounding snow-capped mountains. The castle has been converted into a heritage hotel, allowing visitors to experience the royal lifestyle. It is a significant historical and cultural landmark and a popular tourist destination.",
    media: "/heritages/naggar-castle.jpg",
    learnMoreLink: "https://www.himachaltourism.gov.in/destination/kullu/naggar-castle/"
  },
  {
    name: "Nurpur Fort",
  slug: createSlug("Nurpur Fort"),
    city: "Nurpur",
    stateOrUT: "Himachal Pradesh",
    builtIn: "10th Century",
    description: "Nurpur Fort, formerly known as Dhameri Fort, is a historic fort that was built by the Rajput kings. The fort is known for its blend of Rajput and Mughal architectural styles. The fort contains an ancient temple of Lord Krishna and Meera Bai, which is one of the unique features of the fort. The fort, though partly in ruins, offers a glimpse into the region's rich and tumultuous past. The fort's location offers a breathtaking view of the surrounding landscape. The fort is a significant historical and cultural landmark and a must-visit for history enthusiasts.",
    media: "/heritages/nurpur-fort.jpg",
    learnMoreLink: "https://www.himachalpradeshtourism.gov.in/nurpur-fort/"
  },
  {
    name: "Tabo Monastery",
  slug: createSlug("Tabo Monastery"),
    city: "Tabo",
    stateOrUT: "Himachal Pradesh",
    builtIn: "996",
    description: "Tabo Monastery is one of the oldest and most important Buddhist monasteries in India and the Himalayas. It was founded by the Tibetan Buddhist lotsawa (translator) Rinchen Zangpo. The monastery is a significant center for Tibetan Buddhism and is known for its exquisite murals, stucco sculptures, and ancient manuscripts. The monastery's unique architecture and its serene location in the Spiti Valley make it a prominent pilgrimage and tourist destination. The monastery is a living testament to the rich spiritual and cultural heritage of the region and is a must-visit for those interested in Buddhism and ancient art.",
    media: "/heritages/tabo-monastery.jpg",
    learnMoreLink: "https://www.tabomonastery.org/"
  },
  {
    name: "Akhnoor Fort",
  slug: createSlug("Akhnoor Fort"),
    city: "Akhnoor",
    stateOrUT: "Jammu and Kashmir",
    builtIn: "1802",
    description: "Akhnoor Fort is a historic fort located on the banks of the Chenab River. The fort was built by Raja Almi Singh and is a beautiful example of the region's traditional architecture. The fort is known for its intricate carvings and frescoes, and it offers a magnificent view of the Chenab River. The fort has a rich history, having been a witness to numerous battles and political shifts. It is a significant archaeological and historical site, and it is a popular tourist destination. The fort's unique blend of architectural styles and its serene location make it a must-visit for history and nature lovers.",
    media: "/heritages/akhnoor-fort.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredibleindia/en/destinations/jammu/akhnoor-fort.html"
  },
  {
    name: "Amar Palace",
  slug: createSlug("Amar Palace"),
    city: "Jammu",
    stateOrUT: "Jammu and Kashmir",
    builtIn: "1890",
    description: "The Amar Mahal Palace is a magnificent palace that was built for Raja Amar Singh. The palace is a beautiful example of French chateau-style architecture and is a prominent landmark in the city. The palace has now been converted into a museum, housing a collection of paintings, artifacts, and royal memorabilia. The museum also has a beautiful library with a collection of rare books and manuscripts. The palace and its museum offer a glimpse into the rich history and culture of the Dogra dynasty and are a popular tourist destination.",
    media: "/heritages/amar-palace.jpg",
    learnMoreLink: "https://www.jktdc.co.in/destinations/amar-mahal-palace-museum.aspx"
  },
  {
    name: "Bahu Fort",
  slug: createSlug("Bahu Fort"),
    city: "Jammu",
    stateOrUT: "Jammu and Kashmir",
    builtIn: "18th Century",
    description: "Bahu Fort is a historic fort that stands on a rock face overlooking the Tawi River. The fort is believed to have been built by Raja Bahulochan and was later rebuilt by the Dogra rulers. The fort's architecture is a blend of traditional Indian and Mughal styles. The fort complex contains a temple dedicated to the goddess Kali, which is a major pilgrimage site. The fort is a significant archaeological and historical site, and it offers a panoramic view of the city. The fort's historical importance and its serene location make it a must-visit for tourists.",
    media: "/heritages/bahu-fort.jpg",
    learnMoreLink: "https://jammu.nic.in/en/tourist-place/bahu-fort/"
  },
  {
    name: "Mughal Garden",
  slug: createSlug("Mughal Garden"),
    city: "Srinagar",
    stateOrUT: "Jammu and Kashmir",
    builtIn: "1620",
    description: "The Mughal Gardens in Srinagar are a series of beautiful gardens that were built by the Mughal emperors. The gardens are a masterpiece of Persian-style architecture, with terraced lawns, cascading fountains, and intricate water channels. The gardens are a testament to the Mughal love for nature and their artistic genius. The gardens are a popular tourist destination and a perfect place to relax and enjoy the serene beauty of the surroundings. The gardens' historical significance and their stunning beauty make them a must-visit for tourists.",
    media: "/heritages/mughal-garden.jpg",
    learnMoreLink: "https://srinagar.nic.in/tourist-place/mughal-gardens/"
  },
  {
    name: "Shankaracharya Temple",
  slug: createSlug("Shankaracharya Temple"),
    city: "Srinagar",
    stateOrUT: "Jammu and Kashmir",
    builtIn: "200 BC",
    description: "The Shankaracharya Temple is a revered Hindu temple dedicated to Lord Shiva. The temple is located on the Shankaracharya Hill and is one of the oldest temples in the region. The temple is believed to have been built by the son of Emperor Ashoka and was later renovated by Adi Shankaracharya. The temple's architecture is a blend of traditional Indian and Kashmiri styles. The temple offers a panoramic view of the city of Srinagar and the Dal Lake. The temple is a significant pilgrimage site and a symbol of the region's rich spiritual and cultural heritage.",
    media: "/heritages/shankaracharya-temple.jpg",
    learnMoreLink: "https://srinagar.nic.in/tourist-place/shankaracharya-temple/"
  },
  {
    name: "Jagannath Temple",
  slug: createSlug("Jagannath Temple"),
    city: "Ranchi",
    stateOrUT: "Jharkhand",
    builtIn: "1691",
    description: "The Jagannath Temple in Ranchi is a significant Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu. Built by King Thakur Ani Nath Shahdeo of the Barkagarh Jagannathpur kingdom, the temple is a smaller replica of the famous Jagannath Temple in Puri, Odisha. It is situated on a hillock and is known for its beautiful architecture and serene ambiance. The temple is a prominent pilgrimage site and is particularly famous for its annual Rath Yatra festival, which attracts a large number of devotees. The temple's historical significance and its spiritual importance make it a key cultural and religious landmark in Jharkhand.",
    media: "/heritages/jagannath-temple.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/ranchi/jagannath-temple.html"
  },
  {
    name: "Maluti Temples",
  slug: createSlug("Maluti Temples"),
    city: "Dumka",
    stateOrUT: "Jharkhand",
    builtIn: "17th-19th Century",
    description: "The Maluti temples are a cluster of ancient terracotta temples known for their intricate carvings and unique architectural style. The temples were built by the kings of the Baj Basanta dynasty and are a testament to the region's rich cultural and religious heritage. The temples are adorned with beautiful terracotta panels depicting scenes from Hindu epics, including the Ramayana and Mahabharata. The temples, although in a semi-dilapidated condition, are a significant archaeological and historical site. They are a rare example of Bengal temple architecture in Jharkhand and are a must-visit for history and art enthusiasts.",
    media: "/heritages/maluti-temple.jpg",
    learnMoreLink: "https://jharkhandtourism.gov.in/destinations/temple/maluti-terracotta-temples"
  },
  {
    name: "Navratangarh",
  slug: createSlug("Navratangarh"),
    city: "Gumla",
    stateOrUT: "Jharkhand",
    builtIn: "1636",
    description: "Navratangarh, meaning 'Nine-storied Fort,' was the capital of the Nagvanshi dynasty. The fort was built by King Durjan Shah and served as a major military stronghold and a center of power for the Nagvanshi rulers. The fort's unique five-storied palace, with its water-gate and moat, is a testament to the architectural and engineering prowess of the Nagvanshi dynasty. Although now in ruins, the fort's remnants offer a glimpse into the region's glorious past and its historical significance. The site is a significant archaeological landmark and a must-visit for history enthusiasts.",
    media: "/heritages/navratagarh.jpg",
    learnMoreLink: "https://gumla.nic.in/en/tourist-place/navratnagarh/"
  },
  {
    name: "Palamu Fort",
  slug: createSlug("Palamu Fort"),
    city: "Palamu",
    stateOrUT: "Jharkhand",
    builtIn: "17th Century",
    description: "The Palamu Fort consists of two historical forts: the Old Fort and the New Fort. Built by the Chero rulers, the forts were a major military stronghold and a center of power in the region. The forts are a blend of Islamic and Chero architectural styles. The fort complex contains several historical structures, including a mosque, and a series of watchtowers. The forts' strategic location and formidable fortifications made them a key defense point. Although now in ruins, the forts' remnants offer a glimpse into the region's rich and tumultuous past and are a significant archaeological and historical site.",
    media: "/heritages/palamu-fort.jpg",
    learnMoreLink: "https://palamu.nic.in/en/tourist-place/palamu-fort/"
  },
  {
    name: "Rajrappa",
  slug: createSlug("Rajrappa"),
    city: "Ramgarh",
    stateOrUT: "Jharkhand",
    builtIn: "N/A",
    description: "Rajrappa is a popular pilgrimage center known for the Chhinnamasta Temple. The temple is dedicated to Goddess Chhinnamasta, a form of Goddess Kali. The temple is situated at the confluence of the Damodar and Bhairavi rivers, a location of spiritual significance. The temple's unique Tantric style of architecture and its rich history attract a large number of devotees. The site is also known for its beautiful waterfalls and natural beauty, making it a popular tourist destination. Rajrappa is a blend of natural beauty and spiritual sanctity, offering a unique and serene experience to visitors.",
    media: "/heritages/rajrappa.jpg",
    learnMoreLink: "https://ramgarh.nic.in/en/tourist-place/rajrappa-temple/"
  },
  {
    name: "Shahpur Fort",
  slug: createSlug("Shahpur Fort"),
    city: "Palamu",
    stateOrUT: "Jharkhand",
    builtIn: "17th-18th Century",
    description: "Shahpur Fort is a historic fortification that stands on the banks of the North Koel River. The fort was built by the descendants of Raja Medini Rai and is a testament to the region's rich history. The fort's unique architecture, with its use of local stone and intricate carvings, makes it a notable example of the region's traditional style. Although now in ruins, the fort's remnants offer a glimpse into the region's glorious past and its historical significance. The fort is a protected monument and a must-visit for history enthusiasts.",
    media: "/heritages/shahpur-fort.jpeg",
    learnMoreLink: "https://palamu.nic.in/en/tourist-place/shahpur-fort/"
  },
  {
    name: "Sun Temple",
  slug: createSlug("Sun Temple"),
    city: "Ranchi",
    stateOrUT: "Jharkhand",
    builtIn: "1994",
    description: "The Sun Temple in Ranchi is a unique and magnificent temple dedicated to the solar deity, Surya. The temple is built in the form of a massive chariot with 18 wheels and seven horses, symbolizing the Sun God's chariot. The temple's architectural design is a beautiful example of modern temple architecture. The temple is a significant pilgrimage site, attracting a large number of devotees, especially during the Chhath festival. The temple's serene ambiance and its stunning architectural design make it a popular tourist destination.",
    media: "/heritages/sun-temple.png",
    learnMoreLink: "https://tourism.jharkhand.gov.in/explore-the-state/religious/sun-temple-bundu"
  },
  {
    name: "Tagore Hill",
  slug: createSlug("Tagore Hill"),
    city: "Ranchi",
    stateOrUT: "Jharkhand",
    builtIn: "1912",
    description: "Tagore Hill is a historical landmark with a rich history. The hill is named after the renowned poet and Nobel laureate Rabindranath Tagore, whose elder brother, Jyotirindranath Tagore, built a house and a Brahmo temple on the hill. The hill served as a retreat for the Tagore family and a center for literary and artistic activities. The hill offers a panoramic view of the city of Ranchi and is a popular tourist destination. The hill is a symbol of the region's rich literary and cultural heritage.",
    media: "/heritages/tagore-hill.jpg",
    learnMoreLink: "https://tourism.jharkhand.gov.in/explore-the-state/religious/tagore-hill"
  },
  {
    name: "Badami Cave Temples",
  slug: createSlug("Badami Cave Temples"),
    city: "Badami",
    stateOrUT: "Karnataka",
    builtIn: "6th Century",
    description: "The Badami Cave Temples are a complex of four rock-cut temples located in the town of Badami. Carved out of sandstone cliffs, these temples are a stunning example of Chalukyan rock-cut architecture. Each of the four caves is dedicated to a different deity: the first to Lord Shiva, the second and third to Lord Vishnu, and the fourth to Jain Tirthankaras. The temples are known for their intricate carvings, beautiful sculptures, and frescoes that depict scenes from Hindu mythology and the lives of the deities. The temples are a significant archaeological and historical site, and they offer a glimpse into the region's rich artistic and religious heritage.",
    media: "/heritages/badami-cave-temples.jpg",
    learnMoreLink: "https://badami.gov.in/en/tourist-place/badami-cave-temples/"
  },
  {
    name: "Belur",
  slug: createSlug("Belur"),
    city: "Belur",
    stateOrUT: "Karnataka",
    builtIn: "12th Century",
    description: "Belur is a historic town and a significant pilgrimage site, known for its magnificent Hoysala temples. The most famous is the Chennakeshava Temple, a masterpiece of Hoysala architecture. The temple is known for its intricate carvings and sculptures that depict scenes from Hindu mythology and the lives of the gods and goddesses. The temple's unique star-shaped platform and its detailed carvings are a testament to the artistic and architectural brilliance of the Hoysala dynasty. Belur is a major cultural and historical landmark and a must-visit for those interested in Indian art and architecture.",
    media: "/heritages/belur.jpg",
    learnMoreLink: "https://chikkamagaluru.nic.in/en/tourist-place/belur/"
  },
  {
    name: "Dwadasha Jyotirlinga",
  slug: createSlug("Dwadasha Jyotirlinga"),
    city: "Nanjangud",
    stateOrUT: "Karnataka",
    builtIn: "N/A",
    description: "Dwadasha Jyotirlinga refers to the twelve sacred shrines dedicated to Lord Shiva. These shrines, located across India, are considered the most revered pilgrimage sites for Shiva devotees. The term 'Jyotirlinga' means 'Linga of light,' and it is believed that Shiva manifested himself as a column of light at these sites. The temples are a blend of different architectural styles and are known for their spiritual significance. Each of the twelve shrines has a unique history and mythology associated with it, making them a significant part of India's religious and cultural heritage.",
    media: "/heritages/dwadasha-jyotirlinga.jpg",
    learnMoreLink: "https://www.karnatakatemples.com/dwadasha-jyotirlinga-temples/"
  },
  {
    name: "Gol Gumbaz",
  slug: createSlug("Gol Gumbaz"),
    city: "Vijayapura",
    stateOrUT: "Karnataka",
    builtIn: "1656",
    description: "Gol Gumbaz is the magnificent mausoleum of Mohammed Adil Shah, the seventh ruler of the Adil Shahi dynasty. It is a masterpiece of Deccan architecture and is known for its massive dome, which is the second largest in the world. The mausoleum is famous for its whispering gallery, where even the softest whisper can be heard across the dome. The tomb is a grand structure of dark grey basalt and is a prominent landmark in Vijayapura. The mausoleum and its unique architectural features are a testament to the region's rich and diverse history and its artistic legacy.",
    media: "/heritages/gol-gumbaz.jpg",
    learnMoreLink: "https://bijapur.nic.in/en/tourist-place/gol-gumbaz/"
  },
  {
    name: "Halebeedu",
  slug: createSlug("Halebeedu"),
    city: "Halebeedu",
    stateOrUT: "Karnataka",
    builtIn: "12th Century",
    description: "Halebeedu, meaning 'Old City,' was the capital of the Hoysala Empire. The town is known for its magnificent temples, which are a masterpiece of Hoysala architecture. The most famous is the Hoysaleswara Temple, which is dedicated to Lord Shiva. The temple is known for its intricate and detailed carvings that depict scenes from Hindu mythology, animals, and daily life. The temple is a significant archaeological and historical site and a testament to the artistic and architectural brilliance of the Hoysala dynasty. Halebeedu is a must-visit for those interested in Indian art and architecture.",
    media: "/heritages/halebeedu.jpeg",
    learnMoreLink: "https://chikkamagaluru.nic.in/en/tourist-place/halebeedu/"
  },
  {
    name: "Hampi",
  slug: createSlug("Hampi"),
    city: "Hampi",
    stateOrUT: "Karnataka",
    builtIn: "14th Century",
    description: "Hampi is a UNESCO World Heritage Site and a historic town that was the capital of the Vijayanagara Empire. The town is a treasure trove of historical ruins, with ancient temples, palaces, and monuments scattered across a vast area. The Virupaksha Temple, the Vittala Temple, and the Elephant Stables are some of the most famous landmarks in Hampi. The town's unique landscape, with its massive boulders and rocky hills, adds to its unique charm. Hampi is a significant archaeological and historical site, offering a glimpse into the glory of the Vijayanagara Empire and its architectural prowess.",
    media: "/heritages/hampi.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/241/"
  },
  {
    name: "Jama Mosque",
  slug: createSlug("Jama Mosque"),
    city: "Bijapur",
    stateOrUT: "Karnataka",
    builtIn: "1578",
    description: "The Jama Mosque in Bijapur is a grand mosque built by the Adil Shahi ruler, Ali Adil Shah I. It is a masterpiece of Deccan Islamic architecture and is known for its massive dome and grand courtyard. The mosque's main hall is a magnificent structure with beautiful arches and intricate carvings. The mosque also has a large minbar, or pulpit, that is used for sermons. The mosque is a significant religious and cultural landmark and a symbol of the region's rich history and architectural legacy.",
    media: "/heritages/jama-mosque.jpeg",
    learnMoreLink: "https://bijapur.nic.in/en/tourist-place/jama-masjid/"
  },
  {
    name: "Pattadakal",
  slug: createSlug("Pattadakal"),
    city: "Pattadakal",
    stateOrUT: "Karnataka",
    builtIn: "7th-8th Century",
    description: "Pattadakal is a UNESCO World Heritage Site and a significant historical site that was the capital of the Chalukya dynasty. The site is a fusion of different architectural styles, with temples built in both North Indian Nagara and South Indian Dravida styles. The temples are known for their intricate carvings and sculptures that depict scenes from Hindu mythology. The most famous temples are the Virupaksha Temple and the Mallikarjuna Temple, which are magnificent examples of Chalukyan architecture. Pattadakal is a living testament to the artistic and architectural brilliance of the Chalukya dynasty and a must-visit for history and art enthusiasts.",
    media: "/heritages/pattadakal.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/239/"
  },
  {
    name: "Sacred Ensembles of Hoysala",
  slug: createSlug("Sacred Ensembles of Hoysala"),
    city: "Belur, Halebeedu and Somanathapura",
    stateOrUT: "Karnataka",
    builtIn: "12th-13th Century",
    description: "The Sacred Ensembles of the Hoysala are a group of three magnificent temples located in Belur, Halebeedu, and Somanathapura. These temples, which are now a UNESCO World Heritage Site, are a testament to the artistic and architectural brilliance of the Hoysala dynasty. The temples are known for their intricate carvings and sculptures that depict scenes from Hindu mythology, as well as a variety of animals and intricate patterns. The temples are a significant archaeological and historical site, offering a glimpse into the region's rich cultural and artistic heritage. The ensembles are a must-visit for those interested in Indian art and architecture.",
    media: "/heritages/sacred-ensembles-of-hoysala.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1672/"
  },
  {
    name: "Srirangapatna",
  slug: createSlug("Srirangapatna"),
    city: "Srirangapatna",
    stateOrUT: "Karnataka",
    builtIn: "9th Century",
    description: "Srirangapatna is a historic town with a rich history, having served as the capital of the Mysore kingdom under Tipu Sultan. The town is surrounded by the Kaveri River and is home to numerous historical monuments, including the Daria Daulat Bagh, the Tipu Sultan's Palace, and the Gumbaz, Tipu Sultan's mausoleum. The town is a significant pilgrimage site for Hindus, with the Ranganathaswamy Temple being a major attraction. The town's historical significance and its beautiful location on the river make it a popular tourist destination. Srirangapatna is a living testament to the region's long and rich history and its architectural legacy.",
    media: "/heritages/srirangapatna.jpg",
    learnMoreLink: "https://mysore.nic.in/en/tourist-place/srirangapatna/"
  },
  {
    name: "Ambalaval Military Barracks",
  slug: createSlug("Ambalaval Military Barracks"),
    city: "Thiruvananthapuram",
    stateOrUT: "Kerala",
    builtIn: "1895",
    description: "The Ambalaval Military Barracks is a historic structure that served as a training ground for the Travancore state's military. The barracks were built in the late 19th century and are a testament to the region's rich military history. The barracks are a beautiful example of the region's traditional architecture, with a blend of Kerala and European styles. The barracks are a protected monument and a must-visit for history enthusiasts. The barracks' historical significance and their unique architecture make them a prominent landmark in the city.",
    media: "/heritages/ambalaval-military-barracks.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/thiruvananthapuram/ambalaval-military-barracks.html"
  },
  {
    name: "Anchuthengu Fort",
  slug: createSlug("Anchuthengu Fort"),
    city: "Anchuthengu",
    stateOrUT: "Kerala",
    builtIn: "1695",
    description: "Anchuthengu Fort is a historic fortification that was built by the British East India Company. The fort was a major military stronghold and a center of power for the British in the region. The fort's architecture is a blend of European and Indian styles, with a series of bastions and watchtowers. The fort's strategic location on the coast made it a key defense point. Although now in ruins, the fort's remnants offer a glimpse into the region's colonial past and its historical significance. The fort is a protected monument and a must-visit for history enthusiasts.",
    media: "/heritages/anchuthengy-fort.jpg",
    learnMoreLink: "https://tourism.kerala.gov.in/destinations/anchuthengu"
  },
  {
    name: "Aspinwall House",
  slug: createSlug("Aspinwall House"),
    city: "Kochi",
    stateOrUT: "Kerala",
    builtIn: "1867",
    description: "Aspinwall House is a historic building that was built by the British trading company, Aspinwall and Company. The building is a beautiful example of colonial architecture, with a blend of European and traditional Kerala styles. The building has been a venue for the Kochi-Muziris Biennale, a contemporary art festival. The building's unique architecture and its historical significance make it a prominent cultural landmark in the city. The Aspinwall House is a living testament to the region's rich history and its architectural legacy.",
    media: "/heritages/aspinwall-house.jpg",
    learnMoreLink: "https://www.aspinwallhouse.in/"
  },
  {
    name: "Bekal Fort",
  slug: createSlug("Bekal Fort"),
    city: "Bekal",
    stateOrUT: "Kerala",
    builtIn: "1650",
    description: "Bekal Fort is a massive historical fort located on the Arabian Sea coast. It is one of the largest and best-preserved forts in Kerala. The fort's unique architecture is a blend of Hindu and Islamic styles, with a series of bastions and a watchtower. The fort's strategic location on the coast made it a key defense point. The fort has been a witness to numerous battles and has been under the control of various dynasties, including the Ikkeri Nayakas and Tipu Sultan. The fort is a significant archaeological and historical site and a popular tourist destination.",
    media: "/heritages/bekal-fort.jpg",
    learnMoreLink: "https://kasaragod.nic.in/en/tourist-place/bekal-fort/"
  },
  {
    name: "Edakkal Caves",
  slug: createSlug("Edakkal Caves"),
    city: "Wayanad",
    stateOrUT: "Kerala",
    builtIn: "N/A",
    description: "The Edakkal Caves are two natural caves with a rich history. The caves are known for their ancient rock carvings, or petroglyphs, which are believed to date back to the Neolithic period. The carvings depict various symbols, human and animal figures, and a series of geometric patterns. The caves are a significant archaeological and historical site, offering a glimpse into the life and culture of ancient people. The caves are a popular tourist destination and a must-visit for those interested in history and ancient art.",
    media: "/heritages/edakkal-caves.jpg",
    learnMoreLink: "https://wayanad.gov.in/en/tourist-place/edakkal-caves/"
  },
  {
    name: "Krishnapuram Palace",
  slug: createSlug("Krishnapuram Palace"),
    city: "Kayamkulam",
    stateOrUT: "Kerala",
    builtIn: "18th Century",
    description: "Krishnapuram Palace is a magnificent palace that was built by the Travancore king, Anizham Thirunal Marthanda Varma. The palace is a beautiful example of Kerala's traditional architectural style, with a blend of indigenous and colonial influences. The palace has now been converted into a museum, housing a collection of sculptures, paintings, and artifacts that offer a glimpse into the region's rich cultural heritage. The palace is a significant historical and cultural landmark and a popular tourist destination.",
    media: "/heritages/kristinapuram-palace.jpg",
    learnMoreLink: "https://alappuzha.nic.in/en/tourist-place/krishnapuram-palace/"
  },
  {
    name: "Mattancherry Palace",
  slug: createSlug("Mattancherry Palace"),
    city: "Kochi",
    stateOrUT: "Kerala",
    builtIn: "1555",
    description: "Mattancherry Palace, also known as the Dutch Palace, is a historic palace that was built by the Portuguese and later renovated by the Dutch. The palace is a beautiful example of Kerala's traditional architectural style, with a blend of indigenous and colonial influences. The palace has now been converted into a museum, housing a collection of murals depicting scenes from Hindu mythology, royal portraits, and artifacts. The palace's unique architecture and its historical significance make it a prominent cultural landmark in the city.",
    media: "/heritages/mattan-cherry-palace.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/kochi/mattancherry-palace.html"
  },
  {
    name: "Padmanabhaswamy Temple",
  slug: createSlug("Padmanabhaswamy Temple"),
    city: "Thiruvananthapuram",
    stateOrUT: "Kerala",
    builtIn: "8th Century",
    description: "The Sri Padmanabhaswamy Temple is a revered Hindu temple dedicated to Lord Vishnu. The temple's unique architecture is a blend of Kerala and Tamil architectural styles, with a magnificent gopuram and a series of corridors and halls. The temple is known for its immense wealth, which is stored in its secret vaults. The temple is a significant pilgrimage site and a symbol of the region's rich spiritual and cultural heritage. The temple's historical significance and its beautiful architecture make it a must-visit for devotees and tourists.",
    media: "/heritages/padmanabhaswamy-temple.jpg",
    learnMoreLink: "https://sreepadmanabhaswamytemple.org/en/home"
  },
  {
    name: "Pazhassi Raja's Tomb",
  slug: createSlug("Pazhassi Raja's Tomb"),
    city: "Mananthavady",
    stateOrUT: "Kerala",
    builtIn: "1906",
    description: "Pazhassi Raja's Tomb is a memorial dedicated to Kerala Varma Pazhassi Raja, a king of the Kottayam royal dynasty who fought against the British East India Company. The tomb is a simple but historically significant monument. The tomb is a protected monument and a must-visit for history enthusiasts. The tomb's historical importance and its location in the city of Mananthavady make it a must-visit for those interested in Indian history.",
    media: "/heritages/pazhassi-rajas-tomb.jpg",
    learnMoreLink: "https://wayanad.gov.in/en/tourist-place/pazhassi-tomb/"
  },
  {
    name: "Poonjar Palace",
  slug: createSlug("Poonjar Palace"),
    city: "Poonjar",
    stateOrUT: "Kerala",
    builtIn: "15th Century",
    description: "Poonjar Palace is a magnificent palace that was built by the Poonjar Royal family. The palace is a beautiful example of traditional Kerala architectural style, with a blend of indigenous and colonial influences. The palace has now been converted into a museum, housing a collection of artifacts, including weapons, furniture, and a unique replica of the 'Chuttuvilakku,' a traditional lamp. The palace is a significant historical and cultural landmark and a popular tourist destination.",
    media: "/heritages/poonjar-palace.jpg",
    learnMoreLink: "https://kottayam.nic.in/en/tourist-place/poonjar-palace/"
  },
  {
    name: "Alchi Monastery",
  slug: createSlug("Alchi Monastery"),
    city: "Alchi",
    stateOrUT: "Ladakh",
    builtIn: "10th Century",
    description: "Alchi Monastery is one of the oldest and most famous monasteries in Ladakh. It is a significant center of Buddhist learning and is known for its beautiful murals and sculptures. The monastery complex consists of a series of temples, including the Sumtsek and the Lha-khang Soma, which are adorned with intricate wall paintings that reflect a unique blend of Indian, Tibetan, and Central Asian styles. The monastery's serene and tranquil surroundings, on the banks of the Indus River, add to its spiritual and aesthetic appeal. Alchi Monastery is a significant historical and cultural landmark.",
    media: "/heritages/alchi-monastery.jpg",
    learnMoreLink: "https://leh.nic.in/en/tourism/alchi-monastery/"
  },
  {
    name: "Basgo Monastery",
  slug: createSlug("Basgo Monastery"),
    city: "Basgo",
    stateOrUT: "Ladakh",
    builtIn: "17th Century",
    description: "Basgo Monastery is a historic monastery and a former royal residence of the Namgyal dynasty. The monastery is situated on a steep hill and is known for its beautiful architecture and its stunning views of the surrounding landscape. The monastery complex consists of several temples, including the Chamba Lhakhang and the Serzang Temple. The monastery is a significant pilgrimage site and is known for its unique blend of Buddhist and local architectural styles. Basgo Monastery is a living testament to the region's rich history and its spiritual heritage.",
    media: "/heritages/basgo-monastery.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredibleindia/en/destinations/leh/basgo-monastery.html"
  },
  {
    name: "Lamayuru Monastery",
  slug: createSlug("Lamayuru Monastery"),
    city: "Lamayuru",
    stateOrUT: "Ladakh",
    builtIn: "10th Century",
    description: "Lamayuru Monastery, also known as 'Yungdrung Tharpaling,' is one of the oldest and most significant monasteries in Ladakh. The monastery is situated amidst a stunning lunar-like landscape, which is believed to be the former bed of a lake. The monastery is a significant center of Tibetan Buddhism and is known for its unique 'Yungdrung' or Swastika symbol, which represents the ancient Bon religion. The monastery is home to a large number of monks and a collection of ancient paintings and manuscripts. Lamayuru Monastery is a significant pilgrimage and tourist destination.",
    media: "/heritages/lamayuru-monastery.jpg",
    learnMoreLink: "https://leh.nic.in/en/tourism/lamayuru-monastery/"
  },
  {
    name: "Leh Palace",
  slug: createSlug("Leh Palace"),
    city: "Leh",
    stateOrUT: "Ladakh",
    builtIn: "17th Century",
    description: "Leh Palace is a historic royal palace and a former residence of the Namgyal dynasty. The palace is a nine-story building that is a smaller replica of the Potala Palace in Lhasa, Tibet. The palace is a magnificent example of Tibetan-style architecture, with its towering walls and intricate woodwork. The palace has now been converted into a museum, housing a collection of royal memorabilia, including paintings, jewelry, and artifacts. The palace offers a panoramic view of the city of Leh and the surrounding mountains, making it a popular tourist destination.",
    media: "/heritages/leh-palace.jpg",
    learnMoreLink: "https://leh.nic.in/en/tourism/leh-palace/"
  },
  {
    name: "Shanti Stupa",
  slug: createSlug("Shanti Stupa"),
    city: "Leh",
    stateOrUT: "Ladakh",
    builtIn: "1991",
    description: "Shanti Stupa is a magnificent Buddhist stupa built by a Japanese Buddhist monk, Gyomyo Nakamura. The stupa is a symbol of peace and non-violence and is known for its beautiful architecture and its serene ambiance. The stupa is a significant pilgrimage site and a popular tourist destination. The stupa offers a panoramic view of the city of Leh and the surrounding mountains, making it a must-visit for tourists. The stupa is a testament to the region's rich spiritual and cultural heritage and a symbol of peace and harmony.",
    media: "/heritages/shanti-stupa.jpg",
    learnMoreLink: "https://leh.nic.in/en/tourism/shanti-stupa/"
  },
  {
    name: "Stok Palace",
  slug: createSlug("Stok Palace"),
    city: "Stok",
    stateOrUT: "Ladakh",
    builtIn: "1825",
    description: "Stok Palace is a historic royal palace and a former residence of the Namgyal dynasty. The palace is a beautiful example of traditional Ladakhi architecture and is a prominent landmark in the region. The palace has now been converted into a museum, housing a collection of royal memorabilia, including crowns, jewelry, and ceremonial dresses. The palace is still the residence of the royal family, and a part of it has been converted into a heritage hotel. The palace offers a panoramic view of the Indus Valley and the surrounding mountains, making it a popular tourist destination.",
    media: "/heritages/stok-palace.jpg",
    learnMoreLink: "https://leh.nic.in/en/tourism/stok-palace/"
  },
  {
    name: "Agatti Lighthouse",
  slug: createSlug("Agatti Lighthouse"),
    city: "Agatti",
    stateOrUT: "Lakshadweep",
    builtIn: "N/A",
    description: "The Agatti Lighthouse is a prominent landmark on the island of Agatti. The lighthouse plays a crucial role in guiding ships and boats in the surrounding waters. The lighthouse offers a panoramic view of the island, the lagoon, and the vast expanse of the Arabian Sea. It is a popular tourist spot and a must-visit for its stunning views. The lighthouse's serene surroundings and its historical significance make it a key landmark in the region.",
    media: "/heritages/agatti-lighthouse.jpg",
    learnMoreLink: "https://lakshadweep.gov.in/lighthouse-on-agatti-island/"
  },
  {
    name: "Archaeological Museum",
  slug: createSlug("Archaeological Museum"),
    city: "Kavaratti",
    stateOrUT: "Lakshadweep",
    builtIn: "N/A",
    description: "The Archaeological Museum in Kavaratti is a significant cultural institution that showcases the rich history and cultural heritage of the Lakshadweep Islands. The museum houses a collection of ancient artifacts, including pottery, coins, and traditional tools, which provide valuable insights into the lives of the early inhabitants of the islands. The museum is a must-visit for history enthusiasts and those interested in learning about the unique culture and traditions of the region.",
    media: "/heritages/archeological-museum.jpg",
    learnMoreLink: "https://lakshadweeptourism.com/museums-of-lakshadweep/"
  },
  {
    name: "Kalpeni Juma Mosque",
  slug: createSlug("Kalpeni Juma Mosque"),
    city: "Kalpeni",
    stateOrUT: "Lakshadweep",
    builtIn: "N/A",
    description: "The Kalpeni Juma Mosque is a significant religious site on the island of Kalpeni. The mosque is known for its beautiful architecture and its peaceful ambiance. It is a central place of worship for the local community and a symbol of the island's rich religious heritage. The mosque's unique design and its spiritual significance make it a prominent landmark in the region. It is a must-visit for those interested in learning about the culture and traditions of the local people.",
    media: "/heritages/kalpeni-juma-mosque.jpg",
    learnMoreLink: "https://lakshadweep.gov.in/places-of-worship/"
  },
  {
    name: "Kavaratti Ujra Mosque",
  slug: createSlug("Kavaratti Ujra Mosque"),
    city: "Kavaratti",
    stateOrUT: "Lakshadweep",
    builtIn: "N/A",
    description: "The Kavaratti Ujra Mosque is a major religious landmark on the island of Kavaratti. The mosque is known for its beautiful architecture and its intricate wood carvings. The mosque's interior is adorned with ancient paintings and a series of manuscripts that are a testament to the region's rich spiritual and cultural heritage. The mosque is a significant pilgrimage site and a central place of worship for the local community. It is a must-visit for those interested in the history and traditions of the Lakshadweep Islands.",
    media: "/heritages/kavaratti-ujra-mosque.jpeg",
    learnMoreLink: "https://lakshadweep.gov.in/places-of-worship/"
  },
  {
    name: "Minicoy Lighthouse",
  slug: createSlug("Minicoy Lighthouse"),
    city: "Minicoy",
    stateOrUT: "Lakshadweep",
    builtIn: "1885",
    description: "The Minicoy Lighthouse is a historic lighthouse that was built by the British. It is one of the oldest lighthouses in the Lakshadweep Islands and a prominent landmark in the region. The lighthouse plays a crucial role in guiding ships and boats in the surrounding waters. The lighthouse offers a panoramic view of the island, the lagoon, and the vast expanse of the Arabian Sea. The lighthouse's serene surroundings and its historical significance make it a key landmark in the region.",
    media: "/heritages/minicoy-lighthouse.jpg",
    learnMoreLink: "https://lakshadweep.gov.in/lighthouse-on-minicoy-island/"
  },
  {
    name: "Bhedaghat",
  slug: createSlug("Bhedaghat"),
    city: "Jabalpur",
    stateOrUT: "Madhya Pradesh",
    builtIn: "N/A",
    description: "Bhedaghat is a natural wonder known for its spectacular marble rocks and the majestic Dhuandhar Falls. The Narmada River flows through a gorge of white marble, creating a beautiful and serene environment. The marble rocks, which are over 100 feet high, are a stunning example of nature's artistry. The Dhuandhar Falls, meaning 'smoke cascade,' are a powerful waterfall that creates a misty spray. Bhedaghat is a popular tourist destination, offering a unique blend of natural beauty and geological significance.",
    media: "/heritages/bhedaghat.jpg",
    learnMoreLink: "https://jabalpur.nic.in/en/tourist-place/bhedaghat/"
  },
  {
    name: "Bhimbetka Rock Shelters",
  slug: createSlug("Bhimbetka Rock Shelters"),
    city: "Bhopal",
    stateOrUT: "Madhya Pradesh",
    builtIn: "N/A",
    description: "The Bhimbetka Rock Shelters are a UNESCO World Heritage Site and a treasure trove of ancient art. The rock shelters are a series of natural caves that contain rock paintings from the Palaeolithic and Mesolithic periods. The paintings, which depict scenes from daily life, hunting, and religious rituals, provide a unique glimpse into the lives of the early inhabitants of the region. The site is a significant archaeological and historical landmark, offering a unique opportunity to connect with the ancient past of humanity.",
    media: "/heritages/bhimbetka-rock-shelters.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/925/"
  },
  {
    name: "Gwalior Fort",
  slug: createSlug("Gwalior Fort"),
    city: "Gwalior",
    stateOrUT: "Madhya Pradesh",
    builtIn: "8th Century",
    description: "Gwalior Fort is a historic hill fort that is one of the most formidable and majestic forts in India. The fort's history is intertwined with various dynasties, including the Tomars, Mughals, and Marathas. The fort complex contains several historical and religious monuments, including the Gujari Mahal, Man Singh Palace, and the Saas Bahu Temples. The fort's impressive walls and its location on a steep hill made it an ideal military stronghold. Gwalior Fort is a living testament to the region's rich history and its architectural legacy.",
    media: "/heritages/gwalior-fort.jpg",
    learnMoreLink: "https://gwalior.nic.in/en/tourist-place/gwalior-fort/"
  },
  {
    name: "Khajuraho Group of Monuments",
  slug: createSlug("Khajuraho Group of Monuments"),
    city: "Khajuraho",
    stateOrUT: "Madhya Pradesh",
    builtIn: "950-1050 AD",
    description: "The Khajuraho Group of Monuments is a UNESCO World Heritage Site and a remarkable example of Hindu and Jain temple architecture. The temples, built by the Chandela dynasty, are known for their intricate and erotic stone carvings. The temples are a celebration of life, love, and spiritual devotion, with sculptures depicting various aspects of human existence. The temples are a masterpiece of craftsmanship and a testament to the artistic and architectural brilliance of the Chandela dynasty. Khajuraho is a significant cultural and historical landmark, attracting tourists from all over the world.",
    media: "/heritages/khajuraho-group-of-monuments.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/240/"
  },
  {
    name: "Omkareshwar",
  slug: createSlug("Omkareshwar"),
    city: "Omkareshwar",
    stateOrUT: "Madhya Pradesh",
    builtIn: "N/A",
    description: "Omkareshwar is a sacred island on the Narmada River and a significant pilgrimage site for Hindus. The island is shaped like the 'Om' symbol, and it is home to one of the twelve Jyotirlingas, or shrines of Lord Shiva. The island has two main temples: the Omkareshwar Temple and the Mamleshwar Temple. The temples are a blend of different architectural styles and are known for their spiritual significance. Omkareshwar is a unique and serene destination, offering a perfect blend of natural beauty and spiritual sanctity.",
    media: "/heritages/omkareshwar.jpg",
    learnMoreLink: "https://indore.nic.in/en/tourist-place/omkareshwar/"
  },
  {
    name: "Orchha",
  slug: createSlug("Orchha"),
    city: "Orchha",
    stateOrUT: "Madhya Pradesh",
    builtIn: "16th Century",
    description: "Orchha is a historic town on the banks of the Betwa River, known for its magnificent palaces and temples. The town was founded by the Bundela king, Rudra Pratap Singh, and it served as the capital of the Bundela kingdom. The town's historical monuments, including the Jahangir Mahal, the Raj Mahal, and the Ram Raja Temple, are a beautiful example of Bundela architecture. The town is a living testament to the region's rich history and its architectural legacy. Orchha is a must-visit for history and architecture enthusiasts.",
    media: "/heritages/orchha.jpg",
    learnMoreLink: "https://niwari.nic.in/en/tourist-place/orchha-fort/"
  },
  {
    name: "Sanchi Stupa",
  slug: createSlug("Sanchi Stupa"),
    city: "Sanchi",
    stateOrUT: "Madhya Pradesh",
    builtIn: "3rd Century BC",
    description: "Sanchi Stupa is a UNESCO World Heritage Site and one of the oldest and most significant Buddhist monuments in India. The stupa was built by Emperor Ashoka and is a symbol of the spread of Buddhism in the region. The stupa's unique architecture, with its hemispherical dome and ornate gateways, is a masterpiece of ancient Indian art. The site contains a series of other stupas, temples, and monasteries. Sanchi is a significant archaeological and historical landmark, offering a glimpse into the history of Buddhism and the life of Emperor Ashoka.",
    media: "/heritages/sanchi-stupa.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/25/"
  },
  {
    name: "Taj-ul-Masajid",
  slug: createSlug("Taj-ul-Masajid"),
    city: "Bhopal",
    stateOrUT: "Madhya Pradesh",
    builtIn: "18th Century",
    description: "The Taj-ul-Masajid is one of the largest mosques in India. The mosque's unique architecture is a blend of Mughal and European styles, with a series of domes and minarets. The mosque's grand exterior and its serene ambiance make it a significant religious and cultural landmark. The mosque is a testament to the region's rich history and its architectural legacy. It is a must-visit for those interested in the history of Islamic architecture and the cultural heritage of the region.",
    media: "/heritages/taj-ul-masajid.jpg",
    learnMoreLink: "https://bhopal.nic.in/en/taj-ul-masjid/"
  },
  {
    name: "Udayagiri Caves",
  slug: createSlug("Udayagiri Caves"),
    city: "Vidisha",
    stateOrUT: "Madhya Pradesh",
    builtIn: "4th-5th Century AD",
    description: "The Udayagiri Caves are a series of ancient rock-cut caves located near Vidisha. The caves are a significant archaeological and historical site, known for their intricate carvings and sculptures from the Gupta period. The caves depict scenes from Hindu mythology, including the famous Varaha sculpture, which is a masterpiece of Gupta art. The caves are a testament to the artistic and architectural brilliance of the Gupta dynasty. The caves are a must-visit for history and art enthusiasts.",
    media: "/heritages/udayagiri-caves.jpg",
    learnMoreLink: "https://tourism.mp.gov.in/udayagiri-caves"
  },
  {
    name: "Ujjain",
  slug: createSlug("Ujjain"),
    city: "Ujjain",
    stateOrUT: "Madhya Pradesh",
    builtIn: "N/A",
    description: "Ujjain is a historic city of immense religious and cultural significance. The city is one of the four sites of the Kumbh Mela and is home to the Mahakaleshwar Jyotirlinga, a revered shrine of Lord Shiva. The city's history is intertwined with various dynasties, including the Mauryas and the Guptas. The city is known for its numerous temples, ghats, and other historical monuments. Ujjain is a living testament to the region's rich history and its spiritual heritage.",
    media: "/heritages/ujjain.jpg",
    learnMoreLink: "https://ujjain.nic.in/en/tourist-places/"
  },
  {
    name: "Aga Khan Palace",
  slug: createSlug("Aga Khan Palace"),
    city: "Pune",
    stateOrUT: "Maharashtra",
    builtIn: "1892",
    description: "Aga Khan Palace is a historic building that is of immense national importance. It was built by Sultan Muhammad Shah Aga Khan III and served as a prison for Mahatma Gandhi, his wife Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace's architecture is a blend of Indian and European styles, with a series of arches and intricate carvings. The palace has now been converted into a museum and a memorial, housing a collection of photographs and artifacts related to Mahatma Gandhi. The palace is a symbol of India's freedom struggle and a tribute to the leaders who fought for the country's independence.",
    media: "/heritages/aga-khan-palace.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/pune/aga-khan-palace.html"
  },
  {
    name: "Ajanta Caves",
  slug: createSlug("Ajanta Caves"),
    city: "Aurangabad",
    stateOrUT: "Maharashtra",
    builtIn: "2nd Century BC",
    description: "The Ajanta Caves are a UNESCO World Heritage Site and a magnificent collection of rock-cut Buddhist cave monuments. The caves contain beautiful paintings and sculptures that depict scenes from the Jataka tales, which are stories of the Buddha's previous lives. The paintings are a masterpiece of ancient Indian art and a testament to the artistic and spiritual brilliance of the early Buddhist period. The caves are a significant archaeological and historical landmark, offering a glimpse into the history of Buddhism and the life of the Buddha.",
    media: "/heritages/ajanta-caves.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/242/"
  },
  {
    name: "Bibi Ka Maqbara",
  slug: createSlug("Bibi Ka Maqbara"),
    city: "Aurangabad",
    stateOrUT: "Maharashtra",
    builtIn: "1660",
    description: "Bibi Ka Maqbara is a beautiful mausoleum that was built by Prince Azam Shah, the son of Emperor Aurangzeb, in memory of his mother, Dilras Banu Begum. The mausoleum is a smaller replica of the famous Taj Mahal and is often called the 'Taj of the Deccan.' The mausoleum's architecture is a blend of Mughal and Deccan styles, with a series of domes and minarets. The mausoleum is a significant historical and architectural landmark, offering a glimpse into the region's rich history and its architectural legacy.",
    media: "/heritages/bibi-ka-maqbara.jpg",
    learnMoreLink: "https://aurangabad.nic.in/en/tourist-place/bibi-ka-maqbara/"
  },
  {
    name: "Chhatrapati Shivaji Maharaj Terminus",
  slug: createSlug("Chhatrapati Shivaji Maharaj Terminus"),
    city: "Mumbai",
    stateOrUT: "Maharashtra",
    builtIn: "1888",
    description: "The Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage Site, is a historic railway station and a magnificent example of Victorian Gothic architecture. The station was designed by the British architect Frederick William Stevens and is a symbol of the city's colonial past. The station is a masterpiece of craftsmanship, with intricate carvings, a series of domes, and a grand facade. The station is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is one of the busiest railway stations in India and a must-visit for tourists.",
    media: "/heritages/chhatrapati-shivaji-maharaj-terminus.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/945/"
  },
  {
    name: "Elephanta Caves",
  slug: createSlug("Elephanta Caves"),
    city: "Mumbai",
    stateOrUT: "Maharashtra",
    builtIn: "5th-6th Century AD",
    description: "The Elephanta Caves are a UNESCO World Heritage Site and a magnificent collection of rock-cut caves. The caves contain a series of temples dedicated to Lord Shiva, with a series of intricate carvings and sculptures. The most famous is the Trimurti, a massive sculpture of Lord Shiva in three forms: the creator, the preserver, and the destroyer. The caves are a significant archaeological and historical landmark, offering a glimpse into the history of Hinduism and the life of Lord Shiva.",
    media: "/heritages/elephanta-caves.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/244/"
  },
  {
    name: "Ellora Caves",
  slug: createSlug("Ellora Caves"),
    city: "Aurangabad",
    stateOrUT: "Maharashtra",
    builtIn: "600-1000 AD",
    description: "The Ellora Caves are a UNESCO World Heritage Site and a magnificent collection of rock-cut caves. The caves contain a series of temples and monasteries from three different religions: Buddhism, Hinduism, and Jainism. The caves are known for their intricate carvings and sculptures that depict scenes from the epics and mythology of the three religions. The most famous is the Kailasa Temple, a massive monolithic temple that is a masterpiece of ancient Indian rock-cut architecture. The caves are a significant archaeological and historical landmark, offering a glimpse into the religious and cultural harmony of the region.",
    media: "/heritages/ellora-caves.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/243/"
  },
  {
    name: "Gateway of India",
  slug: createSlug("Gateway of India"),
    city: "Mumbai",
    stateOrUT: "Maharashtra",
    builtIn: "1924",
    description: "The Gateway of India is a magnificent arch monument built to commemorate the visit of King George V and Queen Mary to Mumbai. The arch is a beautiful example of Indo-Saracenic architecture, with a blend of Hindu and Muslim styles. The monument is a significant historical and cultural landmark, and it is a symbol of the city's colonial past. The monument's location on the waterfront offers a beautiful view of the Arabian Sea and is a popular tourist destination. The monument is a must-visit for history enthusiasts and those interested in the city's rich history.",
    media: "/heritages/gateway-of-india.jpg",
    learnMoreLink: "https://mumbai.nic.in/en/tourist-place/gateway-of-india/"
  },
  {
    name: "Grishneshwar Temple",
  slug: createSlug("Grishneshwar Temple"),
    city: "Ellora",
    stateOrUT: "Maharashtra",
    builtIn: "18th Century",
    description: "The Grishneshwar Temple is a revered Hindu temple dedicated to Lord Shiva. It is one of the twelve Jyotirlingas, or shrines of Lord Shiva, and is a significant pilgrimage site. The temple's unique architecture is a blend of different styles, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/grishneshwar.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/aurangabad/grishneshwar-temple.html"
  },
  {
    name: "Raigad Fort",
  slug: createSlug("Raigad Fort"),
    city: "Raigad",
    stateOrUT: "Maharashtra",
    builtIn: "17th Century",
    description: "Raigad Fort is a historic hill fort that was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. The fort's strategic location on a steep hill and its formidable fortifications made it a key military stronghold. The fort complex contains several historical structures, including the royal palace, the Queen's quarters, and the Samadhi of Chhatrapati Shivaji Maharaj. The fort is a symbol of Maratha pride and a testament to the valor and strategic genius of the Maratha warriors. The fort is a significant historical and cultural landmark.",
    media: "/heritages/raigad-fort.jpg",
    learnMoreLink: "https://raigad.gov.in/en/tourist-place/raigad-fort/"
  },
  {
    name: "Trimbakeshwar Temple",
  slug: createSlug("Trimbakeshwar Temple"),
    city: "Nashik",
    stateOrUT: "Maharashtra",
    builtIn: "18th Century",
    description: "The Trimbakeshwar Temple is a revered Hindu temple dedicated to Lord Shiva. It is one of the twelve Jyotirlingas, or shrines of Lord Shiva, and is a significant pilgrimage site. The temple's unique architecture is a blend of different styles, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/trimbakeshwar.jpg",
    learnMoreLink: "https://nashik.gov.in/en/tourist-place/trimbakeshwar-temple/"
  },
  {
    name: "Victorian Gothic and Art Deco Ensembles of Mumbai",
  slug: createSlug("Victorian Gothic and Art Deco Ensembles of Mumbai"),
    city: "Mumbai",
    stateOrUT: "Maharashtra",
    builtIn: "19th-20th Century",
    description: "The Victorian Gothic and Art Deco Ensembles of Mumbai is a UNESCO World Heritage Site that encompasses a collection of magnificent buildings from the 19th and 20th centuries. The ensembles are a beautiful example of the architectural styles that flourished during the colonial era. The Victorian Gothic buildings, with their intricate carvings and ornate facades, are a testament to the city's colonial past. The Art Deco buildings, with their clean lines and geometric patterns, are a symbol of the city's modernity. The ensembles are a living museum of the city's architectural and cultural heritage.",
    media: "/heritages/victorian-gothic-and-art-deco-ensembles-of-mumbai.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1480/"
  },
  {
    name: "Imphal War Cemetery",
  slug: createSlug("Imphal War Cemetery"),
    city: "Imphal",
    stateOrUT: "Manipur",
    builtIn: "1945",
    description: "The Imphal War Cemetery is a solemn and serene memorial dedicated to the soldiers of the British and Indian armies who died in the Second World War. The cemetery is a tribute to the bravery and sacrifice of the soldiers who fought in the Battle of Imphal. The cemetery is a beautifully maintained garden with a series of graves and a memorial. The cemetery is a significant historical landmark and a reminder of the devastating impact of the Second World War on the region. It is a place for reflection and remembrance.",
    media: "/heritages/imphal-war-cemetery.jpg",
    learnMoreLink: "https://www.cwgc.org/visit-us/find-cemeteries-memorials/cemetery-details/2049601/imphal-war-cemetery/"
  },
  {
    name: "Kangla Fort",
  slug: createSlug("Kangla Fort"),
    city: "Imphal",
    stateOrUT: "Manipur",
    builtIn: "33 AD",
    description: "Kangla Fort is a historic fort and a former royal residence of the Meitei rulers of Manipur. The fort's history is intertwined with the various dynasties that ruled the region. The fort complex contains a series of temples, palaces, and other historical structures. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history and architecture enthusiasts.",
    media: "/heritages/kangla-fort.jpg",
    learnMoreLink: "https://manipur.gov.in/?page_id=3148"
  },
  {
    name: "Khongjom War Memorial",
  slug: createSlug("Khongjom War Memorial"),
    city: "Khongjom",
    stateOrUT: "Manipur",
    builtIn: "1991",
    description: "The Khongjom War Memorial is a historical monument dedicated to the heroes of the Anglo-Manipur War. The memorial is a tribute to the bravery and sacrifice of the Manipuri soldiers who fought against the British forces in the last battle for independence. The memorial is a significant historical landmark and a symbol of Manipuri pride. It is a must-visit for those interested in the history of the region and the Indian freedom struggle.",
    media: "/heritages/khongjom-war-memorial.jpg",
    learnMoreLink: "https://manipur.gov.in/?page_id=3136"
  },
  {
    name: "Loktak Lake",
  slug: createSlug("Loktak Lake"),
    city: "Bishnupur",
    stateOrUT: "Manipur",
    builtIn: "N/A",
    description: "Loktak Lake is a natural wonder and the largest freshwater lake in Northeast India. The lake is known for its unique floating islands, or 'phumdis,' which are a collection of vegetation, soil, and organic matter. The lake is home to a unique ecosystem and a significant biodiversity. It is a major tourist destination and a perfect place to relax and enjoy the serene beauty of the surroundings. Loktak Lake is a must-visit for nature lovers and those interested in the unique ecosystem of the region.",
    media: "/heritages/loktak-lake.jpg",
    learnMoreLink: "https://manipur.gov.in/?page_id=3112"
  },
  {
    name: "Tharon Cave",
  slug: createSlug("Tharon Cave"),
    city: "Tamenglong",
    stateOrUT: "Manipur",
    builtIn: "N/A",
    description: "Tharon Cave is a natural wonder and a significant archaeological site. The cave is known for its unique limestone formations and its historical significance. The cave contains a series of ancient artifacts, including pottery and tools, which provide valuable insights into the lives of the early inhabitants of the region. The cave is a popular tourist destination and a must-visit for those interested in history and archaeology.",
    media: "/heritages/tharon-cave.jpg",
    learnMoreLink: "https://manipur.gov.in/?page_id=3156"
  },
  {
    name: "Lost City of Vangchhia",
  slug: createSlug("Lost City of Vangchhia"),
    city: "Vangchhia",
    stateOrUT: "Mizoram",
    builtIn: "15th-18th Century",
    description: "The Lost City of Vangchhia is an ancient archaeological site with a rich history. The site is believed to be the capital of a Mizo kingdom, with a series of stone structures, including tombs, fortifications, and intricate carvings. The site provides valuable insights into the lives and traditions of the Mizo people. The lost city is a significant archaeological and historical landmark and a must-visit for those interested in the history of the region. The site is a living testament to the region's rich history and its architectural legacy.",
    media: "/heritages/lost-city-of-vangchhia.jpg",
    learnMoreLink: "https://mizoram.nic.in/tourism/lost-city-of-vangchhia/"
  },
  {
    name: "Mangkahia Lung",
  slug: createSlug("Mangkahia Lung"),
    city: "Champhai",
    stateOrUT: "Mizoram",
    builtIn: "N/A",
    description: "Mangkahia Lung is a large memorial stone that is a significant historical and cultural landmark in Mizoram. The stone is a tribute to the Mizo chief, Mangkahia, who was a brave warrior and a great leader. The stone's intricate carvings depict scenes from his life and his battles. The stone is a symbol of Mizo pride and a testament to the region's rich cultural heritage. Mangkahia Lung is a must-visit for those interested in the history and traditions of the Mizo people.",
    media: "/heritages/mangkahia-lung.jpg",
    learnMoreLink: "https://champhai.nic.in/en/tourist-place/mangkahia-lung/"
  },
  {
    name: "Mizoram State Museum",
  slug: createSlug("Mizoram State Museum"),
    city: "Aizawl",
    stateOrUT: "Mizoram",
    builtIn: "1977",
    description: "The Mizoram State Museum is a significant cultural institution that showcases the rich history and cultural heritage of the Mizo people. The museum houses a collection of traditional costumes, artifacts, musical instruments, and a series of historical documents that provide valuable insights into the lives and traditions of the local people. The museum is a must-visit for those interested in learning about the unique culture and traditions of the Mizoram people.",
    media: "/heritages/mizoram-state-museum.jpg",
    learnMoreLink: "https://mizoram.nic.in/tourist-destinations/state-museum"
  },
  {
    name: "Solomon's Temple",
  slug: createSlug("Solomon's Temple"),
    city: "Aizawl",
    stateOrUT: "Mizoram",
    builtIn: "2017",
    description: "Solomon's Temple is a magnificent and unique religious structure built by the Christian community in Mizoram. The temple is a beautiful example of modern religious architecture, with a series of domes and a grand facade. The temple is a symbol of peace and spiritual devotion. It is a significant pilgrimage site and a popular tourist destination. The temple's serene ambiance and its stunning architectural design make it a must-visit for tourists.",
    media: "/heritages/solomons-temple.jpg",
    learnMoreLink: "https://mizoram.nic.in/tourism/solomons-temple/"
  },
  {
    name: "Tomb of Van Hliman",
  slug: createSlug("Tomb of Van Hliman"),
    city: "Lunglei",
    stateOrUT: "Mizoram",
    builtIn: "1894",
    description: "The Tomb of Van Hliman is a historical monument that is of immense importance to the Mizo people. The tomb is a tribute to Van Hliman, a Mizo chief who was a brave warrior and a great leader. The tomb's unique architecture is a blend of traditional Mizo and Christian styles. The tomb is a significant historical and cultural landmark and a symbol of Mizo pride. It is a must-visit for those interested in the history and traditions of the Mizo people.",
    media: "/heritages/tomb-of-vanhimalian.jpg",
    learnMoreLink: "https://lunglei.nic.in/tourist-places/"
  },
  {
    name: "Kachari Ruins",
  slug: createSlug("Kachari Ruins"),
    city: "Dimapur",
    stateOrUT: "Nagaland",
    builtIn: "13th Century",
    description: "The Kachari Ruins are a collection of ancient stone monuments and pillars that are a testament to the rich history of the Kachari kingdom. The ruins are a significant archaeological and historical landmark, offering a glimpse into the lives and traditions of the Kachari people. The ruins are a popular tourist destination and a must-visit for those interested in the history of the region. The ruins are a living testament to the region's rich history and its architectural legacy.",
    media: "/heritages/kachari-ruins.jpg",
    learnMoreLink: "https://dimapur.nic.in/en/tourist-places/kachari-ruins/"
  },
  {
    name: "Kisama",
  slug: createSlug("Kisama"),
    city: "Kohima",
    stateOrUT: "Nagaland",
    builtIn: "2000",
    description: "Kisama is a significant cultural village and the venue for the famous Hornbill Festival, a major cultural event in Nagaland. The village is a beautiful example of traditional Naga architecture, with a series of traditional huts and a ceremonial ground. The village is a perfect place to experience the rich culture and traditions of the Naga people. Kisama is a major tourist destination and a must-visit for those interested in the culture and traditions of the Naga people.",
    media: "/heritages/kisama.jpg",
    learnMoreLink: "https://nagalandtourism.in/tourist-places/kisama/"
  },
  {
    name: "Kohima War Cemetery",
  slug: createSlug("Kohima War Cemetery"),
    city: "Kohima",
    stateOrUT: "Nagaland",
    builtIn: "1944",
    description: "The Kohima War Cemetery is a solemn and serene memorial dedicated to the soldiers of the British and Indian armies who died in the Second World War. The cemetery is a tribute to the bravery and sacrifice of the soldiers who fought in the Battle of Kohima. The cemetery is a beautifully maintained garden with a series of graves and a memorial. The cemetery is a significant historical landmark and a reminder of the devastating impact of the Second World War on the region. It is a place for reflection and remembrance.",
    media: "/heritages/kohima-war-cemetery.jpg",
    learnMoreLink: "https://www.cwgc.org/visit-us/find-cemeteries-memorials/cemetery-details/2049400/kohima-war-cemetery/"
  },
  {
    name: "Longwa Village",
  slug: createSlug("Longwa Village"),
    city: "Mon",
    stateOrUT: "Nagaland",
    builtIn: "N/A",
    description: "Longwa Village is a unique village located on the border of India and Myanmar. The village is known for its unique cultural traditions and its rich history. The village is a perfect place to experience the traditional Naga way of life and to learn about the history and traditions of the local people. The village is a major tourist destination and a must-visit for those interested in the culture and traditions of the Naga people.",
    media: "/heritages/longwa-village.jpg",
    learnMoreLink: "https://mon.nic.in/en/tourist-place/longwa-village/"
  },
  {
    name: "Ungma Village",
  slug: createSlug("Ungma Village"),
    city: "Mokokchung",
    stateOrUT: "Nagaland",
    builtIn: "N/A",
    description: "Ungma Village is a historic village and the largest village in Nagaland. The village is known for its unique cultural traditions and its rich history. The village is a perfect place to experience the traditional Naga way of life and to learn about the history and traditions of the local people. The village is a major tourist destination and a must-visit for those interested in the culture and traditions of the Naga people.",
    media: "/heritages/ungma-village.jpg",
    learnMoreLink: "https://mokokchung.nic.in/en/tourist-place/ungma-village/"
  },
  {
    name: "Barabati Fort",
  slug: createSlug("Barabati Fort"),
    city: "Cuttack",
    stateOrUT: "Odisha",
    builtIn: "14th Century",
    description: "Barabati Fort is a historic fort that was built by the Ganga dynasty. The fort's history is intertwined with various dynasties, including the Gajapati and the Mughals. The fort's strategic location on the banks of the Mahanadi River and its formidable fortifications made it a key military stronghold. The fort complex contains a series of ancient temples and other historical structures. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy.",
    media: "/heritages/barabati-fort.jpg",
    learnMoreLink: "https://cuttack.nic.in/en/tourist-place/barabati-fort/"
  },
  {
    name: "Brahmeswara Temple",
  slug: createSlug("Brahmeswara Temple"),
    city: "Bhubaneswar",
    stateOrUT: "Odisha",
    builtIn: "11th Century",
    description: "The Brahmeswara Temple is a magnificent temple dedicated to Lord Shiva. The temple is a beautiful example of Kalinga architectural style, with a series of intricate carvings and sculptures. The temple is known for its unique design and its spiritual significance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/brahmeswara-temple.jpg",
    learnMoreLink: "https://tourism.odisha.gov.in/brahmeswara-temple"
  },
  {
    name: "Dhauli Shanti Stupa",
  slug: createSlug("Dhauli Shanti Stupa"),
    city: "Bhubaneswar",
    stateOrUT: "Odisha",
    builtIn: "1970",
    description: "The Dhauli Shanti Stupa, or Peace Pagoda, is a magnificent monument that stands on a hill overlooking the Dhauli hills. The stupa was built by the Kalinga-Nippon Buddha Sangha and is a symbol of peace and non-violence. The stupa is a tribute to the Kalinga War, which led to Emperor Ashoka's conversion to Buddhism. The stupa's unique architecture and its serene ambiance make it a significant pilgrimage and tourist destination. The stupa is a must-visit for those interested in the history of Buddhism and the life of Emperor Ashoka.",
    media: "/heritages/dhauli.jpg",
    learnMoreLink: "https://tourism.odisha.gov.in/dhauli-shanti-stupa"
  },
  {
    name: "Jagannath Temple (Puri)",
    slug: createSlug("Jagannath Temple (Puri)"),
    city: "Puri",
    stateOrUT: "Odisha",
    builtIn: "12th Century",
    description: "The Jagannath Temple is a revered Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu. The temple is one of the Char Dham, or four sacred pilgrimage sites, in India. The temple's unique architecture is a blend of different styles, with a series of domes and a grand facade. The temple is known for its spiritual significance and its annual Rath Yatra festival, which attracts a large number of devotees. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage.",
    media: "/heritages/jagannath-temple.jpg",
    learnMoreLink: "https://puri.nic.in/en/tourist-place/sri-jagannath-temple/"
  },
  {
    name: "Khandagiri and Udayagiri Caves",
  slug: createSlug("Khandagiri and Udayagiri Caves"),
    city: "Bhubaneswar",
    stateOrUT: "Odisha",
    builtIn: "1st-2nd Century BC",
    description: "The Khandagiri and Udayagiri Caves are a series of ancient rock-cut caves located near Bhubaneswar. The caves are a significant archaeological and historical site, known for their intricate carvings and sculptures from the Jain period. The caves depict scenes from the lives of Jain Tirthankaras and the lives of the early inhabitants of the region. The caves are a testament to the artistic and architectural brilliance of the early Jain period. The caves are a must-visit for history and art enthusiasts.",
    media: "/heritages/khandagiri-caves.jpg",
    learnMoreLink: "https://tourism.odisha.gov.in/khandagiri-udayagiri-caves"
  },
  {
    name: "Konark Sun Temple",
  slug: createSlug("Konark Sun Temple"),
    city: "Konark",
    stateOrUT: "Odisha",
    builtIn: "1250",
    description: "The Konark Sun Temple is a UNESCO World Heritage Site and a magnificent temple dedicated to the Sun God, Surya. The temple is a beautiful example of Kalinga architectural style, with a series of intricate carvings and sculptures. The temple is designed in the shape of a massive chariot with 12 pairs of wheels and seven horses. The temple is a masterpiece of craftsmanship and a testament to the artistic and architectural brilliance of the Ganga dynasty. The temple is a significant cultural and historical landmark, attracting tourists from all over the world.",
    media: "/heritages/konark.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/246/"
  },
  {
    name: "Lingaraj Temple",
  slug: createSlug("Lingaraj Temple"),
    city: "Bhubaneswar",
    stateOrUT: "Odisha",
    builtIn: "11th Century",
    description: "The Lingaraj Temple is a revered Hindu temple dedicated to Lord Shiva. The temple is a beautiful example of Kalinga architectural style, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/lingaraj-temple.jpg",
    learnMoreLink: "https://tourism.odisha.gov.in/lingaraj-temple"
  },
  {
    name: "Mukteswara Temple",
  slug: createSlug("Mukteswara Temple"),
    city: "Bhubaneswar",
    stateOrUT: "Odisha",
    builtIn: "10th Century",
    description: "The Mukteswara Temple is a magnificent temple dedicated to Lord Shiva. The temple is a beautiful example of Kalinga architectural style, with a series of intricate carvings and sculptures. The temple is known for its unique design and its spiritual significance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.",
    media: "/heritages/mukteswara-temple.jpg",
    learnMoreLink: "https://tourism.odisha.gov.in/mukteswara-temple"
  },
  {
    name: "Ratnagiri",
  slug: createSlug("Ratnagiri"),
    city: "Ratnagiri",
    stateOrUT: "Odisha",
    builtIn: "5th-13th Century AD",
    description: "Ratnagiri is a significant Buddhist archaeological site and a major center of Buddhist learning. The site contains a series of ancient monasteries, stupas, and temples. The site is a treasure trove of artifacts, including sculptures, pottery, and ancient manuscripts. The site is a significant historical and cultural landmark, offering a glimpse into the history of Buddhism and the life of the Buddha. Ratnagiri is a must-visit for those interested in the history of Buddhism and the cultural heritage of the region.",
    media: "/heritages/ratnagiri.jpg",
    learnMoreLink: "https://jajpur.nic.in/en/tourist-place/ratnagiri/"
  },
  {
    name: "Aayi Mandapam",
  slug: createSlug("Aayi Mandapam"),
    city: "Puducherry",
    stateOrUT: "Puducherry",
    builtIn: "1856",
    description: "The Aayi Mandapam is a beautiful monument located in the heart of Puducherry. The monument is a beautiful example of French architectural style, with a series of arches and a grand facade. The monument is a tribute to a courtesan named Aayi, who is believed to have supplied water to the city. The monument is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a popular tourist destination and a must-visit for those interested in the history of the region.",
    media: "/heritages/aayi-mandapam.jpg",
    learnMoreLink: "https://puducherry.gov.in/en/tourism/aayi-mandapam"
  },
  {
    name: "Auroville",
  slug: createSlug("Auroville"),
    city: "Auroville",
    stateOrUT: "Puducherry",
    builtIn: "1968",
    description: "Auroville is a unique and experimental township located near Puducherry. It was founded by Mirra Alfassa, known as 'The Mother,' and is a symbol of peace, harmony, and sustainable living. The township is a blend of different cultures and traditions, with a series of buildings, gardens, and spiritual centers. The most famous is the Matrimandir, a magnificent golden dome that is a spiritual center for aurovilian and a symbol of peace. Auroville is a significant cultural and spiritual landmark and a must-visit for those interested in alternative living and spirituality.",
    media: "/heritages/auroville.jpg",
    learnMoreLink: "https://www.auroville.org/contents/390"
  },
  {
    name: "Shri Aurobindo Ashram",
  slug: createSlug("Shri Aurobindo Ashram"),
    city: "Puducherry",
    stateOrUT: "Puducherry",
    builtIn: "1926",
    description: "The Shri Aurobindo Ashram is a spiritual community founded by Sri Aurobindo and his spiritual collaborator, 'The Mother,' Mirra Alfassa. The ashram is a significant center of spiritual learning and is known for its peaceful and serene ambiance. The ashram is a perfect place to meditate and to learn about the philosophy of Sri Aurobindo and 'The Mother.' The ashram is a significant pilgrimage and tourist destination, attracting visitors from all over the world.",
    media: "/heritages/shri-aurobindo-ashram.jpg",
    learnMoreLink: "https://www.sriaurobindoashram.org/sri-aurobindo/"
  },
  {
    name: "Tamil Quarter",
  slug: createSlug("Tamil Quarter"),
    city: "Puducherry",
    stateOrUT: "Puducherry",
    builtIn: "18th-19th Century",
    description: "The Tamil Quarter is a significant cultural and historical landmark in Puducherry. The quarter is a beautiful example of traditional Tamil architecture, with a series of houses, temples, and markets. The quarter's narrow streets and traditional houses offer a glimpse into the lives of the local people and their cultural heritage. The quarter is a must-visit for those interested in the history and traditions of the region.",
    media: "/heritages/tamil-quarter.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/pondicherry/tamil-quarter.html"
  },
  {
    name: "White Town",
  slug: createSlug("White Town"),
    city: "Puducherry",
    stateOrUT: "Puducherry",
    builtIn: "18th-19th Century",
    description: "White Town, also known as the French Quarter, is a significant cultural and historical landmark in Puducherry. The quarter is a beautiful example of French colonial architecture, with a series of colonial-era buildings, churches, and statues. The quarter's streets, with their beautiful colonial buildings and a series of cafes and boutiques, offer a unique experience. White Town is a living testament to the region's rich colonial history and its architectural legacy.",
    media: "/heritages/white-town.jpg",
    learnMoreLink: "https://www.puducherrytourism.gov.in/white-town"
  },
  {
    name: "Anandpur Sahib",
  slug: createSlug("Anandpur Sahib"),
    city: "Rupnagar",
    stateOrUT: "Punjab",
    builtIn: "1665",
    description: "Anandpur Sahib is a holy city and a significant pilgrimage site for Sikhs. The city was founded by the ninth Sikh Guru, Guru Tegh Bahadur. It is known for its magnificent Gurudwaras and its historical significance, as it was the birthplace of the Khalsa. The city is a living testament to the region's rich spiritual and cultural heritage. The city is a must-visit for devotees and those interested in the history of Sikhism. The city is a blend of history, spirituality, and culture.\n- Founded by Guru Tegh Bahadur.\n- Birthplace of the Khalsa.\n- Significant pilgrimage site for Sikhs.\n- Blend of history, spirituality, and culture.",
    media: "/heritages/anandpur-sahib.jpg",
    learnMoreLink: "https://rupnagar.nic.in/en/tourist-place/anandpur-sahib/"
  },
  {
    name: "Gobindgarh Fort",
  slug: createSlug("Gobindgarh Fort"),
    city: "Amritsar",
    stateOrUT: "Punjab",
    builtIn: "18th Century",
    description: "Gobindgarh Fort is a historic fort that was built by the Bhangi Misl rulers and later renovated by Maharaja Ranjit Singh. The fort served as a military stronghold and a center of power for the Sikh Empire. The fort complex contains a series of historical and cultural attractions, including a museum, a theater, and a series of light and sound shows. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts.\n- Built by Bhangi Misl rulers, renovated by Maharaja Ranjit Singh.\n- Served as a military stronghold for the Sikh Empire.\n- Features a museum, theater, and light and sound shows.\n- Significant archaeological and historical landmark.",
    media: "/heritages/gobindgarh-fort.jpg",
    learnMoreLink: "https://www.gobindgarhfort.com/"
  },
  {
    name: "Golden Temple",
  slug: createSlug("Golden Temple"),
    city: "Amritsar",
    stateOrUT: "Punjab",
    builtIn: "1604",
    description: "The Golden Temple, or Sri Harmandir Sahib, is the most sacred Gurudwara of Sikhism. The temple is a magnificent example of Sikh architectural style, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- Most sacred Gurudwara of Sikhism.\n- Magnificent example of Sikh architecture.\n- Known for its spiritual significance and serene ambiance.\n- A must-visit for devotees and tourists.",
    media: "/heritages/golden-temple.jpg",
    learnMoreLink: "https://sgpc.net/sri-darbar-sahib/"
  },
  {
    name: "Jallianwala Bagh",
  slug: createSlug("Jallianwala Bagh"),
    city: "Amritsar",
    stateOrUT: "Punjab",
    builtIn: "1919",
    description: "Jallianwala Bagh is a public garden and a significant historical landmark that is a tribute to the victims of the Jallianwala Bagh massacre. The site is a solemn reminder of the brutal massacre that occurred in 1919. The site has a memorial, a series of bullet marks on the walls, and a well that was used by the victims to escape. The site is a must-visit for those interested in the history of the Indian freedom struggle and the colonial past of the country. It is a place for reflection and remembrance.\n- Memorial to the victims of the 1919 Jallianwala Bagh massacre.\n- Features bullet marks on walls and the Martyrs' Well.\n- Significant historical landmark of the Indian freedom struggle.\n- A place for solemn reflection and remembrance.",
    media: "/heritages/jaliawala-bagh.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/amritsar/jallianwala-bagh.html"
  },
  {
    name: "Maharaja Ranjit Singh Museum",
  slug: createSlug("Maharaja Ranjit Singh Museum"),
    city: "Amritsar",
    stateOrUT: "Punjab",
    builtIn: "1977",
    description: "The Maharaja Ranjit Singh Museum is a magnificent museum that showcases the life and times of Maharaja Ranjit Singh, the founder of the Sikh Empire. The museum houses a collection of artifacts, including weapons, armor, paintings, and manuscripts. The museum is a significant cultural and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The museum is a must-visit for history enthusiasts and those interested in the history of the Sikh Empire.\n- Dedicated to Maharaja Ranjit Singh, founder of the Sikh Empire.\n- Houses a collection of weapons, armor, paintings, and manuscripts.\n- Provides insight into the history of the Sikh Empire.\n- A must-visit for history enthusiasts.",
    media: "/heritages/maharaja-ranjit-singh-musuem.jpg",
    learnMoreLink: "https://amritsar.nic.in/en/tourist-place/maharaja-ranjit-singh-museum/"
  },
  {
    name: "Moorish Mosque",
  slug: createSlug("Moorish Mosque"),
    city: "Kapurthala",
    stateOrUT: "Punjab",
    builtIn: "1930",
    description: "The Moorish Mosque is a beautiful mosque that is a miniature replica of the Grand Mosque of Marrakesh, Morocco. The mosque's unique architecture is a blend of different styles, with a series of domes and a grand facade. The mosque is a significant religious and cultural landmark, and it is a testament to the region's rich history and its architectural legacy. The mosque is a must-visit for those interested in the history of Islamic architecture and the cultural heritage of the region.\n- Replica of the Grand Mosque of Marrakesh, Morocco.\n- Unique blend of different architectural styles.\n- Significant religious and cultural landmark.\n- A must-visit for lovers of Islamic architecture.",
    media: "/heritages/moorish-mosque.jpg",
    learnMoreLink: "https://kapurthala.nic.in/en/tourist-place/moorish-mosque/"
  },
  {
    name: "Qila Mubarak",
  slug: createSlug("Qila Mubarak"),
    city: "Patiala",
    stateOrUT: "Punjab",
    builtIn: "1763",
    description: "Qila Mubarak is a historic fort and a royal residence that was built by Baba Ala Singh, the founder of the Patiala dynasty. The fort's architecture is a blend of Mughal and Rajput styles, with a series of palaces, gardens, and courtyards. The fort complex contains a series of historical and cultural attractions, including a museum and a series of light and sound shows. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy.\n- Historic fort built by Baba Ala Singh.\n- Blend of Mughal and Rajput architectural styles.\n- Features a museum and light and sound shows.\n- Significant historical and architectural landmark.",
    media: "/heritages/qila-mubarak.jpg",
    learnMoreLink: "https://patiala.nic.in/en/tourist-place/qila-mubarak/"
  },
  {
    name: "Shahpurkandi Fort",
  slug: createSlug("Shahpurkandi Fort"),
    city: "Pathankot",
    stateOrUT: "Punjab",
    builtIn: "16th Century",
    description: "Shahpurkandi Fort is a historic fort that was built by the Mughal emperor Shah Jahan. The fort is located on the banks of the Ravi River and is a beautiful example of the region's traditional architecture. The fort is a significant historical and cultural landmark, and it is a testament to the region's rich history and its architectural legacy. The fort's unique blend of architectural styles and its serene location make it a must-visit for history and nature lovers.\n- Built by Mughal emperor Shah Jahan.\n- Located on the banks of the Ravi River.\n- Unique blend of architectural styles.\n- Significant historical and cultural landmark.",
    media: "/heritages/shahpurkandi-fort.jpg",
    learnMoreLink: "https://pathankot.nic.in/en/tourist-place/shahpur-kandi-fort/"
  },
  {
    name: "Sheesh Mahal",
  slug: createSlug("Sheesh Mahal"),
    city: "Patiala",
    stateOrUT: "Punjab",
    builtIn: "19th Century",
    description: "Sheesh Mahal, meaning 'Palace of Mirrors,' is a beautiful palace that was built by Maharaja Narinder Singh. The palace is a beautiful example of Mughal and Rajput architectural styles, with a series of arches and intricate carvings. The palace is known for its stunning mirror work, which is a masterpiece of craftsmanship. The palace has now been converted into a museum, housing a collection of artifacts, including paintings, sculptures, and manuscripts. The palace is a significant cultural and historical landmark.\n- 'Palace of Mirrors' built by Maharaja Narinder Singh.\n- Blend of Mughal and Rajput architectural styles.\n- Famous for its stunning mirror work.\n- Now a museum with a collection of artifacts.",
    media: "/heritages/sheesh-mahal.jpg",
    learnMoreLink: "https://patiala.nic.in/en/tourist-place/sheesh-mahal-2/"
  },
  {
    name: "Wagah Border",
  slug: createSlug("Wagah Border"),
    city: "Attari",
    stateOrUT: "Punjab",
    builtIn: "N/A",
    description: "Wagah Border is a significant historical and cultural landmark that marks the border between India and Pakistan. The border is known for its daily military ceremony, which is a spectacular display of patriotism and national pride. The ceremony is a must-see for tourists and is a symbol of the friendship and rivalry between the two countries. The border is a significant cultural and historical landmark, and it is a testament to the region's long and rich history.\n- Marks the border between India and Pakistan.\n- Known for its daily military ceremony.\n- Symbol of national pride and a must-see for tourists.\n- Significant historical and cultural landmark.",
    media: "/heritages/wagah-border.jpg",
    learnMoreLink: "https://amritsar.nic.in/en/tourist-place/wagah-border/"
  },
  {
    name: "Amber Fort",
  slug: createSlug("Amber Fort"),
    city: "Jaipur",
    stateOrUT: "Rajasthan",
    builtIn: "16th Century",
    description: "Amber Fort is a majestic fort and a UNESCO World Heritage Site. The fort is a beautiful example of Rajput architectural style, with a series of palaces, halls, and courtyards. The fort is known for its intricate carvings and stunning mirror work. The fort's strategic location on a hill and its formidable fortifications made it a key military stronghold. Amber Fort is a living testament to the region's rich history and its architectural legacy. The fort is a must-visit for history and architecture enthusiasts.\n- A UNESCO World Heritage Site.\n- Features palaces, halls, and intricate mirror work.\n- A key military stronghold due to its strategic location.\n- A testament to Rajput architectural brilliance.",
    media: "/heritages/amber-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "Chittorgarh Fort",
  slug: createSlug("Chittorgarh Fort"),
    city: "Chittorgarh",
    stateOrUT: "Rajasthan",
    builtIn: "7th Century",
    description: "Chittorgarh Fort is a magnificent hill fort and a UNESCO World Heritage Site. The fort's history is intertwined with the valor and sacrifice of the Rajput warriors. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort complex contains a series of temples, palaces, and a series of towers, including the Vijay Stambha and the Kirti Stambha. The fort is a must-visit for history enthusiasts and those interested in the history of the Rajput rulers.\n- A UNESCO World Heritage Site.\n- Known for the valor and sacrifice of Rajput warriors.\n- Features temples, palaces, and victory towers.\n- A significant archaeological and historical landmark.",
    media: "/heritages/chittorgarh-forts.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "City Palace, Jaipur",
  slug: createSlug("City Palace, Jaipur"),
    city: "Jaipur",
    stateOrUT: "Rajasthan",
    builtIn: "1727",
    description: "The City Palace is a magnificent palace and a royal residence that was built by Maharaja Sawai Jai Singh II. The palace is a beautiful example of Rajput and Mughal architectural styles, with a series of courtyards, gardens, and palaces. The palace complex contains a series of museums, including the Maharaja Sawai Man Singh II Museum, which houses a collection of royal artifacts and paintings. The palace is a living testament to the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts and those interested in the royal past of Rajasthan.\n- Royal residence built by Maharaja Sawai Jai Singh II.\n- Blend of Rajput and Mughal architectural styles.\n- Houses museums with royal artifacts and paintings.\n- A testament to the rich history of the region.",
    media: "/heritages/city-palace-jaipur.jpg",
    learnMoreLink: "https://citypalacejaipur.org/about-us/"
  },
  {
    name: "Gagron Fort",
  slug: createSlug("Gagron Fort"),
    city: "Jhalawar",
    stateOrUT: "Rajasthan",
    builtIn: "7th-14th Century",
    description: "Gagron Fort is a unique fort and a UNESCO World Heritage Site. The fort is a rare example of a 'Jal Durg' or water fort, as it is surrounded by the Ahu and Kali Sindh rivers. The fort's history is intertwined with the valor and sacrifice of the Rajput warriors. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort is a must-visit for history enthusiasts and those interested in the history of the Rajput rulers.\n- A UNESCO World Heritage Site and a rare 'water fort.'\n- Surrounded by the Ahu and Kali Sindh rivers.\n- A testament to the valor of Rajput warriors.\n- Significant archaeological and historical landmark.",
    media: "/heritages/gagron-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "Hawa Mahal",
  slug: createSlug("Hawa Mahal"),
    city: "Jaipur",
    stateOrUT: "Rajasthan",
    builtIn: "1799",
    description: "Hawa Mahal, or 'Palace of Winds,' is a magnificent palace that was built by Maharaja Sawai Pratap Singh. The palace's unique architecture is a beautiful example of Rajput architectural style, with a series of intricate carvings and a grand facade. The palace is known for its series of small windows, or 'jharokhas,' which allowed the royal ladies to watch the street festivals without being seen by the public. The palace is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy.\n- 'Palace of Winds' built by Maharaja Sawai Pratap Singh.\n- Unique architecture with intricate carvings and 'jharokhas.'\n- Allowed royal ladies to watch street life unseen.\n- Significant cultural and historical landmark.",
    media: "/heritages/hawa-mahal.jpg",
    learnMoreLink: "https://tourism.rajasthan.gov.in/jaipur/hawa-mahal.html"
  },
  {
    name: "Jaisalmer Fort",
  slug: createSlug("Jaisalmer Fort"),
    city: "Jaisalmer",
    stateOrUT: "Rajasthan",
    builtIn: "1156",
    description: "Jaisalmer Fort is a magnificent hill fort and a UNESCO World Heritage Site. The fort is a beautiful example of Rajput architectural style, with a series of palaces, temples, and residential complexes. The fort is known for its intricate carvings and its stunning location in the Thar Desert. The fort is a living testament to the region's rich history and its architectural legacy. The fort is a must-visit for history and architecture enthusiasts.\n- A UNESCO World Heritage Site, located in the Thar Desert.\n- Features palaces, temples, and residential complexes.\n- Known for its intricate carvings and stunning location.\n- A living testament to Rajput architectural brilliance.",
    media: "/heritages/jaisalmer-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "Jantar Mantar",
  slug: createSlug("Jantar Mantar"),
    city: "Jaipur",
    stateOrUT: "Rajasthan",
    builtIn: "1734",
    description: "Jantar Mantar is a magnificent astronomical observatory and a UNESCO World Heritage Site. It was built by Maharaja Sawai Jai Singh II and is a testament to the scientific and architectural genius of ancient India. The observatory contains a series of astronomical instruments, including the world's largest stone sundial. The instruments are a beautiful example of ancient Indian scientific knowledge and its application in the field of astronomy. Jantar Mantar is a must-visit for those interested in science and history.\n- A UNESCO World Heritage Site, built by Maharaja Sawai Jai Singh II.\n- Features a series of astronomical instruments.\n- Houses the world's largest stone sundial.\n- A testament to ancient Indian scientific genius.",
    media: "/heritages/jantar-mantar.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1338/"
  },
  {
    name: "Kumbhalgarh Fort",
  slug: createSlug("Kumbhalgarh Fort"),
    city: "Rajsamand",
    stateOrUT: "Rajasthan",
    builtIn: "15th Century",
    description: "Kumbhalgarh Fort is a magnificent hill fort and a UNESCO World Heritage Site. The fort is known for its massive wall, which is the second longest in the world. The fort's history is intertwined with the valor and sacrifice of the Rajput warriors. The fort complex contains a series of temples and other historical structures. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts and those interested in the history of the Rajput rulers.\n- A UNESCO World Heritage Site, with the second-longest wall in the world.\n- A testament to the valor of Rajput warriors.\n- Features a series of temples and historical structures.\n- A significant archaeological and historical landmark.",
    media: "/heritages/kumbhalgarh-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "Ranthambore Fort",
  slug: createSlug("Ranthambore Fort"),
    city: "Sawai Madhopur",
    stateOrUT: "Rajasthan",
    builtIn: "10th Century",
    description: "Ranthambore Fort is a magnificent hill fort and a UNESCO World Heritage Site. The fort's history is intertwined with the valor and sacrifice of the Rajput warriors. The fort complex contains a series of temples, palaces, and a series of towers. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort is a must-visit for history enthusiasts and those interested in the history of the Rajput rulers. It is also a popular destination for wildlife enthusiasts, as it is located within the Ranthambore National Park.\n- A UNESCO World Heritage Site, located within Ranthambore National Park.\n- A testament to the valor of Rajput warriors.\n- Features temples, palaces, and towers.\n- A significant historical and cultural landmark.",
    media: "/heritages/ranthambore-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/247/"
  },
  {
    name: "Udaipur, City of Lakes",
  slug: createSlug("Udaipur, City of Lakes"),
    city: "Udaipur",
    stateOrUT: "Rajasthan",
    builtIn: "1559",
    description: "Udaipur, also known as the 'City of Lakes,' is a beautiful city with a rich history. The city was founded by Maharana Udai Singh II and is known for its magnificent palaces, temples, and lakes. The city is a living testament to the region's rich history and its architectural legacy. The city is a must-visit for history enthusiasts and those interested in the royal past of Rajasthan. The city is a blend of history, culture, and natural beauty.\n- Founded by Maharana Udai Singh II.\n- Known as the 'City of Lakes' for its beautiful lakes.\n- Features magnificent palaces, temples, and lakes.\n- A blend of history, culture, and natural beauty.",
    media: "/heritages/udaipur-city-of-lakes.jpg",
    learnMoreLink: "https://udaipur.nic.in/en/tourist-places/"
  },
  {
    name: "Coronation Throne",
  slug: createSlug("Coronation Throne"),
    city: "Yuksom",
    stateOrUT: "Sikkim",
    builtIn: "1642",
    description: "The Coronation Throne, or 'Norbugang,' is a significant historical and religious site in Yuksom. It is the place where the first Chogyal (king) of Sikkim, Phuntsog Namgyal, was consecrated in 1642 by three revered Lamas. The throne is a simple stone seat, surrounded by a series of stones representing the three Lamas. The site is a symbol of the beginning of the Namgyal dynasty and the establishment of the kingdom of Sikkim. It is a must-visit for those interested in the history of Sikkim and the spiritual heritage of the region.\n\n- The site where the first Chogyal of Sikkim was consecrated.\n- A simple stone throne surrounded by stones representing three Lamas.\n- Symbolizes the beginning of the Namgyal dynasty.\n- A significant historical and religious landmark.",
    media: "/heritages/coronation-throne.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/west/yuksam"
  },
  {
    name: "Dubdi Monastery",
  slug: createSlug("Dubdi Monastery"),
    city: "Yuksom",
    stateOrUT: "Sikkim",
    builtIn: "1701",
    description: "Dubdi Monastery, also known as 'Yuksom Monastery,' is one of the oldest and most significant monasteries in Sikkim. It was built by the Namgyal dynasty and is a symbol of the establishment of Buddhism in the region. The monastery's unique architectural style, with a series of prayer flags and a grand facade, makes it a prominent landmark. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of Buddhism and the culture of the region.\n\n- One of the oldest monasteries in Sikkim.\n- Built by the Namgyal dynasty, symbolizing the establishment of Buddhism.\n- Features a unique architectural style with prayer flags.\n- A significant pilgrimage site and cultural landmark.",
    media: "/heritages/dubdi-monastery.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/west/yuksam"
  },
  {
    name: "Enchey Monastery",
  slug: createSlug("Enchey Monastery"),
    city: "Gangtok",
    stateOrUT: "Sikkim",
    builtIn: "1909",
    description: "Enchey Monastery is a revered Buddhist monastery located in Gangtok. The monastery is a significant center of Buddhist learning and is known for its beautiful murals, sculptures, and ancient manuscripts. The monastery's unique architectural style is a blend of different traditions, with a series of prayer flags and a grand facade. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of Buddhism and the culture of the region.\n\n- A revered Buddhist monastery in Gangtok.\n- Known for beautiful murals, sculptures, and manuscripts.\n- Features a unique architectural style.\n- A significant pilgrimage site and cultural landmark.",
    media: "/heritages/enchey.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/east/gangtok/enchey-monastery"
  },
  {
    name: "Namchi",
  slug: createSlug("Namchi"),
    city: "Namchi",
    stateOrUT: "Sikkim",
    builtIn: "N/A",
    description: "Namchi, meaning 'top of the sky,' is a beautiful town with a rich history. The town is known for its magnificent statues of Buddhist deities, including the magnificent statue of Guru Padmasambhava. The town is a significant pilgrimage site and a popular tourist destination. The town's unique blend of spiritual sanctity and natural beauty makes it a must-visit for travelers. Namchi is a living testament to the region's rich history and its spiritual heritage.\n\n- Known as 'top of the sky' for its high altitude.\n- Features magnificent statues of Buddhist deities.\n- A significant pilgrimage site and tourist destination.\n- Blend of spiritual sanctity and natural beauty.",
    media: "/heritages/namchi.jpg",
    learnMoreLink: "https://namchi.nic.in/en/tourism/"
  },
  {
    name: "Rabdentse Ruins",
  slug: createSlug("Rabdentse Ruins"),
    city: "Geyzing",
    stateOrUT: "Sikkim",
    builtIn: "1670",
    description: "The Rabdentse Ruins are the remains of the second capital of the Namgyal dynasty of Sikkim. The ruins are a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The ruins are a popular tourist destination and a must-visit for those interested in the history of the region. The ruins are a living testament to the region's rich history and its architectural legacy.\n\n- Remains of the second capital of the Namgyal dynasty.\n- A significant archaeological and historical landmark.\n- Provides a glimpse into Sikkim's rich history.\n- A must-visit for history enthusiasts.",
    media: "/heritages/rabdentse-ruins.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/west/gezing"
  },
  {
    name: "Ralang Monastery",
  slug: createSlug("Ralang Monastery"),
    city: "Ravangla",
    stateOrUT: "Sikkim",
    builtIn: "1768",
    description: "Ralang Monastery is a magnificent Buddhist monastery and a significant pilgrimage site in Sikkim. The monastery is a significant center of Buddhist learning and is known for its beautiful murals, sculptures, and ancient manuscripts. The monastery's unique architectural style is a blend of different traditions, with a series of prayer flags and a grand facade. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of Buddhism and the culture of the region.\n\n- A magnificent Buddhist monastery and pilgrimage site.\n- Known for beautiful murals, sculptures, and manuscripts.\n- Features a unique architectural style.\n- A significant cultural and spiritual landmark.",
    media: "/heritages/ralang.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/south/ravangla"
  },
  {
    name: "Rumtek Monastery",
  slug: createSlug("Rumtek Monastery"),
    city: "Gangtok",
    stateOrUT: "Sikkim",
    builtIn: "1966",
    description: "Rumtek Monastery, also known as 'Dharma Chakra Centre,' is a magnificent Buddhist monastery and a significant pilgrimage site. It is the seat of the Kagyu lineage of Tibetan Buddhism and is a significant center for Buddhist learning. The monastery's unique architectural style is a blend of traditional Tibetan and modern styles, with a series of prayer flags and a grand facade. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of Buddhism and the culture of the region.\n\n- The seat of the Kagyu lineage of Tibetan Buddhism.\n- Blend of traditional Tibetan and modern architectural styles.\n- A significant pilgrimage and tourist destination.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/rumtek-monastery.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/east/gangtok/rumtek-monastery"
  },
  {
    name: "Tashiding Monastery",
  slug: createSlug("Tashiding Monastery"),
    city: "Geyzing",
    stateOrUT: "Sikkim",
    builtIn: "1717",
    description: "Tashiding Monastery is a magnificent Buddhist monastery and a significant pilgrimage site. The monastery is a significant center of Buddhist learning and is known for its beautiful murals, sculptures, and ancient manuscripts. The monastery's unique architectural style is a blend of different traditions, with a series of prayer flags and a grand facade. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of Buddhism and the culture of the region.\n\n- A magnificent Buddhist monastery and pilgrimage site.\n- Known for beautiful murals, sculptures, and manuscripts.\n- Features a unique architectural style.\n- A significant cultural and spiritual landmark.",
    media: "/heritages/tashiding.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/west/gezing"
  },
  {
    name: "Tsuklakhang Palace Monastery",
  slug: createSlug("Tsuklakhang Palace Monastery"),
    city: "Gangtok",
    stateOrUT: "Sikkim",
    builtIn: "1898",
    description: "Tsuklakhang Palace Monastery is a royal monastery and a significant historical and cultural landmark in Gangtok. The monastery served as a venue for important royal ceremonies, including the coronation of the Chogyals. The monastery's unique architectural style is a blend of traditional Tibetan and Sikkimese styles, with a series of intricate carvings and beautiful murals. The monastery is a significant pilgrimage site and is a testament to the region's rich spiritual and cultural heritage. It is a must-visit for those interested in the history of the Namgyal dynasty and the culture of the region.\n\n- A royal monastery and historical landmark.\n- Served as the venue for royal ceremonies.\n- Blend of traditional Tibetan and Sikkimese architectural styles.\n- A testament to the region's rich spiritual and cultural heritage.",
    media: "/heritages/tsuklakhang.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/east/gangtok/tsuklakhang-palace"
  },
  {
    name: "Yuksom",
  slug: createSlug("Yuksom"),
    city: "Yuksom",
    stateOrUT: "Sikkim",
    builtIn: "1642",
    description: "Yuksom is a historic town and a significant pilgrimage site in Sikkim. It was the first capital of Sikkim and the place where the first Chogyal was crowned. The town is a blend of spiritual sanctity and natural beauty. The town is a perfect place to relax and enjoy the serene beauty of the surroundings. Yuksom is a living testament to the region's rich history and its spiritual heritage. It is a must-visit for those interested in the history of Sikkim and the culture of the region.\n\n- The first capital of Sikkim.\n- The place where the first Chogyal was crowned.\n- Blend of spiritual sanctity and natural beauty.\n- A living testament to the region's rich history.",
    media: "/heritages/yuksom.jpg",
    learnMoreLink: "https://sikkimtourism.gov.in/WebSite/pages/places/west/yuksam"
  },
  {
    name: "Airavatesvara Temple",
  slug: createSlug("Airavatesvara Temple"),
    city: "Darasuram",
    stateOrUT: "Tamil Nadu",
    builtIn: "1166",
    description: "The Airavatesvara Temple is a magnificent temple dedicated to Lord Shiva, and a UNESCO World Heritage Site. The temple is a stunning example of Chola architectural style, with a series of intricate carvings and sculptures that depict scenes from Hindu mythology. The temple's unique feature is a series of musical steps, which produce a musical sound when struck. The temple is a masterpiece of craftsmanship and a testament to the artistic and architectural brilliance of the Chola dynasty. It is a significant cultural and historical landmark, attracting tourists from all over the world.\n- A UNESCO World Heritage Site in the Great Living Chola Temples group.\n- A masterpiece of Chola architecture from the 12th century.\n- Features intricate carvings, including a stone chariot and musical steps. \n- Dedicated to Lord Shiva, with a rich history and spiritual significance.",
    media: "/heritages/airavatesvara.jpg",
    learnMoreLink: "https://thanjavur.nic.in/tourist-place/darasuram-airavateswarar-temple/"
  },
  {
    name: "Brihadeeswarar Temple",
    slug: createSlug("Brihadeeswarar Temple"),
    city: "Thanjavur",
    stateOrUT: "Tamil Nadu",
    builtIn: "1010",
    description: "The Brihadeeswarar Temple is a magnificent temple dedicated to Lord Shiva, and a UNESCO World Heritage Site. The temple is a stunning example of Chola architectural style, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A UNESCO World Heritage Site and one of the largest temples in India.\n- Built by the Chola emperor Rajaraja I.\n- Known for its massive proportions and a soaring vimana.\n- A masterpiece of Tamil architecture and a symbol of Chola power.",
    media: "/heritages/brihadeeswarar.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/thanjavur/brihadeeswarar-temple.html"
  },
  {
    name: "Chidambaram Nataraja Temple",
  slug: createSlug("Chidambaram Nataraja Temple"),
    city: "Chidambaram",
    stateOrUT: "Tamil Nadu",
    builtIn: "10th Century",
    description: "The Chidambaram Nataraja Temple is a revered Hindu temple dedicated to Lord Nataraja, a form of Lord Shiva as the cosmic dancer. The temple is known for its beautiful architecture and its spiritual significance. The temple's unique feature is a series of carvings that depict the 108 karanas of Bharatanatyam, an Indian classical dance form. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual and artistic heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- Dedicated to Lord Nataraja, the cosmic dancer.\n- Features carvings of 108 karanas from the Natya Shastra.\n- A significant cultural and historical landmark.\n- Represents the connection between arts and spirituality.",
    media: "/heritages/chidambaram-nataraja.jpg",
    learnMoreLink: "https://cuddalore.nic.in/tourist-place/chidamabaram/"
  },
  {
    name: "Gangaikondacholapuram",
    slug: createSlug("Gangaikondacholapuram"),
    city: "Gangaikondacholapuram",
    stateOrUT: "Tamil Nadu",
    builtIn: "1035",
    description: "Gangaikondacholapuram is a historic town and a UNESCO World Heritage Site. The town was founded by the Chola emperor Rajendra I to commemorate his victory over the northern territories. The town is known for its magnificent Brihadeeswarar Temple, which is a smaller replica of the temple in Thanjavur. The temple is a beautiful example of Chola architectural style, with a series of intricate carvings and sculptures. The temple is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy.\n- A UNESCO World Heritage Site.\n- Features a magnificent Brihadeeswarar Temple.\n- Built by the Chola emperor Rajendra I.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/gangaikondacholapuram.jpg",
    learnMoreLink: "https://ariyalur.nic.in/tourist-place/gangaikonda-cholapuram/"
  },
  {
    name: "Group of Monuments at Mahabalipuram",
    slug: createSlug("Group of Monuments at Mahabalipuram"),
    city: "Mahabalipuram",
    stateOrUT: "Tamil Nadu",
    builtIn: "7th-8th Century",
    description: "The Group of Monuments at Mahabalipuram is a UNESCO World Heritage Site and a significant archaeological and historical landmark. The monuments are a collection of rock-cut temples, or 'rathas,' and open-air reliefs. The monuments are a magnificent example of Pallava architectural style, with a series of intricate carvings and sculptures that depict scenes from Hindu mythology. The monuments are a testament to the artistic and architectural brilliance of the Pallava dynasty. The site is a must-visit for history and art enthusiasts.\n- A UNESCO World Heritage Site on the Coromandel coast.\n- Includes rock-cut temples, chariots, and open-air reliefs.\n- A masterpiece of Pallava art and architecture.\n- A testament to the region's rich history and artistic legacy.",
    media: "/heritages/group-of-monuments-at-mahabalipuram.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/249/"
  },
  {
    name: "Meenakshi Amman Temple",
    slug: createSlug("Meenakshi Amman Temple"),
    city: "Madurai",
    stateOrUT: "Tamil Nadu",
    builtIn: "17th Century",
    description: "The Meenakshi Amman Temple is a magnificent temple dedicated to Goddess Meenakshi, a form of Goddess Parvati, and her consort, Lord Sundareswarar, a form of Lord Shiva. The temple is a significant cultural and historical landmark, with a series of magnificent towers, or 'gopurams,' and a series of halls. The temple is known for its intricate carvings and sculptures that depict scenes from Hindu mythology. The temple is a living testament to the region's rich history and its architectural legacy. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar.\n- Known for its magnificent 'gopurams' and intricate carvings.\n- A significant pilgrimage and cultural landmark.\n- Represents a confluence of different Hindu denominations.",
    media: "/heritages/meenakshi-amman-temple.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/madurai/meenakshi-amman-temple.html"
  },
  {
    name: "Thirumayam Fort",
    slug: createSlug("Thirumayam Fort"),
    city: "Pudukkottai",
    stateOrUT: "Tamil Nadu",
    builtIn: "1687",
    description: "The Thirumayam Fort is a historic fortification that was built by Vijaya Raghunatha Sethupathi, the Raja of Ramnad. The fort is a beautiful example of the region's traditional architectural style, with a series of bastions and a watchtower. The fort complex contains a series of temples, including a rock-cut Shiva temple and a Vishnu temple. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts.\n- A historic fort built by Vijaya Raghunatha Sethupathi.\n- Features a rock-cut Shiva and Vishnu temple.\n- A significant archaeological and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/thirumayam-fort-dindigul.jpg",
    learnMoreLink: "https://pudukkottai.nic.in/tourist-place/thirumayam-fort/"
  },
  {
    name: "Vellore Fort",
    slug: createSlug("Vellore Fort"),
    city: "Vellore",
    stateOrUT: "Tamil Nadu",
    builtIn: "16th Century",
    description: "The Vellore Fort is a magnificent fort that was built by the Vijayanagara emperors. The fort's unique architecture is a blend of different styles, with a series of bastions and a watchtower. The fort complex contains a series of historical and religious monuments, including the Jalakanteswara Temple, a mosque, and a church. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts and those interested in the history of the region.\n- A large 16th-century fort built by the Vijayanagara emperors.\n- Features the Jalakanteswara Temple, a mosque, and a church.\n- A significant archaeological and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/vellore-fort.jpg",
    learnMoreLink: "https://vellore.nic.in/tourist-place/vellore-fort/"
  },
  {
    name: "Bhadrachalam Temple",
    slug: createSlug("Bhadrachalam Temple"),
    city: "Bhadrachalam",
    stateOrUT: "Telangana",
    builtIn: "17th Century",
    description: "The Bhadrachalam Temple is a magnificent temple dedicated to Lord Rama, a revered Hindu deity. The temple's unique architecture is a beautiful example of the region's traditional style, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A magnificent temple dedicated to Lord Rama.\n- Known for its unique architecture and spiritual significance.\n- A significant cultural and historical landmark.\n- A must-visit for devotees and those interested in Indian mythology.",
    media: "/heritages/bhadrachalam-temple.jpeg",
    learnMoreLink: "https://bhadradrikothagudem.telangana.gov.in/en/tourist-places/bhadrachalam-sri-seetha-ramachandra-swamy-vari-devasthanam/"
  },
  {
    name: "Bhongir Fort",
    slug: createSlug("Bhongir Fort"),
    city: "Bhongir",
    stateOrUT: "Telangana",
    builtIn: "10th Century",
    description: "Bhongir Fort is a historic hill fort that was built by the Western Chalukya ruler, Tribhuvanamalla Vikramaditya VI. The fort's strategic location on a massive monolithic rock and its formidable fortifications made it a key military stronghold. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort is a popular destination for trekkers and nature lovers, as it offers a panoramic view of the surrounding landscape. It is a must-visit for history enthusiasts.\n- A historic hill fort built by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI.\n- Located on a massive monolithic rock.\n- Offers panoramic views and is a popular trekking spot.\n- A significant archaeological and historical landmark.",
    media: "/heritages/bhongir-fort.jpg",
    learnMoreLink: "https://yadadribhuvangiri.telangana.gov.in/en/tourist-place/bhongir-fort/"
  },
  {
    name: "Charminar",
    slug: createSlug("Charminar"),
    city: "Hyderabad",
    stateOrUT: "Telangana",
    builtIn: "1591",
    description: "Charminar is a historic monument and mosque located in Hyderabad, India. It was built in 1591 and is an iconic symbol of the city. The structure is known for its grand architecture, featuring four grand arches and minarets. The monument is a significant cultural and historical landmark, attracting tourists and visitors from around the world.\n- An iconic symbol of Hyderabad.\n- Features four grand arches and minarets.\n- A significant cultural and historical landmark.",
    media: "/heritages/charminar.jpg",
    learnMoreLink: "https://hyderabad.telangana.gov.in/en/tourist-places/charminar/"
  },
  {
    name: "Chowmahalla Palace",
   slug: createSlug("Chowmahalla Palace"),
    city: "Hyderabad",
    stateOrUT: "Telangana",
    builtIn: "1869",
    description: "Chowmahalla Palace is a magnificent palace and a former royal residence of the Nizams of Hyderabad. The palace's unique architecture is a beautiful example of Indo-Saracenic and European architectural styles. The palace complex contains a series of courtyards, palaces, and a series of museums. The palace is a living testament to the opulence and grandeur of the Nizam dynasty and a significant cultural landmark. It is a must-visit for history and architecture enthusiasts.\n\n- A former royal residence of the Nizams of Hyderabad.\n- Blend of Indo-Saracenic and European architectural styles.\n- Features a series of courtyards, palaces, and museums.\n- A testament to the opulence of the Nizam dynasty.",
    media: "/heritages/chowmahalla-palace.jpg",
    learnMoreLink: "https://chowmahalla.com/"
  },
  {
    name: "Falaknuma Palace",
  slug: createSlug("Falaknuma Palace"),
    city: "Hyderabad",
    stateOrUT: "Telangana",
    builtIn: "1893",
    description: "Falaknuma Palace, or 'Mirror of the Sky,' is a magnificent palace and a former royal residence of the Nizams of Hyderabad. The palace's unique architecture is a beautiful example of Italian and Mughal architectural styles, with a series of domes and a grand facade. The palace has now been converted into a luxurious heritage hotel. The palace is a living testament to the opulence and grandeur of the Nizam dynasty and a significant cultural landmark. It is a must-visit for history and architecture enthusiasts.\n\n- A former royal residence of the Nizams of Hyderabad.\n- Blend of Italian and Mughal architectural styles.\n- Now converted into a luxurious heritage hotel.\n- A testament to the opulence of the Nizam dynasty.",
    media: "/heritages/falaknuma-palace.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/hyderabad/falaknuma-palace.html"
  },
  {
    name: "Golconda Fort",
  slug: createSlug("Golconda Fort"),
    city: "Hyderabad",
    stateOrUT: "Telangana",
    builtIn: "16th Century",
    description: "Golconda Fort is a magnificent fort and a significant archaeological and historical landmark. The fort's history is intertwined with the various dynasties that ruled the region. The fort is known for its unique acoustic system, which allowed a person to hear a clap at the main gate from the top of the fort. The fort complex contains a series of palaces, halls, and temples. The fort is a must-visit for history enthusiasts and those interested in the history of the region. It is a living testament to the region's rich history and its architectural legacy.\n\n- A magnificent fort with a unique acoustic system.\n- A significant archaeological and historical landmark.\n- Features a series of palaces, halls, and temples.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/golconda-fort.jpg",
    learnMoreLink: "https://hyderabad.telangana.gov.in/en/tourist-place/golconda-fort/"
  },
  {
    name: "Medak Fort",
  slug: createSlug("Medak Fort"),
    city: "Medak",
    stateOrUT: "Telangana",
    builtIn: "12th Century",
    description: "Medak Fort is a historic hill fort that was built by the Kakatiya ruler, Prataparudra. The fort's strategic location on a hill and its formidable fortifications made it a key military stronghold. The fort complex contains a series of historical and religious monuments, including a mosque, a series of watchtowers, and a granary. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort is a must-visit for history enthusiasts.\n\n- A historic hill fort built by the Kakatiya ruler Prataparudra.\n- Features a mosque, watchtowers, and a granary.\n- A significant archaeological and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/medak-fort.jpeg",
    learnMoreLink: "https://medak.telangana.gov.in/en/tourist-place/medak-fort/"
  },
  {
    name: "Ramappa Temple",
  slug: createSlug("Ramappa Temple"),
    city: "Mulugu",
    stateOrUT: "Telangana",
    builtIn: "1213",
    description: "The Ramappa Temple is a magnificent temple dedicated to Lord Shiva, and a UNESCO World Heritage Site. The temple is a stunning example of Kakatiya architectural style, with a series of intricate carvings and sculptures that depict scenes from Hindu mythology. The temple's unique feature is a series of 'floating bricks,' which are so light that they float on water. The temple is a masterpiece of craftsmanship and a testament to the artistic and architectural brilliance of the Kakatiya dynasty. It is a significant cultural and historical landmark.\n\n- A UNESCO World Heritage Site dedicated to Lord Shiva.\n- Features 'floating bricks' and intricate carvings.\n- A masterpiece of Kakatiya architectural style.\n- A significant cultural and historical landmark.",
    media: "/heritages/ramappa-temple.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/1572/"
  },
  {
    name: "Thousand Pillar Temple",
  slug: createSlug("Thousand Pillar Temple"),
    city: "Hanamkonda",
    stateOrUT: "Telangana",
    builtIn: "1163",
    description: "The Thousand Pillar Temple is a magnificent temple dedicated to Lord Shiva, Lord Vishnu, and Lord Surya. The temple is a stunning example of Kakatiya architectural style, with a series of intricate carvings and sculptures. The temple's unique feature is a series of a thousand pillars, which are a testament to the architectural brilliance of the Kakatiya dynasty. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual and artistic heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n\n- Dedicated to Lord Shiva, Lord Vishnu, and Lord Surya.\n- Features a series of a thousand pillars and intricate carvings.\n- A masterpiece of Kakatiya architectural style.\n- A significant cultural and historical landmark.",
    media: "/heritages/thousand-pillar-temple.jpg",
    learnMoreLink: "https://warangalurban.telangana.gov.in/tourist-place/thousand-pillar-temple/"
  },
  {
    name: "Warangal Fort",
  slug: createSlug("Warangal Fort"),
    city: "Warangal",
    stateOrUT: "Telangana",
    builtIn: "13th Century",
    description: "Warangal Fort is a magnificent fort and a significant archaeological and historical landmark. The fort's history is intertwined with the Kakatiya dynasty, and it served as the capital of the Kakatiya kingdom. The fort is known for its unique architecture, with a series of arches and watchtowers. The fort complex contains a series of historical and religious monuments, including the beautiful Shiva temple. The fort is a must-visit for history enthusiasts and those interested in the history of the Kakatiya dynasty. It is a living testament to the region's rich history and its architectural legacy.\n\n- A magnificent fort of the Kakatiya dynasty.\n- Features a series of arches and watchtowers.\n- A significant archaeological and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/warangal-fort.jpg",
    learnMoreLink: "https://warangalurban.telangana.gov.in/tourist-place/warangal-fort/"
  },
  {
    name: "Neer Mahal",
  slug: createSlug("Neer Mahal"),
    city: "Melaghar",
    stateOrUT: "Tripura",
    builtIn: "1930",
    description: "Neer Mahal, or 'Water Palace,' is a magnificent palace located in the middle of Rudrasagar Lake. The palace was built by Maharaja Bir Bikram Kishore Manikya Bahadur as a summer residence. The palace's unique architecture is a beautiful blend of Hindu and Islamic styles, with a series of domes and minarets. The palace is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a must-visit for tourists.\n- 'Water Palace' built by Maharaja Bir Bikram Kishore Manikya Bahadur.\n- Located in the middle of Rudrasagar Lake.\n- A blend of Hindu and Islamic architectural styles.\n- A significant cultural and historical landmark.",
    media: "/heritages/neer-mahal.jpg",
    learnMoreLink: "https://sepahijala.nic.in/en/tourist-place/neermahal/"
  },
  {
    name: "Pilak",
  slug: createSlug("Pilak"),
    city: "Jolaibari",
    stateOrUT: "Tripura",
    builtIn: "8th-9th Century AD",
    description: "Pilak is a significant archaeological site with a rich history. The site is a treasure trove of ancient sculptures and artifacts from different periods, including the Hindu and Buddhist periods. The site is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its cultural legacy. It is a must-visit for history enthusiasts and those interested in the history of the region. Pilak is a living testament to the region's rich history and its architectural legacy.\n- An important archaeological site with ancient Hindu and Buddhist artifacts.\n- A treasure trove of sculptures and artifacts.\n- Offers a glimpse into the region's rich cultural and historical legacy.\n- A must-visit for history enthusiasts.",
    media: "/heritages/pilak.jpg",
    learnMoreLink: "https://gomati.nic.in/tourist-place/pilak/"
  },
  {
    name: "Tripura Sundari Temple",
  slug: createSlug("Tripura Sundari Temple"),
    city: "Udaipur",
    stateOrUT: "Tripura",
    builtIn: "1501",
    description: "The Tripura Sundari Temple is a magnificent temple dedicated to Goddess Tripura Sundari, a form of Goddess Shakti. The temple is one of the 51 Shakti Peethas, or revered shrines, in India. The temple's unique architecture is a blend of different styles, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- One of the 51 Shakti Peethas in India.\n- A magnificent temple dedicated to Goddess Tripura Sundari.\n- A blend of different architectural styles.\n- A significant cultural and historical landmark.",
    media: "/heritages/tripura-sundari-temple.jpg",
    learnMoreLink: "https://gomati.nic.in/tourist-place/tripura-sundari-temple/"
  },
  {
    name: "Ujjayanta Palace",
  slug: createSlug("Ujjayanta Palace"),
    city: "Agartala",
    stateOrUT: "Tripura",
    builtIn: "1901",
    description: "The Ujjayanta Palace is a magnificent palace and a former royal residence of the Tripura royal family. The palace's unique architecture is a beautiful example of Indo-Saracenic architectural style, with a series of domes and a grand facade. The palace has now been converted into a state museum, housing a collection of artifacts, including royal memorabilia, paintings, and historical documents. The palace is a living testament to the opulence and grandeur of the royal family and a significant cultural landmark. It is a must-visit for history and architecture enthusiasts.\n- A former royal residence of the Tripura royal family.\n- A beautiful example of Indo-Saracenic architecture.\n- Now a state museum with royal memorabilia and artifacts.\n- A significant cultural and historical landmark.",
    media: "/heritages/ujjayanta-palace.jpg",
    learnMoreLink: "https://agartala.tripura.gov.in/ujjanta-palace-agartala/"
  },
  {
    name: "Unakoti",
  slug: createSlug("Unakoti"),
    city: "Unakoti",
    stateOrUT: "Tripura",
    builtIn: "8th-9th Century AD",
    description: "Unakoti is a magnificent historical and religious site known for its massive rock carvings and sculptures. The site is a treasure trove of ancient artifacts, including a series of massive rock carvings of Hindu deities, including Lord Shiva, Lord Ganesha, and Goddess Durga. The site is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its cultural legacy. It is a must-visit for history and art enthusiasts. Unakoti is a living testament to the region's rich history and its spiritual heritage.\n- Famous for massive rock carvings of Hindu deities.\n- A treasure trove of ancient sculptures and artifacts.\n- Offers a glimpse into the region's rich cultural and historical legacy.\n- A significant archaeological and historical landmark.",
    media: "/heritages/unakoti.jpg",
    learnMoreLink: "https://unakoti.nic.in/en/tourist-place/unakoti-heritage-site/"
  },
  {
    name: "Agra Fort",
  slug: createSlug("Agra Fort"),
    city: "Agra",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1573",
    description: "Agra Fort, a UNESCO World Heritage Site, is a magnificent fort built by the Mughal emperor Akbar. The fort served as the royal residence and the military stronghold of the Mughal Empire. The fort is a beautiful example of Mughal architectural style, with a series of palaces, halls, and courtyards. The fort is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a must-visit for history and architecture enthusiasts.\n- A UNESCO World Heritage Site built by Emperor Akbar.\n- Served as a royal residence and military stronghold.\n- Features palaces, halls, and intricate courtyards.\n- A testament to Mughal architectural brilliance.",
    media: "/heritages/agra-fort.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/251/"
  },
  {
    name: "Akbar's Tomb",
  slug: createSlug("Akbar's Tomb"),
    city: "Agra",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1613",
    description: "Akbar's Tomb is a magnificent mausoleum that was built for the Mughal emperor Akbar. The tomb's unique architecture is a beautiful blend of Hindu and Islamic styles, with a series of domes and a grand facade. The tomb is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. The tomb is a must-visit for history and architecture enthusiasts.\n- Mausoleum of the Mughal emperor Akbar.\n- A blend of Hindu and Islamic architectural styles.\n- Features a series of domes and a grand facade.\n- A significant cultural and historical landmark.",
    media: "/heritages/akbarTomb.jpg",
    learnMoreLink: "https://agra.nic.in/en/tourist-place/akbars-tomb/"
  },
  {
    name: "Fatehpur Sikri",
  slug: createSlug("Fatehpur Sikri"),
    city: "Fatehpur Sikri",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1571",
    description: "Fatehpur Sikri, a UNESCO World Heritage Site, is a historic town that was built by the Mughal emperor Akbar. The town served as the capital of the Mughal Empire for a short period and is known for its magnificent palaces and mosques. The town is a beautiful example of Mughal architectural style, with a series of arches and a grand facade. The town is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a must-visit for history and architecture enthusiasts.\n- A UNESCO World Heritage Site built by Emperor Akbar.\n- Served as the Mughal capital for a short period.\n- Features magnificent palaces and mosques.\n- A testament to Mughal architectural brilliance.",
    media: "/heritages/fatehpur-sikri.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/255/"
  },
  {
    name: "Bara Imambara",
  slug: createSlug("Bara Imambara"),
    city: "Lucknow",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1784",
    description: "Bara Imambara, or 'Great Imambara,' is a magnificent monument and a significant historical landmark. The monument was built by Nawab Asaf-ud-Daula to commemorate a famine and provide employment to the people. The monument's unique architectural style is a beautiful example of Awadhi architecture, with a series of arches and a grand facade. The monument is known for its unique 'Bhulbhulaiya' or labyrinth, which is a masterpiece of engineering. The monument is a must-visit for history and architecture enthusiasts.\n- A magnificent monument built by Nawab Asaf-ud-Daula.\n- Features a unique 'Bhulbhulaiya' or labyrinth.\n- A masterpiece of Awadhi architecture.\n- A significant historical and cultural landmark.",
    media: "/heritages/imambaras.jpg",
    learnMoreLink: "https://lucknow.nic.in/en/tourist-place/bara-imambara/"
  },
  {
    name: "Jhansi Fort",
  slug: createSlug("Jhansi Fort"),
    city: "Jhansi",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1613",
    description: "Jhansi Fort is a historic fort and a significant archaeological and historical landmark. The fort's history is intertwined with the valor and sacrifice of Rani Lakshmi Bai, the Queen of Jhansi. The fort is a beautiful example of the region's traditional architectural style, with a series of bastions and a watchtower. The fort complex contains a series of temples and other historical structures. The fort is a must-visit for history enthusiasts and those interested in the history of the Indian freedom struggle.\n- A historic fort known for its association with Rani Lakshmi Bai.\n- Features a series of bastions and a watchtower.\n- A significant archaeological and historical landmark.\n- A symbol of the Indian freedom struggle.",
    media: "/heritages/jhansi-fort.jpg",
    learnMoreLink: "https://jhansi.nic.in/en/tourist-place/jhansi-fort/"
  },
  {
    name: "Kashi Vishwanath Temple",
  slug: createSlug("Kashi Vishwanath Temple"),
    city: "Varanasi",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1780",
    description: "The Kashi Vishwanath Temple is a revered Hindu temple dedicated to Lord Shiva. The temple is one of the twelve Jyotirlingas, or shrines of Lord Shiva, and is a significant pilgrimage site. The temple's unique architecture is a beautiful blend of different styles, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- One of the twelve Jyotirlingas dedicated to Lord Shiva.\n- A significant pilgrimage and cultural landmark.\n- Known for its spiritual significance and serene ambiance.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/kashi.jpg",
    learnMoreLink: "https://kashivishwanath.org/"
  },
  {
    name: "Mathura",
  slug: createSlug("Mathura"),
    city: "Mathura",
    stateOrUT: "Uttar Pradesh",
    builtIn: "N/A",
    description: "Mathura is a sacred city and a significant pilgrimage site for Hindus. The city is the birthplace of Lord Krishna, a revered Hindu deity. The city is known for its numerous temples, ghats, and other historical monuments. The city is a living testament to the region's rich history and its spiritual heritage. The city is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- The birthplace of Lord Krishna.\n- A sacred city with numerous temples and ghats.\n- A significant pilgrimage site for Hindus.\n- A living testament to the region's rich spiritual heritage.",
    media: "/heritages/mathura.jpg",
    learnMoreLink: "https://mathura.nic.in/en/tourist-places/"
  },
  {
    name: "Prayagraj",
  slug: createSlug("Prayagraj"),
    city: "Prayagraj",
    stateOrUT: "Uttar Pradesh",
    builtIn: "N/A",
    description: "Prayagraj, formerly known as Allahabad, is a sacred city and a significant pilgrimage site for Hindus. The city is located at the confluence of three holy rivers: the Ganges, the Yamuna, and the mythical Saraswati. The city is known for its magnificent fort, which was built by Emperor Akbar. The city is a living testament to the region's rich history and its spiritual heritage. The city is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- Located at the confluence of the Ganges, Yamuna, and Saraswati rivers.\n- A sacred city and a significant pilgrimage site for Hindus.\n- Features a magnificent fort built by Emperor Akbar.\n- A living testament to the region's rich history and spiritual heritage.",
    media: "/heritages/prayagraj.jpeg",
    learnMoreLink: "https://prayagraj.nic.in/en/tourist-places/"
  },
  {
    name: "Sarnath",
  slug: createSlug("Sarnath"),
    city: "Sarnath",
    stateOrUT: "Uttar Pradesh",
    builtIn: "3rd Century BC",
    description: "Sarnath is a significant Buddhist pilgrimage site. It is the place where the Buddha delivered his first sermon after attaining enlightenment. The site is a treasure trove of ancient Buddhist monuments, including the Dhamek Stupa and the Ashoka Pillar. The site is a significant archaeological and historical landmark, offering a glimpse into the history of Buddhism and the life of the Buddha. Sarnath is a must-visit for those interested in the history of Buddhism and the cultural heritage of the region.\n- The site where the Buddha delivered his first sermon.\n- Features the Dhamek Stupa and the Ashoka Pillar.\n- A significant Buddhist pilgrimage site.\n- A testament to the history of Buddhism.",
    media: "/heritages/sarnath.jpg",
    learnMoreLink: "https://sarnath.nic.in/en/tourist-places/"
  },
  {
    name: "Taj Mahal",
  slug: createSlug("Taj Mahal"),
    city: "Agra",
    stateOrUT: "Uttar Pradesh",
    builtIn: "1653",
    description: "The Taj Mahal, a UNESCO World Heritage Site, is a magnificent mausoleum that was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. The monument is a beautiful example of Mughal architectural style, with a series of domes and a grand facade. The monument is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a must-visit for tourists.\n- A UNESCO World Heritage Site and a symbol of love.\n- Built by Emperor Shah Jahan in memory of his wife, Mumtaz Mahal.\n- A masterpiece of Mughal architectural brilliance.\n- A significant cultural and historical landmark.",
    media: "/heritages/taj-mahal.jpg",
    learnMoreLink: "https://whc.unesco.org/en/list/252/"
  },
  {
    name: "Badrinath Temple",
  slug: createSlug("Badrinath Temple"),
    city: "Badrinath",
    stateOrUT: "Uttarakhand",
    builtIn: "9th Century",
    description: "Badrinath Temple is a revered Hindu temple dedicated to Lord Vishnu. The temple is one of the Char Dham, or four sacred pilgrimage sites, in India. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A revered Hindu temple dedicated to Lord Vishnu.\n- One of the Char Dham pilgrimage sites.\n- Known for its spiritual significance and serene ambiance.\n- A significant cultural and historical landmark.",
    media: "/heritages/badrinath.jpg",
    learnMoreLink: "https://chamoli.nic.in/en/tourist-place/badrinath/"
  },
  {
    name: "Baijnath Temple",
  slug: createSlug("Baijnath Temple"),
    city: "Baijnath",
    stateOrUT: "Uttarakhand",
    builtIn: "1204",
    description: "The Baijnath Temple is a magnificent temple dedicated to Lord Shiva. The temple is a beautiful example of the region's traditional architectural style, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A magnificent temple dedicated to Lord Shiva.\n- Known for its unique architecture and spiritual significance.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/baijnath.jpg",
    learnMoreLink: "https://almora.nic.in/en/tourist-place/baijnath/"
  },
  {
    name: "Haridwar",
  slug: createSlug("Haridwar"),
    city: "Haridwar",
    stateOrUT: "Uttarakhand",
    builtIn: "N/A",
    description: "Haridwar is a sacred city and a significant pilgrimage site for Hindus. The city is located on the banks of the Ganges River and is known for its numerous temples, ghats, and other historical monuments. The city is a living testament to the region's rich history and its spiritual heritage. The city is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A sacred city on the banks of the Ganges River.\n- A significant pilgrimage site for Hindus.\n- Features numerous temples, ghats, and historical monuments.\n- A living testament to the region's rich spiritual heritage.",
    media: "/heritages/haridwar.jpg",
    learnMoreLink: "https://haridwar.nic.in/en/tourist-place/"
  },
  {
    name: "Jageshwar",
  slug: createSlug("Jageshwar"),
    city: "Jageshwar",
    stateOrUT: "Uttarakhand",
    builtIn: "8th-13th Century",
    description: "Jageshwar is a significant archaeological and historical site. The site is a magnificent collection of a hundred temples dedicated to Lord Shiva. The temples are a beautiful example of the region's traditional architectural style, with a series of intricate carvings and sculptures. The temples are known for their spiritual significance and their serene ambiance. The temples are a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A collection of a hundred temples dedicated to Lord Shiva.\n- Known for its unique architecture and spiritual significance.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/jageshwar.jpg",
    learnMoreLink: "https://tourism.uk.gov.in/jageshwar-temples-almora-uttarakhand"
  },
  {
    name: "Katarmal Sun Temple",
  slug: createSlug("Katarmal Sun Temple"),
    city: "Almora",
    stateOrUT: "Uttarakhand",
    builtIn: "9th Century",
    description: "The Katarmal Sun Temple is a magnificent temple dedicated to the Sun God, Surya. The temple is a beautiful example of the region's traditional architectural style, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A magnificent temple dedicated to the Sun God, Surya.\n- Known for its unique architecture and spiritual significance.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/katarmal-sun-temple.jpg",
    learnMoreLink: "https://almora.nic.in/en/tourist-place/katarmal-sun-temple/"
  },
  {
    name: "Kedarnath Temple",
  slug: createSlug("Kedarnath Temple"),
    city: "Kedarnath",
    stateOrUT: "Uttarakhand",
    builtIn: "8th Century",
    description: "The Kedarnath Temple is a revered Hindu temple dedicated to Lord Shiva. The temple is one of the Char Dham, or four sacred pilgrimage sites, in India. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A revered Hindu temple dedicated to Lord Shiva.\n- One of the Char Dham pilgrimage sites.\n- Known for its spiritual significance and serene ambiance.\n- A significant cultural and historical landmark.",
    media: "/heritages/kedarnath.jpg",
    learnMoreLink: "https://rudraprayag.nic.in/en/tourist-place/kedarnath/"
  },
  {
    name: "Nainital",
  slug: createSlug("Nainital"),
    city: "Nainital",
    stateOrUT: "Uttarakhand",
    builtIn: "N/A",
    description: "Nainital is a beautiful hill station with a rich history. The town is known for its magnificent lake, which is surrounded by a series of hills. The town is a perfect place to relax and enjoy the serene beauty of the surroundings. The town is a living testament to the region's rich history and its natural beauty. Nainital is a must-visit for nature lovers and those interested in the natural beauty of the region.\n- A beautiful hill station known for its magnificent lake.\n- A perfect place to relax and enjoy the serene beauty.\n- A living testament to the region's rich history and natural beauty.\n- A must-visit for nature lovers.",
    media: "/heritages/nainital.jpg",
    learnMoreLink: "https://nainital.nic.in/en/tourist-places/"
  },
  {
    name: "Nanda Devi Temple",
  slug: createSlug("Nanda Devi Temple"),
    city: "Nanda Devi",
    stateOrUT: "Uttarakhand",
    builtIn: "N/A",
    description: "The Nanda Devi Temple is a revered Hindu temple dedicated to Goddess Nanda Devi. The temple is located at a high altitude and is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A revered Hindu temple dedicated to Goddess Nanda Devi.\n- Known for its spiritual significance and serene ambiance.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/nanda-devi-temple.jpg",
    learnMoreLink: "https://bageshwar.nic.in/en/tourist-place/nanda-devi-temple-bageshwar/"
  },
  {
    name: "Pithoragarh Fort",
  slug: createSlug("Pithoragarh Fort"),
    city: "Pithoragarh",
    stateOrUT: "Uttarakhand",
    builtIn: "18th Century",
    description: "Pithoragarh Fort is a historic fort and a significant archaeological and historical landmark. The fort's history is intertwined with the various dynasties that ruled the region. The fort is a beautiful example of the region's traditional architectural style, with a series of bastions and a watchtower. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. It is a must-visit for history enthusiasts.\n- A historic fort with a beautiful architectural style.\n- A significant archaeological and historical landmark.\n- Offers a glimpse into the region's rich history.\n- A must-visit for history enthusiasts.",
    media: "/heritages/pithoragarh-fort.jpg",
    learnMoreLink: "https://pithoragarh.nic.in/en/tourist-place/pithoragarh-fort/"
  },
  {
    name: "Rishikesh",
  slug: createSlug("Rishikesh"),
    city: "Rishikesh",
    stateOrUT: "Uttarakhand",
    builtIn: "N/A",
    description: "Rishikesh is a sacred city and a significant pilgrimage site for Hindus. The city is located on the banks of the Ganges River and is known for its numerous temples, ashrams, and other historical monuments. The city is a living testament to the region's rich history and its spiritual heritage. The city is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A sacred city on the banks of the Ganges River.\n- A significant pilgrimage site for Hindus.\n- Features numerous temples, ashrams, and historical monuments.\n- A living testament to the region's rich spiritual heritage.",
    media: "/heritages/rishikesh.jpg",
    learnMoreLink: "https://dehradun.nic.in/en/rishikesh/"
  },
  {
    name: "Bishnupur",
  slug: createSlug("Bishnupur"),
    city: "Bishnupur",
    stateOrUT: "West Bengal",
    builtIn: "17th Century",
    description: "Bishnupur is a historic town known for its magnificent terracotta temples. The temples are a beautiful example of the region's traditional architectural style, with a series of intricate carvings and sculptures. The temples are a significant cultural and historical landmark, and it is a testament to the region's rich spiritual and artistic heritage. The town is a must-visit for history and art enthusiasts.\n- A historic town known for its terracotta temples.\n- Features a series of intricate carvings and sculptures.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual and artistic heritage.",
    media: "/heritages/bishnupur.png",
    learnMoreLink: "https://bankura.gov.in/en/tourist-place/bishnupur/"
  },
  {
    name: "Charbangla Temple",
  slug: createSlug("Charbangla Temple"),
    city: "Murshidabad",
    stateOrUT: "West Bengal",
    builtIn: "1755",
    description: "The Charbangla Temple is a magnificent temple dedicated to Lord Shiva. The temple is a beautiful example of the region's traditional architectural style, with a series of intricate carvings and sculptures. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. The temple is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A magnificent temple dedicated to Lord Shiva.\n- Known for its unique architecture and spiritual significance.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/charbangla.jpg",
    learnMoreLink: "https://murshidabad.nic.in/en/tourist-place/char-bangla-temple/"
  },
  {
    name: "Cooch Behar Palace",
  slug: createSlug("Cooch Behar Palace"),
    city: "Cooch Behar",
    stateOrUT: "West Bengal",
    builtIn: "1887",
    description: "The Cooch Behar Palace, also known as the 'Rajbari,' is a magnificent palace and a former royal residence of the Cooch Behar royal family. The palace's unique architecture is a beautiful blend of classical European and traditional Indian styles. The palace is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. The palace is a must-visit for history and architecture enthusiasts.\n- A former royal residence of the Cooch Behar royal family.\n- A beautiful blend of classical European and Indian architectural styles.\n- A significant cultural and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/cooch-behar-palace.jpg",
    learnMoreLink: "https://coochbehar.nic.in/en/tourist-place/rajbari-coochbehar-palace/"
  },
  {
    name: "Dakshineswar Kali Temple",
  slug: createSlug("Dakshineswar Kali Temple"),
    city: "Kolkata",
    stateOrUT: "West Bengal",
    builtIn: "1855",
    description: "The Dakshineswar Kali Temple is a magnificent temple dedicated to Goddess Bhavatarini, a form of Goddess Kali. The temple is a beautiful example of the region's traditional architectural style, with a series of domes and a grand facade. The temple is known for its spiritual significance and its serene ambiance. The temple is a significant cultural and historical landmark, and it is a testament to the region's rich spiritual heritage. It is a must-visit for devotees and those interested in Indian mythology and spirituality.\n- A magnificent temple dedicated to Goddess Kali.\n- A beautiful example of traditional architectural style.\n- A significant cultural and historical landmark.\n- A testament to the region's rich spiritual heritage.",
    media: "/heritages/dakshineshwar-kali.jpg",
    learnMoreLink: "https://www.dakshineswarkalitemple.org/history/"
  },
  {
    name: "Fort William",
  slug: createSlug("Fort William"),
    city: "Kolkata",
    stateOrUT: "West Bengal",
    builtIn: "1781",
    description: "Fort William is a historic fort that was built by the British East India Company. The fort's history is intertwined with the British colonial rule in India. The fort is a significant archaeological and historical landmark, offering a glimpse into the region's rich history and its architectural legacy. The fort is a must-visit for history enthusiasts and those interested in the colonial past of the country. It is a living testament to the region's long and rich history.\n- A historic fort built by the British East India Company.\n- A significant archaeological and historical landmark.\n- Offers a glimpse into the region's rich history and its architectural legacy.\n- A must-visit for history enthusiasts.",
    media: "/heritages/fort-william.jpg",
    learnMoreLink: "https://kolkata.gov.in/sites/fort-william-kolkata"
  },
  {
    name: "Jalpaiguri Rajbari",
  slug: createSlug("Jalpaiguri Rajbari"),
    city: "Jalpaiguri",
    stateOrUT: "West Bengal",
    builtIn: "18th Century",
    description: "Jalpaiguri Rajbari, or the 'Royal Palace,' is a historic palace and a former royal residence of the Jalpaiguri royal family. The palace's unique architecture is a beautiful blend of classical European and traditional Indian styles. The palace is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. The palace is a must-visit for history and architecture enthusiasts.\n- A former royal residence of the Jalpaiguri royal family.\n- A beautiful blend of classical European and Indian architectural styles.\n- A significant cultural and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/jalpaiguri-rajbari.jpg",
    learnMoreLink: "https://jalpaiguri.gov.in/en/tourist-place/jalpaiguri-rajbari/"
  },
  {
    name: "Marble Palace",
  slug: createSlug("Marble Palace"),
    city: "Kolkata",
    stateOrUT: "West Bengal",
    builtIn: "1835",
    description: "The Marble Palace is a magnificent mansion that was built by Raja Rajendra Mullick. The palace's unique architecture is a beautiful blend of different styles, with a series of arches and a grand facade. The palace is a living museum, housing a collection of sculptures, paintings, and artifacts. The palace is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. It is a must-visit for history and art enthusiasts.\n- A magnificent mansion built by Raja Rajendra Mullick.\n- A blend of different architectural styles.\n- A living museum with a collection of sculptures, paintings, and artifacts.\n- A significant cultural and historical landmark.",
    media: "/heritages/marble-palace.jpg",
    learnMoreLink: "https://kolkatatourism.travel/marble-palace-kolkata"
  },
  {
    name: "Shantiniketan",
  slug: createSlug("Shantiniketan"),
    city: "Birbhum",
    stateOrUT: "West Bengal",
    builtIn: "1901",
    description: "Shantiniketan, or 'Abode of Peace,' is a historic town and a significant cultural landmark. The town was founded by the Nobel laureate Rabindranath Tagore. The town is known for its magnificent university, Visva-Bharati, which is a blend of different architectural styles. The town is a living testament to the region's rich history and its cultural legacy. It is a must-visit for those interested in the history of Indian literature and art.\n- A historic town founded by Rabindranath Tagore.\n- Known for its university, Visva-Bharati.\n- A blend of different architectural styles.\n- A living testament to the region's rich history and cultural legacy.",
    media: "/heritages/shantiniketan.jpg",
    learnMoreLink: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/birbhum/shantiniketan.html"
  },
  {
    name: "Victoria Memorial",
  slug: createSlug("Victoria Memorial"),
    city: "Kolkata",
    stateOrUT: "West Bengal",
    builtIn: "1921",
    description: "The Victoria Memorial is a magnificent monument and a significant historical landmark. The monument was built in memory of Queen Victoria. The monument's unique architecture is a beautiful blend of British and Mughal styles, with a series of domes and a grand facade. The monument is a significant cultural and historical landmark, and it is a testament to the region's rich history and its architectural legacy. The monument is a must-visit for history and architecture enthusiasts.\n- A magnificent monument built in memory of Queen Victoria.\n- A blend of British and Mughal architectural styles.\n- A significant cultural and historical landmark.\n- A testament to the region's rich history and architectural legacy.",
    media: "/heritages/victoria-memorial.jpg",
    learnMoreLink: "https://victoriamemorial-cal.org/"
  } 
    ];
    const inserted = await Heritage.insertMany(data);
    res.json({ message: "✅ Heritage seeded", count: inserted.length });
  } catch (err) {
    console.error("Seed error:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET /api/heritages
router.get("/", async (_req, res) => {
  try {
    const all = await Heritage.find().sort({ name: 1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/heritages/:slug
router.get("/:slug", async (req, res) => {
  try {
    const doc = await Heritage.findOne({ slug: req.params.slug });
    if (!doc) return res.status(404).json({ message: "Heritage not found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
// This file defines the routes for heritage-related operations