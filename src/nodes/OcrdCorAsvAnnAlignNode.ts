import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnAlignNode = new NodeBuilder('OcrdCorAsvAnnAlign')
  .setName('ocrd-cor-asv-ann-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('method', 'SelectOption', 'majority', undefined, {
    items: ['majority', 'confidence', 'combined'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Align different textline annotations and pick best',
      parameter_descriptions: {
        method:
          'decide by majority of OCR hypotheses, by highest confidence of OCRs or by a combination thereof',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
