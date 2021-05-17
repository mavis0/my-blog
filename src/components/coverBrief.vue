<template>
<div id="wrap" @click="$router.push('/post/' + briefInfo.id)">
    <img :src="src" />
    <section id="title">
        <h3>{{ briefInfo.title }}</h3>
        <span>{{ dateNor(briefInfo.createTime) }}</span>
    </section>
    <caption>
        {{ briefInfo.excerpt }}
    </caption>
</div>
</template>

<script>

export default {
    props: {
        'src': String,
        'briefInfo': { type: Object, default: function() { return { createTime: ''} }}
    },
    methods: {
        dateNor: function (d) {
            return d.replace(/T/, ' ').replace(/\..+/, '');
        }
    }
}
</script>

<style scoped>
#wrap {
    position: relative;
    cursor: pointer;
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
