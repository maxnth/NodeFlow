import { NodeBuilder } from '@baklavajs/core';

export const OcrdPagetopdfNode = new NodeBuilder('OcrdPagetopdf')
  .setName('ocrd-pagetopdf')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('ext', 'InputOption', '.pdf')
  .addOption('font', 'InputOption', '')
  .addOption('multipage', 'InputOption', '')
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
  .addOption('script-args', 'InputOption', '')
  .addOption('textequiv_level', 'SelectOption', '', undefined, {
    items: ['', 'region', 'line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Convert text and layout annotations to PDF format (overlaying original image with text layer and polygon outlines)',
    }),
    'SidebarDescriptionOption'
  )
  .build();
