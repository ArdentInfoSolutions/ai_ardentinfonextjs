import { Cpu, Database, Globe, Layers } from 'lucide-react';

export function TechStack() {
  const stack = [
    { name: "Vector Specs", detail: "Pinecone / Milvus / Weaviate", icon: <Database size={18} /> },
    { name: "LLM Orchestration", detail: "LangChain / LlamaIndex", icon: <Layers size={18} /> },
    { name: "Model Access", detail: "OpenAI / Anthropic / Groq", icon: <Cpu size={18} /> },
    { name: "Deployment", detail: "Docker / K8s / Vercel", icon: <Globe size={18} /> },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 border-t border-white/5 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-4">
          <div className="max-w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Ardent Stack</h2>
            <p className="text-slate-500 mt-2 text-sm md:text-base leading-relaxed">
              Production-grade infrastructure for agentic workflows.
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent hidden md:block mx-8" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((item, i) => (
            <div 
              key={i} 
              className="p-5 md:p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/40 transition-all hover:border-purple-500/30 group"
            >
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">{item.name}</h3>
              {/* Added break-words and hyphenate to prevent overflow */}
              <p className="text-slate-500 text-xs font-mono leading-relaxed break-words">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}