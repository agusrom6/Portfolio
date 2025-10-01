import React from "react";
import { Card } from "../layout/Card";
import projects from "../../data/Projects.json";

function Projects() {

  

  return (
    <section className="min-h-50vh  flex flex-col items-center px-8 py-10 text-white">
      <h2 className="text-4xl font-bold mb-8">Proyectos</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {projects.map((project) => (
        <Card
          key={project.id}
          image={project.image}
          title={project.title} 
          stack={project.stack}
          description={project.description}
          repo={project.repo}
          demo={project.demo}
        /> 
        ))}
      </div>
    </section>
  );
}

export default Projects;
