'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
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
  // State to control the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get the current pathname for active link styling
  const pathname = usePathname();

  // List of menu items with their respective path, icon, and label
  const menuItems = [
    { path: '/dashboard', Icon: ClockIcon, label: 'Dashboard' },
    { path: '/students', Icon: BookOpenIcon, label: 'Students' },
    { path: '/chapter', Icon: NewspaperIcon, label: 'Chapter' },
    { path: '/help', Icon: QuestionMarkCircleIcon, label: 'Help' },
    { path: '/reports', Icon: ChartPieIcon, label: 'Reports' },
    { path: '/settings', Icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <>
      {/* Button for toggling the sidebar on mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-1 z-50 p-2 rounded-md lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {/* Display the menu icon when the sidebar is closed */}
        {isSidebarOpen ? (
          <p className="hidden"/> 
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>
      
      {/* Sidebar container */}
      <div className={`
        flex flex-col fixed lg:relative bg-white py-8 px-3 w-[248px] gap-[30px] min-h-screen
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        z-40
      `}>
        {/* Logo section */}
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className="w-[98px] h-12"
        />
        
        {/* Sidebar menu items */}
        <div className="flex flex-col gap-2.5">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <SidebarItems 
                Icon={item.Icon} 
                Item={item.label}
                isActive={pathname === item.path}
              />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Overlay when sidebar is open on mobile and tab screen sizes */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        />
      )}
    </>
  );
}
