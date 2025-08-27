import { useParams } from "react-router-dom";
import statesData from "../../data/states.json";

export default function StateDetail() {
  const { slug } = useParams();
  const state = statesData.find((s) => s.slug === slug);

  if (!state) return <p className="text-center py-12">State not found</p>;

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[400px]">
        <img
          src={state.heroImage}
          alt={state.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{state.name}</h1>
        </div>
      </div>

      {/* Quick Info */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Quick Info</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <li><strong>Capital:</strong> {state.capital}</li>
          <li><strong>Region:</strong> {state.region}</li>
          <li><strong>Languages:</strong> {state.languages.join(", ")}</li>
          <li><strong>Best Time to Visit:</strong> {state.bestTime}</li>
        </ul>
      </section>

      {/* Highlights */}
      <section className="px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Highlights</h2>
        <p className="mb-4">{state.culture}</p>
        <p className="mb-4"><strong>Heritage:</strong> {state.heritage.join(", ")}</p>
        <p className="mb-4"><strong>Nature:</strong> {state.nature.join(", ")}</p>
        <p className="mb-4"><strong>Cuisine:</strong> {state.cuisine.join(", ")}</p>
      </section>

      {/* Must-Visit Destinations */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Must Visit Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {state.mustVisit.map((place, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded overflow-hidden hover:shadow-lg"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tourism Link */}
      <div className="text-center py-10">
        <a
          href={state.tourismLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold"
        >
          Visit Official Tourism Site →
        </a>
      </div>
    </div>
  );
}
