import Link from "next/link";
import Outro from "../OUTRO/Outro";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <div className="h-full pt-[10%] pb-4 w-full snap-align-start-10  bg-slate-200">
      <div className="h-full px-5 pr-10 flex flex-col justify-between ">
        {[1].map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: "0 0 10px 1px #c2c2c2" }}
            className="w-full  rounded-md mt-2"
          >
            <div className="flex space-x-2">
              <div className="w-[70%]">
                <p className="text-sm space-y-2 font-itim px-4 py-3 leading-5 ">
                  <h2 className="text-[1rem]">
                    Veritech (web development internship)
                  </h2>
                  <p>
                    Got an oppurtunity to work with a team of 5 people to build
                    a website for a company called Veritech.
                  </p>
                  <h2 className="text-[0.75rem]">05/01/2023 - 05/02/2023</h2>
                </p>
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
              href={"#"}
            >
              Resume
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
