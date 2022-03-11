(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],h=0,u=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),s=o("2f62"),n=o("5f5b"),i=o("b1e0"),r=(o("f9e3"),o("2dd8"),{name:"Consent",data:()=>({}),methods:{sendConsent(){this.$store.dispatch("changePage",2)}},computed:{},render(){const t=arguments[0];return t("div",{attrs:{id:"consent"},class:"container"},[t("h3",{class:"display-3"},["Undergraduate study on deep-neural langauge models and speech synthesis"]),t("h6",{class:"display-6"},["by James Roche (19704410), Undergraduate at the University Of Lincoln"]),t("p",["Hi. My name is James Roche. Thank you so much for taking the time to take part in my survey. I am researching whether or not deep machine learnt language models and speech synthesis can replace story writers and voice actors for games scripts and non-player characters respectively."," "]),t("p",["What I would like you to do is to interact with some variations of these models and rate them after your interaction. You will give a prompt to the language model for example: “Mary has 17 children, and she is late for work, she is very close to being fired”, and the model will return a story that it has created based off this prompt. You will also have a conversation with the model to replicate talking to a NPC. After this you will rate the model based off a variety of parameters. It shouldn’t take you too long, but I ask that you do not use any profanity or try to use the system in any malicious way."," "]),t("p",["This bit is very important: you have the right to withdraw your consent up until the point you submit your data at the end of this website. After this point your data will be anonymised and you will not be able to remove it from the study. If at any time you want to withdraw your consent whilst on this website, just close the tab and you will not have submitted anything to me. You can read the full intent of this study and consent here."]),t("p",["If you choose to take part in my study after reading the above, thank you so much for your time it is greatly appreciated."," "]),t("p",["I give consent to take part in this study and I am informed I can withdraw up until sending my data to the student’s University OneDrive account, I need simply leave this page."," "]),t("div",{class:"row"},[t("button",{attrs:{type:"button"},class:"btn btn-success",on:{click:this.sendConsent}},["Give Consent"])])])}}),c=o("1bbb"),l=o("a15b"),d=o("b28b"),h=o("1947"),u=o("9c7d"),p=o("dd9a"),m=o("6865"),y={name:"LanguageModel",data:()=>({placeholder:"Give the bot a prompt"}),methods:{},computed:{},render(){const t=arguments[0];return t("div",[t(c["a"],["The Language models to interact with",t(l["a"],[t(d["a"],[t(l["a"],{attrs:{"aligns-h":"between"}},[t(d["a"],{attrs:{cols:"10"}},["This is the story model for you to interact with"]),t(d["a"],{attrs:{cols:"1"}},[t(h["a"],{on:{click:()=>{this.$store.state.model1=""}}},["Clear"])])]),t(l["a"],[t(u["a"],{attrs:{id:"Model1",placeholder:this.placeholder,rows:"8"},model:{value:this.$store.state.model1,callback:t=>{this.$set(this.$store.state,"model1",t)}}})]),t(l["a"],[t(h["a"],{on:{click:()=>{this.$store.dispatch("sendPrompt",1)}}},["AI Response"])]),t(l["a"],[t(p["a"],{attrs:{text:"Voice to generate"}},[t(m["a"],{on:{click:()=>{this.$store.dispatch("sendTTS",1)}}},["Voice 1"]),t(m["a"],["Voice 2"]),t(m["a"],["Voice 3"])])])]),t(d["a"],[t(l["a"],{attrs:{"aligns-h":"between"}},[t(d["a"],{attrs:{cols:"10"}},["This is the story model for you to interact with"]),t(d["a"],{attrs:{cols:"1"}},[t(h["a"],{on:{click:()=>{this.$store.state.model2=""}}},["Clear"])])]),t(l["a"],[t(u["a"],{attrs:{id:"Model1",placeholder:this.placeholder,rows:"8"},model:{value:this.$store.state.model2,callback:t=>{this.$set(this.$store.state,"model2",t)}}})]),t(l["a"],[t(h["a"],{on:{click:()=>{this.$store.dispatch("sendPrompt",1)}}},["AI Response"])]),t(l["a"],[t(p["a"],{attrs:{text:"Voice to generate"}},[t(m["a"],["Voice 1"]),t(m["a"],["Voice 2"]),t(m["a"],["Voice 3"])])])])])])])}},g=o("db6c"),f={name:"Evaluation",data:()=>({}),methods:{},computed:{},render(){const t=arguments[0];return t("div",{attrs:{id:"consent"}},[t("BContainer",[t(g["a"],{model:{value:this.$store.state.survey.rating,callback:t=>{this.$set(this.$store.state.survey,"rating",t)}}})])])}},v={name:"Submit",data:()=>({}),methods:{},render(){const t=arguments[0];return t("div",[t(c["a"],[t("p",["You understand that after you submit you are no longer able to retrieve your data as it is annoymised on the server "]),t(h["a"],{on:{click:()=>{this.$store.dispatch("submitResponse")}}},["Submit response"])])])}},b={name:"App",components:{Consent:r,LanguageModel:y,Evaluation:f,Submit:v},methods:{},computed:{},render(){const t=arguments[0];return t("div",[t("BRow",{class:"m-1 text-center"},[t("BCol",[t("BRow",[t("BButton",{on:{click:()=>{this.$store.dispatch("backward")}}},[t("BIcon",{attrs:{icon:"arrow-left"}})])])]),t("BCol",{attrs:{cols:"10"}},[t("BRow",[t("BCol",[t("BButton",{on:{click:()=>{this.$store.dispatch("changePage",1)}}},["Consent"])]),t("BCol",[t("BButton",{on:{click:()=>{this.$store.dispatch("changePage",2)}}},["Model"])]),t("BCol",[t("BButton",{on:{click:()=>{this.$store.dispatch("changePage",3)}}},["Evaluation"])]),t("BCol",[t("BButton",{on:{click:()=>{this.$store.dispatch("changePage",4)}}},["Submit"])])])]),t("BCol",[t("BRow",[t("BButton",{on:{click:()=>{this.$store.dispatch("forward")}}},[t("BIcon",{attrs:{icon:"arrow-right"}})])])])]),1===this.$store.state.activePage&&t(r),2===this.$store.state.activePage&&t(y),3===this.$store.state.activePage&&t(f),4===this.$store.state.activePage&&t(v)])}};a["default"].use(s["a"]);var w=new s["a"].Store({state:{activePage:1,model1:"",model2:"",survey:{rating:null,checkBox:!1,reviewText:""}},mutations:{setActivePage(t,e){t.activePage=e},incrementPage(t){4!=t.activePage&&(t.activePage+=1)},decrementPage(t){1!=t.activePage&&(t.activePage-=1)},setModel1(t,e){t.model1=e},setModel2(t,e){t.model2=e}},actions:{changePage({commit:t},e){t("setActivePage",e)},forward({commit:t}){t("incrementPage")},backward({commit:t}){t("decrementPage")},sendPrompt({commit:t},e){let o=1===e?this.state.model1:this.state.model2,a=1===e?"setModel1":"setModel2",s=1===e?"completion":"chat";fetch(window.location.origin+"/languagemodel",{method:"POST",body:JSON.stringify({text:o,type:s}),headers:{"Content-Type":"application/json"}}).then(t=>t.text()).then(e=>{console.log(e),t(a,e)}).catch(t=>{console.log(t)})},sendTTS(t){let e=1===t?this.state.model1:this.state.model2,o=new Audio(`${window.location.origin}/tts/getazure/${e}`);o.play()},submitResponse(){console.log(JSON.stringify(this.state.survey)),fetch(window.location.origin+"/submit",{method:"POST",body:JSON.stringify(this.state.survey),headers:{"Content-Type":"application/json"}}).then(t=>t.text()).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}});a["default"].use(s["a"]),a["default"].use(n["a"]),a["default"].use(i["a"]),a["default"].config.productionTip=!1,new a["default"]({store:w,render:t=>t(b)}).$mount("#app")}});
//# sourceMappingURL=app.a7448489.js.map