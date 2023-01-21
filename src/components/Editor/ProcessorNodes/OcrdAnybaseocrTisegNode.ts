import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrTisegNode = new NodeBuilder('OcrdAnybaseocrTiseg')
  .setName('ocrd-anybaseocr-tiseg')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('seg_weights', 'TextOption', 'seg_model')
  .addOption('use_deeplr', 'CheckboxOption', true)
  .build();
