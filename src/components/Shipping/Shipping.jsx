import React, { useState } from "react";
import Step1 from "../../assets/images/step1.png"
import Step2 from "../../assets/images/step2.png"
import Step3 from "../../assets/images/step3.png"
import Container from "../Utilities/Container";


const Shipping = () => {
  const [method, setMethod] = useState("free");

  const optionStyle = (value) =>
    `flex items-center justify-between border rounded-[11px] p-6 mb-4 cursor-pointer transition
     ${method === value ? "border-black text-black" : "border-[#A2A3B1] text-[#A2A3B1]"}`;

  return (
    <Container>
         <div className="flex items-center justify-center p-6">
      <div className="w-full">
        <div className="flex items-center justify-between h-10 mb-[72px]">
            <div>
              <img src={Step1} alt="" />
            </div>
            <div>
              <img src={Step2} alt="" />
            </div>
            <div>
              <img src={Step3} alt="" />
        
            </div>
        </div>

        <h2 className="text-lg font-popins font-semibold mb-6">Shipment Method</h2>
        <div onClick={() => setMethod("free")} className={optionStyle("free")}>
          <div className=" flex items-center gap-3">
            <input className="custom-radio" type="radio" checked={method === "free"} readOnly />
            <div className="flex gap-4">
              <p className="font-popins font-medium">Free</p>
              <p className=" font-popins text-4 leading-6 font-regular ">Regular shipment</p>
            </div>
          </div>
          <span className="text-sm">17 Oct, 2023</span>
        </div>

        {/* Express */}
        <div
          onClick={() => setMethod("express")}
          className={optionStyle("express")}
        >
          <div className="flex items-center gap-3">
            <input type="radio" checked={method === "express"} readOnly />
            <div className="flex gap-4">
              <p className="font-popins font-medium">$8.50</p>
              <p className="font-popins text-4 leading-6 font-regular">Get your delivery as soon as possible</p>
            </div>
          </div>
          <span className="text-sm">1 Oct, 2023</span>
        </div>

        {/* Schedule */}
        <div
          onClick={() => setMethod("schedule")}
          className={optionStyle("schedule")}
        >
          <div className="flex items-center gap-3">
            <input type="radio" checked={method === "schedule"} readOnly />
            <div className="flex gap-4">
              <p className="font-popins font-medium">Schedule</p>
              <p className="font-popins text-4 leading-6 font-regular">Pick a date when you want delivery</p>
            </div>
          </div>
          <span className="text-sm">Select Date</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-6 py-2 border rounded-md">Back</button>
          <button className="px-6 py-2 bg-black text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
    </Container>
   
  );
};

export default Shipping;
