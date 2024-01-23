import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { heroSection } from '../constants';
import Button from './Button';
import SwiperNavButtons from './SwiperNavButtons';

const Hero = () => {
  return (
    <section className='w-full h-[90vh] flex relative' id='hero'>
        <Swiper
            style={{
                "--swiper-pagination-color": "#000", //https://stackoverflow.com/questions/65590148/swiperjs-how-do-you-style-the-pagination-bullets
            }}
            slidesPerView={1}
            autoplay={{
                delay: 2000
            }}
            loop={true}
            speed={1200}
            pagination={{ 
                clickable: true,
            }}
            modules={[ Pagination, Autoplay ]}
        >
            <SwiperNavButtons />
        {
            heroSection.map((item) => (
                <SwiperSlide key={item.label} 
                >
                    <div className='w-full h-full relative' >
                        <div className='w-full h-full overflow-hidden'>
                            <img src={item.heorImg} alt={item.label}
                                className='w-full h-full object-cover object-top' />
                        </div>
                        <div className='absolute top-[60%] left-[50%] translate-x-[-50%] grid place-items-center'>
                            <h3 className='capitalize text-white drop-shadow-lg shadow-black
                                text-2xl'>The best look</h3>
                            <h1 className='capitalize text-white drop-shadow-lg shadow-black
                                text-6xl font-bold mb-8'>Anytime anywhere</h1>
                            <p className='capitalize text-white drop-shadow-lg shadow-black
                                text-xl mb-6'>Starts from 10,000 MMK</p>
                            <Button customClass="px-6 py-2 bg-black/30 backdrop-blur text-white rounded-full hover:bg-black/90"
                                label="View" />
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </section>
  )
}

export default Hero