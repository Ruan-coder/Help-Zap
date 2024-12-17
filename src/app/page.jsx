'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function HelpZap() {
  // const router = useRouter();
  // const [loading, setLoading] = useState(true); 

  // useEffect(() => {
  //   const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
  //   // Verifica o token
  //   if (!token) {
  //     router.push('/');
  //   } else {
  //     setLoading(false);
  //   }
  // }, [router]);

  // if (loading) {
  //   return null; 
  // }

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Footer />
    </>
  );
}
