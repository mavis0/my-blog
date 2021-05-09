<template>
  <div id="app">
    <img :class="{'img-done': isDone}" src="./assets/IMG-novaeangliae.jpg" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
        isDone: false 
    }
  },
  mounted: function(){
    setTimeout(() => {
        this.isDone = true;
    }, 1000);
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
    top: 0;
    left: 0;
    width: 100vw;
    position: absolute;
    clip-path: circle(95% at 47% 50%);
    /* transition: all 5s cubic-bezier(0.075, 0.82, 0.165, 1); */
    transition: all 2s linear;
}

.img-done {
    clip-path: circle(15% at 50% 40%);
    width: 200px;
    /* left: 50px; */
    left: 3%;
}
</style>
