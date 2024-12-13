'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayoutClient() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o token está armazenado
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    // Se não houver token, redireciona para a home
    if (!token) {
      router.push('/Home');
    }
  }, [router]);

  return null;  
}
