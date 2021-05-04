<template>
<div>
    <div class="scene">
        <nuxt-link to="2">
            <img src="/1.jpg" @load="load()">
        </nuxt-link>
    </div>
    <div class="helper">
        <img src="/touch-on.svg">
    </div>
</div>
</template>

<style>
.helper{
    width: 120px;
    position: absolute;
    right: 0;
    bottom: 0;
}
.helper img{
    opacity: 0;
}
</style>

<script>
export default {
    mounted(){
        let sound = this.$sounds.get('/audio/game.mp3')
        if(!sound){
            this.$sounds.play('/audio/game.mp3', 0.1, true)
        }

        this.anime({
            targets: 'body',
            background: "#FFF",
            duration: 1000,
            easing: 'linear'
        })

        this.anime({
            targets: '.helper img',
            opacity: [0,1,0,0,0,0,1,0],
            duration: 5000,
            delay: 2000
            // easing: 'linear'
        })
    },
    methods:{
        load(){
            this.anime({
                targets: '.scene img',
                opacity: [0,1],
                duration: 2200,
                // easing: 'linear'
            })
        }
    }
}
</script>