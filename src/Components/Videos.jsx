// import React from 'react'
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
const Videos = (props) => {
  return (
 <>
 <div className="video-container text-center">
      <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: "100%",
        maxWidth: "1000px", 
        height: "600px",
        objectFit: "cover",
        fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
      }}
      >
        <source src={props.videoSrc} type="video/mp4" />
      </video>
      <button 
      className="btns pt-2 pb-2 pr-8 pl-8 mt-4 bg-black relative bottom-36 border-2 border-black		text-white ">
        {props.buttonText}
      </button>
    </div>



</>
  )
}

export default Videos
  