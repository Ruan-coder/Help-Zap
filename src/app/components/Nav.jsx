import Image from "next/image"

export default function Nav() {
    return (
        <nav id="home" className="md:grid md:grid-cols-2 md:justify-between justify-center py-5 absolute w-full px-16 z-50">
            <a href="" className="flex justify-center md:justify-start">
                <img
                    src="/images/sublogo-help-zap.png"
                    alt="HelpZap Logo"
                    width={60}
                    height={100}
                />
            </a>
            <div className="md:flex items-center hidden justify-end overflow-hidden">
                <ul className="flex flex-row gap-8 text-md text-center">
                    <li>
                        <a href="#home" className="text-zinc-50 hover:text-yellow-400 text-shadow">Home</a>
                    </li>
                    <li>
                        <a href="#OQueEOHelp-Zap" className="text-zinc-50 hover:text-yellow-400 text-shadow">O que é o Help'Zap</a>
                    </li>
                    <li>
                        <a href="#footer" className="text-zinc-50 hover:text-yellow-400 text-shadow">Contato</a>
                    </li>
                </ul>
            </div>


        </nav>

    )
}