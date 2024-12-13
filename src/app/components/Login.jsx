'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ email: username, password }),
            });

            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }

            const data = await response.json();
            const token = data.token;

            if (keepLoggedIn) {
                localStorage.setItem('token', token);
            } else {
                sessionStorage.setItem('token', token);
            }

            setMessageType('success');
            setMessage('Login bem-sucedido!');
        } catch (error) {
            setMessageType('error');
            setMessage(error.message || 'Erro ao realizar login');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-5">
            <form onSubmit={handleLogin} className="glass px-6 py-8 flex flex-col items-center w-full max-w-md">
                <Image src={'/help-zap.png'} width={80} height={80} alt="logo help-zap" className="mb-6" />
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user" className="text-white">Usuário</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            name="user"
                            id="user-input"
                            placeholder="Digite seu email"
                            className="w-full h-12 bg-transparent border rounded-md px-3 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-white">Senha</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password-input"
                            placeholder="Digite sua senha"
                            className="w-full h-12 bg-transparent border rounded-md px-3 text-white" />
                        <div className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                onChange={(e) => setKeepLoggedIn(e.target.checked)} />
                            <span className="text-white ml-2">Manter logado</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                        <Link href="/EsqueceuSenha" className="text-white font-extralight text-sm underline">
                            Esqueceu sua senha?
                        </Link>
                        <button className="button w-full md:w-32">Login</button>
                    </div>
                </div>
                {message && (
                    <div
                        className={`mt-5 p-3 w-full text-center rounded-md ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}
                    >
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}
