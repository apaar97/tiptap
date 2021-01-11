context('/api/nodes/document', () => {
  before(() => {
    cy.visit('/api/nodes/document')
  })

  beforeEach(() => {
    cy.get('.ProseMirror').then(([{ editor }]) => {
      editor.commands.setContent('<p></p>')
    })
  })

  it('should return the document in as json', () => {
    cy.get('.ProseMirror').then(([{ editor }]) => {
      const json = editor.getJSON()

      expect(json).to.deep.equal({
        type: 'document',
        content: [
          {
            type: 'paragraph',
          },
        ],
      })
    })
  })
})