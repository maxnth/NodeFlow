import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyRecognizeNode = new NodeBuilder(
  'OcrdCisOcropyRecognize'
)
  .setName('ocrd-cis-ocropy-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'line', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Recognize text in (binarized+deskewed+dewarped) lines with ocropy',
    }),
    'SidebarDescriptionOption'
  )
  .build();
