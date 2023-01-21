import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenRecognizeNode = new NodeBuilder('OcrdKrakenRecognize')
  .setName('ocrd-kraken-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bidi_reordering', 'CheckboxOption', true)
  .addOption('device', 'TextOption', 'cpu')
  .addOption('model', 'TextOption', 'en_best.mlmodel')
  .addOption('pad', 'IntegerOption', 16)
  .build();
