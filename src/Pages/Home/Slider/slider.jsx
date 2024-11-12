// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className=" md:h-[80vh] h-auto rounded-lg"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://i.ibb.co.com/ZgXmMkT/barase.png"
            alt={"chieck"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">This is</h2>
              <p className="text-xl md:text-2xl">Lorem </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://i.ibb.co.com/ZgXmMkT/barase.png"
            alt={"chieck"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">This is</h2>
              <p className="text-xl md:text-2xl">Lorem </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://i.ibb.co.com/ZgXmMkT/barase.png"
            alt={"chieck"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">This is</h2>
              <p className="text-xl md:text-2xl">Lorem </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://i.ibb.co.com/ZgXmMkT/barase.png"
            alt={"dd"}
            layout="fill"
            objectFit="cover"
            priority={"chieck"}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">This is</h2>
              <p className="text-xl md:text-2xl">Lorem </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
