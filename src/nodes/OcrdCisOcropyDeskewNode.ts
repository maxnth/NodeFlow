import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyDeskewNode = new NodeBuilder('OcrdCisOcropyDeskew')
  .setName('ocrd-cis-ocropy-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['page', 'table', 'region'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Deskew regions with ocropy (by annotating orientation angle and adding AlternativeImage)',
    }),
    'SidebarDescriptionOption'
  )
  .build();
