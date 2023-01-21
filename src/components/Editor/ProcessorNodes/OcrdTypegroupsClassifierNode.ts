import { NodeBuilder } from '@baklavajs/core';

export const OcrdTypegroupsClassifierNode = new NodeBuilder(
  'OcrdTypegroupsClassifier'
)
  .setName('ocrd-typegroups-classifier')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption('network', 'TextOption', 'undefined')
  .addOption('stride', 'IntegerOption', 112)
  .build();
