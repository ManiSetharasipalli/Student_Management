// Render course item with icon

import Image from "next/image";

export default function CourseItem ({ imageSrc, courseText }){
  return(
    <div className="flex md:bg-[#F6F8FA] w-[134px] rounded-lg py-0.5 pl-1 pr-2 gap-1 items-center">
        <Image 
          src={imageSrc}
          alt={`Icon for ${courseText}`}
          width={300} 
          height={300}
          className="rounded-sm w-4 h-4 md:w-5 md:h-5"
        />
        <p>{courseText}</p>
      </div>
  );
};

