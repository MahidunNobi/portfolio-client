import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content items-center p-4">
      <div className="container mx-auto footer text-neutral-content items-center p-3">
        <nav className="flex justify-center items-center gap-4 w-full md:w-auto">
          <a href="mailto:mdmahidunnobi@gmail.com">
            <IoIosMail size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-mahidun-nobi/"
            target="_blank"
          >
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/MahidunNobi" target="_blank">
            <FaGithub size={28} />
          </a>
          <a href="tel:+8801618252490">
            <FaPhone size={24} />
          </a>
        </nav>
        <aside className="grid-flow-col items-center w-full md:w-auto">
          <p className="w-full text-center">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
