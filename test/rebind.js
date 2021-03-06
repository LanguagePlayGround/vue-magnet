const RebindComponent = require('./rebind.vue')
const loadjs = require('loadjs')
const VueMagnet = require('../vue-magnet.js')
const test = require('tape')
const utils = require('./shared/utils.js')
const FS = require('fs')
const WebTorrent = require('webtorrent')

test('rebinding the magnet link should correctly load the new image', (t) => {
  utils.cleanUp()
  utils.createAppDiv()

  t.plan(1)
  t.timeoutAfter(20 * 1000)

  let spaceImg64 = FS.readFileSync(require.resolve('./fixtures/space.jpg'), 'base64')
  let spaceBuffer = Buffer.from(spaceImg64, 'base64')
  spaceBuffer.name = 'space.jpg'

  let client = new WebTorrent()
  client.seed(spaceBuffer)

  loadjs('https://vuejs.org/js/vue.js', () => {
    window.Vue.use(VueMagnet)

    window.Vue.config.errorHandler = (err) => {
      client.torrents[0].destroy(() => client.destroy())
      t.fail(err.message)
    }

    window.vueInstance = new window.Vue({
      el: '#app',
      render: (h) => h(RebindComponent, { on: { success () {
        client.torrents[0].destroy(() => client.destroy())
        t.pass()
      }}})
    })
  })
})
