import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mplus = M_PLUS_Rounded_1c({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "適当に相槌チャット",
  description: "チャットで適当に相槌を打ってくれるアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} ${mplus.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
