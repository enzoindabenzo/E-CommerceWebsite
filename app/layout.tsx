import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";
import { getServerSession } from "next-auth";
import 'svgmap/dist/svgMap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agro BLM",
  description: "Platformë online për blerjen e produkteve bujqësore",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <SessionProvider session={session}>
          <Header />
          <main className="flex-grow">
            <Providers>
              {children}
            </Providers>
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}