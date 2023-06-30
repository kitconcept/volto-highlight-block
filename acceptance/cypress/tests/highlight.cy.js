import { getSlateEditorAndType } from '../support/slate';

context('Highlight Block Acceptance Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
      path: '/',
      withImage: true,
    });
    cy.autologin();
  });

  it('As editor I can add a Highlight block', () => {
    // Adding Image
    cy.fixture('halfdome2022.jpg').then((encodedImage) => {
      cy.createContent({
        contentType: 'Image',
        contentId: 'my-image',
        contentTitle: 'My Image',
        path: '/document',
        bodyModifier(body) {
          let imageObject = {
            encoding: 'base64',
            filename: 'image.jpg',
            'content-type': 'image/jpg',
          };
          body.image = {
            ...imageObject,
            data: encodedImage,
          };
          return body;
        },
      });
    });

    cy.visit('/document/edit');
    cy.get('.block .slate-editor [contenteditable=true]').click();
    cy.get('.button .block-add-button').click({ force: true });
    cy.get('.blocks-chooser .mostUsed .button.highlight').click({
      force: true,
    });
    cy.get('#sidebar').findByLabelText('Browse the site').click();

    cy.findByLabelText('Browse Document').click();
    cy.findByLabelText('Select My Image').dblclick();

    getSlateEditorAndType(
      '.block.highlight .title [contenteditable=true]',
      'Highlight - Title',
    );

    getSlateEditorAndType(
      '.block.highlight .description [contenteditable=true]',
      'Description Text',
    );

    cy.get('.ui.checkbox:last').click({ force: true });
    cy.get('#field-buttonText').type('read more');

    cy.get(
      '.block-editor-highlight.has--descriptionColor--highlight-custom-color-1',
    ).should('be.visible');
    cy.get('.ui.circular.button.highlight-custom-color-3').click();
    cy.get(
      '.block-editor-highlight.has--descriptionColor--highlight-custom-color-3',
    ).should('be.visible');

    cy.get('.highlight-image-wrapper > img').should('be.visible');

    cy.get('.block.highlight')
      .contains('Highlight - Title')
      .should('be.visible');
    cy.get('.block.highlight')
      .contains('Description Text')
      .should('be.visible');
    cy.get('.block.highlight').contains('read more').should('be.visible');

    cy.get('#toolbar-save').click();

    cy.get(
      '.block.highlight.has--descriptionColor--highlight-custom-color-3',
    ).should('be.visible');
  });
});
