// app/AgentPlayground.tsx
'use client';
import { Terminal, Command } from 'lucide-react';

export function AgentPlayground() {
  return (
    <section className="py-20 px-8 max-w-5xl mx-auto">
      <div className="relative rounded-2xl bg-black border border-slate-800 shadow-2xl overflow-hidden group">
        
        {/* --- THE SCANNING EFFECT --- */}
        {/* We use a dedicated absolute container for the beam */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-scan" />
        </div>
        
        {/* Terminal Header */}
        <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-800 flex items-center justify-between relative z-30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
            <Terminal size={12} /> Ardent-Agent-v1.0
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base space-y-4 min-h-[300px] relative z-10">
          <div className="flex gap-3">
            <span className="text-purple-500 font-bold">~</span>
            <span className="text-slate-300 italic underline decoration-purple-500/30">user:</span>
            <span className="text-white">"Analyze last quarter's PDFs and draft a security summary."</span>
          </div>
          
          <div className="flex gap-3">
            <span className="text-emerald-500 font-bold">→</span>
            <span className="text-slate-400 animate-pulse">Scanning Ardent Knowledge Base...</span>
          </div>

          <div className="pl-6 border-l border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <Command size={14} /> [Action] Call: search_rag_engine()
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <Command size={14} /> [Action] Call: summarize_security_risks()
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-purple-500 font-bold">~</span>
            <span className="text-emerald-400 font-bold italic">ardent:</span>
            <span className="text-slate-300">
              Analysis complete. I found 3 critical vulnerabilities in your cloud-config.pdf.
            </span>
          </div>
          
          <div className="pt-4 border-t border-slate-900 flex items-center gap-2">
            <span className="animate-bounce w-2 h-5 bg-purple-500" />
            <span className="text-slate-600 italic">Waiting for input...</span>
          </div>
        </div>
      </div>
    </section>
  );
}