'use client';

import {useState, useRef} from 'react';
import Image from 'next/image';
import './products.scss';
import swal from 'sweetalert';


const cards = [
     {    
          id: 1,
          judul: "Gelang",
          desc: "Our products are trusted by many buyers\nthe materials we use to make this product\nreally prioritize quality and neatness in its\nmanufacture",
          image: "/pict1.png",
          price: "Rp.10.000"
     }, 
     {    
          id: 2,
          judul: "Gantungan",
          desc: "Our products are trusted by many buyers\nthe materials we use to make this product\nreally prioritize quality and neatness in its\nmanufacture",
          image: "/pict2.png",
          price: "Rp.15.000",
     },
     {
          id: 3,
          judul: "Kalung",
          desc: "Our products are trusted by many buyers\nthe materials we use to make this product\nreally prioritize quality and neatness in its\nmanufacture",
          image:"/pict3.png",
          price: "Rp.10.000"
     }
]

const Products = () => {

     const [open, setOpen] = useState();
     const getRef = useRef();


     const handleView = () => {
          swal({
               icon: "warning",
               title: "Warning!",
               text: "Please Sign up First!"
          })
     }


     return(
          <main className="main-product">
               <section className="content-product">
                    <h2 className="header-products">Our Products</h2>
                    <p className="desc-products">
                         This is our best-selling product which<br /> 
                         is very popular with our buyers
                    </p>
               </section>
               <section className="cards">
                    {cards.map((data) => {
                         return (
                              <>
                                   <div className="card-one" key={data.id}>
                                       <Image src={data.image} alt="image" width={300} height={300} className="img-products"></Image>
                                       <section className="desc-card" key={data.id}>
                                             <p className="p-card" key={data.id}>
                                                  {data.desc}    
                                             </p>
                                       </section>
                                       <button type="submit" name="button" className="btn-product" onClick={handleView}>Buy Now</button>
                                   </div>
                              </>
                         );
                    })}
               </section>
          </main>
     );
}

export default Products;