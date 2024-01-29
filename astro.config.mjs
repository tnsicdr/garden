import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://code.tnsi.me/garden",
  base: "/garden",
  integrations: [react()],
  markdown: {
    remarkPlugins: [],
  },
});
