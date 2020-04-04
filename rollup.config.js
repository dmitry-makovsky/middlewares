const external = ['querystring'];

export default ['body-parser'].map((name) => ({
  input: `./${name}/${name}.es.js`,
  output: {
    format: 'cjs',
    file: `./${name}/cjs/${name}.cjs.js`,
    sourcemap: false,
    strict: false
  },
  external
}));