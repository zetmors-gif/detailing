import React from 'react';

const REVIEWS_DATA = [
  {
    name: "Александр В.",
    car: "Porsche Taycan",
    text: "Искал студию в Краснодаре, где не побоятся работать с матовым полиуретаном. ZetMors справились на 10/10. Отношение к деталям поражает.",
    date: "12 / 2023"
  },
  {
    name: "Мария С.",
    car: "Range Rover Vogue",
    text: "Делала детейлинг салона и керамику 9H. Машина выглядит лучше, чем когда я забирала её из салона. Кожа стала как шелк!",
    date: "01 / 2024"
  },
  {
    name: "Дмитрий К.",
    car: "BMW M5 F90",
    text: "Профессионалы. Никаких лишних слов, всё по делу. Проверили лак приборами, составили карту работ. Результат превзошел ожидания.",
    date: "02 / 2024"
  }
];

const ReviewCard = ({ review, index }) => (
  <div 
    className="reveal relative group bg-zinc-950 p-8 md:p-12 rounded-[30px] md:rounded-[50px] border border-white/5 transition-all duration-700 md:hover:border-[#AF8C13]/40 md:hover:-translate-y-4 shadow-2xl flex flex-col h-full"
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div className="absolute -top-6 -right-4 text-7xl md:text-9xl font-serif text-[#AF8C13] opacity-[0.03] md:group-hover:opacity-10 transition-opacity pointer-events-none select-none">“</div>
    
    {/* ДОБАВЛЕНО: flex-1 и h-full, чтобы этот блок реально занимал всю высоту карточки */}
    <div className="relative z-10 flex flex-col flex-1 h-full w-full">
      
      <div className="flex gap-2 mb-6 md:mb-10 flex-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#AF8C13] rounded-full shadow-[0_0_10px_#AF8C13]" />
        ))}
      </div>

      {/* Контейнер текста растягивается и выталкивает подвал */}
      <div className="grow mb-8 md:mb-10">
        <p className="text-zinc-300 text-base md:text-xl font-light italic leading-relaxed md:leading-[1.6] tracking-wide">
           «{review.text}»
        </p>
      </div>

      {/* Подвал: flex-none гарантирует фиксированный размер, mt-auto страхует прижатие */}
      <div className="pt-6 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between flex-none gap-4 mt-auto">
        <div className="space-y-1">
          <p className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase italic leading-none">
            {review.name}
          </p>
          <p className="text-[#AF8C13] text-[9px] md:text-9px tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">
            {review.car}
          </p>
        </div>
        <div className="text-[9px] md:text-[11px] text-zinc-600 font-mono tracking-widest bg-white/3 px-3 md:px-4 py-1.5 rounded-full border border-white/5">
          {review.date}
        </div>
      </div>
    </div>
  </div>
);


export function Reviews() {
  return (
    <section id="reviews" className="relative w-screen md:w-full py-10 md:py-24 bg-[#050505] overflow-hidden select-none">
      
      {/* Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[22vw] font-black text-white/1 uppercase tracking-tighter pointer-events-none select-none hidden lg:block">
        Feedback
      </div>
      
      <div className="relative z-10 max-w-300 mx-auto px-5 md:px-0">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-32 gap-8 md:gap-12">
          <div className="reveal">
            <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#AF8C13] text-[11px] md:text-[14px] font-black">
              <span className="w-8 md:w-12 h-px bg-[#AF8C13]/30" /> 
              Guest Experience
            </div>
            <h2 className="text-[12vw] md:text-8xl font-black italic tracking-tighter text-white leading-[0.9] md:leading-[0.85] uppercase">
              Мнения <br /> 
              <span className="text-transparent font-sans not-italic text-stroke-mobile">Владельцев</span>
            </h2>
          </div>
          
          <div className="max-w-70 md:max-w-xs text-zinc-500 text-[10px] md:text-[12px] font-bold tracking-widest uppercase leading-loose border-l border-[#AF8C13]/30 pl-6 md:pl-8 reveal">
            каждый отзыв — подтверждение нашего стремления к безупречности.
          </div>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 items-stretch">
          {REVIEWS_DATA.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
        
        {/* FOOTER */}
        <div className="mt-5 md:mt-12 flex flex-col items-center gap-6 md:gap-10 reveal text-center">
          <div className="w-px h-8 bg-linear-to-b from-transparent via-[#AF8C13]/30 to-transparent" />
          <a 
            href="https://yandex.ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] text-zinc-600 uppercase font-black hover:text-[#AF8C13] transition-all duration-500"
          >
            Все отзывы на Yandex
            <span className="hidden md:block w-16 h-px bg-zinc-800 group-hover:bg-[#AF8C13] group-hover:w-24 transition-all duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
