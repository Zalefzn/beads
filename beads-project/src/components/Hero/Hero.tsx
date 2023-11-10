'use client';

import './hero.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="hero">
      <section className="section-hero">  
        <section className="img-hero">
          <Image src="/hero.png" alt="" width={130} height={130} className="img-data"/>
        </section>
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
    </main>
  )
}
