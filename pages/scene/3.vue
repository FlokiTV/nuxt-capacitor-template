<template>
<div>
    <div class="preload">
        <img src="/5.jpg">
        <img src="/6.jpg">
    </div>
    <div class="scene">
        <nuxt-link to="4">
            <img src="/5.jpg" ref="img">
        </nuxt-link>
        <div class="click-off" ref="click-off"></div>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        let sound = this.$sounds.get('/audio/game.mp3')
        if(!sound){
            this.$sounds.play('/audio/game.mp3', 0.1, true)
        }
        const IMG = this.$refs['img']
        const CLK = this.$refs['click-off']
        this.anime.timeline({loop: false})
            .add({
                targets: 'body',
                background: "#FFE187",
                duration: 1000,
                easing: 'linear'
            })
            .add({
                targets: '.scene img',
                opacity: [0,1],
                duration: 2200,
                easing: 'linear',
                complete: function(anim) {
                    CLK.remove()
                }
            })
            // .add({
            //     targets: '.scene img',
            //     opacity: [1,0],
            //     duration: 500,
            //     easing: 'linear',
            //     complete: function(anim) {
            //         IMG.src = "/3.jpg"
            //     }
            // })
            // .add({
            //     targets: '.scene img',
            //     opacity: [0,1],
            //     duration: 500,
            //     easing: 'linear'
            // })
            // .add({
            //     targets: '.scene img',
            //     opacity: [1,0],
            //     duration: 500,
            //     easing: 'linear',
            //     complete: function(anim) {
            //         IMG.src = "/4.jpg"
            //     }
            // })
            // .add({
            //     targets: '.scene img',
            //     opacity: [0,1],
            //     duration: 500,
            //     easing: 'linear',
            //     complete: function(anim) {
            //         CLK.remove()
            //     }
            // })
    },
    methods:{

    }
}
</script>