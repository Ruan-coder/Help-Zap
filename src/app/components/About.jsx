export default function About() {
    return (
        <section id="OQueEOHelp-Zap" className="min-h-screen p-8 bg-zinc-100">
            <h1 className="font-bold text-4xl md:text-5xl text-center mb-10">O que é o Help-Zap?</h1>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0">
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="phone">
                        <div className="notch"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="font-bold text-3xl md:text-5xl mb-5">
                        Atendimento Público
                    </h2>
                    <p className="mb-6 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic fugiat numquam et sit commodi
                        vitae impedit perferendis nam, mollitia nihil reprehenderit minima, nisi officiis rem molestiae
                        dignissimos amet minus?
                    </p>
                    <ul className="list-disc list-inside mb-6">
                        <li className="mb-2">Teste 1</li>
                        <li className="mb-2">Teste 2</li>
                        <li className="mb-2">Teste 3</li>
                    </ul>
                    <p className="text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic fugiat numquam et sit commodi
                        vitae impedit perferendis nam, mollitia nihil reprehenderit minima, nisi officiis rem molestiae
                        dignissimos amet minus?
                    </p>
                </div>
            </div>
        </section>
    );
}
