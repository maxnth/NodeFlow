import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrDeskewNode = new NodeBuilder('OcrdTesserocrDeskew')
  .setName('ocrd-tesserocr-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('min_orientation_confidence', 'NumberOption', 1.5)
  .addOption('operation_level', 'SelectOption', 'region', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Detect script, orientation and skew angle for pages or regions',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        min_orientation_confidence:
          'Minimum confidence score to apply orientation as detected by OSD',
        operation_level: 'PAGE XML hierarchy level to operate on',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
