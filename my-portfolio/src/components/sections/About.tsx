import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, User, Heart, MapPin, Mail, Calendar, Award } from "lucide-react";
import { personalInfo } from "@/data/projects";

const tabs = [
  { id: "about", label: "Who I Am", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "interests", label: "Interests", icon: Heart },
];

const stats = [
  { label: "Projects", value: "5+", icon: "🚀" },
  { label: "Labs", value: "7", icon: "🧪" },
  { label: "Technologies", value: "10+", icon: "⚡" },
  { label: "Dedication", value: "100%", icon: "💪" },
];

export function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">GET TO KNOW</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Stats & Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl p-8 glow-primary">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.div
                  className="w-32 h-32 rounded-full gradient-border p-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold">
                    AL
                  </div>
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                  <p className="text-primary">{personalInfo.title}</p>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground justify-center sm:justify-start">
                    <MapPin size={16} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 text-center glow-primary cursor-pointer"
                >
                  <span className="text-3xl mb-2 block">{stat.icon}</span>
                  <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tab Buttons */}
            <div className="flex gap-2 p-1 glass rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "gradient-bg text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="glass rounded-2xl p-8 min-h-[300px]">
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold">Hello! I'm {personalInfo.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {personalInfo.summary}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about creating innovative solutions that make a real impact. 
                    From mobile applications to database systems, I enjoy tackling complex 
                    challenges and turning ideas into reality.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <Mail className="text-primary" size={20} />
                    <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-bg">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{personalInfo.degree}</h3>
                      <p className="text-primary">{personalInfo.university}</p>
                      <p className="text-muted-foreground">{personalInfo.department}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>2022 - 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold mb-3">Key Coursework:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Software Engineering
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Database Systems
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Mobile Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Web Technologies
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold">Beyond Coding</h3>
                  <div className="grid gap-4">
                    {personalInfo.activities.map((activity, index) => (
                      <motion.div
                        key={activity}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/30"
                      >
                        <div className="p-2 rounded-lg gradient-bg">
                          <Award size={20} />
                        </div>
                        <span>{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
