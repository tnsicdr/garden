import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://code.tnsi.me/garden",
  base: import.meta.env.DEV ? "/garden" : undefined,
  integrations: [react()],
  markdown: {
    remarkPlugins: [],
  },
});
