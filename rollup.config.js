export default {
  input: './index.js',
  output: [
    {
      file: './dist/esm.js',
      format: 'es'
    },
    {
      file: './dist/cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/amd.js',
      format: 'amd'
    },
    {
      file: './dist/umd.js',
      format: 'umd'
    }
  ]
}