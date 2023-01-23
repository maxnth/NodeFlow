import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenRecognizeNode = new NodeBuilder('OcrdKrakenRecognize')
  .setName('ocrd-kraken-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bidi_reordering', 'CheckboxOption', true)
  .addOption('device', 'InputOption', 'cpu')
  .addOption('model', 'InputOption', 'en_best.mlmodel')
  .addOption('pad', 'IntegerOption', 16)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'OCR with kraken' }),
    'SidebarDescriptionOption'
  )
  .build();
