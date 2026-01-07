import React, { useEffect, useRef, useState } from 'react'
import Container from '../Utilities/Container'
import { CiMobile4 } from "react-icons/ci";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceGamepad } from "react-icons/tb";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import axios from 'axios';
import { Link } from 'react-router';

const CategorySlide = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
      axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategories(res.data))
    },[])
   const swiperRef = useRef(null);
  
  return (
    <>
    {/* <CiMobile4 className='mx-auto text-[38px] pb-2' /> */}
      <section className='py-20 bg-[#FAFAFA]'>
        <Container>
          <div className="flex pb-8 justify-between items-center">
            <div>
              <h2 className='font-popins font-medium text-[24px] leading-8 text-black'>Browse By Category</h2>
            </div>
            <div className='flex gap-4'>
              <GoChevronLeft onClick={() => swiperRef.current.slidePrev()} className='text-[24px] text-black cursor-pointer' />
              <GoChevronRight onClick={() => swiperRef.current.slideNext()} className='text-[24px] text-black cursor-pointer' />
            </div>
          </div>
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={32}
              slidesPerView={6}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
            {
              categories.map((category, index) => (
                <SwiperSlide>
                  <Link to={`/products/category/${category.slug}`}>
                    <div className='bg-[#EDEDED] rounded-[15px] py-6 text-center'>
                      <div className='text-[38px] pb-2 flex justify-center'>
                        <CiMobile4/>
                      </div>
                      <h3 className='font-popins font-medium text-[16px] leading-6 text-black'>{category.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
                
              ))
            }
            </Swiper>
        </Container>
      </section>
    </>
  )
}

export default CategorySlide