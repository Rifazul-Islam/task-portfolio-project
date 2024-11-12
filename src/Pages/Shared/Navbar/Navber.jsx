import { useState, useEffect } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

const Navber = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY >= 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

          <a
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
          </a>

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
      {/* {!isSticky && (
        <Navbar fluid rounded className=" text-white">
          <Navbar.Brand>
            <span className="self-center  text-white font-poppins font-bold whitespace-nowrap text-3xl dark:text-white">
              PortFolio.
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="text-[28px] font-medium font-poppins transition-all bg-slate-600 lg:bg-transparent p-2 lg:p-0">
            <NavLink
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-[#7cf03d]" : ""
              }
            >
              Home
            </NavLink>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#products"
            >
              Products
            </a>

            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#blogs"
            >
              Blogs
            </a>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#contact"
            >
              Contact
            </a>
          </Navbar.Collapse>
        </Navbar>
      )}
      {isSticky && (
        <Navbar
          fluid
          rounded
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
          className={` py-6 text-white ${
            isSticky ? "visible-nav" : "hidden-nav"
          }`}
        >
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Portfolio
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="text-[28px] font-medium font-poppins transition-all bg-slate-600 lg:bg-transparent p-2 lg:p-0">
            <NavLink
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-[#7cf03d]" : ""
              }
            >
              Home
            </NavLink>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#products"
            >
              Products
            </a>

            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#blogs"
            >
              Blogs
            </a>
            <a
              className="hover:text-[#7cf03d]"
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                transition: ".5s",
              }}
              href="#contact"
            >
              Contact
            </a>
          </Navbar.Collapse>
        </Navbar>
      )} */}
    </>
  );
};

export default Navber;
