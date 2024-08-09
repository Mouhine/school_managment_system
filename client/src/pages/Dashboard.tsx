import { Example } from "@/components/charts/Example";
import { Example2 } from "@/components/charts/Example2";
import Stats from "@/components/stats/stats";
import { TeacherTable } from "@/components/tables/TeachersTabel";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Stats />
      <TeacherTable />
      <Example />
      <Example2 />
    </div>
  );
};

export default Dashboard;
