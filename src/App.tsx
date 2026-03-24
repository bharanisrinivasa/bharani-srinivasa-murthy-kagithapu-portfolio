/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Cloud,
  Cpu,
  Database,
  Terminal,
  ChevronRight,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  X
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";
import React, { useRef, useState } from "react";
import profileImage from "./assets/profile.png";

import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import Resume from "./Resume";
import Cursor from "./Cursor";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

function Portfolio() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Training", "Education", "Certificates", "Contact"];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#030712]" />
        <img
          src="https://picsum.photos/seed/darktech/1920/1080?blur=2"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-xl tracking-tighter text-emerald-400"
          >
            Srinivasa
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RouterLink
                to="/resume"
                className="px-5 py-2 rounded-lg border border-emerald-500/50 text-emerald-400 text-sm font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all"
              >
                Resume
              </RouterLink>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-emerald-400 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-t border-emerald-500/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <RouterLink
                  to="/resume"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 rounded-lg border border-emerald-500/50 text-emerald-400 text-center text-lg font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all"
                >
                  Resume
                </RouterLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            Building the <br />
            <span className="text-gradient">Future of Cloud.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            {PORTFOLIO_DATA.role}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Get in touch <ChevronRight size={18} />
            </motion.a>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: PORTFOLIO_DATA.contact.linkedin },
                { icon: Mail, href: `mailto:${PORTFOLIO_DATA.contact.email}` },
                { icon: Github, href: PORTFOLIO_DATA.contact.github }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-xl">01.</span> About Me
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              {PORTFOLIO_DATA.summary}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-emerald-500" />
                <span>{PORTFOLIO_DATA.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase size={18} className="text-emerald-500" />
                <span>B.Tech Student at Lovely Professional University</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src={profileImage}
                alt="Bharani Srinivasa Murthy Kagithapu"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-emerald-500 font-mono text-xl">02.</span> Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Cloud & DevOps", icon: Cloud, skills: ["Oracle Cloud", "Docker", "DevOps", "Solutions Architecture"] },
            { title: "Development", icon: Code2, skills: ["Python", "JavaScript", "NodeJS", "HTML/CSS"] },
            { title: "Systems & Data", icon: Terminal, skills: ["Linux", "MySQL", "C/C++", "Data Structures"] }
          ].map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                    className="px-4 py-2 rounded-full glass text-sm font-medium text-emerald-400 border-emerald-500/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-emerald-500 font-mono text-xl">03.</span> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl glass overflow-hidden flex flex-col h-full"
            >
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="flex flex-col h-full"
              >
                <div className="h-48 bg-slate-800/50 relative overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${project.image.endsWith('.svg') ? 'object-contain' : 'object-cover'} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={18} className="text-slate-500 group-hover:text-emerald-400" />
                  </div>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Summer Training Section */}
      <Section id="training">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-emerald-500 font-mono text-xl">04.</span> Summer Training
        </h2>
        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-200 mb-2">Python Dynamics</h3>
            <p className="text-emerald-400 font-medium mb-6 flex items-center gap-2">
              <Award size={18} /> Lovely Professional University • July 2025
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              {PORTFOLIO_DATA.summerTraining}
            </p>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-emerald-500 font-mono text-xl">05.</span> Education & Growth
        </h2>
        <div className="space-y-8">
          {PORTFOLIO_DATA.education.map((edu, i) => (
            <div key={i} className="relative pl-8 border-l border-emerald-500/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500" />
              <div className="glass p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <GraduationCap size={20} className="text-emerald-400" />
                      {edu.institution}
                    </h3>
                    <p className="text-emerald-500/80 font-medium">{edu.degree}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 bg-white/5 px-4 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Section>

      {/* Certificates Section */}
      <Section id="certificates">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-emerald-500 font-mono text-xl">06.</span> Certificates
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => (cert as any).link && window.open((cert as any).link, "_blank")}
              className={`p-4 rounded-3xl glass border-emerald-500/10 flex flex-col items-center text-center gap-4 group ${(cert as any).link ? 'cursor-pointer hover:border-emerald-500/30' : ''}`}
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-800/50">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {cert.name}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build something <span className="text-gradient">extraordinary.</span></h2>
          <p className="text-slate-400 text-lg mb-12">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="p-8 rounded-3xl glass hover:border-emerald-500/30 transition-all group"
            >
              <Mail size={32} className="mx-auto mb-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-1">Email Me</h4>
              <p className="text-sm text-slate-500">{PORTFOLIO_DATA.contact.email}</p>
            </a>
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl glass hover:border-emerald-500/30 transition-all group"
            >
              <Github size={32} className="mx-auto mb-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-1">GitHub Connect</h4>
              <p className="text-sm text-slate-500">github.com/bharanisrinivasa</p>
            </a>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
          >
            Connect on LinkedIn <ExternalLink size={18} />
          </motion.a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Bharani Srinivasa Murthy Kagithapu. Built with Passion.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
