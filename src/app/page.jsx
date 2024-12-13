'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function HelpZap() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se o token existe no localStorage ou sessionStorage
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    // Se não houver token, redireciona para a página de login
    if (!token) {
      router.push('/Home'); 
    } 
  }, [router]);


  return (
    <>
      <Nav />
      <Home />
      <About />
      <Footer />
    </>
  );
}
