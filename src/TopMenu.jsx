import React, { useState, useEffect, memo } from 'react';

const HudLeft = () => (
  <div className="h-full flex flex-col justify-between border-l border-[#AF8C13]/20 pl-6">
    <div className="space-y-1">
      <p className="text-[#AF8C13] text-[10px] tracking-[0.3em] font-black mb-1 uppercase">Service Status</p>
      <p className="text-white text-[12px] tracking-widest font-mono">ONLINE / READY</p>
    </div>
    <div className="space-y-4">
      <div className="w-1 h-32 bg-zinc-900 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1/2 bg-[#AF8C13] animate-pulse" />
      </div>
      <p className="text-zinc-600 text-[8px] [writing-mode:vertical-rl] uppercase tracking-[0.5em] rotate-180">Atmospheric Pressure</p>
    </div>
  </div>
);

const HudRight = () => (
  <div className="h-full flex flex-col justify-between items-end border-r border-[#AF8C13]/20 pr-6">
    <div className="text-right">
      <p className="text-[#AF8C13] text-[10px] tracking-[0.3em] font-black mb-1 uppercase">Current Project</p>
      <p className="text-white text-[12px] tracking-tighter uppercase font-medium">Rolls Royce Ghost</p>
    </div>
    <div className="text-[14px] text-zinc-500 font-mono space-y-1 text-right">
      <p>01 // PROTECTION</p>
      <p>02 // RESTORATION</p> 
    </div>
  </div>
);

const BackgroundLayer = memo(({ scrollY }) => (
  <div 
    className="absolute inset-0 z-0 will-change-transform transition-transform duration-700 ease-out"
    style={{ transform: `scale(1.1) translateY(${scrollY * 0.05}px)` }}
  >
    <div className="absolute inset-0 bg-black/70 z-10" />
    <img 
      src="main.jpg" 
      className="w-full h-full object-cover grayscale opacity-50" 
      alt="Luxury Car Detail" 
    />
  </div>
));

export function TopMenu() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-auto bg-[#020202] flex items-center justify-center px-2 md:px-0 pt-15 md:pt-25 overflow-hidden font-sans">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#AF8C13]/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative w-full max-w-screen-2xl h-[92%] md:h-[85vh] shrink-0 px-2 md:px-0">

        <div className="relative h-full w-full bg-black rounded-[30px] md:rounded-[60px] overflow-hidden border border-white/5 shadow-2xl ring-1 ring-white/5 flex flex-col">
          
          <div className="absolute inset-0 z-40 p-8 md:p-12 pointer-events-none hidden lg:flex justify-between">
            <HudLeft />
            <HudRight />
          </div>

          <BackgroundLayer scrollY={scrollY} />

          <div className="relative z-50 grow flex flex-col items-center justify-center text-center px-4 md:px-6 py-5 md:pt-20">
            
            <div className="mb-4 md:mb-6 overflow-hidden">
              <span className="inline-block text-[#AF8C13] text-[10px] md:text-[14px] tracking-[0.6em] md:tracking-[1em] uppercase font-black animate-slideUp">
                Imperial Detailing Atelier
              </span>
            </div>


            <h1 className="text-[16vw] md:text-[8vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter text-white uppercase italic mb-6 md:mb-8">
              ELITE <br /> 
              <span className="text-transparent not-italic text-stroke-mobile">MASTERY</span>
            </h1>


            <div className="relative font-alumni py-6 md:py-8 border-y border-[#AF8C13]/20 w-full max-w-2xl">
              <p className="text-zinc-400 text-[14px] md:text-[20px] font-bold tracking-[0.2em] md:tracking-[0.3em] leading-relaxed uppercase">
                Преображаем автомобили в искусство. <br /> 
                <span className="text-[#AF8C13] font-bold italic mt-2 block">Безупречность в деталях.</span>
              </p>
            </div>

            <div className="grow flex flex-col justify-center items-center w-full relative mt-8 md:mt-12">
              
              <button className="relative h-14 md:h-16 w-64 md:w-72 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden bg-black/20 border border-[#AF8C13]/30 backdrop-blur-md group/btn transition-transform active:scale-95">
                <div className="absolute inset-0 bg-[#AF8C13]/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1.2s] ease-in-out" />
                <span className="relative z-10 text-[12px] md:text-[14px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black text-white group-hover/btn:text-[#AF8C13] transition-colors">
                  Reserve Access
                </span>
              </button>

              <footer className="mt-10 md:mt-auto md:mb-8 flex flex-wrap justify-center gap-4 md:gap-12 text-[9px] md:text-[12px] tracking-[0.2em] md:tracking-[0.4em] text-zinc-600 uppercase font-bold px-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#AF8C13] rounded-full" /> 
                  9H+ Systems
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#AF8C13] rounded-full" /> 
                  Xpel Certified
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        
        /* Исправление для Alumni Sans если класс не подхватился */
        .font-alumni { font-family: 'Alumni Sans', sans-serif; }
      `}} />
    </section>
  );
}
