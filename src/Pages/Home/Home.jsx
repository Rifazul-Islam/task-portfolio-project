import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import MyBlogs from "./MyBlogs/MyBlogs";
import WhyHire from "./WhyHire/WhyHire";
import Contact from "./Contact/Contact";
import LatestProjects from "./LatestProjects/LatestProjects";
import useMenu from "../../hook/useMenu";
import ButtonComponent from "../Shared/ButtonComponent/ButtonComponent";

const Home = () => {
  const [scrollButtonRef] = useMenu();
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="#home">
      <Banner></Banner>

      <div id="blogs">
        <MyBlogs> </MyBlogs>
      </div>

      <div id="about">
        <WhyHire></WhyHire>
      </div>

      <div id="products">
        <LatestProjects></LatestProjects>
      </div>

      <div id="contact">
        <Contact></Contact>
      </div>

      <div>
        <ButtonComponent scrollValue={scrollButtonRef} />
      </div>
    </div>
  );
};

export default Home;
