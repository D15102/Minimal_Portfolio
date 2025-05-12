
import { ExternalLink } from "lucide-react";

const Tools = () => {
    interface ToolCardProps {
        title: string;
        description: string;
        image: string;
      }
      
      function ToolCard({ title, description, image }: ToolCardProps) {
        return (
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform transition-transform duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <a
                href={
                  title === "Code Reviewer"
                    ? "https://code-review-client.onrender.com"
                    : "https://resume-client-lycl.onrender.com"
                }
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                target="_blank"
              >
                Try Now <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        );
      }

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center">
      Professional Tools
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <ToolCard
        title="Code Reviewer"
        description="AI-powered code analysis tool that provides feedback on code quality, identifies bugs, and suggests improvements"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ToolCard
        title="Resume Analyzer"
        description="Professional resume analysis tool that provides feedback on your resume and suggests improvements to help you land your dream job"
        image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
  )
}

export default Tools
