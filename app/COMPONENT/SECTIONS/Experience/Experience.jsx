import Link from "next/link";
import Outro from "../OUTRO/Outro";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/app/experience";

export default function Experience() {
  return (
    <div className="h-full pt-[10%] pb-4 w-full snap-align-start-10  bg-slate-200">
      <div className="h-full px-5 pr-10 flex flex-col justify-between ">
        {EXPERIENCE.map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: "0 0 10px 1px #c2c2c2" }}
            className="w-full  rounded-md mt-2"
          >
            <div className="flex space-x-2">
              <div className="w-[70%]">
                <div className="text-sm space-y-2 font-itim px-4 py-3 leading-5 ">
                  <div className="text-[1rem] flex gap-x-2">
                    <p>{item.company}</p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className=" text-[1rem] text-blue-500"
                    >
                      {item.title}
                    </Link>
                  </div>
                  <p>
                   {item.description}
                  </p>
                  <h2 className="text-[0.75rem]">{item.duration}</h2>
                </div>
              </div>
              <div className="w-[30%]"></div>
            </div>
          </div>
        ))}
        {/* outro */}
        <motion.div
          whileInView={{ visibility: "visible" }}
          initial={{ visibility: "hidden" }}
          className=" font-itim text-[0.9rem]  mt-1"
        >
          <Outro
            text={
              "Thank's for reaching the bottom of this page. If you like what you see, let's connect and build something together."
            }
          />
          <p className="text-sm">
            Alternatively, here&apos;s a fancy sheet of paper.
            <Link
              className="text-blue-600 text-[1.1rem] ml-2 underline"
              href={"/resume.pdf"}
              target="_blank"
            >
              Resume
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
