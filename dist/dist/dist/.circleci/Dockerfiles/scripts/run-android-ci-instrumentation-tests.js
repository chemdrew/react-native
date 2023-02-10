'use strict';var argv=require('yargs').argv;var async=require('async');var child_process=require('child_process');var fs=require('fs');var path=require('path');var colors={GREEN:'\x1b[32m',RED:'\x1b[31m',RESET:'\x1b[0m'};var test_opts={FILTER:new RegExp(argv.filter||'.*','i'),IGNORE:argv.ignore||null,PACKAGE:argv.package||'com.facebook.react.tests',PATH:argv.path||'./ReactAndroid/src/androidTest/java/com/facebook/react/tests',RETRIES:parseInt(argv.retries||2,10),TEST_TIMEOUT:parseInt(argv['test-timeout']||1000*60*10,10),OFFSET:argv.offset,COUNT:argv.count};var max_test_class_length=Number.NEGATIVE_INFINITY;var testClasses=fs.readdirSync(path.resolve(process.cwd(),test_opts.PATH)).filter(function(file){return file.endsWith('.java');}).map(function(clazz){return path.basename(clazz,'.java');});if(test_opts.IGNORE){test_opts.IGNORE=new RegExp(test_opts.IGNORE,'i');testClasses=testClasses.filter(function(className){return!test_opts.IGNORE.test(className);});}testClasses=testClasses.map(function(clazz){return test_opts.PACKAGE+'.'+clazz;}).filter(function(clazz){return test_opts.FILTER.test(clazz);});if(test_opts.COUNT!=null&&test_opts.OFFSET!=null){var start=test_opts.COUNT*test_opts.OFFSET;var end=start+test_opts.COUNT;if(start>=testClasses.length){testClasses=[];}else if(end>=testClasses.length){testClasses=testClasses.slice(start);}else{testClasses=testClasses.slice(start,end);}}async.mapSeries(testClasses,function(clazz,callback){if(clazz.length>max_test_class_length){max_test_class_length=clazz.length;}return async.retry(test_opts.RETRIES,function(retryCb){var test_process=child_process.spawn('./.circleci/Dockerfiles/scripts/run-instrumentation-tests-via-adb-shell.sh',[test_opts.PACKAGE,clazz],{stdio:'inherit'});var timeout=setTimeout(function(){test_process.kill();},test_opts.TEST_TIMEOUT);test_process.on('error',function(err){clearTimeout(timeout);retryCb(err);});test_process.on('exit',function(code){clearTimeout(timeout);if(code!==0){return retryCb(new Error("Process exited with code: "+code));}return retryCb();});},function(err){return callback(null,{name:clazz,status:err?'failure':'success'});});},function(err,results){print_test_suite_results(results);var failures=results.filter(function(test){return test.status==='failure';});return failures.length===0?process.exit(0):process.exit(1);});function print_test_suite_results(results){console.log('\n\nTest Suite Results:\n');var color;var failing_suites=0;var passing_suites=0;function pad_output(num_chars){var i=0;while(i<num_chars){process.stdout.write(' ');i++;}}results.forEach(function(test){if(test.status==='success'){color=colors.GREEN;passing_suites++;}else if(test.status==='failure'){color=colors.RED;failing_suites++;}process.stdout.write(color);process.stdout.write(test.name);pad_output(max_test_class_length-test.name.length+8);process.stdout.write(test.status);process.stdout.write(colors.RESET+"\n");});console.log("\n"+passing_suites+" passing, "+failing_suites+" failing!");}