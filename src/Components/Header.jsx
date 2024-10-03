import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiTiktokFill } from "react-icons/ri";
import { BiLogoSnapchat } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaM, FaMicroblog } from 'react-icons/fa6';
import { GiFamilyHouse } from 'react-icons/gi';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header(){

    const [showNavbarOffcanvas, setShowNavbarOffcanvas] = useState(false);
    const [showCart, setShowCart] = useState(false);
  
    const handleCartClose = () => {
      setShowCart(false);
    };
  
    const handleCartShow = () => {
      setShowCart(true);
      setShowNavbarOffcanvas(false);
    };
  
    const handleNavbarClose = () => {
      setShowNavbarOffcanvas(false);
    };
  
    const handleNavbarShow = () => {
      setShowNavbarOffcanvas(true);
      setShowCart(false);
    };  
   return (
    <>
     <div className ="flex flex-col items-center bg-black">
        <h1 className="text-white text-xs sm:text-sm md:text-base animate-fade-in-out ">
          FOR INTERNATIONAL WEBSITE VISIT: <u>WWW.BAROQUE.PK</u>
        </h1>
        <h1 className="text-white animate-fade-in-out delay-2s">
          CLICK HERE FOR: <u>DISPATCH TIMELINE</u>
        </h1>
      </div>

     <div className="hover:bg-white absolute w-full fixed top-9" id="Nav">

        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Toggle
              aria-controls="navbar-offcanvas"
              onClick={handleNavbarShow}
              className='border-0'
            />
            <Navbar.Offcanvas
              id="navbar-offcanvas"
              aria-labelledby="navbar-offcanvas-label"
              placement="start"
              show={showNavbarOffcanvas}
              onHide={handleNavbarClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="navbar-offcanvas-label"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 p-3">
                  <Link to="/Chantelless" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500'>Chantelle</Link>
                  <Link to="/Unstitched" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500'>Unstitched</Link>
                  <Link to="/Shawls" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500'>SHAWLS</Link>
                  <Link to="/ReadyToWear" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500'>Ready to wear</Link>
                  <Link to="/SpecialPrices" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500 text-red-600'>Special Prices</Link>
                  <Link to="/Bottoms" className='text-sm uppercase pt-4 pb-4 border-b border-gray-500'>Bottoms</Link>
                  <Link to="/Dupattas" className='text-sm uppercase pt-4 pb-4'>Dupattas</Link>
                  <Link className='text-2xl pt-2 pb-10 flex gap-4'>
                    <BiLogoFacebook className='text-gray-500 hover:text-black' />
                    <LuInstagram className='text-gray-500 hover:text-black' />
                    <AiFillYoutube className='text-gray-500 hover:text-black' />
                    <RiTiktokFill className='text-gray-500 hover:text-black' />
                    <BiLogoSnapchat className='text-gray-500 hover:text-black' />
                    <IoLogoWhatsapp className='text-gray-500 hover:text-black' />
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand>
              <Link to="/Header">
                <img width={120} src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=280" alt="logo-img" />
              </Link>
            </Navbar.Brand>
            <div className='flex gap-3'>
              <div className='hidden md:block'>
                <Link to='/LogIn'><LuUser2 className='text-2xl cursor-pointer' /></Link>
              </div>
              <div>
                <IoIosSearch className='text-2xl cursor-pointer'/>
                <Offcanvas placement='top'>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className='flex mt-4 items-center gap-2'>
                      <IoIosSearch className='text-4xl cursor-pointer' />
                      <input className="border-none text-3xl w-[90%] pt-2 pb-2 pl-2" type="search" placeholder="Search For...." aria-label="Search" />
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div>
                <IoBagOutline className='text-2xl cursor-pointer' onClick={handleCartShow} />
                <Offcanvas show={showCart} onHide={handleCartClose} placement='end'>
                  <Offcanvas.Header closeButton className='border-b border-slate-300'>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className='flex justify-center items-center'>
                      <p className='tracking-widest'>Your cart is empty</p>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
      <div></div>
   </>
  )
}

export default Header