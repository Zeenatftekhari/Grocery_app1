import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

// Styled Title with responsive font sizes
const ResponsiveTitle = styled(Typography.Title)`
  font-size: 24px; // default font size

  @media (max-width: 768px) {
    font-size: 20px; // font size on medium screens
  }

  @media (max-width: 480px) {
    font-size: 16px; // font size on small screens
  }
`;

function AppHeader() {
  return (
    <div className="AppHeader">
      <ResponsiveTitle level={2}>Weekly Group By Delivery Agent</ResponsiveTitle>
    </div>
  );
}

export default AppHeader;
