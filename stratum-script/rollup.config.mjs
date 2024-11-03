import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'index.js',
  output: {
    format: 'es',
    file: './dist/stratum.js'
  },
  plugins: [nodeResolve(), terser()]
};
