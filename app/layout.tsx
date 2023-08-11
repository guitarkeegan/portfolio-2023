import {AiTwotoneHome} from 'react-icons/ai'
import Footer from "@/components/Footer";
import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

const rSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Keegan's Portfolio",
    description: "My developer portfolio",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={rSlab.className}>
                <nav style={{zIndex: 20, position: "relative" }}>
                    <div className="dark:bg-stone-700 bg-rose-100 px-4 py-4">
                        <Link className="text-4xl text-dark-text  hover:opacity-50" href={"/"}>
                            <AiTwotoneHome />
                        </Link>
                    </div>
                </nav>
                {children}
                <Footer />
            </body>
        </html>
    );
}
