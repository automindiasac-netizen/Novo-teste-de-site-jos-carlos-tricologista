import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo-name>/, so the base path
// and asset prefix only need to be set when building for that target.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Novo-teste-de-site-jos-carlos-tricologista";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
