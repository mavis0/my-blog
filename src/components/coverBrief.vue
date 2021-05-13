<template>
<div id="wrap">
    <img :src="src" />
    <section id="title">
        <h3>这是第三篇</h3>
        <span>2020.3.15</span>
    </section>
    <caption>
        fasdfasdfjalksjf;ajkfa;sljfalkj
    </caption>
</div>
</template>

<script>

export default {
    props: ['src'],
}
</script>

<style scoped>
#wrap {
    position: relative;
}
#wrap:hover caption {
    display: flex;
}
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
#title {
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-family: 'Goblin One', cursive;
    font-size: xx-large;
}
caption {
    display: none;
    position: absolute;
    font-size: 20px;
    color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5));
}
</style>
