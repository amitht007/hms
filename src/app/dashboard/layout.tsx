"use client";

import React, { useState,useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftToLine, PanelLeftOpen, PanelLeftClose,Search } from "lucide-react";
const LeftSideBar = ({
  lsbOpen,
  closeLsb,
}: {
  lsbOpen: boolean;
  closeLsb: () => void;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center bg-[#DFEEBF] transform transition-transform duration-300 ease-in-out sticky top-0",
        lsbOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
      <div className="w-full flex-1 flex  flex-col justify-between items-center  font-semibold">
          {/* ICONS */}
          <div className="py-2 text-3xl tracking-widest text-[#6a725a]">
            HMS
          </div>
          {/* CENTRAL CONTENT */}
          <div className="items-center flex flex-col gap-y-2">
              <h3>Appointment</h3>
              <h3>Patient</h3>
              <h3>Staff</h3>
          </div>
          {/* BOTTOM SETTINGS CONTENT */}
          <div className=" bg-[#191b15] text-[#DFEEBF] flex flex-col items-center w-full  tracking-widest">
              <h3 className="py-2 w-full h-full flex justify-center hover:bg-[#393d30] bg-hover:cursor-pointer">Settings</h3>
              <h3 className="py-2 w-full h-full flex justify-center hover:bg-[#393d30] bg-hover:cursor-pointer">Login</h3>
          </div>
      </div>
    </div>
  );
};

const RightSideBar = ({
  rsbOpen,
  closeRsb,
}: {
  rsbOpen: boolean;
  closeRsb: () => void;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center bg-[#DFEEBF] transform transition-transform duration-300 ease-in-out sticky top-0",
        rsbOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <div className="flex-1 flex items-center justify-center font-semibold">
        Right Sidebar
      </div>
    </div>
  );
};

export default function DashboardLayout({children}:{children:React.ReactNode}){
      const [lsbOpen, setLsbOpen] = useState(true);
  const [rsbOpen, setRsbOpen] = useState(true);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
  
      const handleMediaChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setLsbOpen(false);
          setRsbOpen(false);
        }
      }
  
      if (mediaQuery.matches) {
        setLsbOpen(true);
        setRsbOpen(true);
      }
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen grid transition-all duration-300",
        lsbOpen && rsbOpen
          ? "grid-cols-[18rem_1fr_18rem]"
          : lsbOpen && !rsbOpen
          ? "grid-cols-[18rem_1fr_0rem]"
          : !lsbOpen && rsbOpen
          ? "grid-cols-[0rem_1fr_18rem]"
          : "grid-cols-[0rem_1fr_0rem]"
      )}
    >
      {/* Left Sidebar */}
      <LeftSideBar lsbOpen={lsbOpen} closeLsb={() => setLsbOpen(false)} />

      {/* Central Body */}
      <div className="w-full h-full flex flex-col">
        {/* Navbar */}
        <div className="border-b-2 border-[#DFEEBF] h-16 flex flex-row justify-between items-center px-6">
          
          <ArrowLeftToLine
            className="hover:cursor-pointer"
            onClick={() => setLsbOpen(!lsbOpen)}
          />

          {/* <div className="font-bold tracking-widest text-xl">Tom HMS</div> */}
          {rsbOpen ? (
            <PanelLeftClose
              className="hover:cursor-pointer"
              onClick={() => setRsbOpen(false)}
            />
          ) : (
            <PanelLeftOpen
              className="hover:cursor-pointer"
              onClick={() => setRsbOpen(true)}
            />
          )}
        </div>

        {/* Body */}
        <div className="flex-1 flex justify-center h-screen">
            <div className="w-full flex flex-col py-2 h-full">
             {children}
            </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSideBar rsbOpen={rsbOpen} closeRsb={() => setRsbOpen(false)} />
    </div>
  );
};

