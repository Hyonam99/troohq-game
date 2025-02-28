import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPath from "vite-tsconfig-paths" //configure vite to support absolute paths in tsconfig.json

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), viteTsConfigPath()],
	server: {
		open: true,
		port: 5034, //open the app on this port while locally
	},
});
