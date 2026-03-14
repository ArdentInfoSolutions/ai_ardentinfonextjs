// app/TechStack.tsx
import { Cpu, Database, Globe, Layers } from 'lucide-react';

export function TechStack() {
  const stack = [
    { name: "Vector Specs", detail: "Pinecone / Milvus / Weaviate", icon: <Database size={18} /> },
    { name: "LLM Orchestration", detail: "LangChain / LlamaIndex / ArdentSDK", icon: <Layers size={18} /> },
    { name: "Model Access", detail: "OpenAI / Anthropic / Groq", icon: <Cpu size={18} /> },
    { name: "Deployment", detail: "Docker / Kubernetes / Vercel", icon: <Globe size={18} /> },
  ];

  return (
    <section className="py-20 px-8 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">The Ardent Stack</h2>
            <p className="text-slate-500 mt-2">Production-grade infrastructure for agentic workflows.</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent hidden md:block mx-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 transition-colors">
              <div className="text-purple-500 mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{item.name}</h3>
              <p className="text-slate-500 text-xs font-mono">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}