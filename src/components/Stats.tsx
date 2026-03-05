import { motion } from "framer-motion";

const stats = [
  { emoji: "😊", label: "Happy Clients", value: "10+" },
  { emoji: "✓", label: "Projects Done", value: "15+" },
  { emoji: "⏰", label: "Work Hours", value: "1,000+" },
  { emoji: "👥", label: "Team Works", value: "5+" },
];

const Stats = () => (
  <section className="py-16 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 text-center"
          >
            <span className="text-3xl mb-2 block">{s.emoji}</span>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
