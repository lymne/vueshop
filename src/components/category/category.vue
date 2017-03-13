<template>
  <div>
    <y-header :colorTheme="colorTheme" :showIconLeft="true"></y-header>
    <div class="outter-wrapper" ref="outwrapper">
      <div>
        <downselect></downselect>
        <div class="trip-wrapper" v-for="trip in trips" @click="selectProduct (trip)">
          <card >
            <img slot="header" v-lazy="trip.thumbimge">
            <div slot="content" class="card-padding">
              <h1>{{trip.name}}</h1>
              <div class="content">
                <span class="small">¥</span> <span class="stress">{{trip.price}}</span> 起
              </div>
              <p>{{trip.desc}}</p>
              <span class="item" v-for="item in trip.items">{{item}}</span>
            </div>
          </card>
        </div>
      </div>
    </div>
    <product :product="selectedProduct" ref="product"></product>
    <backtop></backtop>
  </div>
</template>
<script type="text/ecmascript-6">
  import YHeader from 'components/header/header';
  import downselect from 'components/downselect/downselect';

  import product from 'components/product/product';
  import backtop from 'components/backtop/backtop';
  import {Card} from 'vux';
  export default {
    components: {
      YHeader,
      downselect,
      backtop,
      Card,
      product
    },
    data () {
      return {
        colorTheme: 'normal-theme',
        trips: [],
        selectedProduct: {}
      };
    },
    created () {
      this.trips = [{
        pid: '1',
        name: '美国关岛5天3晚',
        price: '488',
        desc: '港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x100'
      }, {
        pid: '2',
        name: '美国关岛5天3晚',
        price: '388',
        desc: '港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x200'
      }, {
        pid: '3',
        name: '美国关岛5天3晚',
        price: '28',
        desc: '香港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x300'
      }, {
        pid: '3',
        name: '美国关岛5天3晚',
        price: '28',
        desc: '香港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x400'
      }, {
        pid: '3',
        name: '美国关岛5天3晚',
        price: '28',
        desc: '香港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x500'
      }, {
        pid: '3',
        name: '美国关岛5天3晚',
        price: '28',
        desc: '香港出发 含机票酒店',
        items: ['出签率98%', '好玩22'],
        thumbimge: 'http://placeholder.qiniudn.com/640x600'
      }];
    },
    methods: {
      selectProduct (product) {
        this.selectedProduct = product;
        this.$refs.product.show();
        console.log(this.selectedProduct);
      }
    }
  };
</script>
<style lang="less" >
  @import '../../common/css/variable.less';
  .outter-wrapper{
    position: absolute;
    top:50px;
  }
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
