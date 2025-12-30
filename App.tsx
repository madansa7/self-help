import React, { useEffect, useRef, useState } from 'react';
import { GUMROAD_LINK, HEADLINE_VARIATIONS, CTA_VARIATIONS, BUNDLE_CONTENTS } from './constants';
import { Button } from './components/Button';
import { ShieldCheck, Monitor, Smartphone, Download, CheckCircle2, XCircle, ArrowRight, Lock, Sparkles, Zap } from 'lucide-react';

const App: React.FC = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FAFAFA] text-slate-900">
      {/* Navigation - Simplified as requested */}
      <nav className="w-full max-w-7xl px-6 py-8 flex justify-between items-center bg-transparent z-50">
        <div className="text-2xl font-bold tracking-tighter text-slate-900 font-serif">SelfHelp4All</div>
        <div className="flex items-center gap-6">
          <Button href={GUMROAD_LINK} className="!py-2.5 !px-6 !text-sm !rounded-full shadow-lg shadow-slate-200">
            Access Now — $5
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-12 pb-24 flex flex-col items-center">
        <div className="text-center mb-16 reveal" ref={addToRefs}>
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-10 shadow-xl shadow-slate-200">
            <Lock size={14} className="text-amber-400" /> Limited Release — 2025 Final Call
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-10 leading-[1.05] font-bold max-w-5xl mx-auto tracking-tight">
            {HEADLINE_VARIATIONS[0]}
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A quiet, structured toolkit built for Indian professionals and students. No loud motivation. Just a simple system to help you start 2026 with clarity.
          </p>

          <div className="flex flex-col items-center gap-10">
            <div className="w-full md:w-auto">
               <Button href={GUMROAD_LINK} className="!w-full md:!w-auto !px-16 !py-6 !text-xl shadow-2xl hover:scale-105 transition-transform bg-slate-900 text-white">
                {CTA_VARIATIONS[0]} — $5
              </Button>
            </div>
            
            {/* High CTR Social Proof - Fixed Stack */}
            <div className="flex flex-row items-center gap-4 bg-white p-3 pr-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                     <img 
                       src={`https://i.pravatar.cc/100?u=user${i}`} 
                       alt="Customer" 
                       className="w-full h-full object-cover"
                     />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900">Joined by 4,200+ achievers</div>
                <div className="flex items-center gap-1">
                   {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>)}
                   <span className="text-[10px] text-slate-400 font-bold ml-1">4.9/5 RATING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Product Visual */}
        <div className="w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] reveal float-animation border-[12px] border-white" ref={addToRefs}>
          <div className="bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop" 
              alt="Digital Toolkit Preview" 
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Relatability & Problem Section */}
      <section className="w-full bg-white border-y border-slate-100 py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal" ref={addToRefs}>
            <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-2xl mb-8">
               <Sparkles size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">The "December Realization" is painful.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-serif italic">
              "We often start January with high hopes, only to find ourselves in December wondering where the months went."
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              It's not that you lacked motivation. You lacked a structure that actually fits your life. Most systems are built for robots, not for busy Indian students or working professionals.
            </p>
          </div>
          <div className="reveal" ref={addToRefs}>
             <div className="relative">
                <div className="absolute inset-0 bg-slate-900 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" 
                  alt="Man thinking" 
                  className="rounded-[3rem] shadow-lg w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* What's Included Section - Grid */}
      <section className="w-full max-w-7xl px-6 py-32">
        <div className="text-center mb-24 reveal" ref={addToRefs}>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Inside the Bundle</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Your 2026 Foundation</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUNDLE_CONTENTS.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal" 
              ref={addToRefs}
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Justification Section - NEW */}
      <section className="w-full bg-slate-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center reveal" ref={addToRefs}>
           <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden">
              <Zap className="absolute -top-6 -right-6 w-32 h-32 text-slate-50" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Wait, why only $5 (₹149)?</h2>
              <div className="h-1 w-20 bg-slate-900 mx-auto mb-10 rounded-full"></div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-left max-w-2xl mx-auto">
                <p>
                  You might be wondering if there's a catch. <strong>There isn't.</strong> We've priced this toolkit at the cost of a coffee for two simple reasons:
                </p>
                <ol className="list-decimal pl-6 space-y-4 font-medium text-slate-800">
                  <li>
                    <span className="text-slate-900">Zero Barriers:</span> We want to help 10,000+ people start 2026 with a plan. Removing the financial barrier makes it an "easy yes" for everyone.
                  </li>
                  <li>
                    <span className="text-slate-900">Relationship First:</span> We know that if you get massive value from this $5 toolkit, you'll trust us for years to come. It's our way of proving we can help you by actually helping you.
                  </li>
                </ol>
              </div>
              <div className="mt-12 flex flex-col items-center">
                 <Button href={GUMROAD_LINK} className="!px-12">
                   Get The Bundle for $5
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Final Pricing Section */}
      <section className="w-full max-w-5xl px-6 py-40 text-center reveal" ref={addToRefs}>
        <div className="bg-slate-900 text-white p-12 md:p-28 rounded-[5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-serif italic">Your 2026 starts today.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto font-medium">
              Don't wait for January 1st to panic. Grab the digital system and start your quiet reset tonight.
            </p>
            
            <div className="mb-10">
              <span className="text-7xl font-bold block mb-2">$5</span>
              <span className="text-slate-500 line-through text-2xl font-medium tracking-tight">Regularly $29</span>
            </div>

            <Button href={GUMROAD_LINK} className="!bg-white !text-slate-900 !px-20 !py-6 !text-2xl shadow-xl hover:scale-105 transition-transform">
              Complete Digital Access
            </Button>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-80">
               <div className="flex items-center gap-2"><ShieldCheck size={18} /> Secure Checkout</div>
               <div className="flex items-center gap-2"><Download size={18} /> Instant Download</div>
               <div className="flex items-center gap-2"><Monitor size={18} /> PDF Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-24 px-6 border-t border-slate-100 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-bold font-serif text-slate-900 mb-6">SelfHelp4All</p>
          <p className="text-slate-400 font-medium mb-12">Helping you build a life you don't need a vacation from.</p>
          <div className="flex justify-center gap-12 text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
             <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
          </div>
          <p className="mt-16 text-[10px] text-slate-300 max-w-lg mx-auto leading-relaxed font-bold uppercase tracking-tight">
            © 2024–2025. All rights reserved. Results vary based on individual consistency. This is a digital product delivered via Gumroad.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-6 left-0 w-full px-6 z-[100] transition-transform duration-500 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-24'}`}>
         <Button href={GUMROAD_LINK} className="!w-full !py-5 shadow-2xl !rounded-2xl !bg-slate-900 !text-white border-2 border-slate-800">
            Get Access Now — $5
         </Button>
      </div>
    </div>
  );
};

export default App;