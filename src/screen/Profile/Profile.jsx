import React from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export const Profile = () => {
  return (
    <>
      <div className="backgroundScreens w-full h-lvh mt-24 pt-10 bg-primary flex justify-center pb-80 relative">
        <div className="flex items-start justify-start w-full h-lvh  absolute top-0">
          <div className="flex w-1/3 h-full justify-start flex-col">
            <div className="flex w-full  h-1/3 justify-center items-center">
              <div className="upload-Profile bg-white-100 bg-opacity-40 w-52 h-52 rounded-full border border-black overflow-hidden relative flex justify-center items-center">
                    <lord-icon
                      // size={20}
                      style={{height : "15rem", width : "15rem"}}
                      src="https://cdn.lordicon.com/hrjifpbq.json"
                      trigger="hover"
                    ></lord-icon>
                <div className="profile-Tag w-full h-32  absolute -bottom-24 bg-white opacity-60 flex justify-center items-start pt-1">
                  <span className="font-serif">
                    Name
                  </span>
                </div>
              </div>
            </div>
            <div className="h-2/3  py-2">
              <div className="flex flex-col justify-center items-center w-full h-full opacity-40">
                <div className="h-1/5 bg-red-200 w-full"></div>
                <div className="h-2/5 bg-red-300 w-full"></div>
                <div className="h-1/5 bg-red-400 w-full"></div>
                <div className="h-1/5 bg-red-500 w-full"></div>
                <div className="h-1/5 bg-red-600 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
