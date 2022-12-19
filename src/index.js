import HighlightView from './components/Blocks/Highlight/View';
import HighlightEdit from './components/Blocks/Highlight/Edit';
import presentationSVG from '@plone/volto/icons/presentation.svg';
import './theme/highlight.scss';

const applyConfig = (config) => {
  config.blocks.blocksConfig.highlight = {
    id: 'highlight',
    title: 'Highlight',
    icon: presentationSVG,
    group: 'teasers',
    view: HighlightView,
    edit: HighlightEdit,
    blockHasOwnFocusManagement: true,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
