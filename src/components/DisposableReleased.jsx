import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import NewReleasedSlideBtn from "./NewReleasedSlideBtn";
import { bestDeals } from "../constants"

import { FaStar } from "react-icons/fa6";

const DisposableReleased = () => {
  return (
    <div className="mb-8">
        <div className={`w-full  min-h-96 md:h-96 bg-[url('https://i.pinimg.com/originals/86/a2/a9/86a2a9d81833eeee203abfc37f3000c8.jpg')] rounded-lg
            bg-cover bg-gray-200 bg-top flex justify-end`}>
            
            <div className="w-full md:w-[78%] h-full flex items-center max-md:flex-col">
                <div className="w-44 md:mr-16 mb-3">
                    <h1 className="text-white text-4xl font-semibold mb-2 max-md:text-center">Disposable</h1>
                    <p className="text-lg  text-white max-md:text-center">Easy, clean & superb flavor</p>
                </div>
                
                <div className="w-full h-full overflow-hidden md:py-14">
                
                <Swiper
                    breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 12
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 12
                    }
                    }}
                
                >
                {
                    bestDeals.map((item) => (
                        <SwiperSlide key={item.label}>
                            <div 
                            className="flex flex-col items-center cursor-pointer">
                                <div className="w-[11rem] h-[11rem] bg-[#eaeaea] overflow-hidden rounded-md
                                    relative">
                                    <img src={item.imgSrc}
                                    alt={item.label}
                                    className="w-full h-full object-cover object-start translate-y-[50px] bg-gray-200" 
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
  )
}

export default DisposableReleased