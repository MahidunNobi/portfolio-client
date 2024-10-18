import { Outlet } from "react-router-dom"

const Layout = () => {
    
  return (
    <main className="font-poppins">
      <p>Layoyut</p>
        <Outlet />
    </main>
  )
}

export default Layout