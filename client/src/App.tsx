import { useState } from "react";
import "./App.css";
import LeftNavBar from "./components/navbar";
import HeadNav from "./components/headnav/HeadNav";
import Stats from "./components/stats/stats";
import { TeacherTable } from "./components/tables/TeachersTabel";
import { Example } from "./components/charts/Example";
import { Example2 } from "./components/charts/Example2";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex  ">
      <LeftNavBar />
      <section className="flex-1">
        <HeadNav />
        <Outlet />
      </section>
    </main>
  );
}

export default App;
