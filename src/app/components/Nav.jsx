import Image from "next/image"

export default function Nav() {
    return (
        <nav className="md:grid md:grid-cols-2 md:justify-between justify-center py-5 absolute w-full px-16">
            <a href="" className="flex justify-center md:justify-start">
                <Image src={'/sublogo help-zap.png'} width={60} height={50} alt="Help-zap logo" />
            </a>
            <div className="md:flex items-center hidden justify-end overflow-hidden">
                <ul className="flex flex-row gap-8 text-md text-center">
                    <li>
                        <a href="" className="hover:text-yellow-200 text-shadow">Home</a>
                    </li>
                    <li>
                        <a href="" className="hover:text-yellow-200 text-shadow">O que é o Help-Zap</a>
                    </li>
                    <li>
                        <a href="" className="hover:text-yellow-200 text-shadow">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}