import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import indiaMap from "../assets/india_map.png";
import tajMahal from "../assets/Taj-Mahal.jpg"; // check exact file name
import kathakali from "../assets/Traditional-Kathakali-dance.jpg"; // check case
import diwali from "../assets/diwali.jpeg"; // check extension

export default function Home() {
  return (
    <div className="bg-white text-primary">
      {/* HERO SECTION */}
      <section
        className="flex flex-col md:flex-row items-center justify-center px-8 lg:px-16"
        style={{ minHeight: "calc(100vh - 64px)", marginTop: "64px" }}
      >
        {/* Left - Map */}
        <motion.div
          className="flex justify-start md:w-1/2 pr-8"
          style={{ paddingLeft: "10%" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.img
            src={indiaMap}
            alt="India Map"
            className="w-full max-w-md drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center pl-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Discover the Soul of <span className="text-accent">India</span>
          </h1>
          <p className="mt-6 mb-8 text-xl text-gray-700">
            Journey through timeless monuments, vibrant traditions, and soulful
            festivals that have shaped one of the world’s oldest civilizations.
            From the Himalayas to Kanyakumari, explore the cultural heartbeat of
            a nation.
          </p>
          <div className="flex gap-4">
            <Link to="/heritages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-black px-8 py-3 rounded font-semibold shadow-md text-lg"
              >
                Explore Heritage
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent px-8 py-3 rounded font-semibold text-lg hover:bg-accent hover:text-black transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* QUICK STATS */}
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-16">
          {[
            { number: "250+", label: "Heritage Sites", icon: "🏛️" },
            { number: "28", label: "States", icon: "🗺️" },
            { number: "8", label: "Union Territories", icon: "🌏" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <p className="text-5xl font-bold text-primary">{stat.number}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORY HIGHLIGHTS */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-4xl font-bold mb-12">
          Our Cultural Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-16">
          {[
            {
              title: "Heritage",
              desc: "Architectural marvels and historical treasures that tell the story of India.",
              icon: "🏯",
            },
            {
              title: "Traditions",
              desc: "Age-old customs, art forms, and practices passed down for generations.",
              icon: "🎭",
            },
            {
              title: "Festivals",
              desc: "Colorful celebrations uniting communities across the nation.",
              icon: "🎉",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-4xl font-bold mb-12">
          A Glimpse into India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-16">
          {/* Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tajMahal}
              alt="Taj Mahal"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">Heritage Wonders</h3>
              <p className="text-gray-600 mt-2">
                Explore marvels like the Taj Mahal — a UNESCO site and symbol of eternal love.
              </p>
            </div>
          </motion.div>

          {/* Traditions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={kathakali}
              alt="Kathakali Dance"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">Living Traditions</h3>
              <p className="text-gray-600 mt-2">
                Witness the vibrancy of Kathakali — a classical dance form of Kerala.
              </p>
            </div>
          </motion.div>

          {/* Festivals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={diwali}
              alt="Diwali Festival"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">Festive Spirit</h3>
              <p className="text-gray-600 mt-2">
                Experience Diwali — the festival of lights, symbolizing the triumph of good over evil.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RISK RADAR */}
      <section className="py-16 bg-white px-8 lg:px-16">
        <div className="bg-accent text-black p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Risk Radar</h2>
          <p className="text-lg">
            Our Risk Radar highlights threats to heritage & traditions, helping preserve culture for the future.
          </p>
          <Link to="/risk">
            <button className="mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}