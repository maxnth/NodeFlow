import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisPostcorrectNode = new NodeBuilder('OcrdCisPostcorrect')
  .setName('ocrd-cis-postcorrect')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('maxCandidates', 'IntegerOption', 10)
  .addOption('model', 'InputOption', 'undefined')
  .addOption('nOCR', 'IntegerOption', 1)
  .addOption('profilerConfig', 'InputOption', 'undefined')
  .addOption('profilerPath', 'InputOption', 'undefined')
  .addOption('runLE', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Post correct OCR results',
      parameter_descriptions: {
        maxCandidates:
          'Maximum number of considered correction candidates per suspicious token',
        model: 'Path to the post correction model file',
        nOCR: "Number of parallel OCR's to use for the post correction",
        profilerConfig: "Path to the profiler's language config file",
        profilerPath: 'Path to the profiler executable',
        runLE: 'Do run the lexicon extension step for the post correction',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
