'use strict';var getPolyfills=require('./rn-get-polyfills');module.exports={resolver:{blockList:[/buck-out/,/sdks\/hermes/],extraNodeModules:{'react-native':__dirname}},serializer:{getPolyfills:getPolyfills}};