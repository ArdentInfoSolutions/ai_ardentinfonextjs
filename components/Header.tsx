'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from '../app/logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MAIN NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">      
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group z-[120]">
            <Logo className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col max-w-[150px] sm:max-w-none">
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

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <Link href="#solutions" className="hover:text-purple-400 transition">Solutions</Link>
            <Link href="/consultation" className="hover:text-purple-400 transition">Consultation</Link>
            <ThemeToggle />
            
            <Link href="/contact" className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all whitespace-nowrap shrink-0 shadow-lg shadow-purple-500/10">
              Get Started <ArrowRight size={16} className="shrink-0" />
            </Link>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex md:hidden items-center gap-4 z-[120]">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} className="text-purple-500" /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU - MOVED OUTSIDE NAV TO BREAK INHERITANCE */}
      <div 
        className={`fixed inset-0 z-[110] flex flex-col items-center justify-start pt-32 pb-10 gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 pointer-events-none invisible'
        }`}
        style={{ backgroundColor: '#020617' }} // Forced Solid Black-Blue
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-purple-500/50 text-[10px] uppercase tracking-[0.5em] font-bold">
            Secure Session Active
          </span>
        </div>

        <div className="flex flex-col items-center gap-10 w-full">
          <Link href="#solutions" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white tracking-tight">Solutions</Link>
          <Link href="/consultation" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white tracking-tight">Consultation</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white tracking-tight">Contact</Link>
        </div>

        <div className="w-24 h-px bg-slate-800 my-6" />

        <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl whitespace-nowrap shadow-2xl active:scale-95 transition-all">Get Started <ArrowRight className="text-purple-600 shrink-0" size={24} /></Link>


        <div className="mt-auto pb-8">
          <span className="text-slate-700 text-[9px] uppercase tracking-[0.4em] font-bold">
            Ardentinfo Intelligence Lab
          </span>
        </div>
      </div>
    </>
  );
}