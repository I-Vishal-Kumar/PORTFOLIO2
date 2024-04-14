"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function About() {
  const [skills, updateSkills] = useState([
    {
      language: "java script",
      image: "/skillIcons/java_script.png",
    },
    {
      language: "node js",
      image: "/skillIcons/node_js.png",
    },
    {
      language: "mongo db",
      image: "/skillIcons/mongo_db.png",
    },
    {
      language: "next js",
      image: "/skillIcons/next_js.png",
    },
    {
      language: "react",
      image: "/skillIcons/react_js.png",
    },
    {
      language: "tailwind",
      image: "/skillIcons/tailwind.png",
    },
    {
      language: "git",
      image: "/skillIcons/git.svg",
    },
    {
      language: "github",
      image: "/skillIcons/github.svg",
    },
    {
      language: "rest api",
      image: "/skillIcons/api.png",
    },
  ]);

  let [isDragging, updateDragging] = useState(false);
  const [hoveredSkill, setHovered] = useState(-1);
  let currentDragging = useRef(null);
  let itemDragging = useRef(null);

  function dragStart(e, draggingItem) {
    setHovered(-1);
    currentDragging.current = draggingItem;
    itemDragging.current = e.target;
    itemDragging.current.addEventListener("dragend", dragEnd);
    updateDragging(true);
  }
  function dragEnd(e) {
    updateDragging(false);
    e.target.removeEventListener("dragend", dragEnd);
    currentDragging.current = null;
    itemDragging.current = null;
  }

  function dragEnter(e, dragOverItem) {
    if (itemDragging.current !== e.target) {
      // here we have to update the list according to the items dragged over;

      let newList = JSON.parse(JSON.stringify(skills));

      newList.splice(
        dragOverItem.item_idx,
        0,
        newList.splice(currentDragging.current.item_idx, 1)[0]
      );
      currentDragging.current = dragOverItem;
      updateSkills(newList);
    }
  }
  return (
    <div className="h-full pt-[10%]  snap-align-start-10  px-10 overflow-x-hidden  w-[100%] ">
      <div className="py-2 h-[80%] flex justify-center flex-col space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="size-14 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-xl font-itim">Developer.</h1>
          </div>
        </div>
        <div className="space-y-3 text-sm ">
          <p className="font-itim text-gray-700 text-wrap leading-5 pr-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur
            corrupti maiores, aliquam consequuntur vero culpa quam eaque
          </p>
          <p className="font-itim text-gray-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* skills */}
        <div className="flex w-[70vw] pt-5 gap-x-2 gap-y-1 justify-starts flex-wrap ">
          {skills.map((skill, i) => (
            <div
              key={i}
              draggable
              onDragEnter={(e) => {
                isDragging ? dragEnter(e, { group_idx: 0, item_idx: i }) : null;
              }}
              onDragStart={(e) => dragStart(e, { group_idx: 0, item_idx: i })}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              className="rounded-full cursor-grab flex justify-center items-center size-8 relative bg-gray-100"
            >
              <Image
                height={20}
                alt={skill.language}
                width={20}
                src={skill.image}
              />
              {i === hoveredSkill && (
                <motion.div
                  initial={{ y: 5, opacity: 0.2 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute  min-w-[200%] h-full top-full -left-[50%] text-sm text-[#111] font-itim text-center"
                >
                  <div className="flex justify-center">
                    <FaArrowUp />
                  </div>
                  <p className="capitalize text-nowrap ">{skill.language}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
