import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Footer from "../componants/Footer/Footer";

const Layout = () => {
  return (
    <main className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
