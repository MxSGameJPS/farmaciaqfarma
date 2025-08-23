"use client";

import styles from "./carro.module.css";
import Image from "next/image";

export default function Carro() {
  return (
    <section className={styles.carroBg}>
      <div className={styles.carroContainer}>
        <div className={styles.carroTextBox}>
          <h2 className={styles.carroTitle}>
            VACINAMOS NO CONFORTO DO SEU LAR
          </h2>
          <h3 className={styles.carroSubtitle}>ATENDIMENTO DOMICILIAR</h3>
          <p className={styles.carroText}>
            A vacinação em casa é uma excelente alternativa para aqueles que
            desejam cuidar da sua saúde sem sair do conforto do seu lar e sem se
            expor a possíveis riscos.
          </p>
          <p className={styles.carroText}>
            Você será atendido com o mesmo profissionalismo e cordialidade que
            oferecemos em nosso espaço. Sendo ideal para crianças, gestantes,
            idosos e pessoas com problemas de locomoção.
          </p>
          <button className={styles.buttonContato}>ENTRE EM CONTATO</button>
        </div>
        <div className={styles.carroImageBox}>
          <Image
            src="/image/carro.png"
            alt="Carro Vacinas Sami"
            width={840}
            height={380}
            className={styles.carroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
