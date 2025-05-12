
import { ExternalLink } from "lucide-react";
const Projects = () => {
    interface ProjectCardProps {
        title: string;
        description: string;
        image: string;
      }
      
      function ProjectCard({ title, description, image }: ProjectCardProps) {
        return (
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform transition-transform duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <a
                href={
                  title === "Music Player"
                    ? "https://github.com/D15102/Music-Player"
                    : "https://github.com/D15102/Simple-Weather-Web-App"
                }
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                target="_blank"
              >
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            
          </div>
        );
      }

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <ProjectCard
        title="Music Player"
        description="Simple Music Player With React , Tailwind , Framer Motion"
        image="https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ProjectCard
        title="Wether Web App"
        description="A React-based Real Time Whether Web App With Night And Day Animations"
        image="https://images.unsplash.com/photo-1705085708510-9c6bdcd95ed1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
  )
}

export default Projects