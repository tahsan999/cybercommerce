import React from "react";
import playstation from "../../assets/images/playstation.png";
import airpods from "../../assets/images/airpods.png";
import visionpro from "../../assets/images/visionpro.png";
import macbook from "../../assets/images/macbook.png";
import ShopButton from "../Utilities/ShopButton";

const Featured = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="w-1/2">
                <img src={playstation} alt="" />
              </div>
              <div className="w-1/2">
                <h3 className="font-popins font-medium text-[49px] leading-10 text-black pb-4">
                  Playstation 5
                </h3>
                <p className="font-popins font-medium text-[#909090] text-[14px] leading-6 pr-15">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="flex items-center gap-12 w-1/2 bg-[#EDEDED]">
                <div className="w-[25%]">
                  <img src={airpods} alt="" />
                </div>
                <div className="w-[80%] pr-15">
                  <h3 className="font-popins font-light text-[29px] leading-10 text-black pb-2">
                    Apple AirPods <span className="font-medium">Max</span>
                  </h3>
                  <p className="font-popins font-medium text-[14px] text-[#909090] leading-6">
                    Computational audio. Listen, it's powerful
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-12 w-1/2 bg-[#353535]">
                <div className="w-[25%]">
                  <img src={visionpro} alt="" />
                </div>
                <div className="w-[80%]">
                  <h3 className="font-popins font-light text-[29px] leading-10 text-white pb-2 pr-22.5">
                    Apple Vision <span className="font-medium">Pro</span>
                  </h3>
                  <p className="font-popins font-medium text-[14px] text-[#909090] leading-6 pr-15">
                    An immersive way to experience entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[#EDEDED]">
            <div className="flex items-center h-full pl-14">
              <div className="w-[65%]">
                <h3 className="font-popins font-thin text-[58px] leading-14 text-black pb-4">
                 Macbook <span className="font-semibold">Air</span>
                </h3>
                <p className="font-popins font-medium text-[#909090] text-[16px] leading-6 pb-8 max-w-[360px]">
                  The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                </p>
                <ShopButton className="text-black border-black"></ShopButton>
              </div>
              <div className="w-[35%]">
                <img src={macbook} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
