import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrDeskewNode = new NodeBuilder('OcrdAnybaseocrDeskew')
  .setName('ocrd-anybaseocr-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bignore', 'NumberOption', 0.1)
  .addOption('debug', 'IntegerOption', 0)
  .addOption('escale', 'NumberOption', 1.0)
  .addOption('hi', 'IntegerOption', 90)
  .addOption('lo', 'IntegerOption', 5)
  .addOption('maxskew', 'NumberOption', 1.0)
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('parallel', 'IntegerOption', 0)
  .addOption('skewsteps', 'IntegerOption', 8)
  .addOption('threshold', 'NumberOption', 0.5)
  .build();
