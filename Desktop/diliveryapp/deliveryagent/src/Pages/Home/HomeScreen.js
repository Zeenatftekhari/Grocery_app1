import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faTimes , faBell } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';

function Home() {

    //const navigate = useNavigate();
    const [containerWidth, setContainerWidth] = useState(360);
    const [auth, setAuth] = React.useState(true);
    //const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
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
  /* Styles for the grid container */`;
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
        marginTop: '-20px',
        marginLeft: '25px'

    };
    const titleStyle1 = {
        color: 'black',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: '10px',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.017px',
        marginTop: '-10px',
        marginLeft: '30px'
    };
    const titleStyle2 = {
        color: 'Grey',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: '10px',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.017px',
        marginTop: '10px',
        marginLeft: '30px'
    };
    const titleStyle3 = {
        color: 'Grey',
        textAlign: 'right',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.017px',
        marginTop: '-7%',
        marginRight: '10px'
    };
   
    const subtitleStyle = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '2px',
        marginLeft: '25px',
    };


    const subtitleStyle1 = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '-8px',
        marginLeft: '8px',
    };
    const subtitleStyle2 = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '-10px',
        marginLeft: '40%',
    };
    const subtitleStyle3 = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '-16%',
        marginLeft: '44%',
    };
    const subtitleStyle4 = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '-8px',
        marginLeft: '73%',
    };
    const subtitleStyle5 = {
        color: 'White',
        fontFamily: 'Inter',
        textAlign: 'Left',
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '-0.011px',
        marginTop: '-16%',
        marginLeft: '80%',
    };

    const cardStyle = {
        width: "300px",
        height: "100px",
        backgroundColor: '#FFF',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        // /left: '60%',
        //transform: 'translateX(-50%)',
        marginBottom: '-10%', // Adjust margin as needed
    };
    const cardStyle1 = {
        backgroundColor: 'Black',
        width: '311px',
        height: '44px',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        position: 'absolute',
        left: '6%',
        //transform: 'translateX(-50%)',
        //marginTop: '-65px', // Adjust margin as needed
    };
    
    const circleStyle = {
        width: "40px",
        height: "40px",
        flexShrink: 0,
        position: "absolute",
        //zIndex: -1,
        top: "13%", // Adjust this value to position the circle
        //left: "48%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#8C5CE3",
    };

    const circleSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 81 81"
            fill="none"
        >
            <path
                d="M29.8498 48.6844C28.5687 48.6844 27.4922 48.2421 26.6203 47.3576C25.7484 46.473 25.3125 45.3902 25.3125 44.1091C25.3125 42.828 25.7548 41.7516 26.6393 40.8797C27.5239 40.0078 28.6067 39.5719 29.8877 39.5719C31.1688 39.5719 32.2453 40.0141 33.1172 40.8987C33.9891 41.7833 34.425 42.8661 34.425 44.1471C34.425 45.4282 33.9827 46.5047 33.0982 47.3766C32.2136 48.2484 31.1308 48.6844 29.8498 48.6844ZM51.1966 48.6844C49.9156 48.6844 48.8391 48.2421 47.9672 47.3576C47.0953 46.473 46.6594 45.3902 46.6594 44.1091C46.6594 42.828 47.1016 41.7516 47.9862 40.8797C48.8708 40.0078 49.9536 39.5719 51.2346 39.5719C52.5157 39.5719 53.5922 40.0141 54.4641 40.8987C55.3359 41.7833 55.7719 42.8661 55.7719 44.1471C55.7719 45.4282 55.3296 46.5047 54.4451 47.3766C53.5605 48.2484 52.4777 48.6844 51.1966 48.6844ZM40.5 69.1875C48.5086 69.1875 55.292 66.4046 60.8502 60.8388C66.4084 55.273 69.1875 48.4803 69.1875 40.4608C69.1875 39.0244 69.075 37.6031 68.85 36.1969C68.625 34.7906 68.3438 33.4969 68.0063 32.3156C66.8813 32.5969 65.6645 32.7938 64.356 32.9062C63.0476 33.0187 61.6768 33.075 60.2438 33.075C54.781 33.075 49.6185 31.95 44.7561 29.7C39.8937 27.45 35.7469 24.2437 32.3156 20.0813C30.4031 24.6375 27.6609 28.6172 24.0891 32.0203C20.5172 35.4234 16.425 38.0531 11.8125 39.9094V40.5C11.8125 48.5086 14.5916 55.292 20.1498 60.8502C25.708 66.4084 32.4914 69.1875 40.5 69.1875ZM40.5 74.25C35.8312 74.25 31.4438 73.3641 27.3375 71.5922C23.2312 69.8203 19.6594 67.4156 16.6219 64.3781C13.5844 61.3406 11.1797 57.7688 9.40781 53.6625C7.63594 49.5563 6.75 45.1688 6.75 40.5C6.75 35.8312 7.63594 31.4438 9.40781 27.3375C11.1797 23.2312 13.5844 19.6594 16.6219 16.6219C19.6594 13.5844 23.2312 11.1797 27.3375 9.40781C31.4438 7.63594 35.8312 6.75 40.5 6.75C45.1688 6.75 49.5563 7.63594 53.6625 9.40781C57.7688 11.1797 61.3406 13.5844 64.3781 16.6219C67.4156 19.6594 69.8203 23.2312 71.5922 27.3375C73.3641 31.4438 74.25 35.8312 74.25 40.5C74.25 45.1688 73.3641 49.5563 71.5922 53.6625C69.8203 57.7688 67.4156 61.3406 64.3781 64.3781C61.3406 67.4156 57.7688 69.8203 53.6625 71.5922C49.5563 73.3641 45.1688 74.25 40.5 74.25ZM32.7375 12.9094C37.6875 18.7031 42.2578 22.6687 46.4484 24.8062C50.6391 26.9438 55.2375 28.0125 60.2438 28.0125C61.5938 28.0125 62.6625 27.9844 63.45 27.9281C64.2375 27.8719 65.1094 27.7031 66.0656 27.4219C63.5344 22.8656 60.0891 19.125 55.7297 16.2C51.3703 13.275 46.2938 11.8125 40.5 11.8125C38.9813 11.8125 37.5469 11.925 36.1969 12.15C34.8469 12.375 33.6938 12.6281 32.7375 12.9094ZM12.5719 33.9188C15.2719 32.9062 18.3516 30.6141 21.8109 27.0422C25.2703 23.4703 27.7313 19.1531 29.1938 14.0906C24.3 16.2844 20.6016 19.0828 18.0984 22.4859C15.5953 25.8891 13.7531 29.7 12.5719 33.9188Z"
                fill="#D6B4FF"
            />
        </svg>
    );
    const getIcon = (value) => {
        if (value == 80) {
            return <FontAwesomeIcon icon={faCheck} />;
        } else if (value == 4.3) {
            return <FontAwesomeIcon icon={faStar} />;
        } else if (value == 3) {
            return <FontAwesomeIcon icon={faTimes} />;
        } else {
            return null;
        }
    };
    const [isCardOpen, setCardOpen] = useState(false);

  const toggleCard = () => {
    setCardOpen(!isCardOpen);
  };
  const inputStyle = {
    //borderRadius: '40px',
    border: 'NONE',
    background: '#FFF',
    fontFamily: 'Inter',
    width: '100%',
    height: '40px',
    //paddingLeft: '15px',
    //paddingRight: '15px',
    fontSize: '16px',
    marginBottom: '-100px',
  };


    return (
        <div style={containerStyle}>
            {/*<div style={rectangleStyle}></div>*/}
            <FontAwesomeIcon
        icon={faBell}
        style={{ position: 'absolute', top: '8%', left: '40%', color: 'black', fontSize: '2em' }}
        onClick={toggleCard}
      />  
      {isCardOpen && (
        <div style={{ backgroundColor: 'white', width: '220px', height: '250px', position: 'absolute', top: '14%',borderRadius:'6px',zIndex: 1,  /* Additional styles for your card */ }}>
         <div>
         <GridContainer style={{ marginLeft: '10%' }}>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="ORDERS →"
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="RECENT ORDERS →"
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            // onChange={onChange}
            placeholder="DELIVERED →"
            name="PERSONAL DETAILS"
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="TO BE DELIVERED →"
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            className="form-control"
            name="LEGAL"
            placeholder="RETURNS →"
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ margin: '5px 0' }}>
          <input
            type="text"
            className="form-control"
            name="LEGAL"
            placeholder="PAYMENTS →"
            style={inputStyle}
          />
        </div>
      </GridContainer>
        </div>
        </div>
      )}
      
            <div style={cardStyle}>
                <h2 style={circleStyle}>{circleSvg}</h2>
                <h1 style={titleStyle}>User name
                {
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    sx={{
                      '& .MuiSwitch-thumb': {
                        color: "#C47ECC",
                      },
                      '& .MuiSwitch-track': {
                        backgroundColor: "#C47ECC !important",
                      },
                     
                    }}
                    aria-label="login switch"
                  />

                }
                {auth ? 'Online' : 'Offline'}
                </h1>
                <h1 style={titleStyle1}>Part-Time</h1>
                <h1 style={titleStyle2}>EARNED FROM LAST DELIVERY</h1>
                <h1 style={titleStyle3}>5000</h1>
                <div style={cardStyle1}>
                    <div>
                        <h3 style={subtitleStyle}> {getIcon(80)}80%</h3>
                        <h2 style={subtitleStyle1}> Acceptance</h2>
                        <h3 style={subtitleStyle3}>{getIcon(4.3)}4.3</h3>
                        <h2 style={subtitleStyle2}> Rating</h2>
                        <h3 style={subtitleStyle5}> {getIcon(3)}3</h3>
                        <h2 style={subtitleStyle4}> Cancelled</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
