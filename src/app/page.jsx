"use client";

import { useEffect, useRef } from "react";
import Hero from "../components/hero/hero";
import VSR from "../components/VSR/vsr";
import Importancia from "../components/importancia/importancia";
import {
  DepoimentosTop,
  DepoimentosCards,
} from "../components/depoimentos/depoimentos";
import Carro from "../components/carro/carro";
import Local from "../components/Local/local";
import CardsHomeVacinas from "../components/cardsHomeVacinas/cardsHomeVacinas";

export default function Page() {
  const sectionRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            ref.current.classList.add("fadeInScroll");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <div ref={sectionRefs[0]} className="fadeInScrollInit">
        <Hero />
      </div>
      <CardsHomeVacinas />
      <div ref={sectionRefs[1]} className="fadeInScrollInit">
        <VSR />
      </div>
      <div ref={sectionRefs[2]} className="fadeInScrollInit">
        <Importancia />
      </div>
      <div ref={sectionRefs[3]} className="fadeInScrollInit">
        <DepoimentosTop />
      </div>
      {/* <div ref={sectionRefs[4]} className="fadeInScrollInit">
        <DepoimentosCards />
      </div> */}
      <div ref={sectionRefs[5]} className="fadeInScrollInit">
        <Carro />
      </div>
      {/* <div ref={sectionRefs[6]} className="fadeInScrollInit">
        <Local />
      </div> */}
    </main>
  );
}
