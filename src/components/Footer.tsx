import { Github, Linkedin, Send } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-secondary/30">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <p className="text-sm text-muted-foreground mb-4">
        © {new Date().getFullYear()} Mulatu Mekonnen. All rights reserved. Developed by "Mulatu M"
      </p>
      <div className="flex justify-center gap-4">
        {[
          { icon: Github, href: "https://github.com/MulatuMekonnen/MulatuMekonnen", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/mulatumekonnen", label: "LinkedIn" },
          { icon: Send, href: "https://t.me/muler_1219", label: "Telegram" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
