import React from 'react'
import Image from 'next/image'
import D3 from '../public/D3.jpg'

function Navbar () {
    return (
        <div>

            <header className="text-gray-600 body-font  static flex">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">TPKLL SERVICES</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Custom website</a>
                        <a className="mr-5 hover:text-gray-900">Cloud Computing</a>
                        <a className="mr-5 hover:text-gray-900">Blogs</a>
                        <a className="mr-5 hover:text-gray-900">About us</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>



                <div className=" relative container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className=" z-100 justify-center container flex-center">
                        <h1 className="  title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your powerhouse for digital marketing solutions

                        </h1>
                        <p className="mb-8 leading-relaxed">Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel..</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button>

                        </div>
                    </div>
                    <div className="absolute inset-0 container object-fill ">
                        <Image alt="hero" src={D3} />
                    </div>
                </div>



            </header>
        </div>
    )
}

export default Navbar