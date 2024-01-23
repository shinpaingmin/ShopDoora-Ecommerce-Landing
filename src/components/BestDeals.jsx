import { bestDeals } from "../constants"
import { FaStar } from "react-icons/fa6"
import Button from "./Button"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Features from "./Features";

const BestDeals = () => {
  return (
    <section className="max-w-[1280px] mx-auto p-2 mt-20" 
        id="bestDeals">
            <h1 className="text-4xl font-bold text-center">Best Deals</h1>
            <h3 className="text-xl text-center mt-2 mb-8 capitalize font-semibold text-gray-700">Just for you</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mb-10">
            {
                bestDeals.map((item) => (
                    <div key={item.label}
                        className="flex flex-col items-center">
                        <div className="w-56 h-56 md:w-[11rem] md:h-[11rem] bg-[#eaeaea] overflow-hidden rounded-md
                            relative">
                            <img src={item.imgSrc}
                            alt={item.label}
                            className="w-full h-full object-cover object-start translate-y-[50px]" 
                            />

                            <div className="absolute top-0 left-1/2 translate-x-[-50%]
                                bg-red-500 text-white py-1 px-4 text-sm font-semibold">
                                25% Off
                            </div>
                        </div>
                        <div className="pt-3">
                            <h2 className="text-center text-gray-700 font-semibold">Refreshing Mint</h2>
                            <p className="text-center font-bold">30,000 MMK</p>
                            <del className="text-center text-xs grid place-items-center">30,000 MMK</del>
                            <small className="flex items-center justify-center mt-1">
                                <FaStar className="text-[#ffc107]" size={12} />
                                <span className="text-sm text-[#ffc107] font-semibold ml-1">600 Points</span>
                            </small>
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

            <Features />
    </section>
  )
}

export default BestDeals