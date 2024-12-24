import "./globals.css";
import ReduxProvider from "./reduxProvider"
import Sidebar from "../components/SideBar";
import Logo from '../public/logo.png';

export const metadata = {
  title: "Student Management",
  description: "A comprehensive platform to efficiently manage student data, including cohorts, courses, and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar Logo={Logo} />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}