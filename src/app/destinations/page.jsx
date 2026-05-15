import DestinationsCard from "@/components/Ui/DestinationsCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5004/destination");
  const destinations = await res.json();

  console.log(destinations, "from client");

  return (
    <div className="max-w-7xl mx-auto pt-3 md:mb-16 mb-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center my-5 md:my-10 text-cyan-600">
        All Destinations
      </h1>
      <div className="m-8 md:m-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationsCard
            key={destination._id}
            destination={destination}
          ></DestinationsCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
