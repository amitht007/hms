"use client";

import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { Users, CalendarDays, BarChart3, X } from "lucide-react";
import PatientOnboardingForm from "@/components/modules/patientRegistration";

const Window = ({ title, children, defaultPos }: any) => {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <Rnd
      default={{
        x: defaultPos.x,
        y: defaultPos.y,
        width: 400,
        height: 300,
      }}
      bounds="window"
      dragHandleClassName="drag-handle"
      className="border border-neutral-700 bg-[#0f1117] rounded-md shadow-lg text-white flex flex-col overflow-hidden"
    >
      <div className="drag-handle flex justify-between items-center bg-[#161a23] px-3 py-2 cursor-move text-sm border-b border-neutral-800">
        <span>{title}</span>
        <X
          className="cursor-pointer text-neutral-400 hover:text-white"
          size={16}
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="flex-1 overflow-auto p-3 text-sm">{children}</div>
    </Rnd>
  );
};

export default function HMSWorkspace() {
  return (
    <div className="w-full h-screen bg-[#0f1117] overflow-hidden">

      {/* Floating Windows */}
      <div className="relative w-full h-[calc(100vh-48px)]">
        <Window title="👩‍⚕️ Patients" defaultPos={{ x: 40, y: 60 }}>
            <PatientOnboardingForm/>
        </Window>

        <Window title="📅 Appointments" defaultPos={{ x: 480, y: 80 }}>
          <div className="space-y-2">
            <div className="p-2 bg-[#1a1a1a] rounded-md border border-neutral-700">
              10:00 AM — John Doe
            </div>
            <div className="p-2 bg-[#1a1a1a] rounded-md border border-neutral-700">
              11:30 AM — Mary Smith
            </div>
          </div>
        </Window>

        <Window title="📊 Analytics" defaultPos={{ x: 220, y: 400 }}>
          <div>Patient load trend, revenue insights, etc.</div>
        </Window>
      </div>
    </div>
  );
}
