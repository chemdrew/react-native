'use strict';var React=_interopRequireWildcard(require("react"));var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/Components/ActivityIndicator/__tests__/ActivityIndicator-test.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ReactNativeTestTools=require('../../../Utilities/ReactNativeTestTools');var ActivityIndicator=require('../ActivityIndicator').default;describe('<ActivityIndicator />',function(){it('should set displayName to prevent <Component /> regressions',function(){expect(ActivityIndicator.displayName).toBe('ActivityIndicator');});it('should render as expected',function(){ReactNativeTestTools.expectRendersMatchingSnapshot('ActivityIndicator',function(){return(0,_jsxRuntime.jsx)(ActivityIndicator,{size:"large",color:"#0000ff"});},function(){jest.dontMock('../ActivityIndicator');});});});