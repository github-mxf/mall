<template>
  <div class="my-search-box-wrapper">
    <i class="iconfont icon-search"></i>
    <div class="my-search-box" v-if="fake">{{placeholder}}</div>
    <input class="my-search-box" type="text" title="搜索框" :placeholder="placeholder" ref="input" v-model="query" v-if="!fake" />
    <i class="iconfont icon-close" v-show="query" @click="reset"></i>
  </div>
</template>

<script>
  import {debounce} from 'assets/js/util';

  export default {
    name: 'MySearchBox',
    props: {
      placeholder: {
        default: '请输入搜索内容',
        type: String
      },
      fake: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query: debounce(function() {
        this.$emit('query', this.query);
      })
    },
    methods: {
      reset() {
        this.query = '';
        this.$refs.input && this.$refs.input.focus();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  $search-box-height: 30px;

  .my-search-box-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    height: $search-box-height;
    padding: 0 7px;
    background-color: #fff;
    border-radius: $search-box-height/2;
  }

  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size;
    font-weight: bold;
  }

  .my-search-box{
    flex: 1;
    background: none;
    border: none;
    margin: 0 6px;
    color: #666;
    line-height: 1.5;
  }
</style>