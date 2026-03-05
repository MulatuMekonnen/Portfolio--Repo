import { motion } from "framer-motion";

const info = [
  { icon: "🎤", label: "Name", value: "Mulatu Mekonnen" },
  { icon: "✉️", label: "Email", value: "mulatu@example.com" },
  { icon: "🏠", label: "Residence", value: "Ethiopia" },
  { icon: "🌆", label: "City", value: "Addis Ababa" },
  { icon: "🎓", label: "Degree", value: "Bachelor of Computer Science" },
  { icon: "💼", label: "Freelance", value: "Available" },
];

const skills = {
  "Frontend Development": ["⚛️ React.js", "▲ Next.js", "📘 TypeScript", "🎨 Tailwind CSS", "📱 React Native"],
  "Backend Development": ["💚 Node.js", "🚂 Express.js", "🐍 Python", "☕ Java"],
  "Database & Tools": ["🍃 MongoDB", "🐘 PostgreSQL", "📗 Redis", "🐳 Docker"],
  "Cloud & DevOps": ["☁️ AWS Services", "🔄 CI/CD", "📚 Git", "🌐 Nginx"],
};

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Hello there! I'm Mulatu Mekonnen, a passionate Full Stack Developer from Ethiopia. I specialize in building modern, scalable web applications using the latest technologies. I enjoy solving complex problems and working closely with teams and clients to deliver high-quality solutions. I am always looking to learn new technologies and techniques to improve my skills.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <span>{item.icon}</span>
                <span className="text-muted-foreground">{item.label}:</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-primary mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
