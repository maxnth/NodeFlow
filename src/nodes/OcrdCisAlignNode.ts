import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisAlignNode = new NodeBuilder('OcrdCisAlign')
  .setName('ocrd-cis-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Align multiple OCRs and/or GTs' }),
    'SidebarDescriptionOption'
  )
  .build();
