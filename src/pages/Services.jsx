const Services = () => {
  const services = [
    {
      id: crypto.randomUUID(),
      title: 'Frontend Development',
      description: 'React, HTML, CSS, Tailwind'
    },
    {
      id: crypto.randomUUID(),
      title: 'React Website',
      description: 'Single Page Application'
    },
    {
      id: crypto.randomUUID(),
      title: 'Pixel Perfect Responsive Application',
      description: 'Clean & Simple Design'
    },
  ]

  return (
    <div className="max-w-350 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        My Services
      </h1>
      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex enim deserunt velit perferendis, harum voluptatibus!
      </p>
      <div className="grid gap-3">
        {
          services?.map(service =>
            <div key={service.id} className="border p-4 rounded">
              <h2>
                {service.title}
              </h2>
              <p>
                {service.description}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Services;