<template>
  <div class="home">
      <header class="g-header-container">
        <home-header :class="{'header-transition': isHeaderTransition}" ref="header" />
      </header>
      <my-scroll 
        :dataChange="recommends" 
        pullDown 
        pullUp
        @pull-down="pullToRefresh"
        @pull-up="pullToLoadMore"
        @scroll="scroll"
        @scroll-end="scrollEnd"
        @pull-down-transition-end="pullDownTransitionEnd"
        ref="scroll">
        <home-slider ref="slider"></home-slider>
        <home-nav></home-nav>
        <home-recommend @loaded="getRecommend" ref="recommend"></home-recommend>
      </my-scroll>
      <div class="g-backtop-container">
        <my-backtop :visible="isBackTopVisible" @backtop="backToTop"></my-backtop>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import MyScroll from 'base/scroll';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MyBacktop from 'base/backtop';
  import {HEADER_TRANSITION_HEIGHT} from './config'

  export default{
    name: 'Home',
    components: {
      HomeHeader,
      MyScroll,
      HomeSlider,
      HomeNav,
      HomeRecommend,
      MyBacktop
    },
    data() {
      return {
        recommends: [],
        isHeaderTransition: false,
        isBackTopVisible: false
      }
    },
    methods: {
      getRecommend(recommends) {
        this.recommends = recommends;
        // updateScroll();
      },
      updateScroll() {

      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        // setTimeout(()=> {
        //   console.log('松开刷新');
        //   end();
        // },1000)
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if(err){
            console.log(err);
          }
          end();
          
        });
        // setTimeout(()=> {
        //   console.log('松开');
        //   end();
        // },1000)
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBackTopVisible = translate < 0 && -translate > scroll.height;
      },
       pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }

        this.$refs.header.show();

        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      }
    },
    // mounted() {
    //   this.$checkItems={};
    //   console.log(this.$checkform());
    // },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

</style>
