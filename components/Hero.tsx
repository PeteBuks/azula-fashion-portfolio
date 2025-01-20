import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="absolute inset-0 bg-[url('/assets/bg-grid.png')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="h-[950px] w-full bg-[#B6B6B6]">
        <div className="container mx-auto py-10 w-full h-full">
          <div className="flex justify-center items-start gap-5">
            <div className="bg-black h-[450px] xl:h-[500px] w-[100px] xl:w-[180px] mt-[15px] bg-[url('/assets/hero-image.jpeg')] rounded-xl bg-cover xl:bg-[length:35%_auto] bg-fixed bg-center"></div>
            <div className="bg-black h-[550px] xl:h-[700px] w-[100px] xl:w-[180px] mt-[-20px] bg-[url('/assets/hero-image.jpeg')] rounded-xl bg-cover xl:bg-[length:35%_auto] bg-fixed bg-center"></div>
            <div className="bg-black h-[500px] xl:h-[600px] w-[100px] xl:w-[180px] mt-[15px] bg-[url('/assets/hero-image.jpeg')] rounded-xl bg-cover xl:bg-[length:35%_auto] bg-fixed bg-center"></div>
          </div>
          <div className="mt-[-400px]">
            <h1 className="text-white text-9xl font-bold text-center">AZULA</h1>
            <p className="text-white text-center font-medium text-2xl">
              Fashion Model, Content creator
            </p>
            <h1 className="text-white text-center text-xl font-bold">
              @focusonazula
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
