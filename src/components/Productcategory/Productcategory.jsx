import React, { useEffect, useState } from 'react'
import Container from '../Utilities/Container'
import iphone from '../../assets/images/iphone14pro.png'
import camera from '../../assets/images/camera.png'
import smartwatch from '../../assets/images/smartwatch.png'
import airpods from '../../assets/images/airpods2.png'
import { GoHeart } from "react-icons/go";
import { useParams } from 'react-router'
import axios from 'axios'

const ProductCategory = () => {
    const {slug} = useParams()
    const [products, setProducts] =  useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${slug}`)
        .then(res => setProducts(res.data.products))
    })

    const [visibleCount, setVisibleCount] = useState(4)

  return (
    <>
    <section className='py-20'>
        <Container>
            <div className='pb-8'>
                <h3 className='font-popins font-medium text-[24px] leading-8 text-black'>{slug}</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    products.slice(0, visibleCount).map((product, index) => (
                        <div key={index} className='bg-[#F6F6F6] rounded-[9px] p-4'>
                        <div className='py-2'>
                            <GoHeart className='ms-auto' />
                        </div>
                        <img className='mx-auto' src={product.thumbnail} alt="" />
                        <div className='pt-4 text-center pb-7'>
                            <h4 className='pb-4 font-popins font-medium text-[14px] leading-6 text-black'>{product.title}</h4>
                            <h3 className='pb-9 font-popins font-semibold text-[24px] leading-6 text-black'>${product.price}</h3>
                            <a href="" className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>Buy Now</a>
                        </div>
                    </div>
                    ))
                }
                
            </div>
            {
                visibleCount < products.length &&
                <div className='text-center pt-15'>
                    <button onClick={()=> setVisibleCount(visibleCount+4)} className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>View More Products</button>
                </div>
            }
            
        </Container>
    </section>
    </>
  )
}

export default ProductCategory