import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editEducationUser,
  editExperienceUser,
  editProfileUser,
  getDataUser,
  imageAsProfile,
  imageDelete,
  uploadImageBanner,
  uploadImageProfile,
} from "../../store/action";
import {
  ImageBanner,
  Profile,
  Galery,
  ModalEditProfile,
  Experience,
  Education,
  ModalExperience,
  ModalEducation,
  ModalImage,
  ModalLogout,
  ModalMessage,
} from "./components";
import { CogIcon, MailIcon } from "@heroicons/react/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchMessage } from "../../store/action/message.action";

const Home = () => {
  let toastId;
  const dispatch = useDispatch();
  const { user, initLoading } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const [isModalExperience, setIsModalExperience] = useState(false);
  const [isModalEducation, setIsModalEducation] = useState(false);
  const [isModalProfile, setIsModalProfile] = useState(false);
  const [isModalImage, setIsModalImage] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isModalMessage, setIsModalMessage] = useState(false);
  const [image, setImage] = useState(null);

  const handleUploadBanner = (event) => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      dispatch(uploadImageBanner(formData))
        .then(() => {
          dispatch(getDataUser());
          toast.update(toastId, {
            type: "success",
            isLoading: false,
            render: "Success!",
            autoClose: 3000,
          });
        })
        .catch((err) =>
          toast.update(toastId, {
            type: "error",
            isLoading: false,
            render: err,
            autoClose: 3000,
          })
        );
    }
  };

  const handleUploadProfile = (event) => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      dispatch(uploadImageProfile(formData))
        .then(() => {
          dispatch(getDataUser());
          toast.update(toastId, {
            type: "success",
            isLoading: false,
            render: "Success!",
            autoClose: 3000,
          });
        })
        .catch((err) =>
          toast.update(toastId, {
            type: "error",
            isLoading: false,
            render: err,
            autoClose: 3000,
          })
        );
    }
  };

  const handleCloseExperience = () => setIsModalExperience(false);

  const handleOpenExperience = () => setIsModalExperience(true);

  const handleEditExperience = (data) => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    dispatch(editExperienceUser(data))
      .then(() => {
        setIsModalExperience(false);
        dispatch(getDataUser());
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  const handleCloseEducation = () => setIsModalEducation(false);

  const handleOpenEducation = () => setIsModalEducation(true);

  const handleEditEducation = (data) => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    dispatch(editEducationUser(data))
      .then(() => {
        setIsModalEducation(false);
        dispatch(getDataUser());
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  const handleCloseProfile = () => setIsModalProfile(false);

  const handleOpenProfile = () => setIsModalProfile(true);

  const handleEditProfile = (data) => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    data["gender"] = data.gender === "male" ? 0 : 1;
    dispatch(editProfileUser(data))
      .then(() => {
        setIsModalProfile(false);
        dispatch(getDataUser());
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  const handleCloseImage = () => {
    setIsModalImage(false);
    setImage(null);
  };

  const handleOpenImage = (data) => {
    setIsModalImage(true);
    setImage(data);
  };

  const handleImageAsProfile = () => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    dispatch(imageAsProfile({ id: image.id }))
      .then(() => {
        setIsModalImage(false);
        setImage(null);
        dispatch(getDataUser());
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  const handleImageDelete = () => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    dispatch(imageDelete(image.id))
      .then(() => {
        setIsModalImage(false);
        setImage(null);
        dispatch(getDataUser());
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  const handleOpenLogout = () => setIsModalLogout(true);

  const handleCloseLogout = () => setIsModalLogout(false);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  const handleCloseMessage = () => setIsModalLogout(false);

  const handleGetMessage = () => {
    toastId = toast.loading("Loading...", {
      position: "top-center",
    });
    dispatch(fetchMessage(user.id))
      .then(() => {
        setIsModalMessage(true);
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          render: "Success!",
          autoClose: 3000,
        });
      })
      .catch((err) =>
        toast.update(toastId, {
          type: "error",
          isLoading: false,
          render: err,
          autoClose: 3000,
        })
      );
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:3000/ws");
  //   ws.onopen = () => {
  //     console.log("ws connected");
  //   };
  //   ws.onmessage = (mess) => {
  //     console.log("message");
  //   };
  //   return () => {
  //     ws.onclose = () => {
  //       console.log("ws disconect");
  //     };
  //   };
  // }, []);

  useEffect(() => {
    dispatch(getDataUser()).catch((err) => console.log(err));
  }, [dispatch]);

  return initLoading ? (
    <div
      role="status"
      className="h-screen w-screen flex justify-center items-center"
    >
      <svg
        aria-hidden="true"
        class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div className=" max-w-7xl m-auto">
      <ToastContainer />
      <div className="fixed z-30 m-5">
        <div
          className=" p-1 rounded-full bg-slate-100 cursor-pointer hover:bg-red-300"
          onClick={handleOpenLogout}
        >
          <CogIcon className="w-4 h-4 md:w-6 md:h-6" />
        </div>
        <div
          className="mt-3 p-1 rounded-full bg-slate-100 cursor-pointer hover:bg-red-300"
          onClick={handleGetMessage}
        >
          <MailIcon className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>

      <ImageBanner
        data={user}
        handleUploadBanner={handleUploadBanner}
        handleUploadProfile={handleUploadProfile}
      />
      <div className="mt-10 md:mt-10 md:grid grid-cols-3 gap-x-5 px-5 ">
        <Profile data={user} handleEdit={handleOpenProfile} />
        <div className="col-span-2 grid grid-rows-none md:px-5 md:border-l-2 md:border-gray-200">
          <Galery
            data={user}
            handleUpload={handleUploadProfile}
            handleOpenImage={handleOpenImage}
          />
          <div className="md:grid grid-cols-2 my-5">
            <Experience data={user} handleEdit={handleOpenExperience} />
            <Education data={user} handleEdit={handleOpenEducation} />
          </div>
        </div>
      </div>
      <ModalExperience
        isOpen={isModalExperience}
        handleClose={handleCloseExperience}
        handleEdit={handleEditExperience}
      />
      <ModalEducation
        isOpen={isModalEducation}
        handleClose={handleCloseEducation}
        handleEdit={handleEditEducation}
      />
      <ModalEditProfile
        isOpen={isModalProfile}
        handleClose={handleCloseProfile}
        handleEdit={handleEditProfile}
        data={user}
      />
      <ModalImage
        isOpen={isModalImage}
        handleClose={handleCloseImage}
        data={image}
        handleAsProfile={handleImageAsProfile}
        handleDelete={handleImageDelete}
      />
      <ModalLogout
        isOpen={isModalLogout}
        handleClose={handleCloseLogout}
        handleConfirm={handleLogout}
      />
      <ModalMessage
        isOpen={isModalMessage}
        handleClose={handleCloseMessage}
        data={message}
      />
    </div>
  );
};

export default Home;
