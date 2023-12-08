'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import './mainMenu.scss';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';



const MainDash = () => {
     const router = useRouter();

     const handleSignout = () => {
          router.push('/Login');
     }
     
     return(
          <>   
               <Head>
                    <title>Dashboard Page</title>
                    <link rel="icon" type="image/png" href="/logo.png"></link>
                    <meta charSet="UTF-8"></meta>
                    <meta name="description" content="Beads Me" />
                    <meta name="keywords" content="Beads Product" />
                    <meta name="author" content="Beads Me" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
               </Head>
               <header className="header-dashboard">
                    <nav className="nav-dashboard">
                         <li className="signout"><button type="submit" onClick={handleSignout}>Sign out</button></li>
                    </nav>
               </header>
               <main className="main-dashboard" id="MainMenu">
               
               </main>
          </>
     );
}

export default MainDash;