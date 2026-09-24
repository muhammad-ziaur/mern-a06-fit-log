import LibraryTitle from "@/components/homepage/LibraryTitle";
import Exercises from "../components/homepage/exercises/Exercises";
import { Suspense } from "react";
import LibraryLoading from "@/components/homepage/exercises/loading";

export default function Home() {
  return (
    <div className="bg-global-background ">
      <main className="container mx-auto ">
        <h2 className="text-5xl py-40 my-10 font-bold text-center bg-cyan-600 text-red-600">
          Dummy Banner
        </h2>
        <LibraryTitle></LibraryTitle>
        <Suspense fallback={<LibraryLoading />}>
          <Exercises></Exercises>
        </Suspense>
      </main>
    </div>
  );
}
