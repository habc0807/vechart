<template>
  <div id="app">
    <div class="" @click="updateOnechartData">更改图的数据, 图会从新渲染</div>
    <vechart :options="options1" :styles="echartStyle"></vechart>
    <!-- <vechart :options="options2" :styles="echartStyle"></vechart> -->
    <div v-echart="options1" :styles="echartStyle" ></div>
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
  },
  methods: {
      updateOnechartData() {
          this.options1 = {
              series: {
                type: 'pie',
                data: [{
                        name: 'A',
                        value: 2
                    },
                    {
                        name: 'B',
                        value: 2
                    },
                    {
                        name: 'C',
                        value: 5
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
