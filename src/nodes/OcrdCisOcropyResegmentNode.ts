import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyResegmentNode = new NodeBuilder(
  'OcrdCisOcropyResegment'
)
  .setName('ocrd-cis-ocropy-resegment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('extend_margins', 'IntegerOption', 3)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption('method', 'SelectOption', 'lineest', undefined, {
    items: ['lineest', 'baseline', 'ccomps'],
  })
  .addOption('min_fraction', 'NumberOption', 0.75)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Resegment text lines' }),
    'SidebarDescriptionOption'
  )
  .build();
