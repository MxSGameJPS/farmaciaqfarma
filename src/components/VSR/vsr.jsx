import Image from "next/image";
import styles from "./vsr.module.css";
import Link from "next/link";

export default function VSR() {
  return (
    <section className={styles.vsr}>
      <div className={styles.content}>
        <h2 className={styles.title}>Equipe Especializada em Vacinação</h2>
        <p className={styles.texto}>
          Nossa equipe é formada por profissionais experientes e dedicados,
          prontos para oferecer atendimento humanizado e seguro em todas as
          etapas da vacinação. Cuidamos de você, da sua família e de toda a
          comunidade com responsabilidade e carinho.
        </p>
        <Link href="/contato" className={styles.button}>
          ENTRE EM CONTATO
        </Link>
      </div>
      <div className={styles.imagemEquipe}>
        <Image
          src="/image/equipe.jpg"
          alt="Equipe especializada em vacinação"
          width={800}
          height={500}
          className={styles.equipe}
          priority
        />
      </div>
    </section>
  );
}
