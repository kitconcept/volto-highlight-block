# kitconcept's volto-highlight-block Release Notes

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.docs.plone.org/contributing/index.html?highlight=towncrier#change-log-entry
-->

<!-- towncrier release notes start -->

## 4.4.0 (2025-07-23)

### Feature

- Improve text color handling. @danalvrz [#14](https://github.com/kitconcept/volto-highlight-block/issue/14)

## 4.2.0 (2025-03-21)

### Feature

- Add style for color-swatch-widget. @danalvrz [#12](https://github.com/kitconcept/volto-highlight-block/issue/12)

## 4.1.0 (2025-03-19)

### Feature

- Improve support for VLT6 color system. @danalvrz [#11](https://github.com/kitconcept/volto-highlight-block/issue/11)

## 4.0.0 (2024-07-08)

### Breaking

- Use latest Image upload widget @sneridagh

  Breaking:
  - The minimum required Volto versions have changed, so check them out in the README. [#9](https://github.com/kitconcept/volto-highlight-block/issue/9)

### Internal

- New setup @sneridagh [#8](https://github.com/kitconcept/volto-highlight-block/issue/8)

## 3.0.1 (2024-03-23)

### Internal

- Repackage with updated deps and peerDeps @sneridagh [#0](https://github.com/kitconcept/volto-highlight-block/pull/0)

## 3.0.0 (2023-09-29)

### Breaking

- Revert change name field, return to `url` because the transformers hooks into that. Adjust code to it, fix bugs. @sneridagh

  **Warning** Do not use `2.0.0`, it's a brownbag release. [#7](https://github.com/kitconcept/volto-highlight-block/pull/7)


## 2.0.0 (2023-09-28)

### Breaking

- Adapt to Volto 17 Image component @sneridagh
  Use `image` (object) instead of `url` (string) as reference for the selected image. @sneridagh [#6](https://github.com/kitconcept/volto-highlight-block/pull/6)


## 1.0.0 (2023-06-30)

### Feature

- New docker approach for testing @sneridagh [#2](https://github.com/kitconcept/volto-highlight-block/pull/2)
- Acceptance tests @sneridagh [#3](https://github.com/kitconcept/volto-highlight-block/pull/3)
- Improve README, add screenshots @sneridagh [#4](https://github.com/kitconcept/volto-highlight-block/pull/4)
