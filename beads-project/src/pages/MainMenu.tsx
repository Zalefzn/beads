'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import './mainMenu.scss';
import { useGlobalContext } from '@/api/Context/auth';
import { useEffect } from 'react';



const MainDash = () => {
     const router = useRouter();
     const {userId, setUserId, data, setData} = useGlobalContext();


     useEffect(()=> {
          setUserId('2');
          setData([
               {firstName: 'Rizal'},
               {firstName: 'Fauzan'},
               {firstName: 'Bisma'},

          ]);
     })

     return(
          <main className="main-dashboard" id="MainMenu">
               <h1>Dashboard Page</h1>
               <h2> Server user : {userId}</h2>
               {data.map((e, i) => 
               <p key={i}>
                    {e.firstName}
               </p>)}
          </main>
     );
}

export default MainDash;