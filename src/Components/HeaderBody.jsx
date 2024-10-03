import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { GiSewingMachine } from "react-icons/gi";

import Videos from './Videos';
function Header() {
  return (
    <>
    
  <img
    className="w-full"
    src="https://baroque.pk/cdn/shop/files/MAin_BAnner60_33b3177a-878c-4486-8b78-6b85bd4b4ac5.jpg?v=1727444075&width=1400"
    alt="logo-img"
  />
  <Link to="/Page2">  <button className="btns relative bottom-28 left-1/2 transform -translate-x-1/2 
    text-lg sm:text-base md:text-xl lg:text-xl 
    px-6 py-3 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-7 lg:py-3"
    style={{
      border: "1px solid black",
      backgroundColor: "white ",
      fontSize: "bold",
    }}
    
    
    >
    SHOP NOW
  </button>
  </Link>

   <Container>
  <Row className='flex'>
    <Col xs={12} sm={12} md={4}lg={4}  className=' flex flex-col items-center'>
      <img className='pt-5 pb-3' width={400} src="https://baroque.pk/cdn/shop/files/02_Banner197.jpg?v=1727851604&width=500" alt="Shawls 1" />
      <h1 className='sami p-2 text-3xl md:text-xl lg:text-3xl'>Shawls</h1>
      <Link to="/Page2"><button className='btns buttonn pt-2 pb-2'>SHOP NOW</button></Link>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4}  className='flex flex-col items-center'>
      <img className='pt-5 pb-3' width={400} src="https://baroque.pk/cdn/shop/files/02_Banner193.jpg?v=1727351523&width=500" alt="Shawls 2" />
      <h1 className='sami p-2 text-3xl md:text-xl lg:text-3xl'>READY TO WEAR</h1>
      <Link to="/Page2"><button className='btns buttonn pt-2 pb-2'>SHOP NOW</button></Link>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className='flex flex-col items-center'>
      <img className='pt-5 pb-3' width={400} src="https://baroque.pk/cdn/shop/files/02_Banner191.jpg?v=1726830824&width=500" alt="Shawls 3" />
      <h1 className='sami p-2 text-3xl md:text-xl lg:text-3xl'>CHAHTELLE</h1>
      <Link to="/Page2"><button className='btns buttonn pt-2 pb-2'>SHOP NOW</button></Link>
    </Col>
  </Row>
</Container>

<hr className="mt-14 mb-10"/>


<Container
        style={{
          paddingTop: "60px",
          textAlign: "center",
          fontSize: "30px",
          paddingBottom: "10px",
        }}
      >
        <Row>
          <Col className=" underline mb-12
"
          style={{
            fontSize: "40px",
            fontWeight: "lighter",
            fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
            color: "black",
          }}
          >SHOP THE LOOK</Col>
        </Row>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={1}></Col>
                <Col md={6}>
                  <img
                    height={270}
                    width={550}
                    className="ml-2"
                    src="https://baroque.pk/cdn/shop/files/Shop_The_Look76.jpg?v=1725975148&width=700"
                  />
                </Col>
                <Col
                  className="mt-10 flex flex-col justify-center items-center"
                  md={4}
                >
                  <img
                    className=" hidden md:block"
                    height={250}
                    width={250}
                    src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725975148"
                  />
                  <p className="text-sm text-center pt-1 pb-1 mt-1 hidden md:block  ">
                    EMBROIDERED PRINTED LAWN UF-711
                  </p>
                  <p className="text-sm text-center pt-1 pb-1  hidden md:block font-semibold">
                    PXR 8,990.00
                  </p>
                    <Link to="/Page2">   <Button
                    className="mt-3 btns"
                    style={{
                      height: "44px",
                      width: "190px",
                      border: "1px solid black",
                      backgroundColor: "black",
                      // color: "white",
                      borderRadius:"0px",
    fontSize: "16px",
    fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif", 
                    }}
                  >
                    VIEW PRODUCTS
                  </Button>
</Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={1}></Col>
                <Col md={6}>
                  <img
                    height={270}
                    width={550}
                    className="ml-2"
                    src="https://baroque.pk/cdn/shop/files/Shop_The_Look75.jpg?v=1725265568&width=800"
                  />
                </Col>
                <Col
                  className="mt-10 flex flex-col justify-center items-center"
                  md={4}
                >
                  <img
                    className=" hidden md:block"
                    height={250}
                    width={250}
                    src="https://baroque.pk/cdn/shop/files/133_b58ef877-3768-4a51-be77-57b70661e81e.jpg?v=1724493924&width=1000"
                  />
                  <p className="text-sm text-center pt-1 pb-1 mt-1 hidden md:block  ">
                    EMBROIDERED PRINTED LAWN UF-711
                  </p>
                  <p className="text-sm text-center pt-1 pb-1  hidden md:block font-semibold">
                    PXR 8,990.00
                  </p>
                  <Link to="/Page2">  <Button
                    className="mt-3 btns"
                    style={{
                      height: "44px",
                      width: "190px",
                      border: "1px solid black",
                      backgroundColor: "black",
                      // color: "white",
                      borderRadius:"0px",
    fontSize: "16px",
    fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif", 
                    }}
                  >
                    VIEW PRODUCTS
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={1}></Col>
                <Col md={6}>
                  <img
                    height={270}
                    width={550}
                    className="ml-2"
                    src="https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=800"
                  />
                </Col>
                <Col
                  className="mt-10 flex flex-col justify-center items-center"
                  md={4}
                >
                  <img
                    className=" hidden md:block"
                    height={250}
                    width={250}
                    src="https://baroque.pk/cdn/shop/files/62_9bb5b00f-523f-4430-86e6-54b287245c7b.jpg?v=1725626909&width=1000"
                  />
                  <p className="text-sm text-center  mt-1 hidden md:block  ">
                    EMBROIDERED PRINTED LAWN UF-711
                  </p>
                  <p className="text-sm text-center  hidden md:block font-semibold">
                    PXR 8,990.00
                  </p>
                  <Link to="/Page2"><Button
                    className="mt-3 btns"
                    style={{
                      height: "44px",
                      width: "190px",
                      border: "1px solid black",
                      backgroundColor: "black",
                      borderRadius:"0px",
    fontSize: "16px",
    fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif", 
                    }}
                  >
                    VIEW PRODUCTS
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>


      <hr className="mt-14 mb-14"/>
<Container>
      <Row className="mb-14  flex items-center justify-center">
  <Col xs={12} md={6} className="text-center">
    <h1
      className="text-center md:text-xl lg:text-3xl"
      style={{
        fontSize: "40px",
        fontWeight: "lighter",
        fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
        color: "black",
      }}
    >
      BE INSPIRED
    </h1>
  </Col>
</Row>
</Container>
<Container>
<Link to="/Page2"><Row >
 <Col xs={12} sm={12} md={4} lg={4}
 >
   <Videos 
        videoSrc="https://baroque.pk/cdn/shop/videos/c/vp/7b9638aa43024780ae37d95fbe8f9ae3/7b9638aa43024780ae37d95fbe8f9ae3.HD-1080p-7.2Mbps-35438556.mp4?v=0"
        buttonText="CLIENT LOVE"
      />
      </Col>
    <Col xs={12} sm={12} md={4} lg={4}>
   <Videos
        videoSrc="https://baroque.pk/cdn/shop/videos/c/vp/41081bac92e14717a80c9e1b787f2439/41081bac92e14717a80c9e1b787f2439.HD-1080p-3.3Mbps-27199292.mp4?v=0"
        buttonText="CELEBRITY STYLE"
      />
      </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
   <Videos
        videoSrc="https://baroque.pk/cdn/shop/videos/c/vp/ba13ad9e060648fe9643eb40473110a8/ba13ad9e060648fe9643eb40473110a8.HD-1080p-7.2Mbps-35438644.mp4?v=0"
        buttonText="STYLE SPOTTED"
      />
      </Col>
  </Row>
  </Link>
</Container>

<hr className="mt-14 mb-10"/>

<div className="mt-8">
        <h3 className=" text-center mt-24 font-extralight  tracking-widest pb-3"
        style={{
          fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
          color: "black",
        }}      
        >
          SUBSCRIBE FOR NEWSLETTER
        </h3>
      </div>

      <Container fluid="md">
        <Row>
          <Col>
            <div className="flex justify-center">
              <input
                name="myInput"
                placeholder="EMAIL"
                className="size-6/12 mt-3 mb-4 w-[290px] p-[10px] box-border border border-black"
              />
 <button
  style={{
    height: "43px",
    width: "260px",
    borderRadius: "0px",
    color: "white",
    backgroundColor: "black",
  }}
  className="tracking-widest mt-3 ml-4"
>
  SUBSCRIBE
</button>

            </div>
          </Col>
        </Row>
      </Container>
 
      <div className="mt-10 mb-20"
       style={{
        fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
        color: "black",
      }}      
      >
        <Container>
          <Row>
            <Col md={3}>
              <div className="d-flex flex-col justify-center">
                <svg
                  className="h-5 mt-5  mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <p className="text-xl	font-light text-center tracking-wider">
                  
                  Priority Stitching
                </p>
                <p className="font-medium	text-center tracking-wider">
                  Receive your stitched orders more quickly in a timeline of 2
                  weeks
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="d-flex flex-col items-center justify-center mt-4">
                <GiSewingMachine className=" h-10 w-7 mb-7" />
                <p className="text-xl font-light tracking-wider">
                  Custom Size
                </p>
                <p className="font-medium tracking-wide text-center">
                  Get your outfit tailored to perfection as per your desired
                  measurements
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="d-flex flex-col justify-center ">
                <svg
                  className="h-5 mt-5 mb-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="black"
                >
                  <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                </svg>
                <p className="text-xl text-center	font-light	tracking-wider">
                  
                  Free Shipping
                </p>
                <p className="font-medium text-center	 tracking-wide">
                  We provide free shipping all across Pakistan on all of our
                  orders
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="d-flex flex-col text-center justify-center">
                <svg
                  className="h-5 mt-5 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
                </svg>
                <p className="text-xl	font-light	tracking-wider">
                  
                  ORDER EXCHANGE
                </p>
                <p className="font-medium	 tracking-wider">
                  For a hassle free exchange service, fill out the
                  <a href="#" className="text-black">
                    exchange form
                  </a>
                </p>
              </div>
            </Col>
          </Row>  
        </Container>
      </div>
    </>    
  );
}

export default Header;
