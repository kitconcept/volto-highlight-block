import HighlightView from "./components/Blocks/Highlight/View";
import HighlightEdit from "./components/Blocks/Highlight/Edit";
import presentationSVG from "@plone/volto/icons/presentation.svg";
import ImageWidget from "./components/ImageWidget/ImageWidget";
import "./theme/highlight.scss";
import "./theme/image-widget.scss";

const CONTENT_COLORS = [
  { name: "highlight-custom-color-1", label: "Medium Blue" },
  { name: "highlight-custom-color-2", label: "Light Orange" },
  { name: "highlight-custom-color-3", label: "Light Green" },
  { name: "highlight-custom-color-4", label: "Blue" },
  { name: "highlight-custom-color-5", label: "Green" },
];

const applyConfig = (config) => {
  config.blocks.blocksConfig.highlight = {
    id: "highlight",
    title: "Highlight",
    icon: presentationSVG,
    group: "teasers",
    view: HighlightView,
    edit: HighlightEdit,
    blockHasOwnFocusManagement: true,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    descriptionColors: CONTENT_COLORS,
  };

  config.widgets.widget.image = ImageWidget;

  return config;
};

export default applyConfig;
