import { Editor } from '@baklavajs/core';
import { OcrdAnybaseocrBinarizeNode } from '../../../nodes/OcrdAnybaseocrBinarizeNode';
import { OcrdAnybaseocrBlockSegmentationNode } from '../../../nodes/OcrdAnybaseocrBlockSegmentationNode';
import { OcrdAnybaseocrCropNode } from '../../../nodes/OcrdAnybaseocrCropNode';
import { OcrdAnybaseocrDeskewNode } from '../../../nodes/OcrdAnybaseocrDeskewNode';
import { OcrdAnybaseocrDewarpNode } from '../../../nodes/OcrdAnybaseocrDewarpNode';
import { OcrdAnybaseocrLayoutAnalysisNode } from '../../../nodes/OcrdAnybaseocrLayoutAnalysisNode';
import { OcrdAnybaseocrTextlineNode } from '../../../nodes/OcrdAnybaseocrTextlineNode';
import { OcrdAnybaseocrTisegNode } from '../../../nodes/OcrdAnybaseocrTisegNode';
import { OcrdCalamariRecognizeNode } from '../../../nodes/OcrdCalamariRecognizeNode';
import { OcrdCisAlignNode } from '../../../nodes/OcrdCisAlignNode';
import { OcrdCisOcropyBinarizeNode } from '../../../nodes/OcrdCisOcropyBinarizeNode';
import { OcrdCisOcropyClipNode } from '../../../nodes/OcrdCisOcropyClipNode';
import { OcrdCisOcropyDenoiseNode } from '../../../nodes/OcrdCisOcropyDenoiseNode';
import { OcrdCisOcropyDeskewNode } from '../../../nodes/OcrdCisOcropyDeskewNode';
import { OcrdCisOcropyDewarpNode } from '../../../nodes/OcrdCisOcropyDewarpNode';
import { OcrdCisOcropyRecNode } from '../../../nodes/OcrdCisOcropyRecNode';
import { OcrdCisOcropyRecognizeNode } from '../../../nodes/OcrdCisOcropyRecognizeNode';
import { OcrdCisOcropyResegmentNode } from '../../../nodes/OcrdCisOcropyResegmentNode';
import { OcrdCisOcropySegmentNode } from '../../../nodes/OcrdCisOcropySegmentNode';
import { OcrdCisOcropyTrainNode } from '../../../nodes/OcrdCisOcropyTrainNode';
import { OcrdCisPostcorrectNode } from '../../../nodes/OcrdCisPostcorrectNode';
import { OcrdCorAsvAnnAlignNode } from '../../../nodes/OcrdCorAsvAnnAlignNode';
import { OcrdCorAsvAnnEvaluateNode } from '../../../nodes/OcrdCorAsvAnnEvaluateNode';
import { OcrdCorAsvAnnJoinNode } from '../../../nodes/OcrdCorAsvAnnJoinNode';
import { OcrdCorAsvAnnMarkNode } from '../../../nodes/OcrdCorAsvAnnMarkNode';
import { OcrdCorAsvAnnProcessNode } from '../../../nodes/OcrdCorAsvAnnProcessNode';
import { OcrdCorAsvFstProcessNode } from '../../../nodes/OcrdCorAsvFstProcessNode';
import { OcrdDetectron2SegmentNode } from '../../../nodes/OcrdDetectron2SegmentNode';
import { OcrdDinglehopperNode } from '../../../nodes/OcrdDinglehopperNode';
import { OcrdEynollahSegmentNode } from '../../../nodes/OcrdEynollahSegmentNode';
import { OcrdFileformatTransformNode } from '../../../nodes/OcrdFileformatTransformNode';
import { OcrdIm6convertNode } from '../../../nodes/OcrdIm6convertNode';
import { OcrdKeraslmRateNode } from '../../../nodes/OcrdKeraslmRateNode';
import { OcrdKrakenBinarizeNode } from '../../../nodes/OcrdKrakenBinarizeNode';
import { OcrdKrakenRecognizeNode } from '../../../nodes/OcrdKrakenRecognizeNode';
import { OcrdKrakenSegmentNode } from '../../../nodes/OcrdKrakenSegmentNode';
import { OcrdOcropySegmentNode } from '../../../nodes/OcrdOcropySegmentNode';
import { OcrdOlenaBinarizeNode } from '../../../nodes/OcrdOlenaBinarizeNode';
import { OcrdPage2teiNode } from '../../../nodes/OcrdPage2teiNode';
import { OcrdPagetopdfNode } from '../../../nodes/OcrdPagetopdfNode';
import { OcrdPcSegmentationNode } from '../../../nodes/OcrdPcSegmentationNode';
import { OcrdPreprocessImageNode } from '../../../nodes/OcrdPreprocessImageNode';
import { OcrdRepairInconsistenciesNode } from '../../../nodes/OcrdRepairInconsistenciesNode';
import { OcrdSbbBinarizeNode } from '../../../nodes/OcrdSbbBinarizeNode';
import { OcrdSbbTextlineDetectorNode } from '../../../nodes/OcrdSbbTextlineDetectorNode';
import { OcrdSegmentEvaluateNode } from '../../../nodes/OcrdSegmentEvaluateNode';
import { OcrdSegmentExtractGlyphsNode } from '../../../nodes/OcrdSegmentExtractGlyphsNode';
import { OcrdSegmentExtractLinesNode } from '../../../nodes/OcrdSegmentExtractLinesNode';
import { OcrdSegmentExtractPagesNode } from '../../../nodes/OcrdSegmentExtractPagesNode';
import { OcrdSegmentExtractRegionsNode } from '../../../nodes/OcrdSegmentExtractRegionsNode';
import { OcrdSegmentExtractWordsNode } from '../../../nodes/OcrdSegmentExtractWordsNode';
import { OcrdSegmentFromCocoNode } from '../../../nodes/OcrdSegmentFromCocoNode';
import { OcrdSegmentFromMasksNode } from '../../../nodes/OcrdSegmentFromMasksNode';
import { OcrdSegmentProjectNode } from '../../../nodes/OcrdSegmentProjectNode';
import { OcrdSegmentRepairNode } from '../../../nodes/OcrdSegmentRepairNode';
import { OcrdSegmentReplaceOriginalNode } from '../../../nodes/OcrdSegmentReplaceOriginalNode';
import { OcrdSegmentReplacePageNode } from '../../../nodes/OcrdSegmentReplacePageNode';
import { OcrdSegmentReplaceTextNode } from '../../../nodes/OcrdSegmentReplaceTextNode';
import { OcrdSkimageBinarizeNode } from '../../../nodes/OcrdSkimageBinarizeNode';
import { OcrdSkimageDenoiseNode } from '../../../nodes/OcrdSkimageDenoiseNode';
import { OcrdSkimageDenoiseRawNode } from '../../../nodes/OcrdSkimageDenoiseRawNode';
import { OcrdSkimageNormalizeNode } from '../../../nodes/OcrdSkimageNormalizeNode';
import { OcrdTesserocrBinarizeNode } from '../../../nodes/OcrdTesserocrBinarizeNode';
import { OcrdTesserocrCropNode } from '../../../nodes/OcrdTesserocrCropNode';
import { OcrdTesserocrDeskewNode } from '../../../nodes/OcrdTesserocrDeskewNode';
import { OcrdTesserocrFontshapeNode } from '../../../nodes/OcrdTesserocrFontshapeNode';
import { OcrdTesserocrRecognizeNode } from '../../../nodes/OcrdTesserocrRecognizeNode';
import { OcrdTesserocrSegmentNode } from '../../../nodes/OcrdTesserocrSegmentNode';
import { OcrdTesserocrSegmentLineNode } from '../../../nodes/OcrdTesserocrSegmentLineNode';
import { OcrdTesserocrSegmentRegionNode } from '../../../nodes/OcrdTesserocrSegmentRegionNode';
import { OcrdTesserocrSegmentTableNode } from '../../../nodes/OcrdTesserocrSegmentTableNode';
import { OcrdTesserocrSegmentWordNode } from '../../../nodes/OcrdTesserocrSegmentWordNode';
import { OcrdTypegroupsClassifierNode } from '../../../nodes/OcrdTypegroupsClassifierNode';

export function autoimportNodes(editor: any) {
  editor.registerNodeType(
    'ocrd-anybaseocr-binarize',
    OcrdAnybaseocrBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-binarize',
    OcrdCisOcropyBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-kraken-binarize',
    OcrdKrakenBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-olena-binarize',
    OcrdOlenaBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-sbb-binarize',
    OcrdSbbBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-skimage-binarize',
    OcrdSkimageBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-binarize',
    OcrdTesserocrBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-im6convert',
    OcrdIm6convertNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-preprocess-image',
    OcrdPreprocessImageNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-skimage-denoise-raw',
    OcrdSkimageDenoiseRawNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-skimage-normalize',
    OcrdSkimageNormalizeNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-crop',
    OcrdAnybaseocrCropNode,
    'Cropping'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-crop',
    OcrdTesserocrCropNode,
    'Cropping'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-deskew',
    OcrdAnybaseocrDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-deskew',
    OcrdCisOcropyDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-deskew',
    OcrdTesserocrDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-dewarp',
    OcrdAnybaseocrDewarpNode,
    'Dewarping'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-dewarp',
    OcrdCisOcropyDewarpNode,
    'Dewarping'
  );
  editor.registerNodeType(
    'ocrd-skimage-denoise',
    OcrdSkimageDenoiseNode,
    'Denoising'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-denoise',
    OcrdCisOcropyDenoiseNode,
    'Denoising'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-clip',
    OcrdCisOcropyClipNode,
    ' Clipping'
  );
  editor.registerNodeType('ocrd-cis-align', OcrdCisAlignNode, 'Text alignment');
  editor.registerNodeType(
    'ocrd-cor-asv-ann-align',
    OcrdCorAsvAnnAlignNode,
    'Text alignment'
  );
  editor.registerNodeType(
    'ocrd-typegroups-classifier',
    OcrdTypegroupsClassifierNode,
    'Font detection'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-resegment',
    OcrdCisOcropyResegmentNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-segment-project',
    OcrdSegmentProjectNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-repair-inconsistencies',
    OcrdRepairInconsistenciesNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-segment-repair',
    OcrdSegmentRepairNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-block-segmentation',
    OcrdAnybaseocrBlockSegmentationNode,
    'Layout Analysis (Block)'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-layout-analysis',
    OcrdAnybaseocrLayoutAnalysisNode,
    'Layout Analysis'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-textline',
    OcrdAnybaseocrTextlineNode,
    'Layout Analysis (Lines)'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-tiseg',
    OcrdAnybaseocrTisegNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment',
    OcrdTesserocrSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-line',
    OcrdTesserocrSegmentLineNode,
    'Layout Analysis (Line)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-region',
    OcrdTesserocrSegmentRegionNode,
    'Layout Analysis (Region)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-table',
    OcrdTesserocrSegmentTableNode,
    'Layout Analysis (Table)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-word',
    OcrdTesserocrSegmentWordNode,
    'Layout Analysis (Word)'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-segment',
    OcrdCisOcropySegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-detectron2-segment',
    OcrdDetectron2SegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-eynollah-segment',
    OcrdEynollahSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-kraken-segment',
    OcrdKrakenSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-pc-segmentation',
    OcrdPcSegmentationNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-sbb-textline-detector',
    OcrdSbbTextlineDetectorNode,
    'Layout Analysis (Line)'
  );
  editor.registerNodeType(
    'ocrd-calamari-recognize',
    OcrdCalamariRecognizeNode,
    'Text recognition'
  );
  editor.registerNodeType(
    'ocrd-cis-postcorrect',
    OcrdCisPostcorrectNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-evaluate',
    OcrdCorAsvAnnEvaluateNode,
    'OCR Evaluation'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-process',
    OcrdCorAsvAnnProcessNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-fst-process',
    OcrdCorAsvFstProcessNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-dinglehopper',
    OcrdDinglehopperNode,
    'OCR Evaluation'
  );
  editor.registerNodeType(
    'ocrd-ocropy-segment',
    OcrdOcropySegmentNode,
    'Image preprocessing'
  );
  editor.registerNodeType(
    'ocrd-segment-evaluate',
    OcrdSegmentEvaluateNode,
    'Layout Evaluation'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-recognize',
    OcrdTesserocrRecognizeNode,
    'Text recognition'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-fontshape',
    OcrdTesserocrFontshapeNode,
    'Font style annotation'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-train',
    OcrdCisOcropyTrainNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-join',
    OcrdCorAsvAnnJoinNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-mark',
    OcrdCorAsvAnnMarkNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-keraslm-rate',
    OcrdKeraslmRateNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-kraken-recognize',
    OcrdKrakenRecognizeNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-text',
    OcrdSegmentReplaceTextNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-rec',
    OcrdCisOcropyRecNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-recognize',
    OcrdCisOcropyRecognizeNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-original',
    OcrdSegmentReplaceOriginalNode,
    'Adaptation of Coordinates'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-page',
    OcrdSegmentReplacePageNode,
    'Adaptation of Coordinates'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-glyphs',
    OcrdSegmentExtractGlyphsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-lines',
    OcrdSegmentExtractLinesNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-pages',
    OcrdSegmentExtractPagesNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-regions',
    OcrdSegmentExtractRegionsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-words',
    OcrdSegmentExtractWordsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-from-coco',
    OcrdSegmentFromCocoNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-from-masks',
    OcrdSegmentFromMasksNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-page2tei',
    OcrdPage2teiNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-pagetopdf',
    OcrdPagetopdfNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-fileformat-transform',
    OcrdFileformatTransformNode,
    'Format Conversion'
  );
}
