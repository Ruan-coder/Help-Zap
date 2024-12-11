'use client';

import Login from "./Login";

export default function Home() {




    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="overlay"></div>
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/bg home.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="z-40 w-full grid grid-cols-2 items-center justify-between">
                <div className="grid grid-cols-1 gap-5 text-white md:px-16 px-5 mt-10">
                    <h1 className="md:text-5xl text-4xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </h1>
                    <div >
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius? Odit, maxime adipisci dolores, ut ea accusantium aliquid fugiat perferendis praesentium, voluptas id aliquam qui dolore! Facere voluptatem a culpa.
                        </p>

                        <div className="mt-5">
                            <a href="">
                                <button className="button">
                                    Demonstração
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Login />
            </div>
        </section>
    )
} 