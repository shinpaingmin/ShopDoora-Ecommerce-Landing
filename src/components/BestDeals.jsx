import { bestDeals } from "../constants"
import { FaStar } from "react-icons/fa6"
import Button from "./Button"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BestDeals = () => {
  return (
    <section className="max-w-[1280px] h-96 mx-auto p-2 mt-20" 
        id="bestDeals">
            <h1 className="text-4xl font-bold text-center">Best Deals</h1>
            <h3 className="text-xl text-center mt-2 mb-8 capitalize font-semibold text-gray-700">Just for you</h3>
            <div className="grid grid-cols-7 gap-3 mb-10">
            {
                bestDeals.map((item) => (
                    <div key={item.label}>
                        <div className="w-[11rem] h-[11rem] bg-[#eaeaea] overflow-hidden rounded-md
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
                <Button customClass="bg-[#eaeaea] py-2 px-24 rounded-full text-sm flex items-center font-semibold"
                 label="View More"
                 Icon={MdOutlineKeyboardArrowRight }
                 size={22} /> 
            </div>

            <div className="grid grid-cols-auto-fit-100 gap-1">
                <div className="row-span-2 col-span-2">
                    <div className="h-96 relative">
                        <img src="https://www.newvaping.com/cdn/shop/articles/unnamed_7b10f0a8-a351-43f3-9b65-2bc337cbe8f4.jpg?v=1582523922" alt=""
                        className="rounded-md object-cover h-full" />

                        <div className="absolute top-[50%] left-10">
                            <h1 className="text-4xl font-bold text-white mb-6">Membership Program</h1>
                            <p className="text-white font-semibold">Be a Vape Pi member and get our </p>
                            <p className="text-white font-semibold mb-4">special exclusive offers</p>
                            <Button customClass="px-6 py-2 bg-black/30 backdrop-blur text-white rounded-full border border-gray-500"
                                label="View" />
                        </div>
                    </div>
                </div>
                <div className="row-span-2">
                    <div className="h-96">
                        <img src="https://www.newvaping.com/cdn/shop/articles/unnamed_7b10f0a8-a351-43f3-9b65-2bc337cbe8f4.jpg?v=1582523922" alt=""
                        className="rounded-md h-full object-cover" />
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-1 h-96">
                    <div>
                        <img src="https://www.newvaping.com/cdn/shop/articles/unnamed_7b10f0a8-a351-43f3-9b65-2bc337cbe8f4.jpg?v=1582523922" alt=""
                            className="rounded-md h-full object-cover" />
                    </div>
                    <div>
                        <img src="https://www.newvaping.com/cdn/shop/articles/unnamed_7b10f0a8-a351-43f3-9b65-2bc337cbe8f4.jpg?v=1582523922" alt=""
                            className="rounded-md h-full object-cover" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default BestDeals