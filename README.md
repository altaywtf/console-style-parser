# Console Style Parser

[![Build Status](https://travis-ci.org/altayaydemir/console-style-parser.svg?branch=master)](https://travis-ci.org/altayaydemir/console-style-parser)
[![npm](https://img.shields.io/npm/dt/console-style-parser.svg?maxAge=2592000)](https://www.npmjs.com/package/console-style-parser)
[![npm](https://img.shields.io/npm/l/console-style-parser.svg?maxAge=2592000)](https://github.com/altayaydemir/console-style-parser/blob/master/LICENSE)

A simple module for parsing console.log colors to an array of objects.

## Installation
``` bash
npm install console-style-parser --save
```

## Usage
```js

const CSP = require('console-style-parser');

const egLog = ['%cExample %coutput with %c%s', 'color: red', 'color: green', 'color: blue', 'colors!'];
const parsedLog = CSP.parse(egLog);

/*
 [ 
	{ content: 'Example ', color: 'red' },
  	{ content: 'output with ', color: 'green' },
  	{ content: 'colors!', color: 'blue' } 
  ]
 */

```
