'use client';

import { useState, useEffect } from 'react';
import { Terminal, Command, Cpu, Sparkles } from 'lucide-react';

export function AgentPlayground() {
  const [booting, setBooting] = useState(true);

  // Simulate a "booting" sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-8 max-w-5xl mx-auto">
      <div className="relative rounded-2xl bg-black border border-slate-800 shadow-2xl overflow-hidden group">
        
        {/* --- THE SCANNING EFFECT --- */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-scan" />
        </div>
        
        {/* Terminal Header */}
        <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-800 flex items-center justify-between relative z-30">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
            </div>
            <div className="h-4 w-px bg-slate-800 mx-1" />
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
              <Cpu size={12} className="text-purple-500" />
              <span>ENGINE: <span className="text-white">ARDENT-ORCHESTRATOR-V4</span></span>
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
            <Terminal size={12} /> Live_Session.log
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base space-y-4 min-h-[350px] relative z-10 transition-opacity duration-500">
          {booting ? (
            <div className="flex items-center gap-2 text-slate-500">
              <span className="animate-spin text-purple-500">/</span> Initializing Secure AI Tunnel...
            </div>
          ) : (
            <>
              {/* User Prompt */}
              <div className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-500">
                <span className="text-purple-500 font-bold">~</span>
                <span className="text-slate-400 italic underline decoration-purple-500/30">user:</span>
                <span className="text-white">"Analyze last quarter's PDFs and draft a security summary."</span>
              </div>
              
              {/* Internal Action Log */}
              <div className="flex gap-3 animate-in fade-in delay-700 duration-500">
                <span className="text-emerald-500 font-bold">→</span>
                <span className="text-slate-400">Ardent Core: Executing Parallel Retrieval...</span>
              </div>

              <div className="pl-6 border-l border-slate-800 space-y-3 animate-in fade-in delay-1000 duration-700">
                <div className="flex items-center gap-3 text-emerald-400/80 text-xs">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <Command size={14} /> [Action] query_vector_db(collection="fin_q4_2025")
                </div>
                <div className="flex items-center gap-3 text-emerald-400/80 text-xs">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <Command size={14} /> [Action] map_reduce_summarize(context_window="128k")
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 pt-2 animate-in fade-in delay-[2000ms] duration-1000">
                <span className="text-purple-500 font-bold">~</span>
                <span className="text-emerald-400 font-bold italic flex items-center gap-1">
                  <Sparkles size={14} /> ardent:
                </span>
                <span className="text-slate-200 leading-relaxed">
                  Analysis complete. I found <span className="text-red-400 font-bold underline">3 critical vulnerabilities</span> in 
                  <code className="bg-slate-900 px-1 rounded mx-1 text-purple-300">cloud-config.pdf</code>. 
                  Summary ready for Jira export.
                </span>
              </div>
              
              {/* Active Cursor */}
              <div className="pt-4 border-t border-slate-900/50 flex items-center gap-2 animate-in fade-in delay-[3000ms]">
                <span className="animate-pulse w-2 h-5 bg-purple-500" />
                <span className="text-slate-600 italic text-xs">Awaiting next instruction...</span>
              </div>
            </>
          )}
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[60px] pointer-events-none" />
      </div>
    </section>
  );
}