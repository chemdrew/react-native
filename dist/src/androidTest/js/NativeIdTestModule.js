'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _jsxRuntime=require("react/jsx-runtime");var _jsxFileName="/Users/apratt/dev/tmp/react-native/ReactAndroid/src/androidTest/js/NativeIdTestModule.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var React=require('react');var TouchableBounce=require('react-native/Libraries/Components/Touchable/TouchableBounce');var _require=require('react-native'),Image=_require.Image,StyleSheet=_require.StyleSheet,Text=_require.Text,TextInput=_require.TextInput,TouchableHighlight=_require.TouchableHighlight,TouchableOpacity=_require.TouchableOpacity,TouchableWithoutFeedback=_require.TouchableWithoutFeedback,View=_require.View;var NativeIdTestApp=function(_React$Component){(0,_inherits2.default)(NativeIdTestApp,_React$Component);var _super=_createSuper(NativeIdTestApp);function NativeIdTestApp(){(0,_classCallCheck2.default)(this,NativeIdTestApp);return _super.apply(this,arguments);}(0,_createClass2.default)(NativeIdTestApp,[{key:"render",value:function render(){var uri='data:image/gif;base64,'+'R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapy'+'uvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/'+'TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5'+'iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97V'+'riy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7';return(0,_jsxRuntime.jsxs)(View,{children:[(0,_jsxRuntime.jsx)(Image,{nativeID:"Image",source:{uri:uri},style:styles.base}),(0,_jsxRuntime.jsx)(Text,{nativeID:"Text",children:"text"}),(0,_jsxRuntime.jsx)(TextInput,{nativeID:"TextInput",value:"Text input"}),(0,_jsxRuntime.jsx)(TouchableBounce,{nativeID:"TouchableBounce",children:(0,_jsxRuntime.jsx)(Text,{children:"TouchableBounce"})}),(0,_jsxRuntime.jsx)(TouchableHighlight,{nativeID:"TouchableHighlight",children:(0,_jsxRuntime.jsx)(Text,{children:"TouchableHighlight"})}),(0,_jsxRuntime.jsx)(TouchableOpacity,{nativeID:"TouchableOpacity",children:(0,_jsxRuntime.jsx)(Text,{children:"TouchableOpacity"})}),(0,_jsxRuntime.jsx)(TouchableWithoutFeedback,{nativeID:"TouchableWithoutFeedback",children:(0,_jsxRuntime.jsx)(View,{children:(0,_jsxRuntime.jsx)(Text,{children:"TouchableWithoutFeedback"})})}),(0,_jsxRuntime.jsx)(View,{nativeID:"View"})]});}}]);return NativeIdTestApp;}(React.Component);var styles=StyleSheet.create({base:{width:150,height:50}});module.exports={NativeIdTestApp:NativeIdTestApp};