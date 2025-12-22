import React from 'react'
import Container from '../Utilities/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoHeart } from "react-icons/go";
import iphone from '../../assets/images/iphone14pro.png'
import camera from '../../assets/images/camera.png'
import smartwatch from '../../assets/images/smartwatch.png'
import airpods from '../../assets/images/airpods2.png'

const MixProduct = () => {
    const newarrival = [
        {id:1, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:2, name:'Blackmagic Pocket Cinema Camera 6k', price:2535, image:camera},
        {id:3, name:'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', price:399, image:smartwatch},
        {id:4, name:'AirPods Max Silver', price:539, image:airpods},
        {id:5, name:'Blackmagic Pocket Cinema Camera 6k', price:2535, image:camera},
        {id:6, name:'AirPods Max Silver', price:539, image:airpods},
        {id:7, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:8, name:'AirPods Max Silver', price:539, image:airpods},
    ] 
    const bestseller = [
        {id:5, name:'Blackmagic Pocket Cinema Camera 6k', price:2535, image:camera},
        {id:6, name:'AirPods Max Silver', price:539, image:airpods},
        {id:7, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:8, name:'AirPods Max Silver', price:539, image:airpods},
    ] 
    const fetured = [
        {id:6, name:'AirPods Max Silver', price:539, image:airpods},
        {id:7, name:'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price:900, image:iphone},
        {id:8, name:'AirPods Max Silver', price:539, image:airpods},
    ] 
  return (
    <section className='py-14'>
        <Container>
            <div>
                <Tabs selectedTabClassName="activetab">
                    <TabList className="flex gap-8 pb-8">
                        <Tab><button className='font-popins font-medium text-[18px] leading-8 text-[#8B8B8B] cursor-pointer'>New Arrival</button></Tab>
                        <Tab><button className='font-popins font-medium text-[18px] leading-8 text-[#8B8B8B] cursor-pointer'>Bestseller</button></Tab>
                        <Tab><button className='font-popins font-medium text-[18px] leading-8 text-[#8B8B8B] cursor-pointer'>Featured Products</button></Tab>
                    </TabList>

                    <TabPanel className="grid grid-cols-4 gap-4 ">
                        {
                            newarrival.map(newarr => (
                                <div className='bg-[#F6F6F6] rounded-[9px] p-4'>
                                    <div className='py-2'>
                                        <GoHeart className='ms-auto' />
                                    </div>
                                    <img className='mx-auto' src={newarr.image} alt="" />
                                    <div className='pt-4 text-center pb-7'>
                                        <h4 className='pb-4 font-popins font-medium text-[14px] leading-6 text-black'>{newarr.name}</h4>
                                        <h3 className='pb-9 font-popins font-semibold text-[24px] leading-6 text-black'>${newarr.price}</h3>
                                        <a href="" className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>Buy Now</a>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </TabPanel>
                    <TabPanel className="grid grid-cols-4 gap-4 ">
                        {
                            bestseller.map(newarr => (
                                <div className='bg-[#F6F6F6] rounded-[9px] p-4'>
                                    <div className='py-2'>
                                        <GoHeart className='ms-auto' />
                                    </div>
                                    <img className='mx-auto' src={newarr.image} alt="" />
                                    <div className='pt-4 text-center pb-7'>
                                        <h4 className='pb-4 font-popins font-medium text-[14px] leading-6 text-black'>{newarr.name}</h4>
                                        <h3 className='pb-9 font-popins font-semibold text-[24px] leading-6 text-black'>${newarr.price}</h3>
                                        <a href="" className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>Buy Now</a>
                                    </div>
                                </div>
                            ))
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-4 gap-4 ">
                        {
                            fetured.map(newarr => (
                                <div className='bg-[#F6F6F6] rounded-[9px] p-4'>
                                    <div className='py-2'>
                                        <GoHeart className='ms-auto' />
                                    </div>
                                    <img className='mx-auto' src={newarr.image} alt="" />
                                    <div className='pt-4 text-center pb-7'>
                                        <h4 className='pb-4 font-popins font-medium text-[14px] leading-6 text-black'>{newarr.name}</h4>
                                        <h3 className='pb-9 font-popins font-semibold text-[24px] leading-6 text-black'>${newarr.price}</h3>
                                        <a href="" className='font-popins font-medium text-[14px] leading-6 text-white bg-black py-3 px-16 rounded-md'>Buy Now</a>
                                    </div>
                                </div>
                            ))
                        }
                    </TabPanel>
                    
                </Tabs>
            </div>
        </Container>
    </section>
  )
}

export default MixProduct