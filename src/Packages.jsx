import React, { useState } from "react";

const PACKAGESDATA = [
  { name: "ESSENTIAL", price: "20.000", features: ["1 слой керамики", "Полировка дисков", "Химчистка"] },
  { name: "SIGNATURE", price: "80.000", features: ["3 слоя Ceramic Pro", "Оклейка 'Зоны риска'", "Консервация кожи"] },
  { name: "ULTIMATE", price: "180.000", features: ["Полный полиуретан", "Керамика на пленку", "Антидождь по кругу"] }
];

const PackageCard = ({ pkg, isActive, onEnter, onLeave }) => (
  <div 
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className={`relative p-8 md:p-14 rounded-[30px] md:rounded-[40px] border transition-all duration-700 overflow-hidden flex flex-col min-h-auto md:min-h-125
      ${isActive 
        ? 'border-[#AF8C13]/50 scale-[1.02] md:scale-105 shadow-[0_0_60px_rgba(175,140,19,0.15)] z-20' 
        : 'border-white/10 md:border-[#AF8C13]/50 z-10'}`}
  >
    <div className={`absolute -inset-20 pointer-events-none transition-opacity duration-1000 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(175,140,19,0.12)_0%,transparent_60%)]
      ${isActive ? 'opacity-100' : 'opacity-0'}`} 
    />

    <div className="relative z-10 flex flex-col h-full">
      <h4 className={`text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.8em] uppercase font-black mb-6 md:mb-8 transition-colors duration-500
        ${isActive ? 'text-[#AF8C13]' : 'text-zinc-600'}`}>
        {pkg.name}
      </h4>
      
      <div className="text-4xl md:text-5xl font-black italic tracking-tighter mb-8 md:mb-10 text-white flex items-baseline leading-none">
        <span className="text-[10px] md:text-[12px] not-italic font-bold text-zinc-600 mr-2 md:mr-3 uppercase tracking-widest">от</span>
        {pkg.price} 
        <span className="text-lg md:text-xl ml-2 font-serif text-[#AF8C13]/80 italic">₽</span>
      </div>

      <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 grow">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 md:gap-4 text-[12px] md:text-[14px] uppercase font-bold tracking-widest md:tracking-[0.15em]">
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 shrink-0
              ${isActive ? 'bg-[#AF8C13] shadow-[0_0_10px_#AF8C13]' : 'bg-zinc-800'}`} 
            /> 
            <span className={`transition-colors duration-500 ${isActive ? 'text-zinc-200' : 'text-zinc-500'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 md:py-5 text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-500 rounded-xl md:rounded-2xl border active:scale-95
        ${isActive 
          ? 'bg-[#AF8C13] border-[#AF8C13] text-black' 
          : 'border-white/10 text-zinc-500 hover:border-[#AF8C13]/50 hover:text-[#AF8C13]'}`}>
        Записаться
      </button>
    </div>
  </div>
);

export function Packages() {
  const [activePackage, setActivePackage] = useState(1);

  return (
    <section id="services" className="relative w-screen md:w-full  md:py-0 bg-[#050505] flex justify-center px-4 md:px-0 overflow-hidden select-none">

      <div className="relative w-full p-px md:p-[1.5px] rounded-[30px] md:rounded-[52px] overflow-hidden group bg-white/5">
        
        {/* Рамка: на мобилках */}
        <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0%,transparent_60%,#AF8C13_100%)] animate-[spin_8s_linear_infinite] opacity-20 md:opacity-40 group-hover:opacity-100 blur-[60px] md:blur-[100px] z-0" />

        <div className="relative bg-[#050505] rounded-[29px] md:rounded-[51px] z-10 py-12 md:py-20 px-5 md:px-12 lg:px-24">

          <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
            <h3 className="text-[#AF8C13] text-[9px] md:text-[11px] tracking-[0.8em] md:tracking-[1.2em] uppercase font-black">Pricing Strategy</h3>
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-[0.9] md:leading-none">
              Пакеты <br className="md:hidden" /> <span className="text-transparent font-sans not-italic [-webkit-text-stroke:0.8px_rgba(175,140,19,0.5)] md:[-webkit-text-stroke:1px_rgba(175,140,19,0.5)]">Услуг</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {PACKAGESDATA.map((pkg, i) => (
              <PackageCard 
                key={i}
                pkg={pkg}
                isActive={activePackage === i}
                onEnter={() => setActivePackage(i)}
                onLeave={() => setActivePackage(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
