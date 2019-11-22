module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
  // loaders: [
  //   { test: /iview.src.*?js$/, loader: 'babel' },
  //   { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
  // ]
}
