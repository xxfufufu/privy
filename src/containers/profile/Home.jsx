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
  Experience,
  Education,
  ModalExperience,
  ModalEducation,
  ModalImage,
} from "./components";
import { CogIcon } from "@heroicons/react/solid";
import { ModalEditProfile } from "./components/ModalEditProfile";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const [isModalExperience, setIsModalExperience] = useState(false);
  const [isModalEducation, setIsModalEducation] = useState(false);
  const [isModalProfile, setIsModalProfile] = useState(false);
  const [isModalImage, setIsModalImage] = useState(false);
  const [image, setImage] = useState(null);

  const handleUploadBanner = (event) => {
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      dispatch(uploadImageBanner(formData)).catch((err) => console.log(err));
    }
  };

  const handleUploadProfile = (event) => {
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      dispatch(uploadImageProfile(formData)).catch((err) => console.log(err));
    }
  };

  const handleCloseExperience = () => setIsModalExperience(false);

  const handleOpenExperience = () => setIsModalExperience(true);

  const handleEditExperience = (data) => {
    dispatch(editExperienceUser(data)).then(() => {
      setIsModalExperience(false);
      dispatch(getDataUser());
    });
  };

  const handleCloseEducation = () => setIsModalEducation(false);

  const handleOpenEducation = () => setIsModalEducation(true);

  const handleEditEducation = (data) => {
    dispatch(editEducationUser(data)).then(() => {
      setIsModalEducation(false);
      dispatch(getDataUser());
    });
  };

  const handleCloseProfile = () => setIsModalProfile(false);

  const handleOpenProfile = () => setIsModalProfile(true);

  const handleEditProfile = (data) => {
    data["gender"] = data.gender === "male" ? 0 : 1;
    dispatch(editProfileUser(data)).then(() => {
      setIsModalProfile(false);
      dispatch(getDataUser());
    });
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
    dispatch(imageAsProfile({ id: image.id })).then(() => {
      setIsModalImage(false);
      setImage(null);
      dispatch(getDataUser());
    });
  };

  const handleImageDelete = () => {
    dispatch(imageDelete(image.id))
      .then(() => {
        setIsModalImage(false);
        setImage(null);
        dispatch(getDataUser());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getDataUser()).catch((err) => console.log(err));
  }, [dispatch]);

  return isLoading ? (
    <p>loading....</p>
  ) : (
    <div className=" max-w-7xl m-auto">
      <div className="fixed z-10 m-5 p-1 rounded-full bg-slate-100">
        <CogIcon className="w-4 h-4 md:w-6 md:h-6" />
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
    </div>
  );
};

export default Home;
