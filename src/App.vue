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
    <router-view></router-view>
</div>


</template>

<script>
export default {
    name: 'App',
    data: function(){
        return {
            isFade: false,
            isShow: false,
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
</style>
