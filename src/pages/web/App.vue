<template>
  <!-- <transition :name=transitionName  mode="out-in"> -->
    <router-view />
  <!-- </transition> -->
</template>
<script>

export default {
  data() {
    return {
      transitionName: 'slide-fade'
    }
  },

  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },

  created() {

  },

  mounted() {

  },

  methods: {

  }
}
</script>
<style lang="less" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>