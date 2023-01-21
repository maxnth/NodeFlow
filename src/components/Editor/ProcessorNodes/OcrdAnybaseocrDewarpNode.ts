import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrDewarpNode = new NodeBuilder('OcrdAnybaseocrDewarp')
  .setName('ocrd-anybaseocr-dewarp')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('gpu_id', 'IntegerOption', -1)
  .addOption('model_path', 'InputOption', 'latest_net_G.pth')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption('resize_height', 'IntegerOption', 1024)
  .addOption('resize_mode', 'SelectOption', 'resize_and_crop', undefined, {
    items: [
      'resize_and_crop',
      'crop',
      'scale_width',
      'scale_width_and_crop',
      'none',
    ],
  })
  .addOption('resize_width', 'IntegerOption', 1024)
  .build();
