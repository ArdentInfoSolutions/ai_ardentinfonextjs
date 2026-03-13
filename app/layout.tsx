import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider'; // Fixed path to one level up
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    // We remove <html> and <body> because they are inherited from the root app/layout.tsx
    // We wrap everything in a div to apply the specific AI styling
    <div className="bg-slate-950 text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
        
        {/* Subtle Grid Overlay - Fixed position so it stays behind content */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Navigation */}
        <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <BrainCircuit className="text-purple-500 group-hover:rotate-12 transition-transform" size={28} />
            <span className="font-bold text-xl tracking-tighter uppercase">
              Ardent<span className="text-purple-500">AI</span>
            </span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Consultation</Link>
          </div>
        </nav>

        {/* Content Area */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-12 text-center text-slate-600 text-sm border-t border-slate-900/50 mt-20">
          <p>© {new Date().getFullYear()} Ardentinfo Solutions • AI Research Division</p>
        </footer>

      </ThemeProvider>
    </div>
  );
}