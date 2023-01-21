import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisPostcorrectNode = new NodeBuilder('OcrdCisPostcorrect')
  .setName('ocrd-cis-postcorrect')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('maxCandidates', 'IntegerOption', 10)
  .addOption('model', 'TextOption', 'undefined')
  .addOption('nOCR', 'IntegerOption', 1)
  .addOption('profilerConfig', 'TextOption', 'undefined')
  .addOption('profilerPath', 'TextOption', 'undefined')
  .addOption('runLE', 'CheckboxOption', false)
  .build();
