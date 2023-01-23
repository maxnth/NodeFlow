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
  .addOption('network', 'InputOption', 'undefined')
  .addOption('stride', 'IntegerOption', 112)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Classification of 15th century type groups' }),
    'SidebarDescriptionOption'
  )
  .build();
