import Link from "next/link";

const projects = [
  {
    name: "Norvellfootball",
    description:
      "A football betting platform , allow's people to predict the scores with Live Matche's .",
    tech: ["Next js", "Mongo db", "Tailwind", "vercell cron"],
    live: "https://norvell.vercel.app/access/login",
  },
  {
    name: "File Transfer",
    description:
      "File transfer website allow's people to transfer files at very ease and effectivly from their pc to smartphones without cable connectivity.",
    tech: ["Node js", "React js", "Tailwind", "socket io"],
    live: "tester",
  },
];
export default function Projects() {
  return (
    <div className="h-full pt-[10%] w-full snap-align-start-10  bg-slate-200">
      <div className="h-full px-5 pr-10 font-itim  flex flex-col justify-evenly mt-2">
        {projects.map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: "0 0 10px 1px #c2c2c2" }}
            className="w-full  rounded-md "
          >
            <div className="flex space-x-2">
              <div className="w-[70%]">
                <div className="text-sm px-4 py-3 leading-5 ">
                  <div className="flex space-x-2">
                    <h2 className="text-lg">{item.name}</h2>
                    <Link
                      href={item.live}
                      target="_blank"
                      className="text-lg text-blue-500"
                    >
                      (Live)
                    </Link>
                  </div>

                  {item.description}
                </div>
              </div>
              <div className="w-[30%]"></div>
            </div>
            <div className="w-full flex gap-x-2 py-2 px-4">
              {/* tech skill's */}
              {item.tech.map((tech, idx) => (
                <div
                  key={`language-${idx}`}
                  className="px-3 flex justify-center items-center w-fit rounded-md py-0.5 bg-white text-[#484848]"
                >
                  <p className="capitalize text-sm">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
