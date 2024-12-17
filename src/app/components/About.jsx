export default function About() {
    return (
        <section id="OQueEOHelp-Zap" className="min-h-screen p-8 bg-zinc-100">
            <h1 className="font-bold text-4xl md:text-5xl text-center mb-10">O que é o HelpZap?</h1>
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
                        HelpZap é uma plataforma de comunicação inteligente que conecta cidadãos com prefeituras, 
                        oferecendo soluções inovadoras para melhorar a qualidade de vida urbana.
                        Nossa plataforma utiliza inteligência artificial para fornecer respostas rápidas 
                        e eficazes às necessidades dos cidadãos, facilitando a interação com o governo.
                        HelpZap: Simplificando a vida urbana através da tecnologia.
                    </p>
                    <ul className="list-disc list-inside mb-6">
                        <li className="mb-2 font-bold">Mensagens automáticas</li>
                        <li className="mb-2 font-bold">Whatsapp com inteligência Artificial(AI)</li>
                        <li className="mb-2 font-bold">Personalizado para atender sua necessidades</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
