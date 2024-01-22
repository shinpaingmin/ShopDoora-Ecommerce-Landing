import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useSwiper } from "swiper/react";
import { useRef } from "react";

const SwiperNavButtons = () => {

    const swiper = useSwiper();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // const handlePrevButton = () => {
    //     swiper.slidePrev();
        
    //     if(swiper.isBeginning) {
    //         prevRef.current.classList.remove('grid');
    //         prevRef.current.classList.add('hidden');
    //     }

    //     if(!swiper.isEnd) {
    //         nextRef.current.classList.add('grid');
    //         nextRef.current.classList.remove('hidden');
    //     }
    // }

    // const handleNextButton = () => {
    //     swiper.slideNext();

    //     if(!swiper.isBeginning) {
    //         prevRef.current.classList.add('grid');
    //         prevRef.current.classList.remove('hidden');
    //     }

    //     if(swiper.isEnd) {
    //         nextRef.current.classList.remove('grid');
    //         nextRef.current.classList.add('hidden');
    //     }
    // }

    return (
        <>
            <div className='bg-black/30 backdrop-blur w-12 h-48 absolute
                    top-1/2 left-0 translate-y-[-50%] z-10
                    grid place-items-center mx-4 rounded-md cursor-pointer'
                ref={prevRef}
                onClick={() => swiper.slidePrev()}
            >
                    <FaArrowLeft className='text-white' 
                        size={20} />
            </div>
            <div className='bg-black/30 backdrop-blur w-12 h-48 absolute
                    top-1/2 right-0 translate-y-[-50%] z-10
                    grid place-items-center mx-4 rounded-md cursor-pointer'
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