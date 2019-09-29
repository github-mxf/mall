let checkFormPlugin={};
checkFormPlugin.install = function(Vue, option){
  Vue.prototype.$checkItems={
    isRequiredValid:true,
    isDataFormationValid:true
  };

  Vue.prototype.$checkform = function(){
    console.log(this.$checkItems)
    // console.log('1')
  };

  Vue.directive('phone',{
    bind: function (el, binding) {
      // 聚焦元素
      // console.log(binding);
      el.addEventListener('blur',function(){
        console.log('blur')
        if(this.value == '') console.log('不能为null');
        
      })
    }
  })
}

export default checkFormPlugin;