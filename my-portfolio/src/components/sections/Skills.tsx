import { motion } from "framer-motion";
import { skills } from "@/data/projects";

const categories = [
  { key: "frontend", label: "Frontend", color: "from-primary to-pink-500" },
  { key: "backend", label: "Backend", color: "from-secondary to-blue-500" },
  { key: "mobile", label: "Mobile", color: "from-green-500 to-emerald-500" },
  { key: "database", label: "Database", color: "from-orange-500 to-yellow-500" },
  { key: "tools", label: "Tools", color: "from-purple-500 to-indigo-500" },
  { key: "other", label: "Other", color: "from-rose-500 to-red-500" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with, 
            continuously learning and improving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg font-bold">{category.label}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skills[category.key as keyof typeof skills].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
