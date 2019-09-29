<template>
  <my-header>
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <my-search-box placeholder="开学季有礼，好货五折起" slot="center" @query="query"></my-search-box>
  </my-header>
</template>

<script>
  import MyHeader from "base/header";
  import MySearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',
    components: {
      MyHeader,
      MySearchBox
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      query(query) {
        this.$emit('query',query);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    border-bottom: 1px solid $border-color;

    .iconfont{
      color: $icon-color;
      font-size: $icon-font-size;
    }


  }

</style>