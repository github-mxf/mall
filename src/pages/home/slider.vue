<template>
  <div class="slider-wrapper">
    <my-loading v-if="!sliders.length">
      <!-- <img :src="url"/> -->
    </my-loading>
    <my-slider :data="sliders" :direction="direction" :loop="loop" :interval="interval" :pagination="pagination" v-else>
      <swiper-slide v-for="(item, index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img" />
        </a>
      </swiper-slide>
    </my-slider>
  </div>
</template>

<script>
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import MySlider from 'base/slider';
  import {getSliders} from 'api/home';
  import MyLoading from 'base/loading';

  export default {
    name: 'HomeSlider',
    components: {
      MySlider,
      swiperSlide,
      MyLoading
    },
    created() {
      this.init();
    },
    methods: {
      update() {
        return this.init();
      },
      init() {
        return getSliders().then(data => {
          this.sliders = data;
        });
      }
    },
    data() {
      return {
        url: require('assets/img/loading.gif'),
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [
          // {
          //   'linkUrl': 'https://www.imooc.com',
          //   'picUrl': require('./1.jpg')
          // },
          // {
          //   'linkUrl': 'https://www.imooc.com',
          //   'picUrl': require('./2.jpg')
          // },
          // {
          //   'linkUrl': 'https://www.imooc.com',
          //   'picUrl': require('./3.jpg')
          // },
          // {
          //   'linkUrl': 'https://www.imooc.com',
          //   'picUrl': require('./4.jpg')
          // }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
 .slider-wrapper {
    width: 100%;
    height: 183px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>
