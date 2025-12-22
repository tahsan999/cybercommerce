import React from 'react'
import Container from '../Utilities/Container'
import iphone from '../../assets/images/iphone14pro.png'
import camera from '../../assets/images/camera.png'
import smartwatch from '../../assets/images/smartwatch.png'
import airpods from '../../assets/images/airpods2.png'
import { GoHeart } from "react-icons/go";

const DiscountProduct = () => {
    const discountproduct = [
        {id:5, name:'Blackmagic Pocket Cinema Camera 6k', price:2535, image:camera},
        {id:6, name:'AirPods Max Silver', price:539, image:airpods},
        {id:7, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:8, name:'AirPods Max Silver', price:539, image:airpods},
    ] 
  return (
    <>
    <section className='pb-20'>
        <Container>
            <div className='pb-8'>
                <h3 className='font-popins font-medium text-[24px] leading-8 text-black'>Discounts up to -50%</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
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

export default DiscountProduct