<template>
<div>
    <div class="preload">
        <img src="/assets/p0.jpg">
        <img src="/assets/p1.jpg">
        <img src="/8.jpg">
    </div>
    <div class="scene">
        <!-- <nuxt-link to="5"> -->
            <img src="/9.jpg" ref="img">
        <!-- </nuxt-link> -->
        <div class="click-off" ref="click-off"></div>
    </div>
    <div class="hud">
        <img class="trigger stop" ref="stop" src="/assets/p0.jpg">
        <div class="trigger tr" @click="_do()" ref="trigger"></div>
    </div>
</div>
</template>

<style>
.tr{
    left: 250px;
    top: 392px;
    width: 50px;
    height: 50px;
}
.stop{
    left: 195px;
    top: 195px;
    display: block;
    opacity: 0;
}
</style>

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
        const TRG = this.$refs["trigger"]
        this.anime.timeline({loop: false})
            .add({
                targets: 'body',
                background: "#4A4A4A",
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
                targets: '.hud .stop',
                opacity: [0,1],
                duration: 2200,
                easing: 'linear',
                complete: function(anim) {
                    TRG.style.display = "block"
                }
            })
    },
    methods:{
        _do(){
            this.$refs["trigger"].remove()
            this.$refs["stop"].src = "/assets/p1.jpg"
            this.$sounds.play('/audio/switch.ogg', 0.1, false)    
            setTimeout(()=>{
                this.$router.push({
                    path: "9"
                })
            }, 3000)
        },
    }
}
</script>