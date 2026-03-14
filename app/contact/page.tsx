'use client';

import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
      const token = await executeRecaptcha('contact_form');
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
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
      } else { 
        setStatus('error'); 
      }
    } catch (err) { 
      console.error('Submission Error:', err);
      setStatus('error'); 
    }
  }, [executeRecaptcha]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] -z-10" />

      <div className="grid md:grid-cols-2 gap-16 mb-16 items-center">
        {/* COLUMN 1: INFORMATION */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-white tracking-tight">
            Design Your <span className="text-purple-500">AI Strategy</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            Ready to integrate custom LLMs or autonomous agents into your workflow? 
            Our engineers are standing by for technical consulting and deployment.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-purple-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest">Lab Headquarters</h3>
                <p className="text-slate-400">STPI Incubation Center, Mohali, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-purple-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest">Technical Inquiries</h3>
                <p className="text-slate-400">sales@ardentinfo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: THE FORM */}
        <div className="relative group">
          {/* Animated border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <form onSubmit={handleSubmit} className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
              <input required id="name" name="name" type="text" placeholder="John Doe" className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500/50 outline-none transition text-white placeholder:text-slate-700" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Work Email</label>
              <input required id="email" name="email" type="email" placeholder="john@enterprise.com" className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500/50 outline-none transition text-white placeholder:text-slate-700" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Brief</label>
              <textarea required id="message" name="message" rows={4} placeholder="Tell us about your AI requirements..." className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500/50 outline-none transition text-white placeholder:text-slate-700" />
            </div>
            
            <button 
              disabled={status === 'loading'} 
              className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all w-full flex items-center justify-center gap-2"
            >
              {status === 'loading' ? 'Encrypting & Sending...' : <><Send size={18} /> Initiate Contact</>}
            </button>
            
            <p className="text-[10px] text-slate-500 mt-4 text-center">
              Protected by reCAPTCHA. <a href="#" className="underline">Privacy</a> & <a href="#" className="underline">Terms</a>
            </p>

            {status === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 text-center text-sm font-medium">Transmission successful. Our lab will respond shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-rose-400 text-center text-sm font-medium">Transmission failed. Please check your connection.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}