'use client';

import './navbar.scss';
import  listData  from '../../elemnts/Data';
import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import swal from 'sweetalert';

function Navbar(){

     const handleData = () => {
          swal({
               icon: "warning",
               title: "Register First!",
               text: "Please Register First"
          })
     }

     return (
        <header className="header-list">
          <nav className="nav-list">
               <Image src="/logo.png" alt="" width={130} height={80} className="img-logo"/>
               <ul className="ul-list">
                    {listData.map((list) => (
                         <Fragment key={list.id}>
                              <li className="list list-item"><Link href={list.url} scroll={true}>{list.name}</Link></li>
                         </Fragment>
                    ))}
               </ul>
               <Link href="/Login"><button
               className="btn" 
               name="button" 
               type="button"
               onClick={handleData} 
               >Sign up</button></Link>
          </nav>
        </header>
     )
}

export default Navbar;