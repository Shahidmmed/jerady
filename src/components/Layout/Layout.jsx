import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="main-container" data-uk-height-viewport="expand: true">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
