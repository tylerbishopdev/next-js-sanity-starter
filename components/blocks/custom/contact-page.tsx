import React from "react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <section className="pt-12 md:pt-1">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-3 text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg  max-w-6xl w-2/3 mx-auto mb-4">Want to get in touch?</p>
        </div>

        <div className="grid gap-6 mt-8 md:flex flex-row border border-border rounded-xl">
          <div className="border-r max-w-6xl rounded-l-xl mx-auto flex py-4 bg-muted/20 dark:bg-background px-6 align-middle justify-center items-center">
            <div className="w-2/3 px-5 ">
              <h3 className="font-bold text-2xl text-left">Customer Help</h3>
            </div>
            <p className="text-sm  max-w-6xl  mx-auto  text-gray-700 text-left dark:text-gray-300">
              <a href="https://support.ezoic.com" className="text-accent hover:underline ">
                Help Center
              </a>{" "}
              is the only location messages regarding account or support inquiries will recieve a response. Any sent through this form are not reviewed by our account or support team members and will result in a delay in response.
            </p>
          </div>
          <div className="flex md:w-1/3 w-full h-full flex-col justify-between gap-2 rounded-lg  p-4">
            <p className="text-lg font-bold text-center md:text-left ">Looking for Help?</p>
            <div className="flex flex-col">
              <a href="https://docs.ezoic.com" className="text-primary hover:underline text-center md:text-left ">
                Docs
              </a>
              <a href="https://support.ezoic.com" className="text-primary hover:underline text-center md:text-left ">
                Support Center
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-4 md:mt-4 grid max-w-screen-xl gap-2 md:grid-cols-2 mx-auto">
          <div className="h-full rounded-lg overflow-hidden mt-0 mx-auto">
            <Image src="/images/imagecontact.png" alt="Ezoic office" width={600} height={800} className="h-full w-full mx-auto object-cover mt-14 rounded-lg" style={{height: "auto"}} />
          </div>
          <div className="flex h-full w-1/2 mx-auto text-center  flex-col justify-center gap-2 rounded-lg   p-4">
            <div>
              <p className="text-4xl font-bold font-diatype">🏢</p>
            </div>
            <p className="text-2xl pb-10 font-bold font-diatype text-accent">Headquarters</p>
            <div className="mb-10">
              <p className="font-diatype text-secondary border-b">North America </p>
              <p className="text-sm pt-2 font-bold">Carlsbad, CA (USA)</p>
              <p className="text-xs">6023 Innovation Way, Carlsbad, CA 92009</p>
              <p className="text-sm pt-2 font-bold">Edmonton, Alberta (Canada)</p>
              <p className="text-xs">8944 182st </p>
            </div>
            <div>
              <p className="font-diatype text-secondary border-b">Europe (UK)</p>
              <p className="text-sm pt-2 font-bold">London, UK </p>
              <p className="text-xs">88 Kingsway, London WC2B 6AA, United Kingdom</p>
              <p className="text-sm pt-2 font-bold">Newcastle Upon Tyne, UK</p>
              <p className="text-xs">Portland House, New Bridge Street West</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-0 w-full mx-auto px-4  items-center"></div>
        </div>
      </div>
      <div className="text-center pt-20">
        <h1 className="mb-3 text-4xl md:text-5xl font-bold">Business Inquiries</h1>
        <p className="text-lg  max-w-6xl w-2/3 mx-auto mb-4">Submit a message below and members of our relevent team will get in-touch.</p>
      </div>
    </section>
  )
}
