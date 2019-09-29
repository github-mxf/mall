<template>
  <transition name="my-confirm">
    <div class="my-confirm-wrapper" v-show="visible">
      <div class="my-confirm">
        <div class="my-confirm-title" v-if="title">{{title}}</div>
        <div class="my-confirm-msg" >{{msg}}</div>
        <div class="my-confirm-btns">
          <button class="my-confirm-btn my-confirm-cancel" @click="cancel">{{cancelBtnText}}</button>
          <button class="my-confirm-btn my-confirm-ok" @click="confirm">{{confirmBtnText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MyConfirm',
    props: {
      title: {
        type: String,
        default: ''
      },
      msg: {
        type: String,
        default: '确定执行此操作吗？'
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      }
    },
    data() {
      return{
        visible: false
      }
    },
    methods: {
      show() {
        this.visible=true;
      },
      hide() {
        this.visible = false;
      },
      cancel() {
        this.hide();
        this.$emit('cancel');
      },
      confirm() {
        this.hide();
        this.$emit('confirm');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .my-confirm-wrapper{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-popup-z-index;
    @include flex-center();
    background-color: $modal-bgc;
  }

  .my-confirm{
    overflow: hidden;
    width: 88%;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;

    &-title{
      padding: 20px 15px 0;
      font-size: 18px;
      text-align: center;
      @include ellipsis();

      & + .my-confirm-msg{
        padding-top:20px;
        padding-bottom: 20px;
      }
    }

    &-msg{
      padding: 40px 15px;
      text-align: center;
      line-height: 1.5;
    }

    &-btns{
      display: flex;
    }

    &-btn{
      flex:1;
      height: 44px;
      line-height: 44px;
      background: none;
      border: none;
    }

    &-cancel{
      border-top: 1px solid #e3e5e9;
    }

    &-ok{
      background-color: #f23030;
      color: #fff;
    }

    .my-confirm{
      &-enter-active,
      &-enter-leave{
        transition: opacity 0.3s;
      }

      &-enter,
      &-leave-to{
        opacity:0;
      }

      &-enter-active{
        .my-confirm{
          ainimaion: bounce-in 0.3s;
        }
      }
    }
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>