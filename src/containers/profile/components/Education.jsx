import React from "react";
import { PencilIcon } from "@heroicons/react/solid";

export const Education = ({ data, handleEdit }) => {
  return (
    <div className="py-2">
      <div className="text-center mb-2 text-2xl font-medium flex gap-x-2">
        Education
        <span onClick={handleEdit}>
          <PencilIcon className="h-4 w-4 text-gray-500 hover:text-blue-500 cursor-pointer" />
        </span>
      </div>
      <div>
        <div className="mb-2">
          <p className="text-lg font-medium">School</p>
          <p>{data?.education?.school_name || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Gradutation Year</p>
          <p>{data?.education?.graduation_time || "-"}</p>
        </div>
      </div>
    </div>
  );
};
