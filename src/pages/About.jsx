const About = () => {
  const projects = [
    {
      id: crypto.randomUUID(),
      title: 'Portfolio Website',
      tech: 'React, Tailwind'
    },
    {
      id: crypto.randomUUID(),
      title: 'Task Board Management',
      tech: 'React, Bootstrap'
    },
    {
      id: crypto.randomUUID(),
      title: 'E-Commerce Application',
      tech: 'Next JS, Express, Tailwind'
    },
  ]

  return (
    <div className="max-w-350 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        About Me
      </h1>
      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex enim deserunt velit perferendis, harum voluptatibus!
      </p>
      <div className="grid gap-3">
        {
          projects?.map(project =>
            <div key={project.id} className="border p-3 rounded">
              <h3 className="font-medium">
                {project.title}
              </h3>
              <p className="text-sm">
                Tech: {project.tech}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default About;