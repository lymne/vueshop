<template>
  <div>
     <y-header :colorTheme="colorTheme"></y-header>
  </div>
</template>
<script type="text/ecmascript-6">
  import YHeader from 'components/header/header';
  export default {
    data () {
      return {
        colorTheme: 'normal-theme'
      };
    },
    components: {
      YHeader
    }
  };
</script>
<style lang="less" >
</style>
