'use client';

import { Rocket, Clock, ShieldCheck, Smartphone, Layout, Globe } from 'lucide-react';
import Link from 'next/link';

export default function EssentialApp() {
  const features = [
    { icon: <Smartphone />, title: "Digital Business Card", desc: "Showcase services, location, and social links." },
    { icon: <Layout />, title: "Custom Branding", desc: "Your logo, colors, and fonts on a native app." },
    { icon: <Globe />, title: "One-Page Website", desc: "A matching web landing page included." },
    { icon: <Clock />, title: "7-Day Launch", desc: "From concept to App Store submission in one week." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Launch Your Business App for unimaginable price.</h1>
        <p className="text-xl text-slate-600">Perfect for salons, gyms, freelancers, and local service providers. Get professional, native iOS and Android apps without the enterprise price tag.</p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-brand mb-4">{f.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
            <p className="text-sm text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing Card */}
      <div className="bg-white border-2 border-brand rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <span className="bg-brand/10 text-brand px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Limited Time Launch Offer</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-2">The Essential Starter</h2>
          <p className="text-slate-500">Everything you need to be visible on Android & iOS.</p>
          
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-2 text-slate-700 font-medium"><ShieldCheck size={18} className="text-brand" /> Native Flutter App (iOS + Android)</li>
            <li className="flex items-center gap-2 text-slate-700 font-medium"><ShieldCheck size={18} className="text-brand" /> Interactive Contact & Location Map</li>
            <li className="flex items-center gap-2 text-slate-700 font-medium"><ShieldCheck size={18} className="text-brand" /> Push Notifications </li>
          </ul>
        </div>
        
        <div className="text-center md:text-right">
          <div className="text-5xl font-bold text-slate-900 mb-2">Rs XXX</div>
          <p className="text-slate-500 mb-6 italic">Transparent, flat-fee pricing.</p>
          <Link href="/contact" className="bg-brand text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 transition shadow-lg inline-block">
            Start My Project
          </Link>
        </div>
      </div>
    </section>
  );
}