import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import GetInTouch from "@/app/(mainsite)/components/homepage/GetInTouch/GetInTouch"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page | Supernatural Church | Faith produces the Supernatural",
    description: "Supernatural Church | Faith produces the Supernatural"
}

export default function AboutPage(){
    return(
        <>
            <PageTitle pageTitle="About" />
            <AboutUs />
            <GetInTouch />
        </>
    )
}