<template>
  <div>
    <video v-magnet="sintelMagnet" @magnet-loaded="check($event)" controls autoplay></video>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      sintelMagnet: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent&path=Sintel.mp4'
    }
  },
  methods: {
    check (event) {
      let elem = event.currentTarget

      if (elem.autoplay && !elem.paused && elem.controls) {
        this.$emit('success')
      } else {
        throw new Error('incorrect video tag settings')
      }
    }
  }
}
</script>
