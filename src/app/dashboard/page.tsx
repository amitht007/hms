"use client";

import React from "react";
import {
  Search,
  UserPlus,
  FileText,
  Calendar,
  HeartPulse,
  ClipboardList,
  PersonStanding,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Page = () => {
  const cardBase =
    "flex flex-col justify-center items-center text-center h-36 md:h-40 lg:h-44 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer";

  return (
    <div className="flex flex-col gap-y-4 p-4 md:p-6 lg:p-8 bg-[#f8ffe9] h-full">
      {/* Search Bar */}
      <div className="w-full bg-white flex gap-x-2 items-center rounded-full border border-[#DFEEBF] shadow-sm px-4 py-2">
        <Search className="text-[#6a725a]" />
        <input
          type="text"
          placeholder="Search patients, records, or appointments..."
          className="w-full rounded-full py-1 px-2 outline-none text-[#191b15] placeholder:text-[#8a8f7d]"
        />
      </div>

      {/* Quick Actions Grid */}
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
          gap-4 mt-4
        "
      >
        <Link href="/dashboard/register"
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#6a725a] to-[#191b15] text-[#DFEEBF]"
          )}
        >
          <UserPlus size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            Register Patient
          </span>
        </Link>

        <div
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#DFEEBF] to-[#bcd694] text-[#191b15]"
          )}
        >
          <FileText size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            View Records
          </span>
        </div>

        <div
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#6a725a] to-[#2e3226] text-[#DFEEBF]"
          )}
        >
          <PersonStanding size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            Patients
          </span>
        </div>

        <Link
        href="/dashboard/appointments"
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#DFEEBF] to-[#9db877] text-[#191b15]"
          )}
        >
          <Calendar size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            Appointments
          </span>
        </Link>

        <div
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#6a725a] to-[#393d30] text-[#DFEEBF]"
          )}
        >
          <HeartPulse size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            Health Reports
          </span>
        </div>

        <div
          className={cn(
            cardBase,
            "bg-gradient-to-br from-[#DFEEBF] to-[#c6d8a5] text-[#191b15]"
          )}
        >
          <ClipboardList size={28} className="mb-2" />
          <span className="font-semibold text-base md:text-lg">
            Lab Tests
          </span>
        </div>

      </div>
    </div>
  );
};

export default Page;
