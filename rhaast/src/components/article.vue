<template>
  <div id="content">
    <transition-group name="list" tag="ul">
      <li class="article_wrap" v-for="item in showItems" v-bind:key="item">
        <router-link :to="{path:'/articleDetail',query:{id:item.inquire}}" class="article_title">{{item.title}}</router-link>
        <div class="article_info">
          <span class="article_info_date">发表于：{{ item.time }}</span>
        </div>
        <div class="article_gist">
          <div class="markdown-body" v-html="item.description"></div>
        </div>
        <router-link :to="{path:'/articleDetail',query:{id:item.inquire}}" class="article_button article_all">阅读全文 ></router-link>
        <div class="article_underline"></div>
      </li>
    </transition-group>
    <div class="page">
      <div class="changePage">
        <div class="inline" @click="lastPage"><img src="../assets/img/back.svg" width="60px" height="30px;"></div>
        <div class="getPosition"></div>
        <div class="showPage">{{nowPage}} / {{pages}}</div>
        <div class="inline" @click="nextPage"><img src="../assets/img/next.svg" width="60px" height="30px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import marked from 'marked'
import highlight from 'highlight.js'
import '../assets/css/atom-one-light.css'
import '../assets/css/animate.css'
export default {
  data() {
    return {
      articleNum: 0,
      nowPage: 1,
      pages: 1,
      showItems: [],
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
        this.pages = Math.ceil(res.data.length / 8);
        this.showData();
      })
    },
    showData: function() {
      let page = this.nowPage;
      let startNum = page * 8 - 8;
      let endNum = startNum + 8;
      if (endNum > this.articleNum) {
        endNum = this.articleNum;
      }
      this.showItems = this.articles.slice(startNum, endNum);
    },
    lastPage: function() {
      if (this.nowPage == 1) {
        return;
      }
      this.nowPage--;
      this.showData();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    nextPage: function() {
      if (this.nowPage == this.pages) {
        return;
      }
      this.nowPage++;
      this.showData();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}

</script>
<style scoped>
.article_wrap {
  padding: 40px;
}

.article_title {
  display: inline-block;
  color: #222;
  font-size: 34px;
  font-weight: 600;
  border-bottom: 1px solid white;
  cursor: pointer;
}

.article_title:hover {
  border-bottom: 1px solid #222;
}

.article_info {
  color: #999;
  font-size: 14px;
  padding-top: 8px;
}

.tag_margin {
  margin: 3px;
}

.article_gist {
  text-align: left;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 16px;
}

.article_button {
  display: inline-block;
  padding: 3px 12px;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  cursor: pointer;
}

.article_all:hover {
  color: white;
  background: #000;
  font-weight: 600;
}

.article_underline {
  height: 1px;
  width: 40px;
  background: #545455;
  margin: 80px auto 0;
}

.inline {
  display: inline-block;
  cursor: pointer;
}

.page {
  margin-top: 50px;
  height: 60px;
}

.showPage {
  left: 70px;
  display: inline-block;
}

.getPosition {
  display: inline-block;
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
