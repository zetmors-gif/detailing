import React from 'react';

const FormField = ({ label, type, placeholder }) => (
  <div className="relative group/field">
    <p className="text-[8px] md:text-[9px] text-[#AF8C13]/50 tracking-[0.4em] md:tracking-[0.6em] uppercase mb-2 md:mb-3 font-black italic">
      {label}
    </p>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-zinc-900 py-2 text-base md:text-lg font-black tracking-[0.15em] md:tracking-[0.2em] text-white outline-none focus:border-[#AF8C13] transition-all placeholder:text-zinc-800 uppercase"
    />
  </div>
);

export function Footer() {
  return (
    <footer id="contact" className="relative w-screen md:w-full bg-[#010101] pt-1 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-white/5 select-none">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#AF8C13_2px,transparent_2px)] bg-size-[40px_40px]" />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#AF8C13]/5 blur-[80px] md:blur-[120px] rounded-full translate-x-1/4 md:translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-360 mx-auto px-5 md:px-20">
        <div className="grid lg:grid-cols-12 gap-2 md:gap-16 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col min-h-full">
            {/* 1. Верхний блок */}
            <div className="reveal">
              <p className="text-[#AF8C13] text-[9px] md:text-[11px] tracking-[0.6em] md:tracking-[1em] uppercase font-black mb-6 md:mb-8 italic">
                ZetMors Archive
              </p>
              <h2 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black italic tracking-tighter text-white leading-[0.9] uppercase">
                THE <br /> 
                <span className="text-transparent font-sans not-italic text-stroke-mobile">FINALE</span>
              </h2>
            </div>

            {/* 2. Центральный блок: Контакты */}
            <div className="grow flex items-center py-10 md:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-l border-[#AF8C13]/20 pl-6 md:pl-10 reveal w-full">
                <div className="group cursor-default">
                  <p className="text-zinc-700 text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-3 md:mb-4 italic">Location</p>
                  <p className="text-lg md:text-2xl font-light text-zinc-400 group-hover:text-white transition-colors duration-500 leading-tight">
                    Краснодар, <br className="hidden sm:block" /> Северная
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-zinc-700 text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black mb-3 md:mb-4 italic">Direct</p>
                  <a href="tel:+79898094680" className="text-xl md:text-3xl font-black text-white tracking-tighter group-hover:text-[#AF8C13] transition-all duration-500 inline-block">
                    +7 989 809 46 80
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Соцсети */}
            <div className="mt-auto flex flex-wrap gap-6 md:gap-x-16 text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-black text-zinc-600 reveal flex-none">
              {['Instagram', 'WhatsApp', 'Telegram'].map(link => (
                <a key={link} href="#" className="hover:text-[#AF8C13] transition-all relative group py-1">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#AF8C13] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Форма */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="relative bg-[#080808] p-7 md:p-14 rounded-[30px] md:rounded-[40px] border border-white/5 reveal shadow-2xl overflow-hidden">
              <div className="mb-10 md:mb-14">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Связь</h3>
                <p className="text-zinc-600 text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase mt-2 md:mt-3 font-bold">v.2026 / Protocol</p>
              </div>

              <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
                <FormField label="Владелец" type="text" placeholder="ИМЯ" />
                <FormField label="Телефон" type="tel" placeholder="+7" />

                <div className="relative group/field">
                  <p className="text-[8px] md:text-[9px] text-[#AF8C13]/50 tracking-[0.4em] md:tracking-[0.6em] uppercase mb-2 md:mb-3 font-black italic">Программа</p>
                  <select className="w-full bg-transparent border-b border-zinc-900 py-3 md:py-4 text-zinc-500 text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] font-black uppercase outline-none focus:border-[#AF8C13] appearance-none cursor-pointer">
                    <option className="bg-[#080808]">PROTOCOL</option>
                    <option className="bg-[#080808]">CERAMIC 9H</option>
                    <option className="bg-[#080808]">PPF ARMOR</option>
                  </select>
                  <span className="absolute right-0 bottom-4 text-[#AF8C13] text-[8px] font-black animate-pulse">NEXT</span>
                </div>

                <button className="w-full group relative py-4 border mt-2 border-white/10 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#AF8C13]">
                  <div className="absolute inset-0 bg-[#AF8C13] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]" />
                  <span className="relative z-10 text-[14px] md:text-[18px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black text-white group-hover:text-black transition-colors duration-500">
                    Initialize
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-2 md:mt-24 pt-2 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 md:gap-10 items-center text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.8em] text-zinc-800 uppercase font-black text-center">
          <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
            <span>Unit_01</span>
            <span className="hidden sm:inline">//</span>
            <span>Private_Access</span>
          </div>
          <p className="text-zinc-700 italic tracking-[0.2em]">Elegance is an attitude of perfection.</p>
        </div>
      </div>
    </footer>
  );
}
