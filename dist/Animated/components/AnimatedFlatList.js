var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _FlatList=_interopRequireDefault(require("../../Lists/FlatList"));var _createAnimatedComponent=_interopRequireDefault(require("../createAnimatedComponent"));var React=_interopRequireWildcard(require("react"));var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/Animated/components/AnimatedFlatList.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var FlatListWithEventThrottle=React.forwardRef(function(props,ref){return(0,_jsxRuntime.jsx)(_FlatList.default,Object.assign({scrollEventThrottle:0.0001},props,{ref:ref}));});var _default=(0,_createAnimatedComponent.default)(FlatListWithEventThrottle);exports.default=_default;