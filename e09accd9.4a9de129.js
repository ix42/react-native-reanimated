(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(9),i=(t(0),t(248)),o={id:"spring",title:"Spring",sidebar_label:"Spring"},s={id:"version-1.x.x/animations/spring",title:"Spring",description:"`js",source:"@site/versioned_docs/version-1.x.x/animations/spring.md",permalink:"/react-native-reanimated/docs/animations/spring",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/animations/spring.md",version:"1.x.x",sidebar_label:"Spring",sidebar:"version-1.x.x/docs",previous:{title:"Decay",permalink:"/react-native-reanimated/docs/animations/decay"},next:{title:"SpringUtils",permalink:"/react-native-reanimated/docs/animations/spring_utils"}},p=[],c={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"spring(\n  clock,\n  { finished, position, velocity, time },\n  {\n    damping,\n    mass,\n    stiffness,\n    overshootClamping,\n    restSpeedThreshold,\n    restDisplacementThreshold,\n    toValue,\n  }\n);\n")),Object(i.b)("p",null,"When evaluated, updates ",Object(i.b)("inlineCode",{parentName:"p"},"position")," and ",Object(i.b)("inlineCode",{parentName:"p"},"velocity")," nodes by running a single step of spring based animation. Check the original ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," API docs to learn about the config parameters like ",Object(i.b)("inlineCode",{parentName:"p"},"damping"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mass"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stiffness"),", ",Object(i.b)("inlineCode",{parentName:"p"},"overshootClamping"),", ",Object(i.b)("inlineCode",{parentName:"p"},"restSpeedThreshold")," and ",Object(i.b)("inlineCode",{parentName:"p"},"restDisplacementThreshold"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"finished")," state updates to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," when the ",Object(i.b)("inlineCode",{parentName:"p"},"position")," reaches the destination set by ",Object(i.b)("inlineCode",{parentName:"p"},"toValue"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"time")," state variable also updates when the node evaluates and it represents the clock value at the time when the node got evaluated for the last time. It is expected that ",Object(i.b)("inlineCode",{parentName:"p"},"time")," variable is reset before spring animation can be restarted."))}l.isMDXComponent=!0},248:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,u=d["".concat(o,".").concat(b)]||d[b]||m[b]||i;return t?a.a.createElement(u,s(s({ref:n},c),{},{components:t})):a.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);