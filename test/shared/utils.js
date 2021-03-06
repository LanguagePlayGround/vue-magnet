module.exports = {
  createAppDiv () {
    let previousAppElement = document.querySelector('#app')
    if (previousAppElement) {
      previousAppElement.remove()
    }
    let appElement = document.createElement('div')
    appElement.setAttribute('id', 'app')
    document.body.appendChild(appElement)
  },
  cleanUp () {
    if (window.vueInstance) {
      let vm = window.vueInstance
      vm.$el.remove()
      vm.$destroy()
      delete window.vueInstance
    }
    if (window.Vue && window.Vue.WebTorrent) window.Vue.WebTorrent.destroy()
    delete window.Vue
  }
}
