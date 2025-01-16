import React from 'react'

export const Proyectos = () => {

  const projects = [
    {
      title: "Harry Potter App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      ],
      technologies: [
        {
          name: "JavaScript",
          icon: "https://miro.medium.com/v2/resize:fit:1200/1*lhfGTouqSQ-fx7PRXaFI-Q.png",
        },
        {
          name: "Tailwind CSS",
          icon: "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
        },
        {
          name: "PrimeNG",
          icon: "https://www.primetek.com.tr/img/primeng.jpg",
        },
      ],
    }
   
  ];
  return (

    <>

<div className="flex flex-col justify-center ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row lg:flex-row justify-center rounded-lg "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2 p-3">
            {project.images.map((image, i) => (
              <img
                key={i}
                className="h-auto w-full md:w-52 lg:w-52 rounded-lg "
                src={image}
                alt={`Project ${project.title} - Image ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-col p-1 ">
            <p className="text-xl font-mono">Titulo:</p>
            <p className="text-3xl p-1 mt-2 mb-2">{project.title}</p>
            <p className="text-xl font-mono">Lenguajes y frameworks:</p>
            <div className="flex flex-row ">
              {project.technologies.map((tech, i) => (
                <img
                  key={i}
                  className="h-10 w-auto"
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                />
              ))}
            </div>
            <p className="text-md">{project.description}</p>
          </div>
        </div>
      ))}
    </div>

     
    </>
  )
}
