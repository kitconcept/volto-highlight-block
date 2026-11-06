---
block: highlight
---

Shows a large image with a kicker, a title, a description and an optional button over it. The image fills the block, and the text sits on a panel whose color is chosen from a palette of styles.

The block stores its image as the path of an image content item, together with the image scales that the site needs to render it. Its text is stored as plain fields, except for the description, which is rich text.

### Fields

- `url`: the path of the image content item, for example `/news/annual-report/banner`. Without it the block shows no image and no text.
- `image_field`: the name of the image field of that content item, which is `image` for an image content type.
- `image_scales`: the image scales of the content item, as the Plone REST API returns them in `image_scales`. They let the block render the image without asking the server for the item again.
- `headtitle`: the kicker, a short line above the title. Plain text.
- `title`: the title. Plain text.
- `value`: the description, as a list of Slate nodes. It has the same format as the text block (`slate`).
- `plaintext`: the description without formatting. Keep it in sync with `value`.
- `button`: `true` to show a button under the description.
- `buttonText`: the text of the button. Plain text.
- `buttonLink`: a list with one `{ "@id": path }` object, which is the link of the button. For an external link, use the full URL as `@id`.
- `styles.descriptionColor`: the name of the color of the panel, from the palette of the block configuration. The default is the first color of the palette.

### Example

A complete highlight block with an image, a kicker, a title, a description and a button:

```json
{
  "@type": "highlight",
  "url": "/news/annual-report/banner",
  "image_field": "image",
  "image_scales": {
    "image": [
      {
        "download": "/news/annual-report/banner/@@images/image.jpeg",
        "width": 2000,
        "height": 800,
        "scales": {
          "preview": {
            "download": "/news/annual-report/banner/@@images/image-400-preview.jpeg",
            "width": 400,
            "height": 160
          }
        }
      }
    ]
  },
  "headtitle": "News",
  "title": "Annual report 2026",
  "value": [
    {
      "type": "p",
      "children": [
        {
          "text": "The annual report summarizes the year's projects and results."
        }
      ]
    }
  ],
  "plaintext": "The annual report summarizes the year's projects and results.",
  "button": true,
  "buttonText": "Read the report",
  "buttonLink": [{ "@id": "/news/annual-report" }],
  "styles": {
    "descriptionColor": "highlight-custom-color-2"
  }
}
```

A block without a button only leaves out `button`, `buttonText` and `buttonLink`, and a block without an image has no `url`, `image_field` or `image_scales`.
