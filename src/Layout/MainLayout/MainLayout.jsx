import React from "react";
import Navber from "../../Pages/Shared/Navbar/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#1f242d] lg:px-28">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
