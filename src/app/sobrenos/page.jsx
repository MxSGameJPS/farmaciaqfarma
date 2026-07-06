import SobreNosClient from "./SobreNosClient";

export const metadata = {
  title: "Quem Somos | Nossa História e Missão",
  description:
    "Saiba mais sobre a QFarma Vacinas, nossa trajetória de mais de 5 anos e nossa missão de proteger famílias em Curitiba com atendimento humanizado e seguro.",
  alternates: {
    canonical: "https://www.qfarmavacinas.com.br/sobrenos",
  },
};

export default function Page() {
  return <SobreNosClient />;
}