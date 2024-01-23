import Button from "./Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Features = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-auto-fit-100 gap-1">
        <div className="row-span-2 col-span-2">
            <div className="h-96 relative overflow-hidden">
                <img src="https://i0.wp.com/www.qssv.net/wp-content/uploads/2018/10/Revenger-X.png?fit=1598%2C837&ssl=1" alt="membership"
                className="rounded-md object-cover h-full" />

                <div className="absolute top-[40%] md:top-1/2 left-10">
                    <h1 className="text-4xl font-bold text-white mb-6">Membership Program</h1>
                    <p className="text-white font-semibold">Be a Vape Pi member and get our </p>
                    <p className="text-white font-semibold mb-4">special exclusive offers</p>
                    <Button customClass="px-6 py-2 bg-black/30 backdrop-blur text-white rounded-full border border-gray-500 hover:bg-black/90"
                        label="View" />
                </div>
            </div>
        </div>
        <div className="row-span-2">
            <div className="h-96 relative overflow-hidden">
                <img src="https://www.houseofvape.co.za/wp-content/uploads/Revenger.png" alt="devices"
                className="rounded-md h-full object-cover" />

                <div className="absolute w-full top-[70%] left-0 px-4 pt-5 bg-black/60 backdrop-blur rounded-b-md">
                    <div className="relative">
                        <h1 className="text-lg font-bold text-white">Devices</h1>
                        <p className="text-white text-sm mt-1">Find the best for</p>
                        <p className="text-white text-sm">you here!</p>
                        <MdOutlineKeyboardArrowRight
                            size={22}
                            className="absolute top-1 right-0 text-white cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 grid-rows-2 gap-1 h-96">
            <div className="h-full w-full">
                <div className="relative overflow-hidden w-full h-full">
                    <img src="https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80" 
                        alt="pods"
                        className="rounded-md w-full h-full object-cover" />

                    <div className="absolute w-full top-[45%] left-0 px-4 pt-5 pb-3 bg-black/60 backdrop-blur rounded-b-md">
                        <div className="relative">
                            <h1 className="text-lg font-bold text-white">Pods</h1>
                            <p className="text-white text-sm mt-1">Variety of choices</p>
                            <p className="text-white text-sm">available</p>
                            <MdOutlineKeyboardArrowRight
                                size={22}
                                className="absolute top-1 right-0 text-white cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <div className="relative overflow-hidden w-full h-full">
                    <img src="https://images.unsplash.com/photo-1594177914682-d408d96e458b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80" 
                        alt="disposable"
                        className="rounded-md w-full h-full object-cover" />

                    <div className="absolute w-full top-[45%] left-0 px-4 pt-5 pb-3 bg-black/60 backdrop-blur rounded-b-md">
                        <div className="relative">
                            <h1 className="text-lg font-bold text-white">Disposable</h1>
                            <p className="text-white text-sm mt-1">Easy, clean &</p>
                            <p className="text-white text-sm">superb flavor</p>
                            <MdOutlineKeyboardArrowRight
                                size={22}
                                className="absolute top-1 right-0 text-white cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features