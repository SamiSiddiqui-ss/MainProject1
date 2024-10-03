import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollingImg from './ScrollingImg';
import React, { useState } from 'react';
import Pic4 from './Pic4';
import { Row } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import {Col } from 'react-bootstrap';

function Page3() {
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [activeSection, setActiveSection] = useState(null);  // Move activeSection state here

  const handleQuantityChange = (type) => {
    setQuantity(type === 'increment' ? quantity + 1 : quantity > 1 ? quantity - 1 : 1);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <Header />
      <hr className='relative top-16' />
      
      <div className='flex flex-col md:flex-row gap-5 relative top-28 mx-auto'>
        
        <div className='w-full md:w-1/2'>
          <ScrollingImg pageLink="/Page4" imgg="https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201" />
          <ScrollingImg pageLink="/Page4" imgg="https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201" />
          <ScrollingImg pageLink="/Page4" imgg="https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201" />
          <ScrollingImg pageLink="/Page4" imgg="https://baroque.pk/cdn/shop/files/08_6a5bd2e3-f096-43c1-9d01-835bb1f1246c.jpg?v=1724659201" />
        </div>

        <div className="sticky top-1 w-full h-1/2 md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">Embroidered Crush Chiffon PR-992</h1>
          <p className="text-xl font-semibold text-gray-600 mb-4">PKR 19,990.00</p>
          <p className="text-sm text-gray-500 mb-6">SKU: BQU-PR-992-01</p>
          <p className="text-sm text-gray-500 mb-6">3 Piece</p>

          {/* Size Selection */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Size:</h2>
            <div className="flex space-x-4">
              {['XS', 'S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`px-4 py-2 border ${selectedSize === size ? 'border-black' : 'border-gray-300'} rounded-md`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4 flex items-center">
            <button className="px-4 py-2 bg-gray-300" onClick={() => handleQuantityChange('decrement')}>
              -
            </button>
            <span className="px-6 py-2 border">{quantity}</span>
            <button className="px-4 py-2 bg-gray-300" onClick={() => handleQuantityChange('increment')}>
              +
            </button>
          </div>

          <Link to="/Page4">
            <Button className=" btns  uppercase font-semibold  tracking-wider"
            style={{
              height: "44px",
              width: "390px",
              border: "1px solid black",
              backgroundColor: "black",
              color: "",
              borderRadius:"0px",
fontSize: "16px",
fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif", 
            }}
            >
              Add to Cart
            </Button>
          </Link>

          {/* Accordion Section */} 

          <div className="mx-auto p-4 mt-6 tracking-wider"
          style={{
            fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
            color: "black",
            fontSize: "xx-large",
          }}
          
          >
            {/* Description */}
            <div className="border-b py-2 text-sm	">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleSection('description')}
              >
                <h2 className="text-lg font-semibold">Description</h2>
                <span>{activeSection === 'description' ? '-' : '+'}</span>
              </div>
              {activeSection === 'description' && (
                <div className="mt-2 text-gray-600">
                  <p>The embroidered crush chiffon frock showcases exquisite detailing, making it a stunning choice for special occasions. The neck is adorned with beautiful embroidery with sequin. The frock lightweight fabric flows beautifully, while the chiffon dupatta is enhanced with delicate embellishments. Complemented by grip fabric trousers for comfort, this complete set includes a frock, trousers, and a dupatta, along with stylish accessories sold separately.

                  <br/><h1 className='text-black font-bold	 inline-block'>Fashion Tip:
</h1><br/>To create a graceful look, pair this frock with elegant earrings and a golden clutch. Choose heeled sandals to elevate your frock style. This ensemble is perfect for both festive celebrations and semi-formal gatherings.</p>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="border-b py-2 text-sm">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleSection('productDetails')}
              >
                <h2 className="text-lg font-semibold">Product Details</h2>
                <span>{activeSection === 'productDetails' ? '-' : '+'}</span>
              </div>
              {activeSection === 'productDetails' && (
                <div className="mt-2 text-gray-600">
                <br/>  <p>Frock fabric : embroidered crush chiffon</p>
                <br/>  <p>Dupatta fabric: Chiffon with embellishment</p>
                 <br/> <p>Trouser fabric: Grip</p>
                 <br/> <p>Includes: Frock, trouser, and dupatta with accessories</p>
                </div>
              )}
            </div>

            {/* Delivery */}
            <div className="border-b py-2 text-sm">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleSection('delivery')}
              >
                <h2 className="text-lg font-semibold">Delivery</h2>
                <span>{activeSection === 'delivery' ? '-' : '+'}</span>
              </div>
              {activeSection === 'delivery' && (
                <div className="mt-2 text-gray-600">
                  <p>Dispatch time : Within 1 week</p>
                </div>
              )}
            </div>

            {/* Returns and Exchange */}
            <div className="border-b py-2 text-sm">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleSection('returns')}
              >
                <h2 className="text-lg font-semibold">Returns and Exchange</h2>
                <span>{activeSection === 'returns' ? '-' : '+'}</span>
              </div>
              {activeSection === 'returns' && (
                <div className="mt-2 text-gray-600 text-sm">
                  <p>We offer 10-days exchange policy starting from the date of order delivery.<br/>
In case of any damaged OR missing item, the concern must be raised within 48 hours to our customer care team for further assistance, otherwise the complaints cannot be accepted.<br/>

For additional information and the exchange form click here</p>
                </div>
              )}
            </div>

            {/* Care Instructions */}
            <div className="py-2 text-base">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleSection('care')}
              >
                <h2 className="text-lg font-semibold">Care Instructions</h2>
                <span>{activeSection === 'care' ? '-' : '+'}</span>
              </div>
              {activeSection === 'care' && (
                <div className="mt-2 text-gray-600">
                  <p>Care instructions for the product...</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
<hr  className='mt-32 mb-2'/>
<div className='flex justify-center'
   style={{
    fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
    color: "black",
    fontSize: "xxx-large",
  }}
>
Related Products
</div>
      <Row
        style={{
          fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
          color: "black",
        }}
      >
      <Pic4 pageLink="/Page4" ProductImg='https://baroque.pk/cdn/shop/files/137_06507b61-39b6-47f2-81ef-570bf3e41fbf.jpg?v=1715759307&width=300' ProductImgHover='https://baroque.pk/cdn/shop/files/136_eddc2f54-4e70-4ff0-989f-732e99346126.jpg?v=1715759307&width=800' ProductName="EMBROIDERED CHIFFON 997" ProductPrice=" 29,000.00" ProductTypeNo="Pret Formal" />
      <Col><Pic4 pageLink="/Page4" ProductImg='https://baroque.pk/cdn/shop/files/180_d09509e5-46cb-4d8a-9321-ce9a3ed87231.jpg?v=1725610884&width=300' ProductImgHover='https://baroque.pk/cdn/shop/files/178_864c35fa-4064-4cd7-9a97-2ddec5f532ce.jpg?v=1725610883&width=800' ProductName="EMBROIDERED CHIFFON 956" ProductPrice=" 21,000.00" ProductTypeNo="Pret Formal" /></Col>
      <Col><Pic4 pageLink="/Page4" ProductImg='https://baroque.pk/cdn/shop/files/64_26758a98-d266-4122-8692-c230135ba238.jpg?v=1726904748&width=300' ProductImgHover='	https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=800' ProductName="EMBROIDERED CHIFFON 182" ProductPrice=" 15,000.00" ProductTypeNo="Pret Formal" /></Col>
      <Col><Pic4 pageLink="/Page4" ProductImg='https://baroque.pk/cdn/shop/files/135_5a390530-a1a5-4a49-ab55-2c82b0d79b7a.jpg?v=1724493924&width=300'ProductImgHover='https://baroque.pk/cdn/shop/files/133_b58ef877-3768-4a51-be77-57b70661e81e.jpg?v=1724493924&width=800'  ProductName="EMBROIDERED CHIFFON 992" ProductPrice=" 11,000.00" ProductTypeNo="Pret Formal" /></Col>
      </Row>

<div 
      className="mt-40"
       />

      <Footer />

    </>
  );
}

export default Page3;
