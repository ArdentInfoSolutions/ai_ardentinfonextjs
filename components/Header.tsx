'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react'; // Ensure Menu and X are here
import { ThemeToggle } from './ThemeToggle';
import { Logo } from '../app/logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">      
        
        {/* LOGO - Responsive sizes */}
        <Link href="/" className="flex items-center gap-2 group z-[120]">
          <Logo className="w-12 h-12 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" />
          {/* Inside Header.tsx */}
        <div className="flex flex-col max-w-[150px] sm:max-w-none"> {/* Clamps the text width */}
          <span className="text-lg md:text-xl font-black tracking-tighter text-purple-500 leading-none truncate">
            A<span className="text-white">rdent</span>
            <span className="text-purple-500">I</span>
            <span className="text-white">nfo</span>
          </span>
          <span className="hidden xs:block text-[8px] md:text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase truncate">
            Intelligence Lab
          </span>
        </div>
        </Link>

        {/* DESKTOP NAV - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <Link href="#solutions" className="hover:text-purple-400 transition">Solutions</Link>
          <Link href="/consultation" className="hover:text-purple-400 transition">Consultation</Link>
          <ThemeToggle />
          <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all items-center gap-2 shadow-lg shadow-purple-500/10">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* MOBILE BUTTON - Only visible on small screens */}
        <div className="flex md:hidden items-center gap-4 z-[120]">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Logic to switch icons */}
            {isOpen ? <X size={32} className="text-purple-500" /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {/* MOBILE OVERLAY MENU */}
<div className={`fixed inset-0 bg-[#020617] z-[150] flex flex-col items-center justify-start pt-32 pb-10 gap-8 transition-all duration-500 ease-in-out md:hidden ${
  isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
}`}>
  
  {/* Add a subtle glow at the top to give it some depth without transparency */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

  <span className="text-purple-500/50 text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
    System Navigation
  </span>

  <div className="flex flex-col items-center gap-8 w-full">
    <Link 
      href="#solutions" 
      onClick={() => setIsOpen(false)}
      className="text-4xl font-bold text-white hover:text-purple-400 transition-all"
    >
      Solutions
    </Link>
    
    <Link 
      href="/consultation" 
      onClick={() => setIsOpen(false)}
      className="text-4xl font-bold text-white hover:text-purple-400 transition-all"
    >
      Consultation
    </Link>

    <Link 
      href="/contact" 
      onClick={() => setIsOpen(false)}
      className="text-4xl font-bold text-white hover:text-purple-400 transition-all"
    >
      Contact
    </Link>
  </div>

  <div className="w-16 h-px bg-slate-800 my-4" />

  <Link 
    href="/contact" 
    onClick={() => setIsOpen(false)}
    className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)] active:scale-95 transition-all"
  >
    Get Started <ArrowRight className="text-purple-600" size={20} />
  </Link>

  {/* Footer Section */}
  <div className="mt-auto pb-10 flex flex-col items-center gap-4">
    <div className="flex gap-4">
       <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse delay-75" />
       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-150" />
    </div>
    <span className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">
      Ardentinfo Intelligence Lab
    </span>
  </div>
</div>

      </div>
    </nav>
  );
}