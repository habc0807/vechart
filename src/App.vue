<template>
  <div id="app">
    <p>第一个demo</p>
    <div class="" @click="updateOnechartData">更改数据</div>
    <vechart :options="options1" :styles="echartStyle"></vechart>
    <p style="margin-top: 40px">第二个demo</p>
    <div class="" @click="updateSecondchartData">更改数据</div>
    <vechart :options="options2" :styles="echartStyle"></vechart>
    <div v-echart="options1" :styles="echartStyle" ></div>
  </div>
</template>

<script>
import { circle1, circle2, lineData1, lineData2 } from './config.js'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      echartStyle:{
        width: '300px',
        height: '100px'
      },
      frag1: true,
      frag2: true,
      options1: circle1,
      options2: lineData1
    }
  },
  methods: {
      updateOnechartData() {
          const { frag1 } = this 
          if (frag1) {
              this.options1 = circle2
              this.frag1 = !frag1
          } else {
              this.options1 = circle1
              this.frag1 = !frag1
          }
      },
      updateSecondchartData() {
          const { frag2 } = this 
          if (frag2) {
              this.options2 = lineData2
              this.frag2 = !frag2
          } else {
              this.options2 = lineData1
              this.frag2 = !frag2
          }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
    text-align: left;
}
</style>
