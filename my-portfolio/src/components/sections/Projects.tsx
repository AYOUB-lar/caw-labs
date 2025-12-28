import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Monitor, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainProjects } from "@/data/projects";
import { Link } from "react-router-dom";

const categoryIcons = {
  mobile: Smartphone,
  desktop: Monitor,
  web: Globe,
  database: Database,
};

const categoryColors = {
  mobile: "from-primary to-pink-500",
  desktop: "from-secondary to-blue-500",
  web: "from-green-500 to-emerald-500",
  database: "from-orange-500 to-yellow-500",
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">WHAT I'VE BUILT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my main projects demonstrating skills in mobile development, 
            desktop applications, web development, and database systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category];
            const gradientColor = categoryColors[project.category];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col glow-primary hover:glow-secondary transition-all duration-500">
                  {/* Project Header with Icon */}
                  <div className={`h-48 bg-gradient-to-br ${gradientColor} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <motion.div
                      className="absolute -right-8 -bottom-8 opacity-20"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <CategoryIcon size={150} strokeWidth={0.5} />
                    </motion.div>
                    <div className="relative z-10">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm w-fit mb-4">
                        <CategoryIcon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 gradient-bg"
                        asChild
                      >
                        <Link to={`/project/${project.id}`}>
                          <ExternalLink size={16} className="mr-2" />
                          View Details
                        </Link>
                      </Button>
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gradient-border"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
