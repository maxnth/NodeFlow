import { NodeBuilder } from '@baklavajs/core';

export const InputNode = new NodeBuilder('InputNode')
  .setName('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'The Input node represents the original input images',
    }),
    'SidebarDescriptionOption'
  )
  .build();
