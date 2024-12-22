import Image from 'next/image';

import { 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  AdjustmentsHorizontalIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

import UserImage from '../public/Kattycox.png';

function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center ml-5 mt-5 gap-5 md:ml-0 md:gap-10">
  {/* search bar */}
  <div className="flex bg-white items-center rounded-xl py-3.5 pr-4 pl-5 w-[80%] md:w-[614px] h-[48px]">
      <MagnifyingGlassIcon className="h-[15px] w-[15px] text-[#808281] mr-2.5"/>
      <input 
        type="text" 
        placeholder="Search your course" 
        className="bg-transparent text-[#808281] text-sm outline-none font-sans font-medium"
      />
  </div>
  <div className='flex justify-between items-center gap-5'>
      <QuestionMarkCircleIcon className="h-5 w-5 text-[#808281]"/>
      <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-[#808281]"/>
      <AdjustmentsHorizontalIcon className="h-5 w-5 text-[#808281]"/>
      <BellIcon className="h-5 w-5 text-[#808281]"/>
      <div className='flex items-center gap-5 cursor-pointer'>
        <Image 
          src={UserImage}
          alt="user image"
          width={300}
          height={300}
          className="rounded-lg bg-[#FFCD66] w-10 h-10 cursor-pointer"
        />
        <p className='font-semibold text-[#05162E] font-sans text-base'>Adeline H. Dancy</p>
    </div>
  </div>
    </div>
  );
}

export default Header;
