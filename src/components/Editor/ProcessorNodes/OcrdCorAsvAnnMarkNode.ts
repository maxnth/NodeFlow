import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnMarkNode = new NodeBuilder('OcrdCorAsvAnnMark')
  .setName('ocrd-cor-asv-ann-mark')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('command', 'TextOption', 'undefined')
  .addOption('format', 'TextOption', 'conf')
  .build();
