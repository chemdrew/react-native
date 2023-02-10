var deepFreezeAndThrowOnMutationInDev=require('../deepFreezeAndThrowOnMutationInDev');describe('deepFreezeAndThrowOnMutationInDev',function(){it('should be a noop on non object values',function(){__DEV__=true;expect(function(){return deepFreezeAndThrowOnMutationInDev('');}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(null);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(false);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(5);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev();}).not.toThrow();__DEV__=false;expect(function(){return deepFreezeAndThrowOnMutationInDev('');}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(null);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(false);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev(5);}).not.toThrow();expect(function(){return deepFreezeAndThrowOnMutationInDev();}).not.toThrow();});it('should not throw on object without prototype',function(){__DEV__=true;var o=Object.create(null);o.key='Value';expect(function(){return deepFreezeAndThrowOnMutationInDev(o);}).not.toThrow();});it('should throw on mutation in dev with strict',function(){'use strict';__DEV__=true;var o={key:'oldValue'};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key='newValue';}).toThrowError('You attempted to set the key `key` with the value `"newValue"` '+'on an object that is meant to be immutable and has been frozen.');expect(o.key).toBe('oldValue');});it('should throw on mutation in dev without strict',function(){__DEV__=true;var o={key:'oldValue'};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key='newValue';}).toThrowError('You attempted to set the key `key` with the value `"newValue"` '+'on an object that is meant to be immutable and has been frozen.');expect(o.key).toBe('oldValue');});it('should throw on nested mutation in dev with strict',function(){'use strict';__DEV__=true;var o={key1:{key2:{key3:'oldValue'}}};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key1.key2.key3='newValue';}).toThrowError('You attempted to set the key `key3` with the value `"newValue"` '+'on an object that is meant to be immutable and has been frozen.');expect(o.key1.key2.key3).toBe('oldValue');});it('should throw on nested mutation in dev without strict',function(){__DEV__=true;var o={key1:{key2:{key3:'oldValue'}}};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key1.key2.key3='newValue';}).toThrowError('You attempted to set the key `key3` with the value `"newValue"` '+'on an object that is meant to be immutable and has been frozen.');expect(o.key1.key2.key3).toBe('oldValue');});it('should throw on insertion in dev with strict',function(){'use strict';__DEV__=true;var o={oldKey:'value'};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.newKey='value';}).toThrowError(/(Cannot|Can't) add property newKey, object is not extensible/);expect(o.newKey).toBe(undefined);});it('should not throw on insertion in dev without strict',function(){__DEV__=true;var o={oldKey:'value'};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.newKey='value';}).not.toThrow();expect(o.newKey).toBe(undefined);});it('should mutate and not throw on mutation in prod',function(){'use strict';__DEV__=false;var o={key:'oldValue'};deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key='newValue';}).not.toThrow();expect(o.key).toBe('newValue');});it('should not deep freeze already frozen objects',function(){'use strict';__DEV__=true;var o={key1:{key2:'oldValue'}};Object.freeze(o);deepFreezeAndThrowOnMutationInDev(o);expect(function(){o.key1.key2='newValue';}).not.toThrow();expect(o.key1.key2).toBe('newValue');});it("shouldn't recurse infinitely",function(){__DEV__=true;var o={};o.circular=o;deepFreezeAndThrowOnMutationInDev(o);});});