import { useState } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

const Navber = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Function to set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar fluid rounded className="bg-[#1f242d] text-white pt-6">
        <Navbar.Brand>
          <span className="self-center  text-white font-poppins font-bold whitespace-nowrap text-2xl dark:text-white">
            Portfolio.
          </span>
        </Navbar.Brand>
        <div className="lg:hidden relative">
          <Dropdown arrowIcon={false} inline>
            <Dropdown.Header></Dropdown.Header>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-[28px] font-medium font-poppins transition-all bg-slate-600 lg:bg-transparent p-2 lg:p-0">
          <a
            className={`hover:text-[#7cf03d] ${
              activeLink === "home" ? "text-[#7cf03d]" : ""
            }`}
            style={{
              marginLeft: "20px",
              fontSize: "17px",
              transition: ".5s",
            }}
            href="#home"
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>

          <a
            className={`hover:text-[#7cf03d] ${
              activeLink === "about" ? "text-[#7cf03d]" : ""
            }`}
            style={{
              marginLeft: "20px",
              fontSize: "17px",
              transition: ".5s",
            }}
            href="#about"
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>

          {/* <a
            className={`hover:text-[#7cf03d] ${
              activeLink === "products" ? "text-[#7cf03d]" : ""
            }`}
            style={{
              marginLeft: "20px",
              fontSize: "17px",
              transition: ".5s",
            }}
            href="#products"
            onClick={() => handleLinkClick("products")}
          >
            Products
          </a> */}

          <a
            className={`hover:text-[#7cf03d] ${
              activeLink === "blogs" ? "text-[#7cf03d]" : ""
            }`}
            style={{
              marginLeft: "20px",
              fontSize: "17px",
              transition: ".5s",
            }}
            href="#blogs"
            onClick={() => handleLinkClick("blogs")}
          >
            Blogs
          </a>
          <a
            className={`hover:text-[#7cf03d] ${
              activeLink === "contact" ? "text-[#7cf03d]" : ""
            }`}
            style={{
              marginLeft: "20px",
              fontSize: "17px",
              transition: ".5s",
            }}
            href="#contact"
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navber;
