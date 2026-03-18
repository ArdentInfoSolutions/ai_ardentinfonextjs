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
      console.log('Execute recaptcha not yet available');
      return;
    }

    setStatus('loading');

    try {
      const token = await executeRecaptcha('consultation_form');
      const formData = new FormData(form);
      
      // We combine the selected tier with the message for the API
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: `[Service Focus: ${selected || 'General'}] \n\n ${formData.get('message')}`,
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
        setSelected(null);
      } else { 
        setStatus('error'); 
      }
    } catch (err) { 
      console.error('Submission Error:', err);
      setStatus('error'); 
    }
  }, [executeRecaptcha, selected]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] -z-10" />

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Technical <span className="text-purple-500">Consultation</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Select a focus area to begin your AI integration journey with our engineering team.
        </p>
      </div>

      {/* SERVICE SELECTION GRID */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {serviceTiers.map((tier) => (
          <button
            key={tier.title}
            type="button"
            onClick={() => setSelected(tier.title)}
            className={`text-left p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
              selected === tier.title 
              ? 'bg-purple-600/15 border-purple-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] scale-[1.02]' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform">{tier.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.desc}</p>
            
            <ul className="space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-purple-500" /> {f}
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
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20" />
        
        <form onSubmit={handleSubmit} className="relative bg-slate-900/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Rocket className="text-purple-500" size={24} /> 
            {selected ? `Inquiry for ${selected}` : "General Inquiry"}
          </h2>
          <p className="text-slate-500 text-sm mb-6 font-medium uppercase tracking-widest">Lab Intake Protocol</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Name</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="Work Email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Project Details</label>
            <textarea 
              required
              name="message"
              placeholder="Describe your current bottleneck or AI goal..." 
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>

          <button 
            disabled={status === 'loading'}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 group disabled:bg-slate-800 disabled:text-slate-500"
          >
            {status === 'loading' ? (
              <><Loader2 className="animate-spin" size={20} /> Processing...</>
            ) : (
              <>Schedule Engineering Sync <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
          </button>

          <p className="text-[10px] text-slate-600 text-center uppercase tracking-tighter">
            Security: reCAPTCHA v3 Active • ArdentInfo Lab Encryption Standard
          </p>

          {status === 'success' && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-in zoom-in-95">
              <p className="text-emerald-400 text-center text-sm font-bold tracking-tight">✓ Transmission Successful. Syncing with Lead Engineer.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl animate-in shake">
              <p className="text-rose-400 text-center text-sm font-bold tracking-tight">✕ Transmission Failed. Please check network status.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}