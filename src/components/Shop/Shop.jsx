import React, { useEffect, useState } from 'react'
import Container from '../../components/Utilities/Container.jsx'
import { IoChevronForwardSharp } from "react-icons/io5";
import PriceRange from '../Utilities/PriceRange.jsx';
import { TbChevronDown } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import iphone from "../../assets/images/iphone14pro.png";
import camera from "../../assets/images/camera.png";
import smartwatch from "../../assets/images/smartwatch.png";
import airpods from "../../assets/images/airpods2.png";
import ReactPaginate from "react-paginate";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from 'react-router';
import axios from 'axios';

const Shop = () => {
    const [priceOpen, setpriceOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(false);
    const [brandInput, setbrandInput] = useState('');
    const [ramInput, setRamInput] = useState('');
    const [ramOpen, setRamOpen] = useState(false);


  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Poco",
    "OPPO",
    "Honor",
    "Motorola",
    "Nokia",
    "Realme",
  ];

const [open, setOpen] = useState(false)
const [sort, setSort] = useState('By Rating')
const sortlist = ['By Rating', 'By Price']


const searchedBrand = brands.filter((item) => item.toLowerCase().includes(brandInput.toLowerCase()));
  

  const [products, setProducts] = useState([])
  const [sortBy, setSortBy] =  useState('rating')

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?sortBy=${sortBy}`)
    .then(res => setProducts(res.data.products))
  })

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const startItem = offset + 1;
  const endItem = offset + currentItems.length;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };




  return (
    <>
      <section>
        <Container>
          <div className="pt-11 pb-20 flex items-center gap-4">
            <div>
              <a
                href=""
                className="flex items-center font-popins font-medium text-[16px] text-[#A4A4A4] leading-4 gap-4"
              >
                <span>Home</span>
                <IoChevronForwardSharp className="text-[18px] text-[#A4A4A4]" />
              </a>
            </div>
            <div>
              <a
                href=""
                className="flex items-center font-popins font-medium text-[16px] text-[#A4A4A4] leading-4 gap-4"
              >
                <span>Catalog</span>
                <IoChevronForwardSharp className="text-[18px] text-[#A4A4A4]" />
              </a>
            </div>
            <div>
              <span className="font-popins font-medium text-[16px] text-[#000000] leading-4">
                Smartphones
              </span>
            </div>
          </div>

          <div className="flex gap-8 pb-10 items-baseline">
            <div className="w-1/4 flex flex-col gap-9">
              <div>
                <h2
                  onClick={() => setpriceOpen((prev) => !prev)}
                  className="flex justify-between font-popins font-medium text-[18px] leading-6 text-black items-center border-b border-[#B5B5B5] pb-3"
                >
                  <span>Price</span>
                  <TbChevronDown
                    className={`text-[24px] transition-transform duration-300 ${
                      priceOpen ? "rotate-180 " : "rotate-0"
                    }`}
                  />
                </h2>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    priceOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <PriceRange />
                  </div>
                </div>
              </div>
              <div className="">
                <h2
                  onClick={() => setBrandOpen((prev) => !prev)}
                  className="flex justify-between font-popins font-medium text-[18px] leading-6 text-black items-center border-b border-[#B5B5B5] pb-3"
                >
                  <span>Brand</span>
                  <TbChevronDown
                    className={`text-[24px] transition-transform duration-300 ${
                      brandOpen ? "rotate-180 " : "rotate-0"
                    }`}
                  />
                </h2>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    brandOpen ? "grid-rows-[1fr] pt-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="custom-scroll overflow-y-auto max-h-[300px]">
                    <div className="relative mb-4 ">
                      <input
                        onChange={(e) => setbrandInput(e.target.value)}
                        type="text"
                        placeholder="Search"
                        className="bg-[#F5F5F5] outline-0 border-0 rounded-md py-3 ps-12 pe-4 w-[90%] font-popins font-medium text-[14px] leading-4.5 text-[#656565]"
                      />
                      <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-[24px] text-[#656565]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {searchedBrand.map((brand, index) => (
                        <div>
                          <input
                            id={`brand${index}`}
                            type="radio"
                            name="brand"
                            className="hidden"
                          />
                          <label
                            htmlFor={`brand${index}`}
                            className="flex items-center gap-2 font-popins font-medium text-[15px] leading-6 text-black"
                          >
                            <span className="w-4 h-4 inline-block rounded-[3px] border text-white border-[#D3D3D3]">
                              <IoIosCheckmark />
                            </span>
                            {brand}{" "}
                            <span className="font-popins font-normal text-[12px] text-[#929292] leading-6">
                              110
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h2
                  onClick={() => setRamOpen((prev) => !prev)}
                  className="flex justify-between font-popins font-medium text-[18px] leading-6 text-black items-center border-b border-[#B5B5B5] pb-3"
                >
                  <span>Built-in memory</span>
                  <TbChevronDown
                    className={`text-[24px] transition-transform duration-300 ${
                      ramOpen ? "rotate-180 " : "rotate-0"
                    }`}
                  />
                </h2>
                <div
                  className={`grid transition-[grid-template-rows] pt-6 duration-300 ease-in-out ${
                    ramOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="custom-scroll overflow-y-auto max-h-[300px]">
                    <div className="relative mb-4 ">
                      <input
                        onChange={(e) => setRamInput(e.target.value)}
                        type="text"
                        placeholder="Search"
                        className="bg-[#F5F5F5] outline-0 border-0 rounded-md py-3 ps-12 pe-4 w-[90%] font-popins font-medium text-[14px] leading-4.5 text-[#656565]"
                      />
                      <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-[24px] text-[#656565]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {searchedBrand.map((brand, index) => (
                        <div>
                          <input
                            id={`brand${index}`}
                            type="radio"
                            name="brand"
                            className="hidden"
                          />
                          <label
                            htmlFor={`brand${index}`}
                            className="flex items-center gap-2 font-popins font-medium text-[15px] leading-6 text-black"
                          >
                            <span className="w-4 h-4 inline-block rounded-[3px] border text-white border-[#D3D3D3]">
                              <IoIosCheckmark />
                            </span>
                            {brand}{" "}
                            <span className="font-popins font-normal text-[12px] text-[#929292] leading-6">
                              110
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="font-popins font-medium text-[#6C6C6C] text-[16px] leading-4">
                    Selected Products:{" "}
                    <span className="text-[20px] text-black">{startItem}–{endItem} of {products.length}</span>
                  </p>
                </div>
                <div className="w-[256px] relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between border border-[#D4D4D4] rounded-md px-4 py-3 items-center cursor-pointer"
                  >
                    <span className="font-popins font-normal text-[14px] leading-4 text-black">
                      {sort}
                    </span>
                    <TbChevronDown className="text-[#9F9F9F] text-[24px]" />
                  </button>
                  {open && (
                    <ul className="bg-[#ddd] border border-[#D4D4D4] rounded-md py-3 flex flex-col gap-3 absolute top-12 left-0 w-full">
                      {sortlist.map((item, index) => (
                        <li
                          onClick={() => {
                            setSort(item);
                            setOpen(false);
                            sortBy=='rating'? setSortBy('price') :setSortBy('rating')
                          }}
                          className={`${
                            index !== sortlist.length - 1
                              ? "border-b pb-3 border-[#887e7e]"
                              : ""
                          }  px-4 cursor-pointer`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {currentItems.map((product) => (
                  <div className="bg-[#F6F6F6] rounded-[9px] p-4">
                    <div className="py-2">
                      <GoHeart className="ms-auto" />
                    </div>
                    <img className="mx-auto" src={product.thumbnail} alt="" />
                    <div className="pt-4 text-center pb-7">
                      <h4 className="pb-4 font-popins font-medium text-[14px] leading-6 text-black">
                       <Link to="/product/details">{product.title}</Link>
                      </h4>
                      <h3 className="pb-9 font-popins font-semibold text-[24px] leading-6 text-black">
                        ${product.price}
                      </h3>
                      <a
                        href=""
                        className="font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-center mt-10">
                  <ReactPaginate
                    previousLabel={<VscChevronLeft />}
                    nextLabel={<VscChevronRight />}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"flex gap-2 items-center"}
                    pageClassName={
                      "px-3 py-1 bg-[#F6F6F6] rounded-[5px] cursor-pointer font-popins font-medium text-[16px] text-black leading-6"
                    }
                    activeClassName={"bg-black text-white"}
                    previousClassName={
                      "text-[24px] text-black cursor-pointer pr-4"
                    }
                    nextClassName={"text-[24px] text-black cursor-pointer ps-4"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Shop