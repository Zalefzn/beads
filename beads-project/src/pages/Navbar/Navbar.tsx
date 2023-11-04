import './navbar.scss';
import  listData  from '../../elemnts/Data';
import { Fragment } from 'react';
import Image from 'next/image';


export default function Navbar(){
     return (
        <header className="header-list">
          <nav className="nav-list">
               <ul className="ul-list">
                    <Image src="/logo.png" alt="" width={80} height={80} className="img-logo"/>
                    {listData.map((list) => (
                         <Fragment key={list.id}>
                              <li className="list list-item">{list.name}</li>
                         </Fragment>
                    ))}
               
               </ul>
          </nav>
        </header>
     )
}