import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        {/* <a className="hover:text-red-500 hover:bg-transparent">Item 1</a> */}
        <Link to="home" smooth duration={600}>
          {" "}
          Home{" "}
        </Link>
      </li>
      <li>
        <Link to="toolkit" smooth duration={600}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="experience" smooth duration={600}>
          Experience
        </Link>
      </li>
      <li>
        <Link to="projects" smooth duration={600}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="letsTalk" smooth duration={600}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 shadow-lg w-full z-10">
      <div className="bg-base-100">
        <div className="container mx-auto px-3 navbar">
          {/* --------Start---- */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl">
              {" "}
              Hi 👋🏼{" "}
            </a>
          </div>
          {/* ------END------- */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{links}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
