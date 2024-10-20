import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Footer from "../componants/Footer/Footer";

const Layout = () => {
  return (
    <main className="font-poppins min-w-[100vw] min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
