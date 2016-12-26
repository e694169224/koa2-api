module.exports = function (router) {
  router.get('/hello/:name', async (ctx) => {
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}!</h1>`
  })

  router.get('/', async (ctx) => {
    ctx.body = '<h1>Index</h1>'
  })
}