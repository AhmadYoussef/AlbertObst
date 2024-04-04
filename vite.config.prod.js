import path from "path";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import EnvironmentPlugin from 'vite-plugin-environment'
import visualizer from 'rollup-plugin-visualizer';

module.exports = {
  plugins: [
    react({}),
    commonjs(),
    EnvironmentPlugin('all', { prefix: 'NODES_' }),
    EnvironmentPlugin(["NODE_ENV"]),
    visualizer(), // Add this line to include the visualizer plugin
  ],
  build: {
    outDir: "build",
    // assetsDir: './',
    minify: true,
    sourcemap: true, // turn it true if you wanna debug
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/testSetup.js',
    css: true,
  },
};
