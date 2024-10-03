import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiTiktokFill } from "react-icons/ri";
import { BiLogoSnapchat } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    return (
        <>
            <hr className="mt-10"/>     
                         <div  
                        className="flex justify-evenly flex-wrap gap-40 mt-5 sm:gap-12 "
                        style={{
                            fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
                            color: "black",
                          }} 
                        >
                                <ul>
                                    <li className="mt-2 mb-9 text-lg font-normal tracking-wide"> ABOUT</li>
                                    <li className="mb-2 text-sm text-gray-800">Who We Are</li>
                                    <li className="mb-2 text-sm text-gray-800">Our Responsibility</li>
                                    <li className="mb-2 text-sm text-gray-800">Service We Provide</li>
                                    <li className="mb-2 text-sm text-gray-800">Career</li>
                                    <li className="mb-2 text-sm text-gray-800">Legal</li>
                                    <Form.Select
                                aria-label="Default select example"
                                className=" border-hidden mb-4 outline-0 bg-transparent md:text-sm text-xs"
                            >
                                <option> Pakistan</option>
                                <option value="1"> India</option>
                                <option value="2"> USA</option>
                                <option value="3"> Canada</option>
                                <option value="4"> United Kingdom</option>
                                <option value="5"> Turkey</option>
                                <option value="6"> Australia</option>
                            </Form.Select>
                            <div className="d-flex flex-row gap-x-2 mt-4 cursor-pointer text-2xl">
                                <BiLogoFacebook className="text-gray-500 hover:text-black" />
                                <LuInstagram className="text-gray-500 hover:text-black" />
                                <AiFillYoutube className="text-gray-500 hover:text-black" />
                                <RiTiktokFill className="text-gray-500 hover:text-black" />
                                <BiLogoSnapchat className="text-gray-500 hover:text-black" />
                                <IoLogoWhatsapp className="text-gray-500 hover:text-black" />
                            </div> 

                                </ul>
                                <ul>
                                    <li className="mt-2 mb-9 text-lg font-normal tracking-wide">CUSTOMER SERVICE</li>
                                    <li className="mb-2 text-sm text-gray-800">Contact Us</li>
                                    <li className="mb-2 text-sm text-gray-800">Dispatch Timeline</li>
                                    <li className="mb-2 text-sm text-gray-800">Email:info@baroque.pk</li>
                                    <li className="mb-2 text-sm text-gray-800">Call:+92 325 700 111</li>
                                    <li className="mb-2 text-sm text-gray-800">WhatsApp: +92 325 7001111</li>
                                </ul>
                            
                            
                                <ul>
                                    <li className="mt-2 mb-9 text-lg font-normal tracking-wide">POLICIES</li>
                                    <li className="mb-2 text-sm text-gray-800">Privacy Policy</li>
                                    <li className="mb-2 text-sm text-gray-800">Refund Policy</li>
                                    <li className="mb-2 text-sm text-gray-800">Shipping Policy</li>
                                    <li className="mb-2 text-sm text-gray-800">Terms of Service</li>
                                    <li className="mb-2 text-sm text-gray-800">Exchange Information</li>
                                    <div className="text-xs mb-2 ml-2 md:text-sm">&copy; 2024 - BAROQUE</div>

                                </ul>
                                </div>
                     
        </>
    );
}

export default Footer;
