import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/ranadiaaba/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      date: "2024",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/ranadiaaba/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      date: "2024",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/ranadiaaba/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      date: "2023",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "https://github.com/ranadiaaba/portfolio",
      liveUrl: "https://ranadiaa.dev",
      date: "2023",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "A content management system with markdown support, SEO optimization, and user engagement features.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/ranadiaaba/blog-platform",
      liveUrl: "https://blog-demo.vercel.app",
      date: "2023",
      featured: false,
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with group chats, file sharing, and emoji reactions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/ranadiaaba/chat-app",
      liveUrl: "https://chat-demo.vercel.app",
      date: "2023",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-emerald-400">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-emerald-600/50 transition-colors"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-600 text-white">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
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
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-emerald-400">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-emerald-600/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="p-2 h-8 w-8">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="p-2 h-8 w-8">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
          <p className="text-gray-300 mb-6">I'm always open to discussing new projects and opportunities.</p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <a href="mailto:contact@ranadiaa.dev">Get In Touch</a>
          </Button>
        </section>
      </div>
    </div>
  )
}
