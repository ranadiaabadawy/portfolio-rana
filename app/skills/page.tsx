import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Web Accessibility", level: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Angular", level: 70 },
        { name: "jQuery", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Sass/SCSS", level: 85 },
        { name: "CSS Modules", level: 80 },
        { name: "Styled Components", level: 75 },
        { name: "Material-UI", level: 80 },
        { name: "Figma", level: 85 },
      ],
    },
  ]

  const certifications = [
    "React Developer Certification",
    "Frontend Web Development",
    "JavaScript Algorithms and Data Structures",
    "Responsive Web Design",
    "Advanced CSS and Sass",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-emerald-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-emerald-400">Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-emerald-400">Currently Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• React Native</li>
                  <li>• Three.js</li>
                  <li>• Progressive Web Apps (PWA)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Concepts</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Advanced React Patterns</li>
                  <li>• Performance Optimization</li>
                  <li>• Modern CSS Architecture</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
