<template>
  <div class="header-wrapper" :class="colorTheme" >
    <div class="logo" v-show="showLogo">
      <img  src="../../assets/logo.png" width="80" height="26">
    </div>

      <div class="icongroup-left" v-show="showIconLeft">
        <router-link to="/demo">
         <i class="iconfont">&#xe64f;</i>
        </router-link>
      </div>

    <x-input class="search" :class="colorTheme"  placeholder="美国签证">
      <i class="iconfont" slot="label" style="padding-right:10px;display:block;">&#xe651;</i>
    </x-input>
    <div class="icongroup-right">
      <badge :text="cartcount" v-show="cartcount"></badge>
      <i class="iconfont">&#xe63f;</i>
      <i class="iconfont">&#xe659;</i></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {XInput, Search, Badge} from 'vux';
  export default {
    props: {
      colorTheme: {
        type: String,
        default: 'home-theme'
      }
    },
    data () {
      return {
        cartcount: 0,
        showLogo: false,
        showIconLeft: true
      };
    },
    components: {
      XInput, Search, Badge
    }
  };
</script>
<style lang="less" >
  @import '../../common/css/variable.less';
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 50px;
    &.home-theme{
      background-color:@header-home-background-color;
      color:@header-home-text-color;
    }
    &.normal-theme{
      background-color:@header-normal-background-color;
      color:@header-normal-text-color;
    }

    .logo {
      flex: 0 0 84px;
      padding: 12px;
      box-sizing: border-box;
      height: 40px;
    }
    .search {
      height: 30px;
      margin: auto;
      box-sizing: border-box;
      border-radius:20px;
      background:rgb(245,246,248);
      &.home-theme{
        background-color:@header-home-input-color;
        color:@header-home-input-icon-color;
      }
      &.normal-theme{
        background-color:@header-normal-input-color;
        color:@header-normal-input-icon-color;
      }
      &:before{
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
        border-top: none;
        color: #D9D9D9;
      }
    }
    .iconfont {
      display: inline-block;
      padding: 14px 12px;
      font-size: 24px;
      &:last-child{
        padding-left:0
      }
    }
    .icongroup-left {
      flex: 0 0 66px;
      padding-left: 16px;
    }
    .icongroup-right {
      flex: 0 0 100px;
      text-align: center;
      .vux-badge {
        position: absolute;
        right: 45px;
        top: 5px;
      }
    }
  }
</style>
