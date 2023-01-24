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
      parameter_descriptions: {
        beam_width:
          'maximum number of best partial paths to consider during beam search in language modelling',
        errorfst_file: 'path of FST file for error model',
        keraslm_file:
          'path of h5py weight/config file for language model trained with keraslm',
        lexiconfst_file: 'path of FST file for lexicon model',
        lm_weight: 'share of the LM scores over the FST output confidences',
        pruning_weight:
          'transition weight for pruning the hypotheses in each word window FST',
        rejection_weight:
          'transition weight (per character) for unchanged input in each word window FST',
        textequiv_level:
          'PAGE XML hierarchy level to read TextEquiv input on (output will always be word level)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
