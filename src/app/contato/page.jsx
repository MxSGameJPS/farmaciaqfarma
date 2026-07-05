"use client";

import styles from "./contato.module.css";
import { useState, useEffect, useRef } from "react";
import { 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiMail, 
  FiSend,
  FiArrowRight,
  FiCheckCircle,
  FiUser,
  FiMessageCircle
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  const [formStatus, setFormStatus] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    location: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 5000);
      }
    })
    .catch(() => {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    });
  };

  const infoItems = [
    { icon: FiMapPin, text: "Av. República Argentina, 1115, Água Verde, Curitiba/PR", label: "Endereço" },
    { icon: FiPhone, text: "(41) 3030-1777", label: "Telefone", href: "tel:5530301777" },
    { icon: FaWhatsapp, text: "(41) 9 9720-2738", label: "WhatsApp", href: "https://wa.me/554197202738", isWhatsApp: true },
    { icon: FiClock, text: "Seg. a Sáb. 8h às 20h | Feriados 9h às 20h", label: "Horário" },
  ];

  return (
    <main className={styles.contatoMain}>
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`${styles.contatoHero} ${
          isVisible.hero ? styles.visible : ""
        }`}
      >
        <div className={styles.contatoHeroContent}>
          <div className={styles.contatoHeroLeft}>
            <span className={styles.tag}>Contato</span>
            <h1 className={styles.contatoHeroTitle}>
              Fale com a <br />
              <span className={styles.gradientText}>QFarma</span>
            </h1>
            <p className={styles.contatoHeroDescription}>
              Estamos à disposição para dúvidas, sugestões ou informações sobre
              nossos serviços. Preencha o formulário ou entre em contato pelos
              canais abaixo.
            </p>

            <div className={styles.contatoInfoGrid}>
              {infoItems.map((item, index) => (
                <div key={index} className={styles.contatoInfoItem}>
                  <div className={styles.contatoInfoIcon}>
                    <item.icon />
                  </div>
                  <div>
                    <span className={styles.contatoInfoLabel}>{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.isWhatsApp ? "_blank" : undefined}
                        rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                        className={styles.contatoInfoLink}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className={styles.contatoInfoText}>{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.contatoHeroRight}>
            <div className={styles.contatoFormWrapper}>
              <h2 className={styles.contatoFormTitle}>
                Envie uma mensagem
              </h2>
              <p className={styles.contatoFormSubtitle}>
                Responderemos o mais breve possível
              </p>

              <form
                className={styles.contatoForm}
                action="https://formsubmit.co/qfarmaf@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="Novo contato pelo site QFarma" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.formLabel}>
                    <FiUser size={16} />
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    <FiMail size={16} />
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Digite seu e-mail"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="whatsapp" className={styles.formLabel}>
                    <FiMessageCircle size={16} />
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(41) 9 9999-9999"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="msg" className={styles.formLabel}>
                    Mensagem
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    placeholder="Digite sua mensagem..."
                    className={styles.formTextarea}
                    rows="4"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className={styles.formSuccess}>
                    <FiCheckCircle size={20} />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className={styles.formError}>
                    <span>Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.</span>
                  </div>
                )}

                <button type="submit" className={styles.contatoFormBtn}>
                  <span>Enviar mensagem</span>
                  <FiSend size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section
        id="location"
        ref={sectionRefs.location}
        className={`${styles.contatoLocalizacaoSection} ${
          isVisible.location ? styles.visible : ""
        }`}
      >
        <div className={styles.contatoLocalizacaoContent}>
          <div className={styles.contatoLocalizacaoInfo}>
            <span className={styles.tag}>Localização</span>
            <h2 className={styles.contatoLocalizacaoTitle}>
              Venha nos <br />
              <span className={styles.gradientText}>visitar</span>
            </h2>
            <p className={styles.contatoLocalizacaoText}>
              Estamos localizados em uma das principais avenidas de Curitiba,
              com fácil acesso e estacionamento gratuito. Venha nos visitar!
            </p>
            <div className={styles.locationFeatures}>
              <div className={styles.locationFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>Estacionamento gratuito</span>
              </div>
              <div className={styles.locationFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>Fácil acesso</span>
              </div>
              <div className={styles.locationFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>Ambiente acolhedor</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=Av.+Rep%C3%BAblica+Argentina,+1115,+Curitiba+-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contatoLocalizacaoBtn}
            >
              <FiMapPin size={18} />
              <span>Como chegar</span>
              <FiArrowRight className={styles.btnIcon} />
            </a>
          </div>
          <div className={styles.contatoLocalizacaoMapa}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Mapa QFarma"
                src="https://www.google.com/maps?q=Av.+Rep%C3%BAblica+Argentina,+1115,+Curitiba+-+PR&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapaIframe}
              ></iframe>
              <div className={styles.mapBadge}>
                <FiMapPin size={20} />
                <span>Estamos aqui</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}