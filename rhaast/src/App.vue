<template>
  <div id="app">
    <div class="black_line"></div>
    <div id="main">
      <router-view name="sidebar"></router-view>
      <router-view></router-view>
    </div>
    <div class="black_line"></div>
    <navfooter></navfooter>
  </div>
</template>
<script>
import navfooter from './components/navfooter'
export default {
  name: 'app',
  components: {

    navfooter

  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

a {
  color: #545455;
  cursor: pointer;
  display: block;
}

.clear {
  clear: both;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-weight: bold;
  line-height: 1.5;
}

h2,
h3,
h4,
h5,
h6 {
  margin: 20px 0 15px;
}

h1 {
  font-size: 22px;
}

@media (max-width: 767px) {
  h1 {
    font-size: 18px;
  }
}

h2 {
  font-size: 20px;
}

@media (max-width: 767px) {
  h2 {
    font-size: 16px;
  }
}

h3 {
  font-size: 18px;
}

@media (max-width: 767px) {
  h3 {
    font-size: 14px;
  }
}

h4 {
  font-size: 16px;
}

@media (max-width: 767px) {
  h4 {
    font-size: 12px;
  }
}

h5 {
  font-size: 14px;
}

@media (max-width: 767px) {
  h5 {
    font-size: 10px;
  }
}

h6 {
  font-size: 12px;
}

@media (max-width: 767px) {
  h6 {
    font-size: 8px;
  }
}

p {
  margin: 0 0 25px 0;
}

body {
  background-color: #f5f7f9;
}

a:focus {
  text-decoration: none;
  color: #fff
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  /*    background: url(assets/500463618_banner.jpg);
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-size:100% 100%;*/
}

.black_line {
  width: 100%;
  height: 2px;
  background: url(assets/img/bg-body.gif);
}

#main {
  overflow: hidden;
  width: 960px;
  text-align: center;
  margin: auto;
}

#content {
  width: 700px;
  float: left;
  background: white;
  margin-left: 28%;
  min-height: 860px;
}

</style>
