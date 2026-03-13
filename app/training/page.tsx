'use client';

import { Smartphone, Code2, Terminal, BookOpen } from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      title: 'Full-Stack Flutter Development',
      icon: <Smartphone className="w-6 h-6 text-brand" />,
      desc: 'Master cross-platform mobile development with Flutter and Dart, integrated with a robust Node.js and TypeScript backend.',
      features: ['State Management', 'REST API Integration', 'Node/TS Backend', 'Deployment']
    },
    {
      title: 'iOS Native (Swift) Training',
      icon: <Code2 className="w-6 h-6 text-brand" />,
      desc: 'Deep dive into native iOS development using Swift and SwiftUI. Learn to build high-performance apps for the Apple ecosystem.',
      features: ['Swift Fundamentals', 'SwiftUI/UIKit', 'App Store Guidelines', 'Native APIs']
    },
    {
      title: 'Python Programming Courses',
      icon: <Terminal className="w-6 h-6 text-brand" />,
      desc: 'From core basics to advanced automation and web frameworks like FastAPI and Django.',
      features: ['Data Structures', 'Automation Scripts', 'Web Frameworks', 'AI/ML Basics']
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-brand px-4 py-2 rounded-full mb-4">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Education & Upskilling</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Professional Training Programs</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Empowering the next generation of developers with hands-on, industry-standard technical training.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {trainingPrograms.map((program) => (
          <div key={program.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit text-brand">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{program.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{program.desc}</p>
            <div className="space-y-2">
              {program.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {feature}
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}