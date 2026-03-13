'use client';

import Link from 'next/link';
import { BrainCircuit, Zap, ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <BrainCircuit className="text-white" size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">
          Ardent<span className="text-indigo-500">AI</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <Link href="#services" className="hover:text-white transition">Capabilities</Link>
        <Link href="#case-studies" className="hover:text-white transition">Lab Results</Link>
        <Link href="https://ardentinfo.com" className="hover:text-white transition">Corporate Site</Link>
      </div>

      <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition flex items-center gap-2">
        Start Project <ArrowRight size={16} />
      </Link>
    </nav>
  );
}