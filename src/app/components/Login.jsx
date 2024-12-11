'use client';
import React, { useState } from "react";
import Link from "next/link";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('link api', {
                method: 'POST',
                headers: {
                    'Content-type': 'aplication/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login Falied');
            }


            //Recebendo Token
            const data = await response.json();
            const token = data.token;

            // Armazena o token 
            localStorage.setItem('token', token);


        } catch (error) {
            setError('Erro')
        }
    }

    return (
        <div className="flex flex-row items-center justify-center">
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-5">
                    <div className="w-[25rem] flex flex-row items-center justify-between ">
                        <label htmlFor="user" className="text-white">Usuário</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            name="user"
                            id="user-input"
                            placeholder="digite seu email"
                            className="w-80 h-12 bg-transparent border rounded-md px-3 text-white" />
                    </div>
                    <div >
                        <div className="w-[25rem] flex flex-row items-center justify-between ">
                            <label htmlFor="user" className="text-white">Senha</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password-input"
                                placeholder="digite sua senha"
                                className="w-80 h-12 bg-transparent border rounded-md px-3 text-white" />
                        </div>
                        <p className="mt-5">
                            <input type="checkbox"/><span className="text-white ml-3">Manter logado</span>
                        </p>
                    </div>
                    <div className="text-end">
                        <Link href="/esqueceu-senha" className='text-white font-extralight text-sm underline mr-5'>
                            Esqueceu sua senha?
                        </Link>
                        <button className='button w-24'>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}