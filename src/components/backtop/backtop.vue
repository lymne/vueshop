<template>
  <div class="backtop" >
    <i class="iconfont" @click="backToTop">&#xe64a;</i>
  </div>
</template>
<script type="text/ecmascript-6">
  const scrollDuration = 200;
  export default {
    methods: {
      backToTop () {
        function scroll (scrollTo, time) {
          var scrollFrom = parseInt(document.body.scrollTop);
          var i = 0;
          var runEvery = 5;
          scrollTo = parseInt(scrollTo);
          time /= runEvery;
          var interval = setInterval(function () {
            i++;
            document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
            if (i >= time) {
              clearInterval(interval);
            }
          }, runEvery);
        }
        scroll(0, scrollDuration);
      }
    }
  };
</script>
<style lang="less">
    .backtop{
      position: fixed;
      bottom: 25px;
      right: 20px;
      width: 40px;
      height: 40px;
      text-align: center;
      vertical-align: middle;
      border-radius: 50%;
      background: #987adb;
      .iconfont{
        font-size: 24px;
        line-height: 38px;
        color:#fff;
      }
    }
</style>
