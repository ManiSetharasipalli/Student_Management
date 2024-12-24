// SideBar Students page

'use client'
import { useState } from "react";
import Header from "@/components/Header";
import AddStudentForm from "@/components/StudentForm";
import StudentsTable from "@/components/StudentsTable";
import SelectButton from "@/components/SelectButton";



export default function Students() {
    // State to manage selected cohort, course, and search term
    const [selectedCohort, setSelectedCohort] = useState("");
    const [selectedCourses, setSelectedCourses] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    
    //  filter options

    const cohorts = ["AY 2024-25", "AY 2023-24", "AY 2022-23"];
    const coursesList = ["CBSE 9", "CBSE 8", "CBSE 7"];

    // Handle cohort selection
    const handleCohortChange = (value) => {
      setSelectedCohort(value);
    };

    // Handle courses selection
    const handleCoursesChange = (value) => {
      setSelectedCourses(value);
    };

    // Handle search term change
    const handleSearchChange = (value) => {
      setSearchTerm(value);
    };

  return (
    <div className="flex flex-col md:mr-3 md:ml-5 w-full">
      <Header onSearchChange={handleSearchChange} />
      <div className="flex flex-col bg-white mt-3 md:rounded-xl min-h-screen">
        <div className="flex justify-between md:items-center mt-5 mx-1 md:mx-4 font-sans font-bold text-sm text-[#3F526E]">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Cohort filter dropdown */}
            <SelectButton
              value={selectedCohort}
              onValueChange={handleCohortChange}
              options={cohorts}
              placeholder="Cohort"
            />
            {/* Course filter dropdown */}
            <SelectButton
                value={selectedCourses}
                onValueChange={handleCoursesChange}
                options={coursesList}
                placeholder="Course"
            />
          </div>
          <AddStudentForm />
        </div>
        <StudentsTable 
            cohort={selectedCohort} 
            course={selectedCourses}  
            searchTerm={searchTerm} 
        />
      </div>
    </div>
  );
}