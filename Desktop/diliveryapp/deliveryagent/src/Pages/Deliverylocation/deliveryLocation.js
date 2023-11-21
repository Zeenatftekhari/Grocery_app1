import React, { useState ,useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
//import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';

 function DeliveryLocation() {

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
  padding:'5px',
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

  const subtitleStyle = {
    color: 'black',
    fontFamily: 'Inter',
    textAlign: 'right',
    fontSize: '12px',
    lineHeight: 'normal',
    letterSpacing: '-0.011px',
    marginTop: '-35px',
    marginBottom:'40px'
  };


  const buttonStyle = {
    width: '171px',
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

  

  return (
    <div style={containerStyle}>
     <div style={cardStyle}>
      <h1 style={titleStyle}>User name</h1>
      <h3 style={subtitleStyle}>Rs 20</h3>
      <h2 style={subtitleStyle}>4km|20m</h2>
      <GridContainer>

            <div className="mb-3" style={{ margin: '25px 0' }}>
              <input
                type="text"
                className="form-control"
                name="Pickup"
                placeholder="Pick up"
                //value={name}
                //onChange={onChange}
                style={inputStyle}
              />
            </div>
            <div className="mb-3" style={{ margin: '25px 0' }}>
              <input
                type="text"
                className="form-control"
                name="Drop"
                placeholder="Drop Location"
                //value={email}
                //onChange={onChange}
                style={inputStyle}
              />
            </div>
            </GridContainer>
      <button style={buttonStyle}>Reject</button>
      <button style={buttonStyle}>Accept</button>
    </div>
    </div>
  );
}
export default DeliveryLocation;
