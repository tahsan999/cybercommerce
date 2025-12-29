import React from 'react'
import Container from '../../components/Utilities/Container.jsx'
import cart1 from '../../assets/images/cart.png'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <section className='pt-18 pb-32'>
        <Container>
            <div className="flex gap-12">
                <div className='w-1/2'>
                    <h2 className='pb-10 font-popins font-semibold text-[24px] text-black leading-6'>Shopping Cart</h2>

                    <div>
                        <div className='flex items-center gap-[15px] border-b border-[#A3A3A3] pb-14'>
                            <div className='w-[20%]'>
                                <img src={cart1} alt="" />
                            </div>
                            <div className='w-[40%]'>
                                <h4 className='font-popins font-medium text-[16px] leading-6 text-black pb-2'>Apple iPhone 14 Pro Max 128Gb Deep Purple</h4>
                                <p className='font-popins font-normal text-[14px] leading-6 text-black'>#25139526913984</p>
                            </div>
                            <div className='flex items-center gap-2 w-[20%]'>
                                <FiMinus/>
                                <span className='w-[38px] font-popins font-medium text-[16px] text-black h-8 border border-[#D9D9D9] rounded-sm text-center leading-8'>2</span>
                                <GoPlus/>
                            </div>
                            <div className='flex w-[20%] justify-between items-center'>
                                <span className='font-popins font-medium text-[20px] leading-8 text-black'>$1399</span>
                                <IoCloseOutline className='text-[24px]'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'></div>
            </div>
        </Container>
    </section>
  )
}

export default Cart