import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/action/auth.action";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [position, setPosition] = useState(null);

  const onSubmit = (data) => {
    data["device_token"] = null;
    data["latlong"] = `${position?.lat},${position?.long}`;
    data["device_type"] = 2;
    dispatch(loginUser(data))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) =>
        setPosition({ lat: res.coords.latitude, long: res.coords.longitude })
      );
    }
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-1/3 border p-7 bg-slate-200 rounded-md"
      >
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <p className=" text-center mb-5">
          Belum punya akun?
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => navigate("/register")}
          >
            Daftar
          </span>
        </p>
        <InputField
          name="phone"
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: true,
            pattern: /^[0-9]+$/,
          })}
          error={errors.phone}
          errorWording={{
            required: "This field is required",
            pattern: "Invalid number phone",
          }}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
          })}
          error={errors.password}
          errorWording={{
            required: "This field is required",
            pattern: "Minimal 6 character, uppercase, lowercase and number",
          }}
        />
        <hr className="my-8 h-0.5 bg-gray-300 border-0 dark:bg-gray-700" />
        <div className="flex justify-center">
          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
