import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
  Terminal
} from "lucide-react";
import { Link } from "react-router-dom";
import { PORTFOLIO_DATA } from "./constants";

export default function Resume() {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const downloadUrl = "https://drive.google.com/uc?export=download&id=12wsoAsZTvw0a9fiDqho2Xc5pUWC3t1Tf";
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = downloadUrl;
    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 5000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-emerald-500/30">
      {/* Background elements to match main page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <nav className="sticky top-0 w-full z-50 glass border-b-0 py-4 mb-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono font-bold">
            <ArrowLeft size={18} /> BACK
          </Link>
          <a
            href="https://drive.google.com/file/d/12wsoAsZTvw0a9fiDqho2Xc5pUWC3t1Tf/view?usp=sharing"
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <Download size={16} /> PRINT PDF
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-3xl border-emerald-500/10 shadow-2xl"
        >
          {/* Header */}
          <header className="border-b border-emerald-500/10 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {PORTFOLIO_DATA.name.toUpperCase()}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Linkedin size={14} className="text-emerald-500" /> linkedin.com/in/bharanisrinivasa
                </a>
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Github size={14} className="text-emerald-500" /> github.com/bharanisrinivasa
                </a>
              </div>
              <div className="space-y-2 md:text-right">
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-2 md:justify-end hover:text-emerald-400 transition-colors">
                  <Mail size={14} className="text-emerald-500" /> {PORTFOLIO_DATA.contact.email}
                </a>
                <div className="flex items-center gap-2 md:justify-end">
                  <Phone size={14} className="text-emerald-500" /> +91-{PORTFOLIO_DATA.contact.phone}
                </div>
              </div>
            </div>
          </header>

          {/* Resume Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/10">
            <img
              src="/src/assets/resume.png"
              alt="Resume"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Terminal size={14} /> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold text-sm mb-2">Languages & Frameworks</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Python, C, C++, JavaScript, HTML, CSS, NodeJS
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-2">Tools & Soft Skills</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  MySQL, Linux, Problem-Solving, Team Player, Project Management, Adaptability
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Code2 size={14} /> Projects
            </h2>
            <div className="space-y-8">
              {PORTFOLIO_DATA.projects.map((project, i) => (
                <div key={i} className="relative pl-6 border-l border-emerald-500/20">
                  <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <span className="text-xs font-mono text-slate-500">
                      {i === 0 ? "July 2025" : i === 1 ? "April 2025" : "Feb 2024"}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summer Training */}
          <section className="mb-10">
            <h2 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Briefcase size={14} /> Summer Training
            </h2>
            <div className="relative pl-6 border-l border-emerald-500/20">
              <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-emerald-500" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-lg">Lovely Professional University – Python Dynamics</h3>
                <span className="text-xs font-mono text-slate-500">June 2025 - July 2025</span>
              </div>
              <ul className="text-slate-400 text-sm space-y-2 list-disc ml-4">
                <li>Completed a summer internship focused on Python Dynamics with an emphasis on AI and automation.</li>
                <li>Learned fundamental Python concepts including syntax, object-oriented programming, control flow, and file handling.</li>
                <li>Acquired knowledge in more advanced areas such as automation techniques, data processing, and the fundamentals of AI.</li>
                <li>Enhanced problem-solving abilities and communication skills through practical, hands-on training experiences.</li>
              </ul>
            </div>
          </section>

          {/* Certificates */}
          <section className="mb-10">
            <h2 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Award size={14} /> Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certificates.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={cert.image} alt="" className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{cert.name}</div>
                    <div className="text-xs text-slate-500">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-white font-bold">{edu.institution}</h3>
                    <p className="text-sm text-emerald-500/80">{edu.degree || "Intermediate"}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-slate-500">{edu.period}</div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider">
                      {i === 0 ? "CGPA: 5.86" : i === 1 ? "Percentage: 78" : "Percentage: 99"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="py-12 text-center text-slate-600 text-xs border-t border-white/5">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Passion.</p>
      </footer>
    </div>
  );
}
