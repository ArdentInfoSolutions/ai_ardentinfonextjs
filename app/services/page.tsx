'use client';

import { 
  Globe, 
  Smartphone, 
  Server, 
  Zap, 
  Database, 
  ShieldCheck 
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Enterprise Web Apps', desc: 'Scalable, SEO-optimized platforms built with Next.js and React for maximum performance.' },
    { title: 'Mobile Engineering', desc: 'Cross-platform excellence using Flutter and React Native to reach users on any device.' },
    { title: 'Cloud & Infrastructure', desc: 'Robust backend architectures and API design focused on security and infinite scalability.' },
    { title: 'AI & Automation', desc: 'Integrating Machine Learning and LLMs to streamline operations and unlock data insights.' },
    { title: 'Digital Transformation', desc: 'Modernizing legacy systems with cutting-edge tech stacks to keep your business ahead.' },
    { title: 'E-commerce Solutions', desc: 'High-conversion shopping experiences integrated with global payment and logistics providers.' }
  ];

  const techStacks = [
    { category: 'Web Development', icon: <Globe className="w-6 h-6 text-brand" />, techs: ['Next.js', 'React JS', 'Node.js', 'Ember.js', 'WordPress'] },
    { category: 'Mobile Apps', icon: <Smartphone className="w-6 h-6 text-brand" />, techs: ['Flutter', 'Swift', 'Android', 'Kotlin', 'React Native'] },
    { category: 'Backend & APIs', icon: <Server className="w-6 h-6 text-brand" />, techs: ['PHP (Laravel, CodeIgniter)', 'Java', 'Python (FastAPI)', 'Golang'] },
    { category: 'Emerging Tech', icon: <Zap className="w-6 h-6 text-brand" />, techs: ['Generative AI', 'ML/NLP', 'Computer Vision', 'Blockchain'] },
    { category: 'Data & Cloud', icon: <Database className="w-6 h-6 text-brand" />, techs: ['Data Engineering', 'AWS', 'CI/CD', 'DevOps'] },
    { category: 'Quality Assurance', icon: <ShieldCheck className="w-6 h-6 text-brand" />, techs: ['Test Automation', 'Selenium', 'Cypress', 'Cucumber BDD'] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">We combine technical mastery with strategic thinking to deliver solutions that drive measurable business growth.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-32">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand transition-all group">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-brand transition-colors">{s.title}</h3>
            <p className="text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Technology Stack</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Our specialized team utilizes industry-leading tools to build robust, scalable solutions tailored for global enterprises.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStacks.map((stack) => (
          <div key={stack.category} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand/50 transition-all group">
            <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:scale-110 transition-transform">{stack.icon}</div>
            <h3 className="text-xl font-semibold mb-6 text-slate-900">{stack.category}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.techs.map((tech) => (
                <span key={tech} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md text-xs font-medium">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}