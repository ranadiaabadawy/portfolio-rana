"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Frontend Developer", "React Specialist", "Problem Solver"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-medium">Available for new opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rana Diaa
              </span>
            </h1>

            <div className="h-16 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                I'm a{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent transition-all duration-500">
                  {texts[currentText]}
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Passionate about creating beautiful, responsive web applications with modern technologies. Graduate of
              Egyptian Russian University, AI Department.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/rana-diaa-a88204250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-400/50 text-purple-600 hover:bg-purple-50 hover:border-purple-500 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 bg-white/50"
              asChild
            >
              <a href="https://github.com/ranadiaabadawy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              variant="ghost"
              className="w-14 h-14 rounded-full border border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/rana-diaa-a88204250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-14 h-14 rounded-full border border-gray-300 hover:border-purple-400 hover:bg-purple-50 text-gray-500 hover:text-purple-600 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/ranadiaabadawy" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-14 h-14 rounded-full border border-gray-300 hover:border-emerald-400 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-all duration-300"
              asChild
            >
              <a href="mailto:rana.diaa@example.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
