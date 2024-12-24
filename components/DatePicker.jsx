// DatePicker component displays a clickable input with a calendar popup to select a date. 

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function DatePicker({ selectedDate, onChange }){
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg w-[200px] cursor-pointer">
          <p>{selectedDate ? format(selectedDate, 'PP') : 'Pick a date'}</p>
          <CalendarDaysIcon className='w-4 h-4 text-black' />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto h-[300px]">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onChange}
          className="rounded-md"
        />
      </PopoverContent>
    </Popover>
  );
};