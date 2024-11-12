import { useEffect, useRef } from "react";

const useMenu = () => {
  const scrollButtonRef = useRef(null); // Reference to the scroll button
  useEffect(() => {
    const scrollButton = scrollButtonRef.current;

    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Function to scroll to the top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Attach click event listener to the button
    scrollButton.addEventListener("click", scrollToTop);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollButton.removeEventListener("click", scrollToTop);
    };
  }, []);

  return [scrollButtonRef];
};

export default useMenu;
