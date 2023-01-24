import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrTisegNode = new NodeBuilder('OcrdAnybaseocrTiseg')
  .setName('ocrd-anybaseocr-tiseg')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('seg_weights', 'InputOption', 'seg_model')
  .addOption('use_deeplr', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Separates the text and non-text elements with anyBaseOCR. Outputs clipped versions of the input image as AlternativeImage containing either only text or non-text elements.',
      parameter_descriptions: {
        seg_weights:
          'Directory path to deep learning model when use_deeplr is true.',
        use_deeplr:
          'Whether to use deep learning model (UNet pixel classifier) instead of rule-based implementation (multi-resolution morphology).',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
