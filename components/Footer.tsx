import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-gray-300 mb-6">I'm always interested in discussing new opportunities and projects.</p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              <a href="https://www.linkedin.com/in/rana-diaa-a88204250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
            >
              <a href="https://github.com/ranadiaabadawy" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent"
            >
              <a href="mailto:rana.diaa@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Rana Diaa • Made with <Heart className="w-4 h-4 text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}
