'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 " id='footer'>
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
                
                <div className="mb-6 md:mb-0 md:w-1/3">
                    <Image src={"/help-zap.png"} width={100} height={100} alt='logo help-zap' className='mb-5'></Image>
                    <p className="text-sm text-gray-400">
                        A cidade fala, a prefeitura resolve! Nosso objetivo é facilitar a comunicação entre a população e os órgãos públicos.
                    </p>
                </div>

                <div className="mb-6 md:mb-0 md:w-1/3 flex flex-col md:flex-row md:justify-around gap-6">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Navegação</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="#home">Início</a></li>
                            <li><a href="#OQueEOHelp-Zap">Sobre</a></li>
                            <li><a href="">Whatsapp</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">Contato</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>Email: suporte@helpzap.com</li>
                            <li>Telefone: (xx) xxxx-xxxx</li>
                            <li>Endereço: Rua Exemplo, 123, Medina-MG</li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/3 flex flex-col items-center ">
                    <h3 className="text-lg font-medium mb-2">Siga-nos</h3>
                    <div className="flex space-x-4">
                        <span>
                            <a target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <i className="fab fa-facebook"></i> YouTube
                            </a>
                        </span>
                        <span >
                            <a target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Help-Zap. Todos os direitos reservados.
            </div>
        </footer>
    );
}
