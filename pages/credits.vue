<template>
    <div id="credits">
        <h1 class="title">Credits</h1>
        <p>Draw: @_mari_arts_</p>
        <p>Code: @flokitv.live</p>
        <div class="buttons" @click="$sounds.play('audio/click.ogg')">
            <nuxt-link class="btn" to="/">back</nuxt-link>
        </div>
    </div>
</template>

<style>
#credits{
    padding: 20px;
}
#credits .buttons{
    margin-top: 150px;
}
</style>

<script>
export default {
    mounted(){
        this.anime({
            targets: 'body',
            background: "#90f5ff",
            duration: 2200,
            easing: 'linear'
        })
    }
}
</script>