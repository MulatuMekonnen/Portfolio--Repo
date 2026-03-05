import { motion } from "framer-motion";

const services = [
  { icon: "🔧", title: "Backend Development", desc: "Scalable and robust backend solutions" },
  { icon: "🎨", title: "Frontend Development", desc: "Responsive and modern user interfaces" },
  { icon: "🗄️", title: "Database Management", desc: "Efficient data storage and retrieval solutions" },
  { icon: "🔐", title: "Security & Auth", desc: "Secure application development practices" },
  { icon: "☁️", title: "Cloud Services", desc: "Cloud deployment and infrastructure management" },
  { icon: "🧪", title: "Testing & Quality", desc: "Comprehensive testing and code quality" },
];

const Services = () => (
  <section id="services" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-2">My Services</h2>
        <div className="w-16 h-1 bg-primary rounded mx-auto" />
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 text-center cursor-default"
          >
            <span className="text-4xl block mb-4">{s.icon}</span>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
