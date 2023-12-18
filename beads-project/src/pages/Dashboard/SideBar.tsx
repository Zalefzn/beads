'use client';

import './sidebar.scss';
import {useRouter} from 'next/navigation';

const listItems = [
     {
          route: "Product",
          url: ""
     },
     {
          route: "Transaction",
          url: ""
     },
     {
          route: "Wishlist",
          url: "",
     }
]

const SideBar = () => {

     return(
          <main className="sidebar-content">
               <section className="section-sidebar">
                    <ul className="ul-sidebar">
                         {listItems.map((items) => 
                              <li className="li-sidebar"><button type="button" name="button" className="btn-sidebar">{items.route}</button></li>
                         )}
                    </ul>
               </section>
          </main>
     );
}


export default SideBar;
