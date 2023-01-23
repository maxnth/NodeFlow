import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisPostcorrectNode = new NodeBuilder('OcrdCisPostcorrect')
  .setName('ocrd-cis-postcorrect')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('maxCandidates', 'IntegerOption', 10)
  .addOption('model', 'InputOption', 'undefined')
  .addOption('nOCR', 'IntegerOption', 1)
  .addOption('profilerConfig', 'InputOption', 'undefined')
  .addOption('profilerPath', 'InputOption', 'undefined')
  .addOption('runLE', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Post correct OCR results' }),
    'SidebarDescriptionOption'
  )
  .build();
