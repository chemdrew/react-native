var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _TextInput=_interopRequireDefault(require("../../Components/TextInput/TextInput"));var _TouchableWithoutFeedback=_interopRequireDefault(require("../../Components/Touchable/TouchableWithoutFeedback"));var _View=_interopRequireDefault(require("../../Components/View/View"));var _Text=_interopRequireDefault(require("../../Text/Text"));var _ReactNativeTestTools=require("../ReactNativeTestTools");var React=_interopRequireWildcard(require("react"));var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/Utilities/__tests__/ReactNativeTestTools-test.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ReactTestRenderer=require('react-test-renderer');describe('ReactNativeTestTools',function(){var ExampleNull=function ExampleNull(){return null;};it('matches byTestID()',function(){var renderSimple=ReactTestRenderer.create((0,_jsxRuntime.jsx)(ExampleNull,{testID:"foo"}));var foo=renderSimple.root.find((0,_ReactNativeTestTools.byTestID)('foo'));expect(foo).toEqual(renderSimple.root);var renderNested=ReactTestRenderer.create((0,_jsxRuntime.jsxs)(_View.default,{testID:"bar",children:[(0,_jsxRuntime.jsx)(_View.default,{testID:"baz"}),(0,_jsxRuntime.jsx)(ExampleNull,{testID:"bing",children:(0,_jsxRuntime.jsx)(_View.default,{testID:"impossible"})})]}));var bar=renderNested.root.find((0,_ReactNativeTestTools.byTestID)('bar'));var baz=renderNested.root.find((0,_ReactNativeTestTools.byTestID)('baz'));var bing=renderNested.root.find((0,_ReactNativeTestTools.byTestID)('bing'));expect(bar).toEqual(renderNested.root);expect(baz.type).toEqual(_View.default);expect(bing.type).toEqual(ExampleNull);expect(renderNested.root.findAll((0,_ReactNativeTestTools.byTestID)('impossible'))).toHaveLength(0);});it('matches byTextMatching()',function(){var hasFooText=(0,_ReactNativeTestTools.byTextMatching)(/foo/);var hasBarText=(0,_ReactNativeTestTools.byTextMatching)(/bar/);var renderSimple=ReactTestRenderer.create((0,_jsxRuntime.jsx)(_Text.default,{children:"foobarbaz"}));var foo=renderSimple.root.find(hasFooText);expect(foo).toEqual(renderSimple.root);expect(foo.type).toEqual(_Text.default);expect(foo.props.children).toEqual('foobarbaz');var renderNested=ReactTestRenderer.create((0,_jsxRuntime.jsxs)(_Text.default,{children:["foozy",(0,_jsxRuntime.jsx)(_Text.default,{children:"woobar"}),"fobarof",(0,_jsxRuntime.jsx)(_Text.default,{children:"barwoo"}),"woofoo"]}));var bar=renderNested.root.find(hasBarText);var barAll=renderNested.root.findAll(hasBarText);var barAllShallow=renderNested.root.findAll(hasBarText,{deep:false});expect(bar.props.children.toString()).toEqual('foozy,[object Object],fobarof,[object Object],woofoo');expect(barAll).toHaveLength(6);expect(barAllShallow).toHaveLength(1);});it('interacts via tap()',function(){var touchFn=jest.fn();var renderTouch=ReactTestRenderer.create((0,_jsxRuntime.jsx)(_TouchableWithoutFeedback.default,{onPress:touchFn,children:(0,_jsxRuntime.jsx)(ExampleNull,{})}));(0,_ReactNativeTestTools.tap)(renderTouch.root);expect(touchFn).toBeCalled();var textFn=jest.fn();var renderText=ReactTestRenderer.create((0,_jsxRuntime.jsx)(_Text.default,{onPress:textFn}));(0,_ReactNativeTestTools.tap)(renderText.root);expect(textFn).toBeCalled();});it('interacts via enter()',function(){var changeFn=jest.fn();var changeTextFn=jest.fn();var renderInput=ReactTestRenderer.create((0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(_TextInput.default,{onChange:changeFn,onChangeText:changeTextFn})}));var text='test message text';(0,_ReactNativeTestTools.enter)(renderInput.root,text);expect(changeFn).toBeCalled();expect(changeTextFn).toBeCalledWith(text);});});