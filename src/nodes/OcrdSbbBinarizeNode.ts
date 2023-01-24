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
      parameter_descriptions: {
        model:
          'Directory containing HDF5 or SavedModel/ProtoBuf models. Can be an absolute path or a path relative to the OCR-D resource location, the current working directory or the $SBB_BINARIZE_DATA environment variable (if set)',
        operation_level: 'PAGE XML hierarchy level to operate on',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
