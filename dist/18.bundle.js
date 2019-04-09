webpackJsonp([18],{1414:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return{userData:e.users.userData,userRoles:e.users.userRoles}}function c(e){return{actions:(0,h.bindActionCreators)(B,e)}}Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),d=r(u),f=a(7),p=r(f),b=(a(3),a(6)),h=a(5),A=a(12),g=r(A),y=a(22),v=n(y),k=n(y),C=a(9),E=r(C),N=a(584),w=r(N),I=a(594),B=n(I),D=a(1),U=(r(D),a(583)),x=a(1432),R=r(x);a(1517);var O=a(4),T=(n(O),a(581)),S=n(T),F=d.default.createElement("i",{className:"icon-users font-dark"}),X=d.default.createElement("ul",{className:"nav nav-tabs"},d.default.createElement("li",{className:"active"},d.default.createElement("a",{href:"#user-details","data-toggle":"tab"}," Details ")),d.default.createElement("li",null,d.default.createElement("a",{href:"#user-settings","data-toggle":"tab"}," Settings "))),L=d.default.createElement("label",{htmlFor:"firstname"},"First Name"),_=d.default.createElement("label",{htmlFor:"lastname"},"Last Name"),P=d.default.createElement("label",{htmlFor:"company"},"Company"),j=d.default.createElement("label",{htmlFor:"email"},"Email"),V=d.default.createElement("span",{className:"fileinput-new"}," Select Picture "),M=d.default.createElement("span",{className:"fileinput-exists"}," Change "),G=d.default.createElement("label",{htmlFor:"firstname"},"First Name",d.default.createElement("span",{className:"required"},"*")),z=d.default.createElement("label",{htmlFor:"lastname"},"Last Name"),J=d.default.createElement("label",{htmlFor:"web"},"Company"),W=d.default.createElement("label",{htmlFor:"location"},"Email"),H=d.default.createElement("label",{htmlFor:"roles"},"Roles"),Y=function(e){function t(e,a){l(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n.state={userData:"",userRoles:[],disabled:!1,rolesValue:[],rolesOptions:[],dataRecieved:!1,blocking:!0},n.handleRolesChange=n.handleRolesChange.bind(n),n.handleUserUpdate=n.handleUserUpdate.bind(n),n.imageUpdateHandler=n.imageUpdateHandler.bind(n),n.removeProfileImage=n.removeProfileImage.bind(n),n}return o(t,e),m(t,[{key:"componentWillMount",value:function(){var e={companyUserId:this.props.params.profileId};this.setState({dataRecieved:!0}),this.props.actions.getUserDetails(e);var t={companyId:localStorage.companyId};this.props.actions.getRoles(t)}},{key:"componentDidMount",value:function(){k.FormValidationMd.init();p.default.findDOMNode(this.refs.userFileUpload)}},{key:"componentWillUnmount",value:function(){p.default.findDOMNode(this.refs.userFileUpload)}},{key:"componentWillReceiveProps",value:function(e){if(e.userData){var t=e.userData;if(this.setState({userData:t,blocking:!1}),this.state.dataRecieved){e.userData.roles.map(function(e){this.state.rolesValue.push({value:e.roleId,label:e.roleName})}.bind(this));this.setState({dataRecieved:!1})}if(0!==e.userRoles.length&&0==this.state.rolesOptions.length){e.userRoles.map(function(e){this.state.rolesOptions.push({value:e._id,label:e.roleName})}.bind(this));this.setState({userRoles:e.userRoles})}setTimeout(function(){v.FloatLabel.init()},400)}}},{key:"handleRolesChange",value:function(e){this.setState({rolesValue:e});var t=[];e.map(function(e){var a={roleId:e.value,roleName:e.label};t.push(a)});var a={userId:this.props.params.profileId,roles:t};this.props.actions.updateUserRoles(a)}},{key:"handleUserUpdate",value:function(){if((0,E.default)("#userUpdateForm").valid()){var e=p.default.findDOMNode(this.refs.firstname).value.trim(),t=p.default.findDOMNode(this.refs.lastname).value.trim(),a=JSON.parse(JSON.stringify(this.state.userData)),n={userId:this.props.params.profileId,firstName:e,lastName:t,name:e+" "+t};this.props.actions.updateUserDetails(n,a)}}},{key:"imageUpdateHandler",value:function(e){var t=void 0,a=void 0,n=JSON.parse(JSON.stringify(this.state.userData));e.target.value?(t=this.props.params.profileId,a=p.default.findDOMNode(this.refs.userFileUpload).files[0],(0,U.isValidImage)(a.name)||(t="")):t="",t&&this.props.actions.updateUserPicture(a,t,n)}},{key:"removeProfileImage",value:function(){var e=JSON.parse(JSON.stringify(this.state.userData)),t=this.props.params.profileId,a={userId:t,path:this.state.userData.userImage.replace(/ +/g,"")};this.props.actions.removeUserPicture(a,e)}},{key:"render",value:function(){this.state.userRoles.map(function(e,t){return d.default.createElement("option",{value:e._id,key:t},e.roleName)}.bind(this));return d.default.createElement(R.default,{tag:"div",blocking:this.state.blocking},d.default.createElement("div",{className:"portlet light bordered",style:{height:"500px"}},d.default.createElement("div",{className:"portlet-title tabbable-line"},d.default.createElement("div",{className:"caption"},F,d.default.createElement("span",{className:"caption-subject font-dark bold uppercase"},"User - ",this.state.userData.firstname?this.state.userData.name:this.state.userData.email)),X),d.default.createElement("div",{className:"portlet-body"},d.default.createElement("div",{className:"tab-content"},d.default.createElement("div",{className:"tab-pane active",id:"user-details"},d.default.createElement("form",{action:"#",className:"horizontal-form"},d.default.createElement("div",{className:"form-body"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-md-3"},d.default.createElement("ul",{className:"list-unstyled profile-nav"},d.default.createElement("li",null,d.default.createElement("img",{src:this.state.userData.userImage?this.state.userData.userImage:a(103),className:"img-responsive pic-bordered",alt:"Profile Pic"})))),d.default.createElement("div",{className:"col-md-9"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("div",{className:"form-control form-control-static"},this.state.userData.firstname?this.state.userData.firstname:"-"),L)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("div",{className:"form-control form-control-static"}," ",this.state.userData.lastname?this.state.userData.lastname:"-"," "),_)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("div",{className:"form-control form-control-static"}," ",this.state.userData.company?this.state.userData.company:"-"," "),P)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("div",{className:"form-control form-control-static"}," ",this.state.userData.email?this.state.userData.email:"-"," "),j)))))))),d.default.createElement("div",{className:"tab-pane",id:"user-settings"},d.default.createElement("form",{role:"form",id:"userUpdateForm"},d.default.createElement("div",{className:"form-body"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-md-3"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("div",{className:"fileinput fileinput-exists","data-provides":"fileinput"},d.default.createElement("div",{className:"fileinput-preview thumbnail","data-trigger":"fileinput",style:{width:200,height:200}},d.default.createElement("img",{src:this.state.userData.userImage?this.state.userData.userImage:a(103),className:"img-responsive",alt:"Logo"})),d.default.createElement("div",null,d.default.createElement("span",{className:"btn red btn-sm btn-outline btn-file"},V,M,d.default.createElement("input",{type:"file",ref:"userFileUpload",id:"userFileUpload",name:"userFileUpload",onChange:this.imageUpdateHandler})),this.state.userData.userImage?d.default.createElement("a",{href:"javascript:;",className:"btn red btn-sm",onClick:this.removeProfileImage}," Remove "):null)))),d.default.createElement("div",{className:"col-md-9"},d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("input",{ref:"firstname",type:"text",className:"form-control",name:"firstname",id:"firstname",key:this.state.userData.firstname,defaultValue:this.state.userData.firstname}),G)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("input",{ref:"lastname",type:"text",className:"form-control",name:"lastname",id:"lastname",key:this.state.userData.lastname,defaultValue:this.state.userData.lastname}),z)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("input",{ref:"weburl",disabled:!0,type:"text",className:"form-control",name:"web",id:"web",key:this.state.userData.company,defaultValue:this.state.userData.company?this.state.userData.company:"-"}),J)),d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},d.default.createElement("input",{ref:"location",disabled:!0,type:"text",className:"form-control",name:"location",id:"location",key:this.state.userData.email,defaultValue:this.state.userData.email?this.state.userData.email:"-"}),W)),this.shouldBeVisible(S.userAuthorize)?d.default.createElement("div",{className:"col-md-6"},d.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},H,d.default.createElement(g.default,{multi:!0,disabled:this.state.disabled,value:this.state.rolesValue,placeholder:"Select roles",options:this.state.rolesOptions,onChange:this.handleRolesChange}))):null)))),d.default.createElement("div",{className:"form-actions noborder text-right"},d.default.createElement("button",{type:"button",className:"btn blue",onClick:this.handleUserUpdate},"Save"))))))))}}]),t}(w.default);t.default=(0,b.connect)(s,c)(Y)},1432:function(e,t,a){"use strict";function n(){return l.a.createElement("div",{className:"loading-indicator"},l.a.createElement("span",{className:"loading-bullet"},"•")," ",l.a.createElement("span",{className:"loading-bullet"},"•")," ",l.a.createElement("span",{className:"loading-bullet"},"•"))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=a.n(r),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d={tag:"div",renderChildren:!0,loader:n},f=function(e){function t(e){i(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.tabbedUpTop=a.tabbedUpTop.bind(a),a.tabbedDownTop=a.tabbedDownTop.bind(a),a.tabbedUpBottom=a.tabbedUpBottom.bind(a),a.tabbedDownBottom=a.tabbedDownBottom.bind(a),a.setHelper=a.setRef.bind(a,"helper"),a.setBlocker=a.setRef.bind(a,"blocker"),a.setTopFocus=a.setRef.bind(a,"topFocus"),a.setContainer=a.setRef.bind(a,"container"),a.setMessageContainer=a.setRef.bind(a,"messageContainer"),a.handleScroll=a.handleScroll.bind(a),a.state={top:"50%"},a}return c(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.blocking!==this.props.blocking)if(e.blocking)this.helper&&this.helper.parentNode&&this.helper.parentNode.contains&&this.helper.parentNode.contains(document.activeElement)&&(this.focused=document.activeElement,this.focused&&this.focused!==document.body&&(window.setImmediate||setTimeout)(function(){return t.topFocus&&t.topFocus.focus()}));else{this.detachListeners();var a=document.activeElement;!this.focused||a&&a!==document.body&&a!==this.topFocus||(this.focused.focus(),this.focused=null)}e.keepInView&&(e.keepInView!==this.props.keepInView||e.blocking&&e.blocking!==this.props.blocking)&&(this.attachListeners(),this.keepInView(e))}},{key:"componentWillUnmount",value:function(){this.detachListeners()}},{key:"setRef",value:function(e,t){this[e]=t}},{key:"attachListeners",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"detachListeners",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"blockingTab",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.props.blocking&&("Tab"===e.key||9===e.keyCode)&&e.shiftKey==t}},{key:"tabbedUpTop",value:function(e){this.blockingTab(e)&&this.blocker.focus()}},{key:"tabbedDownTop",value:function(e){this.blockingTab(e)&&(e.preventDefault(),this.blocker.focus())}},{key:"tabbedUpBottom",value:function(e){this.blockingTab(e,!0)&&this.topFocus.focus()}},{key:"tabbedDownBottom",value:function(e){this.blockingTab(e,!0)&&(e.preventDefault(),this.topFocus.focus())}},{key:"keepInView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;if(e.blocking&&e.keepInView&&this.container){var t=this.container.getBoundingClientRect(),a=window.innerHeight;if(t.top>a||t.bottom<0)return;if(t.top>=0&&t.bottom<=a)return void("50%"!==this.state.top&&this.setState({top:"50%"}));var n=this.messageContainer?this.messageContainer.getBoundingClientRect().height:0,r=Math.max(Math.min(a,t.bottom)-Math.max(t.top,0),n)/2;t.top<0&&(r=Math.min(r-t.top,t.height-n/2)),this.state.top!==r&&this.setState({top:r})}}},{key:"handleScroll",value:function(){this.keepInView()}},{key:"render",value:function(){var e=this.props,t=e.tag,a=e.blocking,n=e.className,r=e.children,i=e.message,o=e.loader,c=e.renderChildren,u=e.keepInView,d=m(e,["tag","blocking","className","children","message","loader","renderChildren","keepInView"]),f=a?"block-ui "+n:n,p=!a||c;return l.a.createElement(t,s({},d,{className:f,"aria-busy":a,ref:this.setContainer}),a&&l.a.createElement("div",{tabIndex:"0",onKeyUp:this.tabbedUpTop,onKeyDown:this.tabbedDownTop,ref:this.setTopFocus}),p&&r,a&&l.a.createElement("div",{className:"block-ui-container",tabIndex:"0",ref:this.setBlocker,onKeyUp:this.tabbedUpBottom,onKeyDown:this.tabbedDownBottom},l.a.createElement("div",{className:"block-ui-overlay"}),l.a.createElement("div",{className:"block-ui-message-container",ref:this.setMessageContainer,style:{top:u?this.state.top:void 0}},l.a.createElement("div",{className:"block-ui-message"},i,l.a.isValidElement(o)?o:l.a.createElement(o,null)))),l.a.createElement("span",{ref:this.setHelper}))}}]),t}(r.Component);f.defaultProps=d,t.default=f},1517:function(e,t,a){t=e.exports=a(1352)(),t.push([e.i,".loading-indicator{text-align:center}.loading-bullet{font-size:2em;color:#02a17c}.block-ui{position:relative;min-height:3em}.block-ui-container{position:absolute;z-index:1010;top:0;right:0;bottom:0;left:0;height:100%;min-height:2em;cursor:wait;overflow:hidden}.block-ui-container:focus{outline:none}.block-ui-overlay{width:100%;height:100%;opacity:.5;filter:alpha(opacity=50);background-color:#fff}.block-ui-message-container{position:absolute;top:50%;left:0;right:0;text-align:center;transform:translateY(-50%);z-index:10001}.block-ui-message{color:#333;background:none;z-index:1011}@keyframes fadeInRTL1{0%{opacity:0;transform:translateX(20px)}30%{opacity:1;transform:translateX(0)}60%{opacity:1}80%{opacity:0}}@keyframes fadeInRTL2{0%{opacity:0}10%{opacity:0;transform:translateX(20px)}40%{opacity:1;transform:translateX(0)}60%{opacity:1}80%{opacity:0}}@keyframes fadeInRTL3{0%{opacity:0}20%{opacity:0;transform:translateX(20px)}50%{opacity:1;transform:translateX(0)}60%{opacity:1}80%{opacity:0}}.loading-bullet{display:inline-block;opacity:0;animation:3s ease .5s infinite fadeInRTL1}.loading-bullet+.loading-bullet{animation-name:fadeInRTL2}.loading-bullet+.loading-bullet+.loading-bullet{animation-name:fadeInRTL3}","",{version:3,sources:["/./home/jaideepgoyal/DayUsers/Jai/Projects/Telpro-frontEnd/gitlab/FilemakerApp_frontend/node_modules/react-block-ui/style.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,CACrB,gBAIG,cACA,aAAc,CACjB,UAEG,kBACA,cAAe,CAClB,oBAEG,kBACA,aACA,MACA,QACA,SACA,OACA,YACA,eACA,YACA,eAAgB,CACnB,0BAEG,YAAa,CAChB,kBAEG,WACA,YACA,WACA,yBACA,qBAAuB,CAC1B,4BAEG,kBACA,QACA,OACA,QACA,kBACA,2BACA,aAAc,CACjB,kBAEG,WACA,gBACA,YAAa,CAChB,sBAsBG,GACI,UACA,0BAC2B,CAE/B,IACI,UACA,uBAC0B,CAE9B,IACI,SAAU,CAEd,IACI,SAAU,CAAA,CAGlB,sBAsBI,GACI,SAAU,CAEd,IACI,UACA,0BAC2B,CAE/B,IACI,UACA,uBAC0B,CAE9B,IACI,SAAU,CAEd,IACI,SAAU,CAAA,CAGlB,sBAsBI,GACI,SAAU,CAEd,IACI,UACA,0BAC2B,CAE/B,IACI,UACA,uBAC0B,CAE9B,IACI,SAAU,CAEd,IACI,SAAU,CAAA,CAGlB,gBACI,qBACA,UACA,yCAC0C,CAC7C,gCAGG,yBAA0B,CAC7B,gDAGG,yBAA0B,CAC7B",file:"style.css",sourcesContent:[".loading-indicator {\r\n    text-align: center;\r\n}\r\n.loading-bullet {\r\n    display: inline-block;\r\n    opacity: 0;\r\n    font-size: 2em;\r\n    color: #02a17c;\r\n}\r\n.block-ui {\r\n    position: relative;\r\n    min-height: 3em;\r\n}\r\n.block-ui-container {\r\n    position: absolute;\r\n    z-index: 1010;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    min-height: 2em;\r\n    cursor: wait;\r\n    overflow: hidden;\r\n}\r\n.block-ui-container:focus {\r\n    outline: none;\r\n}\r\n.block-ui-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.5;\r\n    filter: alpha(opacity=50);\r\n    background-color: white;\r\n}\r\n.block-ui-message-container {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    transform: translateY(-50%);\r\n    z-index: 10001;\r\n}\r\n.block-ui-message {\r\n    color: #333;\r\n    background: none;\r\n    z-index: 1011;\r\n}\r\n\r\n/* CSS Animations */\r\n@-webkit-keyframes fadeInRTL1 {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes fadeInRTL1 {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes fadeInRTL2 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    40% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes fadeInRTL2 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    40% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes fadeInRTL3 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    20% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes fadeInRTL3 {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    20% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0px);\r\n        transform: translateX(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n    }\r\n}\r\n.loading-bullet {\r\n    display: inline-block;\r\n    opacity: 0;\r\n    -webkit-animation: 3s ease .5s infinite fadeInRTL1;\r\n    animation: 3s ease .5s infinite fadeInRTL1;\r\n}\r\n.loading-bullet + .loading-bullet {\r\n    -webkit-animation-name: fadeInRTL2;\r\n    animation-name: fadeInRTL2;\r\n}\r\n.loading-bullet + .loading-bullet + .loading-bullet {\r\n    -webkit-animation-name: fadeInRTL3;\r\n    animation-name: fadeInRTL3;\r\n}\r\n"],sourceRoot:"webpack://"}])}});