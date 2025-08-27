import React from 'react';
import { Link } from 'react-router-dom';

export default function RiskAnalytics() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-poppins">
      
      {/* Hero Section */}
      <section className="relative w-full text-center text-white py-16 px-6 bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          Heritage Risk Analytics
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Visualizing data to understand the status and distribution of India's heritage sites.
        </p>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Heritage Site Locations
        </h2>
        <div className="w-full h-[70vh] rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <iframe 
            src="/india_heritage_map.html" 
            title="Interactive Map of India's Heritage Sites"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="w-full py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Key Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full px-4 md:px-20 lg:px-40">
          
          {/* Pie Chart: Risk Level Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Distribution of Heritage Sites by Risk Status
            </h3>
            <div className="flex justify-center items-center h-[30rem]"> {/* Increased height for a bigger chart */}
              <img
                src="/analytics/chart2.png"
                alt="Pie chart showing the distribution of heritage sites by risk status."
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-600 mt-6 text-center">
              This chart provides a clear overview of the proportion of sites that are categorized as 'Safe' versus 'At Risk' based on the provided data.
            </p>
          </div>

          {/* Bar Chart: Geographical Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Number of Sites by State / Union Territory
            </h3>
            <div className="flex justify-center items-center h-[30rem]"> {/* Increased height for a bigger chart */}
              <img
                src="/analytics/chart1.png"
                alt="Bar chart showing the number of heritage sites in each state and union territory."
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-600 mt-6 text-center">
              This bar chart visualizes the geographical spread of heritage sites, highlighting regions with a higher concentration of historical landmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Criteria Button */}
      <section className="py-10 w-full text-center">
        <Link to="/risk" className="inline-block bg-gray-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-gray-700 transition duration-300">
          Back to Criteria
        </Link>
      </section>

    </div>
  );
}