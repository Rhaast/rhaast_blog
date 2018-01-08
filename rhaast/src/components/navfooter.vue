<template>
  <footer id="footer" class="footer">
    <div class="footer-inner">
      <div class="copyright">
        ©
        <span itemprop="copyrightYear">2017</span>
        <span class="with-love">
      <i class="fa fa-heart"></i>
    </span>
        <span class="author" itemprop="copyrightHolder">Rhaast</span>
      </div>
      <p>Copyright @ 2017 Powered by Vue. Designed by me
        <router-link :to="{name: 'login'}" tag="span" class="login"></router-link>
      </p>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  margin: 24px auto 0;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  color: #999;
  overflow: auto;
}

.footer-inner {
  width: 960px;
  padding-left: 260px;
  text-align: center;
  box-sizing: border-box;
  margin: 20px auto;
}

.powered-by {
  margin-right: 10px;
}

.powered-by,
.theme-info {
  display: inline-block;
}

a {
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
}


a {
  background-color: transparent;
}

.powered-by::after {
  content: "|";
  padding-left: 10px;
}

</style>
