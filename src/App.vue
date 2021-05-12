<template>
<div id="app" :class="{'app-back': isShow}">
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
        <cover-brief v-for="i in imgList" :key="i" :src="require('./assets/cover-img/cover-' + i + '.jpg')" :class="'cover-' + i"></cover-brief>
    </main>
</div>


</template>

<script>
import coverBrief from './components/coverBrief'
export default {
    name: 'App',
    components: { coverBrief },
    data: function(){
        return {
            isFade: false,
            isShow: false,
            imgList: Array.from({length: 8}, (v, k) => k+1),  
        }
    },
    mounted: function() {
        setTimeout(() => {
            this.isFade = true;
            let icon = document.getElementById('cover');
            icon.addEventListener('transitionend', () => {
                icon.parentNode.removeChild(icon);
                this.isShow = true;
            });
        }, 1000);
    },
    methods: {
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
    height: 100vh;
    transition: all 2s linear;
}
.cover-fade {
    opacity: 0;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: 'PT Sans Narrow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
}
.app-back {
    background: url('./assets/IMG-novaeangliae.jpg');
}
header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    align-content: center;
}
li {
    display: inline-block;
    margin: 0 20%;
    font-size: 20px;
    cursor: pointer;
}
li:hover {
    color: blue;
    font-size: 22px;
}
main {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(3, 33.3%);
    width: 98%;
    height: calc(100vh - 80px);
    margin: 0 auto;
}
.cover {
    height: 100%;
    width: 100%;
}
.cover-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    height: 100%;
    width: 100%;
}
.cover-2 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
}
.cover-3 {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
}
.cover-4 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}
.cover-5 {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
}
.cover-6 {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
}
.cover-7 {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
}
.cover-8 {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
}
</style>
