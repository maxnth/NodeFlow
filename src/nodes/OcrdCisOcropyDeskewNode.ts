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
      parameter_descriptions: {
        'level-of-operation':
          'PAGE XML hierarchy level granularity to annotate images for',
        maxskew:
          'modulus of maximum skewing angle to detect (larger will be slower, 0 will deactivate deskewing)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
