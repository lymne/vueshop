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
            <i class="iconfont">&#xe64c;</i>
            <span class="text">屎丢丢刚下了一单</span>
          </div>
          <div class="desc" v-html="content"></div>
        </div>
      </scroller>
      <bottombutton></bottombutton>
    </div>
  </transition>

</template>
<script type="text/ecmascript-6">
  import {Card, Swiper, SwiperItem, Scroller, Marquee, MarqueeItem, Group, Cell} from 'vux';
  import bottombutton from 'components/bottombtn/bottombtn';
  export default {
    name: 'product',
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
    components: {
      Card,
      Swiper,
      SwiperItem,
      Scroller,
      Marquee,
      MarqueeItem,
      Group,
      Cell,
      bottombutton
    },
    methods: {
      show () {
        this.showFlag = true;
        this.content = ' <div class="mui-custommodule-item"><img class="lazyImg img-ks-lazyload" alt="" height="244px" src="https://img.alicdn.com/imgextra/i4/2343446020/TB2qP5wlFXXXXb1XXXXXXXXXXXX_!!2343446020.jpg"> <img class="lazyImg img-ks-lazyload" alt="" height="244px" src="https://img.alicdn.com/imgextra/i4/2343446020/TB2qP5wlFXXXXb1XXXXXXXXXXXX_!!2343446020.jpg"> <img class="lazyImg img-ks-lazyload" alt="" height="244px" src="https://img.alicdn.com/imgextra/i4/2343446020/TB2qP5wlFXXXXb1XXXXXXXXXXXX_!!2343446020.jpg">  <img class="lazyImg img-ks-lazyload" alt=""height="244px" src="https://img.alicdn.com/imgextra/i4/2343446020/TB2qP5wlFXXXXb1XXXXXXXXXXXX_!!2343446020.jpg"> </div>';
        this.$nextTick(() => {
          console.log(document.querySelector('.xs-container').clientHeight);
          this.$refs.scroller.reset({
            top: 0
          });
        });
      },
      hide () {
        this.showFlag = false;
      }
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
      height: 100%;
      margin-top: 15px;
      font-size:0;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
