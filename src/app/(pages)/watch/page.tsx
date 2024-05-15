import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import WatchIcons from "@/app/(mainsite)/components/watchpage/WatchIcons/WatchIcons"

import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Watch",
	  description: "Watch"
}

export default function WatchPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Watch" />
			<WatchIcons />
	 	 </>
	 )
}