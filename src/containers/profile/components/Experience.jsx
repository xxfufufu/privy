import React from "react";
import { PencilIcon } from "@heroicons/react/solid";
import moment from "moment";

export const Experience = ({ data, handleEdit }) => {
  return (
    <div className="py-2">
      <div className="text-center mb-2 text-2xl font-medium flex gap-x-2">
        Experience
        <span onClick={handleEdit}>
          <PencilIcon className="h-4 w-4 text-gray-500 hover:text-blue-500 cursor-pointer" />
        </span>
      </div>
      <div>
        <div className="mb-2">
          <p className="text-lg font-medium">Company</p>
          <p>{data?.career?.company_name || "-"}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium">Working Periode</p>
          <p>
            {data?.career?.starting_from && data?.career?.ending_in
              ? `${moment(data?.career?.starting_from).format(
                  "MMMM YYYY"
                )} - ${moment(data?.career?.ending_in).format("MMMM YYYY")}`
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};
