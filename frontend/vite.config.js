import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/professional-submit": {
        target: "http://localhost:8000", // Your backend server
        changeOrigin: true, // Change the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/professional-submit/, ""), // Remove the base path if necessary
      },
    },
  },
});
