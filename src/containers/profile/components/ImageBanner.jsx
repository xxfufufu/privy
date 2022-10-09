import React from "react";
import { PencilIcon } from "@heroicons/react/solid";

export const ImageBanner = ({
  data,
  handleUploadBanner,
  handleUploadProfile,
}) => {
  console.log("data", data);
  return (
    <div className="relative">
      <label
        htmlFor="banner"
        className=" bg-white rounded-full p-1 absolute right-5 top-5 cursor-pointer hover:bg-blue-200"
      >
        <PencilIcon className="h-5 w-5 text-gray-500" />
        <input
          type="file"
          id="banner"
          className="hidden"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleUploadBanner}
        />
      </label>
      {!data?.cover_picture?.url ? (
        <div className="bg-gray-200 h-40 md:h-72 w-full flex justify-center items-center">
          No banner yet
        </div>
      ) : (
        <img
          src={data?.cover_picture?.url}
          alt="banner"
          className="bg-gray-200 h-40 md:h-72 w-full object-cover"
        />
      )}
      <div className="absolute left-10 top-28 md:left-10 md:top-52 ">
        {!data?.user_picture ? (
          <div className="bg-gray-200 h-24 w-24 rounded-full object-cover md:h-48 md:w-48 border border-gray-300 flex justify-center items-center text-xs md:text-base">
            No image yet
          </div>
        ) : (
          <img
            src={data?.user_picture?.picture?.url}
            alt="profile"
            className="bg-gray-200 h-24 w-24 rounded-full object-cover md:h-48 md:w-48"
          />
        )}
        {!data?.user_picture && (
          <label
            htmlFor="profile"
            className=" bg-white rounded-full p-1 absolute right-3 top-3 md:right-7 md:top-7 cursor-pointer hover:bg-blue-200"
          >
            <PencilIcon className="h-4 w-4 text-gray-500" />
            <input
              type="file"
              id="profile"
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleUploadProfile}
            />
          </label>
        )}
      </div>
    </div>
  );
};
