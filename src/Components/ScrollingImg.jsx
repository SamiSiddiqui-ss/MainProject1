import React from 'react'
import { Link } from 'react-router-dom';

const ScrollingImg = (props) => {
  return (
    <>
      <div className='flex-col mx-auto w-full h-auto sm:w-[300px] md:w-[500px] lg:w-[700px]'
        style={{
        //   width: "700px",
        }}>
         <Link to={props.pageLink}>
        <img
          className='mb-3'
          src={props.imgg} 
          alt="" 
        />
        </Link>
      </div>
    </>
  )
}

export default ScrollingImg
