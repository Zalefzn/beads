import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Head from 'next/head';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
        <title>Beads Me</title>
        <link rel="icon" type="image/png" href="/logo.png"></link>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Beads Me" />
        <meta name="keywords" content="Beads Product" />
        <meta name="author" content="Beads Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
     
      </head>
      <body className={inter.className}>
       
          {children}
       
      </body>
    </html>
  )
}



