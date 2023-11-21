import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';

 function EarningPage() {

  //const navigate = useNavigate();
  const [containerWidth, setContainerWidth] = useState(360);

  const updateContainerWidth = () => {
    const newWidth = window.innerWidth < 460 ? window.innerWidth : 460;
    setContainerWidth(newWidth)
  };

  useEffect(() => {
    // Update container width initially and on window resize
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const containerHeight = 812; // Set the container height
  const GridContainer = styled.div`
  /* Styles for the grid container */
`;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    margin: '0 auto', 
    backgroundImage: `url('/GoogleMapTA.webp')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center top',
    marginBottom: `${containerHeight * 0.615}px`, // 50% of container height
  };


  const titleStyle = {
    color: '#c47ecc',
    textAlign: 'Center',
    fontFamily: 'Inter',
    fontSize: '35px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.017px',
    marginTop:'-20px'

  };
  const titleStyle1 = {
    color: 'black',
    textAlign: 'Center',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.017px',
    marginTop:'-10px'

  };

  const subtitleStyle = {
    color: 'Grey',
    fontFamily: 'Inter',
    textAlign: 'Center',
    fontSize: '14px',
    lineHeight: 'normal',
    letterSpacing: '-0.011px',
    marginTop: '-8px'
    
    
  };


  const buttonStyle = {
    height:"30px",
    width:"140px",
    flexShrink: 0,
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.005px',
    cursor: 'pointer',
    margin: '0 10px',
    marginBottom: '20px',
  };
  const cardStyle = {
    height:"230px",
    width:"230px",
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    padding: '30px',
    borderColor:"linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)",
    borderRadius: '10px',
    textAlign: 'center',
    position: 'absolute',
    //bottom: '0',
    //left: '60%',
    //transform: 'translateX(-50%)',
    margin: '10px', // Adjust margin as needed
  };
  const imageStyle = {
    width: '50px',
    height: 'auto',
    marginBottom: '30.9px',
  };
  

  return (
    <div style={containerStyle}>
     <div style={cardStyle}>
      <h1 style={titleStyle}>Order Delivered</h1>
      <img src="/rupee.jpg" alt="Logo" style={imageStyle} />
      <h1 style={titleStyle1}>Earned : Rs 450</h1>
      <h1 style={subtitleStyle}>Rating : 4.5 </h1>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
      </div>
      <button style={buttonStyle}>Done</button>
    </div>
    </div>
  );
}
export default EarningPage;
