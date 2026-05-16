import { Button } from "@heroui/react";
import { LuCalendarDays, LuMapPin, LuPlane } from "react-icons/lu";
import Link from "next/link";

const NoBookings = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-cyan-50 flex items-center justify-center">
          <LuPlane size={40} className="text-cyan-400 rotate-45" />
        </div>
        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <LuCalendarDays size={14} className="text-gray-400" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <LuMapPin size={14} className="text-gray-400" />
        </div>
      </div>

      {/* Text */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">No bookings yet</h2>
      <p className="text-sm text-gray-400 max-w-xs mb-8">
        You haven&apos;t booked any trips yet. Start exploring destinations and
        plan your next adventure.
      </p>

      {/* CTA */}
      <Link href="/destinations">
        <Button className="bg-cyan-500 text-white rounded-md px-6">
          <LuPlane size={15} />
          Explore Destinations
        </Button>
      </Link>
    </div>
  );
};

export default NoBookings;
