'use client';
import Image from 'next/image';
import './about.scss';

export default function About() {
  return (
    <main className="about">
          <section className="section-about">
               <section className="section-img">
                    <Image alt="" src="/about.png" width={130} height={130} className="img-about"></Image>
               </section>
          </section>
    </main>
  )
}
