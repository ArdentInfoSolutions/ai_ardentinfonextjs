// app/Header.tsx
'use client';

import Link from 'next/link';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';
import { Logo } from '../app/logo';

export function Header() {
  return (
<nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/70 backdrop-blur-md border-b border-white/5">
  <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">      
  <Link href="/" className="flex items-center gap-3 group">
  {/* The Icon: We use a larger w-14 here */}
  <Logo className="w-28 h-28 transition-transform duration-300 group-hover:scale-110" />
  
  {/* The Text: High-visibility white and purple */}
  <div className="flex flex-col">
    <span className="text-4xl font-black tracking-tighter text-purple-500 leading-none">
      A<span className="text-white">rdent</span>
      <span className="text-purple-500">I</span>
      <span className="text-white">nfo</span>
    </span>
    <span className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">
      Intelligence Lab
    </span>
  </div>
</Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
        <Link href="#solutions" className="hover:text-purple-400 transition">Solutions</Link>
        <Link href="/consultation" className="hover:text-purple-400 transition">Consultation</Link>
        <ThemeToggle />
      </div>

      <Link href="/contact" className="hidden sm:flex bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all items-center gap-2 shadow-lg shadow-purple-500/10">
        Get Started <ArrowRight size={16} />
      </Link>
      </div>
    </nav>
  );
}