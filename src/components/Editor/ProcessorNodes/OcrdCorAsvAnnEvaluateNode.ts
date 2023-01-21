import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnEvaluateNode = new NodeBuilder(
  'OcrdCorAsvAnnEvaluate'
)
  .setName('ocrd-cor-asv-ann-evaluate')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('confusion', 'IntegerOption', 0)
  .addOption('histogram', 'CheckboxOption', false)
  .addOption('metric', 'SelectOption', 'Levenshtein-fast', undefined, {
    items: ['Levenshtein-fast', 'Levenshtein', 'NFC', 'NFKC', 'historic_latin'],
  })
  .build();
