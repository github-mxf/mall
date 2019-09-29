<template>
  <transition>
    <div class="search">
      <header class="g-header-container">
        <search-header @query="getQuery"></search-header>
      </header>
      <div class="g-content-container">
        <my-scroll ref="scroll">
          <search-hot @loaded="updateScroll" v-show="!query"></search-hot>
          <search-history @show-confirm="showConfirm" ref="history" v-show="!query" @remove-item="updateScroll">
          </search-history>
          <search-result :query="query" v-show="query" />
        </my-scroll>
      </div>
      <my-confirm msg="确定要清空吗？" ref="confirm" @confirm="clearAllSearchHistorys"></my-confirm>
    </div>
  </transition>
</template>

<script>
  import MyScroll from 'base/scroll';
  import MyConfirm from 'base/confirm';
  import SearchHeader from './header';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import SearchResult from './result';

  export default {
    name: 'Search',
    components: {
      MyScroll,
      MyConfirm,
      SearchHeader,
      SearchHot,
      SearchHistory,
      SearchResult
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      getQuery(query) {
        this.query = query
      },
      updateScroll() {
        this.$refs.scroll.update();
      },
      showConfirm() {
        this.$refs.confirm.show();
      },
      clearAllSearchHistorys() {
        this.$refs.history.clear();
        this.$refs.history.update();
      },
      updateScroll() {
        this.$refs.scroll.update();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .search{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }

  .search-enter-active,
  .search-leave-active{
    transition: all 0.3s;
  }

  .search-enter,
  .search-leave-to{
    transform: translate3d(100%, 0, 0)
  }
</style>
