<template>
  <transition name="move">
    <div class="product"  ref="product"v-show="showFlag">
      <scroller :lockX="true" ref="scroller" height="-50">
        <div>
          <i class="iconfont back" @click="hide()">&#xe697;</i>
          <swiper  :list="imgs" class="swiper-wrapper" :show-desc-mask="false"></swiper>
          <card class="trip-wrapper"  >
            <div slot="content" class="card-padding">
              <h1>{{product.name}}</h1>
              <p>{{product.desc}}</p>
              <div class="price">
                <span class="small">¥</span> <span class="stress">{{product.price}}</span> 起
              </div>
            </div>
          </card>
          <div class="board">
            <i class="iconfont ">&#xe64c;</i>
            <span class="text">屎丢丢刚下了一单</span>
          </div>
          <div class="desc" v-html="content"></div>
        </div>
      </scroller>
    </div>
  </transition>

</template>
<script type="text/ecmascript-6">
  import {Card, Swiper, SwiperItem, Scroller, Marquee, MarqueeItem, Group, Cell} from 'vux';
  export default {
    components: {
      Card,
      Swiper,
      SwiperItem,
      Scroller,
      Marquee,
      MarqueeItem,
      Group,
      Cell
    },
    props: {
      product: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        imgs: [],
        content: ''
      };
    },
    created () {
      // this._config = Config();
      /* this.$http.get(this._config.host + '/api/product/').then((response) => {
       response = response.body;
       console.log(response);
       if (response.errno === ERR_OK) {
       this.seller = response.data;
       console.log(this.seller);
       }
       }); */
      this.imgs = [{url: 'javascript:', img: 'https://dn-placeholder.qbox.me/640x200'}];
    },
    beforeUpdate () {
    },
    methods: {
      show () {
        console.log('content');
        console.log(this.content);
        this.showFlag = true;
        this.content = '<p><img style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" title="顺丰包邮_01.jpg" src="http://bb.weatcn.com/upload/description/2017223/source/ed771201b16b4c70954884337319f764.jpg"></p><p><img style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" title="顺丰包邮_02.jpg" src="http://bb.weatcn.com/upload/description/2017223/source/bf58f5779b914682ac3d55101b22d028.jpg"></p><p><img style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" title="1KG牛排750_01.jpg" src="http://bb.weatcn.com/upload/description/2017222/source/f78aa7a62d554648803c358fe1b3cd3d.jpg"></p><p><img style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" title="1KG牛排750_02.jpg" src="http://bb.weatcn.com/upload/description/2017222/source/3571d3ce8dda4aa6a024b5c2fd9d3e9a.jpg"></p><p><img style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" title="1KG牛排750_03.jpg" src="http://bb.weatcn.com/upload/description/2017222/source/583b08e353cd4318bb4f91bb45089f72.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/c4d1502a97ee47b5bde461f428f5d583.jpg" style="" title="1KG牛排750_04.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/68cc9e7c25a24121a8f894cd6ce4174f.jpg" style="" title="1KG牛排750_05.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/f32aab5741164b3d8dbf1aa33cc0acc0.jpg" style="" title="1KG牛排750_06.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/c0d3f6a0b71a4076b39e1f9c9bfe88d8.jpg" style="" title="1KG牛排750_07.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/3674fc5a94b04db2989626b08fd5e4da.jpg" style="" title="1KG牛排750_08.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/45eb54898c6b4e9893b60b2099e814cb.jpg" style="" title="1KG牛排750_09.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/7a0a7c1bdf9c496db6f6dceb969e9716.jpg" style="" title="1KG牛排750_10.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/bbd1d5eedc9949ccba383faf825e9459.jpg" style="" title="1KG牛排750_11.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/424ec9d985f64a1ca3b5d4ac2c03b822.jpg" style="" title="1KG牛排750_12.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/285a9800b0d845bfb33eee1a8f4ab104.jpg" style="" title="1KG牛排750_13.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/50e6a869964443d5b89438fd2133fe82.jpg" style="" title="1KG牛排750_14.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/14dc6f33cd6b48a2810fc22196c08bc9.jpg" style="" title="1KG牛排750_15.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/454074de93e44512aa5f65b2efc76f9d.jpg" style="" title="1KG牛排750_16.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/fc9cabf6bd8d48ecb20950c2193e2076.jpg" style="" title="1KG牛排750_17.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/6c6db278d35745cf923fab037e9fdae3.jpg" style="" title="1KG牛排750_18.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/7349959a1d004f3e950497be47b3233d.jpg" style="" title="1KG牛排750_19.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/05a1633d2bbe4ba6abbbe987ba526563.jpg" style="" title="1KG牛排750_20.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/fd77f81c9f5d4b6c95dbb57d13e63766.jpg" style="" title="1KG牛排750_21.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/266949d22777423ebe3cd717a33dcf41.jpg" style="" title="1KG牛排750_22.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/0ced3edd8f15421b93fe2357e221726e.jpg" style="" title="1KG牛排750_23.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/d0d4ecae4ea849fd9a70ed56cb88eeeb.jpg" style="" title="1KG牛排750_24.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/874af9ec7a974474b25f77af6938a281.jpg" style="" title="1KG牛排750_25.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/8191ddb45bd84600ba3c7efff552503f.jpg" style="" title="1KG牛排750_26.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/ef3a63b2c3bb4fde9d3a4024500703a2.jpg" style="" title="1KG牛排750_27.jpg"></p><p><img imgsrc="http://bb.weatcn.com/upload/description/2017222/source/2978475e59c440fc9683d127263bd597.jpg" style="" title="1KG牛排750_28.jpg"></p><p><br></p>';

        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          });
        });
      },
      hide () {
        this.showFlag = false;
      }
    }
  };
</script>
<style lang="less">
  @import '../../common/css/variable.less';
  .move-enter-active, .move-leave-active {
    transition: all .2s linear;
    transform: translate3d(0,0,0);
  }
  .move-enter, .move-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform: translate3d(100%,0,0);
  }
  .product{
    position: fixed;
    left: 0;
    top: 50px;
    width: 100%;
    background: #fff;
    z-index: 999;
    .back {
      position: absolute;
      top: 10px;
      left: 10px;
      color: #fff;
      z-index: 99;
      font-size: 26px;
      background: rgba(7,27,37,0.1);
      border-radius: 50%;
      padding: 5px;
    }
    .price{
      font-size:16px;
      color:@color-pink
    }
    .board{
      display: flex;
      height:16px;
      .iconfont{
        margin-left: 10px;
        color:@color-pink;
        font-size:20px;
        flex:0 24px;
      }
      .text{
        padding:2px 0 0 5px;
        color:@color-gray;
      }
      .buyer {
        flex:1;
        height: 16px;
        margin: 2px 0 0 10px;
        background: #fff;
      }
    }
    .desc{
      width: 100%;
      margin-top:15px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
