'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _AnimatedImplementation=_interopRequireDefault(require("../AnimatedImplementation"));var _AnimatedMock=_interopRequireDefault(require("../AnimatedMock"));describe('Animated Mock',function(){it('matches implementation keys',function(){expect(Object.keys(_AnimatedMock.default)).toEqual(Object.keys(_AnimatedImplementation.default));});it('matches implementation params',function(done){Object.keys(_AnimatedImplementation.default).forEach(function(key){if(_AnimatedImplementation.default[key].length!==_AnimatedMock.default[key].length){done(new Error('key '+key+' had different lengths: '+JSON.stringify({impl:{len:_AnimatedImplementation.default[key].length,type:typeof _AnimatedImplementation.default[key],val:_AnimatedImplementation.default[key].toString()},mock:{len:_AnimatedMock.default[key].length,type:typeof _AnimatedMock.default[key],val:_AnimatedMock.default[key].toString()}},null,2)));}});done();});});