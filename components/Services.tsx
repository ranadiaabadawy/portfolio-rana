import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Smartphone, Zap, Globe, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using modern frameworks like React and Next.js.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, user-friendly interfaces with attention to detail.",
      features: ["Figma to Code", "CSS Animations", "Interactive Components", "Cross-browser Compatibility"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Creating mobile-optimized experiences that work seamlessly across all devices.",
      features: ["Responsive Layouts", "Touch-friendly UI", "Progressive Web Apps", "Mobile Performance"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and better user experience.",
      features: ["Code Splitting", "Image Optimization", "SEO Best Practices", "Core Web Vitals"],
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web development with modern tools and best practices.",
      features: ["Modern JavaScript", "API Integration", "Database Design", "Deployment"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultation & Mentoring",
      description: "Providing technical guidance and mentoring for development teams and individuals.",
      features: ["Code Reviews", "Technical Planning", "Best Practices", "Team Training"],
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Services I Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to start your project?</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
