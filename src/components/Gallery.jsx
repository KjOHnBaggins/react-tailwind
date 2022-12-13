import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-[72rem] m-auto w-full px-4 py-16" id="gallery">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://picsum.photos/711/450"
            alt="gallery-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://picsum.photos/713/450"
            alt="gallery-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://picsum.photos/710/451"
            alt="gallery-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://picsum.photos/710/455"
            alt="gallery-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://picsum.photos/710/459"
            alt="gallery-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
