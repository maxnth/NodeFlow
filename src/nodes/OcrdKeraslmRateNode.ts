import { NodeBuilder } from '@baklavajs/core';

export const OcrdKeraslmRateNode = new NodeBuilder('OcrdKeraslmRate')
  .setName('ocrd-keraslm-rate')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('alternative_decoding', 'CheckboxOption', true)
  .addOption('beam_width', 'IntegerOption', 10)
  .addOption('lm_weight', 'NumberOption', 0.5)
  .addOption('model_file', 'InputOption', 'undefined')
  .addOption('textequiv_level', 'SelectOption', 'glyph', undefined, {
    items: ['region', 'line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Rate elements of the text with a character-level LSTM language model in Keras',
      parameter_descriptions: {
        alternative_decoding:
          'whether to process all TextEquiv alternatives, finding the best path via beam search, and delete each non-best alternative',
        beam_width:
          'maximum number of best partial paths to consider during search with alternative_decoding',
        lm_weight: 'share of the LM scores over the input confidences',
        model_file:
          'path of h5py weight/config file for model trained with keraslm',
        textequiv_level:
          'PAGE XML hierarchy level to evaluate TextEquiv sequences on',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
