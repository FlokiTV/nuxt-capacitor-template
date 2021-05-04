<template>
  <div class="container">
    <Nuxt />
  </div>
</template>
<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
body{
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  font-family: 'Rock Salt';
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; 
}
.container{
  /* background: #ccc; */
  position: relative;
  width: 360px;
  height: 640px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.title{
  text-align: center;
  font-size: 55px;
}
.buttons{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 240px;
}
p{
  font-family: 'Gochi Hand';
  font-size: 25px;
  text-align: center;
}
.buttons .btn{
  font-family: 'Gochi Hand';
  font-size: 20px;
  width: 200px;
  padding: 10px 0;
  background: #fff;
  border: 0;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.scene img{
  height: 100%;
  opacity: 0;
}
.click-off{
  position: absolute;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  /* background: red; */
  opacity: 0.05;
}
.preload{
  display: none;
}
.hud{
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom:0
}
.clip{
  position: absolute;
  z-index: 999;
  pointer-events: none;
}
.trigger{
  position: absolute;
  z-index: 999;
  background: red;
  opacity: 0;
  display: none;
}
</style>
