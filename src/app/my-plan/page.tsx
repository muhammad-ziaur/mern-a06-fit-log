import Metrics from "@/components/myplanpage/Metrics";
import MyPlanTitle from "@/components/myplanpage/MyPlanTitle";
import SelectedExercises from "@/components/myplanpage/selectedexercises/SelectedExercises";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="bg-global-background">
      <main className="container mx-auto">
        <MyPlanTitle />
        <Metrics />
        <SelectedExercises />
      </main>
    </div>
  );
};

export default MyPlanPage;
