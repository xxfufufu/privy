import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../style/overides.css";

export const Galery = ({ data }) => {
  return (
    <div className="py-2">
      <div
        onClick={() => console.log("ok")}
        className="text-center mb-2 text-2xl font-medium flex gap-x-2"
      >
        Galery
      </div>
      {data?.user_pictures?.length < 0 ? (
        <div className="bg-gray-300 h-64 flex justify-center items-center">
          Not image in galery
        </div>
      ) : (
        <Carousel>
          {data?.user_pictures.map((item, i) => {
            return (
              <div className="relative" key={i}>
                <img src={item.picture.url} alt={`galery-${i}`} />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
