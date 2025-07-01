"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-800" : "text-gray-800"}`}>
              Rana Diaa
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-600 hover:text-emerald-600" : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-600 hover:text-emerald-600" : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-600 hover:text-emerald-600" : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Projects
            </button>
            <Button
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${isScrolled ? "text-gray-800" : "text-gray-800"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-emerald-600 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
