import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="h-[100vh] w-full bg-[#B6B6B6]">
        <div className="container mx-auto py-10 w-full h-full">
          <div className="flex justify-center items-start gap-5">
            <div className="bg-black h-[60vh] w-[10vw] mt-[2vw] bg-[url('/assets/hero-image.jpeg')] hero-grid-1 rounded-xl bg-fixed"></div>
            <div className="bg-black h-[80vh] w-[10vw] bg-[url('/assets/hero-image.jpeg')] hero-grid-2 rounded-xl bg-fixed"></div>
            <div className="bg-black h-[70vh] w-[10vw] mt-[2vw] bg-[url('/assets/hero-image.jpeg')] hero-grid-3 rounded-xl bg-fixed"></div>
          </div>
          <div className="mt-[-500px]">
            <h1 className="text-white text-8xl font-semibold text-center">
              AZULA
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
