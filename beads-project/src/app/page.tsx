import Hero from "@/pages/Hero/Hero";
import Navbar from "../pages/Navbar/Navbar";
import About from "@/pages/About/About";
import Style from "./../styles/page.module.css";
import Products from "@/pages/Products/Products";
import Contact from "@/pages/Contact/Contact";

export default function Home() {
  return (
    <>
      <main className={Style.main}>
        <head>
           <title>Beads Me</title>
           <link rel="icon" type="image/png" href="/logo.png"></link>
           <meta charSet="UTF-8"></meta>
           <meta name="description" content="Beads Me" />
           <meta name="keywords" content="Beads Product" />
           <meta name="author" content="Beads Me" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
      </main>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Contact />
    </>
  )
}
