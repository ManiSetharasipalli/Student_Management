// Button component for rendering a button with an icon and text.

import React from 'react'

export default function Button({Icon, text, type="button"}) {
  return (
    <button 
        type = {type}
        className="flex gap-3 bg-gray-100  items-center font-sans font-bold text-sm rounded-lg w-[197px] h-[36px] p-4 cursor-pointer
                  hover:bg-gray-300">
        <Icon className="w-5 h-5 text-[#3F526E]"/>
        <p>{text}</p>
    </button>
  );
};
