import { NodeBuilder } from '@baklavajs/core';

export const OcrdCalamariRecognizeNode = new NodeBuilder(
  'OcrdCalamariRecognize'
)
  .setName('ocrd-calamari-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('checkpoint_dir', 'InputOption', 'qurator-gt4histocr-1.0')
  .addOption('glyph_conf_cutoff', 'NumberOption', 0.001)
  .addOption('textequiv_level', 'SelectOption', 'line', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .addOption('voter', 'InputOption', 'confidence_voter_default_ctc')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Recognize lines with Calamari',
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
