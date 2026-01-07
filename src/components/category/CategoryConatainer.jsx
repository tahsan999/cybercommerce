import { BiCamera, BiHeadphone, BiPhone } from "react-icons/bi";
import { BsController, BsSmartwatch } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import Container from "../Utilities/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";


const CategoryContainer = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(res => setCategories(res.data))
  },[])

  return (
    <section className="bg-[#2E2E2E] py-3">
      <Container>
        <ul
          className="
            flex flex-wrap items-center justify-between
            gap-y-3 gap-x-5 text-white/70
          "
        >
          {categories.slice(0,6).map((category, index) => (
            <li
              key={index}
              className="
                flex items-center gap-2 px-4 py-1 
                border-r border-white/30 
                last:border-none
                hover:text-white transition-colors duration-200
                cursor-pointer
                text-sm md:text-base
              "
            >
              <BsSmartwatch></BsSmartwatch>
              <Link to={`/products/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CategoryContainer;
