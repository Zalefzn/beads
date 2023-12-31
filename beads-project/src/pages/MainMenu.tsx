'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import './mainMenu.scss';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';
import HeaderDash from './Dashboard/Header';
import SideBar from './Dashboard/SideBar';
import Content from './Dashboard/Content';


const MainDash = () => { 
     const [currentPage, setCurrentPage] = useState<string>('product');

     const handleItemClick = (page: string) => {
          setCurrentPage(page);
     };

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
               <HeaderDash />
               <SideBar onItemClick={handleItemClick} />
               <Content page={currentPage} />
          </>
     );
}

export default MainDash;