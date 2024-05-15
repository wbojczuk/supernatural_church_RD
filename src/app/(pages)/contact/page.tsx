import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import FormAndMap from "@/app/(mainsite)/components/contactpage/FormAndMap/FormAndMap"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Page | Supernatural Church | Faith produces the Supernatural",
    description: "Supernatural Church | Faith produces the Supernatural"
}

export default function ContactPage(){
    return(
        <>
            <PageTitle pageTitle="Contact" />
            <div style={{position: "relative"}}>
                <ContactInfo />
                <FormAndMap />
                <img src='/img/contact.webp' alt='Image of ' className='bg-img' />
                <div className='shader'></div>
            </div>
        </>
    )
}