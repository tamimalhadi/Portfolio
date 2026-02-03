
import React from 'react';
import { Navbar } from './components/Navbar';
import { SocialBar } from './components/SocialBar';
import { SOCIAL_LINKS, SERVICES } from './constants';
import { ChevronRight, Mail, MapPin, MousePointer2, Send } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <SocialBar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-start lg:items-center pt-16 lg:pt-24 pb-16 lg:pb-12 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-5%] left-[-10%] w-[25rem] lg:w-[40rem] h-[25rem] lg:h-[40rem] bg-indigo-600/10 rounded-full blur-[80px] lg:blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-10%] w-[30rem] lg:w-[50rem] h-[30rem] lg:h-[50rem] bg-purple-600/10 rounded-full blur-[80px] lg:blur-[160px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            
            {/* Hero Image Component - Positioned as background on mobile */}
            <div className="absolute inset-0 lg:relative lg:col-span-6 flex justify-center items-center pointer-events-none lg:pointer-events-auto opacity-20 lg:opacity-100 z-0 lg:z-10 animate-[fadeIn_1s_ease-out_forwards_0.3s]">
              <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl transform lg:scale-100 scale-125 lg:translate-y-0 -translate-y-10">
                {/* Aura Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-500/20 rounded-full blur-[60px] lg:blur-[100px] -z-10"></div>
                
                <div className="relative z-10 animate-[float_8s_ease-in-out_infinite]">
                  <img 
                    src="https://i.ibb.co.com/Kth8PKt/Gemini-Generated-Image-n1xz79n1xz79n1xz-removebg-preview.png" 
                    alt="Tamim Al Hadi Backdrop" 
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(79,70,229,0.4)] lg:drop-shadow-[0_45px_100px_rgba(79,70,229,0.5)] transition-all duration-700"
                  />
                </div>
                
                {/* Floating Status Badge - Hidden on mobile background mode to reduce clutter */}
                <div className="absolute top-[5%] -left-8 lg:-left-12 bg-[#1e293b]/95 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl animate-[float_6s_ease-in-out_infinite] z-30 hidden lg:block">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
                    </div>
                    <div>
                      <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-0.5">Status</p>
                      <p className="text-[10px] sm:text-sm font-bold text-slate-100 whitespace-nowrap">Ready to build</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[10%] -right-12 bg-indigo-600 px-8 py-3.5 rounded-2xl border border-white/20 hidden xl:block z-30 shadow-2xl -rotate-2">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Full Stack Creative</span>
                </div>
              </div>
            </div>

            {/* Hero Text Content - Overlayed on top on mobile */}
            <div className="lg:col-span-6 text-center lg:text-left z-20 relative pt-8 lg:pt-0">
              <div className="inline-block px-5 py-1.5 mb-4 lg:mb-8 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                <span className="text-indigo-400 font-mono text-[9px] sm:text-[11px] font-bold tracking-[0.3em] uppercase">Open to collaborations</span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold mb-6 lg:mb-8 leading-[0.9] tracking-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s] drop-shadow-2xl">
                Tamim <br />
                <span className="gradient-text">Al Hadi</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 lg:text-slate-400 mb-8 lg:mb-10 mx-auto lg:mx-0 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards_0.4s] font-medium lg:font-normal">
                A passionate creative mind dedicated to building immersive digital experiences and connecting with the global community.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards_0.6s]">
                <a href="#contact" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-bold flex items-center justify-center transition-all shadow-2xl shadow-indigo-600/40 active:scale-95 group/btn">
                  Get In Touch <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-40 hidden lg:flex" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">Explore</span>
            <MousePointer2 size={20} />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-[#1e293b]/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="aspect-square rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border-4 border-slate-700/30 shadow-3xl relative z-10 transition-all duration-700 group-hover:border-indigo-500/50">
                <img 
                  src="https://i.ibb.co.com/rfLZntRg/Gemini-Generated-Image-n1xz79n1xz79n1xz.png" 
                  alt="Tamim Al Hadi Portrait" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-full h-full bg-indigo-600/10 rounded-[2rem] lg:rounded-[3.5rem] -z-0 blur-xl group-hover:bg-indigo-600/20 transition-all"></div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 flex items-center justify-center md:justify-start">
                <span className="hidden md:block w-16 h-1.5 bg-indigo-500 mr-6 rounded-full"></span>
                About Me
              </h2>
              <div className="space-y-6 lg:space-y-8 text-slate-400 text-lg lg:text-xl leading-relaxed">
                <p>
                  I am a visionary creator who thrives at the intersection of technology and human connection. With a focus on modern aesthetics and seamless user experiences, I strive to leave a positive impact through every project I undertake.
                </p>
                <p>
                  My journey is driven by curiosity and a relentless pursuit of excellence. Whether it's coding a new platform, designing a brand identity, or engaging with my audience on social media, I bring 100% commitment and creativity.
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6 max-w-md mx-auto md:mx-0">
                  <div className="bg-[#0f172a] p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-800 transition-all hover:border-indigo-500/40 hover:shadow-2xl">
                    <h4 className="text-indigo-400 font-black text-3xl lg:text-4xl mb-1 lg:mb-2">50+</h4>
                    <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-500">Global Projects</p>
                  </div>
                  <div className="bg-[#0f172a] p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-800 transition-all hover:border-purple-500/40 hover:shadow-2xl">
                    <h4 className="text-purple-400 font-black text-3xl lg:text-4xl mb-1 lg:mb-2">100k+</h4>
                    <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-500">Audience Base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg lg:text-xl">Providing high-end digital solutions tailored to your unique needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-[#1e293b]/40 border border-slate-800 p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] hover:bg-[#1e293b] hover:-translate-y-3 transition-all duration-500 group">
                <div className="bg-[#0f172a] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-5">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base lg:text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/10 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] bg-indigo-500/10 rounded-full -mr-32 -mt-32 lg:-mr-64 lg:-mt-64 blur-[80px] lg:blur-[100px]"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to <br /><span className="gradient-text">scale up?</span></h2>
                <p className="text-lg lg:text-xl text-slate-300 mb-10 lg:mb-12 leading-relaxed">
                  Whether it's a bold new project or an existing platform upgrade, I'm here to bring your vision to life.
                </p>
                
                <div className="space-y-6 lg:space-y-10 max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center space-x-4 lg:space-x-6 text-left">
                    <div className="bg-indigo-600/20 p-4 lg:p-5 rounded-2xl border border-indigo-500/30 shrink-0"><Mail className="text-indigo-400" size={24} /></div>
                    <div>
                      <p className="text-[8px] lg:text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">Direct Email</p>
                      <p className="font-bold text-base lg:text-2xl text-slate-100 break-all">tamimalhadi.pro@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 lg:space-x-6 text-left">
                    <div className="bg-purple-600/20 p-4 lg:p-5 rounded-2xl border border-purple-500/30 shrink-0"><MapPin className="text-purple-400" size={24} /></div>
                    <div>
                      <p className="text-[8px] lg:text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">HQ Location</p>
                      <p className="font-bold text-base lg:text-2xl text-slate-100">Worldwide Remote</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:mt-16 flex flex-col items-center lg:items-start">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-6 lg:mb-8">Connect With Me</p>
                  <div className="flex space-x-4 lg:space-x-6">
                    {SOCIAL_LINKS.map(social => (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center bg-[#0f172a] border border-white/10 ${social.color} transition-all duration-300 hover:scale-110 active:scale-90 shadow-lg`}
                      >
                        <div className="scale-100 lg:scale-125">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a]/70 p-6 lg:p-14 rounded-[2rem] lg:rounded-[3rem] backdrop-blur-xl border border-white/10 shadow-3xl">
                <form className="space-y-5 lg:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Full Name</label>
                    <input type="text" className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl lg:rounded-2xl px-5 lg:px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-[#1e293b] transition-all text-base lg:text-lg" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Email Address</label>
                    <input type="email" className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl lg:rounded-2xl px-5 lg:px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-[#1e293b] transition-all text-base lg:text-lg" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Message</label>
                    <textarea rows={5} className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl lg:rounded-2xl px-5 lg:px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-[#1e293b] transition-all text-base lg:text-lg" placeholder="How can I help you today?"></textarea>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-4 lg:py-5 rounded-xl lg:rounded-2xl transition-all shadow-xl shadow-indigo-600/30 flex justify-center items-center group/send active:scale-95 text-base lg:text-lg">
                    Send Inquiry <Send size={20} className="ml-3 group-hover/send:translate-x-1 group-hover/send:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-20 border-t border-slate-800 bg-[#0f172a] relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-10">
          <div className="flex flex-col md:items-start items-center space-y-4">
            <p className="text-slate-500 max-w-xs text-center md:text-left text-xs sm:text-sm font-medium">Building bridges between technology and creativity.</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6 lg:space-x-10 text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <p className="text-slate-600 font-mono text-[10px] tracking-tighter">© {new Date().getFullYear()} TAMIM AL HADI PORTFOLIO CORE V2.10.0</p>
          </div>
        </div>
      </footer>

      {/* Global Animations & Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(1deg); }
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
