import { BiCamera, BiHeadphone, BiPhone } from "react-icons/bi";
import { BsController, BsSmartwatch } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import Container from "../Utilities/Container";

const categories = [
  {
    id: 1,
    name: "Phones",
    url: "/phones",
    icon: <BiPhone size={20} />,
  },
  {
    id: 2,
    name: "Computers",
    url: "/computers",
    icon: <FaComputer size={20} />,
  },
  {
    id: 3,
    name: "Smart Watches",
    url: "/smart-watches",
    icon: <BsSmartwatch size={20} />,
  },
  {
    id: 4,
    name: "Cameras",
    url: "/cameras",
    icon: <BiCamera size={20} />,
  },
  {
    id: 5,
    name: "Headphones",
    url: "/headphones",
    icon: <BiHeadphone size={20} />,
  },
  {
    id: 6,
    name: "Gaming",
    url: "/gaming",
    icon: <BsController size={20} />,
  },
];

const CategoryContainer = () => {
  return (
    <section className="bg-[#2E2E2E] py-3">
      <Container>
        <ul
          className="
            flex flex-wrap items-center justify-between
            gap-y-3 gap-x-5 text-white/70
          "
        >
          {categories.map((category, idx) => (
            <li
              key={category.id}
              className="
                flex items-center gap-2 px-4 py-1 
                border-r border-white/30 
                last:border-none
                hover:text-white transition-colors duration-200
                cursor-pointer
                text-sm md:text-base
              "
            >
              {category.icon}
              <a href={category.url}>{category.name}</a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CategoryContainer;
