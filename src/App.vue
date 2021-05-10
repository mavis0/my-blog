<template>
<div id="app">
    <img id="cover" src="./assets/IMG-novaeangliae.jpg" :class="{'cover-fade': isFade}" />
    <header>
        <img id="icon" class='animate__animated animate__pulse animate__slow animate__infinite' src="./assets/IMG-stick.png"/>
        <nav>
            <ul>
                <li>HOME</li>
                <li>ARTICLE</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
    <main>
    </main>
</div>


</template>

<script>

export default {
name: 'App',
    data: () => {
        return {
            isFade: false,
        }
    },
    mounted: function() {
        setTimeout(() => {
            this.isFade = true;
            let icon = document.getElementById('cover');
            icon.addEventListener('transitionend', () => {
                icon.parentNode.removeChild(icon);
            });
        }, 1000);
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#cover {
    top: 0;
    left: 0;
    position: absolute;
    z-index: 100;
    width: 100vw;
    transition: all 2s linear;
    clip-path: circle(95% at 55% 35%);
}
.cover-fade {
    clip-path: circle(1% at 50% 50%) !important ;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: 'PT Sans Narrow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
}
header {
    height: 80px;
    opacity: 1.0;
}
#icon {
    top: 0;
    left: 10%;
    width: 80px;
    position: absolute;
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
    line-height: 80px;
}
main {
}
</style>
