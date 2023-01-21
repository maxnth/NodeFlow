import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyTrainNode = new NodeBuilder('OcrdCisOcropyTrain')
  .setName('ocrd-cis-ocropy-train')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'TextOption', 'undefined')
  .addOption('ntrain', 'IntegerOption', 1000000)
  .addOption('outputpath', 'TextOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'line', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .build();
