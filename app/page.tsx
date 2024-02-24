import { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
  title: "RelaxAds - Digital Marketing Agency",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-relax-ads.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://next-relax-ads.vercel.app/_next/image?url=%2Flogo%2FLogo-RelaxAds-md.png&w=128&q=75",
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
        <div className="flex w-full mx-4 md:w-10/12  bg-white/80 backdrop-blur supports-backdrop-blur:bg-white/95 -mt-36 md:-mt-20 rounded-md z-30 ">
          <form action="" className="grid md:grid-cols-4 gap-4 w-full  p-4 md:py-12 md:px-6 z-50">
            <input type="text" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2" placeholder="Full Name" />
            <input type="email" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2" placeholder="Email Address" />
            <input type="tel" className="w-full rounded-lg bg-transparent text-black border-b-4 placeholder:text-slate-900  border-blue-900 p-2" placeholder="Phone Number" />
            <input className="px-6 py-3 w-full  cursor-pointer text-lg rounded-lg font-light text-blue-50  tracking-wide  bg-gradient-to-b from-blue-600 to-blue-800" type="button" value="Get Started" />
          </form>
        </div>
      </section>

      <section className="w-full px-4 pb-6 items-center flex flex-col bg-gradient-to-b from-blue-600 to-blue-800">
        <div className="flex justify-center w-full pt-40 pb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white"> Result-Driven Marketing </h2>
        </div>
        <div className="space-y-8 lg:grid w-10/12  lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col items-center p-6 mx-auto max-w-lg text-center text-white rounded-lg  xl:p-8 ">
            <Image className="pb-4" src="/Icons/web-icon.png" alt="" sizes="100vw" width={100} height={100} ></Image>
            <h2 className="mb-4 text-3xl font-semibold">Web Design</h2>
            <p className="font-light text-blue-50 sm:text-lg ">Create a brand and communicate your value.</p>
          </div>
          <div className="flex flex-col items-center p-6 mx-auto max-w-lg text-center text-white rounded-lg  xl:p-8 ">
            <Image className="pb-4" src="/Icons/seo-icon.png" alt="" sizes="100vw" width={100} height={100} ></Image>
            <h2 className="mb-4 text-3xl font-semibold">SEO</h2>
            <p className="font-light text-blue-50 sm:text-lg ">Find new clients organically and grow a foundation for tomorrow.</p>
          </div>
          <div className="flex flex-col items-center p-6 mx-auto max-w-lg text-center text-white rounded-lg  xl:p-8 ">
            <Image className="pb-4" src="/Icons/web-icon.png" alt="" sizes="100vw" width={100} height={100} ></Image>
            <h2 className="mb-4 text-3xl font-semibold">Social Media</h2>
            <p className="font-light text-blue-50 sm:text-lg ">Increase awareness by engaging with your audience.</p>
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full py-12">
        <div className="w-10/12 flex flex-col">
          <Image className="w-full md:w-5/12 p-8 rounded-md" src="/bg-01.png" alt="" sizes="100vw" width={500} height={600}></Image>
          <div className=" w-full md:w-7/12 tracking-wide">
            <h1 className="font-bold text-3xl pb-4 tracking-wide">Our Story</h1>
            <p>RelaxAds, founded by brothers John and Mark Smith, emerged from a shared passion for the digital landscape. Through innovation and unwavering dedication, RelaxAds swiftly earned its place as one of America's rapidly growing companies.
            </p>
            <p>
              Their commitment to client satisfaction reflects in over 100 glowing 5-star reviews since their establishment in 2011. When Dun & Bradstreet inquired about service quality satisfaction, RelaxAds scored an outstanding 97%. Their ability to exceed client expectations keeps the RelaxAds family expanding.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
