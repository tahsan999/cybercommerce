import React, { useState } from 'react'
import Container from '../Utilities/Container.jsx'
import { IoChevronForwardSharp } from "react-icons/io5";
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import { TbDeviceMobileFilled } from "react-icons/tb";
import ShopButton from '../Utilities/ShopButton.jsx'
const Details = () => {
    const [previewImg, setPreviewImg] = useState(one)
    const [activeindex, setActiveIndex] = useState(0)
    const gallery = [one, two, three, four]
    const handlePreview = (img, index) => {
        setPreviewImg(img)
        setActiveIndex(index)
    }
    const colors = [
        {id:1, name:'black', code:'#000000', img:one},
        {id:2, name:'purple', code:'#781DBC', img:two},
        {id:3, name:'red', code:'#E10000', img:three},
        {id:4, name:'orange', code:'#E1B000', img:four},
        {id:5, name:'silver', code:'#E8E8E8', img:null},
    ]
    const sizes = [
        {id:1, name:'128GB'},
        {id:2, name:'256GB'},
        {id:3, name:'512GB'},
        {id:4, name:'1TB'},
    ]
    
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
              <a
                href=""
                className="flex items-center font-popins font-medium text-[16px] text-[#A4A4A4] leading-4 gap-4"
              >
                <span>Smartphones</span>
                <IoChevronForwardSharp className="text-[18px] text-[#A4A4A4]" />
              </a>
            </div>
            <div>
              <a
                href=""
                className="flex items-center font-popins font-medium text-[16px] text-[#A4A4A4] leading-4 gap-4"
              >
                <span>Apple</span>
                <IoChevronForwardSharp className="text-[18px] text-[#A4A4A4]" />
              </a>
            </div>
            <div>
              <span className="font-popins font-medium text-[16px] text-[#000000] leading-4">
                iPhone 14 Pro Max
              </span>
            </div>
            </div>
            <div className='flex gap-12 pb-[112px]'>
                <div className="w-1/2 flex gap-12 items-center">
                    <div className="w-[15%] flex flex-col gap-6">
                        {
                            gallery.map((gal, index) => (
                                <div>
                                    <img onClick={()=>handlePreview(gal, index)} className={`transition-all duration-300 w-[74px] h-[94px] ${activeindex ===index ? 'opacity-100 scale-120':'opacity-40'}`} src={gal} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-[85%]">
                        <img src={previewImg}  className='h-[516px] w-[414px]' alt="" />
                    </div>
                </div>
                <div className="w-1/2">
                    <h2 className='font-popins font-bold text-[40px] leading-10 text-black pb-6'>Apple iPhone 14 Pro Max</h2>
                    <h3 className='flex gap-4 items-center font-popins font-medium text-[32px] leading-12 text-black'>
                        <span>$1399</span>  <del className='text-[24px] text-[#A0A0A0] leading-8 font-normal'>$1499</del>
                    </h3>
                    <div className='color pt-5 flex gap-6 items-center'>
                        <div className='font-popins text-[#0C0C0C] font-normal text-[15px] leading-6'>
                            Select color :
                        </div>
                        <div className='flex gap-2'>
                            {
                                colors.map((color, index) => (
                                    <div key={index} className='colors'>
                                        <input type="radio" name="color" id={`color${color.id}`} className='hidden' />
                                        <label htmlFor={`color${color.id}`}>
                                            <span onClick={()=>handlePreview(color.img, index)} title={color.name} style={{ backgroundColor: color.code }} className='h-8 w-8 bg-[${color.code}] rounded-full inline-block'></span>
                                        </label>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className="size pt-6">
                        <div className='flex gap-2'>
                            {
                                sizes.map((size, index) => (
                                    <div key={index} className='colors'>
                                        <input type="radio" name="size" id={`size${size.id}`} className='hidden' />
                                        <label htmlFor={`size${size.id}`}>
                                            <span className='font-popins font-medium text-[14px] text-[#6F6F6F] h-12 w-[94px] rounded-md inline-block border border-[#D5D5D5] text-center leading-12'>{size.name}</span>
                                        </label>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className='grid grid-cols-3 pt-10 gap-4'>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                        <div className='bg-[#F4F4F4] flex gap-2 items-center p-4 rounded-[7px]'>
                            <TbDeviceMobileFilled />
                            <span className='font-popins font-normal text-[14px] text-[#A7A7A7] leading-4 pr-5'>Screen size <span className='text-[#4E4E4E] font-medium'>6.7"</span></span>
                        </div>
                    </div>
                    <div>
                        <p className='font-popins font-normal text-[#6C6C6C] text-[14px] leading-6 pt-6'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras </p>

                        <div className='pt-8 flex gap-4'>
                            <a href="" className='font-popins text-[16px] leading-6 font-medium border rounded-md py-4 w-full text-center'>Add to Wishlist</a>
                            <a href="" className='font-popins text-[16px] leading-6 font-medium bg-black rounded-md py-4 w-full text-center text-white'>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Details