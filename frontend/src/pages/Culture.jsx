// src/pages/Culture.jsx
import React from 'react';
import cultureData from "../data/cultureData";

export default function Culture() {
  return (
    <div className="w-full flex flex-col font-poppins bg-gray-100 min-h-screen">
      {/* 🌟 Hero Section - Full-width and visually striking */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white px-6 overflow-hidden">
        {/* Background Overlay for a richer gradient and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#211C84] via-[#4D55CC] to-[#F4B400] opacity-90 z-0"></div>
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 6h28v28H2V6zm4 0h20v20H6V6zm0 24h4v-4h4v4h4v4H6v-4zm24 0h4v-4h4v4h4v4H30v-4zM20 20h4v-4h4v4h4v4H20v-4zM36 6h20v20H36V6zm4 0h12v12H40V6zm0 24h4v-4h4v4h4v4H40v-4zM2 36h28v20H2V36zm4 0h20v12H6V36zm0 16h4v-4h4v4h4v4H6v-4zm24 0h4v-4h4v4h4v4H30v-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-2xl uppercase">
            Culture of India
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
            A vibrant odyssey through the timeless traditions, diverse landscapes, and rich spiritual tapestry of India.
          </p>
        </div>
      </section>

      {/* ✨ Featured Section - Now with full-width image and centered content container */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white px-6 lg:px-20">
        <div className="w-full text-center">
          <h2 className="text-4xl font-extrabold text-[#211C84] mb-4 tracking-tight leading-tight">
            {cultureData.featured.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            {cultureData.featured.description}
          </p>
        </div>
        <div className="w-full px-4 sm:px-0">
          {cultureData.featured.image && (
            <img
              src={cultureData.featured.image}
              alt={cultureData.featured.title}
              className="w-full h-auto object-cover rounded-2xl shadow-xl border border-gray-200"
            />
          )}
        </div>
      </section>

      {/* Reusable Section Component - Now with full-width cards and refined spacing */}
      {[
        { 
          key: "festivals", 
          title: "Festivals & Celebrations", 
          description: "From the colorful streets of Holi to the radiant lights of Diwali, India's festivals are a reflection of its spiritual and community life.", 
          bgColor: "bg-gradient-to-b from-white to-gray-100", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "cuisine", 
          title: "Cuisine of India", 
          description: "A culinary journey through a land of diverse flavors, spices, and regional specialties that tell a unique story.", 
          bgColor: "bg-gradient-to-b from-gray-100 to-blue-50", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "artsAndCrafts", 
          title: "Arts & Crafts", 
          description: "Explore the intricate world of traditional Indian craftsmanship, from ancient pottery to vibrant Madhubani paintings.", 
          bgColor: "bg-gradient-to-b from-blue-50 to-white", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "spiritualHeritage", 
          title: "Spiritual Heritage", 
          description: "Discover the deep-rooted spiritual traditions and philosophies that have shaped India's culture and way of life for millennia.", 
          bgColor: "bg-gradient-to-b from-white to-gray-100", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "historicalSites", 
          title: "Historical Sites & Architecture", 
          description: "Journey through time and explore the architectural marvels that stand as silent witnesses to India's rich and complex history.", 
          bgColor: "bg-gradient-to-b from-gray-100 to-blue-50", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "epics", 
          title: "Cultural Epics", 
          description: "Unravel the timeless tales of valor, morality, and human spirit found in the great epics that continue to inspire millions.", 
          bgColor: "bg-gradient-to-b from-blue-50 to-white", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
        { 
          key: "languages", 
          title: "Languages of India", 
          description: "A linguistic mosaic of over a thousand dialects, rooted in ancient scripts like Sanskrit, that showcases India's incredible diversity.", 
          bgColor: "bg-gradient-to-b from-white to-gray-100", 
          titleColor: "text-[#211C84]", 
          cardBg: "bg-white" 
        },
      ].map((section) => (
        <section key={section.key} className={`py-20 px-6 lg:px-20 ${section.bgColor}`}>
          <h2 className={`text-4xl font-extrabold mb-4 text-center uppercase tracking-wide ${section.titleColor}`}>
            {section.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            {section.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {cultureData[section.key].map((item, idx) => (
              <div
                key={idx}
                className={`group ${section.cardBg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-7 flex flex-col items-center text-center border border-gray-200`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 object-cover rounded-xl mb-6 shadow-md border border-gray-100 group-hover:scale-102 transition-transform duration-300"
                  />
                ) : (
                  // Placeholder for items without images (like some languages)
                  <div className="w-full h-52 flex items-center justify-center bg-gray-200 rounded-xl mb-6 shadow-md border border-gray-100">
                    <span className="text-gray-500 text-lg font-semibold">No Image</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#211C84] mb-3 group-hover:text-[#4D55CC] transition-colors duration-300">{item.name}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description || item.fact || `${item.count}`}
                </p>
                {item.count && item.fact && (
                  <p className="text-sm text-gray-500 italic mt-3">({item.count} - {item.fact})</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}