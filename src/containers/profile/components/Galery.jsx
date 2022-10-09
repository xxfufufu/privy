import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../style/overides.css";
import { DocumentAddIcon } from "@heroicons/react/solid";

export const Galery = ({ data, handleUpload, handleOpenImage }) => {
  return (
    <div className="py-2">
      <div className="text-center mb-2 text-2xl font-medium flex gap-x-2">
        Galery
        <label htmlFor="banner">
          <DocumentAddIcon className="h-5 w-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
          <input
            type="file"
            id="banner"
            className="hidden"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleUpload}
          />
        </label>
      </div>
      {data?.user_pictures?.length < 0 ? (
        <div className="bg-gray-300 h-64 flex justify-center items-center">
          Not image in galery
        </div>
      ) : (
        <Carousel>
          {data?.user_pictures.map((item, i) => {
            return (
              <div
                onClick={() => handleOpenImage(item)}
                className="cursor-pointer"
                key={i}
              >
                <img src={item.picture.url} alt={`galery-${i}`} />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
