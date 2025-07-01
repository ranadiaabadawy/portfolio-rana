import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
