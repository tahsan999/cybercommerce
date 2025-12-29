import React, { useState } from 'react'
import Container from '../Utilities/Container.jsx'
import { IoChevronForwardSharp } from "react-icons/io5";
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import { TbDeviceMobileFilled } from "react-icons/tb";
import ShopButton from '../Utilities/ShopButton.jsx'
import { CiDeliveryTruck } from "react-icons/ci";
import iphone from '../../assets/images/iphone14pro.png'
import camera from '../../assets/images/camera.png'
import smartwatch from '../../assets/images/smartwatch.png'
import airpods from '../../assets/images/airpods2.png'
import { GoHeart } from "react-icons/go";

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
    const [sizes, setSizes] = useState([
        {id:1, name:'128GB', price:120000},
        {id:2, name:'256GB', price:100000},
        {id:3, name:'512GB', price:200000},
        {id:4, name:'1TB', price: 300000},
    ])

    const discountproduct = [
        {id:5, name:'Blackmagic Pocket Cinema Camera 6k', price:2535, image:camera},
        {id:6, name:'AirPods Max Silver', price:539, image:airpods},
        {id:7, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:8, name:'AirPods Max Silver', price:539, image:airpods},
    ] 

    const defaultSize = sizes.find(item => item.id === 1);
    const [price, setPrice] = useState(defaultSize?.price || 0)

    const handlePrice = (id) => {
        const selectedSize = sizes.find(item => item.id === id);
        if (selectedSize) {
            setPrice(selectedSize.price);
        }
    };

    const [showmore, setShowMore] = useState(false)
   
    
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
                        <span>{price}</span>  <del className='text-[24px] text-[#A0A0A0] leading-8 font-normal'>$1499</del>
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
                                        <input onChange={()=> handlePrice(size.id)} type="radio" name="size" id={`size${size.id}`} className='hidden' />
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
                        <div className='relative'>
                            <p className={`overflow-hidden transition-all duration-300 ${showmore ? 'max-h-[2000px]':'max-h-[100px]'} font-popins font-normal text-[#6C6C6C] text-[14px] leading-6 pt-6`}>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new system with two cameras Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas qui vitae, labore quibusdam ipsa mollitia dolore earum ullam maiores alias amet impedit rem? Consequuntur ab illo autem deserunt laborum distinctio optio numquam veniam accusantium tempora quae mollitia impedit laudantium ipsam, non animi dicta voluptatibus at quisquam cumque, adipisci rem.</p>
                            {
                                !showmore &&
                                <div className='absolute bottom-5 left-0 w-full h-[50px] bg-linear-to-t from-white to-transparent'></div>
                            }
                            
                            <a onClick={() => setShowMore(!showmore) } className='underline font-popins font-normal text-black text-[14px] leading-6 '>{showmore ? 'less...':'more...'}</a>
                        </div>

                        <div className='pt-8 flex gap-4'>
                            <a href="" className='font-popins text-[16px] leading-6 font-medium border rounded-md py-4 w-full text-center'>Add to Wishlist</a>
                            <a href="" className='font-popins text-[16px] leading-6 font-medium bg-black rounded-md py-4 w-full text-center text-white'>Add to Cart</a>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div className='flex pt-8 gap-4 items-center'>
                            <div className='w-14 h-14 bg-[#F6F6F6] rounded-[11px] flex justify-center items-center'>
                                <CiDeliveryTruck className='text-[24px] text-[#797979]' />
                            </div>
                            <div>
                                <h4 className='font-popins font-medium text-[14px] text-[#717171] leading-6'>Free Delivery</h4>
                                <p className='font-popins font-medium text-[14px] text-[#00000] leading-6'>1-2 day </p>
                            </div>
                        </div>
                        <div className='flex pt-8 gap-4 items-center'>
                            <div className='w-14 h-14 bg-[#F6F6F6] rounded-[11px] flex justify-center items-center'>
                                <CiDeliveryTruck className='text-[24px] text-[#797979]' />
                            </div>
                            <div>
                                <h4 className='font-popins font-medium text-[14px] text-[#717171] leading-6'>In Stock</h4>
                                <p className='font-popins font-medium text-[14px] text-[#00000] leading-6'>Today </p>
                            </div>
                        </div>
                        <div className='flex pt-8 gap-4 items-center'>
                            <div className='w-14 h-14 bg-[#F6F6F6] rounded-[11px] flex justify-center items-center'>
                                <CiDeliveryTruck className='text-[24px] text-[#797979]' />
                            </div>
                            <div>
                                <h4 className='font-popins font-medium text-[14px] text-[#717171] leading-6'>Guaranteed</h4>
                                <p className='font-popins font-medium text-[14px] text-[#00000] leading-6'>1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
            <div className='pb-8'>
                <h3 className='font-popins font-medium text-[24px] leading-8 text-black'>Related Products</h3>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-[55px]">
                {
                    discountproduct.map(dispro => (
                        <div className='bg-[#F6F6F6] rounded-[9px] p-4'>
                        <div className='py-2'>
                            <GoHeart className='ms-auto' />
                        </div>
                        <img className='mx-auto' src={dispro.image} alt="" />
                        <div className='pt-4 text-center pb-7'>
                            <h4 className='pb-4 font-popins font-medium text-[14px] leading-6 text-black'>{dispro.name}</h4>
                            <h3 className='pb-9 font-popins font-semibold text-[24px] leading-6 text-black'>${dispro.price}</h3>
                            <a href="" className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>Buy Now</a>
                        </div>
                    </div>
                    ))
                }
                
            </div>
        </Container>
    </section>
    </>
  )
}

export default Details