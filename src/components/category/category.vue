<template>
  <div>
     <y-header :colorTheme="colorTheme" :showIconLeft="true"></y-header>
     <dropselect></dropselect>
    <card class="trip-wrapper">
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" >
      <div slot="content" class="card-padding">
        <h1 style="color:#333333;">美国关岛5天3晚</h1>
        <div class="content">
          <span class="small">¥</span> <span class="stress">988</span> 起
        </div>
        <p>香港出发 含机票酒店</p>
        <span class="item">出签率98%</span><span class="item">出签率98%</span>
      </div>
    </card>
  </div>
</template>
<script type="text/ecmascript-6">
  import YHeader from 'components/header/header';
  import dropselect from 'components/dropselect/dropselect';
  import backtop from 'components/backtop/backtop';
  import {Card} from 'vux';
  export default {
    data () {
      return {
        colorTheme: 'normal-theme'
      };
    },
    components: {
      YHeader,
      dropselect,
      Card
    }
  };
</script>
<style lang="less" >
  @import '../../common/css/variable.less';
  .trip-wrapper {
    font-size: 0;
    z-index: -1;
    img{
      width: 100%;
      padding:0;
    }
    .card-padding{
      padding: 12px 12px 20px;
      position: relative;
      h1{
        font-size:18px;
        font-weight:bold;
        color:#333333;
        margin-bottom:4px
      }
      p{
        font-size:14px;
        line-height: 20px;
        color:@color-gray
      }
      span.item {
        display: inline-block;
        margin: 2px 4px 4px 0;
        font-size: 12px;
        padding: 4px;
        border: 1px solid @color-gray;
        border-radius: 4px;
        color:@color-gray;
        background: #fff;
      }
      .content {
        position: absolute;
        top: 10px;
        right: 12px;
        line-height: 24px;
        font-size: 14px;
        color: @color-gray;
        .small,.stress{
          color:@color-pink;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .stress{
          font-size:20px;
        }
      }
    }
  }
</style>
