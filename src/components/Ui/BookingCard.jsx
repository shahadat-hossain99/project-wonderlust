"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Input } from "@heroui/react";
import { FaE } from "react-icons/fa6";
import { HiOutlineShieldCheck, HiOutlineSupport } from "react-icons/hi";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  //   console.log(user);

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      country: destination.country,
      departureDate: new Date(destination.departureDate),
    };
    // console.log(bookingData);

    const res = await fetch("http://localhost:5004/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    // console.log(data);
    toast.success("Successfully booked ", destination.destinationName);
  };

  return (
    <Card className="sticky top-24 rounded-3xl shadow-2xl border border-default-100">
      <div className="p-8">
        <div className="mb-6">
          <span className="text-default-500 text-sm font-medium">
            Pricing starts at
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <h2 className="text-5xl font-bold text-cyan-400">
              ${destination.price}
            </h2>
            <span className="text-default-500 font-medium">/ person</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-default-400 uppercase ml-1">
              Travel Date {"  "}: {"  "}
            </label>
            <Input
              readOnly
              value={destination.departureDate}
              variant="flat"
              // startContent={
              //   <HiOutlineCalendar className="text-default-400" />
              // }
              className="font-medium"
            />
          </div>

          <Button
            onClick={handleBooking}
            size="lg"
            className="w-full bg-cyan-400 hover:bg-cyan-500 font-bold text-lg h-14 shadow-lg shadow-primary/30"
          >
            Book This Trip
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-default-100 space-y-4">
          <div className="flex items-start gap-3">
            <HiOutlineShieldCheck className="text-success text-xl" />
            <div>
              <p className="text-sm font-semibold">Secure Booking</p>
              <p className="text-xs text-default-500">
                Free cancellation up to 7 days before
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <HiOutlineSupport className="text-primary text-xl" />
            <div>
              <p className="text-sm font-semibold">24/7 Concierge</p>
              <p className="text-xs text-default-500">
                Global support during your travels
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
