import Metrics from "@/components/myplanpage/Metrics";
import MyPlanTitle from "@/components/myplanpage/MyPlanTitle";
import SelectedExercises from "@/components/myplanpage/selectedexercises/SelectedExercises";
import ToggleAndSort from "@/components/myplanpage/toggleandsort/ToggleAndSort";
import SortProvider from "@/context/SortContext";
import React from "react";

const MyPlanPage = () => {
  return (
    <div className="bg-global-background">
      <main className="container mx-auto">
        <MyPlanTitle />
        <Metrics />
        <SortProvider>
          <ToggleAndSort />
          <SelectedExercises />
        </SortProvider>
      </main>
    </div>
  );
};

export default MyPlanPage;
