import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentProjectNode = new NodeBuilder('OcrdSegmentProject')
  .setName('ocrd-segment-project')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'table', 'region', 'line', 'word'],
  })
  .addOption('padding', 'IntegerOption', 10)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Project segment coordinates to their structural parents',
    }),
    'SidebarDescriptionOption'
  )
  .build();
