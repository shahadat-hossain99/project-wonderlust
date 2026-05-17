"use client";

import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    review:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/assets/person1.png", // public folder image
  },
  {
    id: 2,
    review:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/assets/person2.png", // public folder image
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-black">
              What Travelers Say
            </h2>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              Real experiences from our happy travelers
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              isIconOnly
              radius="full"
              variant="bordered"
              className="bg-white text-gray-400 border-gray-300"
            >
              <HiArrowLeft className="text-xl" />
            </Button>

            <Button
              isIconOnly
              radius="full"
              variant="bordered"
              className="bg-white text-gray-400 border-gray-300"
            >
              <HiArrowRight className="text-xl" />
            </Button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              shadow="none"
              className="border border-gray-200 bg-white rounded-sm"
            >
              <div className="p-5">
                <div className="flex flex-col md:flex-row gap-6 items-start ">
                  {/* Review Content */}
                  <div className="flex-1">
                    <p className="text-black text-[15px] leading-7 mb-10">
                      {item.review}
                    </p>

                    {/* User Info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-[1px] bg-sky-400" />

                        <h4 className="text-sky-500 text-sm font-medium">
                          {item.name}
                        </h4>
                      </div>

                      <p className="text-gray-400 text-xs mt-1 ml-7">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* User Image */}
                  <div className="relative  md:w-40 h-55 md:h-42.5 overflow-hidden w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
