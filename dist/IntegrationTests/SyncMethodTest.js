'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _jsxRuntime=require("react/jsx-runtime");var _jsxFileName="/Users/apratt/dev/tmp/react-native/IntegrationTests/SyncMethodTest.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var React=require('react');var ReactNative=require('react-native');var View=ReactNative.View;var _ReactNative$NativeMo=ReactNative.NativeModules,TestModule=_ReactNative$NativeMo.TestModule,RNTesterTestModule=_ReactNative$NativeMo.RNTesterTestModule;var SyncMethodTest=function(_React$Component){(0,_inherits2.default)(SyncMethodTest,_React$Component);var _super=_createSuper(SyncMethodTest);function SyncMethodTest(){(0,_classCallCheck2.default)(this,SyncMethodTest);return _super.apply(this,arguments);}(0,_createClass2.default)(SyncMethodTest,[{key:"componentDidMount",value:function componentDidMount(){if(RNTesterTestModule.echoString('test string value')!=='test string value'){throw new Error('Something wrong with echoString sync method');}if(RNTesterTestModule.methodThatReturnsNil()!=null){throw new Error('Something wrong with methodThatReturnsNil sync method');}var response;RNTesterTestModule.methodThatCallsCallbackWithString('test',function(echo){response=echo;});requestAnimationFrame(function(){if(response==='test'){TestModule.markTestCompleted();}else{throw new Error('Something wrong with methodThatCallsCallbackWithString sync method, '+'got response '+JSON.stringify(response));}});}},{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(View,{});}}]);return SyncMethodTest;}(React.Component);SyncMethodTest.displayName='SyncMethodTest';module.exports=SyncMethodTest;