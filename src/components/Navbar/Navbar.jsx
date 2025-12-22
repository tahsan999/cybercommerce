import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import Container from "../Utilities/Container";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="py-4">
        <Container>
          <div className="flex gap-8 items-center justify-between ">
            <div>
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="w-[30%] relative">
              <input
                type="text"
                className="rounded-lg bg-[#F5F5F5] outline-0 p-4 pl-10 font-popins font-medium text-[14px] leading-[18px] text-[#656565] w-full"
                placeholder="Search"
              />
              <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-[#989898] text-[20px]" />
            </div>
            <div>
              <ul className="flex gap-[52px] menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="[&>div]:text-black [&>div]:text-[20px]">
              <div className="flex gap-6">
                <IoHeartOutline />
                <IoCartOutline />
                <FiUser />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
