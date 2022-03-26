import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            outDir: './types',
            module: 'esnext'
        })
    ],
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'default'
    }
};