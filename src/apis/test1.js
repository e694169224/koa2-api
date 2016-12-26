module.exports = function (router) {
  router.get('/test1', async (ctx) => {
    ctx.body = '<h1>test1</h1>'
  })
}