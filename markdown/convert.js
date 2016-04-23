/* jslint esversion: 6 */

var pdc = require('pdc');
var fs = require('fs');
var Rx = require('rx');

var stream = Rx.Observable;

var parse = stream.fromNodeCallback(pdc);
var write = stream.fromNodeCallback(fs.writeFile);

const options = [
  '--wrap=preserve',
  '--template=template.tex'
];

stream.fromNodeCallback(fs.readFile)('source/test.md')
  .map(b => b.toString())
  .flatMap(string => parse(string, 'markdown', 'latex', options))
  .flatMap(latex => write('latex/test.tex', latex))
  .subscribe(() => console.log("Done"));
