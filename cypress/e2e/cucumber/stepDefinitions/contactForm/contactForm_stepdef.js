import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

beforeEach(function(){
    cy.fixture('contactFormData').as('data')
    cy.fixture('contactFormInvalidData').as('InvalidData')
})

Given('Usuario está na pagina do Formulario',function(){
    cy.visit('https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html')
})

Given('Preenche nome, email, empresa, website, phone e inquiry corretamente', function(){
    cy.get('#name').type(this.data.name)
    cy.get('#email').type(this.data.email)
    cy.get('#company').type(this.data.company)
    cy.get('#website').type(this.data.website)
    cy.get('#phone').type(this.data.phone)
    cy.get('#inquiry').type(this.data.inquiry)
    cy.get('button').click()

    cy.intercept("GET", "https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html", {
        fixture: "mockSucess.json",
    });

})

Given('A mensagem de sucesso é exibida', function(){
    cy.get('#successMessage').should('be.visible')
})

Given('Preenche nome, email, empresa, website, phone e inquiry com dados incorretos', function(){
    cy.get('#name').type(this.InvalidData.name)
    cy.get('#email').type(this.InvalidData.email)
    cy.get('#company').type(this.InvalidData.company)
    cy.get('#website').type(this.InvalidData.website)
    cy.get('#phone').type(this.InvalidData.phone)
    cy.get('#inquiry').type(this.InvalidData.inquiry)
    cy.get('button').click()

    cy.intercept("GET", "https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html", {
        fixture: "mockFailed.json",
    });
})

Given('Valida a exibição da mensagem de campo inválido', function(){
    cy.contains('error', 'Campo nome inválido').should('be.visible');
    cy.contains('error', 'Campo email inválido').should('be.visible');
    cy.contains('error', 'Campo email inválido').should('be.visible');
    cy.contains('error', 'Campo company inválido').should('be.visible');
    cy.contains('error', 'Campo website inválido').should('be.visible');
    cy.contains('error', 'Campo phone inválido').should('be.visible');
    cy.contains('error', 'inquiry').should('be.visible');
})

Given('Clica em submit sem preencher dados', function(){
    cy.get('button').click()
})

Given('Valida a exibição da mensagem do tooltip', function(){
    cy.get('#email').then(($el) => {
        // A propriedade 'validationMessage' deve conter a mensagem de erro
        cy.wrap($el[0].validationMessage).should('contain', 'Preencha este campo.');
    });
})