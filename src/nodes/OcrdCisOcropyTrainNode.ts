import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyTrainNode = new NodeBuilder('OcrdCisOcropyTrain')
  .setName('ocrd-cis-ocropy-train')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption('ntrain', 'IntegerOption', 1000000)
  .addOption('outputpath', 'InputOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'line', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'train model with ground truth from mets data' }),
    'SidebarDescriptionOption'
  )
  .build();
