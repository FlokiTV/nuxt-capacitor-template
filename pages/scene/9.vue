<template>
<div>
    <div class="preload">
        <img src="/13.jpg">
    </div>
    <div class="scene">
        <nuxt-link @click.native="next" to="10">
            <img src="/12.jpg" ref="img">
        </nuxt-link>
        <div class="click-off" ref="click-off"></div>
    </div>
</div>
</template>


<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
        let sound = this.$sounds.get('/audio/game.mp3')
        if(!sound)
            this.$sounds.play('/audio/game.mp3', 0.1, true)
        sound = this.$sounds.get('/audio/game.mp3')
        sound.sound.fade(0.1, 0.05, 2000)
        this.$sounds.stop('/audio/escritorio.mp3')    
        this.$sounds.play('/audio/escritorio.mp3', 0.1, true)    
        const IMG = this.$refs['img']
        const CLK = this.$refs['click-off']
        this.anime.timeline({loop: false})
            .add({
                targets: 'body',
                background: "#fff",
                duration: 1000,
                easing: 'linear'
            })
            .add({
                targets: '.scene img',
                opacity: [0,1],
                duration: 2200,
                easing: 'linear',
            })
            
            .add({
                targets: '.scene img',
                opacity: [1,0],
                duration: 500,
                delay: 1000,
                easing: 'linear',
                complete: function(anim) {
                    IMG.src = "/13.jpg"
                }
            })
            .add({
                targets: '.scene img',
                opacity: [0,1],
                duration: 500,
                easing: 'linear'
            })
            .add({
                targets: '.scene img',
                opacity: [1,0],
                duration: 500,
                delay: 1000,
                easing: 'linear',
                complete: function(anim) {
                    IMG.src = "/12.jpg"
                }
            })
            .add({
                targets: '.scene img',
                opacity: [0,1],
                duration: 500,
                easing: 'linear',
                complete: function(anim) {
                    CLK.remove()
                }
            })
    },
    methods:{
      next(){
        this.$sounds.fadeOut('/audio/escritorio.mp3')
        let sound = this.$sounds.get('/audio/game.mp3')
        sound.sound.fade(0.05, 0.1, 2000)
      }
    }
}
</script>