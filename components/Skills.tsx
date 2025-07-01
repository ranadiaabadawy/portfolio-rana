import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Palette, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 90 },
      ],
    },
    {
      title: "Styling & Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Figma", level: 80 },
        { name: "UI/UX Principles", level: 75 },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-blue-600">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Overview</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ HTML, CSS, Tailwind CSS
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ JavaScript, React
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ Git, GitHub, Figma
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ Responsive Design
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ Modern Web Development
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
