<template>
  <my-scroll :scrollbar="false">
    <ul class="tab">
      <li class="tab-item" :class="{'tab-item-active': item.id===curId}" v-for="(item, index) in items" :key="index" @click="switchTab(item.id)">{{item.name}}</li>
    </ul>
  </my-scroll>
</template>

<script>
  import {categoryNames} from './config';
  import MyScroll from 'base/scroll';

  export default {
    name: 'CategoryTab',
    data() {
      return {
        curId: ''
      }
    },
    components: {
      MyScroll
    },
    created() {
      this.init();
      this.switchTab(this.items[0].id);
    },
    methods: {
      init() {
        this.items = categoryNames;
      },
      switchTab(id) {
        if(id===this.curId) return;
        this.curId = id;
        this.$emit('switch-tab', id);
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      background-color: #fff;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      color: #080808;
      font-size: $font-size-l;
      font-weight: bold;
      text-align: center;
      line-height: $tab-item-height;
      @include ellipsis();

      &:last-child {
        border-bottom: none;
      }      
    }

    &-item-active {
      background: none;
      border-right: none;
      color: #f23030;
    }
  }

</style>