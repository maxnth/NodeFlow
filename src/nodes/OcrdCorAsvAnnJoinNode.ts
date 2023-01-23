import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnJoinNode = new NodeBuilder('OcrdCorAsvAnnJoin')
  .setName('ocrd-cor-asv-ann-join')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('add-filegrp-comments', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Join different textline annotations by concatenation',
    }),
    'SidebarDescriptionOption'
  )
  .build();
