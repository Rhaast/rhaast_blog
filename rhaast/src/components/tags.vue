<template>
  <div id="content" class="content">


    <div class="posts-expand">
    <header class="post-header">

  	<h1 class="post-title" itemprop="name headline">tags</h1>



  </header>



        <div class="tag-cloud">
          <div class="tag-cloud-title">
              目前共计 {{cateNum}}个标签
          </div>
          <div class="tag-cloud-tags" v-show="chosed">
              <transition-group name="list" tag="ul">
                <li v-for="item in allCate" v-bind:key="item">
                  <span @click="showTitle(item)">{{item.cateName}}</span>
                  
                </li>

              </transition-group>
          </div>
              <transition name="list">
                <div class="showCate2" v-if="!chosed">
                 <span class="nowCate">当前分类：</span><span class="chosedClass">{{myCate}}</span>
              </div>
              </transition>
              <div class="showTitle">
                 <transition-group name="list" tag="ul" 
                     enter-class="list1-in-enter"
                     enter-active-class="list1-in-active"
                     leave-class="list1-out-enter"
                    leave-active-class="list1-out-active">
                   <li v-for="item in showItems" v-bind:key="item">
                     <span class="timeSet">{{item.time}}</span>
                     <router-link :to="{path:'/articleDetail',query:{id:item.inquire}}">{{item.title}}</router-link>
                   </li>
                 </transition-group>
              </div>
              <div class="page">
                <div class="changePage">
                  <div class="inline" @click="lastPage"><img src="../assets/back.svg" width="60px" height="30px;"></div>
                  <div class="getPosition"></div>
                  <div class="showPage">{{nowPage}} / {{pages}}</div>
                  <div class="inline" @click="nextPage"><img src="../assets/next.svg" width="60px" height="30px;"></div>
                </div>
        </div>


        </div>

    </div>


            </div>
</template>
<style scoped>
  .article_wrap {
    padding: 60px;
  }
  .article_title {
    display: inline-block;
    color: #222;
    font-size: 34px;
    font-weight: 600;
    border-bottom: 1px solid white;
    cursor: pointer;
  }
  .posts-expand{padding-top: 40px;/*background: url(../assets/eabbe22ff3cddab23a4def30dc1c1e0cf9c54e2f135c2-G7et3n.jpg);
      background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;*/}
  .post-title {
    font-size: 26px;
    text-align: center;
    word-break: break-word;
    font-weight: 400;
}

.tag-cloud a {
    display: inline-block;
    font-size: 16px;
    margin-left: 40%;
    display: block;
    text-align: center;
}
.tag-cloud-tags{
    margin: 50px 5px;
    // border: 1px solid grey;
    overflow: hidden;
    text-align: center;}

.tag-cloud-tags ul{
    margin: 0;
    padding: 0;
    text-align:center;

}
.tag-cloud-tags li{list-style-type: none;
    display: inline-block;
    margin: 5px 10px;
    color: grey;
    

}

.tag-cloud-tags li:nth-child(1){
    font-size: 12px;
    border-bottom: 1px solid #999;
    color:rgb(204,204,204);
    display: inline-block;
}

.tag-cloud-tags li:nth-child(2){
    font-size: 25px;
    border-bottom: 1px solid #999;
    color:rgb(64,64,64);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(3){
    font-size: 12px;
    border-bottom: 1px solid #999;
    color:rgb(204,204,204);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(4){
    font-size: 25px;
    border-bottom: 1px solid #999;
    color:rgb(64,64,64);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(5){
    font-size: 21px;
    border-bottom: 1px solid #999;
    color:rgb(111,111,111);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(6){
    font-size: 16px;
    border-bottom: 1px solid #999;
    color:rgb(157,157,157);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(7){
    font-size: 21px;
    border-bottom: 1px solid #999;
    color:rgb(111,111,111);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(8){
    font-size: 12px;
    border-bottom: 1px solid #999;
    color:rgb(204,204,204);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(9){
    font-size: 25px;
    border-bottom: 1px solid #999;
    color:rgb(64,64,64);
    display: inline-block;
}
.tag-cloud-tags li:nth-child(10){
    font-size: 16px;
    border-bottom: 1px solid #999;
    color:rgb(157,157,157);
    display: inline-block;
}
.showTitle{margin:0 50px;}
.showTitle ul li{border-bottom: 1px dashed #ccc;text-align: left;margin-top: 32px}
.inline{display: inline-block;}
.getPosition{display: inline-block;}
.showPage{display: inline-block;}
.page{height: 60px;margin-top:60px;}
.timeSet{margin-left: 20px;position: absolute;}
.list-enter-active{
  transition: all 1s;
}
.list-enter
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
.list1-in-active:nth-child(1){
  transition: all 1s ease-in 0.15s;
}
.list1-in-enter:nth-child(1){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(2){
  transition: all 1s ease-in 0.2s;

}
.list1-in-enter:nth-child(2){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(3){
  transition: all 1s ease-in 0.3s;

}
.list1-in-enter:nth-child(3){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(4){
  transition: all 1s ease-in 0.4s;

}
.list1-in-enter:nth-child(4){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(5){
  transition: all 1s ease-in 0.5s;

}
.list1-in-enter:nth-child(5){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(6){
  transition: all 1s ease-in 0.6s;

}
.list1-in-enter:nth-child(6){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(7){
  transition: all 1s ease-in 0.7s;

}
.list1-in-enter:nth-child(7){
  opacity: 0;
  transform: translateY(-50px);
}
.list1-in-active:nth-child(8){
  transition: all 1s ease-in 0.8s;

}
.list1-in-enter:nth-child(8){
  opacity: 0;
  transform: translateY(-50px);
}
</style>
<script>
    import axios from 'axios'
    export default{
      data(){
        return {
          allCate:[],
          chosed:true,
          nowPage:1,
          pages:1,
          cateNum:0,
          showItems:[],
          myCate:'',
          allCate:[{"cateName":"JavaScript","articleNum":15},{"cateName":"Node","articleNum":5}],

        }
      },
      mounted(){
        this.getCategory();
        this.getTitleByCategory(0,1);

      },
      methods:{
        showTitle:function(item){
            this.myCate = item.cateName;
            this.chosed = !this.chosed;
            this.nowPage = 1;
            this.getTitleByCategory(item.cateID,1)
        },
        getCategory:function(){
            axios({
            url:'http://127.0.0.1:3000/users/get-categoryMes',
            method:'get'
          }).then((res)=>{
            this.allCate = res.data;
            this.cateNum = res.data.length;
          })
        },
      getTitleByCategory:function(id,page){
          axios({
          url:'http://127.0.0.1:3000/users/get-article-by-title',
          params:{"cateId":id},
          method: 'get',
        }).then((res)=> {
          this.titles = res.data;          
          this.pages = Math.ceil(res.data.length / 8 );
          this.showData();
        })
      },
    showData:function(){
        let page = this.nowPage;
        let startNum = page*8 - 8;
        let endNum = startNum + 8;
        if(endNum > this.articleNum){
          endNum = this.articleNum;
        }
        this.showItems = this.titles.slice(startNum,endNum);
      },
      lastPage:function(){
        if(this.nowPage == 1){
          return;
        }
        this.nowPage --;
        this.showData();
      },
      nextPage:function(){
        if(this.nowPage == this.pages){
          return;
        }
        this.nowPage ++;
        this.showData();
      }


      }
    }
</script>
