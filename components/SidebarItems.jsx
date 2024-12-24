// SidebarItems component applies dynamic styling based on the 'isActive' prop. 

import React from "react";

export default function SidebarItems({ Icon, Item, isActive }) {
  return (
    <div className={`
        flex items-center py-3 pr-20 pl-3 rounded-lg gap-2.5
        cursor-pointer transition-colors duration-200
        ${isActive 
          ? 'bg-[#EEEEEE] text-[#0A0A0A] font-bold' 
          : 'bg-white text-[#6F767E] hover:bg-[#EEEEEE] active:text-[#0A0A0A]'
        }
      `}>
        <Icon className="w-5 h-5" />
        <p className="font-sans text-base">{Item}</p>
    </div>
  );
};

