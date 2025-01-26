import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-white tracking-wide font-mplus hover:text-blue-100 transition-colors">
            適当に相槌チャット
          </Link>
          <nav>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-100 transition-colors font-medium"
            >
              このアプリについて
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
