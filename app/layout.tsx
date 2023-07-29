import Link from 'next/link';
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

const rSlab = Roboto_Slab({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Keegan's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rSlab.className}>
        <nav>
          <div className='bg-black px-4 py-4'>
            <Link className='text-lg' href={"/"}>Home</Link>
          </div>
        </nav>
        {children}
        </body>
    </html>
  )
}
