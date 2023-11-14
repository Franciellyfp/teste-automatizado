describe('Pesquisar no site blog do Agi', () => {
    beforeEach(() => {
    cy.visit('https://blogdoagi.com.br/');
    });
  
    it('deve pesquisar por assunto específico "Finanças"', () => {
      // Clicar na lupa
    cy.get('#search-open').click();
  
      // Digitar a pesquisa
    cy.get('.desktop-search > .search-form > label > .search-field').type('Finanças');
  
      // Clicar no botão de pesquisa
    cy.get('.desktop-search > .search-form > .search-submit').click();
  
      // Validar que a pesquisa foi realizada
    cy.get('.archive-title').should('contain', 'Resultados da busca por: Finanças');
    });
  
    it('deve pesquisar por "produto ou serviço específico"', () => {
      //Clicar na lupa
    cy.get('#search-open').click();
  
      // Digitar a pesquisa
    cy.get('.desktop-search > .search-form > label > .search-field').type('cartão de crédito');
  
      // Clicar no botão de pesquisa
    cy.get('.desktop-search > .search-form > .search-submit').click();
  
      // Validar que a pesquisa foi realizada
    cy.get('.archive-title').should('contain', 'Resultados da busca por: cartão de crédito');
    });
  
    it('deve pesquisar por "artigo específico"', () => {
      // Clicar na lupa
      cy.get('#search-open').click();
  
      // Digitar a pesquisa
    cy.get('.desktop-search > .search-form > label > .search-field').type('Agibank realiza sua terceira emissão de Letras Financeiras Públicas');
  
      // Clicar no botão de pesquisa
    cy.get('.desktop-search > .search-form > .search-submit').click();
  
      // Validar que a pesquisa foi realizada
      
    cy.get('.archive-title').should('contain', 'Resultados da busca por: Agibank realiza sua terceira emissão de Letras Financeiras Públicas');
    
    });
});


  