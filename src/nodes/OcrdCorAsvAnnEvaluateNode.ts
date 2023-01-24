import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnEvaluateNode = new NodeBuilder(
  'OcrdCorAsvAnnEvaluate'
)
  .setName('ocrd-cor-asv-ann-evaluate')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('confusion', 'IntegerOption', 0)
  .addOption('histogram', 'CheckboxOption', false)
  .addOption('metric', 'SelectOption', 'Levenshtein-fast', undefined, {
    items: ['Levenshtein-fast', 'Levenshtein', 'NFC', 'NFKC', 'historic_latin'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Align different textline annotations and compute distance',
      parameter_descriptions: {
        confusion:
          'Count edits and show that number of most frequent confusions (non-identity) in the end.',
        gt_level:
          'When `metric=historic_latin`, normalize and equate at this GT transcription level.',
        histogram: 'Aggregate and show mutual character histograms.',
        metric:
          'Distance metric to calculate and aggregate: `historic_latin` for GT level 1-3, `NFKC` for roughly GT level 2 (but including reduction of `\u017f/s` and superscript numerals etc), `Levenshtein` for GT level 3 (or `Levenshtein-fast` for faster alignment - but using maximum sequence length instead of path length as CER denominator, and without confusion statistics).',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
