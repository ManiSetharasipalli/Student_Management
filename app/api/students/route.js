import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// API for fetching all students' data
export async function GET() {
  try {
    const students = await prisma.Students.findMany(); // Fetch all student records from the database
    return NextResponse.json({ success: true, data: students });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch students." },
      { status: 500 }
    );
  }
}

// API for creating a new student record
export async function POST(req) {
  try {
    const student = await req.json(); // Parse the incoming request body

    // Convert the courses string into an array of trimmed course names
    const coursesArray = student.courses.split(",").map((course) => course.trim());

    const updatedDate = new Date(student.dateJoined);
    updatedDate.setDate(updatedDate.getDate() + 1); // Handle timezone adjustment

    const newStudent = await prisma.Students.create({
      data: {
        student_name: student.name,
        cohort: student.cohort,
        courses: coursesArray,
        date_joined: updatedDate,
        last_login: student.lastLogin,
        status: student.status,
      },
    });

    return NextResponse.json({ success: true, data: newStudent }); // Return created student data
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create student." },
      { status: 500 }
    );
  }
}
