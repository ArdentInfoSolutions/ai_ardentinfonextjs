'use client';

import { useState, useEffect } from 'react';
import { Terminal, Command, Cpu, Sparkles } from 'lucide-react';

export function AgentPlayground() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="relative rounded-2xl bg-black border border-slate-800 shadow-2xl overflow-hidden group">
        
        {/* --- THE SCANNING EFFECT --- */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-scan" />
        </div>
        
        {/* Terminal Header */}
        <div className="bg-slate-900/50 px-3 md:px-4 py-3 border-b border-slate-800 flex items-center justify-between relative z-30">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
            </div>
            <div className="h-4 w-px bg-slate-800 mx-1 hidden xs:block" />
            <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-slate-400 font-mono truncate">
              <Cpu size={12} className="text-purple-500 shrink-0" />
              <span className="truncate">ENGINE: <span className="text-white">ARDENT-V4</span></span>
            </div>
          </div>
          <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2 shrink-0">
            <Terminal size={12} /> <span className="hidden xs:inline">Live_Session.log</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 md:p-6 font-mono text-xs sm:text-sm md:text-base space-y-4 min-h-[350px] relative z-10 overflow-x-hidden">
          {booting ? (
            <div className="flex items-center gap-2 text-slate-500">
              <span className="animate-spin text-purple-500">/</span> Initializing Secure AI Tunnel...
            </div>
          ) : (
            <div className="space-y-4 break-words">
              {/* User Prompt */}
              <div className="flex gap-2 md:gap-3 animate-in fade-in slide-in-from-left-2 duration-500">
                <span className="text-purple-500 font-bold shrink-0">~</span>
                <div className="flex flex-wrap gap-x-2">
                  <span className="text-slate-400 italic underline decoration-purple-500/30">user:</span>
                  <span className="text-white">"Analyze last quarter's PDFs and draft a security summary."</span>
                </div>
              </div>
              
              {/* Internal Action Log */}
              <div className="flex gap-2 md:gap-3 animate-in fade-in delay-700 duration-500">
                <span className="text-emerald-500 font-bold shrink-0">→</span>
                <span className="text-slate-400 text-xs md:text-sm">Ardent Core: Executing Parallel Retrieval...</span>
              </div>

              <div className="ml-2 md:ml-6 pl-3 md:pl-4 border-l border-slate-800 space-y-3 animate-in fade-in delay-1000 duration-700">
                <div className="flex items-start gap-2 text-emerald-400/80 text-[10px] md:text-xs">
                  <Command size={14} className="shrink-0 mt-0.5" /> 
                  <span className="break-all">[Action] query_vector_db(collection="fin_q4_2025")</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-400/80 text-[10px] md:text-xs">
                  <Command size={14} className="shrink-0 mt-0.5" /> 
                  <span className="break-all">[Action] map_reduce_summarize(context_window="128k")</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-2 md:gap-3 pt-2 animate-in fade-in delay-[2000ms] duration-1000">
                <span className="text-purple-500 font-bold shrink-0">~</span>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                   <span className="text-emerald-400 font-bold italic flex items-center gap-1 shrink-0">
                    <Sparkles size={14} /> ardent:
                  </span>
                  <span className="text-slate-200 leading-relaxed text-sm md:text-base">
                    Analysis complete. I found <span className="text-red-400 font-bold underline">3 critical vulnerabilities</span>.
                  </span>
                </div>
              </div>
              
              {/* Active Cursor */}
              <div className="pt-4 border-t border-slate-900/50 flex items-center gap-2 animate-in fade-in delay-[3000ms]">
                <span className="animate-pulse w-1.5 md:w-2 h-4 md:h-5 bg-purple-500" />
                <span className="text-slate-600 italic text-[10px] md:text-xs uppercase tracking-tight">Awaiting next instruction...</span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[60px] pointer-events-none" />
      </div>
    </section>
  );
}