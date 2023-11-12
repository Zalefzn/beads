import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "@/components/About/About";
import Style from "./../styles/page.module.css";

export default function Home() {
  return (
    <main className={Style.main}>
        <Navbar />
        <Hero />
        <About />
    </main>
  )
}
