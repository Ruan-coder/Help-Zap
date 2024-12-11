


export default function About() {
    return (
        <section className="h-screen p-16 bg-zinc-100">
            <h1 className="font-bold text-5xl text-center mb-10">O que é o Help-Zap?</h1>
            <div className="flex flex-row justify-between items-center">
                <div className="flex items-center justify-center w-1/2">
                    <div class="phone">
                        <div class="notch"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-1/2">
                    <h2 className="font-bold text-5xl">
                        Atendimento Público
                    </h2>
                    <p className="my-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic fugiat numquam et sit commodi
                        vitae impedit perferendis nam, mollitia nihil reprehenderit minima, nisi officiis rem molestiae
                        dignissimos amet minus?
                    </p>
                    <ul>
                        <li className="list-disc list-inside mb-5">
                            Teste
                        </li>
                        <li className="list-disc list-inside mb-5">
                            Teste
                        </li>
                        <li className="list-disc list-inside mb-5">
                            Teste
                        </li>
                    </ul>
                    <p className="my-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic fugiat numquam et sit commodi
                        vitae impedit perferendis nam, mollitia nihil reprehenderit minima, nisi officiis rem molestiae
                        dignissimos amet minus?
                    </p>
                </div>
            </div>
        </section>
    )
}