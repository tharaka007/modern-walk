import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Modern Walk",
  description: "Online clothing shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="text-center py-4 shadow-3xl">
          <Link href="\" className="font-bold text-center text-[58px]">
            Modern Walk
          </Link>
        </header>
        {children}
        <footer className="h-32"></footer>
      </body>
    </html>
  );
}
