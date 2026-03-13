'use client';

import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // CRITICAL FIX: Capture the form element immediately before any 'await'
    const form = e.currentTarget; 

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    setStatus('loading');

    try {
      // Generate reCAPTCHA token (this is where the 'await' happens)
      const token = await executeRecaptcha('contact_form');

      // Use the captured 'form' variable instead of e.currentTarget
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
        form.reset(); // Use the captured form reference to reset
      } else { 
        setStatus('error'); 
      }
    } catch (err) { 
      console.error('Submission Error:', err);
      setStatus('error'); 
    }
  }, [executeRecaptcha]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* COLUMN 1: INFORMATION */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Let's Connect</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Partner with Ardentinfo Solutions to accelerate your digital growth. 
            Reach out for technical consulting, project inquiries, or custom 
            software development.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-brand font-semibold uppercase tracking-wider text-sm mb-2">Office Address</h3>
              <p className="text-slate-700 font-medium">
                STPI Incubation Center<br />
                Mohali, Punjab - 140307 
              </p>
            </div>
            <div>
              <h3 className="text-brand font-semibold uppercase tracking-wider text-sm mb-2">Email</h3>
              <p className="text-slate-700 font-medium">sales@ardentinfo.com</p>
            </div>
          </div>
        </div>

        {/* COLUMN 2: THE FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
            <input required id="name" name="name" type="text" className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand outline-none transition text-slate-900" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
            <input required id="email" name="email" type="email" className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand outline-none transition text-slate-900" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
            <textarea required id="message" name="message" rows={4} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand outline-none transition text-slate-900" />
          </div>
          
          <button 
            disabled={status === 'loading'} 
            className="bg-brand hover:bg-indigo-600 disabled:bg-slate-300 text-white px-8 py-4 rounded-xl font-medium transition w-full shadow-sm"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          
          <p className="text-[10px] text-slate-400 mt-4 leading-tight">
            This site is protected by reCAPTCHA and the Google 
            <a href="https://policies.google.com/privacy" className="underline ml-1" target="_blank">Privacy Policy</a> and 
            <a href="https://policies.google.com/terms" className="underline ml-1" target="_blank">Terms of Service</a> apply.
          </p>

          {status === 'success' && <p className="text-emerald-600 text-center text-sm font-medium">Message sent successfully!</p>}
          {status === 'error' && <p className="text-rose-600 text-center text-sm font-medium">Error sending message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}