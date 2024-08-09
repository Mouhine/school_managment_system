import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { children } from "./children";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: children,
  },
]);

export default router;
