"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[530],{530:function(e,o,n){n.r(o),o.default='import React from \'react\'\nimport { EmblaOptionsType } from \'embla-carousel\'\nimport { IosPickerItem } from \'./EmblaCarouselIosPickerItem\'\n\ntype PropType = {\n  loop?: EmblaOptionsType[\'loop\']\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { loop } = props\n\n  return (\n    <div className="embla">\n      <IosPickerItem\n        slideCount={24}\n        perspective="left"\n        loop={loop}\n        label="hours"\n      />\n      <IosPickerItem\n        slideCount={60}\n        perspective="right"\n        loop={loop}\n        label="min"\n      />\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=530-a95b7b2f538b4d681788.js.map