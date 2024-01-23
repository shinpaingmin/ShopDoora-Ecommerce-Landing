import { RiShieldKeyholeLine } from "react-icons/ri";
import { FaArrowRotateLeft,
    FaFacebook ,
    FaInstagram,
    FaViber,
    FaTelegram,
    FaTwitter   
}   from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";

import { useState } from 'react';
import { qrcode } from "../assets/images";

const Footer = () => {
    const [language, setLanguage] = useState('English');

    return (
        <>
            <footer className="grid grid-cols-1 md:grid-cols-4 max-md:gap-6 max-w-[1280px] mx-auto p-2 " >
                <ul>
                <li className="text-xl font-semibold">Customer Service</li>
                <li className="flex items-center mt-5">
                    <RiShieldKeyholeLine size={18} /> 
                    <span className="ml-1.5">Terms & Privacy Policy</span>
                </li>
                <li className="flex items-center mt-5">
                    <FaArrowRotateLeft size={18} /> 
                    <span className="ml-1.5">Return Policy</span>
                </li>
                <li className="mt-5 md:mt-14 text-xl font-semibold">
                    Payment
                </li>
                <li className="mt-5 flex">
                    <div className="w-24 h-12 mr-3">
                        <img src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4"
                        alt=""
                        className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="w-24 h-12 mr-3">
                        <img src="https://play-lh.googleusercontent.com/XjUGY5EfxEyhUPq1JuadBs4guF0ykiFipRvr052ku3Gc9yfXn2UhP3-Tak7jdtTN24Tj" 
                        alt=""
                        className="w-full h-full object-cover rounded-md" />
                    </div>
                </li>
                </ul>

                <ul>
                    <li className="text-xl font-semibold">Language</li>
                    <li className="flex items-center mt-5">
                        <input type="radio"  
                            id="Unicode"
                            className="mr-1.5 w-4 h-4"
                            onClick={() => setLanguage('Unicode')}
                            checked={ language === "Unicode" }    
                        />
                        <label htmlFor="Unicode">Myanmar (Unicode)</label>
                    </li>
                    <li className="flex items-center mt-4">
                        <input type="radio"  
                            id="Zawgyi"
                            className="mr-1.5 w-4 h-4"
                            onClick={() => setLanguage('Zawgyi')}
                            checked={ language === "Zawgyi" }    
                        />
                        <label htmlFor="Zawgyi">Myanmar (Zawgyi)</label>
                    </li>
                    <li className="flex items-center mt-4">
                        <input type="radio"  
                            id="English"
                            className="mr-1.5 w-4 h-4"
                            onClick={() => setLanguage('English')}
                            checked={ language === "English" }    
                        />
                        <label htmlFor="English">English</label>
                    </li>
                    <li className="mt-5 text-xl font-semibold">
                        Follow Us On
                    </li>
                    <li className="mt-4 flex items-center">
                        <FaFacebook size={44} color="#316FF6" className="mr-3" />
                        <FaInstagram size={44} color="white"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mr-3" />
                        <FaViber size={44} color="white"
                            className="bg-[#7360f2] rounded-md mr-3" />
                        <FaTelegram size={44} color="#0088cc" className="mr-3" />
                        <FaTwitter size={44} color="#1DA1F2" className="mr-3" />
                    </li>
                </ul>

                <ul>
                    <li className="text-xl font-semibold">Contact Us</li>
                    <li className="mt-5 flex items-start">
                        <SlLocationPin size={18} className="w-12 mt-1 mr-2" />
                        <span>Lay Daunt Kan Main Road, Cashmere Stop,
                            Near Zawana, Thingangyun Tsp, Yangon.
                        </span>
                    </li>
                    <li className="mt-3 flex items-center">
                        <LuPhone size={18} className="mr-3" />
                        <span>
                            09458489458
                        </span>
                    </li>
                </ul>

                <ul>
                    <li className="text-xl font-semibold">Download Our App</li>
                    <li className="mt-5">
                        <img src={qrcode} alt="qrcode" />
                    </li>
                </ul>
            </footer>
            <div className="grid place-items-center mt-12 mb-3">
                &copy; Copyright 2023 C by D Co.,Ltd.All rights reserved.
            </div>
        </>
  )
}

export default Footer