import DestinationsCard from "@/components/Ui/DestinationsCard";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  if (!res.ok) return null;

  const destinations = await res.json();
  if (!destinations?.length) return null;
  console.log(destinations);

  return (
    <section className="py-12 px-6 md:px-9 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex gap-5 flex-col md:flex-row md:gap-0 items-start justify-between mb-8">
        <div>
          <h2 className="font-serif text-3xl text-gray-900 font-bold">
            Featured Destinations
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <Link
          href="/destinations"
          className="flex items-center gap-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded mt-1"
        >
          All Destinations <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Carousel */}
      <div
        id="featured-carousel"
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {destinations.map((destination) => (
          <div
            key={destination._id}
            className="snap-start shrink-0 w-65 md:w-90"
          >
            <DestinationsCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
