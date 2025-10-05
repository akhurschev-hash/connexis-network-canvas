import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Roadmap", "API"],
    Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "Status", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "DPA", "GDPR"],
  };

  return (
    <footer className="relative border-t border-primary/10">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Newsletter */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on features, fundraising tips, and success stories.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-card border-primary/20 rounded-full"
            />
            <Button className="bg-gradient-primary text-white rounded-full px-6">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="font-heading font-bold text-xl">Connexis</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Connexis. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
