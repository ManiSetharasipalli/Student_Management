function SidebarItems({Icon, Item}) {
  return (
    <div className="flex items-center bg-white py-3 pr-20 pl-3 rounded-lg gap-2.5
    cursor-pointer hover:bg-[#EEEEEE] text-[#6F767E] active:text-[#0A0A0A]">
       <Icon className="w-5 h-5" /> 
       <p className="font-sans font-bold text-base">{Item}</p>
    </div>
  )
}

export default SidebarItems