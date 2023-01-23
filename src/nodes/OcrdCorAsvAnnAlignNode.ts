import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnAlignNode = new NodeBuilder('OcrdCorAsvAnnAlign')
  .setName('ocrd-cor-asv-ann-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('method', 'SelectOption', 'majority', undefined, {
    items: ['majority', 'confidence', 'combined'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Align different textline annotations and pick best',
    }),
    'SidebarDescriptionOption'
  )
  .build();
