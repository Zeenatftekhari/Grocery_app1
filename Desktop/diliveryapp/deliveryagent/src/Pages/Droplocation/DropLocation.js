import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';

 function DropLocation() {

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
const inputStyle = {
  borderRadius: '40px',
  border: '1px solid #C47ECC',
  background: '#FFF',
  fontFamily: 'Inter',
  width: '100%',
  height: '40px',
  //padding:'5px',
  fontSize: '16px',
  lineHeight: '24px',
};
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
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: '25px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.017px',
    marginTop:'-20px'

  };
  const titleStyle1 = {
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.017px',
    marginTop:'-10px'

  };

  const subtitleStyle = {
    color: 'White',
    fontFamily: 'Inter',
    textAlign: 'right',
    fontSize: '14px',
    lineHeight: 'normal',
    letterSpacing: '-0.011px',
    marginTop: '-8px'
    
    
  };


  const buttonStyle = {
    width: '371px',
    height: '54px',
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
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    // /left: '60%',
    //transform: 'translateX(-50%)',
    marginBottom: '10px', // Adjust margin as needed
  };
  const cardStyle1 = {
    backgroundColor: 'grey',
    width: '111px',
    height: '24px',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'absolute',
    left: '70%',
    //transform: 'translateX(-50%)',
    marginTop: '-65px', // Adjust margin as needed
  };
  const rectangleStyle = {
    width: "400px",
    height: "400px",
    flexShrink: 0,
    background: "#C47ECC",
    borderRadius:"50%",
    position: "absolute",
    zIndex: -1,
    top: "-20%",
    left: "52%",
    transform: "translateX(-50%)",
  };

  

  return (
    <div style={containerStyle}>
      <div style={rectangleStyle}></div>
     <div style={cardStyle}>
      <h1 style={titleStyle}>User name</h1>
      <h1 style={titleStyle1}>Dropoff location manager</h1>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
        {/* Call Icon */}
        <FontAwesomeIcon icon={faPhone} style={{ fontSize: '18px', marginRight: '10px' }} />
        {/* Message Icon */}
        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '18px' }} />
      </div>
      <div style={cardStyle1}>
      <h3 style={subtitleStyle}>Estimated Time</h3>
      <h2 style={subtitleStyle}> 10 min</h2>
      </div>
      <GridContainer>
            <div className="mb-3" style={{ margin: '25px 0' }}>
              <input
                type="text"
                className="form-control"
                name="Drop"
                placeholder=" Drop Location"
                //value={email}
                //onChange={onChange}
                style={inputStyle}
              />
            </div>
            </GridContainer>

      <button style={buttonStyle}>Reached Drop Location</button>
    </div>
    </div>
  );
}
export default DropLocation;
