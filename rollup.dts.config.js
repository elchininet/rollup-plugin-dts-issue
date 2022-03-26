import dts from 'rollup-plugin-dts';

export default {
    plugins: [ dts() ],
    input: 'dist/types/index.d.ts',
    output: {
        file: 'dist/index.d.ts',
        format: 'cjs',
        exports: 'default'
    }
};