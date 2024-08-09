import Classes from "@/pages/Classes";
import Dashboard from "@/pages/Dashboard";
import Emails from "@/pages/Emails";
import Events from "@/pages/Events";
import Payments from "@/pages/Payments";
import Pressence from "@/pages/Pressence";
import Students from "@/pages/Students";
import Teachers from "@/pages/Teachers";

export const children = [
  {
    path: "/Dashboard",
    Component: Dashboard,
  },
  {
    path: "/Pressence",
    Component: Pressence,
  },
  {
    path: "/Events",
    Component: Events,
  },
  {
    path: "/Teachers",
    Component: Teachers,
  },
  {
    path: "/Students",
    Component: Students,
  },
  {
    path: "/Classes",
    Component: Classes,
  },
  {
    path: "/Payments",
    Component: Payments,
  },
  {
    path: "/User",
    Component: Dashboard,
  },
  {
    path: "/Emails",
    Component: Emails,
  },
];
