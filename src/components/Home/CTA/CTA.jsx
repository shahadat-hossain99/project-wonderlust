"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { HiArrowRight } from "react-icons/hi2";

export default function JourneyCTASection() {
  return (
    <section className="">
      <div>
        {/* Main Container */}
        <div className="relative overflow-hidden  min-h-105 md:min-h-125">
          {/* Background Image */}
          <Image
            src="/assets/CTA.png" // your image in public folder
            alt="Travel Journey"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-black/70" />

          {/* Subtle Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center text-center min-h-[420px] md:min-h-[500px] px-6">
            <div className="max-w-3xl">
              {/* Heading */}
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight">
                Ready To Start Your Journey?
              </h2>

              {/* Subtitle */}
              <p className="mt-5 text-white/80 text-base md:text-lg font-normal leading-relaxed">
                Join thousands of travelers who have discovered the world with
                us
              </p>

              {/* CTA Button */}
              <div className="mt-10 ">
                <Button
                  className="rounded-none bg-white                  text-sm
                    font-medium
                    tracking-wide
                    border-none
                    uppercase
                    hover:bg-white/90
                    transition-all
                    duration-300
                    group"
                  size="lg"
                  variant="outline"
                >
                  <span>
                    <HiArrowRight
                      className="
                        text-lg
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                  <span> Book Your Trip Today</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Optional Decorative Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
