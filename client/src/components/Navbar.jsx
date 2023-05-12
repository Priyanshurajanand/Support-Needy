import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, menu,  thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <>
      <div className="flex  3xl:flex-row flex-col-reverse 3xl:justify-between  mb-[35px] gap-6 bg-[#13131a] py-4">
        <div className="sm:flex  flex-row justify-between gap-4 hidden">
          <div className="flex flex-row justify-between l-[10px]">
            <Link to="/">
              <img
                src={logo}
                alt="user"
                className=" bg-[#2c2f32]  w-[48px] h-[48px] rounded-[10px] 
              flex justify-center items-center "
              />
            </Link>
            <div className="lg:flex-1 flex flex-row max-w-[458px]  pl-4 pr-2 h-[52px]  ">
              <h1 className="sm:flex hidden text-[#1dc071] text-[25px] py-1">
                SupportNeedy
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4 r-[10px]">
            <CustomButton 
              btnType="button"
              title={"Dashboard"}
              styles = {'bg-[#1dc071] hover:bg-green-800 ' } 
              handleClick={() => {
                 navigate("/home");
              }}
            />
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071] hover:bg-green-800" : "bg-blue-600 hover:bg-blue-800"}
              handleClick={() => {
                if (address) {
                  navigate("create-campaign");
                } else {
                  connect();
                }
              }}
            />
            <Link to="/profile">
              <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* small screen navigation  */}
        <div className="sm:hidden flex justify-between items-center relative">
          <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <Link to="/">
            <img
              src={logo}
              alt="user"
              className="w-[100%] h-[100%] object-contain rounded"
            /></Link>
          </div>
          <h1 className="text-lime-300 text-[25px] ">SupportNeedy</h1>
          <img
            src={menu}
            alt="menu"
            className="w-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div
            className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
              !toggleDrawer ? "-translate-y-[100vh]" : "-translate-y-0"
            } transition-all duration-700`}
          >
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${
                    isActive === link.name && "bg-[#3a3a43]"
                  }`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img
                    src={link.imgUrl}
                    alt="link.name"
                    className={`w-[24px] h-[24px] object-contian ${
                      isActive === link.name ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  <p
                    className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                      isActive === link.name
                        ? "text-[#1dc071]"
                        : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex mx-4">
              <CustomButton
                btnType="button"
                title={address ? "Create a campaign" : "Connect"}
                styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                handleClick={() => {
                  if (address) {
                    navigate("create-campaign");
                  } else {
                    connect();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
