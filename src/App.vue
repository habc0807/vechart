<template>
  <div id="app">
    <vechart :options="options1" :styles="echartStyle"></vechart>
    <vechart :options="options2" :styles="echartStyle"></vechart>
    <div v-echart="options1" :style="echartStyle" ></div>
  </div>
</template>

<script>

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
      options1: {
          series: {
              type: 'pie',
              data: [{
                      name: 'A',
                      value: 1212
                  },
                  {
                      name: 'B',
                      value: 2323
                  },
                  {
                      name: 'C',
                      value: 1919
                  }
              ]
          }
      },
      options2: {
          series: {
              type: 'pie',
              data: [{
                      name: 'A',
                      value: 2323
                  },
                  {
                      name: 'B',
                      value: 1212
                  },
                  {
                      name: 'C',
                      value: 1919
                  }
              ]
          }
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
</style>
