<template>
  <my-header class="header">
    <my-search-box class="search-box-center" placeholder="开学季有礼，好货五折起" slot="center" fake @query="getQuery"
      @click.native="goToSearch">
    </my-search-box>
    <i class="iconfont icon-msg" slot="right"></i>
  </my-header>
</template>

<script>
  import MyHeader from 'base/header';
  import MySearchBox from 'base/search-box';

  export default {
    name: 'CategoryHeader',
    components: {
      MyHeader,
      MySearchBox
    },
    methods: {
      goToSearch() {
        this.$router.push('/search');
      },
      getQuery(query) {
        // console.log(query);
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    background-color: $header-bgc-translucent;

    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>