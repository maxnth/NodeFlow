import { NodeBuilder } from '@baklavajs/core';

export const OcrdKeraslmRateNode = new NodeBuilder('OcrdKeraslmRate')
  .setName('ocrd-keraslm-rate')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('alternative_decoding', 'CheckboxOption', true)
  .addOption('beam_width', 'IntegerOption', 10)
  .addOption('lm_weight', 'NumberOption', 0.5)
  .addOption('model_file', 'TextOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'glyph', undefined, {
    items: ['region', 'line', 'word', 'glyph'],
  })
  .build();
