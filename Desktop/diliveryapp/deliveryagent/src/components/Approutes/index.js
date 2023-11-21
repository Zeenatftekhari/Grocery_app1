import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/dashboard";
import Login from "../../Pages/Login/login";
import Signup from "../../Pages/Signup/signup";
import OrderDetails from "../../Pages/Orderdetails/orderdetails";
import Singleorderlist from "../../Pages/SingleOrder/Singleorderlist";
import Profile from "../../Pages/Profile/ProfilePage";
import DeliveryLocation from "../../Pages/Deliverylocation/deliveryLocation";
import FlashScreen from "../../Pages/FlashScreen/flashScreen";
import DropLocation from "../../Pages/Droplocation/DropLocation";
import EarningPage from "../../Pages/Earningpage/EarningPage";
import Review from "../../Pages/Review/ReviewRating";
import Home from "../../Pages/Home/HomeScreen";


const DeliveryLocationComponent = DeliveryLocation;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/singleorder" element={<Singleorderlist />} />
      <Route path="/ProfilePage" element={<Profile />} />
      <Route path="/flashScreen" element={<FlashScreen />} />
      {/* Include the deliveryLocation route */}
      <Route path="/DeliveryLocation" element={<DeliveryLocationComponent />} />
      <Route path="/DropLocation" element={<DropLocation />} />
      <Route path="/EarningPage" element={<EarningPage />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
