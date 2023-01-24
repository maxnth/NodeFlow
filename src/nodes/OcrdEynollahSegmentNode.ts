import { NodeBuilder } from '@baklavajs/core';

export const OcrdEynollahSegmentNode = new NodeBuilder('OcrdEynollahSegment')
  .setName('ocrd-eynollah-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('allow_scaling', 'CheckboxOption', false)
  .addOption('curved_line', 'CheckboxOption', false)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('full_layout', 'CheckboxOption', true)
  .addOption('headers_off', 'CheckboxOption', false)
  .addOption('models', 'InputOption', 'undefined')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment page into regions and lines and do reading order detection with eynollah',
      parameter_descriptions: {
        allow_scaling:
          'check the resolution against the number of detected columns and if needed, scale the image up or down during layout detection (heuristic to improve quality and performance)',
        curved_line:
          'try to return contour of textlines instead of just rectangle bounding box. Needs more processing time',
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); ignored if <= 0 (with fall-back 230)',
        full_layout:
          'Try to detect all element subtypes, including drop-caps and headings',
        headers_off:
          'ignore the special role of headings during reading order detection',
        models:
          'Path to directory containing models to be used (See https://qurator-data.de/eynollah)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
