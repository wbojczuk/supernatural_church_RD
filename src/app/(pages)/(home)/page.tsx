import Believe from "@/app/(mainsite)/components/homepage/Believe/Believe";
import GetInTouch from "@/app/(mainsite)/components/homepage/GetInTouch/GetInTouch";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Helping from "@/app/(mainsite)/components/homepage/Helping/Helping";
import Pastor from "@/app/(mainsite)/components/homepage/Pastor/Pastor";
import Serve from "@/app/(mainsite)/components/homepage/Serve/Serve";


export default function Home() {
  return (
    <>
      <Header />
      <Helping />
      <Serve />
      <Believe />
      <Pastor />
      <GetInTouch />
    </>
  )
}
