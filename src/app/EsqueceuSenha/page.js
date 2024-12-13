'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function EsqueceuSenha() {
    const router = useRouter();

    const handleVoltar = () => {
        router.push('/'); // Redireciona para a home
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 relative">
            <div className="glass px-10 py-10 flex flex-col items-center">
                <h1 className="text-2xl text-white mb-5">Redefinição de Senha</h1>
                <p className="text-white text-center mb-10">
                    Insira o e-mail associado à sua conta para redefinir sua senha.
                </p>
                <form className="flex flex-col items-center gap-5">
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        className="w-80 h-12 bg-transparent border rounded-md px-3 text-white"
                    />
                    <button type="submit" className="button w-24">
                        Enviar
                    </button>
                </form>
            </div>
            <button
                onClick={handleVoltar}
                className="text-white text-sm absolute top-10 left-10"
            >
                Voltar para a Home
            </button>
        </div>
    );
}
