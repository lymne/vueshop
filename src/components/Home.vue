<template>
  <div>
    <y-header :colorTheme="colorTheme" :showLogo="true"></y-header>
    <swiper  :value="0"  :aspect-ratio="240/400"  :list="baseList" class="swiper-wrapper"  :show-dots="false" :show-desc-mask="false"></swiper>
    <card >
      <div slot="content" class="card-demo-flex card-demo-content01">
        <grid class="topic-wrapper">
          <grid-item label="专业签证" link="/category">
            <i slot="icon" class="iconfont" >&#xe654;</i>
          </grid-item>
          <grid-item label="极致之旅">
            <i slot="icon" class="iconfont">&#xe645;</i>
          </grid-item>
          <grid-item label="悠美专线">
            <i slot="icon" class="iconfont">&#xe655;</i>
          </grid-item>
          <grid-item label="热门专题">
            <i slot="icon" class="iconfont">&#xe654;</i>
          </grid-item>
          <grid-item label="每日秒杀">
            <i slot="icon" class="iconfont">&#xe645;</i>
          </grid-item>
          <grid-item label="必备礼物">
            <i slot="icon" class="iconfont">&#xe655;</i>
          </grid-item>
        </grid>
      </div>
    </card>
    <card class="trip-wrapper">
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" >
      <div slot="content" class="card-padding">
        <h1 style="color:#333333;">美国关岛5天3晚</h1>
        <p style="font-size:14px;line-height:1.2;">香港出发 含机票酒店</p>
      </div>
    </card>
    <card class="trip-wrapper">
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" >
      <div slot="content" class="card-padding">
        <h1 style="color:#333333;">美国关岛5天3晚</h1>
        <p style="font-size:14px;line-height:1.2;">香港出发 含机票酒店</p>
      </div>
    </card>
    <card class="trip-wrapper">
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" >
      <div slot="content" class="card-padding">
        <h1 style="color:#333333;">美国关岛5天3晚</h1>
        <p style="font-size:14px;line-height:1.2;">香港出发 含机票酒店</p>
      </div>
    </card>
  </div>
</template>

<script>
import {Grid, GridItem, Group, Cell, Checklist, Card, XDialog, XButton, XHeader, XInput, Swiper, SwiperItem, Search, Badge} from 'vux';
import YHeader from 'components/header/header';
import { Config } from 'common/js/config';
// const ERR_OK = 0;
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}];
export default {
  components: {
    XButton,
    Group,
    Cell,
    Card,
    Checklist,
    XDialog,
    XHeader,
    XInput,
    Swiper,
    Grid,
    GridItem,
    SwiperItem,
    Search,
    Badge,
    YHeader
  },
  methods: {
    showDialog () {
      this.show = !this.show;
      console.log(Config());
    }
  },
  mounted () {
    console.log('mounted');
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      colorTheme: 'home-theme',
      commonList: [ 'China', 'Japan', 'America' ],
      checklist002: [],
      show: false,
      _config: {},
      baseList: baseList,
      value: 0
    };
  },
  created () {
    // this._config = Config();
    /* this.$http.get(this._config.host + '/api/seller').then((response) => {
      response = response.body;
      console.log(response);
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }
    }); */
  }
};
</script>

<style lang="less">
.header-wrapper {
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  color:#d0d0d0;
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
  .icongroup {
    flex: 0 0 94px;
    text-align: center;
    .iconfont {
      display: inline-block;
      padding: 6px 12px;
      font-size: 24px;
      &:last-child{
        padding-left:0
      }
    }
  }
}
.swiper-wrapper {
  .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot{
    background-color: rgb(255,86,85);
  }
}
.topic-wrapper {
  .weui-grid{
    &:before,&:after{
      border:none
    }
  }
  .weui-grid__icon{
    background: rgb(255,86,85);
    border-radius: 50%;
    width:40px;
    height: 40px;
  }
  .iconfont{
    font-size:26px;
    line-height: 40px;
    color:#fff;
  }
}
.trip-wrapper {
  font-size: 0;
  img{
    width: 90%;
    padding: 12px 17px 0;
    margin: auto;
  }
  .card-padding{
    padding: 20px 32px;

    h1{
      font-size:18px;
      font-weight:bold;
      color:#333333;
      margin-bottom:4px
    }
    p{
      font-size:15px;
      color:#333333
    }
  }
}
</style>
