<template>
    <div class="umi-bottomButtonGroup">
      <div class="icon-button">
        <i class="iconfont">&#xe64d;</i><a href="tel:13760288888">在线客服</a>
      </div>
      <div class="right-button-group">
        <button class="btn addCart">加入购物车</button><button class="btn shopNow">立即购物</button>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
  };
</script>
<style lang="less" scoped>
  @import '../../common/css/variable.less';
   .umi-bottomButtonGroup {
     display: flex;
     position: fixed;
     bottom: 0;
     width: 100%;
     height: 50px;
     color:#fff;
     z-index: 99;
     .icon-button{
       flex: 0 100px;
       padding:8px 10px;
       text-align: center;
       background:#fff;
       color:@color-gray;
       line-height: 18px;
       .iconfont{
         font-size:20px;
       }
       a{
         display: block;
         font-size:12px;
       }
     }
     .right-button-group{
       width:100%;
       height: 50px;
       font-size:0;
       border: none;
       .addCart{
         flex:1;
         width:50%;
         background: @color-orange;
       }
       .shopNow{
         flex:1;
         width:50%;
         background: @color-pink;
       }
     }
   }
</style>
