'use client';
import Image from 'next/image';
import './about.scss';

export default function About() {
  return (
    <main className="about" id="about">
          <section className="section-about">
               <section className="section-img">
                    <Image alt="about" src="/about.png" width={130} height={130} className="img-about"></Image>
               </section>
               <section className="content-about">
                <h2 className="h3-about">Who we are</h2>
                <h1 className="h1-about">Beads Me</h1>
                <p className="p-about">We are a well-known brand that focuses<br /> 
                    on creating accessories that are relevant<br /> 
                    to clothing styles that are currently viral<br /> 
                    and are popular with many teenagers.</p>
                    <section className="about-btn">
                      <button type="submit" name="submit" className="about-submit">Read More</button>
                    </section>
               </section>
          </section>
    </main>
  )
}
