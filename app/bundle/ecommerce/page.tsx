'use client';

import { Check, ArrowRight, Zap, RefreshCcw, Bell } from 'lucide-react';
import Link from 'next/link';

export default function BundlePage() {
  const features = [
    { title: "E-commerce Website", website: true, bundle: true },
    { title: "Android Mobile App", website: false, bundle: true },
    { title: "iOS Mobile App", website: false, bundle: true },
    { title: "Real-time Sync", website: false, bundle: true },
    { title: "Push Notifications", website: false, bundle: true },
    { title: "Maintenance", website: "3 Months", bundle: "6 Months Free" },

  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
          Your Store Everywhere: <span className="text-brand">Web, Android & iOS</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Stop managing your site and app separately. Our E-Commerce + Flutter bundle 
          gives you a complete ecosystem with one unified backend.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-xl mb-24">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-6 text-slate-900 font-bold border-b border-slate-200">Feature</th>
              <th className="p-6 text-slate-500 font-bold border-b border-slate-200 text-center">Website Only</th>
              <th className="p-6 text-brand font-bold border-b border-slate-200 text-center bg-indigo-50/50">Ultimate Launch Bundle</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-6 font-medium text-slate-700">{f.title}</td>
                <td className="p-6 text-center">
                  {typeof f.website === 'boolean' ? (f.website ? <Check className="inline text-emerald-500" /> : <span className="text-slate-300">—</span>) : f.website}
                </td>
                <td className="p-6 text-center bg-indigo-50/30">
                  {typeof f.bundle === 'boolean' ? (f.bundle ? <Check className="inline text-brand" /> : '—') : <span className="text-brand font-bold">{f.bundle}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Value Proposition Grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCcw className="text-brand w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">One Backend</h3>
          <p className="text-slate-600">Update a product in E-Commerce, and it reflects instantly on the apps.</p>
        </div>
        <div className="text-center">
          <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell className="text-brand w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">Push Notifications</h3>
          <p className="text-slate-600">Bring customers back with free, direct-to-phone alerts for sales and cart reminders.</p>
        </div>
        <div className="text-center">
          <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="text-brand w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">Native Performance</h3>
          <p className="text-slate-600">Flutter-built apps that feel fast, smooth, and high-end on both iOS and Android.</p>
        </div>
        
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Brand?</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          We use real-world case studies like <strong>sumritanjan.com</strong> to show 
          you exactly how we launch successful multi-platform brands.
        </p>
        <Link href="/contact" className="bg-brand hover:bg-indigo-600 text-white px-10 py-4 rounded-full font-bold transition inline-flex items-center gap-2">
          Get a Custom Quote <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}