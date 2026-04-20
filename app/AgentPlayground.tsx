'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Command, Cpu, Sparkles } from 'lucide-react';

export function AgentPlayground() {
  const [booting, setBooting] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  // Trigger animation only when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasStarted) {
      const timer = setTimeout(() => setBooting(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [hasStarted]);

  return (
    <section 
      ref={containerRef}
      className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto overflow-hidden scroll-mt-24"
    >
      <div className="relative rounded-2xl bg-black border border-slate-800 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] overflow-hidden group">
        
        {/* --- SCANNING EFFECT --- */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-scan" />
        </div>
        
        {/* Terminal Header */}
        <div className="bg-slate-900/50 px-3 md:px-4 py-3 border-b border-slate-800 flex items-center justify-between relative z-30">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/60" />
            </div>
            <div className="h-4 w-px bg-slate-800 mx-1 hidden xs:block" />
            <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-slate-400 font-mono truncate">
              <Cpu size={12} className="text-purple-500 shrink-0" />
              <span className="truncate uppercase tracking-widest">System: <span className="text-white">ARDENT-V4-CORE</span></span>
            </div>
          </div>
          <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <Terminal size={12} /> <span className="hidden xs:inline">Live_Session.log</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 md:p-8 font-mono text-xs sm:text-sm md:text-base space-y-5 min-h-[380px] relative z-10 overflow-x-hidden">
          {!hasStarted || booting ? (
            <div className="flex items-center gap-3 text-slate-500 italic">
              <span className="animate-spin text-purple-500">/</span> 
              {hasStarted ? "Initializing Secure AI Tunnel..." : "Awaiting Terminal Input..."}
            </div>
          ) : (
            <div className="space-y-5 animate-in fade-in duration-700">
              {/* User Prompt */}
              <div className="flex gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                <span className="text-purple-500 font-bold shrink-0 select-none">❯</span>
                <div className="flex flex-wrap gap-x-2">
                  <span className="text-slate-400 italic font-semibold">user:</span>
                  <span className="text-slate-100">"Analyze last quarter's PDFs and draft a security summary."</span>
                </div>
              </div>
              
              {/* Internal Action Log */}
              <div className="flex gap-3 animate-in fade-in delay-500 duration-500">
                <span className="text-emerald-500 font-bold shrink-0 select-none">→</span>
                <span className="text-slate-400 text-xs md:text-sm">Ardent Core: Executing Parallel RAG Retrieval...</span>
              </div>

              {/* Sub-Actions */}
              <div className="ml-4 md:ml-8 pl-4 border-l border-slate-800 space-y-3 animate-in fade-in delay-1000 duration-1000">
                <div className="flex items-start gap-3 text-emerald-400/70 text-[10px] md:text-xs">
                  <Command size={14} className="shrink-0 mt-0.5" /> 
                  <span className="break-all font-mono opacity-80">query_vector_db(collection="security_q4")</span>
                </div>
                <div className="flex items-start gap-3 text-emerald-400/70 text-[10px] md:text-xs">
                  <Command size={14} className="shrink-0 mt-0.5" /> 
                  <span className="break-all font-mono opacity-80">cross_reference_threat_intel(api="v1")</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 pt-2 animate-in fade-in delay-[2200ms] duration-1000">
                <span className="text-purple-500 font-bold shrink-0 select-none">❯</span>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                   <span className="text-emerald-400 font-bold italic flex items-center gap-1 shrink-0">
                    <Sparkles size={14} /> ardent:
                  </span>
                  <span className="text-slate-200 leading-relaxed text-sm md:text-base">
                    Analysis complete. Identified <span className="text-rose-400 font-bold underline decoration-rose-500/30">3 critical vulnerabilities</span> in cloud-config.pdf.
                  </span>
                </div>
              </div>
              
              {/* Active Cursor */}
              <div className="pt-6 border-t border-slate-900/50 flex items-center gap-3 animate-in fade-in delay-[3500ms]">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-slate-600 italic text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                    Awaiting instructions...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[80px] pointer-events-none rounded-full" />
      </div>
    </section>
  );
}