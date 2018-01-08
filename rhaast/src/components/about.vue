<template>
  <div id="content">
    <transition appear name="list">
      <!-- appear表示初始过渡 -->
      <div class="article_wrap">
        <h1>About</h1>
        <p>Welcome to my world.</p>
        <img src="http://ov8bvg1v8.bkt.clouddn.com/b975635bda80f3994a5a4c7861af9fd8d3704250fb46-xTipqo.jpg" class="Rhaast">
        <div class="message">
          <h3>Rhaast</h3>
          <p>斑马斑马</p>
          <a href="https://github.com/Rhaast">GITHUB</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}

</script>
<style scoped>
.article_wrap {
  padding-left: 30px;
  margin: 40px 0 160px 0;
  overflow: auto;
  zoom: 1
}


/*解决子元素浮动问题*/

.Rhaast {
  width: 40%
}

img {
  float: left;
  padding-bottom: 30px
}

.message {
  float: left;
  padding-left: 30px;
}

a:hover {
  text-decoration: none;
  color: #5272f9;
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
