/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { InputField } from "../../../components/InputField";
import { DateField } from "../../../components/DateField";

export const ModalExperience = ({ handleClose, handleEdit, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 99,
      width: "100%",
      maxWidth: "500px",
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Modal Delete"
      style={customStyles}
    >
      <div className="relative dark:bg-gray-700">
        <button
          onClick={handleClose}
          type="button"
          className="absolute -top-3 right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="popup-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6">
          <h3 className="mb-5 text-2xl font-bold text-gray-500 dark:text-gray-400">
            Edit Experience
          </h3>
          <form onSubmit={handleSubmit(handleEdit)}>
            <InputField
              name="position"
              type="text"
              placeholder="Position"
              {...register("position", {
                required: true,
              })}
              error={errors.position}
              errorWording={{
                required: "This field is required",
              }}
            />
            <InputField
              name="company_name"
              type="text"
              placeholder="Company name"
              {...register("company_name", {
                required: true,
              })}
              error={errors.company_name}
              errorWording={{
                required: "This field is required",
              }}
            />
            <DateField
              name="starting_from"
              type="text"
              placeholder="Starting form"
              {...register("starting_from", {
                required: true,
              })}
              error={errors.starting_from}
              errorWording={{
                required: "This field is required",
              }}
            />
            <DateField
              name="ending_in"
              type="text"
              placeholder="Ending in"
              {...register("ending_in", {
                required: true,
              })}
              error={errors.ending_in}
              errorWording={{
                required: "This field is required",
              }}
            />
          </form>
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit(handleEdit)}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
