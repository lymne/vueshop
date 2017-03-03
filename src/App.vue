<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'vux-pop-in'
    };
  },
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from);
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in';
    }
  }
};
</script>

<style lang="less">
@import '/common/css/index.less';
@import '/common/css/1px.less';
.router-view {
  width: 100%;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden
}
.vux-pop-in-enter-active,.vux-pop-in-leave-active,.vux-pop-out-enter-active,.vux-pop-out-leave-active {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0
}

.vux-pop-out-enter-active {
  -webkit-animation-name: a;
  animation-name: a
}

.vux-pop-out-leave-active {
  -webkit-animation-name: d;
  animation-name: d
}

.vux-pop-in-enter-active {
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-animation-name: c;
  animation-name: c
}

.vux-pop-in-leave-active {
  -webkit-animation-name: b;
  animation-name: b
}

@-webkit-keyframes a {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@keyframes a {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@-webkit-keyframes b {
  0% {
    opacity: 1
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
  }
}

@keyframes b {
  0% {
    opacity: 1
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
  }
}

@-webkit-keyframes c {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@keyframes c {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@-webkit-keyframes d {
  0% {
    opacity: 1
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
  }
}

@keyframes d {
  0% {
    opacity: 1
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
  }
}
</style>
