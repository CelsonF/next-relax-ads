import { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="w-full relative h-100 ">
        <div className="absolute flex flex-col w-full justify-center items-center md:items-center p-4 mt-1  h-full">
          <h1 className="mb-4 w-full text-2xl md:text-center text-white text-center font-normal leading-none tracking-tight dark:text-white md:text-2xl xl:text-4xl"> Your Bussines </h1>
          <p className="text-4xl text-white font-semibold"> Digital Marketing Agency</p>
          <p className="text-2xl text-white font-extralight mt-4"> Discover Serenity in Every Click: Welcome to RelaxAds – Where Tranquility Meets Innovation</p>
        </div>
        <Image src="/bg-01.png" alt="" sizes="100vw" width={500} height={600} style={{
          width: '100%',
          height: '80vh',
          objectFit: 'cover'
        }}  ></Image>
      </section>
      
      <section className="w-full flex justify-center absolute">
        <div className="flex w-full mx-4 md:w-10/12  bg-white/80 backdrop-blur supports-backdrop-blur:bg-white/95 -mt-20 rounded-md z-30 ">
          <form action="" className="grid md:grid-cols-4 gap-4 w-full  p-4 md:py-12 md:px-6 z-50">
            <input type="text" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2" placeholder="Full Name" />
            <input type="email" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2"  placeholder="Email Address"/>
            <input type="tel" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2"  placeholder="Phone Number"/>
            <input className="px-6 py-3 w-full  cursor-pointer text-lg rounded-lg font-light text-blue-50  tracking-wide  bg-gradient-to-b from-blue-600 to-blue-800" type="button" value="Get Started"/>
          </form>
        </div>
      </section>

      <section className="w-full flex  bg-gradient-to-b from-blue-600 to-blue-800 h-64">

      </section>
    </>
  )
}
