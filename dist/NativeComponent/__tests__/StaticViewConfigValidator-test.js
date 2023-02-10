var StaticViewConfigValidator=_interopRequireWildcard(require("../StaticViewConfigValidator"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}test('passes for identical configs',function(){var name='RCTView';var nativeViewConfig={bubblingEventTypes:{topBlur:{phasedRegistrationNames:{bubbled:'onBlur',captured:'onBlurCapture'}},topFocus:{phasedRegistrationNames:{bubbled:'onFocus',captured:'onFocusCapture'}}},directEventTypes:{topLayout:{registrationName:'onLayout'}},uiViewClassName:'RCTView',validAttributes:{collapsable:true,nativeID:true,style:{height:true,width:true}}};var staticViewConfig={bubblingEventTypes:{topBlur:{phasedRegistrationNames:{bubbled:'onBlur',captured:'onBlurCapture'}},topFocus:{phasedRegistrationNames:{bubbled:'onFocus',captured:'onFocusCapture'}}},directEventTypes:{topLayout:{registrationName:'onLayout'}},uiViewClassName:'RCTView',validAttributes:{collapsable:true,nativeID:true,style:{height:true,width:true}}};var validationResult=StaticViewConfigValidator.validate(name,nativeViewConfig,staticViewConfig);expect(validationResult.type).toBe('valid');});test('fails for mismatched names',function(){var name='RCTView';var nativeViewConfig={uiViewClassName:'RCTView',validAttributes:{style:{}}};var staticViewConfig={uiViewClassName:'RCTImage',validAttributes:{style:{}}};expectSVCToNotMatchNVC(name,nativeViewConfig,staticViewConfig,"\nStaticViewConfigValidator: Invalid static view config for 'RCTView'.\n\n- 'uiViewClassName' is the wrong value.\n".trimStart());});test('fails for unequal attributes',function(){var name='RCTView';var nativeViewConfig={uiViewClassName:'RCTView',validAttributes:{nativeID:true,style:{}}};var staticViewConfig={uiViewClassName:'RCTView',validAttributes:{nativeID:{},style:{}}};expectSVCToNotMatchNVC(name,nativeViewConfig,staticViewConfig,"\nStaticViewConfigValidator: Invalid static view config for 'RCTView'.\n\n- 'validAttributes.nativeID' is the wrong value.\n".trimStart());});test('fails for missing attributes',function(){var name='RCTView';var nativeViewConfig={uiViewClassName:'RCTView',validAttributes:{collapsable:true,nativeID:true,style:{height:true,width:true}}};var staticViewConfig={uiViewClassName:'RCTView',validAttributes:{style:{}}};expectSVCToNotMatchNVC(name,nativeViewConfig,staticViewConfig,"\nStaticViewConfigValidator: Invalid static view config for 'RCTView'.\n\n- 'validAttributes.collapsable' is missing.\n- 'validAttributes.nativeID' is missing.\n- 'validAttributes.style.height' is missing.\n- 'validAttributes.style.width' is missing.\n".trimStart());});test('fails for unexpected attributes',function(){var name='RCTView';var nativeViewConfig={uiViewClassName:'RCTView',validAttributes:{style:{}}};var staticViewConfig={uiViewClassName:'RCTView',validAttributes:{collapsable:true,nativeID:true,style:{height:true,width:true}}};expectSVCToNotMatchNVC(name,nativeViewConfig,staticViewConfig,"\nStaticViewConfigValidator: Invalid static view config for 'RCTView'.\n\n- 'validAttributes.style.height' is present but not expected to be.\n- 'validAttributes.style.width' is present but not expected to be.\n- 'validAttributes.collapsable' is present but not expected to be.\n- 'validAttributes.nativeID' is present but not expected to be.\n".trimStart());});function expectSVCToNotMatchNVC(name,nativeViewConfig,staticViewConfig,message){var validationResult=StaticViewConfigValidator.validate(name,nativeViewConfig,staticViewConfig);expect(validationResult.type).toBe('invalid');if(validationResult.type==='invalid'){expect(StaticViewConfigValidator.stringifyValidationResult(name,validationResult)).toBe(message);}}