import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://picsum.photos/900/500"
        alt="hero-img"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[72rem] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[38rem] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With SpotSight</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit
            praesentium tenetur fugit sint magnam hic asperiores libero,
            expedita autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
