webpackJsonp([42],{1398:function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return{itemOrderList:e.itemCreation.itemOrderList}}function c(e){return{actions:(0,b.bindActionCreators)(w,e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),d=r(0),f=l(d),m=r(3),p=r(6),b=r(5),h=r(1),E=l(h),y=r(4),v=(a(y),r(16)),O=a(v),_=r(196),w=a(_),I=r(26),N=a(I),j=f.default.createElement("div",{className:"caption"},f.default.createElement("span",{className:"caption-subject bold uppercase"},"Orders")),k=f.default.createElement("i",{className:"icon-arrow-left"}),L=f.default.createElement("thead",null,f.default.createElement("tr",null,f.default.createElement("th",null,"Order #"),f.default.createElement("th",null,"Date"),f.default.createElement("th",null,"Title"),f.default.createElement("th",null,"Sales Rep"),f.default.createElement("th",null,"Total"))),g=function(e){function t(e,r){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return i(t,e),s(t,[{key:"componentWillMount",value:function(){var e={itemId:this.props.params.materialId,companyId:localStorage.companyId};this.props.actions.getItemsOrderList(e);var t={parent:"Materials",childone:"Orders",childtwo:""};this.props.breadCrumb(t)}},{key:"componentDidMount",value:function(){N.showLoader("itemList"),setTimeout(function(){O.ItemTable.init(),$("div#itemList").unblock()},2e3)}},{key:"render",value:function(){var e=this.props.itemOrderList.map(function(e,t){return f.default.createElement("tr",{key:t},f.default.createElement("td",null,e.orderId?e.orderId.orderNumber:"-"),f.default.createElement("td",null,e.createdAt?(0,E.default)(e.createdAt).format("MM/DD/YYYY"):"-"),f.default.createElement("td",null,e.orderId?e.orderId.title:"-"),f.default.createElement("td",null,e.salesRep?e.salesRep.firstname+" "+e.salesRep.lastname:"-"),f.default.createElement("td",null,e.total?"$"+e.total:"-"))}.bind(this));return f.default.createElement("div",{className:"portlet light portlet-fit portlet-datatable bordered",id:"itemList"},f.default.createElement("div",{className:"portlet-title"},j,f.default.createElement("div",{className:"actions"},f.default.createElement(m.Link,{to:"/material/"+this.props.params.materialId,className:"btn btn-sm btn-circle green"},k," Back "))),f.default.createElement("div",{className:"portlet-body"},f.default.createElement("div",{className:"table-container table-responsive"},f.default.createElement("table",{className:"table table-striped table-bordered table-hover",id:"item_list"},L,f.default.createElement("tbody",null,e)))))}}]),t}(f.default.Component);t.default=(0,p.connect)(u,c)(g)}});