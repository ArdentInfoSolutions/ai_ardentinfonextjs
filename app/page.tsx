import Link from 'next/link';
import { Sparkles, BrainCircuit, Rocket, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { AgentPlayground } from './AgentPlayground'; 
import { TechStack } from './TechStack'; 

export const metadata = {
  title: 'ArdentAI | Automating Enterprise Complexity',
  description: 'Custom AI infrastructure, RAG deployments, and autonomous agents for modern enterprises.',
};

const solutions = [
  {
    title: "Enterprise RAG",
    desc: "Chat with your documentation, PDFs, and databases with zero hallucinations.",
    icon: <Zap className="text-purple-400" size={24} />
  },
  {
    title: "AI Agents",
    desc: "Autonomous workflows that execute complex tasks across your entire enterprise software ecosystem.",
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
      <section className="relative pt-20 pb-16 px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        {/* Optimized GPU-accelerated background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10 transform-gpu" />
        
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs md:text-sm font-medium mb-8 animate-pulse">
            <Sparkles size={16} />
            <span>Deployment Ready for 2026</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter leading-[1.1] px-4">
            Automate <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">Complexity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Ardentinfo AI Lab engineers custom intelligence layers for modern enterprises. From LLM fine-tuning to autonomous agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link 
              href="/consultation" 
              className="bg-white text-black hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 justify-center shadow-xl shadow-white/5"
            >
              <BrainCircuit size={20} /> Request Technical Demo
            </Link>
          </div>
        </div>
      </section>

      {/* TERMINAL PLAYGROUND COMPONENT */}
      <AgentPlayground />

      {/* SOLUTIONS GRID */}
      <section id="solutions" className="py-24 px-6 md:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Proprietary AI infrastructure designed for high-stakes enterprise automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 transition-all hover:border-purple-500/50 hover:bg-slate-900/60"
            >
              {/* The Scan Overlay Logic */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-full w-full animate-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-slate-950 rounded-2xl w-fit border border-slate-800 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
                
                <Link 
                  href="/consultation" 
                  className="mt-8 flex items-center gap-2 text-sm font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300"
                >
                  Learn Technical Specs <Rocket size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK COMPONENT */}
      <TechStack />

      {/* STATS STRIP - Hardened for Mobile Scaling */}
      <section className="py-16 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4">
          {[
            { label: "Efficiency Gain", val: "40%+" },
            { label: "Data Security", val: "Military Grade" },
            { label: "Models Supported", val: "Open-Source / SOTA" }
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col ${i === 2 ? 'col-span-2 md:col-span-1 mt-4 md:mt-0' : ''}`}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-bold mb-2">
                {stat.label}
              </span>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}