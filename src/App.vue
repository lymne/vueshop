<template>
  <div id="app">
    <grid>
      <grid-item label="Grid" v-for="i in 9">
          <i slot="icon" class="iconfont">&#xe6b1;</i>
      </grid-item>
    </grid>
    <tabbar>
      <tabbar-item v-on:on-item-click="hasClick">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/demo">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import {Grid, GridItem, Tabbar, TabbarItem} from 'vux';
export default {
  name: 'app',
  components: {
    Grid,
    GridItem,
    Tabbar,
    TabbarItem
  },
  methods: {
    hasClick () {
      console.log(1);
    }
  }
};
</script>

<style lang="less">
@import '/common/css/index.less';
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
