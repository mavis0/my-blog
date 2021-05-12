<template>
    <main>
        <cover-brief v-for="i in imgList" :key="i" :src="require('../assets/cover-img/cover-' + i + '.jpg')" :class="'cover-' + i"></cover-brief>
    </main>
</template>

<script>
import coverBrief from './coverBrief'
export default {
    components: { coverBrief },
    data: function() {
        return {
            imgList: Array.from({length: 8}, (v, k) => k+1),  
        }
    },
}
</script>

<style scoped>
main {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(3, 33.3%);
    width: 98%;
    height: calc(100vh - 80px);
    margin: 0 auto;
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