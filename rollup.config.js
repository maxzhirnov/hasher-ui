import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/renderer.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'dist/renderer.js',
        globals: {
            'svelte/internal': 'svelteInternal',
        }
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production,
            },
            emitCss: false
        }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
            exportConditions: ['svelte']
        }),
        !production && livereload('dist'),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
