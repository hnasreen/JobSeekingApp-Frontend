import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      API_BASE_URL: "https://jobseekerapp-backend.onrender.com",
      // API_BASE_URL: "//localhost:4000",
      FILE_DIR: "/home/root.pam/BHN/files",
    }),
  ],
});