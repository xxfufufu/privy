/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { InputField } from "../../../components/InputField";
import { DateField } from "../../../components/DateField";
import { TextAreaField } from "../../../components/TextAreaField";

export const ModalEditProfile = ({ handleClose, handleEdit, isOpen, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
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

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        birthday: data.birthday,
        hometown: data.hometown,
        bio: data.bio,
        gender: data.gender,
      });
    }
  }, [data]);

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
              name="name"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
              error={errors.name}
              errorWording={{
                required: "This field is required",
              }}
            />
            <div className="w-full mb-5 ">
              <div className="flex gap-x-10">
                <div className="cursor-pointer flex  items-center">
                  <input
                    id="male"
                    type="radio"
                    name="radio-1"
                    className="radio radio-primary checked:bg-red-500"
                    value="male"
                    {...register("gender", {
                      required: true,
                    })}
                  />
                  <div className="flex flex-col ml-4">
                    <label
                      htmlFor="male"
                      className="text-nadi-primary label-text"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div className="cursor-pointer flex  items-center ">
                  <input
                    type="radio"
                    id="female"
                    name="radio-1"
                    className="radio radio-primary checked:bg-red-500"
                    value="female"
                    {...register("gender", {
                      required: true,
                    })}
                  />
                  <div className="flex flex-col ml-4">
                    <label
                      htmlFor="female"
                      className="text-nadi-primary label-text"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              {errors?.gender?.type === "required" && (
                <p className="text-xs ml-2 mt-2 text-nadi-error">
                  This field is required
                </p>
              )}
            </div>

            <DateField
              name="birthday"
              type="text"
              placeholder="Birthday"
              {...register("birthday", {
                required: true,
              })}
              error={errors.birthday}
              errorWording={{
                required: "This field is required",
              }}
            />
            <InputField
              name="hometown"
              type="text"
              placeholder="Hometown"
              {...register("hometown", {
                required: true,
              })}
              error={errors.hometown}
              errorWording={{
                required: "This field is required",
              }}
            />
            <TextAreaField
              name="bio"
              placeholder="Biography"
              {...register("bio", {
                required: true,
              })}
              error={errors.bio}
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
              onClick={isDirty ? handleSubmit(handleEdit) : handleClose}
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
