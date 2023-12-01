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
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
    </>
  )
}


