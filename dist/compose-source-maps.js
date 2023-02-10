#!/usr/bin/env node
'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _require=require('metro-source-map'),composeSourceMaps=_require.composeSourceMaps;var fs=require('fs');var argv=process.argv.slice(2);var outputPath;for(var i=0;i<argv.length;){if(argv[i]==='-o'){outputPath=argv[i+1];argv.splice(i,2);continue;}++i;}if(!argv.length){process.stderr.write('Usage: node compose-source-maps.js <packager_sourcemap> <compiler_sourcemap> [-o output_file]\n');process.exitCode=-1;}else{var _argv$splice=argv.splice(0,2),_argv$splice2=(0,_slicedToArray2.default)(_argv$splice,2),packagerSourcemapPath=_argv$splice2[0],compilerSourcemapPath=_argv$splice2[1];var packagerSourcemap=JSON.parse(fs.readFileSync(packagerSourcemapPath,'utf8'));var compilerSourcemap=JSON.parse(fs.readFileSync(compilerSourcemapPath,'utf8'));if(packagerSourcemap.x_facebook_offsets!=null||compilerSourcemap.x_facebook_offsets!=null){throw new Error('Random Access Bundle (RAM) format is not supported by this tool; '+'it cannot process the `x_facebook_offsets` field provided '+'in the base and/or target source map(s)');}if(compilerSourcemap.x_facebook_segments!=null){throw new Error('This tool cannot process the `x_facebook_segments` field provided '+'in the target source map.');}var composedMapJSON=JSON.stringify(composeSourceMaps([packagerSourcemap,compilerSourcemap]));if(outputPath){fs.writeFileSync(outputPath,composedMapJSON,'utf8');}else{process.stdout.write();}}