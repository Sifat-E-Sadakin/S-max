"use client";
import Image from "next/image";
import Banner from "./components/block/Banner";
import Timer from "./components/block/Timer";
import Idea from "./components/block/Idea";

export default function Home() {
  return (
    <main>
      <Banner />
      <Timer />
      {/* <Idea /> */}
    </main>
  );
}
