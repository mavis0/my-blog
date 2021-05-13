<template>
    <div id="contact">
        <img src="../assets/IMG-novaeangliae.jpg" />
        <section>
            <a href="http://www.baidu.com"><font-awesome-icon :icon="['fab', 'twitter']" class="icon" size='4x' /></a>
            <a href="https://weibo.com/2764433955"><font-awesome-icon :icon="['fab', 'weibo']" class="icon" size='4x' /></a>
            <a href="https://www.zhihu.com/people/liao-jing-11"><font-awesome-icon :icon="['fab', 'zhihu']" class="icon" size='4x' /></a>
            <a href="https://github.com/mavis0"><font-awesome-icon :icon="['fab', 'github']" class="icon" size='4x' /></a>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#contact {
    height: calc(100vh - 80px - 30px);
}
a{
    color: black;
}
img {
    display: inherit;
    margin: 30px auto 0;
    width: 50%;
    clip-path: circle(20% at 48% 37%);
}
section {
    display: flex;
    justify-content: space-around;
    width: 40%;
    align-items: center;
    margin: 0 auto;
    position: relative;
    top: -8%;
}
</style>