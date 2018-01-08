<template>
  <transition appear name="list">
  <div class="content-wrap">
    <div id="content" class="content">
      <section id="posts" class="posts-collapse">
        <span class="archive-move-on"></span>
        <div class="collection-title">
          <h2 class="archive-year motion-element">2017</h2>
          <p class="article_total">共计{{articleNum}}篇文章</p>
        </div>
          <li class="post-header" v-for="item in showItems" v-bind:key="item">
            <h1 class="post-title">
              <router-link :to="{path:'/articleDetail',query:{id:item.inquire}}" class="post-title-link">
              
                <span itemprop="name">{{item.title}}</span>
                <span>{{item.articleNum}}</span>
              </router-link>        
            </h1>
            <div class="post-meta">
              <time class="post-time" itemprop="dateCreated" datetime="2017-05-23T10:05:03+08:00" content="2017-05-23">
                {{item.time}}
              </time>
            </div>
          </li>
      </section>
    </div>
  </div>
</transition>
</template>
<style scoped>
.content-warp {
  float: right;
  box-sizing: border-box;
  padding: 40px;
  width: 700px;
  background: #fff;
  min-height: 700px;
  box-shadow: initial;
  border-radius: initial;
}

.posts-collapse {
  position: relative;
  z-index: 1010;
  margin-left: 55px;
  margin-bottom: 60px;
}

.page-archive .posts-collapse .archive-move-on {
  position: absolute;
  top: 11px;
  left: 0;
  margin-left: -6px;
  width: 10px;
  height: 10px;
  opacity: 0.5;
  background: #555;
  border: 1px solid #fff;
  border-radius: 50%;
}

.page-archive .archive-page-counter {
  position: relative;
  top: 3px;
  left: 20px;
}

.posts-collapse .collection-title {
  position: relative;
  margin: 60px 0;
}

.posts-collapse .post-header {
  position: relative;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: border;
  border-bottom: 1px dashed #ccc;
}

.posts-collapse .post-header::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 12px;
  width: 6px;
  height: 6px;
  margin-left: -4px;
  background: #bbb;
  border-radius: 50%;
  border: 1px solid #fff;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: background;
}

.posts-collapse .post-title {
  margin-left: 60px;
  font-size: 16px;
  font-weight: normal;
  line-height: inherit;
}

.posts-collapse .post-meta {
  position: absolute;
  font-size: 12px;
  left: 20px;
  top: 5px;
}

.page-archive .archive-page-counter {
  position: relative;
  top: 3px;
  left: 20px;
}

.posts-collapse .collection-title {
  position: relative;
  margin: 60px 0;
}

.posts-collapse .collection-title::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -4px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  background: #bbb;
  border-radius: 50%;
}

.posts-collapse .collection-title h2 {
  margin-left: 20px;
}

h2 {
  font-size: 20px;
  margin: 20px 0 15px;
}

.posts-collapse .post {
  margin: 30px 0;
}

h1 {
  margin: 0;
  padding: 0;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}

.posts-collapse::after {
  content: " ";
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: -2px;
  width: 4px;
  height: 100%;
  background: #f5f5f5;
  z-index: -1;
}

body {
  position: relative;
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 14px;
  line-height: 2;
  color: #555;
  background: #f5f7f9;
}

.posts-collapse .post-meta {
  position: absolute;
  font-size: 14px;
  left: 20px;
  top: 5px;
}

.posts-collapse .post-header {
  margin-top: 32px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1.5s;
}

.list-enter,
.list-leave-to
/* .list-leave-active for below version 2.1.8 */

{
  opacity: 0;
  transform: translateY(30px);
}

</style>
<script>
import axios from 'axios'
import '../assets/css/animate.css'
import { bus } from '../assets/js/bus.js'
export default {
  data() {
    return {
      nowPage: 1,
      showItems: [],
      articleNum: ''
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.getArticle();
    });
  },
  methods: {
    getArticle: function() {
      let that = this;
      axios({
        url: 'http://127.0.0.1:3000/users/get-article',
        dataType: 'json',
        method: 'get',
      }).then((res) => {
        that.articles = res.data;
        this.articleNum = res.data.length;
        this.showData();
      })
    },
    showData: function() {
      let page = this.articles;
      this.showItems = this.articles;
      this.articleNum = this.articleNum;
      bus.$emit("userDefinedEvent", this.articleNum)
    }
  }
}

</script>
