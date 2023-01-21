import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyRecognizeNode = new NodeBuilder(
  'OcrdCisOcropyRecognize'
)
  .setName('ocrd-cis-ocropy-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'TextOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'line', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .build();
