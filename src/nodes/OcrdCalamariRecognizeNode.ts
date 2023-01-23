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
    () => ({ description: 'Recognize lines with Calamari' }),
    'SidebarDescriptionOption'
  )
  .build();
