import { NodeBuilder } from '@baklavajs/core';

export const OcrdFileformatTransformNode = new NodeBuilder(
  'OcrdFileformatTransform'
)
  .setName('ocrd-fileformat-transform')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('ext', 'TextOption', '')
  .addOption('from-to', 'SelectOption', 'page alto', undefined, {
    items: [
      'abbyy hocr',
      'abbyy page',
      'alto2.0 alto3.0',
      'alto2.0 alto3.1',
      'alto2.0 hocr',
      'alto2.1 alto3.0',
      'alto2.1 alto3.1',
      'alto2.1 hocr',
      'alto page',
      'alto text',
      'gcv hocr',
      'gcv page',
      'hocr alto2.0',
      'hocr alto2.1',
      'hocr page',
      'hocr text',
      'page alto',
      'page hocr',
      'page page2019',
      'page text',
      'tei hocr',
    ],
  })
  .addOption('script-args', 'TextOption', '')
  .build();
