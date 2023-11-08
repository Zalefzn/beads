import './navbar.scss';
import  listData  from '../../elemnts/Data';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar(){
     return (
        <header className="header-list">
          <nav className="nav-list">
               <Image src="/logo.png" alt="" width={130} height={80} className="img-logo"/>
               <ul className="ul-list">
                    {listData.map((list) => (
                         <Fragment key={list.id}>
                              <li className="list list-item">{list.name}</li>
                         </Fragment>
                    ))}
               </ul>
               <button className="btn" name="button" type="button">Sign up</button>
          </nav>
        </header>
     )
}