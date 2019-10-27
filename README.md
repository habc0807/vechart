### vechart 

`vechart` 插件是将传统 `echart.js` 封装成Vue组件和指令使用。

### 插件的安装

#### NPM

```javascript
npm i vechart
```

#### CNPM

```javascript
cnpm i vechart
```

### 引入插件

```javascript
import Vue from 'vue';
import Vechart from 'vechart';

Vue.use(Vechart);
```

### 基本用法

#### vechart组件的用法

```javascript
<vechart :options="options1" :styles="echartStyle"></vechart>
```

```javascript
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
```

#### vechart指令的用法

```javascript
<div v-echarts="options" :styles="echartStyle" ></div>
```


### API

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| options | 中等文本 | Object | - |
| styles | 默认样式 | Oject | `{ width: '100px',height: '100px'}` |

### DEOM地址
[demo演示地址](https://habc0807.github.io/vechart/dist/index.html)

### Author

[habc0807](https://github.com/habc0807)