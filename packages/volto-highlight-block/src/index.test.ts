import { describe, it, expect, vi } from 'vitest';
import applyConfig from './index';

// The block components pull in the whole Volto app, which this test doesn't
// need: it only checks the registered style field definition.
vi.mock('./components/Blocks/Highlight/View', () => ({ default: () => null }));
vi.mock('./components/Blocks/Highlight/Edit', () => ({ default: () => null }));

const makeConfig = () => {
  const utilities: Record<string, any> = {};
  const config: any = {
    blocks: { blocksConfig: {} },
    registerUtility: vi.fn(({ name, type, method }) => {
      utilities[`${type}:${name}`] = method;
    }),
  };
  applyConfig(config);
  return { config, utilities };
};

describe('descriptionColor style field definition', () => {
  it('returns the colors of the block config', () => {
    const { config, utilities } = makeConfig();
    const method = utilities['styleFieldDefinition:descriptionColor'];
    expect(method({ data: {}, container: {} })).toBe(
      config.blocks.blocksConfig.highlight.descriptionColors,
    );
  });

  it('follows changes to the block config after startup', () => {
    const { config, utilities } = makeConfig();
    const colors = [{ name: 'dlr-blue', label: 'DLR blue', style: {} }];
    config.blocks.blocksConfig = {
      ...config.blocks.blocksConfig,
      highlight: {
        ...config.blocks.blocksConfig.highlight,
        descriptionColors: colors,
      },
    };
    const method = utilities['styleFieldDefinition:descriptionColor'];
    expect(method({ data: {}, container: {} })).toBe(colors);
  });
});
