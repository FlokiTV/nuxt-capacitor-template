<template>
<div>
    <div class="preload">
        <img src="/assets/len.png">
        <img src="/8.jpg">
    </div>
    <div class="scene">
        <!-- <nuxt-link to="5"> -->
            <img src="/8.jpg" ref="img">
        <!-- </nuxt-link> -->
        <div class="click-off" ref="click-off"></div>
    </div>
    <div class="hud" @mousemove="doDrag">
        <img :style="`opacity: ${hasLen ? 1 : 0};top: ${ev.y-10}px; left: ${ev.x-50}px`" src="/assets/len.png" class="clip len" ref="mouse">
        <div class="trigger len-tr" @mouseenter="trigger" ref="trigger"></div>
        <div class="trigger len-tr-do" @mouseenter="triggerdo" ref="trigger-do"></div>

    </div>
</div>
</template>

<style>
.len{
    width: 100px;
}
.len-tr{
    width: 135px;
    height: 100px;
    bottom: 0;
    left: 110px;
}
.len-tr-do{
    width: 50px;
    height: 30px;
    top: 90px;
    left: 160px;
}
</style>

<script>
export default {
    data(){
        return{
            hasLen: false,
            ev:{}
        }
    },
    mounted(){
        let sound = this.$sounds.get('/audio/game.mp3')
        if(!sound){
            this.$sounds.play('/audio/game.mp3', 0.1, true)
        }
        const IMG = this.$refs['img']
        const CLK = this.$refs['click-off']
        const TRG = this.$refs['trigger']
        this.anime.timeline({loop: false})
            .add({
                targets: 'body',
                background: "#151515",
                duration: 1000,
                easing: 'linear'
            })
            .add({
                targets: '.scene img',
                opacity: [0,1],
                duration: 2200,
                easing: 'linear',
                complete: function(anim) {
                    // CLK.remove()
                    TRG.style.display = 'block'
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
        trigger(){
            this.hasLen = true
            this.$refs["trigger"].remove()
            this.$refs["trigger-do"].style.display = 'block'
        },
        triggerdo(){
            this.$refs["trigger-do"].remove()
            setTimeout(()=>{
                this.$refs["mouse"].remove()
            }, 1000)
            setTimeout(()=>{
                this.$router.push({
                    path: "6"
                })
            }, 3000)
        },
        doDrag(ev){
            if(ev.offsetY > 1 && ev.offsetX > 1 && ev.target.classList.contains('hud'))
                this.ev = { x: ev.offsetX, y: ev.offsetY}
        }
    }
}
</script>