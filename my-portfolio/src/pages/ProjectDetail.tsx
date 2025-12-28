import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Users, 
  Award, 
  CheckCircle,
  Smartphone,
  Monitor,
  Globe,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainProjects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = mainProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const CategoryIcon = categoryIcons[project.category];
  const gradientColor = categoryColors[project.category];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group">
              <Link to="/#projects">
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-3xl bg-gradient-to-br ${gradientColor} p-8 md:p-12 relative overflow-hidden mb-12`}
          >
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
              className="absolute -right-20 -bottom-20 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <CategoryIcon size={400} strokeWidth={0.3} />
            </motion.div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                  <CategoryIcon size={40} />
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Application
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/80 max-w-3xl">
                {project.shortDescription}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                {project.github && (
                  <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              {project.highlights && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/30"
                      >
                        <Award className="text-secondary flex-shrink-0" size={24} />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Team */}
              {project.team && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    Team Members
                  </h3>
                  <div className="space-y-3">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{member.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {member.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  {project.supervisor && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">Supervised by</p>
                      <p className="font-medium">{project.supervisor}</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.github && (
                    <Button variant="outline" className="w-full justify-start gradient-border" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        GitHub Repository
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button className="w-full justify-start gradient-bg" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
