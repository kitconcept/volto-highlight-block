import { describe, it, expect, beforeAll } from 'vitest';
import { createIntl } from 'react-intl';
import config from '@plone/volto/registry';
import { HighlightSchema } from './schema';

const intl = createIntl({ locale: 'en', messages: {} });

const DESCRIPTION_COLORS = [
  {
    name: 'highlight-custom-color-1',
    label: 'Grey',
    style: { '--descriptionColor': '#ECEBEB' },
  },
  {
    name: 'highlight-custom-color-2',
    label: 'Teal',
    style: { '--descriptionColor': '#306F7E' },
  },
];

describe('HighlightSchema', () => {
  beforeAll(() => {
    (config.blocks.blocksConfig as any).highlight = {
      id: 'highlight',
      descriptionColors: DESCRIPTION_COLORS,
    };
  });

  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = HighlightSchema({ intl });

    expect(schema.title).toBe('Highlight');
    expect(Object.keys(schema.properties)).toEqual(
      expect.arrayContaining(['url', 'button', 'buttonLink', 'buttonText']),
    );
  });

  it('ignores the editor-only props that the editor passes along', () => {
    const data = { '@type': 'highlight' };
    const schema = HighlightSchema({ intl, props: { data } } as any);

    expect(schema.title).toBe('Highlight');
    expect(schema.fieldsets[0].fields).toEqual([
      'url',
      'button',
      'buttonLink',
      'buttonText',
    ]);
  });

  it('offers the description colors of the block configuration', () => {
    const schema = HighlightSchema({ intl });
    const descriptionColor =
      schema.properties.styles.schema.properties.descriptionColor;

    expect(descriptionColor.colors).toBe(DESCRIPTION_COLORS);
    expect(descriptionColor.default).toBe('highlight-custom-color-1');
  });
});
