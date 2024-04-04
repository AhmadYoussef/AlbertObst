/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import EnvironmentPlugin from 'vite-plugin-environment'

module.exports = {
  plugins: [
    react({
       fastRefresh: true, // Disable Fast Refresh
    }),
    commonjs(),
    EnvironmentPlugin('all', { prefix: 'NODES_' }),
    EnvironmentPlugin(["NODE_ENV"]),
  ],
  build: {
    outDir: "build",
    // assetsDir: './',
    minify: true,
    sourcemap: true, // turn it true if you wanna debug
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9001/",
        changeOrigin: true,
        // secure: false,
        // ws: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/testSetup.js',
    css: true,
  },
};
