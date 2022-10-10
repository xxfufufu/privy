/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Modal from "react-modal";

export const ModalMessage = ({ handleClose, isOpen, data }) => {
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
      contentLabel="Modal Message"
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
            Your Message :
          </h3>
          {data?.length > 0 ? (
            // eslint-disable-next-line array-callback-return
            data?.map((item, i) => {
              <div key={i}>
                <p className=" font-medium">{item.name}</p>
                <p>{item.message}</p>
              </div>;
            })
          ) : (
            <p>No message yet</p>
          )}
        </div>
      </div>
    </Modal>
  );
};
