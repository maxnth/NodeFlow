import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnMarkNode = new NodeBuilder('OcrdCorAsvAnnMark')
  .setName('ocrd-cor-asv-ann-mark')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('command', 'InputOption', 'undefined')
  .addOption('format', 'InputOption', 'conf')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'mark words not found by a spellchecker' }),
    'SidebarDescriptionOption'
  )
  .build();
