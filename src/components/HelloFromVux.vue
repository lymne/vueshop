<template>
  <div>
    <x-header :left-options="{showBack:true,preventGoBack: true}">This is the page title.</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>

    <x-button  type="primary" @click.native="showDialog">primary</x-button>

    <x-dialog v-model="show" class="dialog-demo" :hideOnBlur="true">
      <p class="dialog-title">I'm a bg scroll Dialog.</p>
      <h1>heelo</h1>
      <div class="img-box">
        <img src="../assets/logo.png" style="max-width:100%">
      </div>
      <span class="vux-close" @click="show=false"></span>
    </x-dialog>
  </div>
</template>

<script>
import {Group, Cell, Checklist, XDialog, XButton, XHeader} from 'vux';
import { Config } from 'common/js/config';
const ERR_OK = 0;
export default {
  components: {
    XButton,
    Group,
    Cell,
    Checklist,
    XDialog,
    XHeader
  },
  methods: {
    change (val) {
      console.log('change', val);
    },
    showDialog () {
      this.show = !this.show;
      console.log(Config());
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      commonList: [ 'China', 'Japan', 'America' ],
      checklist002: [],
      show: false,
      _config: {}
    };
  },
  created () {
    this._config = Config();
    this.$http.get(this._config.host + '/api/seller').then((response) => {
      response = response.body;
      console.log(response);
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }
    });
  }
};
</script>

<style>

.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
