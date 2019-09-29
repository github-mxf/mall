<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="(item, index) in navs" :key="index" class="nav-item">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic"/>
          <span v-text="item.text"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {navList} from "./config";

  export default {
    name: 'HomeNav',
    data() {
      return {
        navs: navList
      }
    }
    // created(){
    //   debugger;
    //   this.navs= navList;
    // }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .nav{
    width: 100%;
    padding-top: 15px;

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item{
      width: 20%;
      margin-bottom: 15px;
    }
    &-link{
      @include flex-center(column);
    }
    &-pic{
      width: 60%;
      padding-bottom: 8px;
    }
  }
</style>
