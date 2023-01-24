import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyRecNode = new NodeBuilder('OcrdCisOcropyRec')
  .setName('ocrd-cis-ocropy-rec')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Recognize text snippets',
      parameter_descriptions: {
        model: 'ocropy model to apply (e.g. fraktur.pyrnn)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
