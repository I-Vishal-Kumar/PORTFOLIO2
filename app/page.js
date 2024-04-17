"use client";

import { Page2 } from "@/app/COMPONENT/SMALLSCREEN/Home.jsx";

import { Page1 } from "@/app/COMPONENT/HOME/Home.jsx";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

const seasons = {
  spring: [3, 4, 5], // March, April, May
  summer: [6, 7, 8], // June, July, August
  autumn: [9, 10, 11], // September, October, November
  winter: [12, 1, 2], // December, January, February
};

export default function Home() {
  const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    for (const season in seasons) {
      if (seasons[season].includes(currentMonth)) {
        const htmlElement = document.querySelector("html");
        htmlElement.setAttribute("data-theme", season.toString());
        setSeason(season.toString());
        setLoading(false);
        return;
      }
    }
    setSeason("summer");
    setLoading(false);
  }, []);

  return (
    <>
      <div className="md:block hidden">
        <Page1 season={season} />
      </div>
      <div className="md:hidden block">
        <Page2 season={season} />
      </div>
      {/* {loading && ( */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={!loading && { opacity: 0, display: "hidden" }}
        className="absolute h-screen w-screen pointer-events-none bg-white top-0 left-0 z-[1000]"
      >
        <Loading />
      </motion.div>
      {/* )} */}
    </>
  );
}
