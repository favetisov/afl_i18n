import { strings } from '@angular-devkit/core';

import { parseName } from '@schematics/angular/utility/parse-name';

import {
  Rule,
  move,
  template,
  mergeWith,
  apply,
  branchAndMerge,
  chain,
  url
} from '@angular-devkit/schematics';

export default function(options: any): Rule {
  return (host, context) => {

    const parsedPath = parseName('src/app/pages/', options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      template({...strings, ...options}),
      move(options.path)
    ]);

    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ])(host, context);
  }
}