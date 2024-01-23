import { feature1, newReleased, bestDeals } from "../constants"

import Button from "./Button"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import NewReleasedSlideBtn from "./NewReleasedSlideBtn";

const NewReleased = () => {
  return (
    <section className="max-w-[1280px] mx-auto p-2 mt-12" >
        <h1 className="text-4xl font-bold text-center text-red-500">New <span className="text-black">Released</span></h1>
        <h3 className="text-lg text-center mt-2 mb-8 capitalize
         font-semibold text-gray-700">Try our latest flavors here</h3>
        <div className="grid grid-cols-4 gap-1 mb-10">
        {
            newReleased.map((item) => (
              <div key={item.label} 
                className="w-full h-48 relative"
              >
                  <img src={item.imgSrc} 
                    alt={item.label}
                    className={`w-full h-full object-cover rounded-lg 
                      ${item.label !== "lemon vape"? "object-top" : ""}`} />
                  
                  <div className="absolute top-[40%] left-3 w-[45%]">
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
              speed={1200}
            >
                {
                  feature1.map((item) => (
                    <SwiperSlide key={item.label}>
                      <div className="w-full h-80 relative">
                          <img src={item.imgSrc}
                            alt={item.label}
                            className="w-full h-full object-cover object-top rounded-lg" />

                          <div className="absolute top-1/3 right-32 grid place-items-center">
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

        <div className="mb-8">
            <div className="w-full h-96 bg-[url('https://i.pinimg.com/originals/86/a2/a9/86a2a9d81833eeee203abfc37f3000c8.jpg')] rounded-lg
              bg-cover bg-top flex justify-end">
                
                <div className="w-[78%] h-full flex items-center">
                    <div className="w-44 mr-16">
                      <h1 className="text-white text-4xl font-semibold mb-1">Devices</h1>
                      <p className="text-lg  text-white">Find the best for you here!</p>
                    </div>
                   
                    <div className="w-full h-full overflow-hidden py-12">
                    
                    <Swiper
                      slidesPerView={4.2}
                    >
                    {
                        bestDeals.map((item) => (
                            <SwiperSlide key={item.label}>
                                <div 
                                className="flex flex-col items-center">
                                  <div className="w-[11rem] h-[11rem] bg-[#eaeaea] overflow-hidden rounded-md
                                      relative">
                                      <img src={item.imgSrc}
                                      alt={item.label}
                                      className="w-full h-full object-cover object-start translate-y-[50px]" 
                                      />

                                    
                                  </div>
                                  <div className="pt-3">
                                      <h2 className="text-center text-white font-semibold">Refreshing Mint</h2>
                                      <p className="text-center font-bold text-white">30,000 MMK</p>
                                      <del className="text-center text-xs grid place-items-center text-white">30,000 MMK</del>
                                      <small className="flex items-center justify-center mt-1">
                                          <FaStar className="text-[#ffc107]" size={12} />
                                          <span className="text-sm text-[#ffc107] font-semibold ml-1">600 Points</span>
                                      </small>
                                  </div>
                              </div>
                            </SwiperSlide>
                        ))
                    }
                    <NewReleasedSlideBtn />
                    </Swiper>
                  
                    </div>  
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default NewReleased