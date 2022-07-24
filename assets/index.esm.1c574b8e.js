import{_ as rt,V as k,r as E,W as it}from"./index.2260f7b0.js";function W(n,t){if(n==null)return{};var r={},i=Object.keys(n),a,s;for(s=0;s<i.length;s++)a=i[s],!(t.indexOf(a)>=0)&&(r[a]=n[a]);return r}function nt(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,rt(n,t)}var U=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function at(n,t){return!!(n===t||U(n)&&U(t))}function ot(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!at(n[r],t[r]))return!1;return!0}function N(n,t){t===void 0&&(t=ot);var r,i=[],a,s=!1;function c(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return s&&r===this&&t(u,i)||(a=n.apply(this,u),s=!0,r=this,i=u),a}return c}var st=typeof performance=="object"&&typeof performance.now=="function",$=st?function(){return performance.now()}:function(){return Date.now()};function q(n){cancelAnimationFrame(n.id)}function lt(n,t){var r=$();function i(){$()-r>=t?n.call(null):a.id=requestAnimationFrame(i)}var a={id:requestAnimationFrame(i)};return a}var C=null;function H(n){if(n===void 0&&(n=!1),C===null||n){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),a=i.style;return a.width="100px",a.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?C="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?C="negative":C="positive-ascending"),document.body.removeChild(t),C}return C}var ct=150,ut=function(t,r){return t};function j(n){var t,r=n.getItemOffset,i=n.getEstimatedTotalSize,a=n.getItemSize,s=n.getOffsetForIndexAndAlignment,c=n.getStartIndexForOffset,u=n.getStopIndexForStartIndex,v=n.initInstanceProps,z=n.shouldResetStyleCacheOnItemSizeChange,M=n.validateProps;return t=function(x){nt(p,x);function p(h){var e;return e=x.call(this,h)||this,e._instanceProps=v(e.props,k(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:k(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=N(function(o,l,f,d){return e.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:l,visibleStartIndex:f,visibleStopIndex:d})}),e._callOnScroll=void 0,e._callOnScroll=N(function(o,l,f){return e.props.onScroll({scrollDirection:o,scrollOffset:l,scrollUpdateWasRequested:f})}),e._getItemStyle=void 0,e._getItemStyle=function(o){var l=e.props,f=l.direction,d=l.itemSize,g=l.layout,m=e._getItemStyleCache(z&&d,z&&g,z&&f),I;if(m.hasOwnProperty(o))I=m[o];else{var y=r(e.props,o,e._instanceProps),O=a(e.props,o,e._instanceProps),T=f==="horizontal"||g==="horizontal",R=f==="rtl",b=T?y:0;m[o]=I={position:"absolute",left:R?void 0:b,right:R?b:void 0,top:T?0:y,height:T?"100%":O,width:T?O:"100%"}}return I},e._getItemStyleCache=void 0,e._getItemStyleCache=N(function(o,l,f){return{}}),e._onScrollHorizontal=function(o){var l=o.currentTarget,f=l.clientWidth,d=l.scrollLeft,g=l.scrollWidth;e.setState(function(m){if(m.scrollOffset===d)return null;var I=e.props.direction,y=d;if(I==="rtl")switch(H()){case"negative":y=-d;break;case"positive-descending":y=g-f-d;break}return y=Math.max(0,Math.min(y,g-f)),{isScrolling:!0,scrollDirection:m.scrollOffset<d?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(o){var l=o.currentTarget,f=l.clientHeight,d=l.scrollHeight,g=l.scrollTop;e.setState(function(m){if(m.scrollOffset===g)return null;var I=Math.max(0,Math.min(g,d-f));return{isScrolling:!0,scrollDirection:m.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(o){var l=e.props.outerRef;e._outerRef=o,typeof l=="function"?l(o):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=o)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&q(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=lt(e._resetIsScrolling,ct)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}p.getDerivedStateFromProps=function(e,o){return ft(e,o),M(e),null};var S=p.prototype;return S.scrollTo=function(e){e=Math.max(0,e),this.setState(function(o){return o.scrollOffset===e?null:{scrollDirection:o.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},S.scrollToItem=function(e,o){o===void 0&&(o="auto");var l=this.props.itemCount,f=this.state.scrollOffset;e=Math.max(0,Math.min(e,l-1)),this.scrollTo(s(this.props,e,o,f,this._instanceProps))},S.componentDidMount=function(){var e=this.props,o=e.direction,l=e.initialScrollOffset,f=e.layout;if(typeof l=="number"&&this._outerRef!=null){var d=this._outerRef;o==="horizontal"||f==="horizontal"?d.scrollLeft=l:d.scrollTop=l}this._callPropsCallbacks()},S.componentDidUpdate=function(){var e=this.props,o=e.direction,l=e.layout,f=this.state,d=f.scrollOffset,g=f.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var m=this._outerRef;if(o==="horizontal"||l==="horizontal")if(o==="rtl")switch(H()){case"negative":m.scrollLeft=-d;break;case"positive-ascending":m.scrollLeft=d;break;default:var I=m.clientWidth,y=m.scrollWidth;m.scrollLeft=y-I-d;break}else m.scrollLeft=d;else m.scrollTop=d}this._callPropsCallbacks()},S.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&q(this._resetIsScrollingTimeoutId)},S.render=function(){var e=this.props,o=e.children,l=e.className,f=e.direction,d=e.height,g=e.innerRef,m=e.innerElementType,I=e.innerTagName,y=e.itemCount,O=e.itemData,T=e.itemKey,R=T===void 0?ut:T,b=e.layout,G=e.outerElementType,Z=e.outerTagName,J=e.style,Q=e.useIsScrolling,X=e.width,P=this.state.isScrolling,F=f==="horizontal"||b==="horizontal",Y=F?this._onScrollHorizontal:this._onScrollVertical,L=this._getRangeToRender(),tt=L[0],et=L[1],A=[];if(y>0)for(var w=tt;w<=et;w++)A.push(E.exports.createElement(o,{data:O,key:R(w,O),index:w,isScrolling:Q?P:void 0,style:this._getItemStyle(w)}));var D=i(this.props,this._instanceProps);return E.exports.createElement(G||Z||"div",{className:l,onScroll:Y,ref:this._outerRefSetter,style:it({position:"relative",height:d,width:X,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:f},J)},E.exports.createElement(m||I||"div",{children:A,ref:g,style:{height:F?"100%":D,pointerEvents:P?"none":void 0,width:F?D:"100%"}}))},S._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var o=this._getRangeToRender(),l=o[0],f=o[1],d=o[2],g=o[3];this._callOnItemsRendered(l,f,d,g)}}if(typeof this.props.onScroll=="function"){var m=this.state,I=m.scrollDirection,y=m.scrollOffset,O=m.scrollUpdateWasRequested;this._callOnScroll(I,y,O)}},S._getRangeToRender=function(){var e=this.props,o=e.itemCount,l=e.overscanCount,f=this.state,d=f.isScrolling,g=f.scrollDirection,m=f.scrollOffset;if(o===0)return[0,0,0,0];var I=c(this.props,m,this._instanceProps),y=u(this.props,I,m,this._instanceProps),O=!d||g==="backward"?Math.max(1,l):1,T=!d||g==="forward"?Math.max(1,l):1;return[Math.max(0,I-O),Math.max(0,Math.min(o-1,y+T)),I,y]},p}(E.exports.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var ft=function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},dt=50,_=function(t,r,i){var a=t,s=a.itemSize,c=i.itemMetadataMap,u=i.lastMeasuredIndex;if(r>u){var v=0;if(u>=0){var z=c[u];v=z.offset+z.size}for(var M=u+1;M<=r;M++){var x=s(M);c[M]={offset:v,size:x},v+=x}i.lastMeasuredIndex=r}return c[r]},mt=function(t,r,i){var a=r.itemMetadataMap,s=r.lastMeasuredIndex,c=s>0?a[s].offset:0;return c>=i?B(t,r,s,0,i):ht(t,r,Math.max(0,s),i)},B=function(t,r,i,a,s){for(;a<=i;){var c=a+Math.floor((i-a)/2),u=_(t,c,r).offset;if(u===s)return c;u<s?a=c+1:u>s&&(i=c-1)}return a>0?a-1:0},ht=function(t,r,i,a){for(var s=t.itemCount,c=1;i<s&&_(t,i,r).offset<a;)i+=c,c*=2;return B(t,r,Math.min(i,s-1),Math.floor(i/2),a)},V=function(t,r){var i=t.itemCount,a=r.itemMetadataMap,s=r.estimatedItemSize,c=r.lastMeasuredIndex,u=0;if(c>=i&&(c=i-1),c>=0){var v=a[c];u=v.offset+v.size}var z=i-c-1,M=z*s;return u+M},It=j({getItemOffset:function(t,r,i){return _(t,r,i).offset},getItemSize:function(t,r,i){return i.itemMetadataMap[r].size},getEstimatedTotalSize:V,getOffsetForIndexAndAlignment:function(t,r,i,a,s){var c=t.direction,u=t.height,v=t.layout,z=t.width,M=c==="horizontal"||v==="horizontal",x=M?z:u,p=_(t,r,s),S=V(t,s),h=Math.max(0,Math.min(S-x,p.offset)),e=Math.max(0,p.offset-x+p.size);switch(i==="smart"&&(a>=e-x&&a<=h+x?i="auto":i="center"),i){case"start":return h;case"end":return e;case"center":return Math.round(e+(h-e)/2);case"auto":default:return a>=e&&a<=h?a:a<e?e:h}},getStartIndexForOffset:function(t,r,i){return mt(t,i,r)},getStopIndexForStartIndex:function(t,r,i,a){for(var s=t.direction,c=t.height,u=t.itemCount,v=t.layout,z=t.width,M=s==="horizontal"||v==="horizontal",x=M?z:c,p=_(t,r,a),S=i+x,h=p.offset+p.size,e=r;e<u-1&&h<S;)e++,h+=_(t,e,a).size;return e},initInstanceProps:function(t,r){var i=t,a=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:a||dt,lastMeasuredIndex:-1};return r.resetAfterIndex=function(c,u){u===void 0&&(u=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,c-1),r._getItemStyleCache(-1),u&&r.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),gt=j({getItemOffset:function(t,r){var i=t.itemSize;return r*i},getItemSize:function(t,r){var i=t.itemSize;return i},getEstimatedTotalSize:function(t){var r=t.itemCount,i=t.itemSize;return i*r},getOffsetForIndexAndAlignment:function(t,r,i,a){var s=t.direction,c=t.height,u=t.itemCount,v=t.itemSize,z=t.layout,M=t.width,x=s==="horizontal"||z==="horizontal",p=x?M:c,S=Math.max(0,u*v-p),h=Math.min(S,r*v),e=Math.max(0,r*v-p+v);switch(i==="smart"&&(a>=e-p&&a<=h+p?i="auto":i="center"),i){case"start":return h;case"end":return e;case"center":{var o=Math.round(e+(h-e)/2);return o<Math.ceil(p/2)?0:o>S+Math.floor(p/2)?S:o}case"auto":default:return a>=e&&a<=h?a:a<e?e:h}},getStartIndexForOffset:function(t,r){var i=t.itemCount,a=t.itemSize;return Math.max(0,Math.min(i-1,Math.floor(r/a)))},getStopIndexForStartIndex:function(t,r,i){var a=t.direction,s=t.height,c=t.itemCount,u=t.itemSize,v=t.layout,z=t.width,M=a==="horizontal"||v==="horizontal",x=r*u,p=M?z:s,S=Math.ceil((p+i-x)/u);return Math.max(0,Math.min(c-1,r+S-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function K(n,t){for(var r in n)if(!(r in t))return!0;for(var i in t)if(n[i]!==t[i])return!0;return!1}var vt=["style"],pt=["style"];function yt(n,t){var r=n.style,i=W(n,vt),a=t.style,s=W(t,pt);return!K(r,a)&&!K(i,s)}export{gt as F,It as V,yt as a};
