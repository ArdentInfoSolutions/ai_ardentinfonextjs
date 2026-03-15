'use client';

import { useState } from 'react';
import { Brain, MessageSquare, Shield, Rocket, CheckCircle2 } from 'lucide-react';

const serviceTiers = [
  {
    title: "AI Strategy Audit",
    desc: "We analyze your current tech stack and identify high-impact automation opportunities.",
    icon: <Brain className="text-purple-500" size={32} />,
    features: ["Workflow Mapping", "ROI Projection", "Model Selection"]
  },
  {
    title: "Custom RAG Deployment",
    desc: "Transform your internal documents into a private, searchable intelligence base.",
    icon: <MessageSquare className="text-indigo-500" size={32} />,
    features: ["Vector DB Setup", "Zero-Hallucination Tuning", "Source Attribution"]
  },
  {
    title: "On-Premise LLM",
    desc: "Deploy powerful models on your own hardware for maximum data security.",
    icon: <Shield className="text-emerald-500" size={32} />,
    features: ["Llama/Mistral Setup", "Air-gapped Security", "Hardware Optimization"]
  }
];

export default function ConsultationPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Technical <span className="text-purple-500">Consultation</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Select a focus area to begin your AI integration journey with our engineering team.
        </p>
      </div>

      {/* SERVICE SELECTION GRID */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {serviceTiers.map((tier) => (
          <button
            key={tier.title}
            onClick={() => setSelected(tier.title)}
            className={`text-left p-8 rounded-3xl border transition-all relative overflow-hidden group ${
              selected === tier.title 
              ? 'bg-purple-600/10 border-purple-500 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="mb-6">{tier.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.desc}</p>
            
            <ul className="space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-purple-500" /> {f}
                </li>
              ))}
            </ul>

            {selected === tier.title && (
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* INTAKE FORM REDIRECT / SIMPLE VERSION */}
      <div className="max-w-2xl mx-auto bg-slate-900/50 border border-white/5 p-10 rounded-3xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Rocket className="text-purple-500" size={24} /> 
          {selected ? `Inquiry for ${selected}` : "General Inquiry"}
        </h2>
        
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input 
              type="email" 
              placeholder="Work Email" 
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <textarea 
            placeholder="Describe your current bottleneck or AI goal..." 
            rows={4}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all shadow-xl">
            Schedule Engineering Sync
          </button>
        </form>
      </div>
    </section>
  );
}