<template>
  <my-header class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <my-search-box 
      class="search-box-center" 
      placeholder="开学季有礼，好货五折起" 
      slot="center" 
      fake 
      @query="getQuery" 
      @click.native="goToSearch"
    ></my-search-box>
    <i class="iconfont icon-msg" slot="right"></i>
  </my-header>
  
</template>

<script>
  import MyHeader from 'base/header';
  import MySearchBox from 'base/search-box';
  export default {
    name: 'HomeHeader',
    components: {
      MyHeader,
      MySearchBox
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {
      // API
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      getQuery(query) {
        console.log(query); 
      },
      goToSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    &.my-header {
      background-color: transparent;
      transition: background 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont{
      color: $icon-color-default;
      size: $icon-font-size;
    }
  }

  
</style>
