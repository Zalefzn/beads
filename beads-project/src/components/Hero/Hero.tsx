'use client';

import { useEffect } from 'react';
import './hero.scss';
import Image from 'next/image';
import About from '../About/About';

export default function Hero() {

  useEffect(() => {
    
  })

  return (
    <>
      <main className="hero" id="hero">
        <section className="section-hero">  
          <section className="img-hero">
            <Image src="/hero.png" alt="" width={130} height={130} className="img-data"/>
          </section>
          <section className="hero-content">
            <h2 className="judul-hero">
              Find your beads <br />
              with beads me
            </h2>
            <p className="p-hero">
              The best products we have<br />
              will make your day colorful
            </p>
            <section className="btn-hero">
              <button type="submit" name="submit" className="submit">Order Now</button>
            </section>
          </section>
        </section>
      </main>
    </>
    
  )
}
