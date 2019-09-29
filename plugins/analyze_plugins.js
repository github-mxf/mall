
class AnalyzeWebpackPlugin {
  constructor(opts = { filename: 'analyze.html', jsString: '' }) {
    this.opts = opts
  }

  apply(compiler) {
    const self = this
    // compiler.plugin("after-resolvers", function() {
    //   console.log('1234567890')
    // })
    // compiler.plugin("after-environment", function() {
    //   console.log('12345678')
    // })
    // compiler.plugin("before-run", function() {
    //   console.log('123456')
    // })

    compiler.plugin("emit", function (compilation, callback) {
      let stats = compilation.getStats().toJson({ chunkModules: true }).assets
      console.log(stats);
      let stringifiedStats = JSON.stringify(stats)
      stringifiedStats = stringifiedStats.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      console.log(stringifiedStats);
      
      let html = `<!doctype html>
          <meta charset="UTF-8">
          <title>AnalyzeWebpackPlugin</title>
          <div id="App"></div>
          <script>window.stats = ${stringifiedStats};</script>
      `

      compilation.assets[`${self.opts.filename}`] = {
        source: () => html,
        size: () => html.length
      }

      callback()
    })
  }
}

module.exports = AnalyzeWebpackPlugin