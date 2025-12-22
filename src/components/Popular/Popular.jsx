import React from 'react'
import pop1 from '../../assets/images/pop1.png'
import ipadpro from '../../assets/images/ipadpro.png'
import samsung from '../../assets/images/samsung.png'
import macbookpro from '../../assets/images/macbookpro.png'
import ShopButton from '../Utilities/ShopButton.jsx'
const Popular = () => {
    const populars = [
        {id:1, name:'Popular Products', image:samsung, desp:'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'},
        {id:2, name:'Ipad Pro', image:samsung, desp:'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'},
        {id:3, name:'Samsung Galaxy ', image:samsung, desp:'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'},
        {id:4, name:'Macbook Pro', image:samsung, desp:'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.'},
    ]

  return (
    <>
    <section className='pb-16'>
        <div className="flex">
            {
                populars.map(popular => {
                    let bgcolor = ''
                    let textcolor = ''
                    if(popular.id == 1){
                        bgcolor = 'white'
                    }
                    else if(popular.id == 2){
                        bgcolor = '#F9F9F9'
                    }
                    else if(popular.id == 3){
                        bgcolor = '#EAEAEA'
                    }
                    else if(popular.id == 4){
                        bgcolor = '#2C2C2C'
                        textcolor = 'white'

                    }
                    return(
                        <div className='w-1/4 overflow-hidden pb-[60px]' style={{ backgroundColor: bgcolor }}>
                            <img src={popular.image} alt=""  className={`mt-[-5px] ${popular.id == 4 ? 'ms-auto':'mx-auto'}`} />
                            <div className='px-8'>
                                <h3 className='font-popins font-light text-[33px] leading-12 text-black pb-4 pt-14' style={{ color:textcolor }}>{popular.name}</h3>
                                <p className='font-popins font-medium text-[14px] leading-6 text-[#909090] pb-8'>{popular.desp}</p>
                                <ShopButton className={`text-${textcolor}`}></ShopButton>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </section>
    </>
  )
}

export default Popular