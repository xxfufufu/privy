import React from "react";
import { PencilIcon } from "@heroicons/react/solid";

export const Profile = ({ data, handleEdit }) => {
  return (
    <div className="mt-16 md:mt-28">
      <div className="text-center mb-2 text-2xl font-medium flex gap-x-2">
        Profile
        <span onClick={handleEdit}>
          <PencilIcon className="h-4 w-4 text-gray-500 hover:text-blue-500 cursor-pointer" />
        </span>
      </div>
      <div className="sm:grid md:block grid-rows-3 grid-flow-col">
        <div className="mb-2">
          <p className="text-lg font-medium">Name :</p>
          <p>{data?.name || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Hometown :</p>
          <p>{data?.hometown || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Gender :</p>
          <p>{data?.gender || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Birthday :</p>
          <p>{data?.birthday || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Bio :</p>
          <p>{data?.bio || "-"}</p>
        </div>
      </div>
    </div>
  );
};
