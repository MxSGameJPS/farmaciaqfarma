import ContatoClient from "./ContatoClient";

export const metadata = {
  title: "Fale Conosco | Agendamento e Dúvidas",
  description:
    "Entre em contato com a equipe da QFarma Vacinas em Curitiba. Tire suas dúvidas sobre imunizações, convênios ou agende seu atendimento em casa.",
  alternates: {
    canonical: "https://www.qfarmavacinas.com.br/contato",
  },
};

export default function Page() {
  return <ContatoClient />;
}