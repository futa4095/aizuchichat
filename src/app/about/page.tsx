import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">適当に相槌チャットについて</h2>
          
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">このアプリについて</h3>
            <p className="text-gray-600 leading-relaxed">
              「適当に相槌チャット」は、ユーザーの入力に対して適当な相槌を返すシンプルなチャットアプリです。
              気軽な会話や息抜きに使える、肩の力を抜いたコミュニケーションツールとして開発されました。
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">主な機能</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>ユーザーの入力に対する自然な相槌</li>
              <li>シンプルで使いやすいインターフェース</li>
              <li>レスポンシブデザインによるマルチデバイス対応</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">使い方</h3>
            <p className="text-gray-600 leading-relaxed">
              メインページのチャットボックスに、あなたの話したいことを入力してください。
              相槌さんがあなたの話に耳を傾け、適当ながらも温かみのある返事をします。
              気軽な会話のパートナーとして、日々の出来事や考えを共有してみましょう。
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">技術スタック</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>フロントエンド: Next.js, React, TypeScript</li>
              <li>スタイリング: Tailwind CSS</li>
              <li>デプロイ: Vercel</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
