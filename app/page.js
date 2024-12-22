import Header from "@/components/Header";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

import Button from "@/components/Button";
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead
} from "@/components/ui/table";

import Stu1 from "@/public/stu1.png";
import Stu2 from "@/public/stu2.png";

export default function Home() {
  return (
    <div className="flex flex-col md:mr-3 md:ml-5 w-full">
      <Header />
      <div className="flex flex-col bg-white mt-3 md:rounded-xl min-h-screen">
        <div className="flex justify-between md:items-center mt-5 mx-1 md:mx-4 font-sans font-bold text-sm text-[#3F526E]">
          <div className="flex flex-col md:flex-row gap-3">
            <Select>
              <SelectTrigger className="bg-gray-100 rounded-lg w-[148px] h-[38px] py-2 px-4">
                <SelectValue placeholder="AY 2024-25"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-25">AY 2024-25</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-gray-100 rounded-lg w-[117px] h-[38px] py-2 px-4">
                <SelectValue placeholder="CBSE 9"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CBSE 9">CBSE 9</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button />
        </div>
        <div className="mx-4 mt-10 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Student Name</TableHead>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Cohort</TableHead>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Courses</TableHead>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Date Joined</TableHead>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Last login</TableHead>
                <TableHead className="text-black font-sans font-bold text-xs whitespace-nowrap">Status</TableHead>
              </TableRow> 
            </TableHeader>
            <TableBody className="text-black font-sans font-medium text-xs h-20 whitespace-nowrap">
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>AY 2024-25</TableCell>
                <TableCell>
                <div className="flex flex-col md:flex-row gap-1">
                    <div className="flex md:bg-[#F6F8FA] rounded-lg py-0.5 pl-1 pr-3 gap-1 items-center">
                      <Image 
                          src={Stu1}
                          alt="student1" 
                          width={300} 
                          height={300}
                          className="rounded-sm w-4 h-4 md:w-5 md:h-5"
                       />
                      <p>CBSE 9 Science</p>
                    </div>
                    <div className="flex md:bg-[#F6F8FA] rounded-lg py-0.5 pl-1 pr-3 gap-1 items-center">
                    <Image 
                          src={Stu2} 
                          alt="student2"
                          width={300} 
                          height={300}
                          className="rounded-sm w-4 h-4 md:w-5 md:h-5"
                       />
                      <p>CBSE 9 Math</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>17. Nov. 2024</TableCell>
                <TableCell>17. Nov. 2024 4:16 PM</TableCell>
                <TableCell>
                  <div className="bg-[#4AEA40] rounded-full w-4 h-4 ml-2"></div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>AY 2024-25</TableCell>
                <TableCell>
                  <div className="flex flex-col md:flex-row gap-1">
                    <div className="flex md:bg-[#F6F8FA] rounded-lg py-0.5 pl-1 pr-3 gap-1 items-center">
                      <Image 
                          src={Stu1} 
                          alt="student1" 
                          width={300} 
                          height={300}
                          className="rounded-sm w-4 h-4 md:w-5 md:h-5"
                       />
                      <p>CBSE 9 Science</p>
                    </div>
                    <div className="flex md:bg-[#F6F8FA] rounded-lg py-0.5 pl-1 pr-3 gap-1 items-center">
                    <Image 
                          src={Stu2} 
                          alt="student2" 
                          width={300} 
                          height={300}
                          className="rounded-sm  w-4 h-4 md:w-5 md:h-5"
                       />
                      <p>CBSE 9 Math</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>17. Nov. 2024</TableCell>
                <TableCell>17. Nov. 2024 4:16 PM</TableCell>
                <TableCell>
                  <div className="bg-[#EA4E40] rounded-full w-4 h-4 ml-2"></div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> 
        </div>
      </div>
    </div>
  );
}