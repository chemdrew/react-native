'use strict';function getCodegen(){var RNCodegen;try{RNCodegen=require('../../packages/react-native-codegen/lib/generators/RNCodegen.js');}catch(e){RNCodegen=require('@react-native/codegen/lib/generators/RNCodegen.js');}if(!RNCodegen){throw'RNCodegen not found.';}return RNCodegen;}module.exports={getCodegen:getCodegen};