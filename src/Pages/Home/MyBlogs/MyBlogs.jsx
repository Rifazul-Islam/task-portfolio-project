import React from "react";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
const MyBlogs = () => {
  // this is a blog array object
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript",
      description: "A concise guide to mastering JavaScript closures.",
      icons: <AiOutlineJavaScript />,
    },
    {
      id: 2,
      title: "Exploring React Hooks",
      description: "Learn how to effectively use React hooks in projects.",
      icons: <FaReact className="animate-spin text-blue-500" />,
    },
    {
      id: 3,
      title: "CSS Flexbox vs Grid",
      description: "Discover the differences and uses of Flexbox and Grid.",
      icons: <RiTailwindCssFill className="text-blue-700" />,
    },
    {
      id: 4,
      title: "Tips for Writing Clean Code",
      description: "Essential practices for writing clean, maintainable code.",
      icons: <FaCode className="text-[#7cf03d]" />,
    },
    {
      id: 5,
      title: "Optimizing Web Performance",
      description:
        "Strategies to improve your website's speed and performance.",
      icons: <FcSalesPerformance />,
    },
  ];
  return (
    <div>
      <h2
        data-aos-duration="1500"
        data-aos="flip-up"
        className="text-2xl text-center py-12 text-white font-bold "
      >
        My <span className="text-[#7cf03d]">Blogs</span>
      </h2>
      <div
        data-aos-duration="1500"
        data-aos="zoom-in-down"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 px-2"
      >
        {/* for map sistem implement */}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            href="#"
            className="border-[3px]  hover:border-[3px] hover:border-[#7cf03d] p-4 pb-10  border-gray-700  bg-gray-700 px-4  rounded-lg cursor-pointer"
          >
            <div className="text-yellow-400 flex justify-center py-4 text-center font-bold text-4xl mx-auto">
              {blog.icons}
            </div>
            <h5 className="text-2xl font-bold tracking-tight mb-3 text-white font-poppins">
              {blog.title}
            </h5>
            <p className="font-normal text-white font-poppins ">
              {blog.description}, in reverse chronological order.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
