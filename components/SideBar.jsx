'use client';

import React, { useState } from 'react';
import Image from "next/image";
import {
  ClockIcon,
  BookOpenIcon,
  NewspaperIcon,
  ChartPieIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import SidebarItems from "@/components/SidebarItems";

export default function ResponsiveSidebar({ Logo }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button - Only visible on mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-1 z-50 p-2 rounded-md lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <p className='hidden'/>
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        flex flex-col fixed lg:relative bg-white py-8 px-3 w-[248px] gap-[30px] min-h-screen
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        z-40
      `}>
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className="w-[98px] h-12"
        />
        <div className="flex flex-col gap-2.5">
          <SidebarItems Icon={ClockIcon} Item="Dashboard" />
          <SidebarItems Icon={BookOpenIcon} Item="Students" />
          <SidebarItems Icon={NewspaperIcon} Item="Chapter" />
          <SidebarItems Icon={QuestionMarkCircleIcon} Item="Help" />
          <SidebarItems Icon={ChartPieIcon} Item="Reports" />
          <SidebarItems Icon={Cog6ToothIcon} Item="Settings" />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}