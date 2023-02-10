'use strict';var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="/Users/apratt/dev/tmp/react-native/Libraries/Components/StatusBar/__tests__/StatusBar-test.js";var StatusBar=require('../StatusBar');var React=require('react');var ReactTestRenderer=require('react-test-renderer');describe('StatusBar',function(){it('renders the statusbar',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{}));expect(component).not.toBeNull();});it('renders the statusbar animated enabled',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{animated:true}));expect(component.toTree().props.animated).toBe(true);});it('renders the statusbar with fade transition on hide',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{hidden:true}));expect(component.toTree().props.hidden).toBe(true);});it('renders the statusbar with a background color',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{backgroundColor:'#fff'}));expect(component.toTree().props.backgroundColor).toBe('#fff');expect(component.toTree().type._defaultProps.backgroundColor.animated).toBe(false);});it('renders the statusbar with default barStyle',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{}));StatusBar.setBarStyle('default');expect(component.toTree().type._defaultProps.barStyle.value).toBe('default');expect(component.toTree().type._defaultProps.barStyle.animated).toBe(false);});it('renders the statusbar but should not be visible',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{hidden:true}));expect(component.toTree().props.hidden).toBe(true);expect(component.toTree().type._defaultProps.hidden.animated).toBe(false);expect(component.toTree().type._defaultProps.hidden.transition).toBe('fade');});it('renders the statusbar with networkActivityIndicatorVisible true',function(){var component=ReactTestRenderer.create((0,_jsxRuntime.jsx)(StatusBar,{networkActivityIndicatorVisible:true}));expect(component.toTree().props.networkActivityIndicatorVisible).toBe(true);});});