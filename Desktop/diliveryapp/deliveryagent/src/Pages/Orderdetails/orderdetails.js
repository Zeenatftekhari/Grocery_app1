import React, { useState } from "react";
import Navbar from "../../components/AppNavbar/Navbar";
import Card from "../../components/Card/Carddata";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MoneyIcon from '@mui/icons-material/Money';
import ClockIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'C:/Users/iftek/Desktop/diliveryapp/deliveryagent/src/App.css'; 


const pathImageStyle = {
  width: "104px",
  height: "4px",
  flexShrink: 0,
  fill: "#D8D8D8",
  marginTop: "11.65px",
  marginBottom: "25.35px",
};

export default function OrderDetails() {
  const [grocery_category, setGroceryCat] = useState([]);
  const [grocery_items, setGroceryItems] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState(0);

  const searchProductByName = (e) => {
    setSearch(e.target.value);
  };
  
  const PerformanceSection = ({ performance, selectedValue }) => (
    <div className="performance-section" style={{ border: selectedValue === value ? "2px solid #C47ECC" : "2px solid transparent" ,background:"none" }}>
      {selectedValue === 0 && <div className="performance-item">{performance.trips} trips</div>}
      {selectedValue === 1 && <div className="performance-item">{performance.loginHours} login hours</div>}
      {selectedValue === 2 && <div className="performance-item">{performance.orders} orders</div>}
    </div>
  );
  
  const EarningsSection = ({ earnings }) => (
    <div className="earnings-section" style={{ border: "2px solid #C47ECC", padding: "10px", borderRadius: "8px", display: "flex", flexDirection: "column", marginTop:"10px" }}>
      <div className="earnings-current">
        <span className="earnings-label">Earnings For This Month</span>
        <span className="earnings-amount"style={{ marginLeft:"230px" }}>{`₹${earnings.current}`}</span>
      </div>
      <div className="earnings-item"style={{ border: "2px solid #C47ECC", padding: "10px", borderRadius: "8px", display: "flex" }}>
        <span className="earnings-label">Earnings for last month</span>
        <span className="earnings-amount"style={{ marginLeft:"290px" }}>{`₹${earnings.last}`}</span>
        <ArrowDropDownIcon />
      </div>
      <div className="earnings-item" style={{ border: "2px solid #C47ECC", padding: "10px", borderRadius: "8px", display: "flex" }}>
        <span className="earnings-label">Order Earning</span>
        <span className="earnings-amount"style={{ marginLeft:"370px" }}>{`₹${earnings.orderEarning}`}</span>
        <ArrowDropDownIcon />
      </div>
      <div className="earnings-item"style={{ border: "2px solid #C47ECC", padding: "10px", borderRadius: "8px", display: "flex"}}>
        <span className="earnings-label">Surge Pay</span>
        <span className="earnings-amount"style={{ marginLeft:"400px" }}>{`₹${earnings.surgePay}`}</span>
        <ArrowDropDownIcon />
      </div>
      <div className="earnings-item"style={{ border: "2px solid #C47ECC", padding: "10px", borderRadius: "8px", display: "flex"}}>
        <span className="earnings-label">Other</span>
        <span className="earnings-amount"style={{ marginLeft:"430px" }}>{`₹${earnings.other}`}</span>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
  
  

 
  const performance = {
    trips: 481,
    loginHours: '310.4',
    orders: 515
};

  const earnings = {
    current: '34684.7',
    last: '41720.2',
    orderEarning: '30660',
    surgePay: '483.6',
    other: '-48.94'
  };

  return (
    <Box>
      <Box textAlign={"center"}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
      </Box>
      <div>
          <Navbar search={search} searchProduct={searchProductByName} /> 
      </div>
      <Box sx={{ width: 500,margin:"10px" , style:{color:"linear-gradient(270deg, #825CC6 1.55%, #C47ECC 97.04%)"} }}>
      <Typography variant="h6" align="center" style={{  marginBottom: "10px", color: "Black" }}>
          Performance for the Month
        </Typography>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
  label="Trips"
  icon={<MoneyIcon />}
  style={{
    color: value === 0 ? "#C47ECC" : undefined,
    border: value === 0 ? "2px solid #C47ECC" : "2px solid transparent",
  }}
/>
<BottomNavigationAction
  label="Login Hours"
  icon={<ClockIcon />}
  style={{
    color: value === 1 ? "#C47ECC" : undefined,
    border: value === 1 ? "2px solid #C47ECC" : "2px solid transparent",
  }}
/>
<BottomNavigationAction
  label="Orders"
  icon={<ShoppingCartIcon />}
  style={{
    color: value === 2 ? "#C47ECC" : undefined,
    border: value === 2 ? "2px solid #C47ECC" : "2px solid transparent",
  }}
/>

      </BottomNavigation>
    </Box>
    <PerformanceSection performance={performance} selectedValue={value} style={{ margin: "10px" }} />
      <EarningsSection earnings={earnings} />
    {/* ... (your existing code) */}
      {/* <Grid container p={2}>
        {grocery_category && grocery_category.length > 0 ? (
          grocery_category.map((data, ind) => {
            return (
              <Grid item xs={12} key={data.id}>
                <div className="">{data.grocery_category}</div>
                {grocery_items && grocery_items.length > 0 ? (
                  grocery_items
                    .filter(
                      (items) =>
                        items.grocery_category === data.grocery_category &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 4)
                    .map((filterItems, index) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-3 p-2" key={filterItems.id}>
                          <Card
                            foodName={filterItems.name}
                            options1={filterItems.options[0]}
                            item={filterItems}
                            options={filterItems.options[3]}
                            ImgSrc={filterItems.img}
                            index={index}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Data Available</div>
                )}
              </Grid>
            );
          })
        ) : (
          <div>No Data Available</div>
        )}
      </Grid> */}
    </Box>
  );
}