<template>
  <div id="menu">
    <h1 class="title">For You</h1>
    <div class="buttons" @click="$sounds.play('audio/click.ogg')">
      <nuxt-link class="btn" to="scene/1" @click.native="$sounds.fadeOut('audio/menu.mp3', 3000)">Play</nuxt-link>
      <nuxt-link class="btn" to="credits">Credits</nuxt-link>
    </div>
  </div>
</template>

<style>
#menu{
  padding: 20px;
}
</style>

<script>
export default {
  data: () => {
    return {
    }
  },
  created(){
    let sound = this.$sounds.get('/audio/game.mp3')
    if(sound) this.$sounds.stop('/audio/game.mp3')
  },
  mounted(){
    let sound = this.$sounds.get('audio/menu.mp3')
    if(!sound){
      this.$sounds.play('audio/menu.mp3', 0.3, true)
    }
    // console.log(sound.sound.playing())
    var textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    this.anime({
      targets: 'body',
      background: "#FFE187",
      duration: 3200,
      delay:500,
      easing: 'linear'
    })
    this.anime.timeline({loop: false})
      .add({
        targets: '.title .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      })
      this.anime.timeline({loop: false})
        .add({
          targets: '.buttons .btn',
          opacity: [0,1],
          duration: 1200,
          delay: (el, i) => 500 + 100 * i
        })
  },
  methods: {
  }
}
</script>


