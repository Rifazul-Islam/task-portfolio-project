import { FaArrowUp } from "react-icons/fa6";

const ButtonComponent = ({ scrollValue }) => {
  return (
    <div>
      {/* Scroll Button  */}
      <div ref={scrollValue} className="fixed right-5 bottom-5 hidden">
        <button className="p-3 rounded-lg shadow-lg  bg-[#7cf03d]">
          <FaArrowUp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
