import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenRecognizeNode = new NodeBuilder('OcrdKrakenRecognize')
  .setName('ocrd-kraken-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bidi_reordering', 'CheckboxOption', true)
  .addOption('device', 'InputOption', 'cpu')
  .addOption('model', 'InputOption', 'en_best.mlmodel')
  .addOption('pad', 'IntegerOption', 16)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'OCR with kraken',
      parameter_descriptions: {
        bidi_reordering:
          'Reorder classes in the ocr_record according to  the Unicode bidirectional algorithm for correct display.',
        device:
          "CUDA ID (e.g. 'cuda:0') for computation on GPU, or 'cpu' to run on CPU only",
        model: 'OCR model to recognize with',
        pad: 'Extra blank padding to the left and right of text line.',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
