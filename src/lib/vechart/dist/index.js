"use strict";var t={install:function(t){t.component("vechart",{name:"echart",props:{options:{type:Object,required:!0,default:function(){return null}},styles:{type:Object,required:!1,default:function(){return{width:"200px",height:"200px"}}}},render:function(t){return t("div",{style:this.styles})},watch:{options:{handler:function(t){t&&this.initOption()},deep:!0}},mounted:function(){this.initOption()},methods:{initOption:function(){echarts.init(this.$el).setOption(this.options,!0)}}}),t.directive("echart",{inserted:function(t,e,i){if(i.data.style)for(var n in i.data.style)t.style[n]=i.data.style[n];echarts.init(t).setOption(e.value)}})}};module.exports=t;
