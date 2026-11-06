import { describe, it, expect, vi } from 'vitest';
import { HighlightBlockDataAdapter } from './adapter';

describe('HighlightBlockDataAdapter', () => {
  it('calls onChangeBlock with the merged data for a text field', () => {
    const onChangeBlock = vi.fn();

    HighlightBlockDataAdapter({
      block: 'block-1',
      data: { '@type': 'highlight', title: 'Old', headtitle: 'Kicker' },
      id: 'title',
      onChangeBlock,
      value: 'New title',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'highlight',
      title: 'New title',
      headtitle: 'Kicker',
    });
  });

  it('stores the image path and its scales when an image is picked', () => {
    const onChangeBlock = vi.fn();
    const image_scales = { image: [{ download: '/a/@@images/image.jpg' }] };

    HighlightBlockDataAdapter({
      block: 'block-1',
      data: { '@type': 'highlight' },
      id: 'url',
      onChangeBlock,
      value: {
        '@id': 'http://localhost:8080/Plone/news/banner',
        image_scales,
      },
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'highlight',
      url: '/news/banner',
      image_field: 'image',
      image_scales,
    });
  });

  it('uses the content of a freshly uploaded image, which has no item', () => {
    const onChangeBlock = vi.fn();
    const content = { image: { download: '/upload/@@images/image.png' } };

    HighlightBlockDataAdapter({
      block: 'block-1',
      data: { '@type': 'highlight' },
      id: 'url',
      onChangeBlock,
      value: '/upload',
      content,
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'highlight',
      url: '/upload',
      image_field: 'image',
      image_scales: { image: [content.image] },
    });
  });

  it('keeps the image scales of the item for an existing image path', () => {
    const onChangeBlock = vi.fn();
    const item = { image_field: 'image', image_scales: { image: [] } };

    HighlightBlockDataAdapter({
      block: 'block-1',
      data: { '@type': 'highlight' },
      id: 'url',
      onChangeBlock,
      value: '/news/banner',
      item,
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'highlight',
      url: '/news/banner',
      image_field: 'image',
      image_scales: { image: [] },
    });
  });

  it('clears the image fields when the image is removed', () => {
    const onChangeBlock = vi.fn();

    HighlightBlockDataAdapter({
      block: 'block-1',
      data: { '@type': 'highlight', url: '/news/banner' },
      id: 'url',
      onChangeBlock,
      value: null,
    });

    const [block, data] = onChangeBlock.mock.calls[0];
    expect(block).toBe('block-1');
    expect(data.url).toBeNull();
    expect(data.image_field).toBeUndefined();
    expect(data.image_scales).toBeUndefined();
  });
});
