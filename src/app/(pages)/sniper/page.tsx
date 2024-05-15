import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import SniperContent from "@/app/(mainsite)/components/sniperpage/SniperContent/SniperContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Sniper",
	  description: "Sniper"
}

export default function SniperPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="SNIPER Ministries" />
			<SniperContent />
	 	 </>
	 )
}