<template>
  <div id="app">
    <img id="avator" :class="{'img-done': isDone, 'animate__animated animate__pulse': isBounce}" src="./assets/IMG-novaeangliae.jpg" />
    <nav>
        <ul>
            <li>HOME</li>
            <li>ARTICLE</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
        isDone: false,
        isBounce: false
    }
  },
  mounted: function() {
    setTimeout(() => {
        this.isDone = true;
        let avator = document.getElementById('avator');
        avator.addEventListener("transitionend", () => {
          this.isBounce = true;
        })
    }, 1000);
  }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 40px;
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
    left: 3%;
}

nav {
    margin: 0 auto;
    width: max-content;
}

ul {
    list-style-type: none;
    display: inline-flex;
    justify-content: center;
}

li {
    display: inline-block;
    margin: 0 20%;
}
</style>
