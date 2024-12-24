// SelectButton renders a custom dropdown, accepting 'value', 'options', 'onValueChange', and 'placeholder' 
// to allow users to select an option and update the selected value.

import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

export default function SelectButton({ value, options, onValueChange, placeholder }){
  return (
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="bg-gray-100 rounded-lg w-[148px] h-[38px] py-2 px-4">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  );
};