import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useSwiper } from "swiper/react";
import { useRef } from "react";

const SwiperNavButtons = () => {

    const swiper = useSwiper();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

   
    return (
        <>
            <div className='bg-black/30 backdrop-blur w-12 h-48 absolute
                    top-1/2 left-0 translate-y-[-50%] z-10
                    hidden md:grid place-items-center mx-4 rounded-md cursor-pointer hover:opacity-90'
                ref={prevRef}
                onClick={() => swiper.slidePrev()}
            >
                    <FaArrowLeft className='text-white' 
                        size={20} />
            </div>
            <div className='bg-black/30 backdrop-blur w-12 h-48 absolute
                    top-1/2 right-0 translate-y-[-50%] z-10
                    hidden md:grid place-items-center mx-4 rounded-md cursor-pointer hover:opacity-90'
                ref={nextRef}
                onClick={() => swiper.slideNext()}
            >
                <FaArrowRight className='text-white' 
                    size={20} />
            </div>
        </>
    )
}

export default SwiperNavButtons