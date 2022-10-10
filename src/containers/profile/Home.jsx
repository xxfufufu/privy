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
    <p>loading....</p>
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
