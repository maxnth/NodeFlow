import { NodeBuilder } from '@baklavajs/core';

export const OcrdOcropySegmentNode = new NodeBuilder('OcrdOcropySegment')
  .setName('ocrd-ocropy-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('usegauss', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Segment page',
      parameter_descriptions: {
        csminaspect: 'has an effect',
        csminheight: 'has an effect',
        expand: 'has an effect',
        hscale: 'has an effect',
        maxcolseps: 'has an effect',
        maxseps: 'has an effect',
        noise: 'has an effect',
        pad: 'has an effect',
        scale: 'has an effect',
        sepwiden: 'has an effect',
        threshold: 'has an effect',
        usegauss: 'has an effect',
        vscale: 'has an effect',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
