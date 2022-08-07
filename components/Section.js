import React from 'react'
import Image from 'next/image'
import D3 from '../public/D3.jpg'

function Section () {
    return (
        <section className=" static flex text-gray-600 body-font">
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


        </section>
    )
}

export default Section
