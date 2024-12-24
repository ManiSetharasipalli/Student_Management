'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "@/redux/studentsSlice";
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from "@/components/ui/table";
import CourseItem from "./CourseItem";

import Stu1 from "@/public/stu1.png";
import Stu2 from "@/public/stu2.png";

// Date formatting options
const DATE_OPTIONS = {
  day: "2-digit",
  month: "short",
  year: "numeric"
};

const DATE_TIME_OPTIONS = {
  ...DATE_OPTIONS,
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
};

// Table column headers
const TABLE_HEADERS = [
  "Student Name",
  "Cohort",
  "Courses",
  "Date Joined",
  "Last login",
  "Status"
];

const StudentsTable = ({ cohort, course, searchTerm }) => {
  const dispatch = useDispatch();
  const { data: students, status, error } = useSelector((state) => state.students);

  // Fetch students data on component mount if not already loaded
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  // Filter students based on cohort, course, and search criteria
  const getFilteredStudents = () => {
    return students.filter((student) => {
      const cohortMatch = !cohort || student.cohort === cohort;
      const coursesMatch = !course || student.courses.some((studentCourse) =>
        studentCourse.toLowerCase().includes(course.toLowerCase())
      );
      const searchMatch = !searchTerm || student.courses.some((studentCourse) =>
        studentCourse.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return cohortMatch && coursesMatch && searchMatch;
    });
  };

  // Render loading state
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" 
             role="progressbar" 
             aria-label="Loading students data"/>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-gray-600 text-lg font-semibold" role="alert">
          Something went wrong with Supabase. Please refresh the page.
        </p>
      </div>
    );
  }


  // Format date string with specified options
  const formatDate = (dateString, options = DATE_OPTIONS) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString("en-GB", options);
  };

  return (
    <div className="mx-4 mt-10 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {TABLE_HEADERS.map((header) => (
              <TableHead 
                key={header}
                className="text-black font-sans font-bold text-xs whitespace-nowrap"
              >
                {header}
              </TableHead>
            ))}
          </TableRow> 
        </TableHeader>
        <TableBody className="text-black font-sans font-medium text-xs h-20 whitespace-nowrap">
          {getFilteredStudents().map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.student_name}</TableCell>
              <TableCell>{student.cohort}</TableCell>
              <TableCell>
                <div className="flex flex-col md:flex-row gap-1">
                  <CourseItem imageSrc={Stu1} courseText={student.courses[0]} />
                  <CourseItem imageSrc={Stu2} courseText={student.courses[1]} />
                </div>
              </TableCell>
              <TableCell>{formatDate(student.date_joined)}</TableCell>
              <TableCell>{formatDate(student.last_login, DATE_TIME_OPTIONS)}</TableCell>
              <TableCell>
                <div 
                  className={`rounded-full w-4 h-4 ml-2 ${
                    student.status ? 'bg-[#4AEA40]' : 'bg-[#EA4E40]'
                  }`}
                  role="status"
                  aria-label={`Student status: ${student.status ? 'Active' : 'Inactive'}`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </div>
  );
};

export default StudentsTable;