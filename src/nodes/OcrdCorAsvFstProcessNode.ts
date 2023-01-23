import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvFstProcessNode = new NodeBuilder('OcrdCorAsvFstProcess')
  .setName('ocrd-cor-asv-fst-process')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('beam_width', 'IntegerOption', 100)
  .addOption('errorfst_file', 'InputOption', 'undefined')
  .addOption('keraslm_file', 'InputOption', 'undefined')
  .addOption('lexiconfst_file', 'InputOption', 'undefined')
  .addOption('lm_weight', 'NumberOption', 0.5)
  .addOption('pruning_weight', 'NumberOption', 5.0)
  .addOption('rejection_weight', 'NumberOption', 1.5)
  .addOption('textequiv_level', 'SelectOption', 'word', undefined, {
    items: ['word'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Improve text annotation by FST error and lexicon model with character-level LSTM language model',
    }),
    'SidebarDescriptionOption'
  )
  .build();
