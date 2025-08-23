"use client";

import styles from "./contato.module.css";
import Local from "../../components/Local/local.jsx";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    msg: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para envio do formulário
    alert("Mensagem enviada! Obrigado pelo contato.");
    setForm({ nome: "", email: "", whatsapp: "", msg: "" });
  };

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
        <form className={styles.contatoHeroForm} onSubmit={handleSubmit}>
          <h2 className={styles.contatoHeroFormTitle}>Fale conosco</h2>
          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Digite seu email"
            />
          </label>
          <label>
            WhatsApp
            <input
              name="whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={handleChange}
              required
              placeholder="Digite seu WhatsApp"
            />
          </label>
          <label>
            Mensagem
            <textarea
              name="msg"
              value={form.msg}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
            />
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
