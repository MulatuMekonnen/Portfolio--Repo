import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const sampleProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with user authentication, product listings, cart, and order management.",
    tech_stack: "Laravel, Node.js, MySQL",
    github_url: "https://github.com/MulatuMekonnen/Ecommerce-Platform-Intern",
    live_url: "https://github.com/MulatuMekonnen/Ecommerce-Platform-Intern",
    image_url: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Ethio Kids Learning App",
    description: "A responsive application with content management for kids and parents, interactive dashboard, and responsive design.",
    tech_stack: "ReactNative, Node.js, Firebase",
    github_url: "https://github.com/MulatuMekonnen/EthioKidsLearn",
    live_url: "https://github.com/MulatuMekonnen/EthioKidsLearn",
    image_url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Inter Office Communication System",
    description: "A real-time communication system with WebSocket support, user presence, and media sharing capabilities.",
    tech_stack: "Next.js, Node.js, PostgreSQL",
    github_url: "https://github.com/MulatuMekonnen/Inter-Office-Communication-System",
    live_url: "https://github.com/MulatuMekonnen/Inter-Office-Communication-System",
    image_url: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and experiences with dynamic animations.",
    tech_stack: "React, Framer Motion, Tailwind CSS",
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: "https://plus.unsplash.com/premium_photo-1669077046819-49779c064034?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProjects(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch projects from API, using sample data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
  <section id="projects" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl overflow-hidden group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
              {p.image_url ? (
                <img
                  src={p.image_url}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="text-5xl font-bold text-primary/20 font-heading">{p.title[0]}</span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech_stack.split(", ").map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-secondary text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href={p.github_url} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Code
                  </a>
                </Button>
                <Button asChild size="sm" className="rounded-full">
                  <a href={p.live_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Projects;
