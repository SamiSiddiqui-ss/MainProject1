import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Pic4(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Col lg={4} md={4} sm={12} xs={12} className='flex justify-center relative top-36'>
                <div className=''>
                    <Link to={props.pageLink}>
                        {/* Image container */}
                        <div className="h-[370px] w-[250px] cursor-pointer" 
                             onMouseEnter={() => setIsHovered(true)} 
                             onMouseLeave={() => setIsHovered(false)}>
                            <img 
                                src={isHovered ? props.ProductImgHover : props.ProductImg} 
                                alt={props.ProductName} 
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    {/* Product details */}
                    <div className='text-center mt-3 tracking-wider text-sm'>
                        {props.ProductName}
                    </div>
                    <div className='text-center mt-3 tracking-wider text-sm font-semibold'>
                        PKR {props.ProductPrice}
                    </div>
                    <div className='text-center mt-3 tracking-wider text-[10px]'>
                        {props.ProductTypeNo}
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Pic4;
