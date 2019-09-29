<template>
  <div class="my-header">
    <div class="my-header-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="my-header-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="my-header-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <h1 class="my-header-title" v-if="title">
      <span class="my-header-text" v-text="title"></span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'MyHeader',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .my-header{
    position: relative;
    @include flex-between();
    width: 100%;
    height: $navbar-height;
    /* background-color: #fff; */

    &-left{
      margin-left: 10px;
    }

    &-center{
      flex: 1;
      margin: 0 10px;
    }

    &-right{
      /* position: absolute;
      right: 0; */
      margin-right: 10px;
    }

    &-title{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20%;
      right: 20%;
      @include flex-center();
      text-align: center;
    }

    &-text{
      width: 100%;
      text-align: center;
      line-height: 1.5;
      @include ellipsis();
      font-size: $font-size-base;
    }
  }
</style>
