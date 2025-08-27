import { Link } from "react-router-dom";
import bgVideo from "../../assets/videos/bgVideo.mp4";

export default function StatesList() {
  // ✅ Example data (replace/add more later)
const states = [
  {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    tagline: "The Kohinoor of India",
    thumbnail: "/states/andhra-pradesh.jpg",
  },
  {
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    tagline: "The Land of the Dawn-Lit Mountains",
    thumbnail: "/states/arunachal-pradesh.jpg",
  },
  {
    name: "Assam",
    slug: "assam",
    tagline: "The Land of One-Horned Rhinoceros",
    thumbnail: "/states/assam.jpg",
  },
  {
    name: "Bihar",
    slug: "bihar",
    tagline: "Land of Monasteries",
    thumbnail: "/states/bihar.jpg",
  },
  {
    name: "Chhattisgarh",
    slug: "chhattisgarh",
    tagline: "The Rice Bowl of India",
    thumbnail: "/states/chhatisgarh.jpg",
  },
  {
    name: "Goa",
    slug: "goa",
    tagline: "The Pearl of the Orient",
    thumbnail: "/states/goa.jpg",
  },
  {
    name: "Gujarat",
    slug: "gujarat",
    tagline: "The Land of Legends",
    thumbnail: "/states/gujarat.jpg",
  },
  {
    name: "Haryana",
    slug: "haryana",
    tagline: "The Home of Gods",
    thumbnail: "/states/haryana.jpg",
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    tagline: "The Valley of Gods",
    thumbnail: "/states/himachal-pradesh.jpg",
  },
  {
    name: "Jharkhand",
    slug: "jharkhand",
    tagline: "The Land of Forests",
    thumbnail: "/states/jharkhand.jpg",
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    tagline: "One State, Many Worlds",
    thumbnail: "/states/karnataka.jpg",
  },
  {
    name: "Kerala",
    slug: "kerala",
    tagline: "God's Own Country",
    thumbnail: "/states/kerala.jpg",
  },
  {
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    tagline: "The Heart of Incredible India",
    thumbnail: "/states/madhya-pradesh.jpg",
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    tagline: "The Gateway of India",
    thumbnail: "/states/maharashtra.jpg",
  },
  {
    name: "Manipur",
    slug: "manipur",
    tagline: "The Land of Jewels",
    thumbnail: "/states/manipur.jpg",
  },
  {
    name: "Meghalaya",
    slug: "meghalaya",
    tagline: "The Abode of Clouds",
    thumbnail: "/states/meghalaya.jpg",
  },
  {
    name: "Mizoram",
    slug: "mizoram",
    tagline: "The Land of Blue Mountains",
    thumbnail: "/states/mizoram.jpg",
  },
  {
    name: "Nagaland",
    slug: "nagaland",
    tagline: "The Falcon Capital of the World",
    thumbnail: "/states/nagaland.jpg",
  },
  {
    name: "Odisha",
    slug: "odisha",
    tagline: "India's Best Kept Secret",
    thumbnail: "/states/odisha.jpg",
  },
  {
    name: "Punjab",
    slug: "punjab",
    tagline: "The Land of Five Rivers",
    thumbnail: "/states/punjab.jpg",
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    tagline: "The Land of Kings",
    thumbnail: "/states/rajasthan.jpg",
  },
  {
    name: "Sikkim",
    slug: "sikkim",
    tagline: "The Land of Peace",
    thumbnail: "/states/sikkim.jpg",
  },
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    tagline: "The Land of Tamils",
    thumbnail: "/states/tamilnadu.jpg",
  },
  {
    name: "Telangana",
    slug: "telangana",
    tagline: "The New State of India",
    thumbnail: "/states/telangana.jpg",
  },
  {
    name: "Tripura",
    slug: "tripura",
    tagline: "The Queen of Hills",
    thumbnail: "/states/tripura.jpg",
  },
  {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    tagline: "The Land of Greatness",
    thumbnail: "/states/uttar-pradesh.jpeg",
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    tagline: "The Land of Gods",
    thumbnail: "/states/uttrakhand.jpg",
  },
  {
    name: "West Bengal",
    slug: "west-bengal",
    tagline: "The Soul of India",
    thumbnail: "/states/west-bengal.jpg",
  },
];


  const uts = [
    {
      name: "Andaman and Nicobar Islands",
      slug: "andaman-and-nicobar-islands",
      tagline: "Emerald Islands",
      thumbnail: "/uts/andaman-and-nicobar.jpg",
    },
    {
      name: "Chandigarh",
      slug: "chandigarh",
      tagline: "The City Beautiful",
      thumbnail: "/uts/chandigarh.jpg",
    },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      slug: "dadra-and-nagar-haveli-and-daman-and-diu",
      tagline: "The Land of Ancient Culture",
      thumbnail: "/uts/dadra-nagar-haveli-daman-diu.jpg",
    },
    {
      name: "Delhi",
      slug: "delhi",
      tagline: "The Heart of India",
      thumbnail: "/uts/delhi.jpg",
    },
    {
      name: "Jammu and Kashmir",
      slug: "jammu-and-kashmir",
      tagline: "Paradise on Earth",
      thumbnail: "/uts/jammu-kashmir.jpg",
    },
    {
      name: "Lakshadweep",
      slug: "lakshadweep",
      tagline: "The Jewel of the Arabian Sea",
      thumbnail: "/uts/lakshadweep.jpg",
    },
    {
      name: "Puducherry",
      slug: "puducherry",
      tagline: "The French Riviera of the East",
      thumbnail: "/uts/pondicherry.jpg",
    },
    {
      name: "Ladakh",
      slug: "ladakh",
      tagline: "The Land of High Passes",
      thumbnail: "/uts/ladakh.jpg",
    },
  ];
  

  return (
    <div className="w-full flex flex-col">
      {/* 🎥 Hero Section with Background Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg">
              Explore India’s States & UTs
            </h1>
            <p className="mt-6 text-2xl md:text-3xl text-gray-200">
              Diversity of Culture, Heritage, and Traditions across India
            </p>
          </div>
        </div>
      </section>

      {/* 🌍 States Section */}
      <section className="py-20 bg-white w-full">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center uppercase tracking-wide">
          States
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-12 w-full">
          {states.map((state) => (
            <div
              key={state.slug}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden h-[400px] flex flex-col w-full"
            >
              <img
                src={state.thumbnail}
                alt={state.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  {state.name}
                </h3>
                <p className="text-gray-600">{state.tagline}</p>
                <div className="mt-auto">
                  <Link
                    to={`/states/${state.slug}`}
                    className="mt-4 inline-block text-yellow-500 font-semibold hover:underline"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏛️ Union Territories Section */}
      <section className="py-20 bg-gray-50 w-full">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center uppercase tracking-wide">
          Union Territories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-12 w-full">
          {uts.map((ut) => (
            <div
              key={ut.slug}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden h-[400px] flex flex-col w-full"
            >
              <img
                src={ut.thumbnail}
                alt={ut.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  {ut.name}
                </h3>
                <p className="text-gray-600">{ut.tagline}</p>
                <div className="mt-auto">
                  <Link
                    to={`/states/${ut.slug}`}
                    className="mt-4 inline-block text-yellow-500 font-semibold hover:underline"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}