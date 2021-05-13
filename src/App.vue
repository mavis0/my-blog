<template>
<div id="app">
    <img id="cover" src="./assets/IMG-novaeangliae.jpg" :class="{'cover-fade': isFade}" />
    <header>
        <img id="icon" @click="goHome" class='animate__animated animate__pulse animate__slow animate__infinite' src="./assets/IMG-stick.png"/>
        <nav>
            <ul>
                <li><router-link to="/home">HOME</router-link></li>
                <li><router-link to="/articles">ARTICLES</router-link></li>
                <li><router-link to="/about">ABOUT</router-link></li>
                <li><router-link to="/contact">CONTACT</router-link></li>
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
            });
        }, 1000);
    },
    methods: {
        goHome: function() {
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#cover {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 100;
    transition: all 1.5s linear;
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
    background: whitesmoke scroll;
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
    cursor: pointer;
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
a {
    color: black;
    text-decoration: none;
}
a:hover {
    color: blue;
    font-size: 22px;
}
</style>
