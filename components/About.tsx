import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, GraduationCap, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 text-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rana Diaa
          </h1>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center justify-center gap-2">
            <Code className="w-6 h-6" />
            Frontend Developer
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a frontend developer passionate about building modern and responsive web apps. Graduate of the Egyptian
            Russian University, AI Department.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <p className="text-gray-600">
                <strong>Egyptian Russian University</strong>
                <br />
                AI Department Graduate
                <br />
                Specialized in Artificial Intelligence with focus on web technologies
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-purple-600" />
                <h4 className="text-xl font-semibold">Passion</h4>
              </div>
              <p className="text-gray-600">
                Creating beautiful, responsive, and user-friendly web applications using modern frontend technologies
                and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="https://www.linkedin.com/in/rana-diaa-a88204250" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
          >
            <a href="https://github.com/ranadiaabadawy" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
          >
            <a href="mailto:rana.diaa@example.com">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
