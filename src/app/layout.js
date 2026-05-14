import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Shared/Footer/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});
export const metadata = {
  title: "Wanderlust - Explore the World with Us",
  description:
    "Discover unforgettable travel experiences with Wanderlust. Explore top destinations, book your dream vacation, and create lasting memories. Your adventure starts here!",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main> {children}</main>
        <Footer />

        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
