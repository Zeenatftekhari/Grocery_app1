import React from "react";
import { useNavigate } from "react-router-dom";
//import Badge from "react-bootstrap/Badge";
import { Box, Grid, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import SearchInputBox from "../searchbar/SearchInputBox";


const titleStyle = {
  color: "#C47ECC",
  // textAlign: "center",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "26px",
  marginBottom: "0", // Adjust as needed
};

const subtitleStyle = {
  color: "#6A6A6A",
  fontFamily: "Inter",
  fontSize: "10px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  display: "flex",
  alignItems: "center",
  marginBottom: "0",
  marginLeft: "5px",
};


const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

const buttonStyle = {
  margin: "0 10px",
  cursor: "pointer",
};

export default function Navbar({ userInfo, search, searchProduct }) {
  const navigate = useNavigate();

  const onProfileClick = () => {
    navigate("/ProfilePage", { state: userInfo })
  }
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container style={{}}>
      <Grid item container sx={{ backgroundColor: "#fff", mt: "0.5em" }} p={2}>
        <Grid
          item
          xs={10}
          display="flex"
          flexDirection="column"
          justifyContent={"start"}
        >
          <h1 style={titleStyle}>Welcome back Agent</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "start",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
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
                label={auth ? 'Online' : 'Offline'}
              //sx={{ color: "#C47ECC" }}
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={2} display="flex" flexDirection="column">
          <div style={buttonContainerStyle}>
            <div onClick={onProfileClick}>
              <img
                src="/face_FILL0_wght400_GRAD0_opsz48 3.png"
                alt="Profile"
                style={{
                  ...buttonStyle,
                  width: "25px",
                  height: "25px",
                  top: "84px",
                  left: "309px",
                }}

              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container p={2}>
        <Grid item xs={12} className="d-flex" style={{}}>
          <SearchInputBox
            type="text"
            value={search}
            sx={{ width: "100%" }}
            onChange={searchProduct}
          />
          {/* <img src="/search.png" alt="Search" style={searchIconStyle} /> */}
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            inter-label="Search"
            onChange={(e) => searchProduct(e)}
          />
          <img src="/mic.png" alt="Mic" style={micIconStyle} /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
