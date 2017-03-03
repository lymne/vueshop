<template>
  <div class="selectbar vux-1px-b">
    <div class="taglist">
      <div class="tag" v-for="(selector, index) in selectList">
      <span :class="{'current':currentIndex===index}" @click="selectTag(index)">{{selector.name}}
        <i class="iconfont uparrow" v-show="dropdown && currentIndex===index">&#xe6a5;</i>
        <i class="iconfont downarrow" v-show="!dropdown || currentIndex!==index">&#xe6a6;</i>
      </span>
      </div>
    </div>
    <transition name="fade">
      <ul class="droplist" v-show="dropdown">
        <li  :class="{'current':currentChildIndex===index}"  v-for="(item, index) in selectList[currentIndex].content" @click="selectItem(currentIndex, index)">{{item.value}}</li>
      </ul>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        currentIndex: 0,
        currentChildIndex: 0,
        dropdown: false,
        selectList: [{name: '分类', content: [{ key: 'US', value: '美国' }, { key: 'Canada', value: '加拿大' }]}, {name: '排序', content: [{ key: 'desc', value: '价格从高到低' }]}]
      };
    },
    methods: {
      selectTag (index) {
        if (this.currentIndex === index) {
          this.dropdown = !this.dropdown;
        } else {
          // 切换类型默认显示下拉框
          this.dropdown = true;
        }
        this.currentIndex = index;
        this.currentChildIndex = 0; // 默认重置为第一个选项
      },
      selectItem (parentIndex, childrenIndex) {
        this.dropdown = false;
        this.currentChildIndex = childrenIndex;
        console.log(parentIndex, childrenIndex);
        console.log(this.selectList[parentIndex].content[childrenIndex]);
      }
    }
  };
</script>
<style lang="less">
  @import '../../common/css/variable.less';
   .selectbar {
     background:#fff;
     width: 100%;
     height:40px;
     .tag {
       display: inline-flex;
       padding: 12px 20px;
       color:@color-gray;
       .current{
         color:@color-black;
       }
     }
     .fade-enter-active, .fade-leave-active {
       transition: all .2s ease-in-out;
     }
     .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
       opacity: 0;
     }
     .droplist {
        li{
          background: #fff;
          padding: 18px 24px;
          margin-bottom: 2px;
          &.current{
            color:@color-pink;
          }
        }
     }
   }
</style>
