'use client'

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { List, X } from "@phosphor-icons/react"

export const Navbar = () => {
    const [nav,setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "/",
            title: "Home"
        },
        {
            id: 2,
            link: "services",
            title: "Services"
        },
        {
            id: 3,
            link: "ourwork",
            title: "Our Work"
        },
        {
            id: 4,
            link: "company",
            title: "Company"
        },
        {
            id: 5,
            link: "contact",
            title: "Contact"
        },
    ]

    return (
        <div className="flex w-full md:justify-center justify-between p-4 sticky bg-slate-900 shadow-md top-0 z-50">
        <Image src="/logo/Logo-RelaxAds-md.png" width={100} height={100} alt="" className="pr-2  md:hidden justify-center items-center " />
        <ul className="items-center w-10/12 flex-wrap hidden md:flex">
        <li> <Image src="/logo/Logo-RelaxAds-md.png" width={100} height={100} alt="relaxads" className="pr-2 mr-auto " /></li>
            <div className="ml-auto flex">
                {links.map(({ id, link, title }) => (
                    <li key={id} className="capitalize z-30 mx-4">
                        <Link href={link} className="p-2 text-blue-100 font-semibold">{title}</Link>
                    </li>))
                }

            </div>
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer p-2 z-10 text-gray-500 md:hidden flex items-center">
            {nav ? <X color="gray" size={32} /> : <List color="gray" size={32} /> }
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-gray-700">
                {links.map(({ id, link, title }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer z-50 capitalize py-6 text-4xl"
                    >
                        <Link onClick={() => setNav(!nav)} href={link}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
    )
}