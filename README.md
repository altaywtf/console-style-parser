# Console Style Parser
A simple node module for parsing console.log colors to an array of objects.

## Installation
``` bash
npm install console-style-parser --save
```

## Usage
```js

const CSP = require('console-style-parser');

const exampleLog = ['%cExample %coutput with %c%s', 'color: red', 'color: green', 'color: blue', 'colors!'];
const parsedLog = CSP.parse(exampleLog);

/*
 [ 
	{ content: 'Example ', color: 'red' },
  	{ content: 'output with ', color: 'green' },
  	{ content: 'colors!', color: 'blue' } 
  ]
 */

```

## Todo
- [ ] Parse all kind of styles.