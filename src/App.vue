<template>
  <div id="app">
    <loading v-model="loadbar.isLoading"></loading>
      1111
    <div class="container">
      <!-- <transition :name="'vux-pop-' + (direction.direction === 'forward' ? 'in' : 'out')"> -->
            <router-view class="router-view" :key="key"></router-view>
        <!-- </transition> -->
      <!-- <router-view></router-view>     -->
    </div>
  </div>
</template>

<script type="text/babel">
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  import hold from 'src/commons/hold'

  export default {
    name: 'app',
    components: {
      Loading
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        user: state => state.user,
        loadbar: state => state.loadbar
      }),
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date(): this.$route + +new Date()
      }
    },
    mounted () {
      
    }
  }
</script>

<style lang="scss">
  @import "~assets/css/common.scss";
</style>

<style lang="scss" scoped>
  @import '~lib/sandal/core';
  @import '~assets/css/core/functions', '~assets/css/core/mixins', '~assets/css/core/vars';
  
  #app {
    height: 100%;
    overflow: hidden;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
