import Bookings from "@/components/Ui/Bookings";
import NoBookings from "@/components/Ui/NoBookings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  // ! JWT token from a server components
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();
  console.log(bookings);

  return (
    <div>
      <div className="max-w-7xl mx-auto pt-6 space-y-5 p-8">
        <div>
          <h2 className="text-3xl font-semibold">My Bookings</h2>
          <p className="text-gray-500">
            Manage and view your upcoming travel plans
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {bookings?.length === 0 ? (
            <NoBookings />
          ) : (
            bookings.map((booking) => (
              <Bookings key={booking._id} booking={booking} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
