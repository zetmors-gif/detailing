import React, { useEffect } from 'react';
import { Header } from './Header';
import { TopMenu } from './TopMenu';
import { Philosophy } from './Philosophy';
import { Packages } from './Packages';
import { Gallery } from './Gallery';
import { Reviews } from './Reviews';
import { Footer } from './Footer';

const App = () => {

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal, .reveal-left");
      
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        const elementVisible = window.innerWidth < 768 ? 50 : 150;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };


    window.addEventListener("scroll", reveal);
    

    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="max-h-100% bg-[#050505] text-[#F5F5F5] font-light selection:bg-gold-500 selection:text-black overflow-x-hidden">
      

      <Header />


      <section className='flex justify-center'>
        <TopMenu />
      </section>


      <section className='flex justify-center'>
        <Philosophy />
      </section>


      <section className='flex justify-center'>
        <Packages />
      </section>


      <section className='flex justify-center'>
        <Gallery />
      </section>


      <section className='flex justify-center'>
        <Reviews />
      </section>


      <section className='flex justify-center'>
        <Footer />
      </section>


      <style>{`
        /* Базовые цвета */
        .text-gold-500 { color: #AF8C13; }
        .bg-gold-500 { background-color: #AF8C13; }
        .border-gold-500 { border-color: #AF8C13; }

        
      `}</style>
    </div>
  );
};

export default App;
