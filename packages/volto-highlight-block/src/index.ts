import HighlightView from './components/Blocks/Highlight/View';
import HighlightEdit from './components/Blocks/Highlight/Edit';
import { HighlightBlockDataAdapter } from './components/Blocks/Highlight/adapter';
import { HighlightSchema } from './components/Blocks/Highlight/schema';
import presentationSVG from '@plone/volto/icons/presentation.svg';
import type { ComponentType } from 'react';
import type { ConfigType } from '@plone/registry';
import type { BlockViewProps } from '@plone/types';
import './theme/highlight.scss';
import './theme/image-widget.scss';

declare module '@plone/types' {
  export interface BlocksConfigData {
    highlight: BlockConfigBase;
  }

  export interface BlockConfigBase {
    /**
     * Keys that the blocks configuration of kitconcept-core may replace
     * through the web, and the type of their value. Must stay identical to
     * the declaration in kitconcept-core.
     */
    ttwConfigurable?: Record<string, string>;
  }

  export interface BlocksFormData {
    url: string;
    headtitle: string;
    title: string;
    button: boolean;
    buttonLink: Array<{ '@id': string }>;
    buttonText: string;
    placeholder: string;
    image_field: string;
    image_scales: Record<string, any>;
  }
}

const HIGHLIGHT_COLORS = [
  {
    name: 'highlight-custom-color-1',
    label: 'Grey',
    style: {
      '--descriptionColor': '#ECEBEB',
      '--descriptionColor-foreground': '#000',
    },
  },
  {
    name: 'highlight-custom-color-2',
    label: 'Teal',
    style: {
      '--descriptionColor': '#306F7E',
      '--descriptionColor-foreground': '#fff',
    },
  },
  {
    name: 'highlight-custom-color-3',
    label: 'Sky Blue',
    style: {
      '--descriptionColor': '#91C9FA',
      '--descriptionColor-foreground': '#000',
    },
  },
  {
    name: 'highlight-custom-color-4',
    label: 'Indigo',
    style: {
      '--descriptionColor': '#4B4BB8',
      '--descriptionColor-foreground': '#fff',
    },
  },
  {
    name: 'highlight-custom-color-5',
    label: 'Peach',
    style: {
      '--descriptionColor': '#F5C1A9',
      '--descriptionColor-foreground': '#000',
    },
  },
  {
    name: 'highlight-custom-color-6',
    label: 'Yellow',
    style: {
      '--descriptionColor': '#EEE38D',
      '--descriptionColor-foreground': '#000',
    },
  },
  {
    name: 'highlight-custom-color-7',
    label: 'Black',
    style: {
      '--descriptionColor': '#000',
      '--descriptionColor-foreground': '#fff',
    },
  },
];

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.highlight = {
    id: 'highlight',
    title: 'Highlight',
    icon: presentationSVG,
    group: 'teasers',
    view: HighlightView as unknown as ComponentType<BlockViewProps>,
    edit: HighlightEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    dataAdapter: HighlightBlockDataAdapter,
    blockSchema: HighlightSchema,
    descriptionColors: HIGHLIGHT_COLORS,
    // Lets the blocks configuration of kitconcept-core (`kitconcept.blocks.config`)
    // replace the colors through the web.
    ttwConfigurable: { descriptionColors: 'styleDefinitions' },
  };

  config.registerUtility({
    name: 'descriptionColor',
    type: 'styleFieldDefinition',
    // Read the colors from the block config at render time, so changes to it
    // after startup (for example, through the web) are applied to the page too.
    method: (props: { data: any; container: any }) =>
      (config.blocks.blocksConfig.highlight as any)?.descriptionColors ||
      HIGHLIGHT_COLORS,
  });

  return config;
};

export default applyConfig;
