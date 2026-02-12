import { useState } from "react";

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const works = [
    { id: '01', title: 'Deep Gloss', category: 'Ceramic Pro 9H', img: 'ceramica.jpg' },
    { id: '02', title: 'Armor Shield', category: 'Full PPF Wrap', img: 'plast.jpg' },
    { id: '03', title: 'Interior Spa', category: 'Detaiing Clean', img: 'interior.jpg' },
    { id: '04', title: 'Polish', category: 'Restoration', img: 'roter.jpg' }
  ];

  const handleMobileClick = (i) => {
    if (window.innerWidth < 1024) {
      setHoveredIndex(hoveredIndex === i ? null : i);
    }
  };

  return (
    <section id="gallery" className="w-screen md:w-full relative lg:py-15 bg-[#030303] overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-10">
        
        <div className="mb-12 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-gold-500 tracking-[0.4em] lg:tracking-[0.6em] uppercase text-[12px] lg:text-[14px] font-bold">Visual Identity</span>
            <h2 className="text-[14vw] md:text-7xl lg:text-9xl font-black italic tracking-tighter text-white leading-none uppercase">
              Галерея <br /> <span className="text-transparent font-sans not-italic text-stroke-mobile">Работ</span>
            </h2>
          </div>
        </div>

        {/* Контейнер карточек */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-auto lg:h-[60vh]">
          {works.map((work, i) => (
            <div
              key={i}
              onMouseEnter={() => window.innerWidth >= 1024 && setHoveredIndex(i)}
              onMouseLeave={() => window.innerWidth >= 1024 && setHoveredIndex(null)}
              onClick={() => handleMobileClick(i)}
            
              className={`relative overflow-hidden rounded-[30px] lg:rounded-[40px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer w-full lg:w-auto
                ${hoveredIndex === i 
                  ? 'h-100 lg:flex-3 lg:h-full' 
                  : 'h-25 lg:flex-1 lg:h-full'}
                ${hoveredIndex !== null && hoveredIndex !== i ? 'lg:opacity-30 lg:grayscale' : 'opacity-100'}
              `}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 z-20 flex flex-col justify-between p-8 lg:p-10 transition-opacity duration-500
                ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-white text-3xl lg:text-5xl font-black italic">{work.id}</span>
                <div>
                  <p className="text-gold-500 text-[9px] lg:text-[10px] tracking-[0.5em] uppercase font-black mb-1">{work.category}</p>
                  <h4 className="text-2xl lg:text-4xl font-bold text-white tracking-tighter uppercase">{work.title}</h4>
                </div>
              </div>

              {/* Затемнение */}
              <div className={`absolute inset-0 z-10 transition-colors duration-700 bg-black/50 ${hoveredIndex === i ? 'bg-black/30' : 'bg-black/60'}`} />

              <img
                src={work.img}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
              />

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
                ${hoveredIndex === i ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-zinc-500 text-3xl lg:text-2xl font-black lg:rotate-90">{work.id}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-15 flex justify-end">
           <button className="group flex items-center gap-4">
              <span className="text-[11px] lg:text-[12px] font-bold tracking-[0.4em] uppercase text-zinc-500 group-hover:text-gold-500 transition-colors">Смотреть все</span>
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500 transition-all">
                <span className="text-gold-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
           </button>
        </div>
      </div>
    </section>
  );
}
