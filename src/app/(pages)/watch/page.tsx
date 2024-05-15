import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import WatchIcons from "@/app/(mainsite)/components/watchpage/WatchIcons/WatchIcons"

import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Watch | Supernatural Church | Faith produces the Supernatural",
	  description: "Supernatural Church | Faith produces the Supernatural"
}

export default function WatchPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Watch" />
			<WatchIcons />
	 	 </>
	 )
}