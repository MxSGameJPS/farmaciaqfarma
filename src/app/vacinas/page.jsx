import VacinasClient from "./VacinasClient";

export const metadata = {
  title: "Catálogo de Vacinas e Imunizações",
  description:
    "Consulte nosso catálogo completo de vacinas disponíveis em Curitiba. Informações detalhadas sobre indicações, esquemas de doses, contraindicações e agendamento.",
  alternates: {
    canonical: "https://www.qfarmavacinas.com.br/vacinas",
  },
};

export default function Page() {
  return <VacinasClient />;
}