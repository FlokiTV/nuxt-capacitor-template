<template>
<div class="_container">
    <div class="preload">

    </div>
    <div class="scene">
        <div class="_table" ref="table">
            <div class="_card" v-for="(card, id) in cardsArray" :key="id" @click="flip(id)" :ref="'card-'+id" :data-id="card">
                <div class="inner">
                    <div class="front"></div>
                    <div class="back" :style="`background-image:url('/assets/${card}')`"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.scene{
    width: 100%;
}
._container{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
}
._table {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-wrap: wrap;
	 padding: 5px;
	 opacity: 0;

}
 ._table ._card {
	 width: calc(100%/4 - 4px);
	 height: 100px;
	 padding: 5px;
	 transition: 0.3s;
}
 ._table ._card .inner {
	 position: relative;
	 width: 100%;
	 height: 100%;
	 text-align: center;
	 transition: transform 0.6s;
	 transform-style: preserve-3d;
	 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
 ._table ._card .inner .front, ._table ._card .inner .back {
	 transition: all 0.6s;
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 backface-visibility: hidden;
}
 ._table ._card .inner .front {
	 background: #4B5CAC;
}
 ._table ._card .inner .back {
    transform: rotateY(180deg);
    background-size: contain;

}
 ._table ._card .flip {
	 transform: rotateY(180deg);
}
 ._table ._card .flip-win {
	 transform: rotateY(180deg);
}
 ._table ._card .flip-win .back {
	 opacity: 0.5;
}
</style>

<script>
export default {
    data(){
        return {
            cardsArray:[],
            colors: [
                "1.jpg",
                "2.jpg",
                "3.jpg",
            ]
           
        }
    },
    mounted(){
        for(let i = 0; i < this.colors.length; i++){
            this.cardsArray[i] = this.colors[i]
        }
        this.cardsArray = this.cardsArray.concat(this.cardsArray)
        this.cardsArray.sort(() => Math.random() - 0.5)

        let sound = this.$sounds.get('/audio/game.mp3')
        if(!sound){
            this.$sounds.play('/audio/game.mp3', 0.1, true)
        }


        this.anime.timeline({loop: false})
            .add({
                targets: 'body',
                background: "#FFB9B9",
                duration: 1000,
                easing: 'linear'
            })
            .add({
                targets: '.scene ._table',
                opacity: 1,
                duration: 1200,
            })
    },
    methods:{
        getMatchs(){
            return this.$refs['table'].querySelectorAll(".inner.flip-win")
        },
        getFliped(){
            return this.$refs['table'].querySelectorAll(".inner.flip")
        },
        isMatch(){
            let flip = this.getFliped()
            return flip[0].parentElement.getAttribute('data-id') ==  flip[1].parentElement.getAttribute('data-id')
        },
        flip(card){
            let flip = this.getFliped()
            let checkCard = this.$refs['card-'+card][0].querySelector(".inner").classList.contains("flip-win") | this.$refs['card-'+card][0].querySelector(".inner").classList.contains("flip")
            if(checkCard) return
            if(flip.length >= 2) return
            else{
                this.$refs['card-'+card][0].querySelector(".inner").classList.add("flip")
                this.$sounds.play('/audio/flip.mp3', 0.1)
            }
            flip = this.getFliped()
            if(flip.length >= 2){
                let check = this.isMatch()
                if(check)
                    this.$sounds.play('/audio/match.mp3', 0.1)

                setTimeout(()=>{
                    flip.forEach(element => {
                        element.classList.remove("flip")
                        if(check)
                            element.classList.add("flip-win")
                    })
                    let matchs = this.getMatchs()
                    if(matchs.length == this.colors.length*2) this.end()
                },check ? 200 : 1000)
            }
        },
        end(){
            setTimeout(()=>{
                this.$router.push({
                    path: "15"
                })
            }, 1500)
        }
    }
}
</script>