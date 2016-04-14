/* jslint esversion: 6 */

var pdc = require('pdc');
var fs = require('fs');
var Rx = require('rx');

var stream = Rx.Observable;

var parse = stream.fromNodeCallback(pdc);
var write = stream.fromNodeCallback(fs.writeFile);

stream.fromNodeCallback(fs.readFile)('source/paper.md')
  .map(b => b.toString())
  .flatMap(string => parse(string, 'markdown', 'latex', [ '--wrap=preserve' ]))
  .flatMap(latex => write('build/output.tex', latex))
  .subscribe(() => console.log("Done"));
