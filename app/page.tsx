"use client";
import Navbar from "@/components/Navbar";
import PriceChart from "@/pages/Charts";
import Swap from "@/pages/Swap";
import Image from "next/image";
import { useState } from "react";
import bg from "../assests/BG.png";

export default function Home() {
  const [page, setPage] = useState("Chart");
  return (
    <main className="bg-black h-screen">
      <Image alt="" src={bg} className="absolute left-[250px] top-[-150px]" />
      <div className="z-10 relative">
        <Navbar page={page} setPage={setPage} />
        {page == "Chart" ? <PriceChart /> : <Swap />}
      </div>
    </main>
  );
}
