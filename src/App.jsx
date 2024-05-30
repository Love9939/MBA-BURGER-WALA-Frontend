import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Layout/Header"
import Footer from "./Components/Layout/Footer"
import Contact from "./Components/contact/Contact"
import About from "./Components/about/About"
import Cart from "./Components/cart/Cart"
import Shipping from "./Components/cart/Shipping"
import ConfirmOrder from "./Components/cart/ConfirmOrder"
import PaymentSuccess from "./Components/cart/PaymentSuccess"
import Login from "./Components/login/Login"
import Profile from "./Components/profile/Profile"
import MyOrders from "./Components/myorders/MyOrders"
import OrderDetails from "./Components/myorders/OrderDetails"
import Dashboard from "./Components/admin/Dashboard"
import Users from "./Components/admin/Users"
import Orders from "./Components/admin/Orders"
import NotFound from "././Components/Layout/NotFound"


import "./Styles/app.scss"
import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/founder.scss"
import "./Styles/menu.scss"
import "./Styles/footer.scss"
import "./Styles/contact.scss"
import "./Styles/cart.scss"
import "./Styles/shipping.scss"
import "./Styles/confirmOrder.scss"
import "./Styles/paymentsuccess.scss"
import "./Styles/login.scss"
import "./Styles/profile.scss"
import "./Styles/table.scss"
import "./Styles/orderDetails.scss"
import "./Styles/dashboard.scss"
import "./Styles/about.scss"


function App() {
 

  return (<Router>
      <Header isAuthenticated={true} />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart"    element={<Cart />} />
        <Route path="/shipping"  element={<Shipping />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders/>} />
        <Route path="/order/:id" element={<OrderDetails/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/users" element={<Users/>} />
        <Route path="/admin/orders" element={<Orders/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

  </Router>
  
  )
}

export default App ;
