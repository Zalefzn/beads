'use client'

import Image from 'next/image';
import Link from 'next/link';
import './contact.scss';

const Contact = () => {  
     return(
          <main className="contact">
               <section className="contact-content">
                    <section className="card-two-contact">  
                         <h2 className="contact-h2">Contact us</h2>
                         <p className="contact-p">
                         The best product for young people who want to add style to<br />
                         your accessories needs, with Beads Me you can create<br />
                         accessories based on your own wishes, immediately contact<br />
                         us if you want to buy our products
                         </p>
                         <Link href="https://wa.me/081517831427?text=Hallo%20Kak!,%20Saya%20Ingin%20Membeli%20Produk%20Gantungan%20Dari%20Beads%20Me,%20apakah%20ada%20produknya%20?"><button className="btn-contact">Contact us</button></Link>
                    </section>
               </section>
          </main>
     );
}


export default Contact;