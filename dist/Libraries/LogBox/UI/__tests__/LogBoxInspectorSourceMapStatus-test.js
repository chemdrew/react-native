'use strict';var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/LogBox/UI/__tests__/LogBoxInspectorSourceMapStatus-test.js";var render=require('../../../../jest/renderer');var LogBoxInspectorSourceMapStatus=require('../LogBoxInspectorSourceMapStatus').default;var React=require('react');describe('LogBoxInspectorSourceMapStatus',function(){it('should render for failed',function(){var output=render.shallowRender((0,_jsxRuntime.jsx)(LogBoxInspectorSourceMapStatus,{onPress:function onPress(){},status:"FAILED"}));expect(output).toMatchSnapshot();});it('should render for pending',function(){var output=render.shallowRender((0,_jsxRuntime.jsx)(LogBoxInspectorSourceMapStatus,{onPress:function onPress(){},status:"PENDING"}));expect(output).toMatchSnapshot();});it('should render null for complete',function(){var output=render.shallowRender((0,_jsxRuntime.jsx)(LogBoxInspectorSourceMapStatus,{onPress:function onPress(){},status:"COMPLETE"}));expect(output).toMatchSnapshot();});});