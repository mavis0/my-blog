<template>
<div id="content">
    <h1>{{ blog.title }}</h1>
    <span>{{ dateNor(blog.createTime) }} · {{ blog.view }}阅读</span>
    <div v-html="bodyHtml" class="markdown-body"> </div>
</div>
</template>

<script>
import marked from 'marked';
import 'github-markdown-css'

export default {
    data: function() {
        return {
            blog: { createTime: '', body: ''},
        }
    },
    created: function() {
        this.axios.get('http://localhost:3000/backend/post/' + this.$route.params.id).then( response => {
            if (!Array.isArray(response.data) && response.data === 'not find') {
                this.$router.push('/404');
            }
            this.blog = response.data;
        });
    },
    methods: {
        dateNor: function (d) {
            return d.replace(/T/, ' ').replace(/\..+/, '');
        }
    },
    computed: {
        bodyHtml: function() {
            return marked(this.blog.body);
        }
    }
}
</script>

<style scoped>
#content {
    width: 60%;
    margin: 0 auto;
    background: white;
}
h1, span {
    display: block;
    text-align: center;
    padding: 8px;
}
.markdown-body {
    padding: 50px;
}

</style>