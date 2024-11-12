import unity from "../../../assets/images/unity-spark.png";
import dash from "../../../assets/images/admin-home.png";
import deltal from "../../../assets/images/dental-care.png";
import test from "../../../assets/images/test.png";
import job1 from "../../../assets/images/job1.png";
import job2 from "../../../assets/images/job2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// import required modules
import { GiThumbDown, GiThumbUp } from "react-icons/gi";
import { IoLogoGithub } from "react-icons/io5";

const LatestProjects = () => {
  return (
    <div id="#products" className="py-14 text-white">
      <h1
        data-aos-duration="1500"
        data-aos="flip-up"
        className="text-3xl font-bold font-poppins text-center"
      >
        Latest <span className="text-[#7cf03d]"> Projects</span>
      </h1>

      <div className=" mt-6 flex items-center gap-11 ">
        {/* left side for use this div */}
        <div className="text-white  lg:flex hidden w-[40%]">
          <div>
            <h2 className="text-7xl text-gray-400 font-bold font-poppins">
              01
            </h2>
            <h2 className="text-3xl font-extrabold py-2 font-poppins">
              Frontend Project
            </h2>
            <p className="text-sm  pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fuga
              sit praesentium est consequuntur totam facere quam eligendi
              laboriosam atque, molestias dolores pariatur qui, incidunt
            </p>
            <p className=" pt-2 border-b-2 py-2 text-[#7cf03d]">
              HTML5, CSS3, JavaScript, React.js, Tailwind
            </p>
            <div className="p-2">
              <IoLogoGithub className="text-2xl " />
            </div>
          </div>
        </div>

        {/* Swiper slider use side for use this div */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper h-[200px] lg:w-[60%]"
        >
          <SwiperSlide>
            <img src={unity} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dash} alt="" />
          </SwiperSlide>

          <SwiperSlide className="bottom-1 border-x-red-600">
            <img src={deltal} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={test} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={deltal} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={job1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={job2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProjects;
