import { NodeBuilder } from '@baklavajs/core';

export const InputNode = new NodeBuilder('InputNode')
  .setName('Input')
  .addOutputInterface('Output')
  .addOption('Help', 'ButtonOption')
  .build();
