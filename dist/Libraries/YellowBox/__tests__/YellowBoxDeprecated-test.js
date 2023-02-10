'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _LogBox=_interopRequireDefault(require("../../LogBox/LogBox"));var YellowBox=require('../YellowBoxDeprecated');describe('YellowBox',function(){beforeEach(function(){jest.restoreAllMocks();});it('calling ignoreWarnings proxies to LogBox.ignoreLogs',function(){jest.spyOn(_LogBox.default,'ignoreLogs');var consoleWarn=jest.spyOn(console,'warn').mockImplementation(function(){});YellowBox.ignoreWarnings(['foo']);expect(_LogBox.default.ignoreLogs).toBeCalledWith(['foo']);expect(consoleWarn).toBeCalledWith('YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.');});it('calling install proxies to LogBox.install',function(){jest.spyOn(_LogBox.default,'install');var consoleWarn=jest.spyOn(console,'warn').mockImplementation(function(){});YellowBox.install();expect(_LogBox.default.install).toBeCalled();expect(consoleWarn).toBeCalledWith('YellowBox has been replaced with LogBox. Please call LogBox.install() instead.');});it('calling uninstall proxies to LogBox.uninstall',function(){jest.spyOn(_LogBox.default,'uninstall');var consoleWarn=jest.spyOn(console,'warn').mockImplementation(function(){});YellowBox.uninstall();expect(_LogBox.default.uninstall).toBeCalled();expect(consoleWarn).toBeCalledWith('YellowBox has been replaced with LogBox. Please call LogBox.uninstall() instead.');});});