import { motion } from "framer-motion";
import { ExternalLink, Github, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { labs } from "@/data/projects";

export function Labs() {
  return (
    <section id="labs" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm">ACADEMIC WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            University <span className="gradient-text">Labs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Practical laboratory work completed during my studies, showcasing fundamental 
            skills in web development, testing, and modern frameworks.
          </p>
        </motion.div>

        {/* Labs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-6 group hover:glow-secondary transition-all duration-300"
            >
              {/* Lab Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                  <FlaskConical size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs border-secondary text-secondary">
                      Lab {lab.number}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg">{lab.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {lab.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {lab.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-muted/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* GitHub Link */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center hover:gradient-bg group/btn"
                asChild
              >
                <a href={lab.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  View on GitHub
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            All labs are available in my GitHub repository
          </p>
          <Button variant="outline" size="lg" className="gradient-border" asChild>
            <a href="https://github.com/AYOUB-lar/caw-labs" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Labs on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
