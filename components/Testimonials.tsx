import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Rana is an exceptional frontend developer. Her attention to detail and ability to translate designs into pixel-perfect code is outstanding. She consistently delivers high-quality work on time.",
    },
    {
      name: "Sarah Mohamed",
      role: "UI/UX Designer",
      company: "Digital Agency",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Rana has been a pleasure. She understands design principles well and always provides valuable feedback during the development process. Her React skills are top-notch.",
    },
    {
      name: "Omar Ali",
      role: "Tech Lead",
      company: "StartupHub",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Rana quickly adapted to our tech stack and became a valuable team member. Her problem-solving skills and eagerness to learn new technologies make her a great developer to work with.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What People Say</h2>
          <p className="text-xl text-gray-600">Testimonials from colleagues and clients I've worked with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-blue-200">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
