import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 36px;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
   Password: '',
    date: new Date(),
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (json.success) {
      // Redirects to the login page, which should be defined in your route configurations.
      navigate('/');
    } else {
      alert('Failed to add Signup data');
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const buttonStyle = {
    width: '343px',
    height: '54px',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.005px',
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '80px',
    marginTop: '40px',
  };

  const inputStyle = {
    borderRadius: '40px',
    border: '1px solid #C47ECC',
    background: '#FFF',
    fontFamily: 'Inter',
    width: '100%',
    height: '40px',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft: '15px',
  };
  const titleStyle = {
    width: "230px",
    color: "#C47ECC",
    fontFamily: "Inter",
    fontSize: "58px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    textAlign: "center",
    marginLeft:"5%",
    marginTop:"-90%",
    marginBottom: "20%",
    
  };

  const subtitleStyle = {
    color: "#8C5CE3",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "26px",
    marginTop: "",
  };

  const subtitleStyle1 = {
    color: "#3E3E3E",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "26px",
    marginTop: "24px", // Adjusted margin between UserName and subtitle
  };
  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Set the minimum height of the container to the viewport height
    position: "relative",
  };

  const rectangleStyle = {
    width: "400px",
    height: "400px",
    flexShrink: 0,
    background: "#C47ECC",
    borderRadius:"50%",
    position: "absolute",
    zIndex: -1,
    top: "-18%",
    left: "52%",
    transform: "translatex(-50%)",
  };
 
  const imageStyle = {
    width: '250px',
    height: 'auto',
    marginTop:'-100%',
    marginBottom: '60.9%',
  };
 

  return (
    <>
    <div>
      <div style={formContainerStyle}>
      <img src="/Bike1.png" alt="Logo" style={imageStyle} />
        <div style={rectangleStyle}></div>
        <div><div style={titleStyle}>Hello</div>
        <div style={subtitleStyle}>Agent Name</div>
        <div style={subtitleStyle1}>Enter Your Email ID & Password </div></div>
      
        <form onSubmit={handleFormSubmit}>
          <GridContainer>
            {/* Add your input fields here */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChange}
                style={inputStyle}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="Password"
                placeholder="Password"
                value={formData.Password}
                onChange={onChange}
                style={inputStyle}
              />
            </div>

            {/* Add more input fields for your form */}
          </GridContainer>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            <span>Proceed</span> <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
    </div>
    </div>
    </>
  );
}

