import React, { useEffect, useState } from "react";
import Container from "../Utilities/Container.jsx";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Please Enter Your Email";
    }
    if (!formData.password) {
      newErrors.password = "Please Enter Your Password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  setTimeout(() => {
    setErrorMessage("");
  }, 5000);

  return (
    <section className="py-20">
      <Container>
        <div className="w-1/2 mx-auto border border-[#EBEBEB] rounded-[10px] py-14 px-16">
          <h3 className="font-popins  font-bold text-[20px] text-[#111111] leading-4 pb-10">
            Login Form
          </h3>
          {errorMessage && (
            <div className="py-2 px-3 bg-red-400 text-white rounded-sm w-full mb-3">
              Invalid Credentials
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="email"
              />
              {errors.email && (
                <strong className="text-red-500">{errors.email}</strong>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Password
              </label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="password"
              />
              {errors.password && (
                <strong className="text-red-500">{errors.password}</strong>
              )}
            </div>

            <button
              type="submit"
              className="font-popins font-medium text-[16px] leading-6 text-white bg-black rounded -md w-full py-4"
            >
              Login
            </button>

            <div className="flex justify-between items-center">
              <p className="font-popins font-medium text-[16px] leading-6 text-red-500">
                Not Registered Yet?
              </p>
              <Link
                to="/register"
                className="bg-black rounded-md py-2 px-6 font-popins font-medium text-[16px] leading-6 text-white"
              >
                Signup Here
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
