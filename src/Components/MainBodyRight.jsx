import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function MainBodyRight(props) {
    const [isHovered, setIsHovered] = useState(false);

    const backgroundImage = {
        backgroundImage: `url(${isHovered ? props.ProductImgHover : props.ProductImg})`,
    };
  return (
    <>
        <Col md={6} sm={12} xs={12} className='flex justify-center p-4'>
            <div className='w-full'>
                <Link to={props.pageLink}>
                <div style={backgroundImage} className={`h-[600px] w-full bg-cover bg-center cursor-pointer`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></div>
                </Link>
                <div className='text-center mt-3 tracking-wider text-sm'>
                    {props.ProductName}
                </div>
                <div className='text-center mt-3 tracking-wider text-md font-semibold'>
                    PKR {props.ProductPrice}
                </div>
                <div className='text-center mt-3 tracking-wider text-[10px]'>
                    {props.ProductTypeNo}
                </div>
            </div>
        </Col>


    </>
  )
}

export default MainBodyRight