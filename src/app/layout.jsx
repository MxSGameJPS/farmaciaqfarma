import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>
          QFarma Vacinas | Proteção, Saúde e Atendimento Domiciliar em Curitiba
        </title>
        <meta
          name="description"
          content="Vacinas em Curitiba para toda a família. Atendimento domiciliar, equipe especializada e agendamento fácil. Proteja quem você ama!"
        />
        <meta
          name="keywords"
          content="vacinas, Curitiba, saúde, atendimento domiciliar, imunização, QFarma, clínica de vacinas"
        />
        <meta name="author" content="QFarma Vacinas" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="QFarma Vacinas | Proteção, Saúde e Atendimento Domiciliar em Curitiba"
        />
        <meta
          property="og:description"
          content="Vacinas em Curitiba para toda a família. Atendimento domiciliar, equipe especializada e agendamento fácil."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qfarma.com.br" />
        <meta
          property="og:image"
          content="https://qfarma.com.br/image/logo.png"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17510751913"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17510751913');
        `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
