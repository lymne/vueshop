<template>
  <div>
    <card class="trip-wrapper" v-show="showFlag">
      <swiper  :value="0"  :aspect-ratio="240/400"  :list="product.imgs" class="swiper-wrapper"  :show-dots="false" :show-desc-mask="false"></swiper>
      <div slot="content" class="card-padding">
        <h1>{{product.name}}</h1>
        <div class="content">
          <span class="small">¥</span> <span class="stress">{{product.price}}</span> 起
        </div>
        <p>{{product.desc}}</p>
        <span class="item" v-for="item in product.items">{{item}}</span>
      </div>
    </card>

  </div>
</template>
<script type="text/ecmascript-6">
  import {Card, Swiper, SwiperItem} from 'vux';
  export default {
    components: {
      Card,
      Swiper,
      SwiperItem
    },
    props: {
      product: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false
      };
    },
    methods: {
      show () {
        this.showFlag = true;
      },
      hide () {
        this.showFlag = false;
      }
    }
  };
</script>
<style lang="less">

</style>
