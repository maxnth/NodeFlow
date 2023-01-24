import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrCropNode = new NodeBuilder('OcrdAnybaseocrCrop')
  .setName('ocrd-anybaseocr-crop')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('columnAreaMin', 'NumberOption', 0.05)
  .addOption('columnSepWidthMax', 'NumberOption', 0.04)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('marginBottom', 'NumberOption', 0.75)
  .addOption('marginLeft', 'NumberOption', 0.3)
  .addOption('marginRight', 'NumberOption', 0.7)
  .addOption('marginTop', 'NumberOption', 0.25)
  .addOption('padding', 'IntegerOption', 10)
  .addOption('rulerAreaMax', 'NumberOption', 0.3)
  .addOption('rulerAreaMin', 'NumberOption', 0.01)
  .addOption('rulerRatioMax', 'NumberOption', 50.0)
  .addOption('rulerRatioMin', 'NumberOption', 3.0)
  .addOption('rulerWidthMax', 'NumberOption', 0.95)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        "Detect the input images' page frame, annotate it as border polygon and add a cropped derived image.",
      parameter_descriptions: {
        columnAreaMin:
          'text block detection: minimum area of individual columns (as ratio of total image pixels)',
        columnSepWidthMax:
          'text block detection: maximum width between individual columns (as ratio of total image width)',
        dpi: 'pixel density in dots per inch (used to zoom/scale during processing; overrides any meta-data in the images); disabled when zero or negative',
        marginBottom:
          'ruler / edge / text detection: minimum y position to crop from below (as ratio of total image height)',
        marginLeft:
          'ruler / edge / text detection: maximum x position to crop from left (as ratio of total image width)',
        marginRight:
          'ruler / edge / text detection: minimum x position to crop from right (as ratio of total image width)',
        marginTop:
          'ruler / edge / text detection: maximum y position to crop from above (as ratio of total image height)',
        padding:
          'extend / shrink border resulting from edge detection / text detection by this many px in each direction',
        rulerAreaMax:
          'ruler detection and suppression: maximum area of bbox (as ratio of total image pixels)',
        rulerAreaMin:
          'ruler detection and suppression: minimum area of bbox (as ratio of total image pixels)',
        rulerRatioMax:
          'ruler detection and suppression: maximum aspect ratio of bbox',
        rulerRatioMin:
          'ruler detection and suppression: minimum aspect ratio of bbox',
        rulerWidthMax:
          'ruler detection and suppression: maximum width of bbox (as ratio of total image width)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
