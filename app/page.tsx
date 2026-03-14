// app/page.tsx
import Link from 'next/link';
import { Sparkles, BrainCircuit, Rocket, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { AgentPlayground } from './AgentPlayground'; // Import from root
import { TechStack } from './TechStack'; // Import from root

const solutions = [
  {
    title: "Enterprise RAG",
    desc: "Chat with your documentation, PDFs, and databases with zero hallucinations.",
    icon: <Zap className="text-purple-400" size={24} />
  },
  {
    title: "AI Agents",
    desc: "Autonomous workflows that execute tasks across 5,000+ app integrations.",
    icon: <Cpu className="text-indigo-400" size={24} />
  },
  {
    title: "Privacy First",
    desc: "On-premise LLM deployments ensuring your data never leaves your server.",
    icon: <ShieldCheck className="text-emerald-400" size={24} />
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 px-8 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
        
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 animate-pulse">
            <Sparkles size={16} />
            <span>Deployment Ready for 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter leading-[1.1]">
            Automate <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">Complexity.</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ardentinfo AI Lab engineers custom intelligence layers for modern enterprises. From LLM fine-tuning to autonomous agents.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-black hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 justify-center">
              <BrainCircuit size={20} /> Request Technical Demo
            </Link>
          </div>
        </div>
      </section>

      {/* --- ADDED COMPONENT START --- */}
      <AgentPlayground />
      {/* --- ADDED COMPONENT END --- */}

      {/* SOLUTIONS GRID */}
      <section id="solutions" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((item, idx) => (
          <div key={idx} className="relative overflow-hidden group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 ...">
            {/* The Scan Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-full w-full animate-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
                {/* ... existing card content (icon, title, desc) ... */}
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* --- ADDED COMPONENT START --- */}
      <TechStack />
      {/* --- ADDED COMPONENT END --- */}

      {/* STATS STRIP */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between gap-8">
          {[
            { label: "Efficiency Gain", val: "40%+" },
            { label: "Data Security", val: "Military Grade" },
            { label: "Models Supported", val: "GPT-4 / Claude / Llama" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</span>
              <span className="text-2xl font-bold text-white">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}