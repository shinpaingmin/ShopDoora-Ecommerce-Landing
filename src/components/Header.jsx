import { IoSearch } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

import { useEffect, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        open && document.body.classList.add('stop-scrolling');
        !open && document.body.classList.remove('stop-scrolling');
    }, [open])

    return (
        <header className="absolute top-0 left-0 z-10 w-full py-6">
            <div className="max-w-[1280px] mx-auto  p-2
                flex items-center justify-between">
                <a href="#" className="text-white text-xl font-bold font-serif">PI人</a>
                <div className="flex items-center relative">
                    <a className="mr-8">
                        <IoSearch color="#fff"
                            size={22}/>
                    </a>

                    <a className="mr-[3.5rem]">
                        <PiShoppingCart color="#fff"
                            size={22}/>
                    </a>

                    <button type="button" 
                        className="absolute top-0 right-0 z-30"
                        onClick={() => setOpen(!open)}
                        >
                        {
                            open ? (
                                <RxCross2  color="#fff"
                                    size={24}
                                    className="transition-all duration-200"/>
                                
                            ) : (
                                <GiHamburgerMenu color="#fff"
                                    size={22}
                                    className="transition-all duration-200" />
                            )
                        }
                       
                    </button>
                </div>
            </div> 

            <div className={`bg-black/70 fixed top-0 left-0 w-full h-full z-[12]
                 ${open ? "block" : "hidden"}`}></div>

            <div className={`fixed top-0 right-0 w-3/4 lg:w-1/3 h-full bg-black flex items-center z-20
                justify-center hoverEffect ${open ? "translate-x-0" : "translate-x-[100%]"}`}>
                <ul>
                    <li className="text-white text-xl mb-12">
                        <Link className="cursor-pointer hover:text-gray-200"
                            to="home"
                            offset={-50}
                            smooth
                            duration={500}
                            onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li className="text-white text-xl mb-12">
                        <Link className="cursor-pointer hover:text-gray-200"
                            to="bestDeals"
                            offset={-50}
                            smooth
                            duration={500}
                            onClick={() => setOpen(!open)}>Best Deals</Link>
                    </li>
                    <li className="text-white text-xl mb-12">
                        <Link className="cursor-pointer hover:text-gray-200"
                            to="newReleased"
                            offset={-50}
                            smooth
                            duration={500}
                            onClick={() => setOpen(!open)}>New Released</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header