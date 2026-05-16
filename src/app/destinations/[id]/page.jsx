import BookingCard from "@/components/Ui/BookingCard";
import { DeleteAlert } from "@/components/Ui/DeleteAlert";
import { EditModal } from "@/components/Ui/EditModal";
import { auth } from "@/lib/auth";
// import { authClient } from "@/lib/auth-client";
import { Button, Chip, Card } from "@heroui/react";
import { headers } from "next/headers";

import Image from "next/image";
import Link from "next/link";
import {
  HiCheckCircle,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { LuArrowLeft } from "react-icons/lu";
// import { MdEditSquare } from "react-icons/md";
// import { RiDeleteBin6Line } from "react-icons/ri";

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id, "details");

  // const { data: session, isPending } = authClient.useSession();
  // const user = session?.user;

  // console.log(user);

  // ! here showed collecting JWT token from cookie in server component

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const res = await fetch(`http://localhost:5004/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const destination = await res.json();
  console.log(destination);

  const { imageUrl, destinationName, category, price, duration, country } =
    destination;

  const highlights = [
    "Expert guided city tours",
    "Luxury accommodation included",
    "Daily breakfast and dinner",
    "All entrance fees covered",
    "Private airport transfers",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Bar */}

      <div className="flex items-center justify-between py-4 border-b border-gray-100 mb-10">
        <Link
          href="/destinations"
          className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors"
        >
          <LuArrowLeft className="text-base" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-5">
          <EditModal destination={destination} />

          <DeleteAlert destination={destination} />
          {/* <Button variant="danger" className="rounded-md  ">
            {" "}
            <RiDeleteBin6Line size={25} /> Cancel
          </Button> */}
          {/* <EditModal destination={destination} />
                    <DeleteAlert destination={destination} /> */}
        </div>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Chip
            color="primary"
            variant="flat"
            size="md"
            className="font-semibold uppercase"
          >
            {destination.category}
          </Chip>
          <div className="flex items-center text-default-500 text-sm">
            <HiOutlineLocationMarker className="mr-1" />
            {destination.country}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-default-900">
          Explore {destination.destinationName}
        </h1>
      </div>

      {/* Hero Image Gallery (Simplified) */}
      <div className="relative h-[400px] md:h-[550px] w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Overview
            </h2>
            <p className="text-default-600 leading-relaxed text-lg">
              {destination.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col gap-1">
                <span className="text-default-400 text-sm italic">
                  Duration
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <HiOutlineClock className="text-primary text-xl" />
                  {destination.duration}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-default-400 text-sm italic">
                  Departure
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <HiOutlineCalendar className="text-primary text-xl" />
                  {destination.departureDate}
                </div>
              </div>
            </div>
          </div>

          {/* <Divider /> */}
          <hr className="my-8 border-t border-default-200" />

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Experience Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <HiCheckCircle className="text-success text-xl shrink-0" />
                  <span className="text-default-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Wonderlust Card */}
          <div className="bg-primary-50/50 border-none shadow-none rounded-3xl">
            <div className="">
              <h3 className="text-xl font-bold mb-3 text-primary-700">
                Why Visit {destination.destinationName} with Wonderlust?
              </h3>
              <p className="text-default-700 leading-relaxed">
                We curate our {destination.destinationName} packages to ensure a
                seamless blend of adventure and relaxation. From local hidden
                gems in {destination.country} to VIP access at major landmarks,
                we handle the logistics so you can focus on making memories.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="relative">
          <BookingCard destination={destination} />
        </div>
      </div>
    </section>
  );
};

export default DestinationDetailPage;
