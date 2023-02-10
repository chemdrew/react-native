'use strict';var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/Text/__tests__/Text-test.js";var render=require('../../../jest/renderer');var React=require('../React');var Text=require('../Text');jest.unmock('../Text');jest.unmock('../TextNativeComponent');describe('Text',function(){it('default render',function(){var instance=render.create((0,_jsxRuntime.jsx)(Text,{}));expect(instance.toJSON()).toMatchInlineSnapshot("\n      <RCTText\n        accessible={true}\n        allowFontScaling={true}\n        ellipsizeMode=\"tail\"\n        isHighlighted={false}\n        selectionColor={null}\n      />\n    ");});it('has displayName',function(){expect(Text.displayName).toEqual('Text');});});describe('Text compat with web',function(){it('renders core props',function(){var props={id:'id',tabIndex:0,testID:'testID'};var instance=render.create((0,_jsxRuntime.jsx)(Text,Object.assign({},props)));expect(instance.toJSON()).toMatchInlineSnapshot("\n      <RCTText\n        accessible={true}\n        allowFontScaling={true}\n        ellipsizeMode=\"tail\"\n        isHighlighted={false}\n        nativeID=\"id\"\n        selectionColor={null}\n        tabIndex={0}\n        testID=\"testID\"\n      />\n    ");});it('renders "aria-*" props',function(){var props={'aria-activedescendant':'activedescendant','aria-atomic':true,'aria-autocomplete':'list','aria-busy':true,'aria-checked':true,'aria-columncount':5,'aria-columnindex':3,'aria-columnspan':2,'aria-controls':'controls','aria-current':'current','aria-describedby':'describedby','aria-details':'details','aria-disabled':true,'aria-errormessage':'errormessage','aria-expanded':true,'aria-flowto':'flowto','aria-haspopup':true,'aria-hidden':true,'aria-invalid':true,'aria-keyshortcuts':'Cmd+S','aria-label':'label','aria-labelledby':'labelledby','aria-level':3,'aria-live':'polite','aria-modal':true,'aria-multiline':true,'aria-multiselectable':true,'aria-orientation':'portrait','aria-owns':'owns','aria-placeholder':'placeholder','aria-posinset':5,'aria-pressed':true,'aria-readonly':true,'aria-required':true,role:'main','aria-roledescription':'roledescription','aria-rowcount':5,'aria-rowindex':3,'aria-rowspan':3,'aria-selected':true,'aria-setsize':5,'aria-sort':'ascending','aria-valuemax':5,'aria-valuemin':0,'aria-valuenow':3,'aria-valuetext':'3'};var instance=render.create((0,_jsxRuntime.jsx)(Text,Object.assign({},props)));expect(instance.toJSON()).toMatchInlineSnapshot("\n      <RCTText\n        accessibilityLabel=\"label\"\n        accessibilityState={\n          Object {\n            \"busy\": true,\n            \"checked\": true,\n            \"disabled\": true,\n            \"expanded\": true,\n            \"selected\": true,\n          }\n        }\n        accessible={true}\n        allowFontScaling={true}\n        aria-activedescendant=\"activedescendant\"\n        aria-atomic={true}\n        aria-autocomplete=\"list\"\n        aria-columncount={5}\n        aria-columnindex={3}\n        aria-columnspan={2}\n        aria-controls=\"controls\"\n        aria-current=\"current\"\n        aria-describedby=\"describedby\"\n        aria-details=\"details\"\n        aria-errormessage=\"errormessage\"\n        aria-flowto=\"flowto\"\n        aria-haspopup={true}\n        aria-hidden={true}\n        aria-invalid={true}\n        aria-keyshortcuts=\"Cmd+S\"\n        aria-labelledby=\"labelledby\"\n        aria-level={3}\n        aria-live=\"polite\"\n        aria-modal={true}\n        aria-multiline={true}\n        aria-multiselectable={true}\n        aria-orientation=\"portrait\"\n        aria-owns=\"owns\"\n        aria-placeholder=\"placeholder\"\n        aria-posinset={5}\n        aria-pressed={true}\n        aria-readonly={true}\n        aria-required={true}\n        aria-roledescription=\"roledescription\"\n        aria-rowcount={5}\n        aria-rowindex={3}\n        aria-rowspan={3}\n        aria-setsize={5}\n        aria-sort=\"ascending\"\n        aria-valuemax={5}\n        aria-valuemin={0}\n        aria-valuenow={3}\n        aria-valuetext=\"3\"\n        disabled={true}\n        ellipsizeMode=\"tail\"\n        isHighlighted={false}\n        selectionColor={null}\n      />\n    ");});it('renders styles',function(){var style={display:'flex',flex:1,backgroundColor:'white',marginInlineStart:10,userSelect:'none',verticalAlign:'middle'};var instance=render.create((0,_jsxRuntime.jsx)(Text,{style:style}));expect(instance.toJSON()).toMatchInlineSnapshot("\n      <RCTText\n        accessible={true}\n        allowFontScaling={true}\n        ellipsizeMode=\"tail\"\n        isHighlighted={false}\n        selectable={false}\n        selectionColor={null}\n        style={\n          Object {\n            \"backgroundColor\": \"white\",\n            \"display\": \"flex\",\n            \"flex\": 1,\n            \"marginInlineStart\": 10,\n            \"textAlignVertical\": \"center\",\n          }\n        }\n      />\n    ");});});