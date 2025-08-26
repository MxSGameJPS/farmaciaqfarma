"use client";

import styles from "./contato.module.css";
import Local from "../../components/Local/local.jsx";
import { useState } from "react";

export default function Contato() {
  // Formulário agora usa FormSubmit para envio direto ao e-mail do contratante

  return (
    <main className={styles.contatoMain}>
      <h1 className={styles.contatoTitle}>Contato</h1>
      <div className={styles.contatoHero}>
        <div className={styles.contatoHeroLeft}>
          <h2 className={styles.contatoHeroTitle}>
            Entre em contato com a QFarma
          </h2>
          <div className={styles.contatoHeroTextBox}>
            <p className={styles.contatoHeroText}>
              Estamos à disposição para dúvidas, sugestões ou informações sobre
              nossos serviços. Preencha o formulário ao lado e nossa equipe
              responderá o mais breve possível.
            </p>
            <ul className={styles.contatoHeroList}>
              <li>
                <strong>Endereço:</strong> Av. República Argentina, 1115, Água
                Verde, Curitiba/PR
              </li>
              <li>
                <strong>Telefone:</strong> 3030-1777
              </li>
              <li>
                <strong>Horário:</strong> Seg. a Sáb. 8h às 20h | Feriados 9h às
                20h | Domingo Fechado
              </li>
            </ul>
          </div>
          <div className={styles.contatoHeroImgBox}>
            <img
              src="/image/moca.webp"
              alt="Atendente QFarma"
              className={styles.contatoHeroImg}
            />
          </div>
        </div>
        <form
          className={styles.contatoHeroForm}
          action="https://formsubmit.co/qfarmaf@gmail.com"
          method="POST"
        >
          <h2 className={styles.contatoHeroFormTitle}>Fale conosco</h2>
          {/* Campo oculto para mensagem personalizada */}
          <input
            type="hidden"
            name="_subject"
            value="Novo contato pelo site QFarma"
          />
          <input
            type="hidden"
            name="mensagem_padrao"
            value="Olá, gostaria de agendar uma vacina ou tirar dúvidas. O que eu preciso fazer?"
          />
          <label>
            Nome
            <input
              name="nome"
              type="text"
              required
              placeholder="Digite seu nome"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="Digite seu email"
            />
          </label>
          <label>
            WhatsApp
            <input
              name="whatsapp"
              type="tel"
              required
              placeholder="Digite seu WhatsApp"
            />
          </label>
          <label>
            Mensagem
            <textarea name="msg" required placeholder="Digite sua mensagem" />
          </label>
          <button type="submit" className={styles.contatoHeroFormBtn}>
            Enviar
          </button>
        </form>
      </div>
      {/* Seção de Localização */}
      <section className={styles.contatoLocalizacaoSection}>
        <div className={styles.contatoLocalizacaoContent}>
          <div className={styles.contatoLocalizacaoInfo}>
            <div className={styles.contatoLocalizacaoIcon}>
              {/* Ícone opcional, pode usar react-icons se quiser */}
            </div>
            <h2 className={styles.contatoLocalizacaoTitle}>Localização</h2>
            <p className={styles.contatoLocalizacaoText}>
              Estamos localizados em uma das principais avenidas de Curitiba,
              com fácil acesso e estacionamento. Venha nos visitar!
            </p>
            <ul className={styles.contatoHeroList}>
              <li>
                <strong>Endereço:</strong> Av. República Argentina, 1115, Água
                Verde, Curitiba/PR
              </li>
              <li>
                <strong>Telefone:</strong> 3030-1777
              </li>
              <li>
                <strong>Horário:</strong> Seg. a Sáb. 8h às 20h | Feriados 9h às
                20h | Domingo Fechado
              </li>
            </ul>
          </div>
          <div className={styles.contatoLocalizacaoMapa}>
            {/* Mapa Google incorporado */}
            <iframe
              title="Mapa QFarma"
              src="https://www.google.com/maps?q=Av.+Rep%C3%BAblica+Argentina,+1115,+Curitiba+-+PR&output=embed"
              width="620"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.contatoLocalizacaoMapa}
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
