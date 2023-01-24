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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Dewarps the input image with anyBaseOCR and outputs it as an AlternativeImage',
      parameter_descriptions: {
        gpu_id: 'CUDA device ID of GPU to use, or -1 for CPU only',
        model_path: 'Path to the trained pix2pixHD model',
        operation_level:
          'PAGE XML hierarchy level to operate on (should match what model was trained on!)',
        resize_height: 'target image height before input to the network',
        resize_mode:
          'transformation to apply to the original image before input to the network',
        resize_width: 'target image width before input to the network',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
