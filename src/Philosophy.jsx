import React from 'react';

const StatBox = ({ value, label }) => (
  // На мобилках: min-w-[130px] и уменьшенный шрифт, на ПК: ваш исходный min-w-37.5 и text-5xl
  <div className="group flex-1 min-w-32.5 md:min-w-37.5">
    <p className="text-3xl md:text-5xl text-white font-black tracking-tighter group-hover:text-[#AF8C13] transition-colors duration-500 italic uppercase leading-none">
      {value}
    </p>
    <div className="h-px w-8 bg-[#AF8C13]/40 my-3 md:my-4 group-hover:w-full group-hover:bg-[#AF8C13] transition-all duration-700" />
    <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-600 font-bold leading-relaxed whitespace-nowrap">
      {label}
    </p>
  </div>
);

export function Philosophy() {
  return (
    <section id="about" className="relative w-screen md:w-full py-10 md:py-32 overflow-hidden bg-[#050505] select-none">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[22vw] font-black text-white/2 uppercase pointer-events-none select-none tracking-tighter leading-none z-0 hidden md:block">
        Heritage
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row  md:gap-16 lg:gap-24 items-center">
        
        {/* LEFT Контент */}
        <div className="flex-1 space-y-8 md:space-y-12 w-full">
          
          <div className="flex items-center gap-4 md:gap-5">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#AF8C13]/20 rounded-full animate-ping" />
              <div className="relative w-2 h-2 md:w-2.5 md:h-2.5 bg-[#AF8C13] rounded-full shadow-[0_0_15px_#AF8C13]" />
            </div>
            <span className="text-[#AF8C13] text-[11px] md:text-[14px] tracking-[0.3em] uppercase font-black">
              The Essence of ZetMors
            </span>
          </div>

          {/* Заголовок */}
          <h3 className="text-[10vw] md:text-[12vw] lg:text-[5vw] font-black italic tracking-tighter text-white leading-[0.9] md:leading-none uppercase">
            Культура <br /> 
            <span className="text-transparent font-sans not-italic text-stroke-mobile">Совершенства</span>
          </h3>

          <div className="space-y-6 md:space-y-8 max-w-xl">
            <p className="text-zinc-400 leading-relaxed font-light text-base md:text-xl italic border-l border-[#AF8C13]/30 pl-6 md:pl-8">
              «В ZetMors мы не признаем компромиссов. Каждый проект курирует персональный мастер...»
            </p>
            <p className="text-zinc-500 text-[11px] md:text-[16px] tracking-widest md:tracking-[0.3em] mt-2 font-medium leading-relaxed">
              Мы создали пространство, где технологии аэрокосмической отрасли встречаются с ювелирной точностью ручного труда.
            </p>
          </div>

          {/* Статистика */}
          <div className="pt-8 md:pt-12 flex flex-wrap gap-x-8 md:gap-x-12 gap-y-8 border-t border-white/5">
            <StatBox value="1200+" label="Проектов" />
            <StatBox value="5 лет" label="Гарантии" />
            <StatBox value="24/7" label="Консьерж" />
          </div>
        </div>

        {/* RIGHT Визуал */}
        <div className="flex-1 relative w-full mt-10 lg:mt-0 max-w-2xl lg:max-w-none">
          
          {/* Рамы */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-[#AF8C13]/10 rounded-[40px] pointer-events-none z-0 hidden md:block" />
          
          <div className="relative z-10 rounded-[25px] md:rounded-[35px] overflow-hidden group shadow-2xl bg-zinc-900 aspect-video lg:aspect-auto">
            <img 
              src="phylosophy.jpg" 
              className="w-full h-full lg:h-150 object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" 
              alt="Detailing Mastery" 
            />
            
            {/* Шильдик */}
            <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 z-20 bg-black/80 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10 translate-y-0 md:translate-y-20 md:group-hover:translate-y-0 transition-transform duration-700">
               <p className="text-[#AF8C13] text-[7px] md:text-[9px] tracking-[0.4em] uppercase font-black mb-1 md:mb-3">Quality Control</p>
               <p className="text-white text-[8px] md:text-[10px] font-bold tracking-widest uppercase leading-none">Certified by Koch Chemie</p>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-[#AF8C13]/20 rounded-bl-[40px] z-0 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
