<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="my-pull-down" v-if="pullDown">
      <my-loading text="pullDownText" inline ref="pullDownLoading"></my-loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="my-pull-up" v-if="pullUp">
      <my-loading text="pullUpText" inline ref="pullUpLoading"></my-loading>
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar" ref="ttt"></div>
  </swiper>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  import MyLoading from 'base/loading';
  import {PULL_DOWN, PULL_UP} from './config';

  export default {
    name: 'MyScroll',
    props: {
      scrollbar: {
        type: Boolean,
        default: true 
      },
      dataChange: {
        type:[Object, Array],
      },
      pullDown: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      }
    },
    // data() {
    //   return {
    //     pulling: false,
    //     pullDownText: PULL_DOWN.text_init,
    //     pullUpText: PULL_UP.text_init,
    //     swiperOption: {
    //       direction: 'vertical',
    //       slidesPerView: 'auto',
    //       freeMode: true,
    //       setWrapperSize: true,
    //       scrollbar: {
    //         el: this.scrollbar ? '.swiper-scrollbar' : null,
    //         hide: true
    //       },
    //       on: {
    //         sliderMove: this.scroll,
    //         touchEnd: this.touchEnd
    //       }
    //     }
    //   }
    // },
    created() {
      this.init();
    },
    components: {
      swiper,
      swiperSlide,
      MyLoading
    },
    watch: {
      dataChange() {
        this.update();
      }
    },
    methods: {
      update() {
        // console.log(this.$refs.swiper);
        
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      },
      scrollToTop(speed, runCallBacks) {
        this.$refs.swiper.swiper.slideTo(0, speed, runCallBacks)
      },

      init() {
        this.pulling = false,
        this.pullDownText = PULL_DOWN.text_init,
        this.pullUpText = PULL_UP.text_init,
        this.swiperOption = {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd,
            transitionEnd: this.scrollEnd
          }
        }
      },

      scroll() {
        if(this.pulling ) return;
        const swiper = this.$refs.swiper.swiper;
        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);
        //console.log(swiper.translate);
        if(swiper.translate > 0){ //下拉
          if(!this.pullDown) return;
          if(swiper.translate > PULL_DOWN.height) {
            this.$refs.pullDownLoading.setText(PULL_DOWN.text_start);
            //this.pullDownText = PULL_DOWN.text_start;
            //console.log(this.pullDownText);
          }else{
            this.$refs.pullDownLoading.setText(PULL_DOWN.text_init);
          }
        }else if(swiper.isEnd){//上拉
          if(!this.pullUp) return;
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP.height > parseInt(swiper.$wrapperEl.css('height'));

          if(isPullUp) {
            this.$refs.pullUpLoading.setText(PULL_UP.text_start);
          }else{
            this.$refs.pullDownLoading.setText(PULL_DOWN.text_init);
          }

        }
      },
      scrollEnd() {
        const swiper = this.$refs.swiper.swiper;
        if(!swiper) return;
        this.$emit('scroll-end', swiper.translate, swiper, this.pulling);
      },

      touchEnd() {
        if (this.pulling) return;
        const swiper = this.$refs.swiper.swiper;
        if(swiper.translate > PULL_DOWN.height) {//下拉
          if(!this.pullDown) return;
          this.pulling = true;
          swiper.allowTouchMove = false;//禁止触摸
          swiper.setTransition(swiper.params.speed);
          swiper.setTranslate(PULL_DOWN.height);
          swiper.params.virtualTranslate = true;//定住不回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN.text_ing);
          this.$emit('pull-down', this.pullDownEnd);
        }else if(swiper.isEnd) {//上拉
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP.height > parseInt(swiper.$wrapperEl.css('height'));
          if(isPullUp) {
            if(!this.pullUp) return;
            this.pulling = true;
            swiper.allowTouchMove = false;//禁止触摸
            swiper.setTransition(swiper.params.speed);
            swiper.setTranslate(-(parseInt(swiper.$wrapperEl.css('height')) + PULL_UP.height - swiper.height));
            swiper.params.virtualTranslate = true;//定住不回弹
            this.$refs.pullDownLoading.setText(PULL_UP.text_ing);
            this.$emit('pull-up', this.pullUpEnd);
          }
        }
      },
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullDownLoading.setText(PULL_DOWN.text_end);
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0);
        setTimeout(() => {this.$emit('pull-down-transition-end')},swiper.params.speed);
      },
      pullUpEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullDownLoading.setText(PULL_UP.text_end);
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }
  .my-pull-down, .my-pull-up {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .my-pull-down{
    bottom: 100%;
    height: 80px;
  }
  .my-pull-up{
    top: 100%;
    height: 30px;
  }
</style>
