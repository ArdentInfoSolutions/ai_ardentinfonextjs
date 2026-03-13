export function Footer() {
    return (
      <footer className="border-t border-slate-800 py-12 mt-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ardentinfo Solutions. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest">
            <span className="text-slate-400">Mohali • Chandigarh • India</span>
          </div>
        </div>
      </footer>
    );
  }