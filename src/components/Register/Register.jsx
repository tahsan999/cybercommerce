import { Link } from "react-router";
import Container from "../Utilities/Container.jsx";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const auth = getAuth();
  const [formdata, setFormData] = useState(
    {
      name: "",
      email: "",
      password: "",
    },
  );

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newerrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!formdata.name) {
      newerrors.name = "Please Enter Your Name";
    }
    if (!formdata.email) {
      newerrors.email = "Please Enter Your Email";
    } else if (!emailRegex.test(formdata.email)) {
      newerrors.email = "Please Enter Valid Email";
    }
    if (!formdata.password) {
      newerrors.password = "Please Enter Your password";
    } else if (!passRegex.test(formdata.password)) {
      newerrors.password =
        "password must have uppercase, lowercase, number, symbols and min 8 charecters";
    }
    setErrors(newerrors);

    return Object.keys(newerrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createUserWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
      ).then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: formdata.name,
        });
      });

      setFormData(
        {
          name:'',
          email:'',
          password:'',
        }
      );

      Swal.fire({
        title: "Congratulations!",
        text: "Registration success!",
        icon: "success",
      });
    }
  };

  return (
    <section className="py-20">
      <Container>
        <div className="w-1/2 mx-auto border border-[#EBEBEB] rounded-[10px] py-14 px-16">
          <h3 className="font-popins  font-bold text-[20px] text-[#111111] leading-4 pb-10">
            Sign Up Form
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Full Name
              </label>
              <input value={formdata.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="text"
              />
              {errors.name && (
                <strong className="text-red-500">{errors.name}</strong>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Email Address
              </label>
              <input value={formdata.email}
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
              <input value={formdata.password}
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
              Register
            </button>

            <div className="flex justify-between items-center">
              <p className="font-popins font-medium text-[16px] leading-6 text-red-500">
                Already Registered?
              </p>
              <Link
                to="/login"
                className="bg-black rounded-md py-2 px-6 font-popins font-medium text-[16px] leading-6 text-white"
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
