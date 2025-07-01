import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ShoppingCart, UtensilsCrossed } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "SmartMeal",
      description: "A modern food delivery interface using React with beautiful UI components and responsive design.",
      longDescription:
        "SmartMeal is a comprehensive food delivery application interface that showcases modern React development practices. Features include menu browsing, cart functionality, order management, and a beautiful login system with custom illustrations.",
      image: "/images/smartmeal-login.png",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Custom Illustrations"],
      githubUrl: "https://github.com/ranadiaabadawy/SmartMeal",
      liveUrl: "#",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      featured: true,
    },
    {
      title: "ShopEase",
      description: "A mini e-commerce frontend demo showcasing product listings and shopping cart functionality.",
      longDescription:
        "ShopEase demonstrates e-commerce frontend development with product catalogs, filtering, and shopping cart features. Built with clean, maintainable code structure.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Component Architecture"],
      githubUrl: "https://github.com/ranadiaabadawy/ShopEase",
      liveUrl: "#",
      icon: <ShoppingCart className="w-6 h-6" />,
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my frontend development work</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-blue-600">{project.icon}</div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white flex-1 bg-transparent"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">More projects coming soon! Check my GitHub for latest updates.</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
          >
            <a href="https://github.com/ranadiaabadawy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
