'use strict';var base64=require('base64-js');var _require=require('util'),TextDecoder=_require.TextDecoder,TextEncoder=_require.TextEncoder;describe('binaryToBase64',function(){var binaryToBase64=require('../binaryToBase64');it('should encode a Uint8Array',function(){var input=new TextEncoder().encode('Test string');expect(base64ToString(binaryToBase64(input))).toEqual('Test string');});it('should encode an ArrayBuffer',function(){var input=new TextEncoder().encode('Test string').buffer;expect(base64ToString(binaryToBase64(input))).toEqual('Test string');});it('should encode a DataView',function(){var input=new DataView(new TextEncoder().encode('Test string').buffer);expect(base64ToString(binaryToBase64(input))).toEqual('Test string');});it('should not encode a non ArrayBuffer or non typed array',function(){var input=['i','n','v','a','l','i','d'];expect(function(){return binaryToBase64(input);}).toThrowError();});});function base64ToString(base64String){var byteArray=base64.toByteArray(base64String);return new TextDecoder().decode(byteArray);}