/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

import { expect } from "chai";
import { parse } from  "../lib";

describe('Unit To Test', () => {

  const exampleLog = ['%cExample %coutput with %c%s', 'color: red', 'color: green', 'color: blue', 'colors!'];

  it('parses colors', () => {
    expect(parse(exampleLog)).to.eql([
      { content: 'Example ', color: 'red' },
      { content: 'output with ', color: 'green' },
      { content: 'colors!', color: 'blue' }
    ]);
  });

});
