<template>
  <div class="my-loading">
    <div class="my-loading-img">
      <slot><img src="./loading.gif" /></slot>  
    </div>
    <span class="my-loading-text">{{loadingText}}</span>
  </div>
</template>

<script>
  export default {
    name: 'MyLoading',
    data() {
      return {
        loadingText:this.text
      }
    },
    props: {
      text: {
        type: String,
        default: '加载中...'
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      setText(text) {
        this.loadingText = text;
      }
    },
    watch: {
      text(text) {
        this.loadingText = text;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .my-loading{
    width: 100%;
    height: 100%;
    @include flex-center();
    &-text{
      margin-left: 6px;
    }
  }
</style>