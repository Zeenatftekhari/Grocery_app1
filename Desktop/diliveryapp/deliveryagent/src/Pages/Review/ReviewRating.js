import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";

function Review() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        // Redirect to the "Profile" page
        navigate('/ProfilePage');
      };
  // State to manage container width
  const [containerWidth, setContainerWidth] = useState(360);

  // State to manage reviews
  const [reviews, setReviews] = useState([
    { name: "Customer 1", reviewText: "Review 1", rating: 3 },
    { name: "Customer 2", reviewText: "Review 2", rating: 4 },
    // Add more reviews here
  ]);

  // Update container width based on window size
  const updateContainerWidth = () => {
    const newWidth = window.innerWidth < 460 ? window.innerWidth : 460;
    setContainerWidth(newWidth)
  };

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const containerHeight = 812;

  // Styled components and inline styles
  const GridContainer = styled.div``;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    //margin: '0 auto',
    //marginBottom: `${containerHeight * 0.615}px`,
  };

  const titleStyle = {
    color: '#c47ecc',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: '25px',
    marginTop: '-20px'
  };

  const titleStyle1 = {
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: '12px',
    marginTop: '-10px'
  };

  const subtitleStyle = {
    color: '#c47ecc',
    fontFamily: 'Inter',
    textAlign: 'right',
    fontSize: '26px',
    marginTop: '-80%'
  };

  const cardStyle = {
    backgroundColor: '#FFF',
    width: "250px",
    border: '1px solid #C47ECC',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'relative',
    marginTop: '20px',
  };

  const starRatingStyle = {
    marginTop: '10px',
  };
  const handleRatingChange = (newRating) => {
    // Handle the change in rating value
    console.log('New Rating:', newRating);
  };
  const buttonStyle = {
    width: '100px',
    height: '30px',
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
    alignItems: 'right',
    justifyContent: 'center',
    //marginLeft:"100%",
    marginTop:"10%"
    //marginRight:"10px",
   
  };


  return (
    <div style={containerStyle}>
      <style>
      {`
        .purple-star::before {
          color: #c47ecc !important;
        }
      `}
      </style>
      <div style={subtitleStyle}>Review/Rating</div>
      {reviews.map((review, index) => (
        <div key={index} style={cardStyle}>
          <h1 style={titleStyle}>{review.name}</h1>
          <h2 style={titleStyle1}>{review.reviewText}</h2>
          <div style={starRatingStyle}>
            <ReactStars
              count={5}
              size={25}
              isHalf={true}
              value={review.rating}
              edit={true}
              emptySymbol={<span className="purple-star">☆</span>}
              fullSymbol={<span className="purple-star">★</span>}
              onChange={handleRatingChange}
            />
          </div>
          
        </div>
      ))}
      <div><button type="submit" className="btn btn-primary" style={buttonStyle} onClick={handleBackClick}>
          <span>Back</span>
        </button>
        </div>
    </div>
  );
  
}

export default Review;
