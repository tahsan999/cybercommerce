import { useState } from 'react'
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { IoCloseOutline } from "react-icons/io5"
import cart1 from '../../assets/images/cart.png'
import cart2 from '../../assets/images/cart2.png'
import cart3 from '../../assets/images/cart3.png'
import Container from '../../components/Utilities/Container.jsx'
import { Link } from 'react-router'

const Cart = () => {
    const [carts, setCarts] = useState([
      {
        id: 1,
        name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
        price: 1399,
        quantity: 2,
        sku: "#25139526913984",
        img: cart1,
        stock: 10,
      },
      {
        id: 2,
        name: "AirPods Max Silver",
        price: 549,
        quantity: 1,
        sku: "#53459358345",
        img: cart2,
        stock: 5,
      },
      {
        id: 3,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
        price: 399,
        quantity: 1,
        sku: "#63632324",
        img: cart3,
        stock: 7,
      },
    ]);

    const removeCart = (id) => {
        setCarts(prev => prev.filter(item => item.id !== id))
    }

    const increment = (id) => {
        setCarts(prev =>
             prev.map(item =>  
                item.id === id && item.quantity < item.stock ?  { ...item, quantity: item.quantity + 1 } : item
             )
        )
    }
    const decrement = (id) => {
        setCarts(prev =>
             prev.map(item =>  
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
             )
        )
    }

    let subtotal = 0
    carts.map(item => {
        subtotal += item.price*item.quantity
    })

    const [tax, setTax] = useState(50)
    const [shipping, setShipping] = useState(29);
    let total = subtotal+tax+shipping

    const coupons =  [
        {id:1, coupon:'HNY26', discount:26, expiredate:'31-01-2026'},
        {id:2, coupon:'Happy', discount:10, expiredate:'31-01-2026'},
    ]

    const [coupon, setCoupon] = useState('')
    const [discount, setDiscount] = useState(0)




  return (
    <section className="pt-18 pb-32">
      <Container>
        <div className="flex gap-12">
          <div className="w-1/2">
            <h2 className="pb-10 font-popins font-semibold text-[24px] text-black leading-6">
              Shopping Cart
            </h2>
            {carts.map((cart, index) => (
              <div>
                <div
                  className={`flex items-center gap-[15px] ${
                    index == 0 ? "" : "border-t border-[#A3A3A3] pt-10"
                  } pb-14`}
                >
                  <div className="w-[20%]">
                    <img src={cart.img} alt="" />
                  </div>
                  <div className="w-[40%]">
                    <h4 className="font-popins font-medium text-[16px] leading-6 text-black pb-2">
                      {cart.name}
                    </h4>

                    <p className="font-popins font-normal text-[14px] leading-6 text-black">
                      {cart.sku}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-[20%]">
                    <FiMinus onClick={() => decrement(cart.id)} />
                    <span className="w-[38px] font-popins font-medium text-[16px] text-black h-8 border border-[#D9D9D9] rounded-sm text-center leading-8 select-none">
                      {cart.quantity}
                    </span>
                    <GoPlus onClick={() => increment(cart.id)} />
                  </div>
                  <div className="flex w-[20%] justify-between items-center">
                    <span className="font-popins font-medium text-[20px] leading-8 text-black">
                      ${cart.price * cart.quantity}
                    </span>
                    <IoCloseOutline
                      onClick={() => removeCart(cart.id)}
                      className="text-[24px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 border border-[#EBEBEB] rounded-[10px] py-14 px-16">
            <h3 className="font-popins  font-bold text-[20px] text-[#111111] leading-4 pb-10">
              Order Summary
            </h3>
            <form action="">
              <div className="flex flex-col gap-2">
                <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                  Discount code / Promo code
                </label>
                <input onChange={(e) => setCoupon(e.target.value)}
                  className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                  type="text"
                  placeholder="Code"
                />
              </div>
              <div className="flex flex-col gap-2 pt-6 relative">
                <label className="font-popins font-medium text-[14px] leading-4 text-[#545454]">
                  Your bonus card number
                </label>
                <input
                  className="font-popins font-normal text-[14px] leading-6 text-[#979797] border-[#9F9F9F] border rounded-[7px] p-4 outline-0"
                  type="text"
                  placeholder="Enter Card Number"
                />
                <button className="w-[76px] rounded-md font-popins text-[12px] font-medium text-black leading-4 p-2 border border-[#000000] absolute bottom-3 right-4">
                  Apply
                </button>
              </div>
              <div className="pt-7 pb-12">
                <div className="flex justify-between pb-4">
                  <span className="font-popins font-medium text-[16px] text-black leading-6">
                    Subtotal
                  </span>
                  <span className="font-popins font-medium text-[16px] text-black leading-8">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                    Estimated Tax
                  </span>
                  <span className="font-popins font-medium text-[16px] text-black leading-8">
                    ${tax}
                  </span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                    Estimated shipping & Handling
                  </span>
                  <span className="font-popins font-medium text-[16px] text-black leading-8">
                    ${shipping}
                  </span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="font-popins font-medium text-[16px] text-black leading-6">
                    Total
                  </span>
                  <span className="font-popins font-medium text-[16px] text-black leading-8">
                    ${total}
                  </span>
                </div>
              </div>
              <Link to="/address">
                <button className="font-popins font-medium text-[16px] leading-6 text-white bg-black rounded -md w-full py-4">
                Checkout
              </button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cart