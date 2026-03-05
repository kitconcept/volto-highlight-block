import HighlightView from './components/Blocks/Highlight/View';
import HighlightEdit from './components/Blocks/Highlight/Edit';
import { HighlightBlockDataAdapter } from './components/Blocks/Highlight/adapter';
import { HighlightSchema } from './components/Blocks/Highlight/schema';
import presentationSVG from '@plone/volto/icons/presentation.svg';
import './theme/highlight.scss';
import './theme/image-widget.scss';

const CONTENT_COLORS = [
  {
    name: 'highlight-custom-color-1',
    label: 'Medium Blue',
    style: {
      '--theme-color': '#55b8da',
      '--theme-foreground-color': '#000',
    },
  },
  {
    name: 'highlight-custom-color-2',
    label: 'Blue',
    style: {
      '--theme-color': '#006489',
      '--theme-foreground-color': '#f00',
    },
  },
  {
    name: 'highlight-custom-color-3',
    label: 'Light Orange',
    style: {
      '--theme-color': '#fddf63',
      '--theme-foreground-color': '#000',
    },
  },
  {
    name: 'highlight-custom-color-4',
    label: 'Light Green',
    style: {
      '--theme-color': '#c9d465',
      '--theme-foreground-color': '#000',
    },
  },
  {
    name: 'highlight-custom-color-5',
    label: 'Green',
    style: {
      '--theme-color': '#7da048',
      '--theme-foreground-color': '#000',
    },
  },
];

const applyConfig = (config) => {
  config.blocks.blocksConfig.highlight = {
    id: 'highlight',
    title: 'Highlight',
    icon: presentationSVG,
    group: 'teasers',
    view: HighlightView,
    edit: HighlightEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    dataAdapter: HighlightBlockDataAdapter,
    blockSchema: HighlightSchema,
    descriptionColors: CONTENT_COLORS,
  };

  return config;
};

export default applyConfig;
