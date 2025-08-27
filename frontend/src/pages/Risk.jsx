import React from 'react';
import { Link } from 'react-router-dom';

export default function Risk() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-poppins">
      
      {/* Hero Section */}
      <section className="relative w-full text-center text-white pt-32 pb-16 px-6 bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          Risk Radar: Heritage at a Glance
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Understanding the criteria that determine a heritage site's vulnerability.
        </p>
      </section>

      {/* Criteria Section */}
      <section className="w-full py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Understanding the UNESCO Criteria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 md:px-20 lg:px-40">
          
          {/* Card 1: VULNERABILITY DUE TO DEVELOPMENT */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Development & Land Use
            </h3>
            <p className="text-gray-600">
              This criterion assesses the potential harm caused by urban expansion, large-scale public works, and other development pressures that may compromise a site's authenticity.
            </p>
          </div>

          {/* Card 2: ENVIRONMENTAL IMPACT */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Environmental Degradation
            </h3>
            <p className="text-gray-600">
              We analyze the effects of climate change, pollution, invasive species, and other environmental factors that threaten the structural integrity and long-term survival of the sites.
            </p>
          </div>

          {/* Card 3: SOCIO-ECONOMIC FACTORS */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Social & Economic Pressure
            </h3>
            <p className="text-gray-600">
              This includes the impact of mass tourism, lack of community engagement, and insufficient funding for maintenance, which can all lead to neglect and damage.
            </p>
          </div>

          {/* Card 4: NATURAL DISASTERS */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Natural Calamities
            </h3>
            <p className="text-gray-600">
              The risk posed by natural disasters such as floods, earthquakes, landslides, and storms is a crucial factor in determining a site's vulnerability.
            </p>
          </div>

          {/* Card 5: POLITICAL STABILITY */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Political Instability
            </h3>
            <p className="text-gray-600">
              Sites located in areas of conflict or political instability may be at heightened risk of destruction, looting, or neglect.
            </p>
          </div>
          
          {/* Card 6: CONSERVATION STATUS */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Conservation Status
            </h3>
            <p className="text-gray-600">
              The effectiveness of a site's current management and conservation plans is a key indicator of its long-term health and security.
            </p>
          </div>
        </div>
      </section>
      
      {/* Link to UNESCO website */}
      <section className="mt-10 mb-8 w-full max-w-6xl mx-auto text-center px-6">
        <p className="text-sm text-gray-500 italic">
          For more information on the official criteria, please visit the <a href="https://whc.unesco.org/en/criteria/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">UNESCO World Heritage Centre</a>.
        </p>
      </section>

      {/* Button to Analytics */}
      <section className="mt-8 w-full text-center pb-20">
        <Link to="/risk-analytics" className="inline-block bg-green-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-green-600 transition duration-300">
          View Risk Analytics
        </Link>
      </section>

    </div>
  );
}
