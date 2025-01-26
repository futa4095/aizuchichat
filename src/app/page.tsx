'use client';

import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('@/components/Chat'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">適当に相槌チャット</h1>
      </header>
      <main className="flex-1 p-4 flex items-center justify-center">
        <Chat />
      </main>
    </div>
  );
}
