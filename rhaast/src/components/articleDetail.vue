<template>
  <div id="content">
    <transition name="list">
      <div class="article-container" v-bind:key="content">
        <div class="markdown-body" v-html="content"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import _ from 'lodash'
import marked from 'marked'
import '../assets/css/atom-one-light.css'
import axios from 'axios'
import highlight from 'highlight.js'
import '../assets/css/animate.css'
export default {
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl: function() {
      let aUrl = document.URL;
      let str = ["0"];
      if (aUrl.indexOf("id=") != -1) {
        str = aUrl.split("id=");
      }
      this.id = str[1];
      console.log(this.id);
      this.getData();
    },
    getData: function() {
      let that = this;
      axios({
        url: 'http://127.0.0.1:3000/users/get-content',
        method: 'get',
        params: { "inquire": that.id },
      }).then(res => {
        that.content = res.data[0].content;
      })
    },
  }
}

</script>
<style scoped>
.article_detail_title {
  cursor: default;
  margin: 40px 0 0;
}

.article_detail_content {
  text-align: left;
  padding: 60px 0;
  font-size: 18px;
}

#content {
  text-align: left;
  padding: 24px;
}

.list-enter-active,
.list-leave-active {
  transition: all 2s;
}

.list-enter,
.list-leave-to
/* .list-leave-active for below version 2.1.8 */

{
  opacity: 0;
  transform: translateY(30px);
}

</style>
