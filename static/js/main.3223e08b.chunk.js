(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(14),n(8)),s=n(2),u=n(3),b=n(5),d=n(4),j=(n(15),n(0)),l=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:t}),n]})},h=n(9),O=n.n(h),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(j.jsx)("button",{onClick:function(){n(e)},className:O.a.feedbackBtn,children:e},e)}))}}]),n}(c.Component),k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good: ",t]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",c]}),Object(j.jsxs)("li",{children:["Total: ",a]}),Object(j.jsxs)("li",{children:["Positive feedback: ",t?r:0,"%"]})]})}}]),n}(c.Component),p=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave your feedback",children:Object(j.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),this.countTotalFeedback()?Object(j.jsx)(l,{title:"Statistics",children:Object(j.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(j.jsx)(p,{message:"No feedback given"})]})}}]),n}(c.Component);n(17);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={feedbackBtn:"FeedbackOptions_feedbackBtn__zm642"}}},[[18,1,2]]]);
//# sourceMappingURL=main.3223e08b.chunk.js.map