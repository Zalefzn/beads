import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "@/components/About/About";
import Style from "./../styles/page.module.css";
import Products from "@/components/Products/Products";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={Style.main}>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Contact />
    </main>
  )
}
