export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-24">
      <h2 className="text-brand font-semibold mb-4 uppercase tracking-wider text-sm">Who We Are</h2>
      <h3 className="text-4xl font-bold mb-8 text-slate-900">About ArdentInfo Solutions</h3>
      
      <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
        <p className="font-medium text-slate-800">
          ArdentInfo Solutions is a solution-driven company supplying to customer needs 
          conforming to IT Industry requirements.
        </p>
        
        <p>
          At ArdentInfo Solutions, we are passionate about turning your ideas into exceptional digital experiences. 
          As a leading mobile app development company, we specialize in creating custom solutions across a wide 
          range of platforms and technologies.
        </p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-slate-900 font-bold mb-4">Unparalleled Flexibility</h4>
          <p>
            Being a privately owned and self-funded company, ArdentInfo Solutions is able to offer greater 
            flexibility in the type of outsourcing relationships it engages in. We work with each client 
            individually to assess the amount of involvement the client requires and determine the best 
            relationship for the outsourcing arrangement – fully outsourced, co-sourcing, leased workstations, etc. 
            This flexibility allows us to evolve long-term relationships with clients.
          </p>
        </div>

        <p className="border-l-4 border-brand pl-6 italic text-slate-700">
          Quality is the key to success, and we at ArdentInfo Solutions are totally committed to this.
        </p>

      </div>
    </section>
  );
}