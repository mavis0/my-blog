<template>
<div id="contentBrief">
    <div class="wrap" v-for="(briefInfo, key) in briefInfos" :key="key">
        <section class="header">
            <h1>{{ briefInfo.title }}</h1>
            <span>{{ dateNor(briefInfo.createTime) }} · {{ briefInfo.view }}阅读</span>
        </section>
        <section class="content">
            {{ briefInfo.excerpt }}
        </section>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            briefInfos: []
        }
    },
    created: function() {
        this.axios.get('http://localhost:3000/posts').then((response) => this.briefInfos = response.data);
    },
    methods: {
        dateNor: function (d) {
            return d.replace(/T/, ' ').replace(/\..+/, '');
        }
    }
}
</script>

<style scoped>
#contentBrief {
    width: 60%;
    margin: 0 auto;
    background: white;
}
h1 {
    margin-bottom: 10px;
}
.wrap {
    width: 50%;
    margin: 20px auto;
    border-bottom: 1px solid #eee;
    border-radius: 6px;
    padding: 20px;
}
.content {
    margin-top: 20px;
}
.header {
    /* text-align: center; */
}
</style>