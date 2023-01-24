import { NodeBuilder } from '@baklavajs/core';

export const OcrdDinglehopperNode = new NodeBuilder('OcrdDinglehopper')
  .setName('ocrd-dinglehopper')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('metrics', 'CheckboxOption', true)
  .addOption('textequiv_level', 'SelectOption', 'region', undefined, {
    items: ['region', 'line'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Evaluate OCR text against ground truth with dinglehopper',
      parameter_descriptions: {
        metrics: 'Enable/disable metrics and green/red',
        textequiv_level: 'PAGE XML hierarchy level to extract the text from',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
