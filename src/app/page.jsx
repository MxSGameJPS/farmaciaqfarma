"use client";

import Hero from "../components/hero/hero";

import Importancia from "../components/importancia/importancia";
import Depoimentos from "../components/depoimentos/depoimentos";

export default function Page() {
  return (
    <main>
      <Hero />
      <Importancia />
      <Depoimentos />
    </main>
  );
}
