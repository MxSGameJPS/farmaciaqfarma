export default function sitemap() {
  const baseUrl = "https://www.qfarmavacinas.com.br";

  const routes = [
    "",
    "/sobrenos",
    "/servicos",
    "/vacinas",
    "/contato",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
