'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _jsxRuntime=require("react/jsx-runtime");var _jsxFileName="/Users/apratt/dev/tmp/react-native/IntegrationTests/WebSocketTest.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var React=require('react');var ReactNative=require('react-native');var View=ReactNative.View;var TestModule=ReactNative.NativeModules.TestModule;var DEFAULT_WS_URL='ws://localhost:5555/';var WS_EVENTS=['close','error','message','open'];var WebSocketTest=function(_React$Component){(0,_inherits2.default)(WebSocketTest,_React$Component);var _super=_createSuper(WebSocketTest);function WebSocketTest(){var _this;(0,_classCallCheck2.default)(this,WebSocketTest);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={url:DEFAULT_WS_URL,fetchStatus:null,socket:null,socketState:null,lastSocketEvent:null,lastMessage:null,testMessage:'testMessage',testExpectedResponse:'testMessage_response'};_this._waitFor=function(condition,timeout,callback){var remaining=timeout;var timeoutFunction=function timeoutFunction(){if(condition()){callback(true);return;}remaining--;if(remaining===0){callback(false);}else{setTimeout(timeoutFunction,1000);}};setTimeout(timeoutFunction,1000);};_this._connect=function(){var socket=new WebSocket(_this.state.url);WS_EVENTS.forEach(function(ev){return socket.addEventListener(ev,_this._onSocketEvent);});_this.setState({socket:socket,socketState:socket.readyState});};_this._socketIsConnected=function(){return _this.state.socketState===1;};_this._socketIsDisconnected=function(){return _this.state.socketState===3;};_this._disconnect=function(){if(!_this.state.socket){return;}_this.state.socket.close();};_this._onSocketEvent=function(event){var state={socketState:event.target.readyState,lastSocketEvent:event.type};if(event.type==='message'){state.lastMessage=event.data;}_this.setState(state);};_this._sendText=function(text){if(!_this.state.socket){return;}_this.state.socket.send(text);};_this._sendTestMessage=function(){_this._sendText(_this.state.testMessage);};_this._receivedTestExpectedResponse=function(){return _this.state.lastMessage===_this.state.testExpectedResponse;};_this.testConnect=function(){_this._connect();_this._waitFor(_this._socketIsConnected,5,function(connectSucceeded){if(!connectSucceeded){TestModule.markTestPassed(false);return;}_this.testSendAndReceive();});};_this.testSendAndReceive=function(){_this._sendTestMessage();_this._waitFor(_this._receivedTestExpectedResponse,5,function(messageReceived){if(!messageReceived){TestModule.markTestPassed(false);return;}_this.testDisconnect();});};_this.testDisconnect=function(){_this._disconnect();_this._waitFor(_this._socketIsDisconnected,5,function(disconnectSucceeded){TestModule.markTestPassed(disconnectSucceeded);});};return _this;}(0,_createClass2.default)(WebSocketTest,[{key:"componentDidMount",value:function componentDidMount(){this.testConnect();}},{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(View,{});}}]);return WebSocketTest;}(React.Component);WebSocketTest.displayName='WebSocketTest';module.exports=WebSocketTest;