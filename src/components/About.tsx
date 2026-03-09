import { motion } from "framer-motion";

const info = [
  { icon: "🎤", label: "Name", value: "Mulatu Mekonnen" },
  { icon: "✉️", label: "Email", value: "mulercs514@gmail.com" },
  { icon: "🏠", label: "Residence", value: "Ethiopia" },
  { icon: "🌆", label: "City", value: "Addis Ababa" },
  { icon: "🎓", label: "Degree", value: "Bachelor of Computer Science" },
  { icon: "💼", label: "Freelance", value: "Hire me on Upwork and Toptal" },
];

const skills = {
  "Frontend Development": [
    { icon: "⚛️", name: "React.js" },
    { icon: "▲", name: "Next.js" },
    { icon: "📘", name: "TypeScript" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "📱", name: "React Native" },
  ],
  "Backend Development": [
    { icon: "💚", name: "Node.js" },
    { icon: "🚂", name: "Express.js" },
  ],
  "Database & Tools": [
    { icon: "🍃", name: "MongoDB" },
    { icon: "🐁", name: "Mysql" },
    { icon: "🐳", name: "Postgres SQL" },
  ],
  "Cloud & DevOps": [
    { icon: "☁️", name: "AWS Services" },
    { icon: "🔄", name: "CI/CD" },
    { icon: "📚", name: "Git" },
    { icon: "🐧", name: "Linux" },
  ],
};

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* place your own photo in public/about-photo.png */}
          <img
            src="/about-photo.png"
            alt="muler"
            className="rounded-xl w-full h-64 object-cover"
          />
        </motion.div>
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-2 title-ellipse">
              About Me
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded mx-auto mb-6" />
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
      </div>

      {/* Skills full width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="flex justify-center">
          <h3 className="text-2xl font-bold text-foreground mb-6 title-ellipse">
            Technical Skills
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h4 className="text-base font-semibold text-primary mb-4">
                {category}
              </h4>
              <div className="flex flex-col gap-3">
                {items.map(({ icon, name }) => (
                  <div
                    key={name}
                    title={name}
                    className="flex items-center gap-2 text-sm p-2 rounded cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-lg">{icon}</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
