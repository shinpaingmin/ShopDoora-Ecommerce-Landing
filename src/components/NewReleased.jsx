import { feature1, newReleased } from "../constants"

import Button from "./Button"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import NewReleasedSlideBtn from "./NewReleasedSlideBtn";
import DevicesReleased from "./DevicesReleased";
import PodsReleased from "./PodsReleased";
import DisposableReleased from "./DisposableReleased";

const NewReleased = () => {
  return (
    <section className="max-w-[1280px] mx-auto p-2 mt-12" id="newReleased" >
        <h1 className="text-4xl font-bold text-center text-red-500">New <span className="text-black">Released</span></h1>
        <h3 className="text-lg text-center mt-2 mb-8 capitalize
         font-semibold text-gray-700">Try our latest flavors here</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-1 mb-10">
        {
            newReleased.map((item) => (
              <div key={item.label} 
                className="w-full h-48 relative cursor-pointer hover:translate-y-[-10px] duration-200"
              >
                  <img src={item.imgSrc} 
                    alt={item.label}
                    className={`w-full h-full object-cover rounded-lg bg-gray-200
                      ${item.label !== "lemon vape"? "object-top" : ""}`} />
                  
                  <div className="absolute top-[30%] md:top-[35%] left-3 w-[45%]">
                      <p className="font-semibold text-white text-base leading-5">
                        {item.desc}
                      </p>
                      <p className="text-white font-light">{item.price}</p>
                  </div>
              </div>
            ))
        }
        </div>

        <div className="grid place-items-center mb-16">
            <Button customClass="bg-[#eaeaea] py-2 px-24 rounded-full text-sm flex items-center font-semibold hover:bg-gray-300"
              label="View More"
              Icon={MdOutlineKeyboardArrowRight }
              size={22} /> 
        </div>

        <div className="mb-8">
            <Swiper
              slidesPerView={1}
              
            >
                {
                  feature1.map((item) => (
                    <SwiperSlide key={item.label}>
                      <div className="w-full h-80 relative">
                          <img src={item.imgSrc}
                            alt={item.label}
                            className="w-full h-full object-cover object-top rounded-lg bg-gray-200" />

                          <div className="absolute top-1/3 right-1/4 md:right-32 grid place-items-center">
                            <h1 className="text-white font-bold text-4xl">Try New Flavor</h1>
                            <p className="text-white text-lg font-semibold mb-3 mt-1">Citrus Monster</p>
                            <Button customClass="px-6 py-2 bg-black/30 backdrop-blur text-white rounded-full hover:bg-black/70"
                                    label="View" />
                          </div>
                      </div>
                    </SwiperSlide>
                  ))
                  
                }

                <NewReleasedSlideBtn />
            </Swiper>
        </div>

        <DevicesReleased />
        <PodsReleased />
        <DisposableReleased />
    </section>
  )
}

export default NewReleased