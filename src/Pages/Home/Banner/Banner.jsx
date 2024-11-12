import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { TiSocialLinkedin } from "react-icons/ti";
import "./Banner.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Banner = () => {
  return (
    <div className="text-white lg:h-[100vh]  flex flex-col-reverse lg:flex-row items-center px-2  justify-between lg:px-0">
      <div
        data-aos="fade-right"
        className="lg:w-1/2 mt-20 lg:mt-0  w-full px-2"
      >
        <h2 className=" text-[45px] lg:text-[55px] font-poppins font-bold">
          Rifazul Islam
        </h2>
        <h3 className="text-[28px] space-x-2 flex gap-1 font-poppins font-semibold -mt-3 text-[#7cf03d]">
          I am,
          <Typewriter
            words={["Front end Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p className="text-[16px]  font-poppins">
          Front-end developer skilled in building responsive, user-friendly web
          apps with React.js and Tailwind CSS. Passionate about clean code and
          great user experiences committed to delivering exceptional user
          experiences through intuitive and visually appealing designs.
        </p>
        {/* other work part */}
        <div className="mt-11 flex flex-col-reverse lg:flex-row gap-10  items-center ">
          {/* button area */}
          <div
            onClick={() =>
              toast.success("This Button Update Comming Soon", {
                position: "top-center",
                autoClose: 1000,
              })
            }
          >
            <button className="px-10 py-2 bg-[#7cf03d] border border-[#7cf03d] rounded-3xl shadow-md shadow-[#7cf03d] text-lg text-[#1f242d] font-semibold transition-all hover:bg-transparent hover:text-[#7cf03d] hover:shadow-non">
              DownloadCV
            </button>
          </div>

          {/* social Icns  */}
          <div className="flex lg:flex-row  items-center gap-2">
            <Link
              to="https://github.com/Rifazul-Islam"
              target="blank"
              className="p-2 border border-[#7cf03d] rounded-full text-lg text-[#7cf03d] cursor-pointer px-2 transition-all hover:bg-[#7cf03d] hover:text-[#1f242d] shadow-sm shadow-[#7cf03d]"
            >
              <FaGithub />
            </Link>

            <Link
              to="https://www.linkedin.com/in/rifazul-islam/"
              target="blank"
              className="p-2 border border-[#7cf03d] rounded-full text-lg text-[#7cf03d] cursor-pointer px-2 transition-all hover:bg-[#7cf03d] hover:text-[#1f242d] shadow-sm shadow-[#7cf03d]"
            >
              <TiSocialLinkedin />
            </Link>
            <p className="p-2 border border-[#7cf03d] rounded-full text-lg text-[#7cf03d] cursor-pointer px-2 transition-all hover:bg-[#7cf03d] hover:text-[#1f242d] shadow-sm shadow-[#7cf03d]">
              <FaTwitter />
            </p>

            <p className="p-2 border border-[#7cf03d] rounded-full text-lg text-[#7cf03d] cursor-pointer px-2 transition-all hover:bg-[#7cf03d] hover:text-[#1f242d] shadow-sm shadow-[#7cf03d]">
              <FaDiscord />
            </p>
          </div>
        </div>
      </div>

      {/* right side this banner  */}
      <div data-aos="fade-up-left" className="lg:mt-0 mt-20 ">
        <div className="relative img-box  lg:w-[28vw] lg:h-[28vw] w-52 h-52  p-1 rounded-full flex justify-center items-center overflow-hidden ">
          <div className="relative  w-full h-full bg-[#1f242d] z-50 border border-[#1f242d] rounded-full flex justify-center overflow-hidden">
            <img
              className="absolute block w-[85%] object-cover top-4 mix-blend-lighten"
              src="https://i.ibb.co/fkfWKg2/my-profile.png"
              alt="personal"
            />
          </div>
        </div>
      </div>
      {/*  Core css use 
      <div className="">
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="https://i.ibb.co.com/fkfWKg2/my-profile.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
