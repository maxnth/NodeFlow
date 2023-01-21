import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnProcessNode = new NodeBuilder('OcrdCorAsvAnnProcess')
  .setName('ocrd-cor-asv-ann-process')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('fast_mode', 'CheckboxOption', false)
  .addOption('fixed_beam_width', 'IntegerOption', 15)
  .addOption('model_file', 'TextOption', 'undefined')
  .addOption('rejection_threshold', 'NumberOption', 0.5)
  .addOption('relative_beam_width', 'NumberOption', 0.2)
  .addOption('textequiv_level', 'SelectOption', 'glyph', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .build();
