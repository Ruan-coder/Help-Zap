'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayoutClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (!token) {
      router.push('/'); 
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return null;
  }
}