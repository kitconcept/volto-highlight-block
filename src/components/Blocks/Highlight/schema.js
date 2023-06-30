import { defineMessages } from 'react-intl';
import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';

import config from '@plone/volto/registry';

const messages = defineMessages({
  highlightBlockTitle: {
    id: 'highlightBlockTitle',
    defaultMessage: 'Highlight',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  width: {
    id: 'Width',
    defaultMessage: 'Width',
  },
  height: {
    id: 'Height',
    defaultMessage: 'Height',
  },
  image: {
    id: 'Image',
    defaultMessage: 'Image',
  },
  button: {
    id: 'Button',
    defaultMessage: 'Button',
  },
  buttonLink: {
    id: 'buttonLink',
    defaultMessage: 'Button Link',
  },
  buttonText: {
    id: 'buttonText',
    defaultMessage: 'Button Text',
  },
  descriptionColor: {
    id: 'descriptionColor',
    defaultMessage: 'Description color',
  },
});

export function HighlightSchema(props) {
  const { intl } = props;
  let schema = {
    title: props.intl.formatMessage(messages.highlightBlockTitle),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['url', 'button', 'buttonLink', 'buttonText'],
      },
    ],
    properties: {
      url: {
        title: intl.formatMessage(messages.image),
        widget: 'image',
      },
      button: {
        title: intl.formatMessage(messages.button),
        type: 'boolean',
      },
      buttonLink: {
        title: intl.formatMessage(messages.buttonLink),
        widget: 'object_browser',
        allowExternals: true,
        mode: 'link',
      },
      buttonText: {
        title: intl.formatMessage(messages.buttonText),
        widget: 'textarea',
      },
    },
    required: [],
  };

  const descriptionColors =
    config.blocks?.blocksConfig.highlight.descriptionColors;

  addStyling({ schema, intl });

  schema.properties.styles.schema.fieldsets[0].fields = ['descriptionColor'];
  schema.properties.styles.schema.properties.descriptionColor = {
    title: intl.formatMessage(messages.descriptionColor),
    widget: 'color_picker',
    colors: descriptionColors,
    default: 'highlight-custom-color-1',
  };

  return schema;
}
