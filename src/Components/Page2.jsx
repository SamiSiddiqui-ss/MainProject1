import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainBodyleft from './MainBodyleft';
import MainBodyRight from './MainBodyRight';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Page2 = () => {
  return (
<>

<Header />

<hr className='mt-12 mb-24' />

<h1 className='flex justify-center mb-16'  
 style={{
  fontSize: "45px",
  fontWeight: "lighter",
  fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
  color: "black",
}}
>UNSTITCHED</h1>
<div className=' sticky top-0 bg-white'
 style={{
  fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
  color: "black",
}} 
>
<hr />
<Container className='p-3'>
<Row  className='flex justify-end'>
<Col></Col>
<Col>224 Products</Col>
<Col className='flex-col'>SortBy</Col>
</Row>
</Container>
<hr />
</div>
<div className='flex'> 
<MainBodyleft />
<div className="mt-4 w-full min-h-screen"
 style={{
  fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
  color: "black",
}} >
          <Row>
         <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Pearl_luster_3.jpg?v=1594118536&width=1200' ProductImgHover='https://baroque.pk/cdn/shop/products/Pearl_luster_2.jpg?v=1594118536&width=1000' ProductName="EMBROIDERED CHIFFON CH03-09" ProductPrice=" 15,000.00" ProductTypeNo="CHANTELLE 03" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Untitled-53.jpg?v=1581407738&width=800' ProductImgHover='https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=600' ProductName="EMBROIDERED CHIFFON CH07-02" ProductPrice=" 16,900.00 " ProductTypeNo="CHANTELLE 07" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=800' ProductName="EMBROIDERED CHIFFON CH12-01" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=800' ProductName="EMBROIDERED NET CH12-02" ProductPrice=" 22,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=800' ProductName="EMBROIDERED MASURI CH12-04" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=800' ProductName="EMBROIDERED CHIFFON CH12-03" ProductPrice=" 24,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Pearl_luster_3.jpg?v=1594118536&width=1200' ProductImgHover='https://baroque.pk/cdn/shop/products/Pearl_luster_2.jpg?v=1594118536&width=1000' ProductName="EMBROIDERED CHIFFON CH03-09" ProductPrice=" 15,000.00" ProductTypeNo="CHANTELLE 03" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Untitled-53.jpg?v=1581407738&width=800' ProductImgHover='https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=600' ProductName="EMBROIDERED CHIFFON CH07-02" ProductPrice=" 16,900.00 " ProductTypeNo="CHANTELLE 07" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=800' ProductName="EMBROIDERED CHIFFON CH12-01" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=800' ProductName="EMBROIDERED NET CH12-02" ProductPrice=" 22,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=800' ProductName="EMBROIDERED MASURI CH12-04" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=800' ProductName="EMBROIDERED CHIFFON CH12-03" ProductPrice=" 24,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Pearl_luster_3.jpg?v=1594118536&width=1200' ProductImgHover='https://baroque.pk/cdn/shop/products/Pearl_luster_2.jpg?v=1594118536&width=1000' ProductName="EMBROIDERED CHIFFON CH03-09" ProductPrice=" 15,000.00" ProductTypeNo="CHANTELLE 03" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Untitled-53.jpg?v=1581407738&width=800' ProductImgHover='https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=600' ProductName="EMBROIDERED CHIFFON CH07-02" ProductPrice=" 16,900.00 " ProductTypeNo="CHANTELLE 07" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=800' ProductName="EMBROIDERED CHIFFON CH12-01" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=800' ProductName="EMBROIDERED NET CH12-02" ProductPrice=" 22,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/58_de5e11d4-73d0-4602-b519-e05c5b22818f.jpg?v=1705564218&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=800' ProductName="EMBROIDERED MASURI CH12-04" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='	https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=800' ProductName="EMBROIDERED CHIFFON CH12-03" ProductPrice=" 24,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
          <Row>
         <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Pearl_luster_3.jpg?v=1594118536&width=1200' ProductImgHover='https://baroque.pk/cdn/shop/products/Pearl_luster_2.jpg?v=1594118536&width=1000' ProductName="EMBROIDERED CHIFFON CH03-09" ProductPrice=" 15,000.00" ProductTypeNo="CHANTELLE 03" />
         <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/products/Untitled-53.jpg?v=1581407738&width=800' ProductImgHover='https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=600' ProductName="EMBROIDERED CHIFFON CH07-02" ProductPrice=" 16,900.00 " ProductTypeNo="CHANTELLE 07" />
          </Row>
          <Row>
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=800' ProductImgHover='	https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=800' ProductName="EMBROIDERED CHIFFON CH12-01" ProductPrice=" 29,000.00" ProductTypeNo="CHANTELLE 12" />
          <MainBodyRight pageLink="/Page3" ProductImg='https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=800' ProductImgHover='https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=800' ProductName="EMBROIDERED NET CH12-02" ProductPrice=" 22,900.00 " ProductTypeNo="CHANTELLE 12" />
          </Row>
        </div>
        </div>
<Footer />

</>
  )
}

export default Page2



//
   
   
//  
