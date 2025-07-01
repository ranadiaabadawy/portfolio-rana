import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Cairo, Egypt",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Developed responsive web applications using React and Next.js",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 40% faster load times",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
      current: true,
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Agency",
      location: "Cairo, Egypt",
      period: "2022 - 2023",
      type: "Full-time",
      description: [
        "Built interactive user interfaces for client websites",
        "Worked with cross-functional teams to deliver projects on time",
        "Implemented responsive designs across multiple devices",
        "Participated in daily standups and sprint planning",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      current: false,
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupHub",
      location: "Cairo, Egypt",
      period: "2022 (3 months)",
      type: "Internship",
      description: [
        "Assisted in developing company's main website",
        "Learned modern web development practices",
        "Contributed to open-source projects",
        "Gained experience with version control and team collaboration",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      current: false,
    },
  ]

  const education = [
    {
      degree: "Bachelor's in Artificial Intelligence",
      school: "Egyptian Russian University",
      location: "Cairo, Egypt",
      period: "2019 - 2023",
      description: "Specialized in AI with focus on web technologies and machine learning",
      gpa: "3.8/4.0",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Experience & Education</h2>
          <p className="text-xl text-gray-600">My professional journey and academic background</p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Work Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow relative">
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200">Current</Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-2">
            <div className="w-6 h-6 text-purple-600">🎓</div>
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-purple-600">{edu.school}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
