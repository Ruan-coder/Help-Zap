'use client';

import Login from "./Login";

export default function Home() {
    return (
        <section className="relative w-full md:h-screen flex flex-col md:flex-row items-center overflow-hidden bg-zinc-900">
            <div className="absolute inset-0 w-full h-full overflow-hidden md:block hidden">
                <div className="overlay"></div>
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/bg home.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="z-40 w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between px-5 md:px-16 mt-10 md:mt-0">
                <div className="grid grid-cols-1 gap-5 text-white">
                    <h1 className="text-4xl md:text-5xl md:mt-0 mt-20">
                        HelpZap
                    </h1>
                    <div>
                        <p >
                            A cidade fala, a prefeitura resolve! Nosso objetivo é facilitar a comunicação entre a população e os órgãos públicos
                        </p>
                        <div className="mt-5 md:text-start text-center">
                            <a href="">
                                <button className="button">
                                    Demonstração
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="my-10 md:my-0">
                    <Login />
                </div>
            </div>
        </section>
    )
}
