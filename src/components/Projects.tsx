import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with user authentication, product listings, cart, and order management.",
    tech_stack: "React, Node.js, MongoDB, Express",
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: null,
  },
  {
    id: 2,
    title: "Tourism Bureau Website",
    description: "A full-stack web application with content management for news and events, interactive dashboard, and responsive design.",
    tech_stack: "React, Node.js, PostgreSQL, Express",
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: null,
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "A real-time messaging application with WebSocket support, user presence, and media sharing capabilities.",
    tech_stack: "React, Socket.IO, Node.js, Redis",
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and experiences with dynamic animations.",
    tech_stack: "React, Framer Motion, Tailwind CSS",
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: null,
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {sampleProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl overflow-hidden group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary/20 font-heading">{p.title[0]}</span>
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

export default Projects;
