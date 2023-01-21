import { NodeBuilder } from '@baklavajs/core';

export const OcrdPagetopdfNode = new NodeBuilder('OcrdPagetopdf')
  .setName('ocrd-pagetopdf')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('ext', 'TextOption', '.pdf')
  .addOption('font', 'TextOption', '')
  .addOption('multipage', 'TextOption', '')
  .addOption('negative2zero', 'CheckboxOption', false)
  .addOption('outlines', 'SelectOption', '', undefined, {
    items: ['', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('pagelabel', 'SelectOption', 'pageId', undefined, {
    items: [
      'pagenumber',
      'pageId',
      'basename',
      'basename_without_extension',
      'local_filename',
      'ID',
      'url',
    ],
  })
  .addOption('script-args', 'TextOption', '')
  .addOption('textequiv_level', 'SelectOption', '', undefined, {
    items: ['', 'region', 'line', 'word', 'glyph'],
  })
  .build();
