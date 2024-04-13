import { Page2 } from "@/app/COMPONENT/SMALLSCREEN/Home.jsx";

import { Page1 } from "@/app/COMPONENT/HOME/Home.jsx";

export default function Home() {
  return (
    <>
      <div className="md:block hidden">
        <Page1 />
      </div>
      <div className="md:hidden block">
        <Page2 />
      </div>
    </>
  );
}
