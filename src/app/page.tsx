'use client';

import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('@/components/Chat'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg py-6">
        <h1 className="text-3xl font-bold text-center text-white tracking-wide font-mplus">
          適当に相槌チャット
        </h1>
      </header>
      <main className="flex-1 p-4 flex items-center justify-center">
        <Chat />
      </main>
    </div>
  );
}
