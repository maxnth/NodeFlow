import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisAlignNode = new NodeBuilder('OcrdCisAlign')
  .setName('ocrd-cis-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Align multiple OCRs and/or GTs',
      parameter_descriptions: {
        checkpoint_dir:
          'The directory containing calamari model files (*.ckpt.json). Uses all checkpoints in that directory',
        glyph_conf_cutoff:
          'Only include glyph alternatives with confidences above this threshold',
        textequiv_level:
          'Deepest PAGE XML hierarchy level to include TextEquiv results for',
        voter: 'The voting algorithm to use',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
