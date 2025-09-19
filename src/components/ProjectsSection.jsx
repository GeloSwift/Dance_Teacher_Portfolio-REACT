import React from "react";
import { ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chorégraphie moderne",
    description: "Un projet de danse contemporaine explorant les mouvements fluides",
    image: "/projects/project1.png",
    tags: ["danse", "art", "performance"],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Spectacle de ballet",
    description: "Une représentation classique mettant en valeur la technique et l'émotion",
    image: "/projects/project2.png",
    tags: ["danse", "art", "performance"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Atelier de danse",
    description: "Un projet éducatif pour enseigner les bases de la danse aux débutants",
    image: "/projects/project3.png",
    tags: ["danse", "art", "performance"],
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {" "}
          Projets <span className="text-primary"> en vedette</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Une vitrine de mes projets récents, mettant en valeur mes compétences et ma créativité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overfow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>

                <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/GeloSwift"
          >
            Voir mon Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
