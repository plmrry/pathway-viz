/* jslint esversion: 6 */

var pdc = require('pdc');
var fs = require('fs');
var Rx = require('rx');

var stream = Rx.Observable;

var parse = stream.fromNodeCallback(pdc);
var write = stream.fromNodeCallback(fs.writeFile);

// parse('', 'markdown', 'latex', [ '--version' ]);

// const options = [
//   '--wrap=preserve'
// ];
//
// stream.fromNodeCallback(fs.readFile)('source/body_text.md')
//   .map(b => b.toString())
//   .flatMap(string => parse(string, 'markdown', 'latex', options))
//   .flatMap(latex => write('latex/body_text.tex', latex))
//   .subscribe(() => console.log("Done"));


// const options = [
//   '--wrap=preserve',
//   '--template=template.tex'
// ];
//
// stream.fromNodeCallback(fs.readFile)('source/test.md')
//   .map(b => b.toString())
//   .flatMap(string => parse(string, 'markdown', 'latex', options))
//   .flatMap(latex => write('latex/test.tex', latex))
//   .subscribe(() => console.log("Done"));
