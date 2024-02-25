import Image from "next/image";
import React from "react";

export const Footer = () => {
    return (
        <footer className="p-4 bg-slate-900 sm:p-6 dark:bg-gray-800 shadow-sm">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image src="/logo/Logo-RelaxAds-md.png" width={100} height={100} alt="" className="pr-2 flex justify-center items-center " />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white"> Recursos </h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Nós Siga</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="#" className="hover:underline">Relax Ads</a>. Todos os Direitos Reservados.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}