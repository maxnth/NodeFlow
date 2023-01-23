import { NodeBuilder } from '@baklavajs/core';

export const OcrdSbbBinarizeNode = new NodeBuilder('OcrdSbbBinarize')
  .setName('ocrd-sbb-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Pixelwise binarization with selectional auto-encoders in Keras',
    }),
    'SidebarDescriptionOption'
  )
  .build();
