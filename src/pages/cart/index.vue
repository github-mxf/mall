<template>
    <div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" onclick="alert(this.checked)">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
  <br><br>

  <!-- <input type="radio" id="one" onclick="alert(this.checked)" value="radio1" v-model="picked">
  <label for="one">One</label>
  <br> -->
  <input type="radio" id="two" onclick="alert(this.checked)" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>

  <div id="example-5">
    <select v-model="selected" id="myselect">
      <option disabled value="">请选择</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>

  <input type="text" v-model.number="num" @click.prevent="warn('helloworld',$event)" ref="myinput">
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        checkedNames:'',
        picked:'',
        selected:'',
        num:0
      }
    },
    methods: {
      warn:function(message,e){
        console.log(e);
        e.preventDefault();
        
        
      }
    },
    mounted() {
      this.$refs.myinput.onclick=function(e){
          console.log(e)
        }
    },
  };
</script>

<style lang="scss" scoped>

</style>
