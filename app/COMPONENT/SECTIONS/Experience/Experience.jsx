export default function Experience() {
  return (
    <div className="h-full pt-[10%] w-full snap-align-start-10  bg-slate-200">
      <div className="h-full px-5 pr-10 flex flex-col justify-evenly ">
        {[1, 2, 3].map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: "0 0 10px 1px #c2c2c2" }}
            className="w-full  rounded-md mt-2"
          >
            <div className="flex space-x-2">
              <div className="w-[70%]">
                <p className="text-sm px-4 py-3 leading-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus necessitatibus molestiae dolore magnam accusamus dolor
                  consequuntur eaque maiores repellat velit!
                </p>
              </div>
              <div className="w-[30%]"></div>
            </div>
            <div className="w-full flex gap-x-2 py-2 px-4">
              {/* tech skill's */}
              <div className="px-3 flex justify-center items-center w-fit rounded-md py-0.5 bg-white text-[#484848]">
                <p className="capitalize text-sm">node js</p>
              </div>
              <div className="px-3 flex justify-center items-center w-fit rounded-md py-0.5 bg-white text-[#484848]">
                <p className="capitalize text-sm">javascript</p>
              </div>
              <div className="px-3 flex justify-center items-center w-fit rounded-md py-0.5 bg-white text-[#484848]">
                <p className="capitalize text-sm">react js</p>
              </div>
              <div className="px-3 flex justify-center items-center w-fit rounded-md py-0.5 bg-white text-[#484848]">
                <p className="capitalize text-sm">next js</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
