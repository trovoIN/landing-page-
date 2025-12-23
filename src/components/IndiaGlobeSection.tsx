import React from "react";
import { Globe } from "@/components/ui/globe";

const IndiaGlobeSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-night-900 via-night-800 to-night-900 overflow-hidden px-4">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-trovo-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="container-custom flex flex-col items-center justify-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center leading-tight">
          Connecting the World, Together
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 text-center max-w-2xl">
          Trovo brings people and payments together across the globe. Our network spans continents, making financial rewards accessible everywhere.
        </p>
        <div className="w-full flex justify-center overflow-hidden">
          <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg px-2">
            <div className="relative w-full max-w-[22rem] sm:max-w-[28rem] aspect-square mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-trovo-green/40 via-transparent to-blue-400/40 blur-2xl animate-pulse-slow" />
              <div className="absolute inset-[12%] rounded-full border border-white/30 ring-1 ring-white/40 pulse-ring" />
              <div className="absolute inset-[4%] rounded-full border border-trovo-green/30 orbit-glow" />
              <Globe className="relative z-10 h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaGlobeSection;
