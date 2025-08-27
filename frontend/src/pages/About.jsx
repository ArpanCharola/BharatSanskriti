import React from 'react';

// The About component for the Bharat Sanskriti project.
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About section container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#211C84] leading-tight">
              About Bharat Sanskriti
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              A journey to preserve and celebrate India's timeless heritage.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side: Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Bharat Sanskriti is more than just a project; it's a heartfelt mission to document, preserve, and promote the rich and diverse cultural heritage of India. From the vibrant festivals of the North to the intricate art forms of the South, our goal is to create a digital repository that captures the essence of what makes India truly unique.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that every tradition, every monument, and every folk art form tells a story. Our platform serves as a virtual museum and a community space where enthusiasts, scholars, and everyday people can explore, learn, and contribute to this collective treasure trove of knowledge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to inspire a new generation to connect with their roots and to share the beauty of Indian culture with the world. We are committed to a collaborative approach, working with local communities and cultural experts to ensure authenticity and accuracy in every piece of information we share.
              </p>
            </div>

            {/* Right side: Team details */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
              
              {/* Team Member 1 */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/100x100/A0A0A0/FFFFFF?text=Arpan"
                  alt="Arpan Charola"
                  className="w-24 h-24 rounded-full border-4 border-[#F4B400] shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#211C84]">Arpan Charola</h3>
                  <p className="text-gray-600">Fullstack Developer</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/100x100/A0A0A0/FFFFFF?text=Krish"
                  alt="Krish Vyas"
                  className="w-24 h-24 rounded-full border-4 border-[#4D55CC] shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#211C84]">Krish Vyas</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
