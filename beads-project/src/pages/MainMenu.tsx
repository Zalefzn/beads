'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import './mainMenu.scss';
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