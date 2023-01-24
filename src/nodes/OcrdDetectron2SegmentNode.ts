import { NodeBuilder } from '@baklavajs/core';

export const OcrdDetectron2SegmentNode = new NodeBuilder(
  'OcrdDetectron2Segment'
)
  .setName('ocrd-detectron2-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('device', 'InputOption', 'cuda')
  .addOption('min_confidence', 'NumberOption', 0.5)
  .addOption('model_config', 'InputOption', 'undefined')
  .addOption('model_weights', 'InputOption', 'undefined')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'table'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Detect regions with Detectron2 models',
      parameter_descriptions: {
        categories:
          "maps each region category (position) of the model to a PAGE region type (and @type or @custom if separated by colon), e.g. ['TextRegion:paragraph', 'TextRegion:heading', 'TextRegion:floating', 'TableRegion', 'ImageRegion'] for PubLayNet; categories with an empty string will be skipped during prediction",
        device:
          'select computing device for Torch (e.g. cpu or cuda:0); will fall back to CPU if no GPU is available',
        min_confidence: 'confidence threshold for detections',
        model_config: 'path name of model config',
        model_weights: 'path name of model weights',
        operation_level:
          'hierarchy level which to predict and assign regions for',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
