import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my_edutech/", // <-- important
  plugins: [react()],
});
