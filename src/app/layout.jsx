import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from './components/RootLayoutClient';  

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Help-Zap',
  description: 'A cidade fala, a prefeitura resolve! Facilite a comunicação entre a nextpopulação e os órgãos públicos com o Help-Zap. Relate problemas, acesse informações sobre médicos e plantões nos PSFs e transforme sua cidade com eficiência',
};

export default function RootLayout({ children }) {
  return (
    <>
      <RootLayoutClient />
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
