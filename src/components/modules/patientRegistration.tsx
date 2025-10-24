"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Home,
  ClipboardList,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";

const PatientOnboardingForm = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#f8ffe9] text-black">
      <div className="w-full flex justify-around">
        <form className="items-center w-full bg-white shadow-md border border-[#DFEEBF] p-8 space-y-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
            <User size={18} className="text-[#6a725a]" /> Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a] transition-all"
          />
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
              <Mail size={18} className="text-[#6a725a]" /> Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
              <Phone size={18} className="text-[#6a725a]" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a]"
            />
          </div>
        </div>

        {/* DOB & Gender */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
              <CalendarDays size={18} className="text-[#6a725a]" /> Date of Birth
            </label>
            <input
              type="date"
              className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#191b15] font-medium mb-1">Gender</label>
            <select className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a] bg-white">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
            <Home size={18} className="text-[#6a725a]" /> Address
          </label>
          <textarea
            rows={3}
            placeholder="Enter residential address"
            className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a] resize-none"
          />
        </div>

        {/* Medical History */}
        <div className="flex flex-col">
          <label className="text-[#191b15] font-medium mb-1 flex items-center gap-2">
            <ClipboardList size={18} className="text-[#6a725a]" /> Medical History
          </label>
          <textarea
            rows={3}
            placeholder="Brief summary of medical history or notes"
            className="border border-[#DFEEBF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a725a] resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#191b15] text-[#DFEEBF] px-6 py-2 rounded-lg font-medium hover:bg-[#393d30] transition-colors duration-200"
          >
            Register Patient
          </button>
        </div>
      </form>
        </div>
    </div>
  );
};

export default PatientOnboardingForm;
