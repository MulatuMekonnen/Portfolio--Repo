import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-6"
            >
              👋 Hello, I'm
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
              Mulatu Mekonnen
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              Expertise in modern web technologies: Crafting dynamic web experiences with React, Node.js, and cloud services. Bringing ideas to life with seamless integration, top-notch performance, and a passion for clean, scalable code.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Let's Talk 👋</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#about">Resume 🚀</a>
              </Button>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Send, href: "https://t.me/", label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-primary/20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-primary/10" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl relative z-10 bg-muted">
                <img src={profileImg} alt="Mulatu Mekonnen" className="w-full h-full object-cover" />
              </div>
              {/* Floating dots */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/30"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${-5 + i * 8}%`,
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
