import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //Se crea un proxy que redirige todas las solicitudes realizadas por el front end a la fase de desarrollo que se ejecuta en el puerto 3001
    //De esta forma la aplicacion funciona tanto en desarrollo como en produccion
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
