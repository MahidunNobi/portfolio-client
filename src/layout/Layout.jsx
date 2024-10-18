import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";

const Layout = () => {
  return (
    <main className="font-poppins">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
