'use client';



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
                              <li className="li-sidebar">{items.route}</li>
                         )}
                    </ul>
               </section>
          </main>
     );
}


export default SideBar;
