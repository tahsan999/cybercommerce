import React from 'react'
import Container from "../Utilities/Container";
import banner_img from '../../assets/images/banner_img.png'
import ShopButton from '../Utilities/ShopButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    autoplay:true,
    autoplaySpeed:1500,
    arrows:false,

  };
  return (
    <section className='bg-[#211C24]'>
        <Container>
          <Slider {...settings}>
          <div>
            <div className="flex items-center">
              <div className='w-[70%]'>
                  <h4 className='font-figtree font-semibold text-[25px] text-[rgba(255,255,255,0.4)] leading-8'>Pro.Beyond.</h4>
                  <h1 className='py-6 font-popins text-[96px] leading-18 text-white font-thin'>IPhone 14 <span className='font-semibold'>Pro</span></h1>
                  <p className='font-popins font-medium text-[#909090] text-[18px] leading-6 pb-10'>Created to change everything for the better. For everyone</p>
                  <ShopButton className="text-white border-white"></ShopButton>
              </div>
              <div className='w-[30%] pt-[73px]'>
                  <img src={banner_img} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
            <div className='w-[70%]'>
                <h4 className='font-figtree font-semibold text-[25px] text-[rgba(255,255,255,0.4)] leading-8'>Pro.Beyond.</h4>
                <h1 className='py-6 font-popins text-[96px] leading-18 text-white font-thin'>IPhone 17 <span className='font-semibold'>Pro</span></h1>
                <p className='font-popins font-medium text-[#909090] text-[18px] leading-6 pb-10'>Created to change everything for the better. For everyone</p>
                <ShopButton className="text-white border-white"></ShopButton>
            </div>
            <div className='w-[30%] pt-[73px]'>
                <img src={banner_img} alt="" />
            </div>
          </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className='w-[70%]'>
                  <h4 className='font-figtree font-semibold text-[25px] text-[rgba(255,255,255,0.4)] leading-8'>Pro.Beyond.</h4>
                  <h1 className='py-6 font-popins text-[96px] leading-18 text-white font-thin'>IPhone 18 <span className='font-semibold'>Pro</span></h1>
                  <p className='font-popins font-medium text-[#909090] text-[18px] leading-6 pb-10'>Created to change everything for the better. For everyone</p>
                  <ShopButton className="text-white border-white" ></ShopButton>
              </div>
              <div className='w-[30%] pt-[73px]'>
                  <img src={banner_img} alt="" />
              </div>
            </div>
          </div>
          </Slider>
        </Container>
    </section>
  )
}

export default BannerSlider