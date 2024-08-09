import { MdSpaceDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoBookSharp } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";

export const navElements = [
  {
    title: "Dashboared",
    icon: MdSpaceDashboard,
    url: "/Dashboard",
  },
  {
    title: "Pressence",
    icon: SlCalender,
    url: "/Pressence",
  },
  {
    title: "Email Box",
    icon: IoBookSharp,
    url: "/emails",
  },
  {
    title: "Events",
    icon: MdEventNote,
    url: "/Events",
  },
  {
    title: "Payment",
    icon: MdOutlinePayment,
    url: "/Payments",
  },
  {
    title: "Classes",
    icon: SiGoogleclassroom,
    url: "/classes",
  },
  {
    title: "Students",
    icon: PiStudentBold,
    url: "Students",
  },
  {
    title: "Teachers",
    icon: GiTeacher,
    url: "Teachers",
  },
];
