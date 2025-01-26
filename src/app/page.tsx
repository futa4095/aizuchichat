'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Chat = dynamic(() => import('@/components/Chat'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-4 flex items-center justify-center">
        <Chat />
      </main>
      <Footer />
    </div>
  );
}
