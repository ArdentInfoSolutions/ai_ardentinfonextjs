'use client';

import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Brain, MessageSquare, Shield, Rocket, CheckCircle2, Send, Loader2 } from 'lucide-react';

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; 

    if (!executeRecaptcha) {
      console.error('reCAPTCHA not initialized');
      return;
    }

    setStatus('loading');

    try {
      const token = await executeRecaptcha('consultation_form');
      const formData = new FormData(form);
      
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: `[Service Focus: ${selected || 'General Inquiry'}] \n\nBrief: ${formData.get('message')}`,
        recaptchaToken: token,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset(); 
        // Keep success message visible for 5 seconds then reset status
        setTimeout(() => setStatus('idle'), 5000);
      } else { 
        setStatus('error'); 
      }
    } catch (err) { 
      console.error('Submission Error:', err);
      setStatus('error'); 
    }
  }, [executeRecaptcha, selected]);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] -z-10 animate-pulse" />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">
          Technical <span className="text-purple-500">Consultation</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Select a focus area to begin your AI integration journey with our engineering team.
        </p>
      </div>

      {/* SERVICE SELECTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {serviceTiers.map((tier) => (
          <button
            key={tier.title}
            type="button"
            onClick={() => setSelected(tier.title)}
            className={`text-left p-6 md:p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
              selected === tier.title 
              ? 'bg-purple-600/15 border-purple-500 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] scale-[1.02]' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
            }`}
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {tier.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.desc}</p>
            
            <ul className="space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-purple-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>

            {selected === tier.title && (
              <div className="absolute top-6 right-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* INTAKE FORM */}
      <div className="max-w-2xl mx-auto relative group">
        {/* Decorative Glow behind form */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
        
        <form 
          onSubmit={handleSubmit} 
          className="relative bg-slate-950/50 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Rocket className="text-purple-500" size={24} /> 
              {selected ? `Inquiry: ${selected}` : "General Inquiry"}
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Lab Intake Protocol</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="e.g. John Doe" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Work Email</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Project Requirements</label>
            <textarea 
              required
              name="message"
              placeholder="Describe your current infrastructure bottleneck or AI objectives..." 
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-700 resize-none"
            />
          </div>

          <button 
            disabled={status === 'loading'}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 group disabled:bg-slate-800 disabled:text-slate-500 active:scale-95"
          >
            {status === 'loading' ? (
              <><Loader2 className="animate-spin" size={20} /> Securing Transmission...</>
            ) : (
              <>Initialize Engineering Sync <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
          </button>

          <div className="pt-4">
             <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest leading-relaxed">
              Protected by reCAPTCHA v3 <br /> 
              ArdentInfo Labs Data Privacy Standard 2026
            </p>
          </div>

          {/* Toast Notifications */}
          {status === 'success' && (
            <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-in zoom-in-95 duration-300">
              <p className="text-emerald-400 text-center text-sm font-bold">
                ✓ Transmission Received. A lead engineer will reach out shortly.
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl animate-in shake duration-300">
              <p className="text-rose-400 text-center text-sm font-bold">
                ✕ Transmission Error. Please verify connection and retry.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}