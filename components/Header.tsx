// app/Header.tsx
'use client';

import Link from 'next/link';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-purple-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <BrainCircuit className="text-white" size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight text-white uppercase italic">
          Ardent<span className="text-purple-500">AI</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
        <Link href="#solutions" className="hover:text-purple-400 transition">Solutions</Link>
        <Link href="/consultation" className="hover:text-purple-400 transition">Consultation</Link>
        <ThemeToggle />
      </div>

      <Link href="/contact" className="hidden sm:flex bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all items-center gap-2 shadow-lg shadow-purple-500/10">
        Get Started <ArrowRight size={16} />
      </Link>
    </nav>
  );
}