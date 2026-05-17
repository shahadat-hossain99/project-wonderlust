"use client";

import { Card } from "@heroui/react";
import { HiOutlineMap, HiOutlineShieldCheck } from "react-icons/hi";
import { SlEarphonesAlt } from "react-icons/sl";

const features = [
  {
    id: 1,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: HiOutlineShieldCheck,
  },
  {
    id: 2,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: HiOutlineMap,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: SlEarphonesAlt,
  },
];

export default function WhyChooseWanderlust() {
  return (
    <section className="bg-[#eef7f8] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-black">
            Why Choose Wanderlust
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.id}
                shadow="none"
                className="rounded-sm border border-gray-100 bg-white"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon
                      size={34}
                      className="text-cyan-500"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-black mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
