import React, { useState, useEffect } from "react";
import styles from "./depoimentos.module.css";

const depoimentos = [
  {
    nome: "Ana Paula",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    texto:
      "Vacinei meus filhos na QFarma e fiquei impressionada com o cuidado e atenção dos profissionais. Recomendo para todas as famílias!",
  },
  {
    nome: "Carlos Eduardo",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    texto:
      "A vacinação domiciliar foi super prática e segura. A equipe foi pontual e muito gentil. Parabéns pelo serviço!",
  },
  {
    nome: "Juliana Silva",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    texto:
      "Me senti muito acolhida na QFarma. Explicaram tudo sobre as vacinas e tiraram todas as minhas dúvidas. Atendimento excelente!",
  },
  {
    nome: "Roberto Lima",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    texto:
      "Agendei a vacinação para minha mãe idosa e foi tudo perfeito. Profissionais capacitados e ambiente seguro.",
  },
  {
    nome: "Fernanda Costa",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    texto:
      "Gostei muito dos planos vacinais, facilitou o acompanhamento das vacinas dos meus filhos. Recomendo!",
  },
  {
    nome: "Marcos Vinícius",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    texto:
      "Equipe muito atenciosa e ambiente acolhedor. Fiquei tranquilo ao vacinar meu bebê na QFarma.",
  },
];

export default function Depoimentos() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % depoimentos.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  // Mostra 3 depoimentos por vez
  const cards = [];
  for (let i = 0; i < 3; i++) {
    const idx = (start + i) % depoimentos.length;
    cards.push(depoimentos[idx]);
  }

  return (
    <section className={styles.depoimentos}>
      <h2 className={styles.titulo}>Depoimentos de quem confia na QFarma</h2>
      <div className={styles.carrossel}>
        {cards.map((dep, i) => (
          <div key={i} className={styles.card}>
            <img
              src={dep.avatar}
              alt={`Avatar de ${dep.nome}`}
              className={styles.avatar}
            />
            <p className={styles.texto}>&quot;{dep.texto}&quot;</p>
            <span className={styles.nome}>{dep.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
