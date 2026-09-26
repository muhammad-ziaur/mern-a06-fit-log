import LibraryTitle from "@/components/homepage/LibraryTitle";
import Exercises from "../components/homepage/exercises/Exercises";
import { Suspense } from "react";
import LibraryLoading from "@/components/homepage/exercises/loading";
import Banner from "@/components/homepage/banner/Banner";

export default function Home() {
  return (
    <div className="bg-global-background ">
      <main className="container mx-auto ">
        <Banner />
        <LibraryTitle></LibraryTitle>
        <Suspense fallback={<LibraryLoading />}>
          <Exercises></Exercises>
        </Suspense>
      </main>
    </div>
  );
}
