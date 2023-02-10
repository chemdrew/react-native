'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _jsxRuntime=require("react/jsx-runtime");var _jsxFileName="/Users/apratt/dev/tmp/react-native/ReactAndroid/src/androidTest/js/SwipeRefreshLayoutTestModule.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var React=require('react');var _require=require('react-native'),NativeModules=_require.NativeModules,RefreshControl=_require.RefreshControl,ScrollView=_require.ScrollView,StyleSheet=_require.StyleSheet,Text=_require.Text,TouchableWithoutFeedback=_require.TouchableWithoutFeedback,View=_require.View;var BatchedBridge=require('react-native/Libraries/BatchedBridge/BatchedBridge');var RecordingModule=NativeModules.SwipeRefreshLayoutRecordingModule;var Row=function(_React$Component){(0,_inherits2.default)(Row,_React$Component);var _super=_createSuper(Row);function Row(){var _this;(0,_classCallCheck2.default)(this,Row);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={clicks:0};_this._onPress=function(){_this.setState({clicks:_this.state.clicks+1});};return _this;}(0,_createClass2.default)(Row,[{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(TouchableWithoutFeedback,{onPress:this._onPress,children:(0,_jsxRuntime.jsx)(View,{children:(0,_jsxRuntime.jsx)(Text,{children:this.state.clicks+' clicks'})})});}}]);return Row;}(React.Component);var app=null;var SwipeRefreshLayoutTestApp=function(_React$Component2){(0,_inherits2.default)(SwipeRefreshLayoutTestApp,_React$Component2);var _super2=_createSuper(SwipeRefreshLayoutTestApp);function SwipeRefreshLayoutTestApp(){var _this2;(0,_classCallCheck2.default)(this,SwipeRefreshLayoutTestApp);for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this2=_super2.call.apply(_super2,[this].concat(args));_this2.state={rows:2};return _this2;}(0,_createClass2.default)(SwipeRefreshLayoutTestApp,[{key:"componentDidMount",value:function componentDidMount(){app=this;}},{key:"render",value:function render(){var rows=[];for(var i=0;i<this.state.rows;i++){rows.push((0,_jsxRuntime.jsx)(Row,{},i));}return(0,_jsxRuntime.jsx)(ScrollView,{style:styles.container,refreshControl:(0,_jsxRuntime.jsx)(RefreshControl,{style:styles.content,refreshing:false,onRefresh:function onRefresh(){return RecordingModule.onRefresh();}}),children:rows});}}]);return SwipeRefreshLayoutTestApp;}(React.Component);var SwipeRefreshLayoutTestModule={SwipeRefreshLayoutTestApp:SwipeRefreshLayoutTestApp,setRows:function setRows(rows){if(app!=null){app.setState({rows:rows});}}};BatchedBridge.registerCallableModule('SwipeRefreshLayoutTestModule',SwipeRefreshLayoutTestModule);var styles=StyleSheet.create({container:{flex:1},content:{flex:1}});module.exports=SwipeRefreshLayoutTestModule;