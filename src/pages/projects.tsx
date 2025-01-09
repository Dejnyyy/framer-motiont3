import ProjectCard from './components/ProjectCard';
import Link from "next/link"

export default function Projects() {
  const projects = [
    { title: 'Project 1', description: 'An awesome project.' },
    { title: 'Project 2', description: 'Another great project.' },
    { title: 'Project 3', description: 'Yet another cool one.' },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-800 text-white">
      <Link href={"/"}>Back</Link>
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
