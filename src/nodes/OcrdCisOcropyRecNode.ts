import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyRecNode = new NodeBuilder('OcrdCisOcropyRec')
  .setName('ocrd-cis-ocropy-rec')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Recognize text snippets' }),
    'SidebarDescriptionOption'
  )
  .build();
