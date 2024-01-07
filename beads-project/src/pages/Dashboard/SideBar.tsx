'use client';

import './sidebar.scss';
import {useRouter} from 'next/navigation';

const listItems = [
     {
          route: "Product",
          url: "product"
     },
     {
          route: "Transaction",
          url: "transaction"
     },   
     {
          route: "Wishlist",
          url: "wishlist",
     }
]


interface SidebarProps {
     onItemClick: (page: string) => void;
}

const SideBar: React.FC<SidebarProps> = ({ onItemClick }) => {
     return(
          <main className="sidebar-content">
               <section className="section-sidebar">
                    <ul className="ul-sidebar">
                         {listItems.map((items) => 
                              <li className="li-sidebar"><button type="button" name="button" className="btn-sidebar" onClick={() => onItemClick(items.url)}>{items.route}</button></li>
                         )}
                    </ul>
               </section>
          </main>
     );
}


export default SideBar;
