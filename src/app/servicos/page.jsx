import ServicosClient from "./ServicosClient";

export const metadata = {
  title: "Nossos Serviços de Imunização",
  description:
    "Conheça os serviços de imunização oferecidos pela QFarma Vacinas em Curitiba, incluindo atendimento corporativo, domiciliar e aplicação de vacinas.",
  alternates: {
    canonical: "https://www.qfarmavacinas.com.br/servicos",
  },
};

export default function Page() {
  return <ServicosClient />;
}