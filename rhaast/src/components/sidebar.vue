<template>
  <div id="left_menu">

    <div class="info">
      <img src="../assets/mmexport1504256854011.d62ebe8.png" alt="head">
      <div class="info_name">CHAOHANG</div>
      <div class="archive">
        <ul>
          <router-link to="/article">
            <li>
              <span class="archive_count">{{articleNum}}</span>
              <span class="archive_name">日志</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <router-link to="/article" active-class="active">
          <li class="nav">
            <span>首页</span>
          </li>
        </router-link>
        <router-link to="/about" active-class="active">
          <li class="nav">
            <span>关于</span>
          </li>
        </router-link>
        <router-link to="/tags" active-class="active">
          <li class="nav">
            <span>标签</span>
          </li>
        </router-link>
        <router-link to="/articleList" active-class="active">
          <li class="nav">
            <span>归档</span>
          </li>
        </router-link>
        <router-link to="/articleEdit" active-class="active">
          <li class="nav">
            <span>留言板</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import bus from 'vertx3-eventbus-client'
  export default {
    name: 'sidebar',
    data() {
      return {
        articleNum:''
      }
    },
    mounted(){
      let self = this;
         this.bus.$on('userDefinedEvent',function(articleNum){      
             self.articleNum = articleNum;

          });
    }
  }
</script>

<style>
  #left_menu {
    float: left;
    width: 240px;
    margin-right: 20px;
    position: fixed;

  }
  @media (max-width: 767px) {
    #left_menu {
      display: none;
    }
  }
  #left_menu a:hover {
    text-decoration:none;

  }
  a:hover {
    text-decoration: none;
  }
  .menu_name {
    background: rgb(38, 42, 48);
    color: white;
    padding: 10px 0;
  }
  nav {
    background: white;
    padding: 20px 0;
    margin-top: 20px;
    border: 2px solid #000
  }
  .nav {
    padding: 8px 20px;
    text-align: left;

  }
  .info {
    margin-top: 10px;
    padding: 20px;
    background: white;
    border: 2px solid #000
  }
  .info_name {
    font-weight: 600;
    padding: 5px;
  }
  .info img {
    width: 100%;
    height: 100%;
  }
  .archive {
    padding-top: 20px;
  }
  .archive .archive_count {
    display: block;
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }
  .archive .archive_name {
    display: block;
    color: #999;
    font-size: 14px;
  }
  .communication {
    padding-top: 20px;
  }
  .communication_item {
    display: inline-block;
    width: 40%;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
  }
  .list-group-item{

  }
  .active{
    color: #fff;
    background-color: #5272f9;
    text-decoration: none;
  }

</style>
