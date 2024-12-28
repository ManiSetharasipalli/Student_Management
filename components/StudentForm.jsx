'use client'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "@/redux/studentsSlice";
import { PlusIcon } from "@heroicons/react/24/outline";
import SelectButton from "./SelectButton";
import DatePicker from "./DatePicker";
import Button from "./Button";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle
} from "./ui/dialog";
import { toast } from "sonner";

const COHORTS = ["AY 2024-25", "AY 2023-24", "AY 2022-23"];

const COURSES_LIST = {
  "CBSE 9": "CBSE 9 Science, CBSE 9 Math",
  "CBSE 8": "CBSE 8 Science, CBSE 8 Math",
  "CBSE 7": "CBSE 7 Telugu, CBSE 7 Math"
};

const INITIAL_FORM_STATE = {
  name: "",
  cohort: "AY 2024-25",
  courses: "CBSE 9 Science, CBSE 9 Math",
  dateJoined: new Date(),
  lastLogin: new Date(), // By default, the current date and time are sent.
  status: true,
};

export default function AddStudentForm() {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // Generic handler for text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler for select inputs and custom fields
  const handleSelectChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: key === "courses" ? COURSES_LIST[value] : value
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(formData));
    setIsDialogOpen(false);
    toast(`Student '${formData.name}' created successfully!`);
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div onClick={() => setIsDialogOpen(true)}>
        <Button Icon={PlusIcon} text="Add New Student" />
      </div>
      <DialogContent side="right" className="w-[350px] sm:w-[500px] rounded-lg">
        <DialogTitle className="text-xl font-bold mb-4">
          Add Student
        </DialogTitle>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input Field */}
          <div className="flex flex-col gap-5">
            <label htmlFor="studentName" className="block text-sm font-sans font-semibold">
              Student Name
            </label>
            <div className="bg-gray-100 rounded-xl py-3.5 pr-4 pl-5 w-[80%]">
              <input
                id="studentName"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-transparent text-[#808281] w-full text-sm outline-none font-sans font-semibold"
                placeholder="Enter student name"
                required
              />
            </div>
          </div>

          {/* Cohort Selection */}
          <div className="flex justify-between items-center">
            <p className="block text-sm font-sans font-semibold">Cohort</p>
            <SelectButton
              value={formData.cohort}
              onValueChange={(value) => handleSelectChange("cohort", value)}
              options={COHORTS}
              placeholder="Select Cohort"
            />
          </div>

          {/* Courses Selection */}
          <div className="flex justify-between items-center">
            <p className="block text-sm font-sans font-semibold">Courses</p>
            <SelectButton
              value={Object.keys(COURSES_LIST).find(
                key => COURSES_LIST[key] === formData.courses
              )}
              onValueChange={(value) => handleSelectChange("courses", value)}
              options={Object.keys(COURSES_LIST)}
              placeholder="Select Course"
            />
          </div>

          {/* Date Joined Picker */}
          <div className="flex justify-between items-center">
            <p className="block text-sm font-sans font-semibold">Date Joined</p>
            <DatePicker
              selectedDate={formData.dateJoined}
              onChange={(date) => handleSelectChange("dateJoined", date)}  
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center gap-10">
            <p className="block text-sm font-sans font-semibold">Status</p>
            <div
              role="button"
              tabIndex={0}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                formData.status ? "bg-[#4AEA40]" : "bg-[#EA4E40]"
              }`}
              onClick={() => handleSelectChange("status", !formData.status)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectChange("status", !formData.status);
                }
              }}
            />
          </div>

          <div className="flex justify-center items-center">
            <Button Icon={PlusIcon} text="Add New Student" type="submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};