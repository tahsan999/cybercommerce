import { Link } from 'react-router';
import Container from '../Utilities/Container.jsx';

const Register = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="w-1/2 mx-auto border border-[#EBEBEB] rounded-[10px] py-14 px-16">
          <h3 className="font-popins  font-bold text-[20px] text-[#111111] leading-4 pb-10">
            Sign Up Form
          </h3>
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Full Name
              </label>
              <input
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Email Address
              </label>
              <input
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                Password
              </label>
              <input
                className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                type="password"
              />
            </div>

            <button className="font-popins font-medium text-[16px] leading-6 text-white bg-black rounded -md w-full py-4">
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
}

export default Register