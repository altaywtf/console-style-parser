/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="index.ref.d.ts" />

function parse (log: string[]): any[] {

  const text: string[] = log[0].split(/(?=%c)/g);
  const parameters: any[] = log.slice(1);

  const styles: string[] = parameters.filter(p => typeof p == 'string' && p.startsWith('color: '));
  const params: string[] = parameters.filter(p => typeof p == 'string' && !p.startsWith('color: '));

  let count: ICount = {
    styles: 0,
    params: 0
  }

  let output: any[] = [];

  text.map((t, i) => {

    if (t.startsWith('%c')) {
      t = t.replace('%c', '');

      if (t.includes('%s')) {
        let temp: string[] = t.split(/(?=%s)/g);

        temp.forEach((item, index) => {
          if (item.includes('%s')) {
            temp[index] = temp[index].replace('%s', params[count.params]);
            count.params++;
          }
        });

        t = temp.join('');
      }

      output.push({ content: t, color: styles[count.styles].replace('color: ', '') });
      count.styles++;
    } else {
      if (t.includes('%s')) {
        let temp: string[] = t.split(/(?=%s)/g);

        temp.forEach((item, index) => {
          if (item.includes('%s')) {
            temp[index] = temp[index].replace('%s', params[count.params]);
            count.params++;
          }
        });

        t = temp.join('');
      }

      output.push({ content: t });
    }
  });

  return output;
}

export { parse };