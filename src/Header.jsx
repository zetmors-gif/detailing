import React, { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Philosophy', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Works', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' }
];


const Logo = () => (
  <div className="group cursor-pointer flex flex-col select-none relative z-130">
    <span className="text-xl md:text-3xl font-black -tracking-widest text-white leading-none">
      ZET<span className="text-[#AF8C13] italic">MORS</span>
    </span>
    <span className="text-[6px] md:text-[7px] tracking-[0.75em] uppercase text-zinc-500 font-bold mt-1 group-hover:text-[#AF8C13] transition-colors duration-500">
      Est. 2026 / KRD
    </span>
  </div>
);

const NavItem = memo(({ item, isActive, onClick }) => (
  <a 
    href={item.href}
    onClick={onClick}
    className={`relative transition-all duration-500 hover:text-white 
      ${isActive ? 'text-[#AF8C13]' : 'text-zinc-500'}`}
  >
    {item.name}
    {isActive && (
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#AF8C13] rounded-full shadow-[0_0_8px_#AF8C13]" />
    )}
  </a>
));



export function Header() {
  const [activeItem, setActiveItem] = useState('Philosophy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
  if (isMenuOpen) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`; // Компенсируем исчезнувший скролл
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0px';
  }

  return () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0px';
  };
}, [isMenuOpen]);


  return (
    <>
      {/* 1. ВЕРХНЯЯ ПАНЕЛЬ */}
      <nav className="fixed top-0 left-0 w-full z-120 py-1 md:py-5 bg-black/60 backdrop-blur-xl border-b border-white/5 font-sans">
        <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20 flex justify-between items-center">
          
          <Logo />

          {/* ДЕСКТОПНАЯ НАВИГАЦИЯ */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-10 py-3.5 backdrop-blur-md relative overflow-hidden group/nav">
            <div className="flex gap-12 text-[12px] uppercase tracking-[0.4em] font-black relative z-10">
              {NAV_ITEMS.map((item) => (
                <NavItem 
                  key={item.name}
                  item={item}
                  isActive={activeItem === item.name}
                  onClick={() => setActiveItem(item.name)}
                />
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (Кнопка и Бургер) */}
          <div className="flex items-center gap-4"> 
            <button className="hidden sm:block group relative px-8 py-3 overflow-hidden rounded-full border border-[#AF8C13]/40 transition-transform active:scale-95">
              <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-black text-[#AF8C13]">
                Reserve
              </span>
            </button>

            {/* Кнопка бургера */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 text-[#AF8C13] relative z-130 outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Оверлей */}
      <div className={`fixed inset-0 bg-[#050505] transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${
        isMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-full'
      }`} style={{ zIndex: 110 }}>
        
        <div className="flex flex-col gap-10 text-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
              className={`text-2xl uppercase tracking-[0.6em] font-black transition-all ${
                activeItem === item.name ? 'text-[#AF8C13]' : 'text-zinc-600'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <button className="mt-4 px-12 py-4 border border-[#AF8C13] text-[#AF8C13] uppercase tracking-[0.4em] font-black rounded-full">
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
}
