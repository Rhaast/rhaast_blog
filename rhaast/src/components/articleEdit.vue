<template>
  <div>
    <transition appear name="list">
      <div id="content">
        <div class="edit_wrap">
          <div class="return_button">
            <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
          </div>
          <div class="edit_head">标题</div>
          <el-input v-model="title" placeholder="请输入标题"></el-input>
          <div class="edit_head">内容 (Markdown编辑器)</div>
          <div class="markdown">
            <textarea class="markdown_input" v-model="content" @input="update"></textarea>
            <div class="markdown_compiled" v-html="compiledMarkdown()"></div>
            <div class="clear"></div>
          </div>
          <div class="article_button article_all">
            <span @click="saveArticle">保存 ></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import _ from 'lodash'
import marked from 'marked'
import hightlight from 'highlight.js'
import '../assets/css/atom-one-light.css'
import axios from 'axios'
marked.setOptions({
  hightlight: function(code) {
    return hightlight.hightlightAuto(code).value
  }
})
export default {
  name: 'articleEdit',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    // 编译Markdown
    compiledMarkdown: function() {
      return marked(this.content, { sanitize: true })
    },
    saveArticle: function() {
      if (this.title == "") {
        this.$message.error('未填写标题');
        return;
      }
      if (this.content == "") {
        this.$message.error('未填写内容');
        return;
      }
      axios({
        url: 'http://127.0.0.1:3000/users/sub-board',
        method: 'post',
        data: {
          "title": this.title,
          "content": this.content
        },
      }).then((res) => {
        console.log(res.data.status);
      })
      this.$message('提交成功');
    },
    // 保存成功后跳转至文章列表页
    goBack: function() {
      this.$router.go(-1)
    }
  }
}

</script>
<style>
.edit_wrap {
  padding: 40px;
  font-size: 16px;
}

.return_button {
  text-align: left;
  margin-bottom: 40px;
}

.tag_wrap {
  text-align: left;
  padding: 20px 0;
}

.tag_wrap .input-new-tag {
  width: 80px;
  height: 28px;
}

.edit_wrap textarea {
  outline: none;
  font-size: 16px;
}

.edit_head {
  margin: 20px 0;
  text-align: left;
}

.markdown {
  text-align: left;
  border: 1px solid #bfcbd9;
  /*-webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;*/
  width: 100%;
  height: 400px;
  vertical-align: top;
  background: #f5f7f9;
  overflow: hidden;
}

.markdown textarea {
  border: none;
  resize: none;
  /*不可拖动*/
}

.markdown_input {
  float: left;
  display: inline-block;
  width: 49%;
  height: 98%;
  background-color: white;
  padding-left: 1%;
  padding-top: 1%;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.markdown_compiled {
  overflow: auto;
  float: right;
  display: inline-block;
  width: 49%;
  height: 100%;
  padding: 5px 0 5px 1%;
  background-color: #5272f9;
  color: #fff;
}

.article_button {
  display: inline-block;
  font-size: 14px;
  border: 2px solid #222;
  padding: 3px 12px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 40px
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

.el-message {
  margin-left: 160px;
}

.el-message img {
  background: url(../assets/img/data_image_svg+xml;….svg);
  z-index: 1
}

</style>
