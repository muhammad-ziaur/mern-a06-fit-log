import Metrics from "@/components/myplanpage/Metrics";
import MyPlanTitle from "@/components/myplanpage/MyPlanTitle";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="bg-global-background">
      <main className="container mx-auto">
        <MyPlanTitle />
        <Metrics />
      </main>
    </div>
  );
};

export default MyPlanPage;
