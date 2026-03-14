// app/layout.tsx
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider'; 
import { Header } from '../components/Header';

export const metadata = {
  title: 'ArdentAI | Intelligence Lab',
  description: 'Custom AI solutions for modern enterprises.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden relative">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          
          {/* Global Background Effects */}
          <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>
          <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <Header />

          <main className="relative z-10">
            {children}
          </main>
          
          <footer className="relative z-10 py-12 text-center text-slate-600 text-sm border-t border-slate-900/50 mt-20">
            <p>© {new Date().getFullYear()} Ardentinfo Solutions • AI Research Division</p>
          </footer>

        </ThemeProvider>
      </body>
    </html>
  );
}