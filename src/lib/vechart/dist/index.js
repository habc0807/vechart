"use strict";var t,e=(t=require("echarts"))&&"object"==typeof t&&"default"in t?t.default:t,i={install:function(t){t.component("vechart",{name:"echart",props:{options:{type:Object,required:!0,default:function(){return null}},styles:{type:Object,required:!1,default:function(){return{width:"200px",height:"200px"}}}},render:function(t){return t("div",{style:this.styles})},watch:{options:{handler:function(t){t&&this.initOption()},deep:!0}},mounted:function(){this.initOption()},methods:{initOption:function(){e.init(this.$el).setOption(this.options,!0)}}}),t.directive("echart",{inserted:function(t,i,n){if(n.data.style)for(var o in n.data.style)t.style[o]=n.data.style[o];e.init(t).setOption(i.value)}})}};module.exports=i;
