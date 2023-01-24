import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnProcessNode = new NodeBuilder('OcrdCorAsvAnnProcess')
  .setName('ocrd-cor-asv-ann-process')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('fast_mode', 'CheckboxOption', false)
  .addOption('fixed_beam_width', 'IntegerOption', 15)
  .addOption('model_file', 'InputOption', 'undefined')
  .addOption('rejection_threshold', 'NumberOption', 0.5)
  .addOption('relative_beam_width', 'NumberOption', 0.2)
  .addOption('textequiv_level', 'SelectOption', 'glyph', undefined, {
    items: ['line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Improve text annotation by character-level encoder-attention-decoder ANN model',
      parameter_descriptions: {
        charmap:
          'mapping for input characters before passing to correction; can be used to adapt to character set mismatch between input and model (without relying on underspecification alone)',
        fast_mode:
          'decode greedy instead of beamed, with batches of parallel lines instead of parallel alternatives; also disables rejection and beam parameters; enable if performance is far more important than quality',
        fixed_beam_width:
          'maximum number of candidates allowed to enter the beam in each hypothesis; controls the quality/performance trade-off',
        model_file:
          'path of h5py weight/config file for model trained with cor-asv-ann-train',
        rejection_threshold:
          'minimum probability of the candidate corresponding to the input character in each hypothesis during beam search, helps balance precision/recall trade-off; set to 0 to disable rejection (max recall) or 1 to disable correction (max precision)',
        relative_beam_width:
          "minimum fraction of the best candidate's probability required to enter the beam in each hypothesis; controls the quality/performance trade-off",
        textequiv_level:
          'PAGE XML hierarchy level to read/write TextEquiv input/output on',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
