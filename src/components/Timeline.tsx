import { motion } from "framer-motion";

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
}

const education: TimelineItem[] = [
  {
    period: "2021 - Present",
    title: "Computer Science",
    org: "University",
    desc: "Pursuing a Bachelor's degree in Computer Science with focus on software development and system design.",
    tags: ["Java", "Python", "Algorithms", "Data Structures"],
  },
  {
    period: "2024",
    title: "Fullstack Development Bootcamp",
    org: "Online Certification",
    desc: "Completed intensive fullstack development program covering modern web technologies.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
  },
];

const experience: TimelineItem[] = [
  {
    period: "2024 - Present",
    title: "Full Stack Developer",
    org: "Freelance",
    desc: "Building scalable web applications and delivering custom solutions for clients.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2023 - Present",
    title: "Freelance Developer",
    org: "Self-Employed",
    desc: "Managing client projects and delivering custom web solutions.",
    tags: ["React", "Firebase", "REST APIs", "UI/UX"],
  },
];

const TimelineSection = ({ items, icon }: { items: TimelineItem[]; icon: string }) => (
  <div className="space-y-6">
    {items.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
        className="glass-card rounded-xl p-6 relative border-l-4 border-l-primary"
      >
        <span className="text-xs font-medium text-primary">{item.period}</span>
        <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
        <p className="text-sm text-muted-foreground">{item.org}</p>
        <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded bg-secondary text-xs text-secondary-foreground">{t}</span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const Timeline = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-foreground mb-6">
            Education 🎓
          </motion.h2>
          <TimelineSection items={education} icon="🎓" />
        </div>
        <div>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-foreground mb-6">
            Experience 💼
          </motion.h2>
          <TimelineSection items={experience} icon="💼" />
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
