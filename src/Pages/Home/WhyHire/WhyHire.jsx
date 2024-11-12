import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaBook, FaBookOpen, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import "./WhyHire.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const WhyHire = () => {
  const [store, setStore] = useState(1);
  const allData = [
    {
      id: 1,
      title: "My Experience",
      description:
        "Front-end developer skilled in building responsive, user-friendly web apps with React.js and Tailwind CSS. Passionate about clean code and great user experiences.",
      experData: [
        {
          ids: 1,
          year: "2024 present",
          title: "FrontEnd developer",
          descrip:
            "Front-end developer skilled in building responsive, user-friendly web apps with React.js and Tailwind.",
          company: "ABC Core",
        },
        {
          ids: 2,
          year: "2022 - 2023",
          title: "Full Stack developer",
          descrip:
            "Full Stack developerskilled in building responsive, user-friendly web apps with React.js and Tailwind.",
          company: "ZWC Store",
        },
        {
          ids: 3,
          year: "2024 present",
          title: "Mern Stack developer",
          descrip:
            "Mern Stack developer skilled in building responsive, user-friendly web apps with React.js and Tailwind.",
          company: "FCB Dynamic",
        },
      ],
    },
    {
      id: 2,
      title: "My Education",
      description:
        "I'm an honors student in my final year at a national university, committed to deepening my expertise and applying my knowledge to real-world projects.",
      educataData: [
        { ids: 1, title: "SCC", year: "2017", icons: <FaBookOpen /> },
        { ids: 2, title: "HSC", year: "2019", icons: <FaBook /> },
        {
          ids: 3,
          title: "Honours Present",
          year: "2024",
          icons: <MdCastForEducation />,
        },
      ],
    },
    {
      id: 3,
      title: "My Skills",
      description:
        "Front-end developer with expertise in React.js, Tailwind CSS, and JavaScript. Skilled in creating responsive, user-friendly interfaces and maintaining clean, efficient code.",

      skillData: [
        { ids: 1, icons: <FaReact /> },
        { ids: 2, icons: <SiNextdotjs /> },
        {
          ids: 3,
          icons: <IoLogoJavascript />,
        },
        {
          ids: 4,
          icons: <RiTailwindCssFill />,
        },
        {
          ids: 5,
          icons: <FaHtml5 />,
        },
        {
          ids: 6,
          icons: <IoLogoCss3 />,
        },
      ],
    },
    {
      id: 4,
      title: "My About us",
      description:
        "We are a team of dedicated front-end developers passionate about creating responsive and user-friendly web applications. With expertise in modern technologies like React.js and Tailwind CSS ...",
      aboutData: [
        {
          ids: 1,
          descrip: "I'm a dedicated front-end developer with a passion,",
        },
        {
          ids: 2,
          descrip: "dedicated front-end developer with a passion for ",
        },
      ],
    },
  ];

  const epecificData = allData.find((item) => item.id === store);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="py-10 pt-36 lg:h-screen">
      <div>
        <Tabs
          className="grid grid-cols-3 gap-8 lg:px-0 px-2 cursor-pointer"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList
            data-aos="fade-up-right"
            className="lg:col-span-1 col-span-3 space-y-2"
          >
            <div className="text-white mt-4">
              <h1 className="text-3xl font-bold font-poppins">Why Hire Me ?</h1>
              <p className="leading-none py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet
                consectetur adipisicing elit.
              </p>
            </div>
            <Tab
              onClick={() => setStore(1)}
              className=" bg-gray-700 text-center  px-24 py-1.5   text-white rounded-sm"
            >
              Experince
            </Tab>
            <Tab
              onClick={() => setStore(2)}
              className={`bg-gray-700 text-center px-24 py-1.5 hover:border-[1px] border-[1px] border-gray-700 hover:border-[#7cf03d] rounded-sm text-white`}
            >
              Education
            </Tab>
            <Tab
              onClick={() => setStore(3)}
              className="bg-gray-700 text-center px-24 py-1.5  hover:border-[1px] border-[1px] border-gray-700 hover:border-[#7cf03d] text-white rounded-sm"
            >
              Skills
            </Tab>

            <Tab
              onClick={() => setStore(4)}
              className="bg-gray-700 text-center px-24 py-1.5  hover:border-[1px] border-[1px] border-gray-700 hover:border-[#7cf03d] text-white rounded-sm"
            >
              About us
            </Tab>
          </TabList>

          <div
            data-aos-duration="1500"
            data-aos="zoom-in"
            className="lg:col-span-2 col-span-3 p-2"
          >
            <TabPanel className="lg:col-span-2 col-span-3 p-2">
              <div className="ml-2">
                <h2 className="text-white text-2xl font-bold font-poppins ">
                  {epecificData?.title.slice(0, 2)}{" "}
                  <span className="text-[#7cf03d]">
                    {epecificData?.title.slice(3, 14)}
                  </span>
                </h2>
                <p className="text-white font-poppins py-1 font-medium">
                  {epecificData?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 h-3/2 overflow-y-auto">
                {epecificData?.experData && (
                  <>
                    {epecificData?.experData.map((item) => (
                      <div
                        key={item.id}
                        className=" bg-gray-700 text-white p-2 py-4 rounded-lg"
                      >
                        <p className="text-sm text-[#7cf03d]"> {item?.year} </p>
                        <h2 className="text-xl font-semibold font-poppins pt-0.5">
                          {item.title}
                        </h2>
                        <p className="flex items-center -ml-2">
                          <RxDotFilled className=" text-2xl text-[#7cf03d]" />
                          {item?.company}
                        </p>
                        <p className="text-sm">{item?.descrip}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </TabPanel>
            <TabPanel className="lg:col-span-2 col-span-3 p-2">
              <div className="ml-2">
                <h2 className="text-white text-2xl font-bold font-poppins ">
                  {epecificData?.title.slice(0, 2)}{" "}
                  <span className="text-[#7cf03d]">
                    {epecificData?.title.slice(3, 14)}
                  </span>
                </h2>
                <p className="text-white font-poppins py-1 font-medium">
                  {epecificData?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 h-3/2 overflow-y-auto">
                {epecificData?.educataData && (
                  <>
                    {epecificData?.educataData.map((item) => (
                      <div
                        key={item.ids}
                        className=" bg-gray-700 text-white p-2 py-4 rounded-lg"
                      >
                        <div className="text-3xl pb-6 text-[#7cf03d]">
                          {item?.icons}
                        </div>
                        <p className="text-[11px] text-[#7cf03d]">
                          {item?.year}
                        </p>
                        <h2 className="text-xl font-semibold font-poppins pt-0.5">
                          Title : {item.title}
                        </h2>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ml-2">
                <h2 className="text-white text-2xl font-bold font-poppins ">
                  {epecificData?.title.slice(0, 2)}{" "}
                  <span className="text-[#7cf03d]">
                    {epecificData?.title.slice(3, 14)}
                  </span>
                </h2>
                <p className="text-white font-poppins py-1 font-medium">
                  {epecificData?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 h-3/2 overflow-y-auto">
                {epecificData?.skillData && (
                  <>
                    {epecificData?.skillData.map((item) => (
                      <div
                        key={item.ids}
                        className=" bg-gray-700 hover:border hover:border-[#7cf03d] border border-gray-700 text-white p-2 py-4 rounded-lg"
                      >
                        <div className="text-3xl flex justify-center text-[#7cf03d]">
                          {item?.icons}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ml-2">
                <h2 className="text-white text-2xl font-bold font-poppins ">
                  {epecificData?.title.slice(0, 2)}{" "}
                  <span className="text-[#7cf03d]">
                    {epecificData?.title.slice(3, 14)}
                  </span>
                </h2>
                <p className="text-white font-poppins py-1 font-medium">
                  {epecificData?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 h-3/2 overflow-y-auto">
                {epecificData?.aboutData && (
                  <>
                    {epecificData?.aboutData?.map((item) => (
                      <div
                        key={item.ids}
                        className=" bg-gray-700 text-white p-2 py-4 rounded-lg"
                      >
                        <div className="text-3xl flex justify-center text-[#7cf03d]">
                          <p className="text-[16px]"> {item?.descrip} </p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WhyHire;
